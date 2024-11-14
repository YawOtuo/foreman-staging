import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function useScrollRestoration() {
  const pathname = usePathname();
  const [scrollPositions, setScrollPositions] = useState<{ [key: string]: number }>({});

  useEffect(() => {
    // Save the scroll position before navigating away
    const saveScrollPosition = () => {
      setScrollPositions((prevPositions) => ({
        ...prevPositions,
        [pathname]: window.scrollY,
      }));
    };

    // Restore the scroll position after navigation
    const restoreScrollPosition = () => {
      if (scrollPositions[pathname] !== undefined) {
        window.scrollTo(0, scrollPositions[pathname]);
      } else {
        window.scrollTo(0, 0); // Default to top if no stored position
      }
    };

    // Save scroll position before leaving the page
    window.addEventListener('beforeunload', saveScrollPosition);
    window.addEventListener('popstate', restoreScrollPosition);

    // Run when pathname changes
    restoreScrollPosition();

    return () => {
      // Clean up event listeners
      window.removeEventListener('beforeunload', saveScrollPosition);
      window.removeEventListener('popstate', restoreScrollPosition);
    };
  }, [pathname, scrollPositions]);
}
