import * as React from 'react'
import { IPosts } from '../Utils/interfaces';
import { Link } from 'react-router-dom';

const Template: React.FC<TemplateProps> = (props) => {
    return (
        <>
            <section className="row justify-content-center align iteams center" >
                <article className="col-md-8" >
                    <div className="card shadow m-1 p-1">
                        <div className="card-body">
                            <h2>{props.post.first_name}</h2>
                            <h4>{props.post.title}</h4>
                            <img src={props.post.image_url} alt={props.post.title} />
                            
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