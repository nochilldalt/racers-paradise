import * as React from 'react'
import {useState, useEffect} from 'react'
import { IPosts } from '../Utils/interfaces'
import { json } from '../Utils/api-services'
import PostCard from '../components/PostCard'
import { FaBeer } from 'react-icons/fa';
import { RouteComponentProps } from 'react-router';

const Details: React.FC<DetailsProps> = (props) => {

    const [post, setPost] = useState<IPosts>({
        id: 0,
        user_id: 0,
        title: 'string',
        first_name:'string',
        image_url: 'string',
        created_at: new Date()
    })

    useEffect(() => {
        (async () => {
            let post = await json(`/api/posts/${props.match.params.id}`)
            setPost(post)
        })()
    }, [])

    return(
        <>
        <section className="row justify-content-center align-items-center" >
            <article className="col-md-8" >
                <div className="card shadow m-1 p-1">
                    <div className="card-body">
                        <h2>{post.first_name}</h2>
                        <h4>{post.title}</h4>
                        <img src={post.image_url} alt={post.title} />
                    </div>
                </div>
            </article>
        </section>
    </>
    )
}

interface DetailsProps extends RouteComponentProps <{ id:string }> {}

export default Details