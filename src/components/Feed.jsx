import React, { useState } from 'react';
import { useEffect } from 'react';
import './Feed.css'
import Post from './Post';
import Tweetbox from './Tweetbox';
import { db } from './firebase.js'
import {collection, getDocs, onSnapshot } from 'firebase/firestore'
import FlipMove from "react-flip-move"

const Feed = () => {
    const [posts, setPosts]= useState([])

    async function getAllPosts() {
        const data = await getDocs(collection(db, "posts"))
        const posts = data.docs.map((doc) => ({...doc.data(), id: doc.id}))
        setPosts(posts)
    }

    useEffect(() => {
        return onSnapshot(collection(db, "posts"), (snapshot) => {
            (setPosts(snapshot.docs.map(doc => {
                const data = doc.data()
                return {
                    ...data,
                    key: doc.id
                }
            })))
        })
    }, [])

    return (
        <div className='feed'>
            <div className="feed__header">
                <h2>Twitter Clone</h2>
            </div>

            <Tweetbox />

            <FlipMove>
            {posts.map((post) => (
                <Post
                key={post.key}
                displayName={post.displayName}
                username={post.username}
                verified={post.verified}
                text={post.text}
                avatar={post.avatar}
                image={post.image}/>
            ))}
            </FlipMove>
        </div>
    );
}

export default Feed;
