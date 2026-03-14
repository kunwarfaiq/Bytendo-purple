const fs = require('fs');
const html = fs.readFileSync('bytendo/index.html', 'utf8');

// Find all unique image URLs to understand which ones are logos
const imgUrls = html.match(/https:\/\/framerusercontent\.com\/images\/[A-Za-z0-9_-]+\.png/g) || [];
const unique = [...new Set(imgUrls)];
console.log('Unique image URLs:', unique.length);
unique.forEach((url, i) => {
  const count = imgUrls.filter(u => u === url).length;
  console.log(`${i + 1}. [${count}x] ${url}`);
});
