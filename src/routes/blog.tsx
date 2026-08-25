import { createFileRoute } from '@tanstack/react-router'
import { useEffect } from 'react'

export const Route = createFileRoute('/blog')({
  component: BlogPage,
})

function BlogPage() {
  useEffect(() => {
    const existingScript = document.querySelector(
      'script[src*="app.trysoro.com/api/embed"]'
    )

    if (!existingScript) {
      const script = document.createElement('script')
      script.src =
        'https://app.trysoro.com/api/embed/3cbf4def-893e-42b4-be12-378be262ac2b'
      script.async = true
      document.body.appendChild(script)
    }
  }, [])

  return (
    <div style={{ minHeight: '100vh', padding: '20px' }}>
      <div id="soro-blog"></div>
    </div>
  )
}
