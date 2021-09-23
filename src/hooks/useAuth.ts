interface LoginData {
    login: string;
    name: string;
    token: string;
}

type UseAuthType = {
    login(): Promise<LoginData>;
};

function getData(): Promise<LoginData> {
    return new Promise<LoginData>((resolve) => {
        setTimeout(
            () => resolve({ login: "testLogin@mail.ru", name: "Пупкин Иван Иванович", token: "testToken" }),
            2000
        );
    });
}
export const useAuth = (): UseAuthType => {
    const login = async () => {
        const result = await getData();
        return result;
    };
    return {
        login,
    };
};
