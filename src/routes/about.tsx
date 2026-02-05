import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/about')({
  component: About,
})

function About() {
  return (
    <div>
      {/* Header */}
      <section className="mx-auto max-w-5xl px-6 pb-16 pt-20 md:pt-24">
        <p className="mb-4 text-sm font-medium uppercase tracking-widest text-accent">
          About
        </p>
        <h1 className="mb-6 max-w-3xl font-serif text-4xl font-semibold text-ink md:text-5xl">
          Designing at the intersection of systems &amp; people
        </h1>
        <p className="max-w-2xl text-lg leading-relaxed text-ink-light">
          I'm Shu-Meng Chang, a digital product designer based in Delft, the
          Netherlands. With over 15 years of experience, I specialize in
          enterprise and B2B digital products across healthcare and energy —
          translating complex user and business needs into scalable solutions
          adopted at organizational scale.
        </p>
      </section>

      {/* Two-column: approach + photo placeholder */}
      <section className="border-t border-border bg-surface-warm">
        <div className="mx-auto grid max-w-5xl gap-12 px-6 py-16 md:grid-cols-2 md:py-20">
          <div>
            <h2 className="mb-6 font-serif text-2xl font-semibold text-ink">
              My Approach
            </h2>
            <div className="space-y-4 text-ink-light leading-relaxed">
              <p>
                I believe great design emerges from deep understanding — of users,
                of systems, and of the organizational context in which a product
                lives. My background in strategic product design drives me to look
                beyond screens and consider the full ecosystem.
              </p>
              <p>
                Whether I'm leading design across six Scrum teams or shaping a
                startup's first product, I focus on cross-team integration, system
                design, and building bridges between business strategy and user
                experience.
              </p>
              <p>
                I've worked internationally across the Netherlands, Germany,
                Belgium, Japan, Taiwan, and the United States — bringing a global
                perspective to every project.
              </p>
            </div>
          </div>

          {/* Photo placeholder */}
          <div className="flex items-center justify-center">
            <div className="flex aspect-[3/4] w-full max-w-sm items-center justify-center bg-border/50 text-sm text-ink-muted">
              Photo
            </div>
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="mx-auto max-w-5xl px-6 py-16 md:py-20">
        <p className="mb-2 text-sm font-medium uppercase tracking-widest text-accent">
          Education
        </p>
        <h2 className="mb-10 font-serif text-3xl font-semibold text-ink">
          Academic Background
        </h2>

        <div className="grid gap-8 md:grid-cols-3">
          {[
            {
              degree: 'MSc. Strategic Product Design',
              school: 'TU Delft',
              period: '2012 – 2014',
              note: 'ASML / NTIO Scholarship',
            },
            {
              degree: 'Guest Researcher',
              school: 'TU Eindhoven',
              period: '2014 – 2016',
              note: 'Business Process Design',
            },
            {
              degree: 'B.A. Commercial Design',
              school: 'Chung Yuan Christian University',
              period: '2006 – 2009',
              note: null,
            },
          ].map((edu) => (
            <div key={edu.degree} className="border-l-2 border-accent/30 pl-6">
              <p className="mb-1 text-xs font-medium uppercase tracking-wider text-ink-muted">
                {edu.period}
              </p>
              <h3 className="mb-1 font-serif text-lg font-semibold text-ink">
                {edu.degree}
              </h3>
              <p className="text-sm font-medium text-accent">{edu.school}</p>
              {edu.note && (
                <p className="mt-2 text-sm text-ink-muted">{edu.note}</p>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Skills & Tools */}
      <section className="border-t border-border bg-surface-warm">
        <div className="mx-auto grid max-w-5xl gap-12 px-6 py-16 md:grid-cols-3 md:py-20">
          {/* Skills */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-ink">
              Skills
            </h3>
            <ul className="space-y-2 text-sm text-ink-light">
              {[
                'UX / UI Design',
                'Data Visualisation',
                'User Research',
                'Agile UX Research',
                'Usability Testing',
                'Design Systems',
                'System Design',
                'Cross-team Integration',
              ].map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </div>

          {/* Tools */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-ink">
              Tools
            </h3>
            <ul className="space-y-2 text-sm text-ink-light">
              {['Figma', 'Axure RP', 'Photoshop', 'Illustrator'].map(
                (tool) => (
                  <li key={tool}>{tool}</li>
                ),
              )}
            </ul>
          </div>

          {/* Certifications */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-ink">
              Training &amp; Certificates
            </h3>
            <ul className="space-y-2 text-sm text-ink-light">
              {[
                'UX Research for Agile Teams',
                'NN Product & UX',
                'Negotiation Skills',
                'Creative Facilitation',
              ].map((cert) => (
                <li key={cert}>{cert}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  )
}
