import { useQuery, gql, useMutation } from "@apollo/client";
import styled from "@emotion/styled";
export const FETCH_PRODUCTS = gql`
  query {
    fetchProducts(page: 10) {
      _id
      seller
      name
      detail
      price
      createdAt
    }
  }
`;
export const DELETE_PRODUCT = gql`
  mutation deleteProduct($productId: ID!) {
    deleteProduct(productId: $productId) {
      _id
      number
      message
    }
  }
`;
export default function ProductList() {
  const { data } = useQuery(FETCH_PRODUCTS);
  console.log(data);

  const [deleteProduct] = useMutation(DELETE_PRODUCT);

  const onClickButton = async (e) => {
    // const myPassword = prompt("비밀번호를 입력하세요");
    try {
      await deleteProduct({
        variables: {
          productId: e.currentTarget.id,
        },
        refetchQueries: [{ query: FETCH_PRODUCTS }],
      });
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <>
      <>
        {data?.fetchProducts.map((el) => (
          <Wrapper>
            <Row key={el._id}>
              <input type="checkbox" />
            </Row>
            <Row>{el.seller}</Row>
            <Row>{el.name}</Row>
            <Row>{el.detail}</Row>
            <Row>{el.price}</Row>
            <Button id={el._id} onClick={onClickButton}>
              삭제하기
            </Button>
          </Wrapper>
        ))}
      </>
    </>
  );
}

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin: 10px;
  border: 1px solid gray;
`;
export const Row = styled.div`
  margin: 10px;
`;
export const Button = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;
