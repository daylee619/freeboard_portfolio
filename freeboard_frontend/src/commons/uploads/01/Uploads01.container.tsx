import { useMutation } from "@apollo/client";
import { Modal } from "antd";
import { ChangeEvent, useRef } from "react";
import Upload01UI from "./Uploads01.presenter";
import { UPLOAD_FILE } from "./Uploads01.queries";
import CheckValidationImg from "./Uploads01.validation";
import { IUploads01Props } from "./Uploads01.types";

export default function Upload01(props: IUploads01Props) {
  const fileRef = useRef<HTMLInputElement>(null);
  const [uploadFile] = useMutation(UPLOAD_FILE);

  const onClickUpload = () => {
    fileRef.current?.click();
  };
  const onChangeFile = async (e: ChangeEvent<HTMLInputElement>) => {
    const file = CheckValidationImg(e.target.files?.[0]);
    if (!file) return;

    try {
      const result = await uploadFile({ variables: { file } });
      props.onChangeFileUrls(result.data.uploadFile.url, props.index);
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message });
    }
  };
  return (
    <Upload01UI
      fileUrl={props.fileUrl}
      fileRef={fileRef}
      onClickUpload={onClickUpload}
      onChangeFile={onChangeFile}
    />
  );
}
