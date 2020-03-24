import * as React from 'react'
import { useState, useEffect } from 'react';
import { IPosts } from '../Utils/interfaces';
import { json, User } from '../Utils/api-services';
import { RouteComponentProps } from 'react-router';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const Edit: React.FC<EditProps> = (props) => {

    const [editPost, setEditPost] = useState<IPosts[]>([])
    const [title, setTitle] = useState<string>('')
    const [image_url, setimage_url] = useState<string>('')

    useEffect(() => {
        (async () => {
            try {
                let editPosts = await json(`/api/posts/${props.match.params.id}`)
                if (editPosts.userid !== User.userid) {
                    props.history.push('/history')
                } else {
                setEditPost(editPost)   
                setTitle(editPosts.title)
                setimage_url(editPosts.image_url)                
                }
            } catch (error) {
                console.log(error)
            }
        })()
    },[])

    const editPosts = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        try {
            let r = await json(`/api/posts/${props.match.params.id}`, 'PUT',{
                title, 
                image_url
            })
            props.history.push(`/details/${props.match.params.id}`)
        } catch (error) {
            console.log(error)
        }
    }

    const destoryPost = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        try {
            let r = await json(`/api/posts/${props.match.params.id}`, "DELETE")
            props.history.push('/')
        } catch (error) {
            console.log(error)
        }
    }

    return(
        <>
        <Card className="shadow m-2 p-1" >
        <Card.Body>
        <Form>
        <h4>New Post</h4>
        <br/>
        <Form.Control placeholder="Title" value={title} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setTitle(e.target.value)}/>
        <Form.Control placeholder="Title" value={image_url} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setimage_url(e.target.value)}/>
        <Button onClick={editPosts} variant="secondary" block className="mx-auto w-50 " >Edit Post</Button>
        <Button onClick={destoryPost} variant="secondary" block className="mx-auto w-50 " >Delete Post</Button>
        </Form>
        </Card.Body>
        </Card>
        </>
    )
}

interface EditProps extends RouteComponentProps <{ id: string }> {}

export default Edit