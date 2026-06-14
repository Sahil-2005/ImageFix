import { ToolDefinition } from './types';

export const COMPLIANCE_TOOLS: ToolDefinition[] = [
  // ==========================================
  // INDIA EXAM PHOTOS
  // ==========================================
  {
    slug: 'upsc-photo-resize',
    action: 'resize',
    inputFormats: ['jpg', 'jpeg', 'png', 'webp'],
    outputFormat: 'jpg',
    category: 'indian-exams',
    title: 'Resize Photo for UPSC Online Application | ImageFix',
    metaDescription: 'Free online tool to resize your UPSC CSE/IAS application photo to the exact 20-300KB file size and 350x350 pixel dimensions required by upsc.gov.in.',
    h1: 'UPSC Photo Resizer',
    keywords: ['upsc photo size', 'upsc online photo resize', 'ias photo requirements', 'upsc 300kb photo maker'],
    heroDescription: 'The Union Public Service Commission (UPSC) has strict photo requirements. Use our tool to automatically crop, resize, and compress your photograph to meet the exact IAS/CSE guidelines without losing clarity.',
    adDensity: 'medium',
    settings: [
      { id: 'width', label: 'Width (px)', type: 'number', defaultValue: 350, min: 350, max: 1000 },
      { id: 'height', label: 'Height (px)', type: 'number', defaultValue: 350, min: 350, max: 1000 },
      { id: 'maxSize', label: 'Max Size (KB)', type: 'number', defaultValue: 280, min: 20, max: 300 }
    ],
    compliance: {
      targetWidth: 350, targetHeight: 350, minSizeKB: 20, maxSizeKB: 300,
      backgroundColor: 'white', country: 'IN', docType: 'exam',
      officialSource: 'upsconline.nic.in'
    },
    seoContent: {
      specTable: [
        { label: 'File Size', value: '20 KB to 300 KB' },
        { label: 'Dimensions', value: 'Min 350 x 350 pixels, Max 1000 x 1000 pixels' },
        { label: 'Format', value: 'JPG / JPEG only' },
        { label: 'Background', value: 'Plain White' },
        { label: 'Face Coverage', value: '75% (3/4th) of the photo' },
        { label: 'Recency', value: 'Must not be more than 10 days old' }
      ],
      detailedDescription: 'Applying for the Civil Services Examination requires absolute precision. The UPSC online application portal (ORA) employs strict validation rules that will instantly reject images falling outside their rigid 20 KB to 300 KB limit. Furthermore, the official exam notification explicitly demands a plain white background and a recent photograph where the candidate\'s face occupies at least 75% of the frame. Many candidates face frustration during the final hours of form submission because their smartphone photos are either too large in file size or have incorrect pixel dimensions.\n\nTo compound the difficulty, recent UPSC notifications introduced a new rule: the photograph must not be more than 10 days old from the start of the online application process. Candidates must also ensure that their name and the date the photograph was taken are clearly printed at the bottom of the image. Achieving this while maintaining the delicate balance of a 350x350 minimum pixel ratio and a sub-300KB file size requires specialized tools.\n\nOur free utility handles all the technical heavy lifting directly in your browser. By utilizing advanced client-side HTML5 Canvas processing, your image is securely scaled, cropped, and compressed without ever being uploaded to a remote server. This ensures your DPI, dimensions, and file compression are perfectly aligned with UPSC server requirements, guaranteeing a smooth, error-free application process.',
      rejectionTips: [
        'Avoid submitting photos taken with dark glasses or tinted spectacles. Regular prescription glasses are allowed only if there is no glare.',
        'Ensure the photo is not blurred; low-resolution selfies are the number one cause of rejection during the admit card generation phase.',
        'Do not digitally alter your facial features using beauty filters or AI enhancements.',
        'Make sure both ears are clearly visible and not covered by hair.',
        'If wearing religious headwear, ensure it does not cast a shadow over your face.'
      ]
    },
    howToSteps: [
      'Click the upload area to select your unedited portrait photo.',
      'Our tool automatically detects the aspect ratio and prepares it for the 350x350 pixel format.',
      'The compression engine adjusts the quality to ensure the file is under 300KB but safely above 20KB.',
      'Click "Process" and download your UPSC-compliant JPG file.',
      'Upload the processed file directly to the upsconline.nic.in portal.'
    ],
    faqs: [
      { question: 'What happens if my UPSC photo is under 20 KB?', answer: 'The UPSC portal validator will throw a "File size too small" error and refuse the upload. Our tool prevents this by intelligently adjusting JPEG compression to maintain a file size safely above the 20 KB threshold.' },
      { question: 'Can I upload a PNG file to the UPSC form?', answer: 'No. The official guidelines clearly state that only JPG or JPEG formats are accepted. If you upload a PNG, you will receive an "Invalid Format" error. Our tool automatically converts any uploaded PNGs to the required JPG format.' },
      { question: 'Does the UPSC photo need my name and date printed on it?', answer: 'Yes, according to the latest UPSC Civil Services notification, candidates must have their name and the date the photograph was taken clearly printed at the bottom. We recommend adding this text using a basic photo editor before running the image through our size/compression tool.' },
      { question: 'What should the background color be?', answer: 'The background must be plain white. Photos with dark, busy, or patterned backgrounds risk rejection during the scrutiny phase, which could invalidate your entire application.' },
      { question: 'Why does the portal say my dimensions are wrong?', answer: 'UPSC requires the image to be a minimum of 350 pixels in width and 350 pixels in height, and a maximum of 1000x1000 pixels. Our tool defaults to a perfect 350x350 square to guarantee acceptance.' }
    ],
    relatedSlugs: ['ssc-cgl-photo-resize', 'ibps-po-photo-resize']
  },
  {
    slug: 'ssc-cgl-photo-resize',
    action: 'resize',
    inputFormats: ['jpg', 'jpeg', 'png'],
    outputFormat: 'jpg',
    category: 'indian-exams',
    title: 'SSC CGL & CHSL Photo Resizer Online | 20-50KB Maker',
    metaDescription: 'Instantly format your photo for Staff Selection Commission (SSC) exams. Compress to 20-50KB and resize to 3.5cm x 4.5cm for CGL, CHSL, and GD applications.',
    h1: 'SSC Exam Photo Formatting Tool',
    keywords: ['ssc photo resize online', 'ssc cgl photo size 20 to 50 kb', 'ssc chsl photo format', 'ssc gd photo resizer'],
    heroDescription: 'Don\'t let a technical error ruin your Staff Selection Commission application. Use our dedicated SSC resizer to hit the exact 20-50 KB file size and 3.5x4.5 cm dimensions mandated by the new OTR portal.',
    adDensity: 'high',
    settings: [
      { id: 'width', label: 'Width (px)', type: 'number', defaultValue: 200, min: 100, max: 500 },
      { id: 'height', label: 'Height (px)', type: 'number', defaultValue: 240, min: 120, max: 600 },
      { id: 'maxSize', label: 'Max Size (KB)', type: 'number', defaultValue: 45, min: 20, max: 50 }
    ],
    compliance: {
      targetWidth: 200, targetHeight: 240, minSizeKB: 20, maxSizeKB: 50,
      backgroundColor: 'white', country: 'IN', docType: 'exam',
      physicalSize: '3.5 cm x 4.5 cm', officialSource: 'ssc.gov.in'
    },
    seoContent: {
      specTable: [
        { label: 'File Size Allowed', value: '20 KB to 50 KB' },
        { label: 'Physical Dimensions', value: '3.5 cm width x 4.5 cm height' },
        { label: 'Pixel Dimensions', value: 'Approx 200 x 240 pixels' },
        { label: 'Accepted Format', value: 'JPEG / JPG' },
        { label: 'Recency Requirement', value: 'Taken within the last 3 months' }
      ],
      detailedDescription: 'The Staff Selection Commission (SSC) has recently migrated to a modernized One-Time Registration (OTR) portal at ssc.gov.in. Because the photograph uploaded to the OTR will be used across multiple future exam applications—including CGL, CHSL, MTS, and GD—it is absolutely critical to get the formatting right on the first try. The new system is notoriously strict regarding the 50 KB maximum limit. If your image registers at even 50.1 KB, the upload will fail with a frustrating error message.\n\nBeyond file size, the SSC emphasizes proper framing and physical dimensions. The official requirement states the photo must equate to 3.5 cm in width and 4.5 cm in height. When converted to a digital screen format, this roughly translates to a portrait ratio of 200x240 pixels. Candidates frequently struggle to shrink their modern, multi-megabyte smartphone photos down to this tiny footprint without rendering the image blurry or unrecognizable.\n\nOur specialized utility resolves this by dynamically adjusting JPEG compression algorithms. It securely processes the image in your browser, guaranteeing a final file size between 20 KB and 50 KB while meticulously maintaining the required aspect ratio. This ensures your face remains sharp and clearly identifiable for exam day verification, protecting you from last-minute application rejections.',
      rejectionTips: [
        'Absolutely no caps, hats, or masks are allowed in the photo.',
        'Spectacles with dark or tinted glasses will cause immediate rejection.',
        'Ensure the background is plain white or a very light color; busy backgrounds are flagged.',
        'The photo must not be a miniature or taken from too far away—your face should dominate the frame.',
        'Do not upload "side-profile" images; you must be looking directly at the camera.'
      ]
    },
    howToSteps: [
      'Select the photograph you wish to use for your SSC OTR profile.',
      'Our tool automatically scales the image to the standard 200x240 pixel resolution (matching the 3.5x4.5 cm rule).',
      'The file is compressed using a target of 40-45 KB to safely pass the portal\'s maximum checks.',
      'Review the preview to ensure clarity.',
      'Save the processed JPG and upload it directly to your dashboard at ssc.gov.in.'
    ],
    faqs: [
      { question: 'Why does the SSC portal say my photo is invalid?', answer: 'This usually means the file is either not a JPG, exceeds 50 KB, or has incorrect pixel dimensions. Running it through our tool fixes all three issues simultaneously.' },
      { question: 'Do I need to print the date on my SSC photo?', answer: 'Recent SSC notifications have removed the strict requirement to physically print the date on the photo itself. However, you must still declare via a checkbox during the application that the photo is no more than 3 months old.' },
      { question: 'Can I use a blue background?', answer: 'No. SSC guidelines explicitly mandate a plain white or light-colored background. Using a dark blue or patterned background heavily risks your application being rejected during the manual scrutiny phase.' },
      { question: 'What if my photo becomes blurry after compression?', answer: 'If you start with a very large file, compressing it to under 50KB can cause pixelation. Our tool uses Lanczos resampling to preserve maximum sharpness, but for best results, crop the photo close to your face before uploading.' },
      { question: 'Can I change my photo later in the OTR?', answer: 'While SSC does occasionally provide correction windows, it is a stressful process and sometimes involves fees. It is highly recommended to upload a perfect, compliant photo during your initial One-Time Registration.' }
    ],
    relatedSlugs: ['ssc-signature-resize', 'upsc-photo-resize']
  },
  {
    slug: 'us-ds160-visa-photo',
    action: 'resize',
    inputFormats: ['jpg', 'jpeg'],
    outputFormat: 'jpg',
    category: 'visas',
    title: 'US Visa DS-160 Photo Resizer | 600x600 px Maker',
    metaDescription: 'Format your photo for the US DS-160 Visa application. Resize to 600x600 pixels and compress under 240KB to pass the Department of State validator.',
    h1: 'US DS-160 Visa Photo Tool',
    keywords: ['ds160 photo size', 'us visa photo resize', '600x600 pixel photo', 'us embassy photo upload'],
    heroDescription: 'The U.S. Department of State DS-160 application portal uses an automated photo validator. Use our tool to create a perfect 600x600 pixel square under 240KB, guaranteeing acceptance.',
    adDensity: 'high',
    settings: [
      { id: 'width', label: 'Width (px)', type: 'number', defaultValue: 600, min: 600, max: 1200 },
      { id: 'height', label: 'Height (px)', type: 'number', defaultValue: 600, min: 600, max: 1200 },
      { id: 'maxSize', label: 'Max Size (KB)', type: 'number', defaultValue: 230, min: 50, max: 240 }
    ],
    compliance: {
      targetWidth: 600, targetHeight: 600, minSizeKB: 50, maxSizeKB: 240,
      backgroundColor: 'white', country: 'US', docType: 'visa',
      physicalSize: '2 x 2 inches (51 x 51 mm)', officialSource: 'travel.state.gov'
    },
    seoContent: {
      specTable: [
        { label: 'Pixel Dimensions', value: 'Min 600 x 600 px, Max 1200 x 1200 px' },
        { label: 'Aspect Ratio', value: 'Exactly 1:1 (Square)' },
        { label: 'Max File Size', value: '240 KB' },
        { label: 'Format', value: 'JPEG (.jpg)' },
        { label: 'Color Profile', value: '24-bit color sRGB' },
        { label: 'Head Size', value: 'Between 50% and 69% of image height' }
      ],
      detailedDescription: 'Applying for a U.S. Visa—whether a B1/B2 tourist visa, F1 student visa, or H1B work visa—requires completing the exhaustive DS-160 online form. The final, and often most frustrating, step of this form is the digital photo upload. The U.S. Consular Electronic Application Center (CEAC) utilizes advanced facial recognition algorithms that act as a strict gatekeeper. If your digital photo does not meet their exact technical parameters, you literally cannot submit the application.\n\nThe core requirements are unforgiving: your image must be perfectly square (a 1:1 aspect ratio), with a minimum resolution of 600x600 pixels and a maximum of 1200x1200 pixels. The file must be compressed to less than 240 KB in a standard JPEG format. Furthermore, strict biometric composition rules apply. The head must measure between 50% and 69% of the total image height, and the eyes must be located between 56% and 69% from the bottom of the photo.\n\nOur browser-based US Visa resizer takes the guesswork out of this process. It automatically forces the 1:1 square crop, outputs exactly 600x600 pixels, and manages the file size footprint. This ensures your file\'s digital architecture passes the CEAC\'s automated validator flawlessly, saving you time and preventing delays in scheduling your embassy interview.',
      rejectionTips: [
        'Eyeglasses are strictly prohibited. Do not wear any glasses, even prescription ones, under any circumstances.',
        'The background must be plain white or off-white. Look out for shadows cast by your head on the wall behind you.',
        'Do not digitally alter, retouch, or apply filters to your facial features to remove blemishes.',
        'Ensure your photo is recent (taken within the last 6 months) and reflects your current appearance.',
        'Head coverings are only allowed for religious purposes, and they must not cast shadows or obscure any part of the face.'
      ]
    },
    howToSteps: [
      'Select a high-resolution, unedited photograph taken against a bright white background.',
      'Our tool enforces a strict 1:1 square crop. Adjust the framing so your head is centered.',
      'The engine optimizes the output to exactly 600x600 pixels.',
      'JPEG compression is applied to ensure the file footprint rests safely under the 240 KB limit.',
      'Download the file and upload it to the CEAC portal to receive the green "Photo Passed" checkmark.'
    ],
    faqs: [
      { question: 'What happens if my photo fails the DS-160 validator?', answer: 'If the automated system rejects your photo, you cannot proceed to the confirmation page. You must reformat the image to the required 600x600 pixels and under 240KB, and try uploading again.' },
      { question: 'Can I use a scanned copy of my physical 2x2 passport photo?', answer: 'Yes, if you scan a physical 2x2 inch print at exactly 300 DPI, it will yield a 600x600 pixel digital image. However, uploading a native digital file usually results in higher clarity and a better chance of passing the algorithm.' },
      { question: 'Is the Diversity Visa (DV) Lottery photo the same as the DS-160?', answer: 'Yes, the Diversity Visa (Green Card) Lottery uses the exact same technical specifications: a 600x600 pixel square, maximum 240 KB, and no eyeglasses.' },
      { question: 'Can I smile in my US Visa photo?', answer: 'The U.S. Department of State requires a neutral facial expression with both eyes open and mouth closed. A natural, unexaggerated smile is sometimes accepted, but a neutral expression is the safest route.' },
      { question: 'What if my photo passes online but the embassy rejects it?', answer: 'The online tool only checks technical specs (size, pixels, format). The consular officer makes the final decision on quality and composition. Always bring a physical 2x2 print to your interview as a backup.' }
    ],
    relatedSlugs: ['uk-passport-photo-resize', 'indian-passport-photo-resize']
  },
  {
    slug: 'uk-passport-photo-resize',
    action: 'resize',
    inputFormats: ['jpg', 'jpeg'],
    outputFormat: 'jpg',
    category: 'passports',
    title: 'UK Passport & Visa Photo Maker | Digital Online Form',
    metaDescription: 'Resize your photo for UK Passport and UKVI Visa online applications. Create compliant images that meet the HM Passport Office strict digital guidelines.',
    h1: 'UK Digital Passport Photo Formatter',
    keywords: ['uk passport photo size', 'ukvi visa photo online', 'uk digital passport photo', 'british passport photo requirements'],
    heroDescription: 'Applying for a British Passport or UK Visa online? HM Passport Office requires digital photos with specific framing and lighting. Format your image to perfection locally on your device.',
    adDensity: 'low',
    settings: [
      { id: 'width', label: 'Width (px)', type: 'number', defaultValue: 600, min: 600, max: 900 },
      { id: 'height', label: 'Height (px)', type: 'number', defaultValue: 750, min: 750, max: 1200 },
      { id: 'maxSize', label: 'Max Size (KB)', type: 'number', defaultValue: 500, min: 50, max: 10000 }
    ],
    compliance: {
      targetWidth: 600, targetHeight: 750, minSizeKB: 50, maxSizeKB: 10000,
      backgroundColor: 'light', country: 'GB', docType: 'passport',
      officialSource: 'gov.uk'
    },
    seoContent: {
      specTable: [
        { label: 'Minimum Dimensions', value: '600 pixels wide x 750 pixels tall' },
        { label: 'File Size Range', value: '50 KB to 10 MB' },
        { label: 'Format', value: 'JPEG' },
        { label: 'Background Color', value: 'Plain light-coloured (light grey or cream)' },
        { label: 'Facial Expression', value: 'Neutral, mouth completely closed' },
        { label: 'Head Size', value: 'Head must be 29mm to 34mm high (in physical equivalent)' }
      ],
      detailedDescription: 'The United Kingdom’s online passport application system relies heavily on direct digital photo uploads rather than scanning physical prints. HM Passport Office (HMPO) dictates that digital files must be at least 600 pixels wide and 750 pixels tall, resulting in a specific 4:5 portrait aspect ratio. Unlike many other nations that force heavy compression, the UK allows file sizes up to a massive 10 MB. They prioritize high-resolution clarity for their biometric software over saving server space.\n\nCrucially, the UK has unique rules regarding lighting and background. The background must not be pure white; it should be light grey or cream to provide adequate contrast and prevent the subject from blending into the backdrop. Furthermore, there must be absolutely no "red-eye", and any glare on glasses will cause immediate rejection. HMPO\'s automated checking tool is highly sensitive to facial expressions—even a slight parting of the lips will flag the photo for manual review or outright rejection.\n\nOur specialized tool formats your image to these exact UK specifications. It locks the aspect ratio to the required 600x750 portrait format, ensures the output is a high-quality JPEG, and prevents over-compression, keeping your file well within the 50 KB to 10 MB sweet spot.',
      rejectionTips: [
        'A pure white background is discouraged by HMPO; use a light grey or cream wall to ensure proper contrast.',
        'There must be absolutely no shadows on your face or on the background behind you. Use flat, even lighting.',
        'Your mouth must be completely closed. A smile that parts the lips will result in an automated rejection.',
        'Ensure no hair covers any part of your eyes. Tuck long hair behind your ears.',
        'While glasses are permitted if necessary, it is highly recommended to remove them to avoid glare and frame obstruction.'
      ]
    },
    howToSteps: [
      'Have someone take a photo of you from chest-up against a light-coloured (not pure white) wall.',
      'Upload the image to our formatter to set the correct 600x750 portrait aspect ratio.',
      'Position your head in the center of the crop box, leaving space above your head and showing your upper shoulders.',
      'Ensure the final file is saved as an uncompressed, high-quality JPEG.',
      'Use the generated file during your gov.uk online application.'
    ],
    faqs: [
      { question: 'Why does the UK reject pure white backgrounds?', answer: 'HM Passport Office uses automated facial mapping. A pure white background can sometimes blend with lighter skin tones or white clothing, disrupting the software\'s ability to detect the edge of the subject.' },
      { question: 'Can I take a selfie for my UK passport?', answer: 'No. The official guidelines explicitly state that selfies are not acceptable. The camera must be held at least 1.5 meters away to prevent facial distortion, which requires another person or a tripod.' },
      { question: 'Are glasses allowed?', answer: 'It is highly recommended to remove glasses entirely. Even minor glare or thick frames partially covering the eye will cause the online system to reject the photo.' },
      { question: 'What does "plain expression" mean?', answer: 'It means you must look directly at the camera with a relaxed face, eyebrows relaxed, and your mouth completely closed. Do not smile or frown.' },
      { question: 'Can I use this photo for a UK Visa?', answer: 'Yes, UK Visas and Immigration (UKVI) uses the same digital photo standards as HM Passport Office.' }
    ],
    relatedSlugs: ['us-ds160-visa-photo', 'indian-passport-photo-resize']
  },
  {
    slug: 'pan-card-photo-nsdl',
    action: 'resize',
    inputFormats: ['jpg', 'jpeg', 'png'],
    outputFormat: 'jpg',
    category: 'indian-id-documents',
    title: 'PAN Card Photo Resizer NSDL | 200 DPI & 50KB',
    metaDescription: 'Resize your photo for NSDL PAN Card applications. Instantly format to 3.5x2.5 cm, 200 DPI, and under 50KB to prevent NSDL portal rejection.',
    h1: 'NSDL PAN Card Photo Formatter',
    keywords: ['pan card photo size', 'nsdl photo resize 200 dpi', 'pan card photo 50kb', 'protean pan application'],
    heroDescription: 'Applying for a PAN card via Protean (NSDL)? The portal will instantly reject photos with incorrect dimensions or DPI. Format your photo to exactly 3.5x2.5 cm and 50 KB.',
    adDensity: 'medium',
    settings: [
      { id: 'width', label: 'Width (px)', type: 'number', defaultValue: 197, min: 100, max: 300 },
      { id: 'height', label: 'Height (px)', type: 'number', defaultValue: 276, min: 150, max: 400 },
      { id: 'maxSize', label: 'Max Size (KB)', type: 'number', defaultValue: 45, min: 10, max: 50 }
    ],
    compliance: {
      targetWidth: 197, targetHeight: 276, minSizeKB: 10, maxSizeKB: 50,
      backgroundColor: 'white', country: 'IN', docType: 'identity',
      physicalSize: '2.5 cm (W) x 3.5 cm (H)', requiredDPI: 200,
      officialSource: 'proteantech.in'
    },
    seoContent: {
      specTable: [
        { label: 'Physical Dimensions', value: '2.5 cm (width) x 3.5 cm (height)' },
        { label: 'Resolution', value: '200 DPI' },
        { label: 'Max File Size', value: '50 KB' },
        { label: 'Format', value: 'JPEG / JPG' },
        { label: 'Background', value: 'Plain White' },
        { label: 'Orientation', value: 'Portrait' }
      ],
      detailedDescription: 'The Income Tax Department authorizes Protean (formerly NSDL) to process Permanent Account Number (PAN) card applications. Their online portal employs rigid validation scripts that reject file uploads failing to meet exact technical specifications. For NSDL, your photograph must be exactly 2.5 cm wide by 3.5 cm high, scanned at a resolution of 200 DPI, and the file size must not exceed 50 KB.\n\nNavigating these requirements in standard photo editors is complex because "DPI" is a print metric that doesn\'t directly translate to digital screens without mathematical conversion. A 2.5x3.5 cm image at 200 DPI equals roughly 197x276 pixels. If you upload a standard passport photo (which is typically 3.5x4.5 cm), the NSDL portal will either stretch the image to fit its database or reject it entirely, causing frustrating delays in receiving your PAN card.\n\nOur dedicated utility automatically calculates the necessary pixel dimensions and applies targeted compression to satisfy the NSDL gateway. By processing the image client-side, we ensure your private identity documents remain completely secure and are never uploaded to our servers.',
      rejectionTips: [
        'The aspect ratio is critical. A standard 3.5x4.5 cm passport photo will be stretched or rejected; use our tool to crop it to 2.5x3.5 cm.',
        'Ensure the photo is clear and not overly compressed to the point of pixelation.',
        'Use a plain white background; colored backgrounds often lead to manual rejection during printing.',
        'Do not staple or pin the physical photo before scanning, as marks on the face invalidate the image.',
        'Ensure the photograph is recent—ideally taken within the last 6 months.'
      ]
    },
    howToSteps: [
      'Upload your scanned photograph or high-quality digital portrait.',
      'The engine enforces the NSDL 2.5:3.5 aspect ratio and scales the image to the 200 DPI pixel equivalent.',
      'Compression is tuned to guarantee a final file size safely under 50 KB.',
      'Review the preview to ensure your face is not stretched or distorted.',
      'Download the file and upload it smoothly to the Protean (NSDL) portal.'
    ],
    faqs: [
      { question: 'Is NSDL different from UTIITSL for PAN cards?', answer: 'Yes. NSDL requires 3.5x2.5 cm at 200 DPI (Max 50KB), whereas UTIITSL requires 213x213 pixels at 300 DPI (Max 30KB). This specific tool is configured for NSDL applications.' },
      { question: 'How do I know my DPI is correct?', answer: 'DPI (Dots Per Inch) is a print metric. By scaling your image to the correct mathematical pixel dimensions (approx 197x276 pixels for 2.5x3.5 cm at 200 DPI), the digital upload system will accept it as compliant.' },
      { question: 'Why does the portal say "Invalid File Format"?', answer: 'You are likely trying to upload a PNG or PDF. NSDL strictly accepts only JPG/JPEG files for the photograph and signature sections.' },
      { question: 'Can I wear spectacles in my PAN photo?', answer: 'Yes, normal spectacles are allowed, but there must be no flash reflection on the lenses, and the eyes must be clearly visible.' },
      { question: 'Is my data safe?', answer: 'Absolutely. ImageFix uses HTML5 Canvas technology to process your photo entirely within your web browser. The image is never sent to our servers.' }
    ],
    relatedSlugs: ['ssc-cgl-photo-resize', 'upsc-photo-resize']
  }
];
