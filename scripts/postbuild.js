import { copyFileSync, existsSync, mkdirSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const projectRoot = join(__dirname, '..');
const publicDir = join(projectRoot, 'public');
const distDir = join(projectRoot, 'dist');

console.log('Running postbuild script...');

// Ensure dist directory exists
if (!existsSync(distDir)) {
  mkdirSync(distDir, { recursive: true });
}

// Copy robots.txt
const robotsSrc = join(publicDir, 'robots.txt');
const robotsDest = join(distDir, 'robots.txt');
if (existsSync(robotsSrc)) {
  copyFileSync(robotsSrc, robotsDest);
  console.log('✓ Copied robots.txt to dist/');
}

// Copy sitemap.xml
const sitemapSrc = join(publicDir, 'sitemap.xml');
const sitemapDest = join(distDir, 'sitemap.xml');
if (existsSync(sitemapSrc)) {
  copyFileSync(sitemapSrc, sitemapDest);
  console.log('✓ Copied sitemap.xml to dist/');
}

console.log('Postbuild complete!');
