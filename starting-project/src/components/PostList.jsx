import { useState } from 'react';
import Post from './Post';
import NewPost from './NewPost';
import Modal from './Modal';
import classes from './PostList.module.css'



function PostList({postIsVisible, onStopPosting,}) {
    const [enterBody, setEnterBody] = useState('');
    const [enterAuthor, setEnterAuthor] = useState('');

    function bodyChangeHandler(event) {
        setEnterBody(event.target.value);
    }

    function authorChangeHandler(event) {
        setEnterAuthor(event.target.value);
    }

    return (
        <>
            {postIsVisible ? (
            <Modal onClose = {onStopPosting}>
                <NewPost
                    onBodyChange={bodyChangeHandler}
                    onAuthorChange={authorChangeHandler}
                    onCancel = {onStopPosting}
                >
                </NewPost>
            </Modal>
            ) : false}
            <ul className={classes.posts}>
                <Post author={enterAuthor} body={enterBody}></Post>
                <Post author='Jon' body='I Have a Family!'></Post>
            </ul>
        </>
    );
}

export default PostList;