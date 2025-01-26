import React from 'react'

const Newsitem =(props)=>{

 
    let {title,description,imageurl,go,publishedAt,author,source} = props;
    return (
      <div>
        <div className="card">
        <span className="position-absolute  translate-middle badge rounded-pill bg-danger" style={{left:'79%',top:'10px',zIndex:1}}>
        {source}
  </span>
  <img src={imageurl} className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <p className="card-text">{description}</p>
    <a href={go} className="btn btn-dark" target='blank' rel='noopener noreferrer'>Preview</a>
    <p className="card-text"><small className="text-body-secondary">author {!author?'Unkown':author}on {new Date(publishedAt).toGMTString()}</small></p>

  </div>
</div>
      </div>
    )
  }


export default Newsitem