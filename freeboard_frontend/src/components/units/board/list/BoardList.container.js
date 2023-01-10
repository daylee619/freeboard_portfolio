import BoardListUI from "./BoardList.presenter";
import { FETCH_BOARDS } from "./BoardList.queries";
import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";

export default function BoardList() {
  const router = useRouter();
  const { data } = useQuery(FETCH_BOARDS);
  console.log(data);

  const onClickMoveToBoardNew = () => {
    router.push("/boards/new");
  };
  const onClickMoveToBoardDetail = (event) => {
    router.push(`/boards/${event.target.id}`);
  };
  return (
    <BoardListUI
      data={data}
      onClickMoveToBoardNew={onClickMoveToBoardNew}
      onClickMoveToBoardDetail={onClickMoveToBoardDetail}
    />
  );
}
