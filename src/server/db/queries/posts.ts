import { Query } from '../index'
import { TPosts } from '../tables';

const all = () => Query<TPosts>("SELECT *, users.first_name FROM posts JOIN users ON users.id=blogs.userid") 

const one = (id:number) => Query<TPosts>("SELECT posts.*, users.first_names FROM posts JOIN users ON users.id=posts.userid",[id])

const post = (user_id:number, title:string, image_url:string) => Query<TPosts>("INSERT INTO posts (user_id, title, image_url) VALUE (?)",[[user_id, title, image_url]])

const edit = (title:string, image_url:string, id:number) => Query<TPosts>("UPDATE posts SET title=? image_url=? WHERE id=?",[title, image_url, id])

const destroy = (id:number) => Query<TPosts>("DELETE FROM posts WHERE id=?",[id])

export default {
    all,
    one,
    post,
    edit,
    destroy
}