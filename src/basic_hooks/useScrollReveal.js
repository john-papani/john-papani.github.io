import { useEffect } from "react";

export const useScrollReveal = () => {
  useEffect(() => {
    const elements = document.querySelectorAll("[data-reveal]");
    if (typeof IntersectionObserver === "undefined") {
      elements.forEach((element) => element.classList.add("is-visible"));
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          entry.target.classList.toggle("is-visible", entry.isIntersecting);
        });
      },
      { threshold: 0.12 }
    );

    const observeElement = (element) => {
      if (!element.classList.contains("is-visible")) observer.observe(element);
    };

    elements.forEach(observeElement);
    const mutationObserver = new MutationObserver((mutations) => {
      mutations.forEach(({ addedNodes }) => {
        addedNodes.forEach((node) => {
          if (!(node instanceof Element)) return;
          if (node.matches("[data-reveal]")) observeElement(node);
          node.querySelectorAll("[data-reveal]").forEach(observeElement);
        });
      });
    });
    mutationObserver.observe(document.body, { childList: true, subtree: true });

    return () => {
      observer.disconnect();
      mutationObserver.disconnect();
    };
  }, []);
};
