import React from 'react';

export function GovernmentDisclaimer() {
  return (
    <div className="bg-yellow-50 border-4 border-black p-4 mt-8 shadow-[4px_4px_0px_#000]">
      <h3 className="font-bold text-lg mb-2 text-black font-[family-name:var(--font-heading)]">
        ⚠️ Important Disclaimer
      </h3>
      <p className="text-gray-800 text-sm">
        ImageFix is an independent utility tool and is <strong>not affiliated with any government body, embassy, or testing agency</strong>. 
        While we strive to keep our specifications accurate based on official publications, rules may change without notice. 
        Always verify the exact photo and signature requirements on the official application portal before submitting your form.
      </p>
    </div>
  );
}
