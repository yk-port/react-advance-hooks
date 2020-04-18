import {
  ADD_OPERATION_LOG,
  DELETE_ALL_OPERATION_LOGS
} from '../actions'

const operationLogs = (state = [], action) => {
  switch (action.type) {
    case ADD_OPERATION_LOG:
      // actionから受け取ったデータをobject型で作る
      const operationLog = {
        description: action.description,
        operatedAdd: action.operatedAdd
      }
      // 作成したobjectを今までのデータ(...state)の先頭に配置する配列を作ってreturnする
      return [operationLog, ...state]
    case DELETE_ALL_OPERATION_LOGS:
      return []
    default:
      return []
  }
}

export default operationLogs
