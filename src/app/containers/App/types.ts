/* --- STATE --- */
export interface UserInfoState {
  id: string;
  name: string;
}

export interface AppState {
  userFetching: boolean;
  userLogined: boolean;
  userInfo: UserInfoState;
  messageCount: number;
}

export type ContainerState = AppState;
