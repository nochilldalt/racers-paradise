import { Query } from "../index"
import { TVehicles } from "../tables";

const all = () => Query<TVehicles>("SELECT vehicles.*, users.first_name FROM posts JOIN users ON users.id=vehicles.user_id")

const one = (id:number) => Query<TVehicles>("SELECT vehicles.*, users.first_name FROM vehicles JOIN users ON users.id=vehicles.user_id WHERE vehicles.id=?",[id])

const post = (make:string, model:string, year:number, trim:string, description:string, user_id:number) => Query<TVehicles>("INSERT INTO vehicles (make, model, year, trim, description, user_id) VALUE (?)",[[make, model, year, trim, description, user_id]])

const edit = (make:string, model:string, year:number, trim:string, description:string, id:number) => Query<TVehicles>("UPDATE vehicles SET make=?, model=?, year=?, trim=?, description=? WHERE id=?",[make, model, year, trim, description, id])

const destroy = (id:number) => Query<TVehicles>("DELETE FROOM vehicles WHERE id=?",[id])

export default{
    all,
    one,
    post,
    edit,
    destroy
}