import React from 'react';
import Layout from './Components/Layout.js';
import Profile from './Components/Profile.js';
import PostList from './Components/PostList.js';
import Post from './Components/Post.js';


function App() {
  return (
    <Layout>
      <Profile/>
      <PostList>
        <Post title="title" summary="summary" key="1"/>
        <Post title="title" summary="summary" key="2" summaryImg={require('./assets/react.png')}/>
        <Post title="title" summary="summary" key="3"/>
        <Post title="title" summary="summary" key="4"/>
      </PostList>
    </Layout>
  );
}

export default App;
