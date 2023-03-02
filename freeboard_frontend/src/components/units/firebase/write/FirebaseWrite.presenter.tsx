import { MyInput, Wrapper } from "./FirebaseWrite.styles";
import { IFirebaseWriteProps } from "./FirebaseWrite.types";
export default function FirebaseWriteUI(props: IFirebaseWriteProps) {
  return (
    <Wrapper>
      <div>
        작성자: <MyInput type="text" onChange={props.onChangeWriter} />
      </div>
      <div>
        제목: <MyInput type="text" onChange={props.onChangeTitle} />
      </div>
      <div>
        내용: <MyInput type="text" onChange={props.onChangeContents} />
      </div>
      <div>
        <button onClick={props.onClickSubmit}>등록하기</button>
      </div>
    </Wrapper>
  );
}
