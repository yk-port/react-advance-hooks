import React, { useState } from 'react'

const App = () => {
  // useStateは配列を返す(2つ目の返り値(下記ではsetCount)は関数)
  const [count, setCount] = useState(0)

  const increment = () => setCount(count + 1)
  const decrement = () => setCount(count - 1)

  // setCountの引数に関数を渡す。「今の時点の値」を意味するpreviousCountを渡すことができる
  const increment2 = () => setCount(previousCount => previousCount + 1)
  const decrement2 = () => setCount(previousCount => previousCount - 1)

  const reset = () => setCount(0)
  const double = () => setCount(count * 2)
  const triple = () => setCount(previousCount => (
    previousCount % 3 === 0 ? previousCount / 3 : previousCount
  ))

  return (
    <>
      <div>count: {count}</div>
      <div>
        <button onClick={increment}>+1</button>
        <button onClick={decrement}>-1</button>
      </div>
      <div>
        <button onClick={increment2}>+1</button>
        <button onClick={decrement2}>-1</button>
      </div>
      <div>
        <button onClick={reset}>reset</button>
        <button onClick={double}>double</button>
      </div>
      <div>
        3の倍数のみ3で割った商を表示
        <button onClick={triple}>triple</button>
      </div>
    </>
  )
}

export default App
