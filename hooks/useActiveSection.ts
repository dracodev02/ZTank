import { useEffect } from "react";

const useActiveSection = (sections: {name: string, section: string, threshold?: number}[], setActiveTab: any) => {
  useEffect(() => {

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {          
          const id = entry.target.getAttribute("id");
          setActiveTab(id);
        }
      });
    }, {
      threshold: sections.map((section) => section.threshold || 0.6),
    });

    sections.forEach((section) => {
      const element = document.getElementById(section.section);
      if (element) {
        observer.observe(element);
      }
    });

    // Cleanup khi component unmount
    return () => {
      sections.forEach((section) => {
        const element = document.getElementById(section.section);
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, [sections, setActiveTab]);
};

export default useActiveSection;
