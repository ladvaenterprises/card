const fs = require('fs');
const path = require('path');

console.log('--- Packaging Mitesh Ladva Digital Card for Vercel & Static Hosting ---');

const distDir = path.join(__dirname, 'dist');

if (!fs.existsSync(distDir)) {
  fs.mkdirSync(distDir, { recursive: true });
}

// Files to copy to dist
const rootFiles = ['index.html', 'style.css', 'card-assets.js', 'app.js', 'README.md'];
rootFiles.forEach(file => {
  const src = path.join(__dirname, file);
  const dest = path.join(distDir, file);
  if (fs.existsSync(src)) {
    fs.copyFileSync(src, dest);
    console.log(`Copied ${file} -> dist/${file}`);
  }
});

// Copy assets directory recursively
const assetsSrc = path.join(__dirname, 'assets');
const assetsDest = path.join(distDir, 'assets');
if (fs.existsSync(assetsSrc)) {
  fs.cpSync(assetsSrc, assetsDest, { recursive: true });
  console.log(`Copied assets/ -> dist/assets/`);
}

console.log('✓ Vercel build output successfully generated in dist/');

