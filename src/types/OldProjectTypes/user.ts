export type User = {
    id: number;
    status: number;
} & UserCreate;

export type UserCreate = {
    name: string;
    email: string;
    role: string;
}