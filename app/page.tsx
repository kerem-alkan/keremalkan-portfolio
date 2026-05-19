export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#0A0A0A] text-[#EAEAEA]">
      <div className="absolute left-1/2 top-0 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-[#1A1A1A] blur-[160px]" />
      <section className="flex min-h-screen flex-col justify-between px-10 py-10">
        
        <div className="flex items-center justify-between text-sm text-[#888888]">
          <p>Kerem Alkan</p>

          <div className="flex gap-6">
            <a href="https://github.com/kerem-alkan" target="_blank">
              GitHub
            </a>

            <a href="https://linkedin.com/in/kerem-alkan" target="_blank">
              LinkedIn
            </a>
          </div>
        </div>

        <div className="max-w-4xl">
          <p className="mb-6 text-sm uppercase tracking-[0.25em] text-[#666666]">
            Brand & Technology Specialist
          </p>

          <h1 className="mb-8 text-7xl font-semibold leading-[1.05] tracking-[-0.04em]">
            Building modern
            <br />
            digital experiences
            <br />
            through technology.
          </h1>

          <p className="max-w-2xl text-xl leading-9 text-[#A1A1A1]">
            Focused on retail operations, digital experience, front-end
            development and modern technology systems.
          </p>
        </div>

        <div className="flex items-center justify-between text-sm text-[#666666]">
          <p>Istanbul, Türkiye</p>

          <p>Available for selected projects</p>
        </div>
      </section>
      <section className="border-t border-[#1A1A1A] px-10 py-32">
  <div className="grid max-w-6xl grid-cols-1 gap-16 md:grid-cols-2">
    
    <div>
      <p className="mb-6 text-sm uppercase tracking-[0.25em] text-[#666666]">
        About
      </p>
    </div>

    <div>
      <p className="text-2xl leading-[1.8] text-[#D4D4D4]">
        I work at the intersection of retail operations, digital
        experience and modern technology systems.
      </p>

      <p className="mt-8 text-lg leading-8 text-[#888888]">
        Alongside premium consumer technology retail operations,
        I explore front-end development, UI/UX systems and modern
        digital interfaces focused on simplicity, usability and
        visual clarity.
      </p>
    </div>

  </div>
</section>
    </main>
  );
}