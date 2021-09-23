export enum AuthType {
    LOGIN = "LOGIN",
    LOGOUT = "LOGOUT",
    IN_PROGRESS = "IN_PROGRESS",
}

interface LoginActionType {
    type: AuthType.LOGIN;
    payload: {
        login: string;
        name: string;
        token: string;
    };
}

interface LogoutActionType {
    type: AuthType.LOGOUT;
    payload: boolean;
}

interface StateActionType {
    type: AuthType.IN_PROGRESS;
    payload: boolean;
}

export interface ActionState {
    login: string;
    token: string;
    name: string;
    in_progress: boolean;
}
export type ActionTypes = LoginActionType | LogoutActionType | StateActionType;
