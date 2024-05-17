import { useState } from 'react';
import Post from './Post';
import NewPost from './NewPost';
import Modal from './Modal';
import classes from './PostList.module.css'



function PostList() {
    const [modalIsVisible, setModalIsVisible] = useState(true)
    const [enterBody, setEnterBody] = useState('');
    const [enterAuthor, setEnterAuthor] = useState('');

    function hideModalHandler() {
        setModalIsVisible(false);
    }

    function bodyChangeHandler(event) {
        setEnterBody(event.target.value);
    }

    function authorChangeHandler(event) {
        setEnterAuthor(event.target.value);
    }

    return (
        <>
            {modalIsVisible ? (
            <Modal onClose = {hideModalHandler}>
                <NewPost
                    onBodyChange={bodyChangeHandler}
                    onAuthorChange={authorChangeHandler}>
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