import { useRef, useState } from 'react';
import './App.css';
import Editor from './components/Editor';
import Header from './components/Header';
import List from './components/List';

const mockTodo =[
  {
    id:0,
    isDone:false, //체크박스 true-체크, false-해제
    content:"React 공부하기",
    createDate : new Date().getTime(),
  },
  {
    id:1,
    isDone:false, //체크박스 true-체크, false-해제
    content:"빨래하기",
    createDate : new Date().getTime(),
  },
  {
    id:2,
    isDone:false, //체크박스 true-체크, false-해제
    content:"노래 연습하기",
    createDate : new Date().getTime(),
  },
];//end mockTodo

function App() {
  const [todo,setTodo] = useState(mockTodo); //useState()안에 있는건 초기값
  const idRef = useRef(3);

  const onCreate = (content)=>{
    const newItem={
      id:idRef.current++,
      content: content,
      isDone: false,
      createDate:new Date().getTime()
    };

    //setTodo에 미리 할 일들이 들어가 있는 todo를 넣고
    //새로 추가는 그 앞에 계속해서 올리도록 설정함
    setTodo([newItem,...todo]);
  };//end onCreate

  //체크박스 체크하면 true로 변경
  const onUpdate = (targetId)=>{
    //todo State의 값들 중에 targetId와 일치하는 id를
    //todo 아이템의 isDone변경

    //map() 함수 이용해서 todo 배열에서 targetId와 일치하는 id를 갖는 요소의 데이터만
    //바꿔서 새로운 배열을 생성
    setTodo(todo.map((it)=>{
      if(it.id === targetId){
        return {...it, isDone : !it.isDone};
      }else{
        return it;
      }
    }));
    
  };//end onUpdate

  const onDelete=(targetId)=>{
    //todo 배열에서 targetId와 일치하는 id를 갖는 요소만 삭제하고
    //새로운 배열을 filter() 메서드를 이용해서 만들기
    setTodo(todo.filter((it)=>it.id !== targetId));
  };//end onDelete

  return (
    <div className='App'>
      <Header />
      <Editor onCreate={onCreate} />
      <List todo={todo} onUpdate={onUpdate} onDelete={onDelete} />
    </div>
  );

}//end App

export default App
