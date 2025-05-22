export default function CalendlyMeetingSchedule() {
  return (
    <div>
      <div
        className="w-full calendly-inline-widget min-w-[320px] h-[700px]"
        data-url="https://calendly.com/kuba-kolando-02-01/30min?background_color=f7f7f7"
      ></div>
      <script
        type="text/javascript"
        src="https://assets.calendly.com/assets/external/widget.js"
        async
      ></script>
    </div>
  );
}
