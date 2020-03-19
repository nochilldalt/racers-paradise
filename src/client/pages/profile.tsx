import * as React from 'react'
import { useState, useEffect } from 'react';
import { IPosts, IUsers } from '../Utils/interfaces';
import { User, json } from '../Utils/api-services';
import { RouteComponentProps } from 'react-router';
import { Link } from 'react-router-dom';

const Profile: React.FC<ProfileProps> = (props) => {

    const [posts, setPosts] = useState<IPosts[]>([])

    const [user, setUser] = useState<IUsers>({
        id: 0,
        first_name: "string",
        last_name: "string",
        username: "string",
        email: "string",
        password: "string",
        role: "string",
        avatar_url: "string",
        created_at: new Date()
    })

    useEffect(() => {
        if (User && User.role === 'guest') {
            (async () => {
                try {
                    let info = await json('/api/user/profile')
                    // let posts = await json('/api/posts/user')
                    setUser(info)
                    // setPosts(posts)
                } catch (error) {
                    console.log(error)
                }
            })()
        } else {
            props.history.push('login')
        }
    }, [])

    return (
        <div>
            <div className="card shadow m-1 p-1">
                <div className="card-body">
                    <div className="card-header bg-primary text-white text-center">
                        <h1>Welcome, {user.username}</h1>
                    </div>
                    <br />
                    <Link className="btn btn-success mx-auto btn-block" to={`/compose`}>New Post</Link>
                    {/* {posts.map((post) => {
                        return (
                            <>
                                <section className="row justify-content-center align iteams center" >
                                    <article className="col-md-8" >
                                        <div className="card shadow m-1 p-1">
                                            <div className="card-body text-center">
                                                <img src={post.image_url} alt={post.title} />
                                                <br />
                                                <br />
                                                <h4>{post.first_name}</h4>
                                                <h6>{post.title}</h6>
                                            </div>
                                        </div>
                                    </article>
                                </section>
                            </>
                        )
                    })} */}
                </div>
            </div>
        </div>
    )
}

interface ProfileProps extends RouteComponentProps { }

export default Profile