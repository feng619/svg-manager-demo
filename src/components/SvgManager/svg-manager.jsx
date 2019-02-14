import React from 'react'
import PropTypes from 'prop-types'

import DrawPath from './components/DrawPath'
import { PALETTE } from './utils/palette'
import { ObjectToArray } from './utils/funcs'

import './style.css'

const SvgManager = (svgBlueprint, ModifyRootConfig) => {
  const ROOT_CONFIG = {
    rootStrokeWidth: '2',
    rootDefaultStrokeColor: '#ddd',
    rootAnimatingStrokeColor: PALETTE.sui_blue,
    rootFulfilledStrokeColor: PALETTE.sui_green,
    rootRejectedStrokeColor: PALETTE.sui_red
  }

  return ({ svgName, anime = {}, setting = {} }) => {
    if (typeof svgName !== 'string' || svgName === '') {
      throw new Error('Expected the svgName to be a valid string.')
    }

    const { width, height, dFunc } = setting
    const {
      rootStrokeWidth,
      rootDefaultStrokeColor,
      rootAnimatingStrokeColor,
      rootFulfilledStrokeColor,
      rootRejectedStrokeColor
    } = {
      ...ROOT_CONFIG,
      ModifyRootConfig
    }
    const {
      w = width,
      h = height,
      paths = {},
      x = 0,
      y = 0,
      svgShouldFill = false,
      svgAnimeType = 'dash',
      svgStrokeWidth = rootStrokeWidth,
      svgTotalLength = 260,
      svgDefaultStrokeColor = rootDefaultStrokeColor,
      svgAnimatingStrokeColor = rootAnimatingStrokeColor,
      svgFulfilledStrokeColor = rootFulfilledStrokeColor,
      svgRejectedStrokeColor = rootRejectedStrokeColor
    } = svgBlueprint[svgName]

    const PATH_ARRAY = ObjectToArray(paths)
    const ANIME_ARRAY = ObjectToArray(anime)

    const shouldDrawPath = ({ name, isAnimating, fulfilled, rejected }) => {
      const pathShouldFill = paths[name].pathShouldFill || svgShouldFill
      const pathAnimeType = paths[name].pathAnimeType || svgAnimeType
      const pathStrokeWidth = paths[name].pathStrokeWidth || svgStrokeWidth
      const pathTotalLength = paths[name].pathTotalLength || svgTotalLength
      const pathDefaultStrokeColor =
        paths[name].pathDefaultStrokeColor || svgDefaultStrokeColor
      const pathAnimatingStrokeColor =
        paths[name].pathAnimatingStrokeColor || svgAnimatingStrokeColor
      const pathFulfilledStrokeColor =
        paths[name].pathFulfilledStrokeColor || svgFulfilledStrokeColor
      const pathRejectedStrokeColor =
        paths[name].pathRejectedStrokeColor || svgRejectedStrokeColor

      let strokeColor
      if (isAnimating) strokeColor = pathAnimatingStrokeColor
      if (fulfilled) strokeColor = pathFulfilledStrokeColor
      if (rejected) strokeColor = pathRejectedStrokeColor

      if (isAnimating) {
        if (pathShouldFill) {
          return (
            <path
              key={name}
              className='blinking'
              fill={strokeColor}
              stroke={strokeColor}
              strokeWidth={pathStrokeWidth}
              strokeMiterlimit='10'
              d={paths[name].d({ width, height, dFunc })}
            />
          )
        } else {
          return (
            <DrawPath
              key={name}
              setting={{
                d: paths[name].d({ width, height, dFunc }),
                shouldFill: pathShouldFill,
                type: pathAnimeType,
                strokeWidth: pathStrokeWidth,
                totalLength: pathTotalLength,
                stroke: strokeColor,
                stroke2: pathDefaultStrokeColor
              }}
            />
          )
        }
      } else if (fulfilled || rejected) {
        return (
          <path
            key={name}
            fill={svgShouldFill ? strokeColor : 'transparent'}
            stroke={strokeColor}
            strokeWidth={pathStrokeWidth}
            strokeMiterlimit='10'
            d={paths[name].d({ width, height, dFunc })}
          />
        )
      }

      return null
    }

    return (
      <svg x={x} y={y} width={w} height={h} viewBox={`${x} ${y} ${w} ${h}`}>
        {PATH_ARRAY.map((value, key) => {
          const {
            d,
            pathDefaultStrokeColor = svgDefaultStrokeColor,
            pathStrokeWidth = svgStrokeWidth
          } = value

          return (
            <path
              key={key}
              fill={svgShouldFill ? pathDefaultStrokeColor : 'transparent'}
              stroke={pathDefaultStrokeColor}
              strokeWidth={pathStrokeWidth}
              strokeMiterlimit='10'
              d={d({ width, height, dFunc })}
            />
          )
        })}
        {ANIME_ARRAY.map(anime => shouldDrawPath(anime))}
      </svg>
    )
  }
}

SvgManager.propTypes = {
  svgBlueprint: PropTypes.object.isRequired,
  ModifyRootConfig: PropTypes.object.isRequired
}

export default SvgManager
