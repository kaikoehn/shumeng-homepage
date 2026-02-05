import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: Home,
})

function Home() {
  return (
    <div style={{ fontFamily: 'system-ui, sans-serif', padding: '2rem' }}>
      <h1>Welcome to Shumeng's Homepage</h1>
      <p>Built with TanStack Start, deployed on Cloudflare Workers.</p>
    </div>
  )
}
