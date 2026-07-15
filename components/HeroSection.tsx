const AUTH_URL = process.env.NODE_ENV === "development"
  ? "http://localhost:3010"
  : "https://app.saveaday.ai";

export default function HeroSection() {
  return (
    <section className="relative flex min-h-[100svh] w-full items-center overflow-hidden bg-[#111] pt-16 sm:pt-20">
      <div
        className="absolute inset-0 z-0 bg-cover bg-[position:58%_center] bg-no-repeat opacity-80 sm:bg-center"
        style={{ backgroundImage: "url('/images/hero_bg.jpg')" }}
      />
      <div className="absolute inset-0 z-0 bg-gradient-to-r from-black/90 via-black/65 to-black/20 sm:via-black/50 sm:to-transparent" />
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-black/55 via-transparent to-black/35" />

      <div className="relative z-10 mx-auto flex w-full max-w-[1400px] flex-col px-4 py-14 sm:px-6 sm:py-20 lg:px-12">
        <div className="max-w-[500px]">
          <h1 className="mb-5 font-serif text-[clamp(2.75rem,12vw,3.5rem)] leading-[1.06] text-white sm:mb-6 sm:text-6xl sm:leading-[1.1] lg:text-[64px]">
            More customers. <br />Less chasing.
          </h1>
          <p className="mb-7 max-w-[420px] text-[15px] leading-6 text-white/90 sm:mb-8 sm:text-base sm:leading-relaxed">
            Help every enquiry move forward—from first question to booked customer—without burying your team in admin and follow-up.
          </p>
          <div className="flex flex-col items-center gap-3 sm:flex-row sm:gap-4">
            <a
              href={`${AUTH_URL}/signup`}
              className="inline-flex min-h-12 w-full items-center justify-center bg-[#3CA6A6] px-6 py-3 text-center text-sm font-medium text-[#082B2B] transition-colors hover:bg-[#74EFC3] sm:w-auto"
            >
              Try for free
            </a>
            <a
              href="#why-saveaday"
              className="inline-flex min-h-12 w-full items-center justify-center border border-[#74EFC3]/35 bg-[#74EFC3]/10 px-6 py-3 text-center text-sm font-medium text-white transition-colors hover:bg-[#74EFC3]/20 sm:w-auto"
            >
              See the difference
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
