import React from 'react'

import Button from './components/Button'

import './style.scss'

const ComponentInner = ({ phase, request }) => {
  return (
    [
      <Button key='ful_btn' type='ful' phase={phase} request={request} />,
      <Button key='rej_btn' type='rej' phase={phase} request={request} />
    ]
  )
}

export default ComponentInner
