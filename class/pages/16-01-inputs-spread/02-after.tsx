import { gql, useMutation } from "@apollo/client";
import { useState } from "react";
const CREATE_BOARD = gql`
  mutation createBoard($writer: String, $title: String, $contents: String) {
    # 변수의 타입 적는 곳
    createBoard(writer: $writer, title: $title, contents: $contents) {
      # 실제 우리가 전달할 변수 적는 곳
      _id
      number
      message
    }
  }
`;

export default function GraphqlMutationPage() {
  const [inputs, setInputs] = useState({
    writer: "",
    title: "",
    contents: "",
  });

  const [나의함수] = useMutation(CREATE_BOARD);

  const onClickSubmit = async () => {
    const result = await 나의함수({
      variables: {
        ...inputs,
      },
    });
    console.log(result);
    alert(result.data.createBoard.message);
  };

  const onChangeInputs = (e) => {
    setInputs({
      ...inputs,
      [e.target.id]: e.target.value,
    });
  };

  return (
    <>
      작성자: <input id="writer" type="text" onChange={onChangeInputs} />
      <br />
      제목: <input id="title " type="text" onChange={onChangeInputs} />
      <br />
      내용: <input id="content" type="text" onChange={onChangeInputs} />
      <br />
      <button onClick={onClickSubmit}>GRAPHQL-API(동기) 요청하기</button>
    </>
  );
}
