"use client";
import { useEffect, useRef, useState } from "react";
import scrollToSection from "./scrollFunctions";

const SideBar = () => {
  const sidebarRef = useRef<HTMLDivElement>(null);
  const footerRef = useRef<HTMLDivElement>(null);
  const [isSticky, setSticky] = useState(true);
  const [activeTab, setActiveTab] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sidebarRef.current || !footerRef.current) return;

      const sidebarRect = sidebarRef.current.getBoundingClientRect();

      const footerRect = footerRef.current.getBoundingClientRect();

      if (sidebarRect.bottom >= footerRect.top) {
        setSticky(false);
      } else {
        setSticky(true);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleTabClick = (sectionId: string) => {
    setActiveTab(sectionId);
    scrollToSection(sectionId);
  };

  return (
    <div
      ref={sidebarRef}
      className={`transition-all ${
        isSticky ? "sticky top-10" : "relative bottom-0"
      } duration-300 hidden lg:block h-screen md:w-1/6`}
    >
      <ul className="h-full flex justify-evenly flex-col uppercase">
        {[
          { name: "Introduction", id: "Introduction" },
          { name: "Use of the Site", id: "use-of-site" },
          { name: "User Submissions", id: "user-submissions" },
          { name: "Order Acceptance & Pricing", id: "order-acceptance" },
          { name: "Trademarks & Copyrights", id: "trademarks" },
          { name: "Applicable Law & Jurisdiction", id: "applicable-law" },
          { name: "Termination", id: "termination" },
        ].map((tab) => (
          <li
            key={tab.id}
            className={`w-44 cursor-pointer ${
              activeTab === tab.id
                ? "bg-gray-400 py-3 transition-all duration-300 ease-in rounded-md p-3  text-white"
                : ""
            }`}
            onClick={() => handleTabClick(tab.id)}
          >
            {tab.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SideBar;
