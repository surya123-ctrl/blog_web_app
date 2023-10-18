import React from 'react'

const Post = ({ id, content, username, date, topic, image_url }) => {
    return (
        <div className='post-container'>
            <div className='image-section'>
                <img src={image_url} alt='ima' className='img' />
            </div>
            <div className='post-details-section'>
                <h1>{username}</h1>
                <time>{date}</time>
                <p>{topic}</p>
            </div>
        </div>
    )
}

export default Post
