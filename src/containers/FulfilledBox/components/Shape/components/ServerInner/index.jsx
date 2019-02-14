import React from 'react'

import { PHASE_DATA } from '../../../../utils/setting'

import './style.scss'

const ServerInner = ({ actionType, phase }) => {
  const URL = actionType === 'ful'
    ? 'jsonplaceholder.typicode.com'
    : (actionType === 'rej' ? 'localhost:1234' : '')

  return (
    [
      <div key='url' className='server-msg'>
        {URL}
      </div>,
      PHASE_DATA[phase].spinner ? (
        <div className='spinner-wrapper' key='spinner-wrapper'>
          <svg className='spinner' viewBox='0 0 50 50'>
            <circle className='path' cx='25' cy='25' r='20' fill='none' strokeWidth='3' />
          </svg>
        </div>
      ) : null
    ]
  )
}

export default ServerInner
