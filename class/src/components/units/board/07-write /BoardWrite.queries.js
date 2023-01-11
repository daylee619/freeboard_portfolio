import { gql } from "@apollo/client";

export const CREATE_BOARD = gql`
  mutation {
    createBoard(writer: "철수", title: "제목입니다.", contents: "내용이에요.") {
      _id
      number
      message
    }
  }
`;
