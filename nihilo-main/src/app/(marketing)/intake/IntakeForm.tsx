// MICROSOFT_BOOKING_URL: replace this placeholder with your Microsoft Booking page URL.
// e.g. https://outlook.office365.com/owa/calendar/NihiloSolutions@.../bookingpage/
const BOOKING_URL = 'REPLACE_WITH_MICROSOFT_BOOKING_URL';

export default function IntakeForm() {
  return (
    <main
      className="min-h-screen"
      style={{ background: '#05060A' }}
    >
      <div className="max-w-screen-xl mx-auto px-6 lg:px-16 pt-32 pb-24">

        {/* Header */}
        <div className="mb-12 max-w-xl">
          <p
            className="label mb-4"
            style={{ color: '#3A3F4A' }}
          >
            Discovery call
          </p>
          <h1
            className="text-[#F0F1F3] tracking-tight leading-tight mb-4"
            style={{
              fontFamily: 'var(--font-space-grotesk)',
              fontSize: 'clamp(32px, 4.5vw, 56px)',
              fontWeight: 600,
            }}
          >
            Book a call.
          </h1>
          <p className="text-[#9AA0AE] text-[15px] leading-relaxed max-w-md">
            Pick a time that works for you. We review every booking personally and come prepared with context on your business.
          </p>
        </div>

        {/* Booking embed */}
        <div
          className="w-full"
          style={{ border: '1px solid rgba(255,255,255,0.07)' }}
        >
          <iframe
            src={BOOKING_URL}
            width="100%"
            height="800"
            frameBorder="0"
            scrolling="yes"
            title="Book a discovery call with Nihilo Solutions"
            style={{ display: 'block', background: '#fff' }}
          />
        </div>

        {/* Fallback */}
        <p className="mt-8 text-[13px]" style={{ color: '#3A3F4A' }}>
          Prefer email?{' '}
          <a
            href="mailto:sam@nihilosolutions.com"
            className="transition-colors"
            style={{ color: '#5A6070' }}
          >
            sam@nihilosolutions.com
          </a>
        </p>
      </div>
    </main>
  );
}
