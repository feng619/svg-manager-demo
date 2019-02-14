export default function testReducers () {
  return (
    state = {
      data: null,
      isLoading: false
    },
    { type, payload }
  ) => {
    switch (type) {
      case 'TEST_PENDING':
        return {
          data: null,
          isLoading: true
        }
      case 'TEST_FULFILLED':
        return {
          data: payload,
          isLoading: false
        }
      case 'TEST_REJECTED':
        return {
          data: payload,
          isLoading: false
        }
      default:
        return state
    }
  }
}
