import { useState } from 'react';
import Post from './Post';
import NewPost from './NewPost';
import Modal from './Modal';
import classes from './PostList.module.css'
import { CgEnter } from 'react-icons/cg';



function PostList({postIsVisible, onStopPosting,}) {
    const [post, setPost] = useState([]);

    function addPostHandler(postData) {
        fetch('http://localhost:8080/posts', {
            method: 'POST',
            body: JSON.stringify(postData),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        setPost( (existingPosts) => [postData, ...existingPosts]);
    }
    return (
        <>
            {postIsVisible ? (
            <Modal onClose = {onStopPosting}>
                <NewPost
                    onCancel = {onStopPosting}
                    onAddPost = {addPostHandler}
                >
                </NewPost>
            </Modal>
            ) : false}
            {post.length > 0 && (
            <ul className={classes.posts}>
                {post.map((post) => <Post key={post.body} author={post.author} body={post.body}></Post>)}
            </ul>
            )}
            {post.length === 0 && (
                <div style={{textAlign: 'center', color: 'white'}}>
                    <h2>There are no Post yet.</h2>
                    <p>Start adding some!</p>
                </div>
            )}
        </>
    );
}

export default PostList;