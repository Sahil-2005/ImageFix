'use client';

import React, { useEffect } from 'react';

// Anchor/Sticky ads typically don't require an explicit slot component,
// they are enabled at the account level. However, if we need to specifically
// configure or trigger them, or reserve space, we use this component.

export const AnchorAd: React.FC = () => {
  useEffect(() => {
    // Some manual initialization logic for sticky ads could go here
    // Usually AdSense auto-injects them, but we provide this hook for
    // explicit triggering if necessary.
  }, []);

  return null; // Anchor ads are injected by Google's script, we just return null.
};
