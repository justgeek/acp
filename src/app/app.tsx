'use client';

import * as React from 'react';
import type { Viewport } from 'next';

import '@/styles/global.css';

import { usePathname } from 'next/navigation';

import { UserProvider } from '@/contexts/user-context';
import { LocalizationProvider } from '@/components/core/localization-provider';
import { ThemeProvider } from '@/components/core/theme-provider/theme-provider';
import GlobalLayout from '@/components/layout';

export const viewport = { width: 'device-width', initialScale: 1 } satisfies Viewport;

interface LayoutProps {
  children: React.ReactNode;
}

export default function App({ children }: LayoutProps): React.JSX.Element {
  const path = usePathname();
  const isAuthPath = path.includes('/auth');
  return (
    <LocalizationProvider>
      <UserProvider>
        <ThemeProvider>{isAuthPath ? <>{children}</> : <GlobalLayout>{children}</GlobalLayout>}</ThemeProvider>
      </UserProvider>
    </LocalizationProvider>
  );
}
