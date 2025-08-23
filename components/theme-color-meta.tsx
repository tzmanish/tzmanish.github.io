"use client"

import { useEffect, useMemo } from "react"
import { useTheme } from "./theme-provider"
import { Logo } from "./ui/logo"
import { renderToStaticMarkup } from "react-dom/server"

export function ThemeColorMeta() {
  const { theme, mounted } = useTheme()

  // Effect for updating theme color meta tag
  useEffect(() => {
    if (!mounted) return;

    const themeColorMeta = document.querySelector('meta[name="theme-color"]');
    if (themeColorMeta) {
      const bgColor = getComputedStyle(document.documentElement)
        .getPropertyValue('--background')
        .trim();

      themeColorMeta.setAttribute("content", bgColor);
    }
  }, [theme, mounted]);

  useEffect(() => {
    if (!mounted) return;

    const logoColor = getComputedStyle(document.documentElement)
      .getPropertyValue('--accent')
      .trim();
    const svgString = renderToStaticMarkup(<Logo color={logoColor} />);
    const favicon = document.querySelector('link[rel="icon"]') as HTMLLinkElement;

    let blobUrl: string | null = null;

    if (favicon && svgString) {
      const blob = new Blob([svgString], { type: 'image/svg+xml' });
      blobUrl = URL.createObjectURL(blob);
      favicon.href = blobUrl;
    }

    return () => {
      if (blobUrl) {
        URL.revokeObjectURL(blobUrl);
      }
    };
  }, [theme, mounted]);

  return null
}
