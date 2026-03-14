const fs = require('fs');
const html = fs.readFileSync('bytendo/index.html', 'utf8');

// Find all SVG elements
const svgs = html.match(/<svg[\s\S]*?<\/svg>/gi) || [];
console.log('SVG count:', svgs.length);
svgs.forEach((svg, i) => {
  console.log(`\n--- SVG #${i + 1} (first 300 chars) ---`);
  console.log(svg.substring(0, 300));
});

// Find all image tags
const imgs = html.match(/<img[^>]*>/gi) || [];
console.log('\n\nIMG count:', imgs.length);
imgs.forEach((img, i) => {
  console.log(`\n--- IMG #${i + 1} ---`);
  console.log(img.substring(0, 300));
});

// Check for "Bytendo" text (our brand replacement)
const bytendoCount = (html.match(/Bytendo/g) || []).length;
console.log('\n\nBytendo mentions:', bytendoCount);

// Check for "Nubien" text (should be zero)
const nubienCount = (html.match(/Nubien/gi) || []).length;
console.log('Nubien mentions:', nubienCount);

// Find data-framer-name containing Logo or logo
const logoNames = html.match(/data-framer-name="[^"]*[Ll]ogo[^"]*"/gi) || [];
console.log('\nLogo data-framer-name:', logoNames);
