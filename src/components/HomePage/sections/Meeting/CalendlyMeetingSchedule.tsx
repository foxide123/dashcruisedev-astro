import { useEffect, useRef, useState } from "react";

export default function CalendlyMeetingSchedule() {
  const widgetRef = useRef(null)

  const callbackFunction = (entries:any) => {
    const [ entry ] = entries
    if(entry.isIntersecting){
      const script = document.createElement("script");
      script.src = "https://assets.calendly.com/assets/external/widget.js";
      script.async = true;
      document.body.appendChild(script);
    }
  }

  const options = {
    root: null,
    rootMargin: "0px 0px -10% 0px",
  }

  useEffect(() => {
    const observer = new IntersectionObserver(callbackFunction, options)
    if(widgetRef.current) observer.observe(widgetRef.current)

      return () => {
        if(widgetRef.current) observer.unobserve(widgetRef.current)
      }
  }, [widgetRef, options])

  return (
      <div
      ref={widgetRef}
        className="w-full calendly-inline-widget min-w-[320px] h-[700px]"
        data-url="https://calendly.com/kuba-kolando-02-01/30min?background_color=f7f7f7"
      ></div>
  );
}
