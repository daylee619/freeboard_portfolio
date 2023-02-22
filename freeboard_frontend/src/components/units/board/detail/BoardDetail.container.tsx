import { useRouter } from "next/router";
import { useQuery } from "@apollo/client";

import { FETCH_BOARD } from "./BoardDetail.queries";
import BoardDetailUI from "./BoardDetail.presenter";

export default function BoardDetail() {
  const router = useRouter();

  const { data } = useQuery(FETCH_BOARD, {
    variables: { boardId: router.query.boardId },
  });

  const onClickMoveToBoardList = () => {
    void router.push("/boards");
  };
  const onClickMoveToBoardEdit = () => {
    void router.push(`/boards/${router.query.boardId}/edit`);
  };
  return (
    <>
      <BoardDetailUI
        data={data}
        onClickMoveToBoardList={onClickMoveToBoardList}
        onClickMoveToBoardEdit={onClickMoveToBoardEdit}
      />
    </>
  );
}
