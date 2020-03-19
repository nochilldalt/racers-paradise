import * as React from 'react'
import { IPosts } from '../Utils/interfaces';
import { Link, useHistory} from 'react-router-dom';
import { FaHeart } from "react-icons/fa";


const Template: React.FC<TemplateProps> = (props) => {

    const history = useHistory()
    const test = () => {
        history.push(`/details/${props.post.id}`)
    }

    return (
        <>
            <section className="row justify-content-center align iteams center" >
                <article className="col-md-8" >
                    <div onClick={test} className="card shadow m-1 p-1">
                        <div className="card-body">
                            <h2>{props.post.first_name}</h2>
                            <br/>
                            <img src={props.post.image_url} alt={props.post.title} />
                            <br/>
                            <br/>
                            <h5 className="col-16" > <FaHeart  /> likes 69</h5>
                            <br/>
                            <h4>{props.post.title}</h4>
                            <br/>
                            <p>69 Comments</p>
                        </div>
                    </div>
                </article>
            </section>
        </>
    )
}

interface TemplateProps {
    post: IPosts
}

export default Template