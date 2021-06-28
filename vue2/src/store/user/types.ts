export interface User {
    name: string;
    id: string;
}

export interface UserState {
    user?: User;
    error: boolean;
    lastLogin: Date;
}