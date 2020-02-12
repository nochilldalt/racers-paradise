import * as React from 'react'
import {useState, useEffect} from 'react'
import { IPosts } from '../Utils/interfaces'
import { json } from '../Utils/api-services'
import PostCard from '../components/PostCard'

import { RouteComponentProps } from 'react-router';

const Details: React.FC<DetailsProps> = (props) => {

    const [post, setPost] = useState<IPosts>({
        id: 0,
        user_id: 0,
        title: 'string',
        first_name:'string',
        image_url: 'string',
        created_at: new Date
    })

    useEffect(() => {
        (async () => {
            try {
                let post = await json(`/api/posts/${props.match.params.id}`)
                setPost(post)
            } catch (error) {
                console.log(error)
            }
        })()
    }, [])

    return(
        <>
       <PostCard key={`postcard-${post.id}`} post={post}/>
        </>
    )
}

interface DetailsProps extends RouteComponentProps <{ id:string }> {}

export default Details