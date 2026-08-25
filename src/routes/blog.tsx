import { createFileRoute } from '@tanstack/react-router'
import { useEffect } from 'react'

export const Route = createFileRoute('/blog')({
  component: BlogPage,
})

function BlogPage() {
  useEffect(() => {
    const script = document.createElement('script')
    script.src =
      'https://app.trysoro.com/api/embed/3cbf4def-893e-42b4-be12-378be262ac2b'
    script.defer = true
    document.body.appendChild(script)

    return () => {
      script.remove()
    }
  }, [])

  return <div id="soro-blog"></div>
}
