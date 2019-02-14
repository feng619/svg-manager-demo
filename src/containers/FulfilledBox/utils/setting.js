const STORE_DEFAULT =
    `    {
      data: null,
      isLoading: false
    }`
const STORE_REQ =
    `    {
      data: null,
      isLoading: true
    }`
const STORE_FUL =
    `    {
      data: [object],
      isLoading: false
    }`
const STORE_REJ =
    `    {
      data: [object],
      isLoading: false
    }`

export const DASH_ANIME = {
  l0: { name: 'component_to_server', isAnimating: false },
  l1: { name: 'server_to_action', isAnimating: false },
  l2: { name: 'component_to_action', isAnimating: false },
  r0: { name: 'action_to_reducer', isAnimating: false },
  r1: { name: 'reducer_to_store', isAnimating: false },
  r2: { name: 'store_to_component', isAnimating: false }
}

export const ANIME_MS = 800

export const PHASE_DATA = {
  init: {
    store: STORE_DEFAULT
  },
  req: {
    store: STORE_DEFAULT,
    componentBlink: 'blinking'
  },
  req0: {
    action: 'TEST_PENDING',
    store: STORE_DEFAULT,
    actionBlink: 'blinking'
  },
  req1: {
    action: 'TEST_PENDING',
    store: STORE_DEFAULT,
    spinner: true,
    reducerBlink: 'blinking'
  },
  req2: {
    store: STORE_REQ,
    spinner: true,
    storeBlink: 'blinking'
  },
  ful: {
    store: STORE_REQ,
    componentBlink: 'blinking'
  },
  ful0: {
    action: 'TEST_FULFILLED',
    store: STORE_REQ,
    actionBlink: 'blinking'
  },
  ful1: {
    action: 'TEST_FULFILLED',
    store: STORE_REQ,
    reducerBlink: 'blinking'
  },
  ful2: {
    store: STORE_FUL,
    storeBlink: 'blinking'
  },
  ful_end: {
    store: STORE_FUL,
    componentBlink: 'blinking'
  },
  rej: {
    store: STORE_REQ,
    componentBlink: 'blinking'
  },
  rej0: {
    action: 'TEST_REJECTED',
    store: STORE_REQ,
    actionBlink: 'blinking'
  },
  rej1: {
    action: 'TEST_REJECTED',
    store: STORE_REQ,
    reducerBlink: 'blinking'
  },
  rej2: {
    store: STORE_REJ,
    storeBlink: 'blinking'
  },
  rej_end: {
    store: STORE_REJ,
    componentBlink: 'blinking'
  }
}
