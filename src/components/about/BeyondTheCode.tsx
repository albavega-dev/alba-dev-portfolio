
import { useEffect, useRef, useState } from 'react'
import type { MouseEvent, PointerEvent as ReactPointerEvent, ReactNode, RefObject } from 'react'

import { journalPages, pagesForSpread, spreadForPage } from './JournalPageDefinitions'

import './BeyondTheCode.css'

/* =========================================
   JOURNAL SHEET TYPES
========================================= */

type JournalSheetProps = {
  index: number
  currentPage: number
  front: ReactNode
  back: ReactNode
  isCover?: boolean
  isActive: boolean
  onOpen?: () => void
  onTurnEnd: () => void
}

/* =========================================
   JOURNAL SHEET COMPONENT
========================================= */

function JournalSheet({
  index,
  currentPage,
  front,
  back,
  isCover = false,
  isActive,
  onOpen,
  onTurnEnd,
}: JournalSheetProps) {
  const isTurned = currentPage >= index

  /*
   * Keep the active sheet above the others
   * throughout its turning animation.
   */

  const zIndex = isActive
    ? 100
    : isTurned
      ? 20 + index
      : 24 - index

  return (
    <div
      className={`journal-turning-page ${
        isTurned
          ? 'journal-turning-page--turned'
          : ''
      } ${
        currentPage === index - 1
          ? 'journal-turning-page--showing-front'
          : ''
      }`}
      style={{ zIndex }}
      onTransitionEnd={(event) => {
        if (
          event.target === event.currentTarget &&
          event.propertyName === 'transform' &&
          isActive
        ) {
          onTurnEnd()
        }
      }}
    >
      {/* =====================================
          FRONT FACE
      ===================================== */}

      {isCover ? (
        <button
          type="button"
          className="journal-face journal-face--front journal-cover"
          onClick={onOpen}
          aria-label="Open Beyond the Code journal"
          aria-expanded={currentPage >= 0}
          tabIndex={currentPage === -1 ? 0 : -1}
          disabled={currentPage >= 0}
        >
          {/* Journal spine */}

          <span
            className="journal-spine"
            aria-hidden="true"
          />

          {/* Cover decoration */}

          <span className="journal-cover-inner">
            <span className="journal-cover-title">
              Beyond
              <br />
              the code
            </span>

          </span>
        </button>
      ) : (
        <div className="journal-face journal-face--front journal-paper">
          {front}
        </div>
      )}

      {/* =====================================
          BACK FACE
      ===================================== */}

      <div className="journal-face journal-face--back journal-paper">
        {back}
      </div>
    </div>
  )
}

/* =========================================
   JOURNAL SHEETS
========================================= */

const sheets = [
  {
    front: null,
    back: journalPages[pagesForSpread(0)[0]].render(),
    isCover: true,
  },
  {
    front: journalPages[pagesForSpread(0)[1]].render(),
    back: journalPages[pagesForSpread(1)[0]].render(),
  },
  {
    front: journalPages[pagesForSpread(1)[1]].render(),
    back: journalPages[pagesForSpread(2)[0]].render(),
  },
]

const LAST_PAGE = journalPages.length - 1

/* =========================================
   BEYOND THE CODE
========================================= */

function BeyondTheCode() {
  const [currentPage, setCurrentPage] = useState(-1)
  const [lastOpenPage, setLastOpenPage] = useState(0)
  const [isSinglePage, setIsSinglePage] = useState(false)
  const [isPhone, setIsPhone] = useState(false)
  const coverRef = useRef<HTMLButtonElement>(null)
  const mobileNavigationRef = useRef<HTMLButtonElement>(null)
  const savedCoverViewportTop = useRef<number | null>(null)
  const openedWithKeyboard = useRef(false)

  const [isTurning, setIsTurning] = useState(false)

  const [activeSheet, setActiveSheet] = useState<number | null>(
    null
  )

  const isOpen = currentPage >= 0

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 920px)')
    const phoneQuery = window.matchMedia('(max-width: 640px)')
    const updateMode = () => setIsSinglePage(mediaQuery.matches)
    const updatePhone = () => setIsPhone(phoneQuery.matches)
    updateMode()
    updatePhone()
    mediaQuery.addEventListener('change', updateMode)
    phoneQuery.addEventListener('change', updatePhone)
    return () => {
      mediaQuery.removeEventListener('change', updateMode)
      phoneQuery.removeEventListener('change', updatePhone)
    }
  }, [])

  const phoneReaderOpen = isPhone && currentPage >= 0

  useEffect(() => {
    if (!phoneReaderOpen) return
    const scrollY = window.scrollY
    const previousOverflow = document.body.style.overflow
    const previousPosition = document.body.style.position
    const previousTop = document.body.style.top
    const previousWidth = document.body.style.width
    const inlineCover = coverRef.current
    document.body.style.overflow = 'hidden'
    document.body.style.position = 'fixed'
    document.body.style.top = `-${scrollY}px`
    document.body.style.width = '100%'
    window.setTimeout(() => mobileNavigationRef.current?.focus({ preventScroll: true }), 0)
    return () => {
      document.body.style.overflow = previousOverflow
      document.body.style.position = previousPosition
      document.body.style.top = previousTop
      document.body.style.width = previousWidth
      const coverViewportTop = savedCoverViewportTop.current
      const root = document.documentElement
      const previousScrollBehavior = root.style.scrollBehavior
      root.style.scrollBehavior = 'auto'
      const currentScrollY = window.scrollY
      const targetScrollY = inlineCover && coverViewportTop !== null
        ? currentScrollY + inlineCover.getBoundingClientRect().top - coverViewportTop
        : scrollY
      window.scrollTo(0, targetScrollY)
      root.style.scrollBehavior = previousScrollBehavior
    }
  }, [phoneReaderOpen])

  useEffect(() => {
    if (!phoneReaderOpen && isPhone && openedWithKeyboard.current) {
      coverRef.current?.focus({ preventScroll: true })
    }
  }, [phoneReaderOpen, isPhone])

  const currentSpread = currentPage < 0 ? -1 : spreadForPage(currentPage)

  /* =====================================
      PAGE NAVIGATION
  ===================================== */

  const turnTo = (page: number) => {
    if (isTurning) return

    if (page < -1 || page > LAST_PAGE) return

    if (page === currentPage) return

    /*
     * When moving forward, the sheet being
     * turned is the destination page.
     *
     * When moving backward, it is the
     * currently visible sheet.
     */

    const targetSpread = page < 0 ? -1 : spreadForPage(page)
    const turningSheet = targetSpread > currentSpread ? targetSpread : currentSpread

    setActiveSheet(turningSheet)
    setIsTurning(true)
    if (page >= 0) setLastOpenPage(page)
    setCurrentPage(page)
    if (isSinglePage) {
      window.setTimeout(() => setIsTurning(false), 420)
    }
  }

  const openJournal = (event?: MouseEvent<HTMLButtonElement>) => {
    const cover = coverRef.current
    savedCoverViewportTop.current = cover?.getBoundingClientRect().top ?? null
    openedWithKeyboard.current = event?.detail === 0
    turnTo(0)
  }

  const nextPage = () => {
    turnTo(isSinglePage ? currentPage + 1 : (currentSpread + 1) * 2)
  }

  const previousPage = () => {
    turnTo(isSinglePage ? currentPage - 1 : currentSpread === 0 ? -1 : (currentSpread - 1) * 2)
  }

  useEffect(() => {
    if (!phoneReaderOpen) return
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && !isTurning) {
        setIsTurning(true)
        setCurrentPage(-1)
        window.setTimeout(() => setIsTurning(false), 420)
      }
    }
    document.addEventListener('keydown', handleEscape)
    return () => document.removeEventListener('keydown', handleEscape)
  }, [phoneReaderOpen, isTurning])

  if (isSinglePage) {
    return (
      <section className="mt-24 pb-16" aria-labelledby="beyond-the-code-title">
        <h2 id="beyond-the-code-title" className="sr-only">Beyond the Code</h2>
        <MobileJournal currentPage={currentPage} lastOpenPage={lastOpenPage} isTurning={isTurning} isPhone={isPhone} onOpen={openJournal} onNext={nextPage} onPrevious={previousPage} coverRef={coverRef} navigationRef={mobileNavigationRef} />
      </section>
    )
  }

  /* =====================================
      ANIMATION COMPLETION
  ===================================== */

  const handleTurnEnd = () => {
    setIsTurning(false)
    setActiveSheet(null)
  }

  /* =====================================
      COMPONENT
  ===================================== */

  return (
    <section
      className="mt-24 pb-16"
      aria-labelledby="beyond-the-code-title"
    >
      {/* =====================================
          ACCESSIBLE SECTION TITLE
      ===================================== */}

      <h2
        id="beyond-the-code-title"
        className="sr-only"
      >
        Beyond the Code
      </h2>

      {/* =====================================
          JOURNAL STAGE
      ===================================== */}

      <div className="journal-stage">
        <div
          className={`journal ${
            isOpen ? 'journal--open' : ''
          }`}
        >
          <div className="journal-book">

            {/* =====================================
                RIGHT PAGE UNDER ALL SHEETS
            ===================================== */}

            <div
              className="journal-right-page journal-paper"
              aria-hidden={!isOpen}
            >
              {journalPages[pagesForSpread(2)[1]].render()}
            </div>

            {/* =====================================
                TURNING SHEETS
            ===================================== */}

            {sheets.map((sheet, index) => (
              <JournalSheet
                key={index}
                index={index}
                currentPage={currentSpread}
                front={sheet.front}
                back={sheet.back}
                isCover={sheet.isCover}
                isActive={activeSheet === index}
                onOpen={openJournal}
                onTurnEnd={handleTurnEnd}
              />
            ))}

            {/* =====================================
                PAGE NAVIGATION
            ===================================== */}

            {isOpen && !isTurning && (
              <>
                {/* Previous page / Close journal */}

                <button
                    type="button"
                    className="journal-page-arrow journal-page-arrow--previous"
                    onClick={previousPage}
                    aria-label={
                        currentSpread === 0
                        ? 'Close journal'
                        : 'Previous page'
                    }
                    >
                    <span
                        className="journal-page-arrow-symbol"
                        aria-hidden="true"
                    >
                        ‹‹
                    </span>
                </button>

                {/* Next page */}

                {currentSpread < spreadForPage(LAST_PAGE) && (
                  <button
                    type="button"
                    className="journal-page-arrow journal-page-arrow--next"
                    onClick={nextPage}
                    aria-label="Next page"
                    >
                    <span
                        className="journal-page-arrow-symbol"
                        aria-hidden="true"
                    >
                        ››
                    </span>
                </button>
                )}
              </>
            )}
          </div>
        </div>

        {/* =====================================
            JOURNAL CONTROLS
        ===================================== */}

        <div className="journal-controls">
          {isOpen ? (
            <div className="journal-navigation-hint">
              <span>
                {currentPage === 0
                  ? 'A little about me'
                  : `My favourites · ${currentSpread} / ${spreadForPage(LAST_PAGE)}`}
              </span>
            </div>
          ) : (
            <p className="journal-hint">
              Click the journal to open it
            </p>
          )}
        </div>
      </div>
    </section>
  )
}

type MobileJournalProps = {
  currentPage: number
  lastOpenPage: number
  isTurning: boolean
  isPhone: boolean
  onOpen: (event: MouseEvent<HTMLButtonElement>) => void
  onNext: () => void
  onPrevious: () => void
  coverRef: RefObject<HTMLButtonElement | null>
  navigationRef: RefObject<HTMLButtonElement | null>
}

function MobileJournal({ currentPage, lastOpenPage, isTurning, isPhone, onOpen, onNext, onPrevious, coverRef, navigationRef }: MobileJournalProps) {
  const isOpen = currentPage >= 0
  const isClosing = isPhone && !isOpen && isTurning
  const page = journalPages[isOpen ? currentPage : lastOpenPage]
  const gestureRef = useRef({
    pointerId: -1,
    startX: 0,
    startY: 0,
    axis: 'undecided' as 'undecided' | 'horizontal' | 'vertical',
  })

  if (isPhone) {
    const resetGesture = () => {
      gestureRef.current = { pointerId: -1, startX: 0, startY: 0, axis: 'undecided' }
    }

    const handlePointerDown = (event: ReactPointerEvent<HTMLDivElement>) => {
      if (isTurning || gestureRef.current.pointerId !== -1 || (event.pointerType === 'mouse' && event.button !== 0)) return
      const target = event.target as Element
      if (target.closest('button, a, input, textarea, select, [data-journal-interactive]')) return
      gestureRef.current = {
        pointerId: event.pointerId,
        startX: event.clientX,
        startY: event.clientY,
        axis: 'undecided',
      }
    }

    const handlePointerMove = (event: ReactPointerEvent<HTMLDivElement>) => {
      const gesture = gestureRef.current
      if (gesture.pointerId !== event.pointerId || gesture.axis !== 'undecided') return
      const deltaX = event.clientX - gesture.startX
      const deltaY = event.clientY - gesture.startY
      if (Math.max(Math.abs(deltaX), Math.abs(deltaY)) < 8) return
      if (Math.abs(deltaY) >= Math.abs(deltaX) * 1.2) {
        gesture.axis = 'vertical'
        return
      }
      if (Math.abs(deltaX) <= Math.abs(deltaY) * 1.2) return
      gesture.axis = 'horizontal'
      event.currentTarget.setPointerCapture(event.pointerId)
    }

    const handlePointerUp = (event: ReactPointerEvent<HTMLDivElement>) => {
      const gesture = gestureRef.current
      if (gesture.pointerId !== event.pointerId) return
      const shouldNavigate = gesture.axis === 'horizontal'
        && Math.abs(event.clientX - gesture.startX) >= event.currentTarget.clientWidth * 0.22
      const direction = event.clientX - gesture.startX
      if (shouldNavigate) {
        if (direction < 0 && currentPage < journalPages.length - 1) onNext()
        if (direction > 0 && currentPage >= 0) onPrevious()
      }
      if (event.currentTarget.hasPointerCapture(event.pointerId)) event.currentTarget.releasePointerCapture(event.pointerId)
      resetGesture()
    }

    const handlePointerCancel = () => resetGesture()
    const handleLostPointerCapture = () => resetGesture()

    return (
      <div className="journal-mobile-stage">
        <div className="journal-mobile-inline-shell">
          <div className="journal-mobile-book">
            <button ref={coverRef} type="button" className="journal-cover journal-mobile-cover" onClick={onOpen} aria-label="Open Beyond the Code journal">
              <span className="journal-spine" aria-hidden="true" />
              <span className="journal-cover-inner"><span className="journal-cover-title">Beyond<br />the code</span></span>
            </button>
          </div>
        </div>

        {(isOpen || isClosing) && (
          <div className={`journal-mobile-stage--phone-open ${isClosing ? 'journal-mobile-stage--phone-closing' : ''}`}>
            <div className="journal-mobile-book">
              <div
                className={`journal-mobile-page ${isTurning ? 'journal-mobile-page--turning' : ''}`}
                onPointerDown={handlePointerDown}
                onPointerMove={handlePointerMove}
                onPointerUp={handlePointerUp}
                onPointerCancel={handlePointerCancel}
                onLostPointerCapture={handleLostPointerCapture}
              >
                {page.render()}
              </div>
              {isOpen && !isTurning && (
                <>
                  <button ref={navigationRef} type="button" className="journal-page-arrow journal-page-arrow--previous" onClick={onPrevious} aria-label={currentPage === 0 ? 'Close journal' : 'Previous page'}><span className="journal-page-arrow-symbol" aria-hidden="true">‹‹</span></button>
                  {currentPage < journalPages.length - 1 && <button type="button" className="journal-page-arrow journal-page-arrow--next" onClick={onNext} aria-label="Next page"><span className="journal-page-arrow-symbol" aria-hidden="true">››</span></button>}
                </>
              )}
            </div>
          </div>
        )}
      </div>
    )
  }

  return (
    <div className={`journal-mobile-stage ${isOpen ? 'journal-mobile-stage--open' : ''}`}>
      <div className="journal-mobile-book">
        {!isOpen ? (
          <button ref={coverRef} type="button" className="journal-cover journal-mobile-cover" onClick={onOpen} aria-label="Open Beyond the Code journal">
            <span className="journal-spine" aria-hidden="true" />
            <span className="journal-cover-inner"><span className="journal-cover-title">Beyond<br />the code</span></span>
          </button>
        ) : (
          <div className={`journal-mobile-page ${isTurning ? 'journal-mobile-page--turning' : ''}`}>
            {page?.render()}
          </div>
        )}
        {isOpen && !isTurning && (
          <>
            <button ref={navigationRef} type="button" className="journal-page-arrow journal-page-arrow--previous" onClick={onPrevious} aria-label={currentPage === 0 ? 'Close journal' : 'Previous page'}><span className="journal-page-arrow-symbol" aria-hidden="true">‹‹</span></button>
            {currentPage < journalPages.length - 1 && <button type="button" className="journal-page-arrow journal-page-arrow--next" onClick={onNext} aria-label="Next page"><span className="journal-page-arrow-symbol" aria-hidden="true">››</span></button>}
          </>
        )}
      </div>
    </div>
  )
}
export default BeyondTheCode
