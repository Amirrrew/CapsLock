import React, { useEffect, useRef } from 'react'

const wave = (x, t, a, p) =>
  Math.sin(x * 0.010 + t * 1.3 + p) * a +
  Math.sin(x * 0.023 - t * 0.9 + p * 2) * a * 0.45 +
  Math.sin(x * 0.004 + t * 0.5 + p * 3) * a * 0.8

export default function Page_loading({ done }) {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    const boat = new Image()
    boat.src = '../images/icons/svg/sailing-boat.svg'

    let w, h, raf
    const start = performance.now()

    const resize = () => {
      const dpr = window.devicePixelRatio || 1
      w = canvas.clientWidth
      h = canvas.clientHeight
      canvas.width = w * dpr
      canvas.height = h * dpr
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    }
    resize()
    window.addEventListener('resize', resize)

    const fillWave = (level, amp, phase, t, fill, stroke) => {
      ctx.beginPath()
      ctx.moveTo(0, h)
      for (let x = 0; x <= w; x += 4) ctx.lineTo(x, level + wave(x, t, amp, phase))
      ctx.lineTo(w, h)
      ctx.closePath()
      ctx.fillStyle = fill
      ctx.fill()

      ctx.beginPath()
      for (let x = 0; x <= w; x += 4) {
        const y = level + wave(x, t, amp, phase)
        x === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y)
      }
      ctx.strokeStyle = stroke
      ctx.lineWidth = 1.5
      ctx.stroke()
    }

    const frame = (now) => {
      const t = (now - start) / 1000
      ctx.clearRect(0, 0, w, h)
      const level = h * 0.55

      fillWave(level - 6, 7, 1.7, t, '#141414', 'rgba(255,255,255,0.07)')

      const bx = w / 2, amp = 9, phase = 0.4
      const y = level + wave(bx, t, amp, phase)
      const slope = (wave(bx + 6, t, amp, phase) - wave(bx - 6, t, amp, phase)) / 12
      const angle = Math.atan(slope) * 0.9 + Math.sin(t * 1.1) * 0.03
      const bw = Math.max(56, Math.min(84, w * 0.12))

      if (boat.complete && boat.naturalWidth) {
        const bh = (bw * boat.naturalHeight) / boat.naturalWidth
        ctx.save()
        ctx.translate(bx, y)
        ctx.rotate(angle)
        ctx.drawImage(boat, -bw / 2, -bh * 0.82, bw, bh)
        ctx.restore()
      }

      fillWave(level, amp, phase, t, '#0d0d0d', 'rgba(255,255,255,0.10)')
      fillWave(level + 22, 11, 3.1, t * 1.15, '#0a0a0a', 'rgba(255,255,255,0.14)')

      raf = requestAnimationFrame(frame)
    }
    raf = requestAnimationFrame(frame)

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <div className={`page-loading ${done ? 'page-loading--hide' : ''}`}>
      <div className='text text-center centerbox w-[100%]'>
        <div>
          <p>LOADING</p>
          <p style={{fontFamily: 'peyda'}}>لودیـــــــــــــــــنگ</p>
        </div>
      </div>
      <canvas ref={canvasRef} className='page-loading-canvas' />
    </div>
  )
}