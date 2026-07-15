const AUTH_URL = process.env.NODE_ENV === "development"
  ? "http://localhost:3010"
  : "https://app.saveaday.ai";

export default function HeroSection() {
  return (
    <section className="relative w-full min-h-screen flex items-center bg-[#111] overflow-hidden pt-20">
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-80"
        style={{ backgroundImage: "url('/images/hero_bg.jpg')" }}
      />
      <div className="absolute inset-0 z-0 bg-gradient-to-r from-black/90 via-black/50 to-transparent" />
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-black/50 via-transparent to-transparent" />

      <div className="relative z-10 w-full mx-auto max-w-[1400px] px-6 lg:px-12 flex flex-col">
        <div className="max-w-[500px]">
          <h1 className="font-serif text-5xl sm:text-6xl lg:text-[64px] leading-[1.1] text-white mb-6">
            More customers. <br />Less chasing.
          </h1>
          <p className="text-[15px] sm:text-base text-white/90 mb-8 max-w-[420px] leading-relaxed">
            Help every enquiry move forward—from first question to booked customer—without burying your team in admin and follow-up.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <a
              href={`${AUTH_URL}/signup`}
              className="w-full sm:w-auto text-center px-6 py-2.5 bg-[#3CA6A6] text-[#082B2B] text-sm font-medium hover:bg-[#74EFC3] transition-colors"
            >
              Try for free
            </a>
            <a
              href="#why-saveaday"
              className="w-full sm:w-auto text-center px-6 py-2.5 bg-[#74EFC3]/10 border border-[#74EFC3]/35 text-white text-sm font-medium hover:bg-[#74EFC3]/20 transition-colors"
            >
              See the difference
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
