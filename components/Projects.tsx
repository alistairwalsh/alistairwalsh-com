const projects = [
  {
    title: 'Cerner FHIR Pipeline',
    description:
      'End-to-end data pipeline for extracting, transforming, and serving clinical data via the FHIR standard from Cerner EHR systems.',
    link: 'https://cerner.glueratglobal.com',
  },
  {
    title: 'REDCap AI Ingestion Pipeline',
    description:
      'Automated clinical document ingestion using Claude vision and FastAPI, extracting structured data from unstructured medical records into REDCap.',
    link: null,
  },
  {
    title: 'Clinical ML Models',
    description:
      'Machine learning models for clinical risk prediction, patient stratification, and outcome forecasting using electronic health record data.',
    link: null,
  },
  {
    title: 'Health Data Infrastructure',
    description:
      'Scalable data infrastructure for health organisations, including ETL pipelines, data warehousing, and real-time analytics dashboards.',
    link: null,
  },
];

export default function Projects() {
  return (
    <section id="projects" className="border-t border-primary/10">
      <div className="max-w-5xl mx-auto px-6 py-20">
        <h2 className="text-sm font-medium tracking-widest uppercase text-accent mb-8">
          Projects
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <div
              key={project.title}
              className="border border-primary/10 rounded-lg p-6 bg-white"
            >
              <h3 className="text-primary font-semibold text-lg mb-2">
                {project.title}
              </h3>
              <p className="text-primary/60 text-sm leading-relaxed mb-4">
                {project.description}
              </p>
              {project.link ? (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent text-sm font-medium hover:underline"
                >
                  View project &rarr;
                </a>
              ) : (
                <span className="text-primary/30 text-sm">Coming soon</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
