export interface user {
    userId: number;
    nameFirst: string;
    nameLast: string;
    email: string;
    password: string;
}

export interface token {
    userId: number;
    sessionId: string;
}

export interface dataStore {
    users: user[];
    sessions: token[];
}

export interface authUserId {
    authUserId: number;
}