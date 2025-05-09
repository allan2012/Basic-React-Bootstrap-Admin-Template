import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import {fetchPosts } from "../redux/postSlice";
const Redux = () => {
  const {posts, status} = useSelector(state => state.post);
  const dispatch = useDispatch();

  let content;
  if (status === 'pending') {
    content = '<p>Loading...</p>';
  }
  if (status === 'succeeded') {
    content = posts.map(post => <p key={post.id}>{post.title}</p>);
  }

  return (<div className="p-4">

    {content}

    <br />
    <button className={`btn btn-success`} onClick={() => dispatch(fetchPosts())}>Set Posts</button>
  </div>)
};

export default Redux