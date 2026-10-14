import type { ReactNode } from 'react'

type PageContainerProps = {
  children: ReactNode
  className?: string
}

function PageContainer({ children, className = '' }: PageContainerProps) {
  return (
    <main className={`min-h-screen px-6 py-12 md:px-8 ${className}`}>
      {children}
    </main>
  )
}

export default PageContainer
