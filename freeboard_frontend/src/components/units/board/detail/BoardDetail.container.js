import { useRouter } from "next/router";
import { useQuery, useMutation } from "@apollo/client";

import { FETCH_BOARD } from "./BoardDetail.queries";
import BoardDetailUI from "./BoardDetail.presenter";
import { UPDATE_BOARD } from "../../../../../../class/src/components/units/board/08-write/BoardWrite.queries";
export default function BoardDetail() {
  const router = useRouter();

  const { data } = useQuery(FETCH_BOARD, {
    variables: { boardId: router.query.boardId },
  });

  const onClickMoveToBoardList = () => {
    router.push("/boards");
  };
  const onClickMoveToBoardEdit = () => {
    router.push(`/boards/${router.query.boardId}/edit`);
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
