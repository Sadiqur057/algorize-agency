"use client";

import { ReactLenis } from 'lenis/react';

export function LenisProvider({ children }:{ children: React.ReactNode }) {
  return (
    <ReactLenis
      root
      options={{
        prevent: (node) => {
          // Prevent Lenis from handling scroll in modal elements
          return Boolean(
            node.closest('[data-lenis-prevent]') ||
            node.closest('.modal') ||
            node.closest('[role="dialog"]') ||
            node.classList.contains('modal') ||
            node.classList.contains('is-visible')
          );
        }
      }}
    >
      {children}
    </ReactLenis>
  );
}
