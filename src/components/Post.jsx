import React, { forwardRef, useState } from 'react';
import './Post.css'
import { Avatar } from '@mui/material'
import VerifiedIcon from '@mui/icons-material/Verified';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import RepeatIcon from '@mui/icons-material/Repeat';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import PublishIcon from '@mui/icons-material/Publish';
import FavoriteIcon from '@mui/icons-material/Favorite';

const Post = forwardRef(({
    displayName,
    username,
    verified,
    text,
    image,
    avatar}, ref) => {

    const [liked, setLiked] = useState(false)

    return (
        <div className='post' ref={ref}>
            <div className="post__avatar">
                <Avatar src={avatar}/>
            </div>
            <div className="post__body">
                <div className="post__header">
                    <div className="post__header--text">
                        <h3>{displayName} <span className='post__header--special'>{verified && <VerifiedIcon className='post__badge'/>} @{username}</span></h3>
                    </div>
                    <div className="post__header--desc">
                        <p>{text}</p>
                    </div>
                </div>
                <img src={image} alt="" />
                <div className="post__footer">
                    <ChatBubbleOutlineIcon fontSize='small'/>
                    <RepeatIcon fontSize='small'/>
                    <div className="post__footer--like">
                        {!liked ?
                        <FavoriteBorderIcon onClick={e => setLiked(true)} fontSize='small'/>
                        : <><FavoriteIcon className='red' onClick={e => setLiked(false)} fontSize='small'/>
                        <p>1</p></>}
                    </div>
                    <PublishIcon fontSize='small'/>
                </div>
            </div>
        </div>
    );
})

export default Post;
