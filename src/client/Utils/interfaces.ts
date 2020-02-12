export interface IUsers {
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

export interface ITokens {
    id: number;
    user_id: number;
    val: string;
    uniq: string;
    created_at: Date;
}

export interface IClubs {
    id: number;
    name: string;
    description: string;
    created_at: Date;
}

export interface IComments {
    id: number;
    user_id: number;
    post_id: number;
    content: string;
    created_at: Date;
}

export interface IPostTags {
    id: number;
    post_id: number;
    tag_id: number;
}

export interface IPosts {
    id: number;
    user_id: number;
    title: string;
    first_name:string;
    image_url: string;
    created_at: Date;
}

export interface ITags {
    id: number;
    name: string;
    created_at: Date;
}

export interface IUserClubs {
    id: number;
    user_id: number;
    club_id: number;
}

export interface IVehicles {
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