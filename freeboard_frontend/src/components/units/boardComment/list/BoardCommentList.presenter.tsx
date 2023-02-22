import * as S from "./BoardCommentList.styles";
import { getDate } from "../../../../commons/utils/utils";
import { IBoardCommentListUIProps } from "./BoardCommentList.types";
export default function BoardCommentListUI(props: IBoardCommentListUIProps) {
  const qqq = (event) => {
    alert(event.currentTarget.id + "님이 작성한 글입니다.");
  };
  return (
    <>
      {props.data?.fetchBoardComments.map((el) => (
        <S.CommentListWrapper key={el._id}id={el.writer} onClick={qqq}>
          <S.FlexWrapper>
            <S.Profile src="/Vector (2).png" />
            <S.MainWrapper>
              <S.WriterWrapper>
                <S.Writer id="맹구">{el.writer}</S.Writer>
              </S.WriterWrapper>
              <S.Contents>{el.contents}</S.Contents>
            </S.MainWrapper>

            <S.OptionIcons>
              <S.UpdateIcon src="/updateIcon.png" />
              <S.DeleteIcon
                src="/deleteIcon.png"
                onClick={props.onClickDelete}
                id={el._id}
              />
            </S.OptionIcons>
          </S.FlexWrapper>
          <S.DateWrapper>{getDate(el?.createdAt)}</S.DateWrapper>
        </S.CommentListWrapper>
      ))}
    </>
  );
}
