import React, { useReducer, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

import Events from './Events'
import EventForm from './EventForm'
import OperationLogs from './OperationLogs'
import AppContext from '../contexts/AppContext'
import reducer from '../reducers'

const APP_KEY = 'appWithRedux'

const App = () => {
  // localStorageのAPP_KEY(appWithRedux)というkeyに何か値が入っていたら、その内容を返す(入っていなかったらnullを返す仕様になってる)
  const appState = localStorage.getItem(APP_KEY)
  // appStateの真偽値を判定して、真だったらappStateの内容(文字列になっているJSON形式の情報)をJSON.parseを使って文字列を解除してJSON形式のデータに変換してる
  const initialState = appState ? JSON.parse(appState) : {
    events: [],
    operationLogs: [],
  }
  const [state, dispatch] = useReducer(reducer, initialState)

  // stateの状態を監視して、「stateの状態が変わった時のみ」コールバックを実行する
  useEffect(() => {
    // 保存する形式をJSON形式の文字列に変換する
    const string = JSON.stringify(state)
    // console.log({ string })
    localStorage.setItem(APP_KEY, string)
  }, [state])

  return (
    // stateとvalueを共通で使えるようにContextに渡す
    <AppContext.Provider value={{ state, dispatch }}>
      <div className="container-fluid">
        <EventForm />
        <Events />
        <OperationLogs />
      </div>
    </AppContext.Provider>
  )
}

export default App
