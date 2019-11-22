export default function todos(state = [], actions) {
  switch (actions.type) {
    case 'ADD_TODO':
      console.log('ADD_TODO')
      return [...state, {
        text: actions.text,
        through: actions.through
      }]
    case "SET_THROUGH":
      const list = [...state];
      list[actions.index].through = !list[actions.index].through
      return list
    default :
      return state
  }
}