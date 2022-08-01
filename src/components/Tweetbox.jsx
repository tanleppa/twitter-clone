import React, { useState } from 'react';
import './Tweetbox.css'
import { Avatar, Button } from '@mui/material'
import {collection, addDoc } from 'firebase/firestore'
import { db } from './firebase.js'

const Tweetbox = () => {
    const [tweetMessage, setTweetMessage] = useState("")
    const [tweetImg, setTweetImg] = useState("")

    async function sendTweet(e) {
        e.preventDefault()
        const post = {
            displayName:"User",
            username:"ePortfolio",
            verified:true,
            text:tweetMessage,
            avatar:"",
            image:tweetImg,
        }
        await addDoc(collection(db, "posts"), post).then(res => {
            setTweetImg("")
            setTweetMessage("")
        })
    }

    return (
        <div className='tweet__box'>
            <form>
                <div className="tweet__box--input">
                    <Avatar/>
                    <input value={tweetMessage} placeholder="What's happening?" type="text" onChange={e => setTweetMessage(e.target.value)}/>
                </div>
                <input value={tweetImg} onChange={e => setTweetImg(e.target.value)} className='tweet__box--inputImg' placeholder='Enter image URL' type="text" />
                <Button onClick={e => tweetMessage !== "" ? sendTweet(e) : e.preventDefault()} className='tweet__box--Button'>Tweet</Button>
            </form>
        </div>
    );
}

export default Tweetbox;
