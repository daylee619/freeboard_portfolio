import { addDoc, collection, getFirestore } from "firebase/firestore/lite";
import { useRouter } from "next/router";
import { ChangeEvent, useState } from "react";
import FirebaseWriteUI from "./FirebaseWrite.presenter";
import { firebaseApp } from "../../../../commons/libraries/firebase";

export default function FirebaseWrite() {
  const router = useRouter();
  const [writer, setWriter] = useState("");
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");

  const onClickSubmit = async () => {
    const board = collection(getFirestore(firebaseApp), "board");
    await addDoc(board, { writer, title, contents });
    alert("게시물 등록에 성공하였습니다!");
    void router.push("/firebase");
  };

  const onChangeWriter = (event: ChangeEvent<HTMLInputElement>) => {
    setWriter(event.target.value);
  };
  const onChangeTitle = (event: ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };
  const onChangeContents = (event: ChangeEvent<HTMLInputElement>) => {
    setContents(event.target.value);
  };

  return (
    <FirebaseWriteUI
      onClickSubmit={onClickSubmit}
      onChangeWriter={onChangeWriter}
      onChangeTitle={onChangeTitle}
      onChangeContents={onChangeContents}
    />
  );
}
