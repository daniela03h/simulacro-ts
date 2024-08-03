export interface IRegisterUser {
    name: string,
    lastName: string,
    email: string,
    password: string
}

export interface IRegisterUserReponse {
    message: string;
    data: {
        id: string;
        role: string;
        name: string;
        lastName: string;
        email: string;
        updatedBy: string | null;
        deletedBy: string | null;
        createdAt: Date;
        updatedAt: Date;
        deletedAt: Date | null;
    };
}

export interface IRegisterErrorResponse {
    message: string[],
    error: string,
    statusCode: number
}