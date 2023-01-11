import BoardWriteUI from "./BoardWrite.presenter";
import { useMutation } from "@apollo/client";
import { ChangeEvent, useState } from "react";
import { useRouter } from "next/router";
import { CREATE_BOARD, UPDATE_BOARD } from "./BoardWrite.queries";
import { IBoardWriteProps, IMyvariables } from "./BoardWrite.types";

export default function BoardWrite(props: IBoardWriteProps) {
  const router = useRouter();
  const [mycolor, setMycolor] = useState(false);
  // 자바스크립트 영역
  const [writer, setWriter] = useState("");
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");
  const [나의함수] = useMutation(CREATE_BOARD);
  const [updateBoard] = useMutation(UPDATE_BOARD);

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
    router.push(`/10-01-typescript-boards/${result.data.createBoard.number}`);
  };

  const onClickUpdate = async () => {
    const myvariables: IMyvariables = {
      number: Number(router.query.number),
    };

    if (writer) myvariables.writer = writer;
    if (title) myvariables.title = title;
    if (contents) myvariables.contents = contents;

    //1. 수정하기 mutation 날리기
    const result = await updateBoard({
      variables: myvariables,
    });
    //2. 상세페이지로 이동하기
    console.log(result);
    alert(result.data.updateBoard.message);
    router.push(`/10-01-typescript-boards/${result.data.updateBoard.number}`);
  };
  const onChangeWriter = (e: ChangeEvent<HTMLInputElement>) => {
    setWriter(e.target.value);
    if (e.target.value && title && contents) {
      setMycolor(true);
    }
  };

  const onChangeTitle = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
    if (writer && e.target.value && contents) {
      setMycolor(true);
    }
  };

  const onChangeContents = (e: ChangeEvent<HTMLInputElement>) => {
    setContents(e.target.value);
    if (writer && title && e.target.value) {
      setMycolor(true);
    }
  };
  //html 영역(return 아래)
  return (
    <>
      {BoardWriteUI({
        onclicksubmit: onClickSubmit,
        onchangewriter: onChangeWriter,
        onchangetitle: onChangeTitle,
        onchangecontents: onChangeContents,
        mycolor: mycolor,
        isEdit: props.isEdit,
        onClickUpdate: onClickUpdate,
        data: props.data,
      })}
    </>
  );

  // <BoardWriteUI
  //   onclicksubmit={onClickSubmit}
  //   onchangewriter={onChangeWriter}
  //   onchangetitle={onChangeTitle}
  //   onchangecontents={onChangeContents}
  //   mycolor={mycolor}
  //   isEdit={props.isEdit}
  //   onClickUpdate={onClickUpdate}
  //   data={props.data}
  // />
}
