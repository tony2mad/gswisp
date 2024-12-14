import { useCallback } from 'react';

export function useScrollTo() {
  return useCallback((elementId: string) => {
    document.getElementById(elementId)?.scrollIntoView({
      behavior: 'smooth'
    });
  }, []);
}