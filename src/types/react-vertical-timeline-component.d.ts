declare module 'react-vertical-timeline-component' {
  import type { CSSProperties, ReactNode } from 'react'

  type VerticalTimelineProps = {
    children?: ReactNode
    layout?: string
    lineColor?: string
    className?: string
  }

  type VerticalTimelineElementProps = {
    children?: ReactNode
    date?: ReactNode
    animate?: boolean
    icon?: ReactNode
    iconClassName?: string
    contentClassName?: string
    contentArrowStyle?: CSSProperties
  }

  export function VerticalTimeline(props: VerticalTimelineProps): ReactNode
  export function VerticalTimelineElement(props: VerticalTimelineElementProps): ReactNode
}
