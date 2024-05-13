import Post from './Post';
import NewPost from './NewPost';
import classes from './PostList.module.css'

function PostList() {
    return (
        <>
            <NewPost></NewPost>
            <ul className={classes.posts}>
                <Post author='Tyrion' body='I am kicked out of my Family.'></Post>
                <Post author='Jon' body='Family what a strange concept.'></Post>
            </ul>
        </>
    );
}

export default PostList;