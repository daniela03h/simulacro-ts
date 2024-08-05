export interface ILogin {
    email: string;
    password: string;
}

export interface ILoginReponse {
    message: string;
    data: {
        id: string;
        role: string;
        email: string;
        token: string;
    }
}

export interface ILoginErrorReponse {
    message: string[] | string;
    error: string;
    statusCode: number;
}
