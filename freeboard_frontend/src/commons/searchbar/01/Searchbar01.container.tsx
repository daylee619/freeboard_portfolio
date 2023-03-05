import _ from "lodash";
import Searchbar01UI from "./Searchbar01.presenter";
import { ISearchbar01Props } from "./Searchbar01.types";
export default function Searchbar01(props: ISearchbar01Props) {
  const getDebounce = _.debounce((value: string) => {
    void props.refetch({ search: value, page: 1 });
    void props.refetchBoardsCount({ search: value });
    props.onChangeKeyword(value);
  }, 1000);

  const onChangeSearchbar = (e) => {
    getDebounce(e.target.value);
  };
  return <Searchbar01UI onChangeSearchbar={onChangeSearchbar} />;
}
