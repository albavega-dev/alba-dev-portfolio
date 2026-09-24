import type { ReactNode } from 'react'

type PageContainerProps = {
  children: ReactNode
}

function PageContainer({ children }: PageContainerProps) {
  return (
    <main className="min-h-screen px-6 py-12 md:px-8">
      {children}
    </main>
  )
}

export default PageContainer