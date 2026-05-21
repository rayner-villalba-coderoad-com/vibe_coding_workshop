import { useEffect } from 'react'
import Hero from './components/Hero'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Contact from './components/Contact'

export default function App() {
  useEffect(() => {
    const els = document.querySelectorAll('.card, .hero-inner')
    els.forEach(el => el.classList.add('fade-in'))

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
          observer.unobserve(entry.target)
        }
      })
    }, { threshold: 0.1 })

    document.querySelectorAll('.fade-in').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <>
      <Hero />
      <main>
        <Experience />
        <Projects />
      </main>
      <Contact />
    </>
  )
}
