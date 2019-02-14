import _ from 'lodash'

import { DASH_ANIME } from './setting'

export function getAnime (newStateOfIsAnimating = {}, newStateOfFulRej = {}) {
  const v = _.cloneDeep(DASH_ANIME)

  _.keys(newStateOfIsAnimating).forEach(key => {
    _.set(v, `${key}.isAnimating`, newStateOfIsAnimating[key])
  })

  _.keys(newStateOfFulRej).forEach(key => {
    const value = newStateOfFulRej[key]

    if (value === 'ful') _.set(v, `${key}.fulfilled`, true)
    if (value === 'rej') _.set(v, `${key}.rejected`, true)
  })

  return { dashAnime: v, fillAnime: {} }
}
