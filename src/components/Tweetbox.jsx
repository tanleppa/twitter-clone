import React, { useState } from 'react';
import './Tweetbox.css'
import { Avatar, Button } from '@mui/material'
import {collection, addDoc } from 'firebase/firestore'
import { db } from './firebase.js'

const Tweetbox = ({lengthOfPosts}) => {
    const [tweetMessage, setTweetMessage] = useState("")
    const [tweetImg, setTweetImg] = useState("")

    async function sendTweet(e) {
        let current = new Date()
        const date = current.toLocaleDateString()
        const time = current.toLocaleTimeString().split(".").slice(0,2).join(":").padStart(5, "0")
        const dateAndTime = date + " " + time

        e.preventDefault()
        const post = {
            displayName:"User",
            username:"ePortfolio",
            verified:true,
            text:tweetMessage,
            avatar:"",
            image:tweetImg,
            time:dateAndTime,
            order:lengthOfPosts + 1
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
