/* Pull the design system's own browser build out of the installed package.
 *
 * There is no bundling here on purpose. @ivancreatelabs/design-system ships
 * `./global` — an IIFE that puts every component on window.IVDS with React left
 * as the page's global — so this script only resolves it through node_modules
 * and copies it, along with the package's tokens. Nothing in ds/ is authored
 * here; re-running this is how you take a design system upgrade.
 *
 *   npm run build:ds
 */
import { createRequire } from 'node:module';
import fs from 'node:fs';
import path from 'node:path';

const require = createRequire(import.meta.url);
const pkg = require('@ivancreatelabs/design-system/package.json');
const OUT = path.join(path.resolve(import.meta.dirname, '..'), 'ds');

const files = [
  ['@ivancreatelabs/design-system/global', 'ivanlabs-design-system.js'],
  ['@ivancreatelabs/design-system/tokens.css', 'tokens.css'],
  ['@ivancreatelabs/design-system/typography.css', 'typography.css'],
];

for (const [specifier, name] of files) {
  fs.copyFileSync(require.resolve(specifier), path.join(OUT, name));
}

// React is the package's peer dependency, so it comes from the same install.
// Its UMD builds sit outside react's `exports` map, so resolve the package root
// and walk to them rather than asking for the subpath directly.
for (const [name, file] of [['react', 'react.production.min.js'], ['react-dom', 'react-dom.production.min.js']]) {
  const root = path.dirname(require.resolve(`${name}/package.json`));
  fs.copyFileSync(path.join(root, 'umd', file), path.join(OUT, `${name}.js`));
}

fs.writeFileSync(path.join(OUT, 'VERSION.txt'), `${pkg.version}\n`);
console.log(`ds/ ← @ivancreatelabs/design-system@${pkg.version} (${files.map(([, n]) => n).join(', ')})`);
