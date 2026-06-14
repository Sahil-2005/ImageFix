import { ToolDefinition } from './types';

export const GENERATED_TOOLS: ToolDefinition[] = [
  {
    slug: 'neet-photo-resize',
    action: 'resize',
    inputFormats: ['jpg', 'jpeg', 'png', 'webp'],
    outputFormat: 'jpg',
    category: 'indian-exams',
    title: 'Resize NEET Photo Online Free | ImageFix',
    metaDescription: 'Free online tool to resize your NEET application photo to the exact 10-200KB size and 413x531 pixel dimensions required.',
    h1: 'NEET Resizer',
    keywords: ['NEET photo size', 'NEET photo resize', 'NEET photo requirements'],
    heroDescription: 'The NEET has strict photo requirements. Use our tool to automatically crop, resize, and compress your photograph to meet the exact guidelines without losing clarity.',
    adDensity: 'medium',
    settings: [
      { id: 'width', label: 'Width (px)', type: 'number', defaultValue: 413, min: 100, max: 2000 },
      { id: 'height', label: 'Height (px)', type: 'number', defaultValue: 531, min: 100, max: 2000 },
      { id: 'maxSize', label: 'Max Size (KB)', type: 'number', defaultValue: 199, min: 10, max: 200 }
    ],
    compliance: {
      targetWidth: 413, targetHeight: 531, minSizeKB: 10, maxSizeKB: 200,
      backgroundColor: 'white', country: 'XX', docType: 'exam'
    },
    seoContent: {
      specTable: [
        { label: 'File Size', value: '10 KB to 200 KB' },
        { label: 'Dimensions', value: '413 x 531 pixels' },
        { label: 'Format', value: 'JPG / JPEG only' },
        { label: 'Background', value: 'Plain White' }
      ],
      detailedDescription: 'Applying for the NEET requires absolute precision. The online application portal employs strict validation rules that will instantly reject images falling outside their rigid 10 KB to 200 KB limit. Furthermore, the official notification explicitly demands a plain white background. Many candidates face frustration during the final hours of form submission because their smartphone photos are either too large in file size or have incorrect pixel dimensions.\n\nOur free utility handles all the technical heavy lifting directly in your browser. By utilizing advanced client-side HTML5 Canvas processing, your image is securely scaled, cropped, and compressed without ever being uploaded to a remote server. This ensures your DPI, dimensions, and file compression are perfectly aligned with server requirements, guaranteeing a smooth, error-free application process.',
      rejectionTips: [
        'Avoid submitting photos taken with dark glasses or tinted spectacles. Regular prescription glasses are allowed only if there is no glare.',
        'Ensure the photo is not blurred; low-resolution selfies are the number one cause of rejection.',
        'Do not digitally alter your facial features using beauty filters or AI enhancements.'
      ]
    },
    howToSteps: [
      'Click the upload area to select your unedited portrait photo.',
      'Our tool automatically detects the aspect ratio and prepares it for the 413x531 pixel format.',
      'The compression engine adjusts the quality to ensure the file is under 200KB.',
      'Click download and instantly receive your compliant photo.'
    ],
    faqs: [
      { question: 'Why is my NEET photo getting rejected?', answer: 'The most common reasons for rejection are file size (must be under 200KB), incorrect dimensions (413x531), or a dark/cluttered background. Our tool automatically fixes the size and dimensions.' },
      { question: 'Is it safe to upload my photo here?', answer: 'Yes, 100% safe. Your photo is never uploaded to any server. All processing happens entirely within your web browser using HTML5 technologies.' },
      { question: 'Can I use a photo taken with my phone?', answer: 'Yes, as long as you stand against a plain white wall with good lighting. Once you take the photo, use our tool to crop it to the correct proportions and compress the file size.' }
    ],
    relatedSlugs: []
  },
  {
    slug: 'jee-main-photo',
    action: 'resize',
    inputFormats: ['jpg', 'jpeg', 'png', 'webp'],
    outputFormat: 'jpg',
    category: 'indian-exams',
    title: 'Resize JEE Main Photo Online Free | ImageFix',
    metaDescription: 'Free online tool to resize your JEE Main application photo to the exact 10-200KB size and 413x531 pixel dimensions required.',
    h1: 'JEE Main Resizer',
    keywords: ['JEE Main photo size', 'JEE Main photo resize', 'JEE Main photo requirements'],
    heroDescription: 'The JEE Main has strict photo requirements. Use our tool to automatically crop, resize, and compress your photograph to meet the exact guidelines without losing clarity.',
    adDensity: 'medium',
    settings: [
      { id: 'width', label: 'Width (px)', type: 'number', defaultValue: 413, min: 100, max: 2000 },
      { id: 'height', label: 'Height (px)', type: 'number', defaultValue: 531, min: 100, max: 2000 },
      { id: 'maxSize', label: 'Max Size (KB)', type: 'number', defaultValue: 199, min: 10, max: 200 }
    ],
    compliance: {
      targetWidth: 413, targetHeight: 531, minSizeKB: 10, maxSizeKB: 200,
      backgroundColor: 'white', country: 'XX', docType: 'exam'
    },
    seoContent: {
      specTable: [
        { label: 'File Size', value: '10 KB to 200 KB' },
        { label: 'Dimensions', value: '413 x 531 pixels' },
        { label: 'Format', value: 'JPG / JPEG only' },
        { label: 'Background', value: 'Plain White' }
      ],
      detailedDescription: 'Applying for the JEE Main requires absolute precision. The online application portal employs strict validation rules that will instantly reject images falling outside their rigid 10 KB to 200 KB limit. Furthermore, the official notification explicitly demands a plain white background. Many candidates face frustration during the final hours of form submission because their smartphone photos are either too large in file size or have incorrect pixel dimensions.\n\nOur free utility handles all the technical heavy lifting directly in your browser. By utilizing advanced client-side HTML5 Canvas processing, your image is securely scaled, cropped, and compressed without ever being uploaded to a remote server. This ensures your DPI, dimensions, and file compression are perfectly aligned with server requirements, guaranteeing a smooth, error-free application process.',
      rejectionTips: [
        'Avoid submitting photos taken with dark glasses or tinted spectacles. Regular prescription glasses are allowed only if there is no glare.',
        'Ensure the photo is not blurred; low-resolution selfies are the number one cause of rejection.',
        'Do not digitally alter your facial features using beauty filters or AI enhancements.'
      ]
    },
    howToSteps: [
      'Click the upload area to select your unedited portrait photo.',
      'Our tool automatically detects the aspect ratio and prepares it for the 413x531 pixel format.',
      'The compression engine adjusts the quality to ensure the file is under 200KB.',
      'Click download and instantly receive your compliant photo.'
    ],
    faqs: [
      { question: 'Why is my JEE Main photo getting rejected?', answer: 'The most common reasons for rejection are file size (must be under 200KB), incorrect dimensions (413x531), or a dark/cluttered background. Our tool automatically fixes the size and dimensions.' },
      { question: 'Is it safe to upload my photo here?', answer: 'Yes, 100% safe. Your photo is never uploaded to any server. All processing happens entirely within your web browser using HTML5 technologies.' },
      { question: 'Can I use a photo taken with my phone?', answer: 'Yes, as long as you stand against a plain white wall with good lighting. Once you take the photo, use our tool to crop it to the correct proportions and compress the file size.' }
    ],
    relatedSlugs: []
  },
  {
    slug: 'gate-photo-resize',
    action: 'resize',
    inputFormats: ['jpg', 'jpeg', 'png', 'webp'],
    outputFormat: 'jpg',
    category: 'indian-exams',
    title: 'Resize GATE Photo Photo Online Free | ImageFix',
    metaDescription: 'Free online tool to resize your GATE Photo application photo to the exact 20-200KB size and 480x640 pixel dimensions required.',
    h1: 'GATE Photo Resizer',
    keywords: ['GATE Photo photo size', 'GATE Photo photo resize', 'GATE Photo photo requirements'],
    heroDescription: 'The GATE Photo has strict photo requirements. Use our tool to automatically crop, resize, and compress your photograph to meet the exact guidelines without losing clarity.',
    adDensity: 'medium',
    settings: [
      { id: 'width', label: 'Width (px)', type: 'number', defaultValue: 480, min: 100, max: 2000 },
      { id: 'height', label: 'Height (px)', type: 'number', defaultValue: 640, min: 100, max: 2000 },
      { id: 'maxSize', label: 'Max Size (KB)', type: 'number', defaultValue: 199, min: 20, max: 200 }
    ],
    compliance: {
      targetWidth: 480, targetHeight: 640, minSizeKB: 20, maxSizeKB: 200,
      backgroundColor: 'white', country: 'XX', docType: 'exam'
    },
    seoContent: {
      specTable: [
        { label: 'File Size', value: '20 KB to 200 KB' },
        { label: 'Dimensions', value: '480 x 640 pixels' },
        { label: 'Format', value: 'JPG / JPEG only' },
        { label: 'Background', value: 'Plain White' }
      ],
      detailedDescription: 'Applying for the GATE Photo requires absolute precision. The online application portal employs strict validation rules that will instantly reject images falling outside their rigid 20 KB to 200 KB limit. Furthermore, the official notification explicitly demands a plain white background. Many candidates face frustration during the final hours of form submission because their smartphone photos are either too large in file size or have incorrect pixel dimensions.\n\nOur free utility handles all the technical heavy lifting directly in your browser. By utilizing advanced client-side HTML5 Canvas processing, your image is securely scaled, cropped, and compressed without ever being uploaded to a remote server. This ensures your DPI, dimensions, and file compression are perfectly aligned with server requirements, guaranteeing a smooth, error-free application process.',
      rejectionTips: [
        'Avoid submitting photos taken with dark glasses or tinted spectacles. Regular prescription glasses are allowed only if there is no glare.',
        'Ensure the photo is not blurred; low-resolution selfies are the number one cause of rejection.',
        'Do not digitally alter your facial features using beauty filters or AI enhancements.'
      ]
    },
    howToSteps: [
      'Click the upload area to select your unedited portrait photo.',
      'Our tool automatically detects the aspect ratio and prepares it for the 480x640 pixel format.',
      'The compression engine adjusts the quality to ensure the file is under 200KB.',
      'Click download and instantly receive your compliant photo.'
    ],
    faqs: [
      { question: 'Why is my GATE Photo photo getting rejected?', answer: 'The most common reasons for rejection are file size (must be under 200KB), incorrect dimensions (480x640), or a dark/cluttered background. Our tool automatically fixes the size and dimensions.' },
      { question: 'Is it safe to upload my photo here?', answer: 'Yes, 100% safe. Your photo is never uploaded to any server. All processing happens entirely within your web browser using HTML5 technologies.' },
      { question: 'Can I use a photo taken with my phone?', answer: 'Yes, as long as you stand against a plain white wall with good lighting. Once you take the photo, use our tool to crop it to the correct proportions and compress the file size.' }
    ],
    relatedSlugs: []
  },
  {
    slug: 'gate-signature',
    action: 'resize',
    inputFormats: ['jpg', 'jpeg', 'png', 'webp'],
    outputFormat: 'jpg',
    category: 'signature-resizer',
    title: 'Resize GATE Signature Photo Online Free | ImageFix',
    metaDescription: 'Free online tool to resize your GATE Signature application photo to the exact 5-200KB size and 530x260 pixel dimensions required.',
    h1: 'GATE Signature Resizer',
    keywords: ['GATE Signature photo size', 'GATE Signature photo resize', 'GATE Signature photo requirements'],
    heroDescription: 'The GATE Signature has strict photo requirements. Use our tool to automatically crop, resize, and compress your photograph to meet the exact guidelines without losing clarity.',
    adDensity: 'medium',
    settings: [
      { id: 'width', label: 'Width (px)', type: 'number', defaultValue: 530, min: 100, max: 2000 },
      { id: 'height', label: 'Height (px)', type: 'number', defaultValue: 260, min: 100, max: 2000 },
      { id: 'maxSize', label: 'Max Size (KB)', type: 'number', defaultValue: 199, min: 5, max: 200 }
    ],
    compliance: {
      targetWidth: 530, targetHeight: 260, minSizeKB: 5, maxSizeKB: 200,
      backgroundColor: 'white', country: 'XX', docType: 'exam'
    },
    seoContent: {
      specTable: [
        { label: 'File Size', value: '5 KB to 200 KB' },
        { label: 'Dimensions', value: '530 x 260 pixels' },
        { label: 'Format', value: 'JPG / JPEG only' },
        { label: 'Background', value: 'Plain White' }
      ],
      detailedDescription: 'Applying for the GATE Signature requires absolute precision. The online application portal employs strict validation rules that will instantly reject images falling outside their rigid 5 KB to 200 KB limit. Furthermore, the official notification explicitly demands a plain white background. Many candidates face frustration during the final hours of form submission because their smartphone photos are either too large in file size or have incorrect pixel dimensions.\n\nOur free utility handles all the technical heavy lifting directly in your browser. By utilizing advanced client-side HTML5 Canvas processing, your image is securely scaled, cropped, and compressed without ever being uploaded to a remote server. This ensures your DPI, dimensions, and file compression are perfectly aligned with server requirements, guaranteeing a smooth, error-free application process.',
      rejectionTips: [
        'Avoid submitting photos taken with dark glasses or tinted spectacles. Regular prescription glasses are allowed only if there is no glare.',
        'Ensure the photo is not blurred; low-resolution selfies are the number one cause of rejection.',
        'Do not digitally alter your facial features using beauty filters or AI enhancements.'
      ]
    },
    howToSteps: [
      'Click the upload area to select your unedited portrait photo.',
      'Our tool automatically detects the aspect ratio and prepares it for the 530x260 pixel format.',
      'The compression engine adjusts the quality to ensure the file is under 200KB.',
      'Click download and instantly receive your compliant photo.'
    ],
    faqs: [
      { question: 'Why is my GATE Signature photo getting rejected?', answer: 'The most common reasons for rejection are file size (must be under 200KB), incorrect dimensions (530x260), or a dark/cluttered background. Our tool automatically fixes the size and dimensions.' },
      { question: 'Is it safe to upload my photo here?', answer: 'Yes, 100% safe. Your photo is never uploaded to any server. All processing happens entirely within your web browser using HTML5 technologies.' },
      { question: 'Can I use a photo taken with my phone?', answer: 'Yes, as long as you stand against a plain white wall with good lighting. Once you take the photo, use our tool to crop it to the correct proportions and compress the file size.' }
    ],
    relatedSlugs: []
  },
  {
    slug: 'ibps-po-photo',
    action: 'resize',
    inputFormats: ['jpg', 'jpeg', 'png', 'webp'],
    outputFormat: 'jpg',
    category: 'indian-exams',
    title: 'Resize IBPS PO Photo Online Free | ImageFix',
    metaDescription: 'Free online tool to resize your IBPS PO application photo to the exact 20-50KB size and 200x230 pixel dimensions required.',
    h1: 'IBPS PO Resizer',
    keywords: ['IBPS PO photo size', 'IBPS PO photo resize', 'IBPS PO photo requirements'],
    heroDescription: 'The IBPS PO has strict photo requirements. Use our tool to automatically crop, resize, and compress your photograph to meet the exact guidelines without losing clarity.',
    adDensity: 'medium',
    settings: [
      { id: 'width', label: 'Width (px)', type: 'number', defaultValue: 200, min: 100, max: 2000 },
      { id: 'height', label: 'Height (px)', type: 'number', defaultValue: 230, min: 100, max: 2000 },
      { id: 'maxSize', label: 'Max Size (KB)', type: 'number', defaultValue: 49, min: 20, max: 50 }
    ],
    compliance: {
      targetWidth: 200, targetHeight: 230, minSizeKB: 20, maxSizeKB: 50,
      backgroundColor: 'white', country: 'XX', docType: 'exam'
    },
    seoContent: {
      specTable: [
        { label: 'File Size', value: '20 KB to 50 KB' },
        { label: 'Dimensions', value: '200 x 230 pixels' },
        { label: 'Format', value: 'JPG / JPEG only' },
        { label: 'Background', value: 'Plain White' }
      ],
      detailedDescription: 'Applying for the IBPS PO requires absolute precision. The online application portal employs strict validation rules that will instantly reject images falling outside their rigid 20 KB to 50 KB limit. Furthermore, the official notification explicitly demands a plain white background. Many candidates face frustration during the final hours of form submission because their smartphone photos are either too large in file size or have incorrect pixel dimensions.\n\nOur free utility handles all the technical heavy lifting directly in your browser. By utilizing advanced client-side HTML5 Canvas processing, your image is securely scaled, cropped, and compressed without ever being uploaded to a remote server. This ensures your DPI, dimensions, and file compression are perfectly aligned with server requirements, guaranteeing a smooth, error-free application process.',
      rejectionTips: [
        'Avoid submitting photos taken with dark glasses or tinted spectacles. Regular prescription glasses are allowed only if there is no glare.',
        'Ensure the photo is not blurred; low-resolution selfies are the number one cause of rejection.',
        'Do not digitally alter your facial features using beauty filters or AI enhancements.'
      ]
    },
    howToSteps: [
      'Click the upload area to select your unedited portrait photo.',
      'Our tool automatically detects the aspect ratio and prepares it for the 200x230 pixel format.',
      'The compression engine adjusts the quality to ensure the file is under 50KB.',
      'Click download and instantly receive your compliant photo.'
    ],
    faqs: [
      { question: 'Why is my IBPS PO photo getting rejected?', answer: 'The most common reasons for rejection are file size (must be under 50KB), incorrect dimensions (200x230), or a dark/cluttered background. Our tool automatically fixes the size and dimensions.' },
      { question: 'Is it safe to upload my photo here?', answer: 'Yes, 100% safe. Your photo is never uploaded to any server. All processing happens entirely within your web browser using HTML5 technologies.' },
      { question: 'Can I use a photo taken with my phone?', answer: 'Yes, as long as you stand against a plain white wall with good lighting. Once you take the photo, use our tool to crop it to the correct proportions and compress the file size.' }
    ],
    relatedSlugs: []
  },
  {
    slug: 'ibps-clerk-photo',
    action: 'resize',
    inputFormats: ['jpg', 'jpeg', 'png', 'webp'],
    outputFormat: 'jpg',
    category: 'indian-exams',
    title: 'Resize IBPS Clerk Photo Online Free | ImageFix',
    metaDescription: 'Free online tool to resize your IBPS Clerk application photo to the exact 20-50KB size and 200x230 pixel dimensions required.',
    h1: 'IBPS Clerk Resizer',
    keywords: ['IBPS Clerk photo size', 'IBPS Clerk photo resize', 'IBPS Clerk photo requirements'],
    heroDescription: 'The IBPS Clerk has strict photo requirements. Use our tool to automatically crop, resize, and compress your photograph to meet the exact guidelines without losing clarity.',
    adDensity: 'medium',
    settings: [
      { id: 'width', label: 'Width (px)', type: 'number', defaultValue: 200, min: 100, max: 2000 },
      { id: 'height', label: 'Height (px)', type: 'number', defaultValue: 230, min: 100, max: 2000 },
      { id: 'maxSize', label: 'Max Size (KB)', type: 'number', defaultValue: 49, min: 20, max: 50 }
    ],
    compliance: {
      targetWidth: 200, targetHeight: 230, minSizeKB: 20, maxSizeKB: 50,
      backgroundColor: 'white', country: 'XX', docType: 'exam'
    },
    seoContent: {
      specTable: [
        { label: 'File Size', value: '20 KB to 50 KB' },
        { label: 'Dimensions', value: '200 x 230 pixels' },
        { label: 'Format', value: 'JPG / JPEG only' },
        { label: 'Background', value: 'Plain White' }
      ],
      detailedDescription: 'Applying for the IBPS Clerk requires absolute precision. The online application portal employs strict validation rules that will instantly reject images falling outside their rigid 20 KB to 50 KB limit. Furthermore, the official notification explicitly demands a plain white background. Many candidates face frustration during the final hours of form submission because their smartphone photos are either too large in file size or have incorrect pixel dimensions.\n\nOur free utility handles all the technical heavy lifting directly in your browser. By utilizing advanced client-side HTML5 Canvas processing, your image is securely scaled, cropped, and compressed without ever being uploaded to a remote server. This ensures your DPI, dimensions, and file compression are perfectly aligned with server requirements, guaranteeing a smooth, error-free application process.',
      rejectionTips: [
        'Avoid submitting photos taken with dark glasses or tinted spectacles. Regular prescription glasses are allowed only if there is no glare.',
        'Ensure the photo is not blurred; low-resolution selfies are the number one cause of rejection.',
        'Do not digitally alter your facial features using beauty filters or AI enhancements.'
      ]
    },
    howToSteps: [
      'Click the upload area to select your unedited portrait photo.',
      'Our tool automatically detects the aspect ratio and prepares it for the 200x230 pixel format.',
      'The compression engine adjusts the quality to ensure the file is under 50KB.',
      'Click download and instantly receive your compliant photo.'
    ],
    faqs: [
      { question: 'Why is my IBPS Clerk photo getting rejected?', answer: 'The most common reasons for rejection are file size (must be under 50KB), incorrect dimensions (200x230), or a dark/cluttered background. Our tool automatically fixes the size and dimensions.' },
      { question: 'Is it safe to upload my photo here?', answer: 'Yes, 100% safe. Your photo is never uploaded to any server. All processing happens entirely within your web browser using HTML5 technologies.' },
      { question: 'Can I use a photo taken with my phone?', answer: 'Yes, as long as you stand against a plain white wall with good lighting. Once you take the photo, use our tool to crop it to the correct proportions and compress the file size.' }
    ],
    relatedSlugs: []
  },
  {
    slug: 'ibps-signature',
    action: 'resize',
    inputFormats: ['jpg', 'jpeg', 'png', 'webp'],
    outputFormat: 'jpg',
    category: 'signature-resizer',
    title: 'Resize IBPS Signature Photo Online Free | ImageFix',
    metaDescription: 'Free online tool to resize your IBPS Signature application photo to the exact 10-20KB size and 140x60 pixel dimensions required.',
    h1: 'IBPS Signature Resizer',
    keywords: ['IBPS Signature photo size', 'IBPS Signature photo resize', 'IBPS Signature photo requirements'],
    heroDescription: 'The IBPS Signature has strict photo requirements. Use our tool to automatically crop, resize, and compress your photograph to meet the exact guidelines without losing clarity.',
    adDensity: 'medium',
    settings: [
      { id: 'width', label: 'Width (px)', type: 'number', defaultValue: 140, min: 100, max: 2000 },
      { id: 'height', label: 'Height (px)', type: 'number', defaultValue: 60, min: 100, max: 2000 },
      { id: 'maxSize', label: 'Max Size (KB)', type: 'number', defaultValue: 19, min: 10, max: 20 }
    ],
    compliance: {
      targetWidth: 140, targetHeight: 60, minSizeKB: 10, maxSizeKB: 20,
      backgroundColor: 'white', country: 'XX', docType: 'exam'
    },
    seoContent: {
      specTable: [
        { label: 'File Size', value: '10 KB to 20 KB' },
        { label: 'Dimensions', value: '140 x 60 pixels' },
        { label: 'Format', value: 'JPG / JPEG only' },
        { label: 'Background', value: 'Plain White' }
      ],
      detailedDescription: 'Applying for the IBPS Signature requires absolute precision. The online application portal employs strict validation rules that will instantly reject images falling outside their rigid 10 KB to 20 KB limit. Furthermore, the official notification explicitly demands a plain white background. Many candidates face frustration during the final hours of form submission because their smartphone photos are either too large in file size or have incorrect pixel dimensions.\n\nOur free utility handles all the technical heavy lifting directly in your browser. By utilizing advanced client-side HTML5 Canvas processing, your image is securely scaled, cropped, and compressed without ever being uploaded to a remote server. This ensures your DPI, dimensions, and file compression are perfectly aligned with server requirements, guaranteeing a smooth, error-free application process.',
      rejectionTips: [
        'Avoid submitting photos taken with dark glasses or tinted spectacles. Regular prescription glasses are allowed only if there is no glare.',
        'Ensure the photo is not blurred; low-resolution selfies are the number one cause of rejection.',
        'Do not digitally alter your facial features using beauty filters or AI enhancements.'
      ]
    },
    howToSteps: [
      'Click the upload area to select your unedited portrait photo.',
      'Our tool automatically detects the aspect ratio and prepares it for the 140x60 pixel format.',
      'The compression engine adjusts the quality to ensure the file is under 20KB.',
      'Click download and instantly receive your compliant photo.'
    ],
    faqs: [
      { question: 'Why is my IBPS Signature photo getting rejected?', answer: 'The most common reasons for rejection are file size (must be under 20KB), incorrect dimensions (140x60), or a dark/cluttered background. Our tool automatically fixes the size and dimensions.' },
      { question: 'Is it safe to upload my photo here?', answer: 'Yes, 100% safe. Your photo is never uploaded to any server. All processing happens entirely within your web browser using HTML5 technologies.' },
      { question: 'Can I use a photo taken with my phone?', answer: 'Yes, as long as you stand against a plain white wall with good lighting. Once you take the photo, use our tool to crop it to the correct proportions and compress the file size.' }
    ],
    relatedSlugs: []
  },
  {
    slug: 'rrb-ntpc-photo',
    action: 'resize',
    inputFormats: ['jpg', 'jpeg', 'png', 'webp'],
    outputFormat: 'jpg',
    category: 'indian-exams',
    title: 'Resize RRB NTPC Photo Online Free | ImageFix',
    metaDescription: 'Free online tool to resize your RRB NTPC application photo to the exact 20-50KB size and 320x240 pixel dimensions required.',
    h1: 'RRB NTPC Resizer',
    keywords: ['RRB NTPC photo size', 'RRB NTPC photo resize', 'RRB NTPC photo requirements'],
    heroDescription: 'The RRB NTPC has strict photo requirements. Use our tool to automatically crop, resize, and compress your photograph to meet the exact guidelines without losing clarity.',
    adDensity: 'medium',
    settings: [
      { id: 'width', label: 'Width (px)', type: 'number', defaultValue: 320, min: 100, max: 2000 },
      { id: 'height', label: 'Height (px)', type: 'number', defaultValue: 240, min: 100, max: 2000 },
      { id: 'maxSize', label: 'Max Size (KB)', type: 'number', defaultValue: 49, min: 20, max: 50 }
    ],
    compliance: {
      targetWidth: 320, targetHeight: 240, minSizeKB: 20, maxSizeKB: 50,
      backgroundColor: 'white', country: 'XX', docType: 'exam'
    },
    seoContent: {
      specTable: [
        { label: 'File Size', value: '20 KB to 50 KB' },
        { label: 'Dimensions', value: '320 x 240 pixels' },
        { label: 'Format', value: 'JPG / JPEG only' },
        { label: 'Background', value: 'Plain White' }
      ],
      detailedDescription: 'Applying for the RRB NTPC requires absolute precision. The online application portal employs strict validation rules that will instantly reject images falling outside their rigid 20 KB to 50 KB limit. Furthermore, the official notification explicitly demands a plain white background. Many candidates face frustration during the final hours of form submission because their smartphone photos are either too large in file size or have incorrect pixel dimensions.\n\nOur free utility handles all the technical heavy lifting directly in your browser. By utilizing advanced client-side HTML5 Canvas processing, your image is securely scaled, cropped, and compressed without ever being uploaded to a remote server. This ensures your DPI, dimensions, and file compression are perfectly aligned with server requirements, guaranteeing a smooth, error-free application process.',
      rejectionTips: [
        'Avoid submitting photos taken with dark glasses or tinted spectacles. Regular prescription glasses are allowed only if there is no glare.',
        'Ensure the photo is not blurred; low-resolution selfies are the number one cause of rejection.',
        'Do not digitally alter your facial features using beauty filters or AI enhancements.'
      ]
    },
    howToSteps: [
      'Click the upload area to select your unedited portrait photo.',
      'Our tool automatically detects the aspect ratio and prepares it for the 320x240 pixel format.',
      'The compression engine adjusts the quality to ensure the file is under 50KB.',
      'Click download and instantly receive your compliant photo.'
    ],
    faqs: [
      { question: 'Why is my RRB NTPC photo getting rejected?', answer: 'The most common reasons for rejection are file size (must be under 50KB), incorrect dimensions (320x240), or a dark/cluttered background. Our tool automatically fixes the size and dimensions.' },
      { question: 'Is it safe to upload my photo here?', answer: 'Yes, 100% safe. Your photo is never uploaded to any server. All processing happens entirely within your web browser using HTML5 technologies.' },
      { question: 'Can I use a photo taken with my phone?', answer: 'Yes, as long as you stand against a plain white wall with good lighting. Once you take the photo, use our tool to crop it to the correct proportions and compress the file size.' }
    ],
    relatedSlugs: []
  },
  {
    slug: 'rrb-alp-photo',
    action: 'resize',
    inputFormats: ['jpg', 'jpeg', 'png', 'webp'],
    outputFormat: 'jpg',
    category: 'indian-exams',
    title: 'Resize RRB ALP Photo Online Free | ImageFix',
    metaDescription: 'Free online tool to resize your RRB ALP application photo to the exact 20-50KB size and 320x240 pixel dimensions required.',
    h1: 'RRB ALP Resizer',
    keywords: ['RRB ALP photo size', 'RRB ALP photo resize', 'RRB ALP photo requirements'],
    heroDescription: 'The RRB ALP has strict photo requirements. Use our tool to automatically crop, resize, and compress your photograph to meet the exact guidelines without losing clarity.',
    adDensity: 'medium',
    settings: [
      { id: 'width', label: 'Width (px)', type: 'number', defaultValue: 320, min: 100, max: 2000 },
      { id: 'height', label: 'Height (px)', type: 'number', defaultValue: 240, min: 100, max: 2000 },
      { id: 'maxSize', label: 'Max Size (KB)', type: 'number', defaultValue: 49, min: 20, max: 50 }
    ],
    compliance: {
      targetWidth: 320, targetHeight: 240, minSizeKB: 20, maxSizeKB: 50,
      backgroundColor: 'white', country: 'XX', docType: 'exam'
    },
    seoContent: {
      specTable: [
        { label: 'File Size', value: '20 KB to 50 KB' },
        { label: 'Dimensions', value: '320 x 240 pixels' },
        { label: 'Format', value: 'JPG / JPEG only' },
        { label: 'Background', value: 'Plain White' }
      ],
      detailedDescription: 'Applying for the RRB ALP requires absolute precision. The online application portal employs strict validation rules that will instantly reject images falling outside their rigid 20 KB to 50 KB limit. Furthermore, the official notification explicitly demands a plain white background. Many candidates face frustration during the final hours of form submission because their smartphone photos are either too large in file size or have incorrect pixel dimensions.\n\nOur free utility handles all the technical heavy lifting directly in your browser. By utilizing advanced client-side HTML5 Canvas processing, your image is securely scaled, cropped, and compressed without ever being uploaded to a remote server. This ensures your DPI, dimensions, and file compression are perfectly aligned with server requirements, guaranteeing a smooth, error-free application process.',
      rejectionTips: [
        'Avoid submitting photos taken with dark glasses or tinted spectacles. Regular prescription glasses are allowed only if there is no glare.',
        'Ensure the photo is not blurred; low-resolution selfies are the number one cause of rejection.',
        'Do not digitally alter your facial features using beauty filters or AI enhancements.'
      ]
    },
    howToSteps: [
      'Click the upload area to select your unedited portrait photo.',
      'Our tool automatically detects the aspect ratio and prepares it for the 320x240 pixel format.',
      'The compression engine adjusts the quality to ensure the file is under 50KB.',
      'Click download and instantly receive your compliant photo.'
    ],
    faqs: [
      { question: 'Why is my RRB ALP photo getting rejected?', answer: 'The most common reasons for rejection are file size (must be under 50KB), incorrect dimensions (320x240), or a dark/cluttered background. Our tool automatically fixes the size and dimensions.' },
      { question: 'Is it safe to upload my photo here?', answer: 'Yes, 100% safe. Your photo is never uploaded to any server. All processing happens entirely within your web browser using HTML5 technologies.' },
      { question: 'Can I use a photo taken with my phone?', answer: 'Yes, as long as you stand against a plain white wall with good lighting. Once you take the photo, use our tool to crop it to the correct proportions and compress the file size.' }
    ],
    relatedSlugs: []
  },
  {
    slug: 'rrb-signature',
    action: 'resize',
    inputFormats: ['jpg', 'jpeg', 'png', 'webp'],
    outputFormat: 'jpg',
    category: 'signature-resizer',
    title: 'Resize RRB Signature Photo Online Free | ImageFix',
    metaDescription: 'Free online tool to resize your RRB Signature application photo to the exact 10-40KB size and 140x60 pixel dimensions required.',
    h1: 'RRB Signature Resizer',
    keywords: ['RRB Signature photo size', 'RRB Signature photo resize', 'RRB Signature photo requirements'],
    heroDescription: 'The RRB Signature has strict photo requirements. Use our tool to automatically crop, resize, and compress your photograph to meet the exact guidelines without losing clarity.',
    adDensity: 'medium',
    settings: [
      { id: 'width', label: 'Width (px)', type: 'number', defaultValue: 140, min: 100, max: 2000 },
      { id: 'height', label: 'Height (px)', type: 'number', defaultValue: 60, min: 100, max: 2000 },
      { id: 'maxSize', label: 'Max Size (KB)', type: 'number', defaultValue: 39, min: 10, max: 40 }
    ],
    compliance: {
      targetWidth: 140, targetHeight: 60, minSizeKB: 10, maxSizeKB: 40,
      backgroundColor: 'white', country: 'XX', docType: 'exam'
    },
    seoContent: {
      specTable: [
        { label: 'File Size', value: '10 KB to 40 KB' },
        { label: 'Dimensions', value: '140 x 60 pixels' },
        { label: 'Format', value: 'JPG / JPEG only' },
        { label: 'Background', value: 'Plain White' }
      ],
      detailedDescription: 'Applying for the RRB Signature requires absolute precision. The online application portal employs strict validation rules that will instantly reject images falling outside their rigid 10 KB to 40 KB limit. Furthermore, the official notification explicitly demands a plain white background. Many candidates face frustration during the final hours of form submission because their smartphone photos are either too large in file size or have incorrect pixel dimensions.\n\nOur free utility handles all the technical heavy lifting directly in your browser. By utilizing advanced client-side HTML5 Canvas processing, your image is securely scaled, cropped, and compressed without ever being uploaded to a remote server. This ensures your DPI, dimensions, and file compression are perfectly aligned with server requirements, guaranteeing a smooth, error-free application process.',
      rejectionTips: [
        'Avoid submitting photos taken with dark glasses or tinted spectacles. Regular prescription glasses are allowed only if there is no glare.',
        'Ensure the photo is not blurred; low-resolution selfies are the number one cause of rejection.',
        'Do not digitally alter your facial features using beauty filters or AI enhancements.'
      ]
    },
    howToSteps: [
      'Click the upload area to select your unedited portrait photo.',
      'Our tool automatically detects the aspect ratio and prepares it for the 140x60 pixel format.',
      'The compression engine adjusts the quality to ensure the file is under 40KB.',
      'Click download and instantly receive your compliant photo.'
    ],
    faqs: [
      { question: 'Why is my RRB Signature photo getting rejected?', answer: 'The most common reasons for rejection are file size (must be under 40KB), incorrect dimensions (140x60), or a dark/cluttered background. Our tool automatically fixes the size and dimensions.' },
      { question: 'Is it safe to upload my photo here?', answer: 'Yes, 100% safe. Your photo is never uploaded to any server. All processing happens entirely within your web browser using HTML5 technologies.' },
      { question: 'Can I use a photo taken with my phone?', answer: 'Yes, as long as you stand against a plain white wall with good lighting. Once you take the photo, use our tool to crop it to the correct proportions and compress the file size.' }
    ],
    relatedSlugs: []
  },
  {
    slug: 'ssc-chsl-photo',
    action: 'resize',
    inputFormats: ['jpg', 'jpeg', 'png', 'webp'],
    outputFormat: 'jpg',
    category: 'indian-exams',
    title: 'Resize SSC CHSL Photo Online Free | ImageFix',
    metaDescription: 'Free online tool to resize your SSC CHSL application photo to the exact 20-50KB size and 200x240 pixel dimensions required.',
    h1: 'SSC CHSL Resizer',
    keywords: ['SSC CHSL photo size', 'SSC CHSL photo resize', 'SSC CHSL photo requirements'],
    heroDescription: 'The SSC CHSL has strict photo requirements. Use our tool to automatically crop, resize, and compress your photograph to meet the exact guidelines without losing clarity.',
    adDensity: 'medium',
    settings: [
      { id: 'width', label: 'Width (px)', type: 'number', defaultValue: 200, min: 100, max: 2000 },
      { id: 'height', label: 'Height (px)', type: 'number', defaultValue: 240, min: 100, max: 2000 },
      { id: 'maxSize', label: 'Max Size (KB)', type: 'number', defaultValue: 49, min: 20, max: 50 }
    ],
    compliance: {
      targetWidth: 200, targetHeight: 240, minSizeKB: 20, maxSizeKB: 50,
      backgroundColor: 'white', country: 'XX', docType: 'exam'
    },
    seoContent: {
      specTable: [
        { label: 'File Size', value: '20 KB to 50 KB' },
        { label: 'Dimensions', value: '200 x 240 pixels' },
        { label: 'Format', value: 'JPG / JPEG only' },
        { label: 'Background', value: 'Plain White' }
      ],
      detailedDescription: 'Applying for the SSC CHSL requires absolute precision. The online application portal employs strict validation rules that will instantly reject images falling outside their rigid 20 KB to 50 KB limit. Furthermore, the official notification explicitly demands a plain white background. Many candidates face frustration during the final hours of form submission because their smartphone photos are either too large in file size or have incorrect pixel dimensions.\n\nOur free utility handles all the technical heavy lifting directly in your browser. By utilizing advanced client-side HTML5 Canvas processing, your image is securely scaled, cropped, and compressed without ever being uploaded to a remote server. This ensures your DPI, dimensions, and file compression are perfectly aligned with server requirements, guaranteeing a smooth, error-free application process.',
      rejectionTips: [
        'Avoid submitting photos taken with dark glasses or tinted spectacles. Regular prescription glasses are allowed only if there is no glare.',
        'Ensure the photo is not blurred; low-resolution selfies are the number one cause of rejection.',
        'Do not digitally alter your facial features using beauty filters or AI enhancements.'
      ]
    },
    howToSteps: [
      'Click the upload area to select your unedited portrait photo.',
      'Our tool automatically detects the aspect ratio and prepares it for the 200x240 pixel format.',
      'The compression engine adjusts the quality to ensure the file is under 50KB.',
      'Click download and instantly receive your compliant photo.'
    ],
    faqs: [
      { question: 'Why is my SSC CHSL photo getting rejected?', answer: 'The most common reasons for rejection are file size (must be under 50KB), incorrect dimensions (200x240), or a dark/cluttered background. Our tool automatically fixes the size and dimensions.' },
      { question: 'Is it safe to upload my photo here?', answer: 'Yes, 100% safe. Your photo is never uploaded to any server. All processing happens entirely within your web browser using HTML5 technologies.' },
      { question: 'Can I use a photo taken with my phone?', answer: 'Yes, as long as you stand against a plain white wall with good lighting. Once you take the photo, use our tool to crop it to the correct proportions and compress the file size.' }
    ],
    relatedSlugs: []
  },
  {
    slug: 'ssc-mts-photo',
    action: 'resize',
    inputFormats: ['jpg', 'jpeg', 'png', 'webp'],
    outputFormat: 'jpg',
    category: 'indian-exams',
    title: 'Resize SSC MTS Photo Online Free | ImageFix',
    metaDescription: 'Free online tool to resize your SSC MTS application photo to the exact 20-50KB size and 200x240 pixel dimensions required.',
    h1: 'SSC MTS Resizer',
    keywords: ['SSC MTS photo size', 'SSC MTS photo resize', 'SSC MTS photo requirements'],
    heroDescription: 'The SSC MTS has strict photo requirements. Use our tool to automatically crop, resize, and compress your photograph to meet the exact guidelines without losing clarity.',
    adDensity: 'medium',
    settings: [
      { id: 'width', label: 'Width (px)', type: 'number', defaultValue: 200, min: 100, max: 2000 },
      { id: 'height', label: 'Height (px)', type: 'number', defaultValue: 240, min: 100, max: 2000 },
      { id: 'maxSize', label: 'Max Size (KB)', type: 'number', defaultValue: 49, min: 20, max: 50 }
    ],
    compliance: {
      targetWidth: 200, targetHeight: 240, minSizeKB: 20, maxSizeKB: 50,
      backgroundColor: 'white', country: 'XX', docType: 'exam'
    },
    seoContent: {
      specTable: [
        { label: 'File Size', value: '20 KB to 50 KB' },
        { label: 'Dimensions', value: '200 x 240 pixels' },
        { label: 'Format', value: 'JPG / JPEG only' },
        { label: 'Background', value: 'Plain White' }
      ],
      detailedDescription: 'Applying for the SSC MTS requires absolute precision. The online application portal employs strict validation rules that will instantly reject images falling outside their rigid 20 KB to 50 KB limit. Furthermore, the official notification explicitly demands a plain white background. Many candidates face frustration during the final hours of form submission because their smartphone photos are either too large in file size or have incorrect pixel dimensions.\n\nOur free utility handles all the technical heavy lifting directly in your browser. By utilizing advanced client-side HTML5 Canvas processing, your image is securely scaled, cropped, and compressed without ever being uploaded to a remote server. This ensures your DPI, dimensions, and file compression are perfectly aligned with server requirements, guaranteeing a smooth, error-free application process.',
      rejectionTips: [
        'Avoid submitting photos taken with dark glasses or tinted spectacles. Regular prescription glasses are allowed only if there is no glare.',
        'Ensure the photo is not blurred; low-resolution selfies are the number one cause of rejection.',
        'Do not digitally alter your facial features using beauty filters or AI enhancements.'
      ]
    },
    howToSteps: [
      'Click the upload area to select your unedited portrait photo.',
      'Our tool automatically detects the aspect ratio and prepares it for the 200x240 pixel format.',
      'The compression engine adjusts the quality to ensure the file is under 50KB.',
      'Click download and instantly receive your compliant photo.'
    ],
    faqs: [
      { question: 'Why is my SSC MTS photo getting rejected?', answer: 'The most common reasons for rejection are file size (must be under 50KB), incorrect dimensions (200x240), or a dark/cluttered background. Our tool automatically fixes the size and dimensions.' },
      { question: 'Is it safe to upload my photo here?', answer: 'Yes, 100% safe. Your photo is never uploaded to any server. All processing happens entirely within your web browser using HTML5 technologies.' },
      { question: 'Can I use a photo taken with my phone?', answer: 'Yes, as long as you stand against a plain white wall with good lighting. Once you take the photo, use our tool to crop it to the correct proportions and compress the file size.' }
    ],
    relatedSlugs: []
  },
  {
    slug: 'ssc-signature',
    action: 'resize',
    inputFormats: ['jpg', 'jpeg', 'png', 'webp'],
    outputFormat: 'jpg',
    category: 'signature-resizer',
    title: 'Resize SSC Signature Photo Online Free | ImageFix',
    metaDescription: 'Free online tool to resize your SSC Signature application photo to the exact 10-20KB size and 140x60 pixel dimensions required.',
    h1: 'SSC Signature Resizer',
    keywords: ['SSC Signature photo size', 'SSC Signature photo resize', 'SSC Signature photo requirements'],
    heroDescription: 'The SSC Signature has strict photo requirements. Use our tool to automatically crop, resize, and compress your photograph to meet the exact guidelines without losing clarity.',
    adDensity: 'medium',
    settings: [
      { id: 'width', label: 'Width (px)', type: 'number', defaultValue: 140, min: 100, max: 2000 },
      { id: 'height', label: 'Height (px)', type: 'number', defaultValue: 60, min: 100, max: 2000 },
      { id: 'maxSize', label: 'Max Size (KB)', type: 'number', defaultValue: 19, min: 10, max: 20 }
    ],
    compliance: {
      targetWidth: 140, targetHeight: 60, minSizeKB: 10, maxSizeKB: 20,
      backgroundColor: 'white', country: 'XX', docType: 'exam'
    },
    seoContent: {
      specTable: [
        { label: 'File Size', value: '10 KB to 20 KB' },
        { label: 'Dimensions', value: '140 x 60 pixels' },
        { label: 'Format', value: 'JPG / JPEG only' },
        { label: 'Background', value: 'Plain White' }
      ],
      detailedDescription: 'Applying for the SSC Signature requires absolute precision. The online application portal employs strict validation rules that will instantly reject images falling outside their rigid 10 KB to 20 KB limit. Furthermore, the official notification explicitly demands a plain white background. Many candidates face frustration during the final hours of form submission because their smartphone photos are either too large in file size or have incorrect pixel dimensions.\n\nOur free utility handles all the technical heavy lifting directly in your browser. By utilizing advanced client-side HTML5 Canvas processing, your image is securely scaled, cropped, and compressed without ever being uploaded to a remote server. This ensures your DPI, dimensions, and file compression are perfectly aligned with server requirements, guaranteeing a smooth, error-free application process.',
      rejectionTips: [
        'Avoid submitting photos taken with dark glasses or tinted spectacles. Regular prescription glasses are allowed only if there is no glare.',
        'Ensure the photo is not blurred; low-resolution selfies are the number one cause of rejection.',
        'Do not digitally alter your facial features using beauty filters or AI enhancements.'
      ]
    },
    howToSteps: [
      'Click the upload area to select your unedited portrait photo.',
      'Our tool automatically detects the aspect ratio and prepares it for the 140x60 pixel format.',
      'The compression engine adjusts the quality to ensure the file is under 20KB.',
      'Click download and instantly receive your compliant photo.'
    ],
    faqs: [
      { question: 'Why is my SSC Signature photo getting rejected?', answer: 'The most common reasons for rejection are file size (must be under 20KB), incorrect dimensions (140x60), or a dark/cluttered background. Our tool automatically fixes the size and dimensions.' },
      { question: 'Is it safe to upload my photo here?', answer: 'Yes, 100% safe. Your photo is never uploaded to any server. All processing happens entirely within your web browser using HTML5 technologies.' },
      { question: 'Can I use a photo taken with my phone?', answer: 'Yes, as long as you stand against a plain white wall with good lighting. Once you take the photo, use our tool to crop it to the correct proportions and compress the file size.' }
    ],
    relatedSlugs: []
  },
  {
    slug: 'uk-passport-photo',
    action: 'resize',
    inputFormats: ['jpg', 'jpeg', 'png', 'webp'],
    outputFormat: 'jpg',
    category: 'passports',
    title: 'Resize UK Passport Photo Online Free | ImageFix',
    metaDescription: 'Free online tool to resize your UK Passport application photo to the exact 50-10000KB size and 600x750 pixel dimensions required.',
    h1: 'UK Passport Resizer',
    keywords: ['UK Passport photo size', 'UK Passport photo resize', 'UK Passport photo requirements'],
    heroDescription: 'The UK Passport has strict photo requirements. Use our tool to automatically crop, resize, and compress your photograph to meet the exact guidelines without losing clarity.',
    adDensity: 'medium',
    settings: [
      { id: 'width', label: 'Width (px)', type: 'number', defaultValue: 600, min: 100, max: 2000 },
      { id: 'height', label: 'Height (px)', type: 'number', defaultValue: 750, min: 100, max: 2000 },
      { id: 'maxSize', label: 'Max Size (KB)', type: 'number', defaultValue: 9999, min: 50, max: 10000 }
    ],
    compliance: {
      targetWidth: 600, targetHeight: 750, minSizeKB: 50, maxSizeKB: 10000,
      backgroundColor: 'white', country: 'XX', docType: 'exam'
    },
    seoContent: {
      specTable: [
        { label: 'File Size', value: '50 KB to 10000 KB' },
        { label: 'Dimensions', value: '600 x 750 pixels' },
        { label: 'Format', value: 'JPG / JPEG only' },
        { label: 'Background', value: 'Plain White' }
      ],
      detailedDescription: 'Applying for the UK Passport requires absolute precision. The online application portal employs strict validation rules that will instantly reject images falling outside their rigid 50 KB to 10000 KB limit. Furthermore, the official notification explicitly demands a plain white background. Many candidates face frustration during the final hours of form submission because their smartphone photos are either too large in file size or have incorrect pixel dimensions.\n\nOur free utility handles all the technical heavy lifting directly in your browser. By utilizing advanced client-side HTML5 Canvas processing, your image is securely scaled, cropped, and compressed without ever being uploaded to a remote server. This ensures your DPI, dimensions, and file compression are perfectly aligned with server requirements, guaranteeing a smooth, error-free application process.',
      rejectionTips: [
        'Avoid submitting photos taken with dark glasses or tinted spectacles. Regular prescription glasses are allowed only if there is no glare.',
        'Ensure the photo is not blurred; low-resolution selfies are the number one cause of rejection.',
        'Do not digitally alter your facial features using beauty filters or AI enhancements.'
      ]
    },
    howToSteps: [
      'Click the upload area to select your unedited portrait photo.',
      'Our tool automatically detects the aspect ratio and prepares it for the 600x750 pixel format.',
      'The compression engine adjusts the quality to ensure the file is under 10000KB.',
      'Click download and instantly receive your compliant photo.'
    ],
    faqs: [
      { question: 'Why is my UK Passport photo getting rejected?', answer: 'The most common reasons for rejection are file size (must be under 10000KB), incorrect dimensions (600x750), or a dark/cluttered background. Our tool automatically fixes the size and dimensions.' },
      { question: 'Is it safe to upload my photo here?', answer: 'Yes, 100% safe. Your photo is never uploaded to any server. All processing happens entirely within your web browser using HTML5 technologies.' },
      { question: 'Can I use a photo taken with my phone?', answer: 'Yes, as long as you stand against a plain white wall with good lighting. Once you take the photo, use our tool to crop it to the correct proportions and compress the file size.' }
    ],
    relatedSlugs: []
  },
  {
    slug: 'uk-visa-photo',
    action: 'resize',
    inputFormats: ['jpg', 'jpeg', 'png', 'webp'],
    outputFormat: 'jpg',
    category: 'visas',
    title: 'Resize UK Visa Photo Online Free | ImageFix',
    metaDescription: 'Free online tool to resize your UK Visa application photo to the exact 50-240KB size and 413x531 pixel dimensions required.',
    h1: 'UK Visa Resizer',
    keywords: ['UK Visa photo size', 'UK Visa photo resize', 'UK Visa photo requirements'],
    heroDescription: 'The UK Visa has strict photo requirements. Use our tool to automatically crop, resize, and compress your photograph to meet the exact guidelines without losing clarity.',
    adDensity: 'medium',
    settings: [
      { id: 'width', label: 'Width (px)', type: 'number', defaultValue: 413, min: 100, max: 2000 },
      { id: 'height', label: 'Height (px)', type: 'number', defaultValue: 531, min: 100, max: 2000 },
      { id: 'maxSize', label: 'Max Size (KB)', type: 'number', defaultValue: 239, min: 50, max: 240 }
    ],
    compliance: {
      targetWidth: 413, targetHeight: 531, minSizeKB: 50, maxSizeKB: 240,
      backgroundColor: 'white', country: 'XX', docType: 'exam'
    },
    seoContent: {
      specTable: [
        { label: 'File Size', value: '50 KB to 240 KB' },
        { label: 'Dimensions', value: '413 x 531 pixels' },
        { label: 'Format', value: 'JPG / JPEG only' },
        { label: 'Background', value: 'Plain White' }
      ],
      detailedDescription: 'Applying for the UK Visa requires absolute precision. The online application portal employs strict validation rules that will instantly reject images falling outside their rigid 50 KB to 240 KB limit. Furthermore, the official notification explicitly demands a plain white background. Many candidates face frustration during the final hours of form submission because their smartphone photos are either too large in file size or have incorrect pixel dimensions.\n\nOur free utility handles all the technical heavy lifting directly in your browser. By utilizing advanced client-side HTML5 Canvas processing, your image is securely scaled, cropped, and compressed without ever being uploaded to a remote server. This ensures your DPI, dimensions, and file compression are perfectly aligned with server requirements, guaranteeing a smooth, error-free application process.',
      rejectionTips: [
        'Avoid submitting photos taken with dark glasses or tinted spectacles. Regular prescription glasses are allowed only if there is no glare.',
        'Ensure the photo is not blurred; low-resolution selfies are the number one cause of rejection.',
        'Do not digitally alter your facial features using beauty filters or AI enhancements.'
      ]
    },
    howToSteps: [
      'Click the upload area to select your unedited portrait photo.',
      'Our tool automatically detects the aspect ratio and prepares it for the 413x531 pixel format.',
      'The compression engine adjusts the quality to ensure the file is under 240KB.',
      'Click download and instantly receive your compliant photo.'
    ],
    faqs: [
      { question: 'Why is my UK Visa photo getting rejected?', answer: 'The most common reasons for rejection are file size (must be under 240KB), incorrect dimensions (413x531), or a dark/cluttered background. Our tool automatically fixes the size and dimensions.' },
      { question: 'Is it safe to upload my photo here?', answer: 'Yes, 100% safe. Your photo is never uploaded to any server. All processing happens entirely within your web browser using HTML5 technologies.' },
      { question: 'Can I use a photo taken with my phone?', answer: 'Yes, as long as you stand against a plain white wall with good lighting. Once you take the photo, use our tool to crop it to the correct proportions and compress the file size.' }
    ],
    relatedSlugs: []
  },
  {
    slug: 'schengen-visa-photo',
    action: 'resize',
    inputFormats: ['jpg', 'jpeg', 'png', 'webp'],
    outputFormat: 'jpg',
    category: 'visas',
    title: 'Resize Schengen Visa Photo Online Free | ImageFix',
    metaDescription: 'Free online tool to resize your Schengen Visa application photo to the exact 20-240KB size and 413x531 pixel dimensions required.',
    h1: 'Schengen Visa Resizer',
    keywords: ['Schengen Visa photo size', 'Schengen Visa photo resize', 'Schengen Visa photo requirements'],
    heroDescription: 'The Schengen Visa has strict photo requirements. Use our tool to automatically crop, resize, and compress your photograph to meet the exact guidelines without losing clarity.',
    adDensity: 'medium',
    settings: [
      { id: 'width', label: 'Width (px)', type: 'number', defaultValue: 413, min: 100, max: 2000 },
      { id: 'height', label: 'Height (px)', type: 'number', defaultValue: 531, min: 100, max: 2000 },
      { id: 'maxSize', label: 'Max Size (KB)', type: 'number', defaultValue: 239, min: 20, max: 240 }
    ],
    compliance: {
      targetWidth: 413, targetHeight: 531, minSizeKB: 20, maxSizeKB: 240,
      backgroundColor: 'white', country: 'XX', docType: 'exam'
    },
    seoContent: {
      specTable: [
        { label: 'File Size', value: '20 KB to 240 KB' },
        { label: 'Dimensions', value: '413 x 531 pixels' },
        { label: 'Format', value: 'JPG / JPEG only' },
        { label: 'Background', value: 'Plain White' }
      ],
      detailedDescription: 'Applying for the Schengen Visa requires absolute precision. The online application portal employs strict validation rules that will instantly reject images falling outside their rigid 20 KB to 240 KB limit. Furthermore, the official notification explicitly demands a plain white background. Many candidates face frustration during the final hours of form submission because their smartphone photos are either too large in file size or have incorrect pixel dimensions.\n\nOur free utility handles all the technical heavy lifting directly in your browser. By utilizing advanced client-side HTML5 Canvas processing, your image is securely scaled, cropped, and compressed without ever being uploaded to a remote server. This ensures your DPI, dimensions, and file compression are perfectly aligned with server requirements, guaranteeing a smooth, error-free application process.',
      rejectionTips: [
        'Avoid submitting photos taken with dark glasses or tinted spectacles. Regular prescription glasses are allowed only if there is no glare.',
        'Ensure the photo is not blurred; low-resolution selfies are the number one cause of rejection.',
        'Do not digitally alter your facial features using beauty filters or AI enhancements.'
      ]
    },
    howToSteps: [
      'Click the upload area to select your unedited portrait photo.',
      'Our tool automatically detects the aspect ratio and prepares it for the 413x531 pixel format.',
      'The compression engine adjusts the quality to ensure the file is under 240KB.',
      'Click download and instantly receive your compliant photo.'
    ],
    faqs: [
      { question: 'Why is my Schengen Visa photo getting rejected?', answer: 'The most common reasons for rejection are file size (must be under 240KB), incorrect dimensions (413x531), or a dark/cluttered background. Our tool automatically fixes the size and dimensions.' },
      { question: 'Is it safe to upload my photo here?', answer: 'Yes, 100% safe. Your photo is never uploaded to any server. All processing happens entirely within your web browser using HTML5 technologies.' },
      { question: 'Can I use a photo taken with my phone?', answer: 'Yes, as long as you stand against a plain white wall with good lighting. Once you take the photo, use our tool to crop it to the correct proportions and compress the file size.' }
    ],
    relatedSlugs: []
  },
  {
    slug: 'canada-pr-photo',
    action: 'resize',
    inputFormats: ['jpg', 'jpeg', 'png', 'webp'],
    outputFormat: 'jpg',
    category: 'visas',
    title: 'Resize Canada PR Photo Online Free | ImageFix',
    metaDescription: 'Free online tool to resize your Canada PR application photo to the exact 60-240KB size and 420x540 pixel dimensions required.',
    h1: 'Canada PR Resizer',
    keywords: ['Canada PR photo size', 'Canada PR photo resize', 'Canada PR photo requirements'],
    heroDescription: 'The Canada PR has strict photo requirements. Use our tool to automatically crop, resize, and compress your photograph to meet the exact guidelines without losing clarity.',
    adDensity: 'medium',
    settings: [
      { id: 'width', label: 'Width (px)', type: 'number', defaultValue: 420, min: 100, max: 2000 },
      { id: 'height', label: 'Height (px)', type: 'number', defaultValue: 540, min: 100, max: 2000 },
      { id: 'maxSize', label: 'Max Size (KB)', type: 'number', defaultValue: 239, min: 60, max: 240 }
    ],
    compliance: {
      targetWidth: 420, targetHeight: 540, minSizeKB: 60, maxSizeKB: 240,
      backgroundColor: 'white', country: 'XX', docType: 'exam'
    },
    seoContent: {
      specTable: [
        { label: 'File Size', value: '60 KB to 240 KB' },
        { label: 'Dimensions', value: '420 x 540 pixels' },
        { label: 'Format', value: 'JPG / JPEG only' },
        { label: 'Background', value: 'Plain White' }
      ],
      detailedDescription: 'Applying for the Canada PR requires absolute precision. The online application portal employs strict validation rules that will instantly reject images falling outside their rigid 60 KB to 240 KB limit. Furthermore, the official notification explicitly demands a plain white background. Many candidates face frustration during the final hours of form submission because their smartphone photos are either too large in file size or have incorrect pixel dimensions.\n\nOur free utility handles all the technical heavy lifting directly in your browser. By utilizing advanced client-side HTML5 Canvas processing, your image is securely scaled, cropped, and compressed without ever being uploaded to a remote server. This ensures your DPI, dimensions, and file compression are perfectly aligned with server requirements, guaranteeing a smooth, error-free application process.',
      rejectionTips: [
        'Avoid submitting photos taken with dark glasses or tinted spectacles. Regular prescription glasses are allowed only if there is no glare.',
        'Ensure the photo is not blurred; low-resolution selfies are the number one cause of rejection.',
        'Do not digitally alter your facial features using beauty filters or AI enhancements.'
      ]
    },
    howToSteps: [
      'Click the upload area to select your unedited portrait photo.',
      'Our tool automatically detects the aspect ratio and prepares it for the 420x540 pixel format.',
      'The compression engine adjusts the quality to ensure the file is under 240KB.',
      'Click download and instantly receive your compliant photo.'
    ],
    faqs: [
      { question: 'Why is my Canada PR photo getting rejected?', answer: 'The most common reasons for rejection are file size (must be under 240KB), incorrect dimensions (420x540), or a dark/cluttered background. Our tool automatically fixes the size and dimensions.' },
      { question: 'Is it safe to upload my photo here?', answer: 'Yes, 100% safe. Your photo is never uploaded to any server. All processing happens entirely within your web browser using HTML5 technologies.' },
      { question: 'Can I use a photo taken with my phone?', answer: 'Yes, as long as you stand against a plain white wall with good lighting. Once you take the photo, use our tool to crop it to the correct proportions and compress the file size.' }
    ],
    relatedSlugs: []
  },
  {
    slug: 'canada-visa-photo',
    action: 'resize',
    inputFormats: ['jpg', 'jpeg', 'png', 'webp'],
    outputFormat: 'jpg',
    category: 'visas',
    title: 'Resize Canada Visa Photo Online Free | ImageFix',
    metaDescription: 'Free online tool to resize your Canada Visa application photo to the exact 60-240KB size and 420x540 pixel dimensions required.',
    h1: 'Canada Visa Resizer',
    keywords: ['Canada Visa photo size', 'Canada Visa photo resize', 'Canada Visa photo requirements'],
    heroDescription: 'The Canada Visa has strict photo requirements. Use our tool to automatically crop, resize, and compress your photograph to meet the exact guidelines without losing clarity.',
    adDensity: 'medium',
    settings: [
      { id: 'width', label: 'Width (px)', type: 'number', defaultValue: 420, min: 100, max: 2000 },
      { id: 'height', label: 'Height (px)', type: 'number', defaultValue: 540, min: 100, max: 2000 },
      { id: 'maxSize', label: 'Max Size (KB)', type: 'number', defaultValue: 239, min: 60, max: 240 }
    ],
    compliance: {
      targetWidth: 420, targetHeight: 540, minSizeKB: 60, maxSizeKB: 240,
      backgroundColor: 'white', country: 'XX', docType: 'exam'
    },
    seoContent: {
      specTable: [
        { label: 'File Size', value: '60 KB to 240 KB' },
        { label: 'Dimensions', value: '420 x 540 pixels' },
        { label: 'Format', value: 'JPG / JPEG only' },
        { label: 'Background', value: 'Plain White' }
      ],
      detailedDescription: 'Applying for the Canada Visa requires absolute precision. The online application portal employs strict validation rules that will instantly reject images falling outside their rigid 60 KB to 240 KB limit. Furthermore, the official notification explicitly demands a plain white background. Many candidates face frustration during the final hours of form submission because their smartphone photos are either too large in file size or have incorrect pixel dimensions.\n\nOur free utility handles all the technical heavy lifting directly in your browser. By utilizing advanced client-side HTML5 Canvas processing, your image is securely scaled, cropped, and compressed without ever being uploaded to a remote server. This ensures your DPI, dimensions, and file compression are perfectly aligned with server requirements, guaranteeing a smooth, error-free application process.',
      rejectionTips: [
        'Avoid submitting photos taken with dark glasses or tinted spectacles. Regular prescription glasses are allowed only if there is no glare.',
        'Ensure the photo is not blurred; low-resolution selfies are the number one cause of rejection.',
        'Do not digitally alter your facial features using beauty filters or AI enhancements.'
      ]
    },
    howToSteps: [
      'Click the upload area to select your unedited portrait photo.',
      'Our tool automatically detects the aspect ratio and prepares it for the 420x540 pixel format.',
      'The compression engine adjusts the quality to ensure the file is under 240KB.',
      'Click download and instantly receive your compliant photo.'
    ],
    faqs: [
      { question: 'Why is my Canada Visa photo getting rejected?', answer: 'The most common reasons for rejection are file size (must be under 240KB), incorrect dimensions (420x540), or a dark/cluttered background. Our tool automatically fixes the size and dimensions.' },
      { question: 'Is it safe to upload my photo here?', answer: 'Yes, 100% safe. Your photo is never uploaded to any server. All processing happens entirely within your web browser using HTML5 technologies.' },
      { question: 'Can I use a photo taken with my phone?', answer: 'Yes, as long as you stand against a plain white wall with good lighting. Once you take the photo, use our tool to crop it to the correct proportions and compress the file size.' }
    ],
    relatedSlugs: []
  },
  {
    slug: 'australia-visa-photo',
    action: 'resize',
    inputFormats: ['jpg', 'jpeg', 'png', 'webp'],
    outputFormat: 'jpg',
    category: 'visas',
    title: 'Resize Australia Visa Photo Online Free | ImageFix',
    metaDescription: 'Free online tool to resize your Australia Visa application photo to the exact 50-500KB size and 413x531 pixel dimensions required.',
    h1: 'Australia Visa Resizer',
    keywords: ['Australia Visa photo size', 'Australia Visa photo resize', 'Australia Visa photo requirements'],
    heroDescription: 'The Australia Visa has strict photo requirements. Use our tool to automatically crop, resize, and compress your photograph to meet the exact guidelines without losing clarity.',
    adDensity: 'medium',
    settings: [
      { id: 'width', label: 'Width (px)', type: 'number', defaultValue: 413, min: 100, max: 2000 },
      { id: 'height', label: 'Height (px)', type: 'number', defaultValue: 531, min: 100, max: 2000 },
      { id: 'maxSize', label: 'Max Size (KB)', type: 'number', defaultValue: 499, min: 50, max: 500 }
    ],
    compliance: {
      targetWidth: 413, targetHeight: 531, minSizeKB: 50, maxSizeKB: 500,
      backgroundColor: 'white', country: 'XX', docType: 'exam'
    },
    seoContent: {
      specTable: [
        { label: 'File Size', value: '50 KB to 500 KB' },
        { label: 'Dimensions', value: '413 x 531 pixels' },
        { label: 'Format', value: 'JPG / JPEG only' },
        { label: 'Background', value: 'Plain White' }
      ],
      detailedDescription: 'Applying for the Australia Visa requires absolute precision. The online application portal employs strict validation rules that will instantly reject images falling outside their rigid 50 KB to 500 KB limit. Furthermore, the official notification explicitly demands a plain white background. Many candidates face frustration during the final hours of form submission because their smartphone photos are either too large in file size or have incorrect pixel dimensions.\n\nOur free utility handles all the technical heavy lifting directly in your browser. By utilizing advanced client-side HTML5 Canvas processing, your image is securely scaled, cropped, and compressed without ever being uploaded to a remote server. This ensures your DPI, dimensions, and file compression are perfectly aligned with server requirements, guaranteeing a smooth, error-free application process.',
      rejectionTips: [
        'Avoid submitting photos taken with dark glasses or tinted spectacles. Regular prescription glasses are allowed only if there is no glare.',
        'Ensure the photo is not blurred; low-resolution selfies are the number one cause of rejection.',
        'Do not digitally alter your facial features using beauty filters or AI enhancements.'
      ]
    },
    howToSteps: [
      'Click the upload area to select your unedited portrait photo.',
      'Our tool automatically detects the aspect ratio and prepares it for the 413x531 pixel format.',
      'The compression engine adjusts the quality to ensure the file is under 500KB.',
      'Click download and instantly receive your compliant photo.'
    ],
    faqs: [
      { question: 'Why is my Australia Visa photo getting rejected?', answer: 'The most common reasons for rejection are file size (must be under 500KB), incorrect dimensions (413x531), or a dark/cluttered background. Our tool automatically fixes the size and dimensions.' },
      { question: 'Is it safe to upload my photo here?', answer: 'Yes, 100% safe. Your photo is never uploaded to any server. All processing happens entirely within your web browser using HTML5 technologies.' },
      { question: 'Can I use a photo taken with my phone?', answer: 'Yes, as long as you stand against a plain white wall with good lighting. Once you take the photo, use our tool to crop it to the correct proportions and compress the file size.' }
    ],
    relatedSlugs: []
  },
  {
    slug: 'indian-passport-photo',
    action: 'resize',
    inputFormats: ['jpg', 'jpeg', 'png', 'webp'],
    outputFormat: 'jpg',
    category: 'passports',
    title: 'Resize Indian Passport Photo Online Free | ImageFix',
    metaDescription: 'Free online tool to resize your Indian Passport application photo to the exact 20-100KB size and 630x810 pixel dimensions required.',
    h1: 'Indian Passport Resizer',
    keywords: ['Indian Passport photo size', 'Indian Passport photo resize', 'Indian Passport photo requirements'],
    heroDescription: 'The Indian Passport has strict photo requirements. Use our tool to automatically crop, resize, and compress your photograph to meet the exact guidelines without losing clarity.',
    adDensity: 'medium',
    settings: [
      { id: 'width', label: 'Width (px)', type: 'number', defaultValue: 630, min: 100, max: 2000 },
      { id: 'height', label: 'Height (px)', type: 'number', defaultValue: 810, min: 100, max: 2000 },
      { id: 'maxSize', label: 'Max Size (KB)', type: 'number', defaultValue: 99, min: 20, max: 100 }
    ],
    compliance: {
      targetWidth: 630, targetHeight: 810, minSizeKB: 20, maxSizeKB: 100,
      backgroundColor: 'white', country: 'XX', docType: 'exam'
    },
    seoContent: {
      specTable: [
        { label: 'File Size', value: '20 KB to 100 KB' },
        { label: 'Dimensions', value: '630 x 810 pixels' },
        { label: 'Format', value: 'JPG / JPEG only' },
        { label: 'Background', value: 'Plain White' }
      ],
      detailedDescription: 'Applying for the Indian Passport requires absolute precision. The online application portal employs strict validation rules that will instantly reject images falling outside their rigid 20 KB to 100 KB limit. Furthermore, the official notification explicitly demands a plain white background. Many candidates face frustration during the final hours of form submission because their smartphone photos are either too large in file size or have incorrect pixel dimensions.\n\nOur free utility handles all the technical heavy lifting directly in your browser. By utilizing advanced client-side HTML5 Canvas processing, your image is securely scaled, cropped, and compressed without ever being uploaded to a remote server. This ensures your DPI, dimensions, and file compression are perfectly aligned with server requirements, guaranteeing a smooth, error-free application process.',
      rejectionTips: [
        'Avoid submitting photos taken with dark glasses or tinted spectacles. Regular prescription glasses are allowed only if there is no glare.',
        'Ensure the photo is not blurred; low-resolution selfies are the number one cause of rejection.',
        'Do not digitally alter your facial features using beauty filters or AI enhancements.'
      ]
    },
    howToSteps: [
      'Click the upload area to select your unedited portrait photo.',
      'Our tool automatically detects the aspect ratio and prepares it for the 630x810 pixel format.',
      'The compression engine adjusts the quality to ensure the file is under 100KB.',
      'Click download and instantly receive your compliant photo.'
    ],
    faqs: [
      { question: 'Why is my Indian Passport photo getting rejected?', answer: 'The most common reasons for rejection are file size (must be under 100KB), incorrect dimensions (630x810), or a dark/cluttered background. Our tool automatically fixes the size and dimensions.' },
      { question: 'Is it safe to upload my photo here?', answer: 'Yes, 100% safe. Your photo is never uploaded to any server. All processing happens entirely within your web browser using HTML5 technologies.' },
      { question: 'Can I use a photo taken with my phone?', answer: 'Yes, as long as you stand against a plain white wall with good lighting. Once you take the photo, use our tool to crop it to the correct proportions and compress the file size.' }
    ],
    relatedSlugs: []
  },
  {
    slug: 'aadhaar-card-photo',
    action: 'resize',
    inputFormats: ['jpg', 'jpeg', 'png', 'webp'],
    outputFormat: 'jpg',
    category: 'indian-id-documents',
    title: 'Resize Aadhaar Card Photo Online Free | ImageFix',
    metaDescription: 'Free online tool to resize your Aadhaar Card application photo to the exact 20-50KB size and 300x400 pixel dimensions required.',
    h1: 'Aadhaar Card Resizer',
    keywords: ['Aadhaar Card photo size', 'Aadhaar Card photo resize', 'Aadhaar Card photo requirements'],
    heroDescription: 'The Aadhaar Card has strict photo requirements. Use our tool to automatically crop, resize, and compress your photograph to meet the exact guidelines without losing clarity.',
    adDensity: 'medium',
    settings: [
      { id: 'width', label: 'Width (px)', type: 'number', defaultValue: 300, min: 100, max: 2000 },
      { id: 'height', label: 'Height (px)', type: 'number', defaultValue: 400, min: 100, max: 2000 },
      { id: 'maxSize', label: 'Max Size (KB)', type: 'number', defaultValue: 49, min: 20, max: 50 }
    ],
    compliance: {
      targetWidth: 300, targetHeight: 400, minSizeKB: 20, maxSizeKB: 50,
      backgroundColor: 'white', country: 'XX', docType: 'exam'
    },
    seoContent: {
      specTable: [
        { label: 'File Size', value: '20 KB to 50 KB' },
        { label: 'Dimensions', value: '300 x 400 pixels' },
        { label: 'Format', value: 'JPG / JPEG only' },
        { label: 'Background', value: 'Plain White' }
      ],
      detailedDescription: 'Applying for the Aadhaar Card requires absolute precision. The online application portal employs strict validation rules that will instantly reject images falling outside their rigid 20 KB to 50 KB limit. Furthermore, the official notification explicitly demands a plain white background. Many candidates face frustration during the final hours of form submission because their smartphone photos are either too large in file size or have incorrect pixel dimensions.\n\nOur free utility handles all the technical heavy lifting directly in your browser. By utilizing advanced client-side HTML5 Canvas processing, your image is securely scaled, cropped, and compressed without ever being uploaded to a remote server. This ensures your DPI, dimensions, and file compression are perfectly aligned with server requirements, guaranteeing a smooth, error-free application process.',
      rejectionTips: [
        'Avoid submitting photos taken with dark glasses or tinted spectacles. Regular prescription glasses are allowed only if there is no glare.',
        'Ensure the photo is not blurred; low-resolution selfies are the number one cause of rejection.',
        'Do not digitally alter your facial features using beauty filters or AI enhancements.'
      ]
    },
    howToSteps: [
      'Click the upload area to select your unedited portrait photo.',
      'Our tool automatically detects the aspect ratio and prepares it for the 300x400 pixel format.',
      'The compression engine adjusts the quality to ensure the file is under 50KB.',
      'Click download and instantly receive your compliant photo.'
    ],
    faqs: [
      { question: 'Why is my Aadhaar Card photo getting rejected?', answer: 'The most common reasons for rejection are file size (must be under 50KB), incorrect dimensions (300x400), or a dark/cluttered background. Our tool automatically fixes the size and dimensions.' },
      { question: 'Is it safe to upload my photo here?', answer: 'Yes, 100% safe. Your photo is never uploaded to any server. All processing happens entirely within your web browser using HTML5 technologies.' },
      { question: 'Can I use a photo taken with my phone?', answer: 'Yes, as long as you stand against a plain white wall with good lighting. Once you take the photo, use our tool to crop it to the correct proportions and compress the file size.' }
    ],
    relatedSlugs: []
  },
  {
    slug: 'pan-card-uti-photo',
    action: 'resize',
    inputFormats: ['jpg', 'jpeg', 'png', 'webp'],
    outputFormat: 'jpg',
    category: 'indian-id-documents',
    title: 'Resize PAN Card (UTI) Photo Online Free | ImageFix',
    metaDescription: 'Free online tool to resize your PAN Card (UTI) application photo to the exact 10-30KB size and 213x213 pixel dimensions required.',
    h1: 'PAN Card (UTI) Resizer',
    keywords: ['PAN Card (UTI) photo size', 'PAN Card (UTI) photo resize', 'PAN Card (UTI) photo requirements'],
    heroDescription: 'The PAN Card (UTI) has strict photo requirements. Use our tool to automatically crop, resize, and compress your photograph to meet the exact guidelines without losing clarity.',
    adDensity: 'medium',
    settings: [
      { id: 'width', label: 'Width (px)', type: 'number', defaultValue: 213, min: 100, max: 2000 },
      { id: 'height', label: 'Height (px)', type: 'number', defaultValue: 213, min: 100, max: 2000 },
      { id: 'maxSize', label: 'Max Size (KB)', type: 'number', defaultValue: 29, min: 10, max: 30 }
    ],
    compliance: {
      targetWidth: 213, targetHeight: 213, minSizeKB: 10, maxSizeKB: 30,
      backgroundColor: 'white', country: 'XX', docType: 'exam'
    },
    seoContent: {
      specTable: [
        { label: 'File Size', value: '10 KB to 30 KB' },
        { label: 'Dimensions', value: '213 x 213 pixels' },
        { label: 'Format', value: 'JPG / JPEG only' },
        { label: 'Background', value: 'Plain White' }
      ],
      detailedDescription: 'Applying for the PAN Card (UTI) requires absolute precision. The online application portal employs strict validation rules that will instantly reject images falling outside their rigid 10 KB to 30 KB limit. Furthermore, the official notification explicitly demands a plain white background. Many candidates face frustration during the final hours of form submission because their smartphone photos are either too large in file size or have incorrect pixel dimensions.\n\nOur free utility handles all the technical heavy lifting directly in your browser. By utilizing advanced client-side HTML5 Canvas processing, your image is securely scaled, cropped, and compressed without ever being uploaded to a remote server. This ensures your DPI, dimensions, and file compression are perfectly aligned with server requirements, guaranteeing a smooth, error-free application process.',
      rejectionTips: [
        'Avoid submitting photos taken with dark glasses or tinted spectacles. Regular prescription glasses are allowed only if there is no glare.',
        'Ensure the photo is not blurred; low-resolution selfies are the number one cause of rejection.',
        'Do not digitally alter your facial features using beauty filters or AI enhancements.'
      ]
    },
    howToSteps: [
      'Click the upload area to select your unedited portrait photo.',
      'Our tool automatically detects the aspect ratio and prepares it for the 213x213 pixel format.',
      'The compression engine adjusts the quality to ensure the file is under 30KB.',
      'Click download and instantly receive your compliant photo.'
    ],
    faqs: [
      { question: 'Why is my PAN Card (UTI) photo getting rejected?', answer: 'The most common reasons for rejection are file size (must be under 30KB), incorrect dimensions (213x213), or a dark/cluttered background. Our tool automatically fixes the size and dimensions.' },
      { question: 'Is it safe to upload my photo here?', answer: 'Yes, 100% safe. Your photo is never uploaded to any server. All processing happens entirely within your web browser using HTML5 technologies.' },
      { question: 'Can I use a photo taken with my phone?', answer: 'Yes, as long as you stand against a plain white wall with good lighting. Once you take the photo, use our tool to crop it to the correct proportions and compress the file size.' }
    ],
    relatedSlugs: []
  },
  {
    slug: 'pan-card-uti-signature',
    action: 'resize',
    inputFormats: ['jpg', 'jpeg', 'png', 'webp'],
    outputFormat: 'jpg',
    category: 'signature-resizer',
    title: 'Resize PAN Card Signature (UTI) Photo Online Free | ImageFix',
    metaDescription: 'Free online tool to resize your PAN Card Signature (UTI) application photo to the exact 10-60KB size and 400x200 pixel dimensions required.',
    h1: 'PAN Card Signature (UTI) Resizer',
    keywords: ['PAN Card Signature (UTI) photo size', 'PAN Card Signature (UTI) photo resize', 'PAN Card Signature (UTI) photo requirements'],
    heroDescription: 'The PAN Card Signature (UTI) has strict photo requirements. Use our tool to automatically crop, resize, and compress your photograph to meet the exact guidelines without losing clarity.',
    adDensity: 'medium',
    settings: [
      { id: 'width', label: 'Width (px)', type: 'number', defaultValue: 400, min: 100, max: 2000 },
      { id: 'height', label: 'Height (px)', type: 'number', defaultValue: 200, min: 100, max: 2000 },
      { id: 'maxSize', label: 'Max Size (KB)', type: 'number', defaultValue: 59, min: 10, max: 60 }
    ],
    compliance: {
      targetWidth: 400, targetHeight: 200, minSizeKB: 10, maxSizeKB: 60,
      backgroundColor: 'white', country: 'XX', docType: 'exam'
    },
    seoContent: {
      specTable: [
        { label: 'File Size', value: '10 KB to 60 KB' },
        { label: 'Dimensions', value: '400 x 200 pixels' },
        { label: 'Format', value: 'JPG / JPEG only' },
        { label: 'Background', value: 'Plain White' }
      ],
      detailedDescription: 'Applying for the PAN Card Signature (UTI) requires absolute precision. The online application portal employs strict validation rules that will instantly reject images falling outside their rigid 10 KB to 60 KB limit. Furthermore, the official notification explicitly demands a plain white background. Many candidates face frustration during the final hours of form submission because their smartphone photos are either too large in file size or have incorrect pixel dimensions.\n\nOur free utility handles all the technical heavy lifting directly in your browser. By utilizing advanced client-side HTML5 Canvas processing, your image is securely scaled, cropped, and compressed without ever being uploaded to a remote server. This ensures your DPI, dimensions, and file compression are perfectly aligned with server requirements, guaranteeing a smooth, error-free application process.',
      rejectionTips: [
        'Avoid submitting photos taken with dark glasses or tinted spectacles. Regular prescription glasses are allowed only if there is no glare.',
        'Ensure the photo is not blurred; low-resolution selfies are the number one cause of rejection.',
        'Do not digitally alter your facial features using beauty filters or AI enhancements.'
      ]
    },
    howToSteps: [
      'Click the upload area to select your unedited portrait photo.',
      'Our tool automatically detects the aspect ratio and prepares it for the 400x200 pixel format.',
      'The compression engine adjusts the quality to ensure the file is under 60KB.',
      'Click download and instantly receive your compliant photo.'
    ],
    faqs: [
      { question: 'Why is my PAN Card Signature (UTI) photo getting rejected?', answer: 'The most common reasons for rejection are file size (must be under 60KB), incorrect dimensions (400x200), or a dark/cluttered background. Our tool automatically fixes the size and dimensions.' },
      { question: 'Is it safe to upload my photo here?', answer: 'Yes, 100% safe. Your photo is never uploaded to any server. All processing happens entirely within your web browser using HTML5 technologies.' },
      { question: 'Can I use a photo taken with my phone?', answer: 'Yes, as long as you stand against a plain white wall with good lighting. Once you take the photo, use our tool to crop it to the correct proportions and compress the file size.' }
    ],
    relatedSlugs: []
  },
  {
    slug: 'oci-card-photo',
    action: 'resize',
    inputFormats: ['jpg', 'jpeg', 'png', 'webp'],
    outputFormat: 'jpg',
    category: 'indian-id-documents',
    title: 'Resize OCI Card Photo Online Free | ImageFix',
    metaDescription: 'Free online tool to resize your OCI Card application photo to the exact 20-200KB size and 600x600 pixel dimensions required.',
    h1: 'OCI Card Resizer',
    keywords: ['OCI Card photo size', 'OCI Card photo resize', 'OCI Card photo requirements'],
    heroDescription: 'The OCI Card has strict photo requirements. Use our tool to automatically crop, resize, and compress your photograph to meet the exact guidelines without losing clarity.',
    adDensity: 'medium',
    settings: [
      { id: 'width', label: 'Width (px)', type: 'number', defaultValue: 600, min: 100, max: 2000 },
      { id: 'height', label: 'Height (px)', type: 'number', defaultValue: 600, min: 100, max: 2000 },
      { id: 'maxSize', label: 'Max Size (KB)', type: 'number', defaultValue: 199, min: 20, max: 200 }
    ],
    compliance: {
      targetWidth: 600, targetHeight: 600, minSizeKB: 20, maxSizeKB: 200,
      backgroundColor: 'white', country: 'XX', docType: 'exam'
    },
    seoContent: {
      specTable: [
        { label: 'File Size', value: '20 KB to 200 KB' },
        { label: 'Dimensions', value: '600 x 600 pixels' },
        { label: 'Format', value: 'JPG / JPEG only' },
        { label: 'Background', value: 'Plain White' }
      ],
      detailedDescription: 'Applying for the OCI Card requires absolute precision. The online application portal employs strict validation rules that will instantly reject images falling outside their rigid 20 KB to 200 KB limit. Furthermore, the official notification explicitly demands a plain white background. Many candidates face frustration during the final hours of form submission because their smartphone photos are either too large in file size or have incorrect pixel dimensions.\n\nOur free utility handles all the technical heavy lifting directly in your browser. By utilizing advanced client-side HTML5 Canvas processing, your image is securely scaled, cropped, and compressed without ever being uploaded to a remote server. This ensures your DPI, dimensions, and file compression are perfectly aligned with server requirements, guaranteeing a smooth, error-free application process.',
      rejectionTips: [
        'Avoid submitting photos taken with dark glasses or tinted spectacles. Regular prescription glasses are allowed only if there is no glare.',
        'Ensure the photo is not blurred; low-resolution selfies are the number one cause of rejection.',
        'Do not digitally alter your facial features using beauty filters or AI enhancements.'
      ]
    },
    howToSteps: [
      'Click the upload area to select your unedited portrait photo.',
      'Our tool automatically detects the aspect ratio and prepares it for the 600x600 pixel format.',
      'The compression engine adjusts the quality to ensure the file is under 200KB.',
      'Click download and instantly receive your compliant photo.'
    ],
    faqs: [
      { question: 'Why is my OCI Card photo getting rejected?', answer: 'The most common reasons for rejection are file size (must be under 200KB), incorrect dimensions (600x600), or a dark/cluttered background. Our tool automatically fixes the size and dimensions.' },
      { question: 'Is it safe to upload my photo here?', answer: 'Yes, 100% safe. Your photo is never uploaded to any server. All processing happens entirely within your web browser using HTML5 technologies.' },
      { question: 'Can I use a photo taken with my phone?', answer: 'Yes, as long as you stand against a plain white wall with good lighting. Once you take the photo, use our tool to crop it to the correct proportions and compress the file size.' }
    ],
    relatedSlugs: []
  },
];
