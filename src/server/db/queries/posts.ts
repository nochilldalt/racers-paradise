import { Query } from '../index'
import { TPosts, ObjResponse } from '../tables';

const all = () => Query<TPosts[]>("SELECT posts.*, users.first_name FROM posts JOIN users ON users.id=posts.user_id") 

const one = (id:number) => Query<TPosts[]>("SELECT posts.*, users.first_name FROM posts JOIN users ON users.id=posts.user_id WHERE posts.id=?",[id])

const post = (user_id:number, title:string, image_url:string) => Query<ObjResponse>("INSERT INTO posts (user_id, title, image_url) VALUE (?)",[[user_id, title, image_url]])

const edit = (title:string, image_url:string, id:number) => Query<ObjResponse>("UPDATE posts SET title=?, image_url=? WHERE id=?",[title, image_url, id])

const destroy = (id:number) => Query<ObjResponse>("DELETE FROM posts WHERE id=?",[id])

export default {
    all,
    one,
    post,
    edit,
    destroy
}