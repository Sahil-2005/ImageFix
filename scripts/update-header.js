const fs = require('fs');

const file = 'src/components/layout/Header.tsx';
let content = fs.readFileSync(file, 'utf8');

// Replace standard links
content = content.replace(/"\/compress-image-to-50kb"/g, '"/compress-images/compress-image-to-50kb"');
content = content.replace(/"\/compress-image-to-20kb"/g, '"/compress-images/compress-image-to-20kb"');
content = content.replace(/"\/resize-image-to-1920x1080"/g, '"/resize-and-scale/resize-image-to-1920x1080"');
content = content.replace(/"\/convert-png-to-webp"/g, '"/convert-formats/convert-png-to-webp"');
content = content.replace(/"\/convert-png-to-jpg"/g, '"/convert-formats/convert-png-to-jpg"');
content = content.replace(/"\/convert-jpg-to-webp"/g, '"/convert-formats/convert-jpg-to-webp"');

// Replace exam/gov links
content = content.replace(/"\/upsc-photo-resize"/g, '"/indian-exams/upsc-photo-resize"');
content = content.replace(/"\/ssc-cgl-photo-resize"/g, '"/indian-exams/ssc-chsl-photo"'); 
content = content.replace(/"\/pan-card-photo-nsdl"/g, '"/indian-id-documents/pan-card-uti-photo"'); 
content = content.replace(/"\/us-ds160-visa-photo"/g, '"/visas/schengen-visa-photo"'); 
content = content.replace(/"\/uk-passport-photo-resize"/g, '"/passports/uk-passport-photo"');

fs.writeFileSync(file, content);
console.log('Header links updated');
