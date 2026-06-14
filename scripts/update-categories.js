const fs = require('fs');

const catMap = {
  "category: 'compress'": "category: 'compress-images'",
  "category: 'convert'": "category: 'convert-formats'",
  "category: 'resize'": "category: 'resize-and-scale'",
  "category: 'crop'": "category: 'crop-images'",
  "category: 'metadata'": "category: 'privacy-metadata'",
  "category: 'exam-india'": "category: 'indian-exams'",
  "category: 'passport'": "category: 'passports'",
  "category: 'visa'": "category: 'visas'",
  "category: 'identity-india'": "category: 'indian-id-documents'",
  "category: 'signature'": "category: 'signature-resizer'",
  
  "cat: 'compress'": "cat: 'compress-images'",
  "cat: 'convert'": "cat: 'convert-formats'",
  "cat: 'resize'": "cat: 'resize-and-scale'",
  "cat: 'crop'": "cat: 'crop-images'",
  "cat: 'metadata'": "cat: 'privacy-metadata'",
  "cat: 'exam-india'": "cat: 'indian-exams'",
  "cat: 'passport'": "cat: 'passports'",
  "cat: 'visa'": "cat: 'visas'",
  "cat: 'identity-india'": "cat: 'indian-id-documents'",
  "cat: 'signature'": "cat: 'signature-resizer'"
};

['src/lib/registry/toolRegistry.ts', 'src/lib/registry/complianceTools.ts', 'src/lib/registry/generatedTools.ts', 'scripts/generate-tools.js'].forEach(file => {
  if (fs.existsSync(file)) {
    let content = fs.readFileSync(file, 'utf8');
    for (const [key, value] of Object.entries(catMap)) {
      content = content.split(key).join(value);
    }
    fs.writeFileSync(file, content);
    console.log('Updated ' + file);
  }
});
