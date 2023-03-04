import { useQuery, gql } from "@apollo/client";
import { ChangeEvent, MouseEvent, useState } from "react";
import _ from "lodash"; // debouncing
import {
  IQuery,
  IQueryFetchBoardsArgs,
} from "../../src/commons/types/generated/types";
import { v4 as uuidv4 } from "uuid";

const FETCH_BOARDS = gql`
  query fetchBoards($page: Int, $search: String) {
    fetchBoards(page: $page, search: $search) {
      _id
      writer
      title
      contents
    }
  }
`;

export default function StateRoutePage() {
  const [keyword, setKeyword] = useState("");
  // const [search, setSearch] = useState("");
  const { data, refetch } = useQuery<
    Pick<IQuery, "fetchBoards">,
    IQueryFetchBoardsArgs
  >(FETCH_BOARDS);

  const onClickPage = (event: MouseEvent<HTMLSpanElement>) => {
    void refetch({ page: Number(event.currentTarget.id) }); // 검색에서 refetch할 떄, 사용한 search 검색어가 저장되어있는 상태이므로 추가로 search 포함하지 않아도 됨.
  };

  // const onClickSearch = () => {
  //   void refetch({ search, page: 1 });
  // };
  const getDebounce = _.debounce((value) => {
    void refetch({ search: value, page: 1 });
    setKeyword(value);
  }, 1000);

  const onChangeSearch = (e: ChangeEvent<HTMLInputElement>) => {
    // setSearch(e.target.value);
    getDebounce(e.target.value);
  };

  return (
    <>
      검색어 입력 : <input type="text" onChange={onChangeSearch} />
      {/* <button onClick={onClickSearch}>검색하기</button> */}
      {data?.fetchBoards.map((el) => (
        <div key={el._id}>
          <span style={{ margin: "10px" }}>{el.writer}</span>
          <span style={{ margin: "10px" }}>
            {el.title
              .replaceAll(keyword, `#$%${keyword}#$%`)
              .split("#$%")
              .map((el) => (
                <span
                  key={uuidv4()}
                  style={{ color: el === keyword ? "red" : "black" }}
                >
                  {el}
                </span>
              ))}
          </span>
        </div>
      ))}
      {new Array(10).fill(1).map((_, index) => (
        <span key={index + 1} id={String(index + 1)} onClick={onClickPage}>
          {index + 1}
        </span>
      ))}
    </>
  );
}
