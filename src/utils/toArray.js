export function toArray(d) {
  if (!d) return []
  if (Array.isArray(d)) return d 
  if (Array.isArray(d.results)) return d.results 
  if (d.id !== undefined) return [d]      
  return Object.values(d)                       
}