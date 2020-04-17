import React, { useState } from 'react'

const App = props => {
  const [name, setName] = useState(props.name)
  const [price, setPrice] = useState(props.price)

  const reset = () => {
    setName(props.name)
    setPrice(props.price)
  }

  return (
    <>
      <p>現在の{name}さんの所持金は{price}円です。</p>
      <button onClick={() => setPrice(price + 100)}>+100</button>
      <button onClick={() => setPrice(price - 100)}>-100</button>
      <button onClick={reset}>Reset</button>
      <input value={name} onChange={e => setName(e.target.value)} />
    </>
  )
}

// defaultPropsの値をpropsを使って値を渡すことができる
App.defaultProps = {
  name: 'yokokura',
  price: 1000
}

export default App
