
import { useEffect } from 'react';

const IntersectionObserverComponent = () => {
  useEffect(() => {
    // Check if IntersectionObserver is available in the current environment
    if (typeof window !== 'undefined' && 'IntersectionObserver' in window) {
      const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15,
      };

      const handleIntersection = (entries: IntersectionObserverEntry[]) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      };

      const observer = new window.IntersectionObserver(handleIntersection, observerOptions);

      const sections = document.querySelectorAll('.section-fade-in');
      sections.forEach(section => {
        observer.observe(section);
      });

      return () => {
        sections.forEach(section => {
          observer.unobserve(section);
        });
      };
    }
    // If IntersectionObserver is not supported, we don't apply the fade-in effect
    return undefined;
  }, []);

  return null;
};

export default IntersectionObserverComponent;
