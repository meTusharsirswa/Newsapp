import React from 'react'

const  NewsItem =(props)=>  {
  
    let {title,description,imageUrl,newsUrl,author,date,source}= props;
    return (
      <div className='my-3'>
      <div className="card">
        <div style={{display:'flex',justifyContent:'flex-end',position:'absolute',right:'0'}}>
      <span className=" badge rounded-pill bg-danger">{source}
    </span>
    </div>
        <img src={!imageUrl?"https://static-koimoi.akamaized.net/wp-content/new-galleries/2022/10/box-office-kantara-hindi-continues-to-stay-around-the-2-crores-mark-diwali-updates-0001.jpg":imageUrl} className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title">{title} </h5>
          <p className="card-text">{description}</p>
          <p className="card-text"><small className="text-muted">{!author?"Unknown":author}On {new Date(date).toGMTString()}</small></p>
          <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-success">Read More</a>
        </div>
      </div>
      </div>
    )
  }


export default NewsItem
