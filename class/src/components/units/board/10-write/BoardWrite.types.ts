import { ChangeEvent } from "react";
import { IQuery } from "../../../../commons/types/generated/types";

export interface IBoardWriteProps {
  isEdit: boolean;
  data?: Pick<IQuery, "fetchBoard">;
}

export interface IBoardWriteUIProps {
  onclicksubmit: () => void;
  onchangewriter: (e: ChangeEvent<HTMLInputElement>) => void;
  onchangetitle: (e: ChangeEvent<HTMLInputElement>) => void;
  onchangecontents: (e: ChangeEvent<HTMLInputElement>) => void;
  onClickUpdate: () => void;
  mycolor: boolean;
  isEdit: boolean;
  data: Pick<IQuery, "fetchBoard">;
}

export interface IMyvariables {
  number: number;
  writer?: string;
  title?: string;
  contents?: string;
}
