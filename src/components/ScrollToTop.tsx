"use client"
import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
export default function useScrollToTop() {
  const pathname = usePathname();

  // useEffect(() => {
  //   window.scrollTo(0, 0);
  //   console.log('going to top')
  // }, [pathname]);

  return null;
}
