import {User} from "./user";

export type Props = {
    blockUser(id: number): Promise<User>;
} & User;