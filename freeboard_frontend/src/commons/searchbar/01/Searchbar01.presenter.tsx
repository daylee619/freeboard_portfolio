import { ISearchbar01UIProps } from "./Searchbar01.types";
import {
  FireFilledIcon,
  Searchbar,
  SearchbarInput,
} from "./Searchbar01.styles";

export default function Searchbar01UI(props: ISearchbar01UIProps) {
  return (
    <Searchbar>
      <FireFilledIcon />
      <SearchbarInput
        type="text"
        onChange={props.onChangeSearchbar}
        placeholder="검색어를 입력해주세요"
      />
    </Searchbar>
  );
}
