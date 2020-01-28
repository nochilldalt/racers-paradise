export interface TUsers {
    id: number;
    first_name: string;
    last_name: string;
    username: string;
    email: string;
    password: string;
    role: string;
    avatar_url: string;
    created_at: Date;
}

export interface TTokens {
    id: number;
    user_id: number;
    val: string;
    uniq: string;
    created_at: Date;
}

export interface TClubs {
    id: number;
    name: string;
    description: string;
    created_at: Date;
}

export interface TComments {
    id: number;
    user_id: number;
    post_id: number;
    content: string;
    created_at: Date;
}

export interface TPostTags {
    id: number;
    post_id: number;
    tag_id: number;
}

export interface TPosts {
    id: number;
    user_id: number;
    title: string;
    image_url: string;
    created_at: Date;
}

export interface TTags {
    id: number;
    name: string;
    created_at: Date;
}

export interface TUserClubs {
    id: number;
    user_id: number;
    club_id: number;
}

export interface TVehicles {
    id: number;
    user_id: number;
    make: string;
    model: string;
    year: number;
    trim: string;
    description: string;
    created_at: Date;
}

export interface ObjResponse {
    insertId: number;
}