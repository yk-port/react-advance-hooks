import React, { useEffect, useState } from 'react'

const App = props => {
  const [state, setState] = useState(props)
  const { name, price } = state

  // useEffectは「renderされた後」に実行される
  useEffect(() => {
    console.log('componentDidMountとcomponentDidUpdateの挙動')
  })

  // 第二引数に[]を指定すると「初回のrenderされた後のみ」に実行される
  useEffect(() => {
    console.log('componentDidMountの挙動')
  }, [])

  // 第二引数の配列の中にパラメータを指定すると「特定のパラメータがrender(描画または変更)された時のみ」に実行される
  useEffect(() => {
    console.log('nameが描画された、または変更された時のみ実行される')
  }, [name])

  return (
    <>
      <p>現在の{name}さんの所持金は{price}円です。</p>
      <button onClick={() => setState({ ...state, price: price + 100 })}>+100</button>
      <button onClick={() => setState({ ...state, price: price - 100 })}>-100</button>
      <button onClick={() => setState(props)}>Reset</button>
      <input value={name} onChange={e => setState({ ...state, name: e.target.value })} />
    </>
  )
}

App.defaultProps = {
  name: '',
  price: 1000
}

export default App
