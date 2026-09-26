import { useCallback, useEffect, useRef, useState } from 'react'

const ROW_UNIT_PX = 1
const COLUMN_GAP_PX = 56

export type MasonryPlacement = { gridColumn: number; gridRow: string }

export function useMasonryGrid(itemCount: number) {
  const itemRefs = useRef<Array<HTMLDivElement | null>>([])
  const [placements, setPlacements] = useState<MasonryPlacement[]>([])
  const [isMeasured, setIsMeasured] = useState(false)

  const setItemRef = useCallback(
    (index: number) => (element: HTMLDivElement | null) => {
      itemRefs.current[index] = element
    },
    [],
  )

  useEffect(() => {
    let frameId: number | undefined
    const calculate = () => {
      frameId = undefined
      const elements = itemRefs.current.slice(0, itemCount)
      if (elements.length !== itemCount || elements.some((element) => !element)) return
      const columnRows = [0, 0]
      const next = elements.map((element, index) => {
        const span = Math.max(1, Math.ceil(((element?.offsetHeight ?? 0) + COLUMN_GAP_PX) / ROW_UNIT_PX))
        const column = index % 2
        const placement = { gridColumn: column + 1, gridRow: `${columnRows[column] + 1} / span ${span}` }
        columnRows[column] += span
        return placement
      })
      setPlacements((current) => {
        const same = current.length === next.length && current.every((item, index) => item.gridColumn === next[index].gridColumn && item.gridRow === next[index].gridRow)
        return same ? current : next
      })
      setIsMeasured(true)
    }
    const schedule = () => {
      if (frameId === undefined) frameId = window.requestAnimationFrame(calculate)
    }
    const observer = new ResizeObserver(schedule)
    itemRefs.current.slice(0, itemCount).forEach((element) => element && observer.observe(element))
    schedule()
    return () => {
      observer.disconnect()
      if (frameId !== undefined) window.cancelAnimationFrame(frameId)
    }
  }, [itemCount])

  return { isMeasured, placements, setItemRef }
}
