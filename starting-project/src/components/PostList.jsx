import Post from './Post';
import classes from './PostList.module.css'

function PostList(){
    return (
        <ul className={classes.posts}>
            <Post author='Tyrion' body='I am kicked out of my Family.'></Post>
            <Post author='Jon' body='Family what a strange concept.'></Post>
        </ul>
    );
}

export default PostList;