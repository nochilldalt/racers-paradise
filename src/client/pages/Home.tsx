import * as React from 'react'
import {useState, useEffect} from 'react'
import { IPosts } from '../Utils/interfaces'
import { json } from '../Utils/api-services'
import PostCard from '../components/PostCard'

const Home: React.FC<HomeProps> = () => {

    const [post, setPosts] = useState<IPosts[]>([])

    useEffect(() => {
        (async () => {
            try {
                let posts = await json('/api/posts')
                setPosts(posts)
            } catch (error) {
                console.log(error)
            }
        })()
    }, [])

    return(
        <div>
        {post.map(post =>{
            return(
               <PostCard key={`postcard-${post.id}`} post={post}/>
            )
        })}
        </div>
    )
}

interface HomeProps {}

export default Home