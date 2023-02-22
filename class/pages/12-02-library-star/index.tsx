import styled from "@emotion/styled";
import { Rate } from "antd";
import { useState } from "react";

const MyStar = styled(Rate)`
  font-size: 30px;
  color: yellow;
`;
export default function LibraryIconPage() {
  const [value, setValue] = useState(3);
  const qqq = (value: number) => {
    setValue(value);
  };
  return <MyStar onChange={qqq} />;
}
