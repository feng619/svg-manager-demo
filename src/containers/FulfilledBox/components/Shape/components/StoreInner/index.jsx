import React from 'react'

import { PHASE_DATA } from '../../../../utils/setting'

import './style.scss'

const StoreInner = ({ phase }) => (
  <pre className='store-data'>
    <code>
      {PHASE_DATA[phase].store}
    </code>
  </pre>
)

export default StoreInner
