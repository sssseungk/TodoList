import { useState, useRef } from 'react';
import './App.css'
import Editor from './components/Editor';
import Header from './components/Header'
import List from './components/List';

// 임의 데이터 생성
const mockData = [
  {
    id: 0,
    isDone: false,
    content: "React 공부하기",
    date: new Date().getTime(),
  },
  {
    id: 1,
    isDone: false,
    content: "빨래하기",
    date: new Date().getTime(),
  },
  {
    id: 2,
    isDone: false,
    content: "노래 연습하기",
    date: new Date().getTime(),
  },
]


function App() {
  
  const [todos, setTodos] = useState(mockData);
  const idRef = useRef(3);

  const onCreate = (content) => {
    const newTodo = {
      id: idRef.current++,
      isDone: false,
      content: content,
      data: new Date().getTime()
    }
    setTodos([newTodo, ...todos]);
  }

  return (
    <div className='App'>
      <Header/>
      <Editor onCreate={onCreate}/>
      <List/>
    </div>
  )
}

export default App;