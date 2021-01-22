import { CalendarViewDay, EventNote, Subscriptions } from '@material-ui/icons'
import CreateIcon from '@material-ui/icons/Create'
import Image from '@material-ui/icons/Image'
import React, { useEffect, useState } from 'react'
import './Feed.css'
import { db } from './firebase'
import InputOption from './InputOption'
import Post from './Post'
import firebase from 'firebase'

function Feed() {
  const [input, setInput] = useState("");
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection("posts").onSnapshot((snapshot) =>
      setPosts(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      )
    );
  }, [])

  const sendPost = e => {
    e.preventDefault();

    db.collection('posts').add({
      name: 'Hong Quan',
      description: 'This is a test',
      message: input,
      photoUrl: '',
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
  }


  return (
    <div className="feed">
      <div className="feed__inputContainer">
        <div className="feed__input">
          <CreateIcon />
          <form>
            <input value={input} onChange={e => setInput.target.value} type="text" />
            <button onClick={sendPost} type="submit">Send</button>
          </form>
        </div>
        <div className="feed__inputOptions">
          <InputOption Icon={Image} title='Photo' color="#70B5F9" />
          <InputOption Icon={Subscriptions} title='Video' color="#E7A33E" />
          <InputOption Icon={EventNote} title='Event' color="#C0CBCD" />
          <InputOption Icon={CalendarViewDay} title='Write Article' color="#7FC15E" />
        </div>
      </div>

      {/* Posts */}
      {posts.map(({id, data: {name, description, message, photoUrl}}) => {
        <Post
          key={id}
          name={name}
          description={description}
          message={message}
          photoUrl={photoUrl}
        />;
      })}
      <Post name='Quan Tran' description='Hello world' message='How to learn ReactJS?' />
    </div>
  );
}

export default Feed
