export function addTypes(value) {
  return {
    type: 'ADD_TODO',
    text: value,
    through: false
  }
}

export function filterType(filter) {
  return {
    type: 'FILTER_TYPE',
    filter
  }
}

export function setThrough(index) {
  return {
    type: 'SET_THROUGH',
    index
  }
}