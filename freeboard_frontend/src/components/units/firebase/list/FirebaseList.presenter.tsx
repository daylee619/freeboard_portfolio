import * as S from "./FirebaseList.styles";
import { uuidv4 } from "@firebase/util";
import { IFirebaseListProps } from "./FirebaseList.types";
export default function FirebaseListUI(props: IFirebaseListProps) {
  return (
    <S.Wrapper>
      <S.Row>
        <S.ColumnHeaderBasic>번호</S.ColumnHeaderBasic>
        <S.ColumnHeaderBasic>제목</S.ColumnHeaderBasic>
        <S.ColumnHeaderBasic>내용</S.ColumnHeaderBasic>
        <S.ColumnHeaderBasic>작성자</S.ColumnHeaderBasic>
      </S.Row>
      {props.data?.map((el: any, index: number) => (
        <S.Row key={uuidv4()}>
          <S.ColumnBasic>{index + 1}</S.ColumnBasic>
          <S.ColumnBasic>{el.title}</S.ColumnBasic>
          <S.ColumnBasic>{el.contents}</S.ColumnBasic>
          <S.ColumnBasic>{el.contents}</S.ColumnBasic>
        </S.Row>
      ))}

      <S.Button onClick={props.onClickMoveToBoardNew}>
        게시물 등록하기
        <S.PencilIcon src="../../../../../../write.png" />
      </S.Button>
    </S.Wrapper>
  );
}
