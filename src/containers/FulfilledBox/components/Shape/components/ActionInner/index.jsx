import React from 'react'

import { PHASE_DATA } from '../../../../utils/setting'

import './style.scss'

const ActionInner = ({ phase }) => (
  PHASE_DATA[phase].action ? (
    <div className={`action-data ${PHASE_DATA[phase].action}`}>
      {PHASE_DATA[phase].action}
    </div>
  ) : null
)

export default ActionInner
