import { useState, useRef } from 'react';
import './Editor.css';

function Editor({onCreate}) {
  const [content, setContent] = useState("");
  const contentRef = useRef();

  const onChangeContent = (e) => {
    setContent(e.target.value);
  }

  const onKeyDown = (e) => {
    if(e.keyCode === 13){
      onSubmit();
    }
  }

  const onSubmit = () => {
    if(content === ""){           // 아무것도 입력하지 않았을 때
      contentRef.current.focus();
      return;
    }
    onCreate(content);
    setContent("");
  }

  return (
    <div className="Editor">
      <input 
        ref={contentRef}
        value={content}
        onChange={onChangeContent} 
        onKeyDown={onKeyDown}
        placeholder="새로운 Todo..."
      />
      <button onClick={onSubmit}>추가</button>
    </div>
  )
}

export default Editor;