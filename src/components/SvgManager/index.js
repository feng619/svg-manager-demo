import SvgManager from './svg-manager'
import { curveTo, arrowTo } from './utils/path-helper'
import { PALETTE } from './utils/palette'

const C = curveTo()
const A = arrowTo()

const ROOT_CONFIG = {
  rootStrokeWidth: '3'
}

const BLUEPRINT = {
  component_to_server: {
    w: 30,
    h: 140,
    svgTotalLength: 420,
    paths: {
      component_to_server: {
        d: () => {
          return `M10,132v-120${A.t}`
        }
      }
    }
  },
  server_to_action: {
    w: 30,
    h: 140,
    svgTotalLength: 190,
    svgAnimatingStrokeColor: PALETTE.sui_green,
    paths: {
      server_to_action: {
        d: () => {
          return `M10,10v119${A.b}`
        }
      }
    }
  },
  component_to_action: {
    w: 110,
    h: 30,
    svgTotalLength: 160,
    svgAnimatingStrokeColor: PALETTE.sui_grey,
    paths: {
      component_to_action: {
        d: () => {
          return `M13,15h82${A.r}`
        }
      }
    }
  },
  action_to_reducer: {
    w: 110,
    h: 30,
    svgTotalLength: 160,
    svgAnimatingStrokeColor: PALETTE.sui_grey,
    paths: {
      action_to_reducer: {
        d: () => {
          return `M12,15h82${A.r}`
        }
      }
    }
  },
  reducer_to_store: {
    w: 110,
    h: 30,
    svgTotalLength: 160,
    svgAnimatingStrokeColor: PALETTE.sui_grey,
    paths: {
      reducer_to_store: {
        d: () => {
          return `M11,15h82${A.r}`
        }
      }
    }
  },
  store_to_component: {
    w: 900,
    h: 70,
    svgTotalLength: 920,
    svgAnimatingStrokeColor: PALETTE.sui_grey,
    paths: {
      store_to_component: {
        d: () => {
          return `M720,14v40${C.bl}h-690${C.lt}v-37${A.t}`
        }
      }
    }
  }
}

export default SvgManager(BLUEPRINT, ROOT_CONFIG)
