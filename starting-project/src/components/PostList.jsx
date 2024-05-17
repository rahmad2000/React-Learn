import Post from './Post';
import NewPost from './NewPost';
import Modal from './Modal';
import classes from './PostList.module.css'



function PostList({postIsVisible, onStopPosting,}) {
    return (
        <>
            {postIsVisible ? (
            <Modal onClose = {onStopPosting}>
                <NewPost
                    onCancel = {onStopPosting}
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