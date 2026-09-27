import '@testing-library/jest-dom/vitest'

Object.defineProperty(window, 'scrollTo', {
  writable: true,
  value: () => undefined,
})

Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: (query: string) => ({
    matches: query.includes('max-width: 640px') || query.includes('max-width: 920px'),
    media: query,
    onchange: null,
    addEventListener: () => undefined,
    removeEventListener: () => undefined,
    addListener: () => undefined,
    removeListener: () => undefined,
    dispatchEvent: () => false,
  }),
})

class TestResizeObserver {
  observe() {}
  unobserve() {}
  disconnect() {}
}

class TestIntersectionObserver {
  observe() {}
  unobserve() {}
  disconnect() {}
}

Object.defineProperty(window, 'ResizeObserver', {
  writable: true,
  value: TestResizeObserver,
})

Object.defineProperty(window, 'IntersectionObserver', {
  writable: true,
  value: TestIntersectionObserver,
})
