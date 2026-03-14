const fs = require('fs');

let html = fs.readFileSync('bytendo/index.html', 'utf8');

// The Nubien brand logo (icon + text, 396x100) used in navbar and footer
const oldLogoUrl = 'https://framerusercontent.com/images/PDnQxgl1tNjGL6DZbMAh0HAtEU.png';
const newLogoPath = 'assets/images/bytendo-logo.png';

const count = (html.match(new RegExp(oldLogoUrl.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g')) || []).length;
console.log('Replacing logo URL, found', count, 'occurrences');

html = html.split(oldLogoUrl).join(newLogoPath);

fs.writeFileSync('bytendo/index.html', html);
console.log('Logo replaced successfully!');
