import * as S from "./BoardList.styles";
import { getDate } from "../../../../commons/utils/utils";
import { IBoardListUIProps } from "./BoardList.types";
export default function BoardListUI(props: IBoardListUIProps) {
  return (
    <S.Wrapper>
      <S.TableTop />
      <S.Row>
        <S.ColumnHeader>ID</S.ColumnHeader>
        <S.ColumnTitle>제목</S.ColumnTitle>
        <S.ColumnHeader>작성자</S.ColumnHeader>
        <S.ColumnHeader>날짜</S.ColumnHeader>
      </S.Row>
      {props.data?.fetchBoards.map((el, index) => (
        <S.Row key={el._id}>
          <S.ColumnContents>{index + 1}</S.ColumnContents>
          <S.Title id={el._id} onClick={props.onClickMoveToBoardDetail}>
            {el.title}
          </S.Title>
          <S.Writer>{el.writer}</S.Writer>
          <S.CreateAt>{getDate(el.createdAt)}</S.CreateAt>
        </S.Row>
      ))}
      <S.TableBottom />
      <S.Footer>
        <S.Button onClick={props.onClickMoveToBoardNew}>
          <S.PencilIcon src="./pencilIcon.png" />
          게시물 등록하기
        </S.Button>
      </S.Footer>
    </S.Wrapper>
  );
}
