import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export default function useScrollReveal(enabled = true) {
  const { pathname } = useLocation()

  useEffect(() => {
    if (!enabled) return

    const io = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach(entry => {
          if (entry.isIntersecting || entry.boundingClientRect.top < 0) {
            entry.target.classList.add('is-visible')
            obs.unobserve(entry.target)
          }
        })
      },
      { threshold: 0, rootMargin: '0px 0px -60% 0px' }
    )

    const observe = () => {
      document.querySelectorAll('[data-stagger]').forEach(parent => {
        [...parent.children].forEach((child, i) =>
          child.style.setProperty('--delay', `${i * 100}ms`)
        )
      })
      document
        .querySelectorAll('.animate-on-scroll:not(.is-visible)')
        .forEach(el => io.observe(el))
    }

    observe()

    const mo = new MutationObserver(observe)
    mo.observe(document.body, { childList: true, subtree: true })

    return () => {
      io.disconnect()
      mo.disconnect()
    }
  }, [pathname, enabled])
}