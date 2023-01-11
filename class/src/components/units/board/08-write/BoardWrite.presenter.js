import * as S from "./BoardWrite.styles";

// 아래는 export default와 export를 함께 사용하는 방법
// import qqq, {BlueButton, RedInput} from './BoardWrite.styles";
export default function BoardWriteUI(props) {
  // 자바스크립트 영역

  // html 영역(return 아래)
  return (
    <>
      작성자: <S.RedInput type="text" onChange={props.onchangewriter} />
      <br />
      제목: <input type="text" onChange={props.onchangetitle} />
      <br />
      내용: <input type="text" onChange={props.onchangecontents} />
      <br />
      <S.BlueButton
        qqq="yellow"
        rrr="20px"
        zzz={props.mycolor}
        onClick={props.isEdit ? props.onClickUpdate : props.onclicksubmit}
      >
        {props.isEdit ? "수정하기" : "등록하기"}
      </S.BlueButton>
    </>
  );
}
