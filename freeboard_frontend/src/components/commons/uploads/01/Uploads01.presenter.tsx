import {
  UploadButton,
  UploadFileHidden,
  UploadImage,
} from "./Uploads01.styles";
import { IUpload01UIProps } from "./Uploads01.types";
export default function Upload01UI(props: IUpload01UIProps) {
  return (
    <>
      {props.fileUrl ? (
        <UploadImage
          src={`https://storage.googleapis.com/${props.fileUrl}`}
          onClick={props.onClickUpload}
        />
      ) : (
        <UploadButton onClick={props.onClickUpload}>
          <>+</>
          <>upload</>
        </UploadButton>
      )}
      <UploadFileHidden
        type="file"
        ref={props.fileRef}
        onChange={props.onChangeFile}
      />
    </>
  );
}
