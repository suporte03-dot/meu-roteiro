export function getMapQuery(activity) {
  return activity?.mapQuery ?? activity?.location ?? activity?.address ?? null
}

export function openRoute(destination) {
  if (!destination) return
  const url = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(destination)}&travelmode=driving`
  window.open(url, '_blank', 'noopener,noreferrer')
}

export function openDayRoute(activities) {
  const points = activities.map(getMapQuery).filter(Boolean)
  if (points.length === 0) return

  if (points.length === 1) {
    openRoute(points[0])
    return
  }

  const destination = points[points.length - 1]
  const waypoints = points.slice(0, -1).join('|')
  const url = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(destination)}&waypoints=${encodeURIComponent(waypoints)}&travelmode=driving`
  window.open(url, '_blank', 'noopener,noreferrer')
}
