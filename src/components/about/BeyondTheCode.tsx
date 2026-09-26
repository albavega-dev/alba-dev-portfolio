
import { useState } from 'react'
import type { ReactNode } from 'react'

import {
  AboutPage,
  InterestsIntroPage,
  GamingPage,
  LiteraturePage,
  DesignPage,
  MusicPage,
} from './JournalPages'

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
    back: <AboutPage />,
    isCover: true,
  },
  {
    front: <InterestsIntroPage />,
    back: <GamingPage />,
  },
  {
    front: <LiteraturePage />,
    back: <DesignPage />,
  },
]

const LAST_PAGE = sheets.length - 1

/* =========================================
   BEYOND THE CODE
========================================= */

function BeyondTheCode() {
  const [currentPage, setCurrentPage] = useState(-1)

  const [isTurning, setIsTurning] = useState(false)

  const [activeSheet, setActiveSheet] = useState<number | null>(
    null
  )

  const isOpen = currentPage >= 0

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

    const turningSheet =
      page > currentPage
        ? page
        : currentPage

    setActiveSheet(turningSheet)
    setIsTurning(true)
    setCurrentPage(page)
  }

  const openJournal = () => {
    turnTo(0)
  }

  const nextPage = () => {
    turnTo(currentPage + 1)
  }

  const previousPage = () => {
    turnTo(currentPage - 1)
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
              <MusicPage />
            </div>

            {/* =====================================
                TURNING SHEETS
            ===================================== */}

            {sheets.map((sheet, index) => (
              <JournalSheet
                key={index}
                index={index}
                currentPage={currentPage}
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
                        currentPage === 0
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

                {currentPage < LAST_PAGE && (
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
                  : `My favourites · ${currentPage} / ${LAST_PAGE}`}
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

export default BeyondTheCode
