import './css/Editor.css';
import { useRef, useState } from 'react';

const Editor = ({onCreate})=>{
    const [content,setContent] = useState(""); //content는 내가 추가하는 새로운 할 일
    const inputRef = useRef();//자료값이 변동이 있을 때만 처리하기 위해 useRef사용

    //input에 할 일이 입력되면
    const onChangeContent = (event)=>{
        // 이벤트로 들어오는 걸 타겟팅한 값
        setContent(event.target.value);
    };

    //Enter를 치면 전송
    const onKeyDown = (event)=>{
        if(event.keyCode === 13){//13이 enter의 키코드임
            onSubmit();
        }
    };

    //추가 버튼을 클릭했을 때 일어나는 일
    const onSubmit=()=>{
        if(content === ""){
            //포커스
            inputRef.current.focus();

            return; // 아무것도 입력안하고 추가 누르면 종료
        }

        onCreate(content);
        setContent("");//자료 전송 후 input을 공백으로
    };

    return(
        <div className="Editor">
            <h4>새로운 Todo 작성하기 🎭</h4>
            <div className='editor_wrapper'>
                <input type='text' 
                value={content} // 내가 쓴 할 일을 값으로 받음
                onChange={onChangeContent} // 내가 쓴 할 일을 업데이트해서 바꿈
                onKeyDown={onKeyDown} // enter 키를 눌러도 내가 쓴 할일을 전송
                placeholder='새로운 Todo...'/>{/* placeholder는 쓰기전 희미하게 띄워지는 글씨 */}
                <button onClick={onSubmit}>추가</button>
                {/* 추가 버튼을 누르면 내가 쓴 내용이 전송됨 */}
            </div>
        </div>
    );
}

export default Editor;