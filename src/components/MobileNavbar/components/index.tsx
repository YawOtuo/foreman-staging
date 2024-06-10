//@ts-nocheck
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { ExpandCircle } from "@/lib/animations";
import TermsMenuArea from "./MobileMenuArea";
import { useMobileNavStore } from "./useMobileNavStore";

export default function TermsMenu(props: any) {
  // const [hide, setHide] = useState(false);
  // const [windowLimit, setWindowLimit] = useState(false);
  const toggle = useMobileNavStore((state) => state.MobileMenuStore);

  const bottomLinksRef = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLElement>(null);
  const isInViewport = useIsElementInViewport(bottomLinksRef, menuRef);
  // const { user } = useAppStore();

  return (
    <Root
      ref={menuRef}
      tabIndex="0"
      className="hidden-scrollbar menu-bg fixed top-0 z-50 min-h-dvh w-full gap-20 overflow-y-scroll pb-20 lg:pb-0"
      variants={ExpandCircle}
      exit={{
        ...ExpandCircle.closed,
        transitionEnd: {
          // display: 'none',
          opacity: 0,
        },
      }}
      animate={
        props?.isOpen
          ? {
              ...ExpandCircle.open(),
              opacity: 1,
            }
          : {
              ...ExpandCircle.closed,
              transitionEnd: {
                // display: 'none',
                opacity: 0,
              },
            }
      }
      initial={{
        ...ExpandCircle.closed,
        transitionEnd: {
          // display: 'none',
          opacity: 0,
        },
      }}
    >
      <TermsMenuArea data={props?.data} />
    </Root>
  );
}
const Root = styled(motion.aside, {
  // gap:"px",
  height: "100svh",
  position: "fixed",
  overflowY: "auto",
  // minHeight: "100svh",
  top: 0,
  left: 0,
  right: 0,
  // bottom: "0px",
  width: "100%",
  zIndex: "9999",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",

  ".bottomLink": {
    color: "White",
    fontWeight: 600,
    "&:hover": {
      color: "#F1B346",
      scale: "1.15",
    },
  },
});
