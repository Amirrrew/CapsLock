import React, { useEffect, useState } from 'react'
import Message_toast from './toast'

export default function ToastHost() {
  const [items, setItems] = useState([])

  const close = id => setItems(list => list.filter(t => t.id !== id))

  useEffect(() => {
    const onToast = e => {
      const id = Date.now() + Math.random()
      setItems(list => [...list, { id, ...e.detail }])
      setTimeout(() => close(id), 5000)
    }
    window.addEventListener('toast', onToast)
    return () => window.removeEventListener('toast', onToast)
  }, [])

  return (
    <div className='toast-container'>
      {items.map(t => (
        <Message_toast key={t.id} {...t} onClose={() => close(t.id)} />
      ))}
    </div>
  )
}