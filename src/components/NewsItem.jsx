import React from 'react'
function NewsItem(props) {

    let nodescp = "We are unable to find the description for the provided news. Please check back or visit the source for more info. Our Skyder News understands your concern and try best to fix the issue."


    return (
        <div className="card mt-4 mx-4 pt-2" style={{width: "24rem", background : "rgb(219, 219, 219)"}}>
            <img src={props.image ? props.image : "https://images.unsplash.com/photo-1578328819058-b69f3a3b0f6b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=667&q=80"} className="card-img-top" alt="..."  style={{height: "13rem"}} />
            <div className="card-body">
            <h5 className="card-title ">{props.title ? props.title : "Title not Available"}</h5>
            <p className="card-text">{props.desc ? props.desc : nodescp}</p>
            </div>
            <a href={props.url} target="_blank" rel="noreferrer" className="btn btn-dark mb-2">View News</a>
        </div>
    )
}

export default NewsItem;

