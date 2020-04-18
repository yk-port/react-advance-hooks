import React, { useReducer } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

import Events from './Events'
import EventForm from './EventForm'
// ContextのはPrividerとConsumerが存在する(useContextを使う場合はConsumerは使わない)
import AppContext from '../contexts/AppContext'
import reducer from '../reducers'

const App = () => {
  const [state, dispatch] = useReducer(reducer, [])

  return (
    // Providerにはvalueという特定のプロパティがある、そこに値をセットできる(valueというプロパティ名は仕様なので決まっている)
    // useContextを使えば、共有したいものをProviderに渡せばバケツリレーせずに共有したいものを参照することができる
    <AppContext.Provider value={'AppコンポーネントのProviderのvalueにセットした値を、別のコンポーネントでvalueとして受け取って表示させる(今回はEventsコンポーネントでvalueの値を使う)'}>
      <div className="container-fluid">
        <EventForm state={state} dispatch={dispatch} />
        <Events state={state} dispatch={dispatch} />
      </div>
    </AppContext.Provider>
  )
}

export default App
