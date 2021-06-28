export interface User {
    name: string;
    id: string;
}

export interface UserState {
    username: string;
    error: boolean;
    lastLogin: Date;
}