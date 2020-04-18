import React, { useReducer } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

import Events from './Events'
import EventForm from './EventForm'
// ContextのはPrividerとConsumerが存在する
import AppContext from '../contexts/AppContext'
import reducer from '../reducers'

const App = () => {
  const [state, dispatch] = useReducer(reducer, [])

  return (
    // Providerにはvalueという特定のプロパティがある、そこに値をセットできる(valueというプロパティ名は仕様なので決まっている)
    <AppContext.Provider value={'AppコンポーネントのProviderで定義した値を、別のコンポーネントでConsumerを使って表示させる(今回はEventsコンポーネントの中にConsumerを使ってvalueの値を渡している)'}>
      <div className="container-fluid">
        <EventForm state={state} dispatch={dispatch} />
        <Events state={state} dispatch={dispatch} />
      </div>
    </AppContext.Provider>
  )
}

export default App
