import * as S from "./BoardList.styles";
import { getDate } from "../../../../commons/utils/utils";
import { IBoardListUIProps } from "./BoardList.types";
import Paginations01 from "../../../../commons/pagination/01/Pagination01.container";
import Searchbar01 from "../../../../commons/searchbar/01/Searchbar01.container";
import { uuidv4 } from "@firebase/util";
export default function BoardListUI(props: IBoardListUIProps) {
  return (
    <S.Wrapper>
      <Searchbar01
        refetch={props.refetch}
        refetchBoardsCount={props.refetchBoardsCount}
        onChangeKeyword={props.onChangeKeyword}
      />
      <S.TableTop />
      <S.Row>
        <S.ColumnHeader>ID</S.ColumnHeader>
        <S.ColumnTitle>제목</S.ColumnTitle>
        <S.ColumnHeader>작성자</S.ColumnHeader>
        <S.ColumnHeader>날짜</S.ColumnHeader>
      </S.Row>
      {props.data?.fetchBoards.map((el, index) => (
        <S.Row key={el._id}>
          {/* <S.ColumnContents>{index + 1}</S.ColumnContents> */}
          <S.ColumnBasic>
            {String(el._id).slice(-4).toUpperCase()}
          </S.ColumnBasic>
          <S.ColumnTitle id={el._id} onClick={props.onClickMoveToBoardDetail}>
            {el.title
              .replaceAll(props.keyword, `#$%${props.keyword}#$%`)
              .split("#$%")
              .map((el) => (
                <S.TextToken key={uuidv4()} isMatched={props.keyword === el}>
                  {el}
                </S.TextToken>
              ))}
          </S.ColumnTitle>
          <S.Writer>{el.writer}</S.Writer>
          <S.CreateAt>{getDate(el.createdAt)}</S.CreateAt>
        </S.Row>
      ))}
      <S.TableBottom />
      <S.Footer>
        <Paginations01 refetch={props.refetch} count={props.count} />
        <S.Button onClick={props.onClickMoveToBoardNew}>
          <S.PencilIcon src="./pencilIcon.png" />
          게시물 등록하기
        </S.Button>
      </S.Footer>
    </S.Wrapper>
  );
}
