import React from 'react'

import { PHASE_DATA } from '../../utils/setting'

import './shape.scss'

const Shape = ({ title = '', phase, actionType, blink = false, request, Component = () => null }) => {
  let wrapperStyle = phase

  if (blink) {
    wrapperStyle = PHASE_DATA[phase][`${title}Blink`] || ''
  }

  return (
    <div className={`${title} ${wrapperStyle}`}>
      <div className='align-center'>
        <h3>{title}</h3>
        <Component actionType={actionType} phase={phase} request={request} />
      </div>
    </div>
  )
}

export default Shape
