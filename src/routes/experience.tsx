import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/experience')({
  component: Experience,
})

const jobs = [
  {
    role: 'Product Designer',
    type: 'Contract',
    company: 'Multi-party Enterprise Healthcare System, led by Sinbon',
    location: 'Hybrid',
    period: '2025 – Present',
    description:
      'Designed an enterprise asset tracking system that increases visibility into equipment location, usage, and defect status, supporting efficient maintenance workflows and informed procurement planning.',
  },
  {
    role: 'Senior UX Designer',
    type: null,
    company: 'Baker Hughes',
    location: 'Delft',
    period: '2022 – 2025',
    description:
      'Led design for a large-scale product integration across six Scrum teams in NL, DE, and India, serving 2,000+ users.',
  },
  {
    role: 'Founding Designer',
    type: null,
    company: 'Acode Software',
    location: 'Den Haag',
    period: '2016 – 2021',
    description:
      'Led the studio as a founding designer, securing funding and guiding end-to-end software development consulting for clients in NL, BE, DE, JP, and TW.',
  },
  {
    role: 'Lead Designer',
    type: null,
    company: 'Eyedog Indoor Navigation',
    location: 'Remote',
    period: '2014 – 2017',
    description:
      'Led the design for a wayfinding startup, with the product now deployed in 20+ hospitals across the EU and US.',
  },
  {
    role: 'Interaction Designer',
    type: null,
    company: 'VanBerlo, Accenture',
    location: 'Den Haag',
    period: '2015 – 2016',
    description:
      'Designed rapid and high-fidelity prototypes for smart home, lifestyle, and sports products, collaborating with the technical team on product testing.',
  },
]

function Experience() {
  return (
    <div>
      {/* Header */}
      <section className="mx-auto max-w-5xl px-6 pb-16 pt-20 md:pt-24">
        <p className="mb-4 text-sm font-medium uppercase tracking-widest text-accent">
          Experience
        </p>
        <h1 className="mb-6 max-w-3xl font-serif text-4xl font-semibold text-ink md:text-5xl">
          15+ years shaping digital products
        </h1>
        <p className="max-w-2xl text-lg leading-relaxed text-ink-light">
          From founding a design studio to leading cross-continental product
          teams — a timeline of building things that matter.
        </p>
      </section>

      {/* Timeline */}
      <section className="border-t border-border">
        <div className="mx-auto max-w-5xl">
          {jobs.map((job, i) => (
            <div
              key={job.company}
              className={`grid gap-6 border-b border-border px-6 py-10 md:grid-cols-[200px_1fr] md:gap-12 md:py-14 ${
                i === 0 ? 'bg-surface-warm' : ''
              }`}
            >
              {/* Left column — date & location */}
              <div>
                <p className="text-sm font-semibold text-ink">{job.period}</p>
                <p className="text-sm text-ink-muted">{job.location}</p>
              </div>

              {/* Right column — details */}
              <div>
                <h2 className="mb-1 font-serif text-2xl font-semibold text-ink">
                  {job.role}
                  {job.type && (
                    <span className="ml-2 align-middle text-xs font-medium uppercase tracking-wider text-accent">
                      {job.type}
                    </span>
                  )}
                </h2>
                <p className="mb-4 text-sm font-medium text-accent">
                  {job.company}
                </p>
                <p className="max-w-xl leading-relaxed text-ink-light">
                  {job.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-surface-warm">
        <div className="mx-auto max-w-5xl px-6 py-16 text-center md:py-20">
          <h2 className="mb-4 font-serif text-3xl font-semibold text-ink">
            Interested in working together?
          </h2>
          <p className="mx-auto mb-8 max-w-lg text-ink-light">
            I'm always open to conversations about product design, enterprise
            systems, and meaningful collaboration.
          </p>
          <a
            href="mailto:c.shumeng@gmail.com"
            className="inline-block bg-accent px-8 py-3 text-sm font-medium uppercase tracking-wider text-white no-underline transition-colors hover:bg-accent-dark"
          >
            Get in Touch
          </a>
        </div>
      </section>
    </div>
  )
}
