'use client';

import Image from 'next/image';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export const DynamicLogo = () => {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  // During SSR and initial client render, use light theme to match server
  if (!mounted) {
    return (
      <Image
        src="/favicon.svg"
        width={24}
        height={24}
        alt="Grace Logo"
        priority
      />
    );
  }

  return (
    <Image
      src={resolvedTheme === 'dark' ? '/favicondark.svg' : '/favicon.svg'}
      width={24}
      height={24}
      alt="Grace Logo"
      priority
    />
  );
};
