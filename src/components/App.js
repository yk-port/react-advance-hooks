import React, { useReducer, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

import reducer from '../reducers'

const App = () => {
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')

  // reducerを使うとstate(状態)とdispatchという関数が返ってくる
  // useReducerの第一引数にはreducerを渡す(これは決まっている)
  // 第二引数にはデフォルトの状態を指定する→今回eventの状態を配列で管理していきたいので[]と記述している
  // dispatch…状態を変更(イベント発生)したタイミングでdispatch関数を使う。dispatchの引数にactionを渡す。
  // actionにはtypeという属性を付与して、「何のイベントなのか」を管理する
  const [state, dispatch] = useReducer(reducer, [])

  const addEvent = e => {
    e.preventDefault()
    // dispatch関数にtypeと保存したいeventのtitleとbodyの内容をobject型で渡す
    dispatch({
      type: 'CREATE_EVENT',
      title,
      body
    })
    setTitle('')
    setBody('')
  }

  return (
    <div className="container-fluid">
      <h4>イベント作成フォーム</h4>
      <form>
        <div className="form-group">
          <label htmlFor="formEventTitle">タイトル</label>
          <input className="form-control" id="formEventTitle" value={title} onChange={e => setTitle(e.target.value)} />
        </div>

        <div className="form-group">
          <label htmlFor="formEventBody">ボディー</label>
          <textarea className="form-control" id="formEventBody" value={body} onChange={e => setBody(e.target.value)}  />
        </div>

        <button className="btn btn-primary" onClick={addEvent}>イベントを作成する</button>
        <button className="btn btn-danger">全てのイベントを削除する</button>
      </form>

      <h4>イベント一覧</h4>
      <table className="table table-hover">
        <thead>
          <tr>
            <th>ID</th>
            <th>タイトル</th>
            <th>ボディー</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
        </tbody>
      </table>
    </div>
  )
}

export default App
