import Image from 'next/image';

export default function Hero() {
  return (
    <section className="max-w-5xl mx-auto px-6 py-24 md:py-32">
      <div className="flex flex-col md:flex-row md:items-center gap-10">
        <div className="shrink-0">
          <Image
            src="/headshot.jpg"
            alt="Alistair Walsh"
            width={160}
            height={160}
            className="rounded-full border-4 border-accent object-cover shadow-md"
            priority
          />
        </div>
        <div>
          <p className="text-accent text-sm font-medium tracking-widest uppercase mb-4">
            Data Scientist | MedTech | AI
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-primary tracking-tight mb-6">
            Alistair Walsh
          </h1>
          <p className="text-lg text-primary/60 max-w-xl">
            Turning health data into insight.
          </p>
          <div className="mt-8 h-px w-16 bg-accent" />
        </div>
      </div>
    </section>
  );
}
