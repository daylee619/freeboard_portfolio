import BoardWriteUI from "./BoardWrite.presenter";
import { useMutation } from "@apollo/client";
import { useState } from "react";
import { CREATE_BOARD } from "./BoardWrite.queries";
export default function BoardWrite() {
  const [mycolor, setMycolor] = useState(false);
  // 자바스크립트 영역
  const [writer, setWriter] = useState();
  const [title, setTitle] = useState();
  const [contents, setContents] = useState();
  const [나의함수] = useMutation(CREATE_BOARD);

  const onClickSubmit = async () => {
    const result = await 나의함수({
      variables: {
        writer: writer,
        title: title,
        contents: contents,
      },
    });
    console.log(result);
    alert(result.data.createBoard.message);
  };

  const onChangeWriter = (e) => {
    setWriter(e.target.value);
    if (e.target.value && title && contents) {
      setMycolor(true);
    }
  };

  const onChangeTitle = (e) => {
    setTitle(e.target.value);
    if (writer && e.target.value && contents) {
      setMycolor(true);
    }
  };

  const onChangeContents = (e) => {
    setContents(e.target.value);
    if (writer && title && e.target.value) {
      setMycolor(true);
    }
  };
  //html 영역(return 아래)
  return (
    <BoardWriteUI
      onclicksubmit={onClickSubmit}
      onchangewriter={onChangeWriter}
      onchangetitle={onChangeTitle}
      onchangecontents={onChangeContents}
      mycolor={mycolor}
    />
  );
}
