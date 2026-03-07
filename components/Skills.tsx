const skills = [
  'Python',
  'FastAPI',
  'REDCap',
  'FHIR/HL7',
  'Machine Learning',
  'Claude API',
  'Docker',
  'PostgreSQL',
  'Next.js',
];

export default function Skills() {
  return (
    <section id="skills" className="border-t border-primary/10">
      <div className="max-w-5xl mx-auto px-6 py-20">
        <h2 className="text-sm font-medium tracking-widest uppercase text-accent mb-8">
          Skills
        </h2>
        <div className="flex flex-wrap gap-3">
          {skills.map((skill) => (
            <span
              key={skill}
              className="border border-primary/15 text-primary/80 text-sm px-4 py-2 rounded-full bg-white"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
