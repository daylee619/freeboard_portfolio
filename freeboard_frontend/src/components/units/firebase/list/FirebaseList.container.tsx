import { useEffect, useState } from "react";
import FirebaseListUI from "./FirebaseList.presenter";
import {
  collection,
  getFirestore,
  getDocs,
  DocumentData,
} from "firebase/firestore/lite";
import { firebaseApp } from "../../../../commons/libraries/firebase";
import { useRouter } from "next/router";

export default function FirebaseList() {
  const router = useRouter();
  const [data, setData] = useState<DocumentData[]>([]);

  useEffect(() => {
    async function fetchBoards() {
      const board = collection(getFirestore(firebaseApp), "board");
      const result = await getDocs(board);
      const boards = result.docs.map((el) => el.data());
      setData(boards);
    }
    void fetchBoards();
  }, []);
  const onClickMoveToBoardNew = () => {
    void router.push("/firebase/new");
  };
  return (
    <FirebaseListUI data={data} onClickMoveToBoardNew={onClickMoveToBoardNew} />
  );
}
