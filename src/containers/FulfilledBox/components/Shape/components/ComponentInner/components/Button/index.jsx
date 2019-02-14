import React from 'react'

import './style.scss'

const Button = ({ type, phase, request }) => {
  const BTN_DISABLED = !(phase === 'init' || phase === 'ful_end' || phase === 'rej_end')

  return (
    <button
      disabled={BTN_DISABLED}
      className={`request_btn ${type} disabled-${BTN_DISABLED}`}
      onClick={() => request(type)}
    >
      Request
    </button>
  )
}

export default Button
