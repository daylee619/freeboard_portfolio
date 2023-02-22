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
export default function aa() {
  const [seller, setSeller] = useState("");
  const [name, setName] = useState("");
  const [detail, setDetail] = useState("");
  const [price, setPrice] = useState("");
  const [createProduct] = useMutation(CREATE_PRODUCT);
  const onChangeSeller = (e) => {
    setSeller(e.target.value);
  };
  const onChangeName = (e) => {
    setName(e.target.value);
  };
  const onChangeDetail = (e) => {
    setDetail(e.target.value);
  };
  const onChangePrice = (e) => {
    setPrice(e.target.value);
  };
  const onClickSubmitProduct = async () => {
    try {
      const result = await createProduct({
        variables: {
          seller,
          createProductInput: { name, detail, price: Number(price) },
        },
      });
      console.log(result);
    } catch (error) {
      console.log(error);
      //   alert(error.message);
    }
  };
  return (
    <>
      판매자 : <input type="text" onChange={onChangeSeller} />
      <br />
      상품명 : <input type="text" onChange={onChangeName} />
      <br />
      상품내용 : <input type="text" onChange={onChangeDetail} />
      <br />
      상품가격 : <input type="text" onChange={onChangePrice} />
      <br />
      <button onClick={onClickSubmitProduct}>상품 등록 하기</button>
    </>
  );
}
