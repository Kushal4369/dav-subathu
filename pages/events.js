import EventsCalendar from "./components/EventsCalendar";

export default function Events() {
  return (
    <div>
      <section className="bg-white pt-8 pb-4">
        <div className="mx-auto w-full max-w-[1400px] overflow-hidden rounded-xl bg-gray-100">
          <img
            src="/assets/events-gallery-header.jpg"
            alt="Events Gallery Header"
            className="w-full h-[420px] object-cover"
          />
        </div>
        <div className="mx-auto mt-6 max-w-3xl px-4 text-center md:px-8">
          <h1 className="text-4xl md:text-5xl font-semibold text-slate-900">
            Upcoming Events
          </h1>
          <p className="mt-3 text-base md:text-lg text-slate-600">
            Explore our calendar of school events, programs, and community activities.
          </p>
        </div>
      </section>

      <div className="px-4 py-10 md:px-8">
        <EventsCalendar />
      </div>
    </div>
  );
}