export default function MeetingSchedule() {
  return (
    <div
      className={`w-full caret-transparent text-center`}
    >
      <a
        target="_blank"
        href="https://calendar.app.google/q3B2rkBJtAgUdwLR6"
        className="rounded-2xl overflow-hidden bg-carrot-300 cursor-pointer no-underline flex items-center justify-center"
      >
        <iframe
          src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ3ts-5A-akJnclu6mwaWaqGKpGVy9SsseHM5ZrAEZf9VW-67BHmKht6l5R5aH0QkAsqCUmuQ13R?gv=true"
          width="100%"
          loading="lazy"
          title="Schedule Google Meeting"
          className="lg:h-[900px] lg:p-10 h-[500px] border-0 "
        ></iframe>
      </a>
    </div>
  );
}