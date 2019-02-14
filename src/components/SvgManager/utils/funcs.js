export function ObjectToArray (object) {
  return Object.keys(object).map(key => object[key])
}
