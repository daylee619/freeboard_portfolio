import { ChangeEvent } from "react";

export interface BoardCommentWriteUIProps {
  onChangeWriter: (e: ChangeEvent<HTMLInputElement>) => void;
  onChangePassword: (e: ChangeEvent<HTMLInputElement>) => void;
  onChangeContents: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  contents: string;
  onClickWrite: () => void;
}
