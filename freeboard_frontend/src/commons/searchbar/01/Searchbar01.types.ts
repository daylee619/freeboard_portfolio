import { ApolloQueryResult } from "@apollo/client";
import { ChangeEvent } from "react";

import {
  IQuery,
  IQueryFetchBoardsArgs,
  IQueryFetchBoardsCountArgs,
} from "../../types/generated/types";

export interface ISearchbar01Props {
  refetch: (
    variables: Partial<IQueryFetchBoardsArgs>
  ) => Promise<ApolloQueryResult<Pick<IQuery, "fetchBoards">>>;

  refetchBoardsCount: (
    variables: Partial<IQueryFetchBoardsCountArgs>
  ) => Promise<ApolloQueryResult<Pick<IQuery, "fetchBoardsCount">>>;
  onChangeKeyword: (value: string) => void;
}

export interface ISearchbar01UIProps {
  onChangeSearchbar: (e: ChangeEvent<HTMLInputElement>) => void;
}
