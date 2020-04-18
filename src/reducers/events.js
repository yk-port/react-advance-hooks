import {
  CREATE_EVENT,
  DELETE_EVENT,
  DELETE_ALL_EVENT
} from '../actions'

const events = (state = [], action) => {
  switch (action.type) {
    case CREATE_EVENT:
      // actionから受け取ったデータをobject型で作る
      const event = { title: action.title, body: action.body }
      // idの番号を付与するために現在のstateの中の数を知りたい→lengthを使う
      const length = state.length
      // stateの中身が0→新規でデータを格納するためidは1になる
      const id = length === 0 ? 1 : state[length - 1].id + 1
      // 第一引数に現在のstateをコピー、第二引数に追加したい内容を指定
      return [...state, { id, ...event }]
    case DELETE_EVENT:
      // stateはobject型のevent情報が配列で格納されている。actionには選択されたid情報が含まれている
      return state.filter(event => event.id !== action.id)
    case DELETE_ALL_EVENT:
      return []
    default:
      return state
  }
}

export default events
