import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/portfolio')({
  component: Portfolio,
})

const projects = [
  {
    slug: 'healthcare-asset-tracking',
    title: 'Enterprise Asset Tracking',
    client: 'Sinbon — Healthcare',
    year: '2025',
    tags: ['Enterprise', 'Healthcare', 'System Design'],
    summary:
      'Designed a multi-party asset tracking system that increases visibility into equipment location, usage, and defect status across healthcare facilities.',
    color: 'bg-accent/8',
  },
  {
    slug: 'baker-hughes-integration',
    title: 'Large-Scale Product Integration',
    client: 'Baker Hughes — Energy',
    year: '2022 – 2025',
    tags: ['Enterprise', 'Energy', 'Cross-team'],
    summary:
      'Led design for a complex product integration across six Scrum teams in three countries, serving 2,000+ users in the energy sector.',
    color: 'bg-ink/5',
  },
  {
    slug: 'acode-software',
    title: 'Design Studio & Consulting',
    client: 'Acode Software',
    year: '2016 – 2021',
    tags: ['Founding', 'Consulting', 'Full-stack Design'],
    summary:
      'Co-founded and led the design practice of a software studio, delivering end-to-end consulting projects for international clients across five countries.',
    color: 'bg-accent/8',
  },
  {
    slug: 'eyedog-wayfinding',
    title: 'Hospital Wayfinding',
    client: 'Eyedog Indoor Navigation',
    year: '2014 – 2017',
    tags: ['Startup', 'Healthcare', 'Wayfinding'],
    summary:
      'Designed an indoor navigation product for hospitals, now deployed in 20+ facilities across the EU and US.',
    color: 'bg-ink/5',
  },
]

function Portfolio() {
  return (
    <div>
      {/* Header */}
      <section className="mx-auto max-w-5xl px-6 pb-16 pt-20 md:pt-24">
        <p className="mb-4 text-sm font-medium uppercase tracking-widest text-accent">
          Portfolio
        </p>
        <h1 className="mb-6 max-w-3xl font-serif text-4xl font-semibold text-ink md:text-5xl">
          Selected Work
        </h1>
        <p className="max-w-2xl text-lg leading-relaxed text-ink-light">
          A curated selection of projects spanning enterprise healthcare, energy,
          and startup products. Each case study explores the design challenges,
          process, and outcomes.
        </p>
      </section>

      {/* Project grid */}
      <section className="border-t border-border">
        <div className="mx-auto max-w-5xl">
          {projects.map((project, i) => (
            <article
              key={project.slug}
              className={`grid gap-8 border-b border-border px-6 py-12 md:grid-cols-2 md:gap-12 md:py-16 ${
                i % 2 === 0 ? '' : 'md:[direction:rtl] md:[&>*]:[direction:ltr]'
              }`}
            >
              {/* Image placeholder */}
              <div
                className={`flex aspect-[4/3] items-center justify-center ${project.color}`}
              >
                <div className="text-center text-sm text-ink-muted">
                  <div className="mb-2 text-4xl text-ink-muted/40">&#9634;</div>
                  <p>Project image</p>
                  <p className="text-xs">{project.title}</p>
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-col justify-center">
                <p className="mb-2 text-xs font-medium uppercase tracking-wider text-ink-muted">
                  {project.client} &middot; {project.year}
                </p>
                <h2 className="mb-4 font-serif text-2xl font-semibold text-ink md:text-3xl">
                  {project.title}
                </h2>
                <p className="mb-6 leading-relaxed text-ink-light">
                  {project.summary}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="border border-border px-3 py-1 text-xs font-medium uppercase tracking-wider text-ink-muted"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-surface-warm">
        <div className="mx-auto max-w-5xl px-6 py-16 text-center md:py-20">
          <h2 className="mb-4 font-serif text-3xl font-semibold text-ink">
            Want to know more?
          </h2>
          <p className="mx-auto mb-8 max-w-lg text-ink-light">
            I'd love to walk you through these projects in detail and discuss how
            I can contribute to your team.
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
