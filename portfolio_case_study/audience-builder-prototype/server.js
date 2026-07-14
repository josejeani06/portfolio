const http = require("http");
const https = require("https");
const fs = require("fs");
const path = require("path");
const { URL } = require("url");

const ROOT = __dirname;
const PORT = Number(process.env.PORT || 8001);

const MIME_TYPES = {
  ".css": "text/css; charset=utf-8",
  ".html": "text/html; charset=utf-8",
  ".js": "application/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".png": "image/png",
  ".svg": "image/svg+xml",
  ".txt": "text/plain; charset=utf-8"
};

function sendJson(res, statusCode, body) {
  res.writeHead(statusCode, {
    "Content-Type": "application/json; charset=utf-8",
    "Cache-Control": "no-store"
  });
  res.end(JSON.stringify(body));
}

function serveFile(reqPath, res) {
  const safePath = path.normalize(reqPath).replace(/^(\.\.[/\\])+/, "");
  const filePath = path.join(ROOT, safePath === "/" ? "index.html" : safePath);

  if (!filePath.startsWith(ROOT)) {
    sendJson(res, 403, { error: "Forbidden" });
    return;
  }

  fs.readFile(filePath, (error, content) => {
    if (error) {
      if (error.code === "ENOENT") {
        sendJson(res, 404, { error: "Not found" });
        return;
      }
      sendJson(res, 500, { error: "Failed to read file" });
      return;
    }

    const ext = path.extname(filePath).toLowerCase();
    res.writeHead(200, {
      "Content-Type": MIME_TYPES[ext] || "application/octet-stream",
      "Cache-Control": "no-store"
    });
    res.end(content);
  });
}

function isAllowedProxyTarget(targetUrl) {
  try {
    const parsed = new URL(targetUrl);
    return [
      "tigerweb.geo.census.gov",
      "raw.githubusercontent.com",
      "overpass-api.de"
    ].includes(parsed.hostname);
  } catch {
    return false;
  }
}

function proxyRequest(targetUrl, res) {
  if (!isAllowedProxyTarget(targetUrl)) {
    sendJson(res, 400, { error: "Target host is not allowed" });
    return;
  }

  https.get(targetUrl, {
    headers: {
      Accept: "application/geo+json, application/json, text/plain,*/*",
      "Accept-Language": "en-US,en;q=0.9",
      Referer: "https://tigerweb.geo.census.gov/",
      "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36"
    }
  }, (upstream) => {
    const chunks = [];
    upstream.on("data", (chunk) => chunks.push(chunk));
    upstream.on("end", () => {
      const body = Buffer.concat(chunks);
      res.writeHead(upstream.statusCode || 502, {
        "Content-Type": upstream.headers["content-type"] || "application/octet-stream",
        "Cache-Control": "no-store",
        "Access-Control-Allow-Origin": "*"
      });
      res.end(body);
    });
  }).on("error", (error) => {
    sendJson(res, 502, { error: error.message || "Proxy request failed" });
  });
}

const server = http.createServer((req, res) => {
  const requestUrl = new URL(req.url, `http://127.0.0.1:${PORT}`);

  if (requestUrl.pathname === "/api/proxy") {
    const targetUrl = requestUrl.searchParams.get("url");
    if (!targetUrl) {
      sendJson(res, 400, { error: "Missing url parameter" });
      return;
    }
    proxyRequest(targetUrl, res);
    return;
  }

  serveFile(requestUrl.pathname, res);
});

server.listen(PORT, "127.0.0.1", () => {
  process.stdout.write(`Audience Builder server running at http://127.0.0.1:${PORT}\n`);
});
