// import { gql, useMutation } from "@apollo/client";
// import { useState } from "react";
// const CREATE_BOARD = gql`
//   mutation createBoard($writer: String, $title: String, $contents: String) {
//     createBoard(writer: $writer, title: $title, contents: $contents) {
//       _id
//       number
//       message
//     }
//   }
// `;

// export default function aaa() {
//   const [writer, setWriter] = useState("");
//   const [title, setTitle] = useState("");
//   const [contents, setContents] = useState("");
//   const [createBoard] = useMutation(CREATE_BOARD);
//   const onClickProfile = async () => {
//     const result = await createBoard({
//       variables: {
//         writer: writer,
//         title: title,
//         contents: contents,
//       },
//     });
//     console.log(result);
//     console.log(result.data.createBoard);
//   };
//   const onChangeWriter = (e) => {
//     setWriter(e.target.value);
//   };
//   const onChangeTitle = (e) => {
//     setTitle(e.target.value);
//   };
//   const onChangeContents = (e) => {
//     setContents(e.target.value);
//   };
//   return (
//     <div>
//       작성자: <input type="text" onChange={onChangeWriter} />
//       제목: <input type="text" onChange={onChangeTitle} />
//       내용: <input type="text" onChange={onChangeContents} />
//       <button onClick={onClickProfile}>GRAPHQL-API 요청하기</button>
//     </div>
//   );
// }
import { useState } from "react";
import { gql, useMutation } from "@apollo/client";
const CREATE_PRODUCT = gql`
  mutation createProduct(
    $seller: String
    $createProductInput: CreateProductInput!
  ) {
    createProduct(seller: $seller, createProductInput: $createProductInput) {
      _id
      number
      message
    }
  }
`;

export default function bbb() {
  const [seller, setSeller] = useState("");
  const [createProductInput, setCreateProductInput] = useState("");
  const [createProduct] = useMutation(CREATE_PRODUCT);
  const onChangeSeller = (e) => {
    setSeller(e.target.value);
  };
  const onChangeProduct = (e) => {
    setCreateProductInput(e.target.value);
  };

  const onClickSubmit = async () => {
    const result = await createProduct({
      variables: {
        seller,
        createProductInput: {
          name: "맥북",
          price: 1500000,
          detail: "맥북에어",
        },
      },
    });
    console.log(result);
  };
  return (
    <>
      셀러 : <input type="text" onChange={onChangeSeller} />
      상품 : <input type="text" onChange={onChangeProduct} />
      <button onClick={onClickSubmit}>등록하기</button>
    </>
  );
}
