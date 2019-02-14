import React from 'react'
import SvgManager from '../../../../components/SvgManager'

import './style.scss'

const SvgElement = ({ className, svgName, needAnime, anime }) => (
  <div className={className}>
    <SvgManager
      svgName={svgName}
      anime={{ [needAnime]: anime.dashAnime[needAnime] }}
    />
  </div>
)

export default SvgElement
