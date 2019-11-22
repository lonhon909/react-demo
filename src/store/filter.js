export default function filter(state = 0, actions) {
  switch(actions.type) {
    case "FILTER_TYPE":
      console.log('FILTER_TYPE', actions)
      return actions.filter
    default :
      return state;
  }
}