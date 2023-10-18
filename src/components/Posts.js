import React from 'react'
import data from './data.json'
import Post from './Post'
const Posts = () => {
    return (
        <div className='posts-container'>
            {
                data.map((item) => {
                    return <Post key={item.id} content={item.content} username={item.username} date={item.date} topic={item.topic} image_url={item.image_url} />
                    // console.log(item.user_name)
                })
            }
        </div>
    )
}

export default Posts
