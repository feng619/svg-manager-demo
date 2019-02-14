import axios from 'axios'

import { config } from '../config'

export function testFulAction () {
  return {
    type: 'TEST',
    payload: axios({
      url: config.apiHost,
      method: 'get'
    })
  }
}

export function testRejAction () {
  return {
    type: 'TEST',
    payload: axios({
      url: config.apiHostNotExist,
      method: 'get'
    })
  }
}
