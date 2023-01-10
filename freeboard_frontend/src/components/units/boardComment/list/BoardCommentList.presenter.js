import * as S from "./BoardCommentList.styles";
import { getDate } from "../../../../commons/utils/utils";
export default function BoardCommentListUI(props) {
  return (
    <>
      {props.data?.fetchBoardComments.map((el) => (
        <S.CommentListWrapper>
          <S.FlexWrapper>
            <S.Profile src="/Vector (2).png" />
            <S.MainWrapper>
              <S.WriterWrapper>
                <S.Writer>{el.writer}</S.Writer>
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
