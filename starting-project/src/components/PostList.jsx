import { useState } from 'react';
import Post from './Post';
import NewPost from './NewPost';
import Modal from './Modal';
import classes from './PostList.module.css'



function PostList({postIsVisible, onStopPosting,}) {
    const [post, setPost] = useState([]);

    function addPostHandler(postData) {
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
            <ul className={classes.posts}>
                <Post author='Jon' body='I Have a Family!'></Post>
            </ul>
        </>
    );
}

export default PostList;