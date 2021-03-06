import * as React from 'react'
import { useState, useEffect } from 'react';
import { json, User } from '../Utils/api-services';
import { RouteComponentProps } from 'react-router-dom';

const Compose: React.FC<ComposeProps> = (props) => {

    const [title, setTitle] = useState<string>('')
    const [image_url, setImage_url] = useState<string>('')

    const submitPost = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        try {
            let msg: any = await json('/api/posts', 'POST', {
                title,
                image_url,
                userid: User.userid
            })
            props.history.push(`/details/${msg.insertid}`)
        } catch (error) {
            console.log(error)
        }
    }

    return(
        <div className="card shadow m-2 p-1">
            <div className="card-body" >
                <form>
                    <h4>New Post</h4>
                    <br/>
                    <input className="form-control" placeholder="Title" value={title} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setTitle(e.target.value)} />
                    <br/>
                    <input className="form-control" placeholder="Title" value={title} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setTitle(e.target.value)} />
                    <br/>
                    <button className="btn btn-secondary mx-auto w-50 btn-block" onClick={submitPost} >Add Post</button>
                </form>
            </div>
        </div>
    )
}

interface ComposeProps extends RouteComponentProps {}

export default Compose