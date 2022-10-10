import { useRef, useState } from "react";

const DiaryEditor = ({ onCreate }) => {
  const authorInput = useRef();
  const contentInput = useRef();

  const [state, setState] = useState({
    author: "",
    content: "",
    emotion: 1,
  }); 

  const onChange = (e) => {
    setState({...state,[e.target.name]: e.target.value}); 
  }
  const onSubmit = () => {
    if(state.author.length < 1) {
      alert("작성자를 입력해주세요");
      authorInput.content.focus();
      return;
    }
    if(state.content.length < 5) {
      alert("내용을 5자 이상 입력해주세요");
      contentInput.content.focus();
      return;
    }
    alert("저장 완료!");

    onCreate(state.author, state.content, state.emotion);
    //값 초기화
    setState({
      author: "",
      content: "",
      emoyion: 1
    })
  }

  return (
    <div className="DiaryEditor">
      <h2>오늘의 일기</h2>
      <div>
        <input
          placeholder="작성자"
          type="text"
          onChange={onChange}
          value={state.author}
          name='author'
        />
      </div>
      <div>
        <textarea
          placeholder="일기"
          type="text"
          onChange={onChange}
          value={state.content}
          name='content'
        />
      </div>
      <div>
        <span>오늘의 감정점수 : </span>
        <select
          name='emotion'
          value={state.emotion}
          onChange={onChange}
        >
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
          <option value={5}>5</option>
        </select>
      </div>
      <div>
        <button onClick={onSubmit}>일기 저장하기</button>
      </div>
    </div>
  );
};
export default DiaryEditor;
