const fs = require('fs');

// Create the new directories
fs.mkdirSync('src/app/[category]/[tool]', { recursive: true });

// Move the category page
fs.renameSync('src/app/category/[id]/page.tsx', 'src/app/[category]/page.tsx');

// Move the tool page and layout
fs.renameSync('src/app/[tool]/page.tsx', 'src/app/[category]/[tool]/page.tsx');
if (fs.existsSync('src/app/[tool]/layout.tsx')) {
  fs.renameSync('src/app/[tool]/layout.tsx', 'src/app/[category]/[tool]/layout.tsx');
}

// Clean up old directories
fs.rmSync('src/app/category', { recursive: true, force: true });
fs.rmSync('src/app/[tool]', { recursive: true, force: true });

console.log('Successfully restructured App Router directories.');
