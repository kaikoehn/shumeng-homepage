import { createFileRoute, Link } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: Home,
})

function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="mx-auto max-w-5xl px-6 pb-20 pt-24 md:pt-32">
        <p className="mb-4 text-sm font-medium uppercase tracking-widest text-accent">
          Digital Product Designer
        </p>
        <h1 className="mb-6 max-w-3xl font-serif text-5xl leading-tight font-semibold text-ink md:text-7xl md:leading-[1.1]">
          Designing products{' '}
          <em className="text-accent">that scale</em>
        </h1>
        <p className="mb-10 max-w-2xl text-lg leading-relaxed text-ink-light md:text-xl">
          Senior designer with 15+ years of experience in enterprise and B2B
          digital products across healthcare and energy. I translate user and
          business needs into scalable solutions adopted at organizational scale.
        </p>
        <div className="flex flex-wrap gap-4">
          <Link
            to="/portfolio"
            className="inline-block bg-accent px-6 py-3 text-sm font-medium uppercase tracking-wider text-white no-underline transition-colors hover:bg-accent-dark"
          >
            View Work
          </Link>
          <Link
            to="/about"
            className="inline-block border border-ink px-6 py-3 text-sm font-medium uppercase tracking-wider text-ink no-underline transition-colors hover:bg-ink hover:text-surface"
          >
            About Me
          </Link>
        </div>
      </section>

      {/* Brief highlights */}
      <section className="border-t border-border bg-surface-warm">
        <div className="mx-auto grid max-w-5xl gap-px md:grid-cols-3">
          {[
            {
              number: '15+',
              label: 'Years of Experience',
              description: 'Enterprise & B2B digital products',
            },
            {
              number: '2,000+',
              label: 'Users Served',
              description: 'Cross-team product integration at scale',
            },
            {
              number: '6',
              label: 'Countries',
              description: 'Working across NL, DE, BE, JP, TW & more',
            },
          ].map((stat) => (
            <div
              key={stat.label}
              className="bg-surface p-8 md:p-10"
            >
              <p className="mb-1 font-serif text-4xl font-semibold text-accent">
                {stat.number}
              </p>
              <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-ink">
                {stat.label}
              </p>
              <p className="text-sm text-ink-muted">{stat.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Selected experience teaser */}
      <section className="mx-auto max-w-5xl px-6 py-20">
        <p className="mb-2 text-sm font-medium uppercase tracking-widest text-accent">
          Selected Experience
        </p>
        <h2 className="mb-12 font-serif text-3xl font-semibold text-ink md:text-4xl">
          Where I've made an impact
        </h2>

        <div className="grid gap-8 md:grid-cols-2">
          {[
            {
              role: 'Product Designer',
              company: 'Sinbon (Contract)',
              period: '2025 – Present',
              summary:
                'Designing an enterprise asset tracking system for a multi-party healthcare platform.',
            },
            {
              role: 'Senior UX Designer',
              company: 'Baker Hughes',
              period: '2022 – 2025',
              summary:
                'Led design for large-scale product integration across six Scrum teams, serving 2,000+ users.',
            },
            {
              role: 'Founding Designer',
              company: 'Acode Software',
              period: '2016 – 2021',
              summary:
                'Led the studio as founding designer, guiding end-to-end software consulting for international clients.',
            },
            {
              role: 'Lead Designer',
              company: 'Eyedog Indoor Navigation',
              period: '2014 – 2017',
              summary:
                'Led design for a wayfinding startup deployed in 20+ hospitals across the EU and US.',
            },
          ].map((job) => (
            <div
              key={job.company}
              className="group border border-border p-6 transition-colors hover:border-accent/30 hover:bg-surface-warm"
            >
              <p className="mb-1 text-xs font-medium uppercase tracking-wider text-ink-muted">
                {job.period}
              </p>
              <h3 className="mb-1 font-serif text-xl font-semibold text-ink">
                {job.role}
              </h3>
              <p className="mb-3 text-sm font-medium text-accent">
                {job.company}
              </p>
              <p className="text-sm leading-relaxed text-ink-light">
                {job.summary}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            to="/experience"
            className="text-sm font-medium uppercase tracking-wider text-accent no-underline transition-colors hover:text-accent-dark"
          >
            View Full Experience &rarr;
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-border bg-surface-warm">
        <div className="mx-auto max-w-5xl px-6 py-20 text-center">
          <h2 className="mb-4 font-serif text-3xl font-semibold text-ink md:text-4xl">
            Let's work together
          </h2>
          <p className="mx-auto mb-8 max-w-lg text-ink-light">
            I'm open to product design opportunities — especially in healthcare,
            energy, and enterprise SaaS.
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
