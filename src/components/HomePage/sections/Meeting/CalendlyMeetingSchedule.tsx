import { useEffect, useRef, useState } from 'react';

export default function CalendlyMeetingSchedule() {
  const [showWidget, setShowWidget] = useState(false);
  const containerRef = useRef(null);

  const options = {
    root: null,
    rootMargin: '0px 0px 100% 0px',
  };

  useEffect(() => {
    const loadCalendly = () => {
      if (
        !document.querySelector(
          'script[src="https://assets.calendly.com/assets/external/widget.js"]'
        )
      ) {
        const script = document.createElement('script');
        script.src = 'https://assets.calendly.com/assets/external/widget.js';
        script.async = true;
        document.body.appendChild(script);
      }
      setShowWidget(true);
    };
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        loadCalendly();
      }
    }, options);
    if (containerRef.current) observer.observe(containerRef.current);

    return () => {
      if (containerRef.current) observer.unobserve(containerRef.current);
    };
  }, [containerRef, options]);

  return (
    <div
      ref={containerRef}
      className="w-full min-h-[700px] bg-[#F7F7F7] rounded-[12px]"
    >
      {showWidget && (
        <div
          className="w-full calendly-inline-widget min-w-[320px] h-[700px]"
          data-url="https://calendly.com/kuba-kolando-02-01/30min?background_color=f7f7f7"
        ></div>
      )}
    </div>
  );
}
