export default function Contact() {
  return (
    <section id="contact" className="border-t border-primary/10">
      <div className="max-w-5xl mx-auto px-6 py-20">
        <h2 className="text-sm font-medium tracking-widest uppercase text-accent mb-8">
          Contact
        </h2>
        <p className="text-primary/60 mb-4">
          Interested in working together? Get in touch.
        </p>
        <a
          href="mailto:alistair@glueratglobal.com"
          className="text-accent font-medium hover:underline"
        >
          alistair@glueratglobal.com
        </a>
      </div>
    </section>
  );
}
