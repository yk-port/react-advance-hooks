import React, { useState } from 'react'

const App = props => {
  // state = {name: 'yokokura', price: 1000} というobjectを定義している
  const [state, setState] = useState(props)

  // state.nameやstate.priceと書くのが冗長なため、stateのプロパティを分割代入する
  const { name, price } = state

  return (
    <>
      <p>現在の{name}さんの所持金は{price}円です。</p>
      {/* setStateの第一引数にstateのコピー、第二引数に変更したいプロパティと値をセットしている */}
      <button onClick={() => setState({ ...state, price: price + 100 })}>+100</button>
      <button onClick={() => setState({ ...state, price: price - 100 })}>-100</button>
      <button onClick={() => setState(props)}>Reset</button>
      <input value={name} onChange={e => setState({ ...state, name: e.target.value })} />
    </>
  )
}

// defaultPropsの値(下記のケースはnameとpriceを持ったobject)をpropsに渡すことができる
App.defaultProps = {
  name: '',
  price: 1000
}

export default App
