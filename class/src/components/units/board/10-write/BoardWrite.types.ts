import { ChangeEvent } from "react";

export interface IBoardWriteProps {
  isEdit: boolean;
  data?: any;
}

export interface IBoardWriteUIProps {
  onclicksubmit: () => void;
  onchangewriter: (e: ChangeEvent<HTMLInputElement>) => void;
  onchangetitle: (e: ChangeEvent<HTMLInputElement>) => void;
  onchangecontents: (e: ChangeEvent<HTMLInputElement>) => void;
  onClickUpdate: () => void;
  mycolor: boolean;
  isEdit: boolean;
  data: any;
}

export interface IMyvariables {
  number: number;
  writer?: string;
  title?: string;
  contents?: string;
}
