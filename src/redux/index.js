import { combineReducers } from 'redux'

import testReducers from './reducers'

const rootReducer = combineReducers({
  testData: testReducers()
})

export default rootReducer
