export type Robot = {
  id: string;
  name: string;
  email: string;
}

export type Action = {
  type: string;
  payload?: Robot[] | unknown;
}

export interface IState {
  searchField?: string;
  robots?: Array<Robot>;
  isPending?: boolean;
  error?: string;
}