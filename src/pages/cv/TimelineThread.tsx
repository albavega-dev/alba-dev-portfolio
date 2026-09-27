import { useEffect, useState } from 'react'

type Stitch = {
  length: number
  gap: number
  offset: number
  endOffset: number
  y: number
}

const lengths = [15, 14, 16, 15, 15.5, 14.5, 16]
const gaps = [6, 6.5, 5.5, 6, 5.8, 6.2]
const offsets = [0, 0.25, -0.2, 0.15, -0.25, 0.1, 0]
const endOffsets = [0.7, -0.5, 0.4, -0.7, 0.55, -0.4, 0.65, -0.2]

function createStitches(height: number) {
  const stitches: Stitch[] = []
  let y = 0

  for (let index = 0; y < height; index += 1) {
    const lengthIndex = index % lengths.length
    const stitchLength = lengths[lengthIndex]
    stitches.push({
      length: stitchLength,
      gap: gaps[index % gaps.length],
      offset: offsets[lengthIndex],
      endOffset: endOffsets[index % endOffsets.length],
      y,
    })
    y += stitchLength + gaps[index % gaps.length]
  }

  return stitches
}

function TimelineThread() {
  const [height, setHeight] = useState(0)

  useEffect(() => {
    const element = document.querySelector<HTMLElement>('.cv-experience-timeline-shell')
    if (!element) return

    const updateHeight = () => setHeight(Math.max(0, element.getBoundingClientRect().height))
    updateHeight()
    const observer = new ResizeObserver(updateHeight)
    observer.observe(element)
    return () => observer.disconnect()
  }, [])

  if (height <= 0) return null

  const stitches = createStitches(height)

  return (
    <svg className="cv-timeline-thread" viewBox={`0 0 48 ${height}`} aria-hidden="true" focusable="false">
      {stitches.map((stitch, index) => {
        const x = 24 + stitch.offset
        const endX = x + stitch.endOffset
        const y = stitch.y
        const endY = y + stitch.length

        return (
          <g key={index}>
            <line className="cv-timeline-thread__base" x1={x} y1={y + 2} x2={endX} y2={endY + 2} />
            <line className="cv-timeline-thread__body" x1={x} y1={y} x2={endX} y2={endY} />
            <line className="cv-timeline-thread__highlight" x1={x + 0.8} y1={y} x2={endX + 0.8} y2={endY} />
          </g>
        )
      })}
    </svg>
  )
}

export default TimelineThread
