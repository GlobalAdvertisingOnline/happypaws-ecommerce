"use client";

import { useEffect, useRef, useCallback } from "react";

/**
 * Hook that handles image reveal animation, including when images are
 * already loaded from cache (where React's onLoad would never fire).
 */
export function useImageReveal() {
  const ref = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const img = ref.current;
    if (!img) return;

    // Image already loaded (e.g. from browser cache) — reveal immediately
    if (img.complete && img.naturalWidth > 0) {
      img.classList.add("loaded");
    }
  }, []);

  const onLoad = useCallback((e: React.SyntheticEvent<HTMLImageElement>) => {
    e.currentTarget.classList.add("loaded");
  }, []);

  return { ref, onLoad };
}
