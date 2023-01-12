import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 1200px;
  margin: 0 100px;
`;
export const Pencil = styled.img`
  width: 20px;
  margin-right: 14px;
`;
export const Text = styled.span`
  font-size: 18px;
`;
export const InputWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 40px;
  margin-bottom: 20px;
`;
export const Input = styled.input`
  width: 180px;
  height: 52px;
  padding-left: 18px;
  margin-right: 20px;
  border: 1px solid lightgray;
`;
export const ContentsWrapper = styled.div`
  margin-top: 20px;
  border: 1px solid lightgray;
`;
export const Contents = styled.textarea`
  width: 100%;
  height: 161px;
  padding: 20px;
  border: none;
  border-bottom: 1px solid lightgray;
`;

export const BottomWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
export const ContentsLength = styled.div`
  width: 100%;
  height: 52px;
  padding-left: 20px;
  color: gray;
`;
export const Button = styled.button`
  width: 91px;
  height: 52px;
  background-color: black;
  color: white;
  cursor: pointer;
`;
