import { useEffect, useState } from 'react';
import Post from './Post';
import NewPost from './NewPost';
import Modal from './Modal';
import classes from './PostList.module.css'
import { CgEnter } from 'react-icons/cg';



function PostList({ postIsVisible, onStopPosting, }) {
    const [posts, setPosts] = useState([]);
    const [isFetching, setIsFetching] = useState(false);

    useEffect(() => {
        async function fetchPosts() {
            setIsFetching(true);
            const response = await fetch('http://localhost:8080/posts')
            const resData = await response.json();
            setPosts(resData.posts);
            setIsFetching(false);
        }

        fetchPosts();
    }, []);

function addPostHandler(postData) {
    fetch('http://localhost:8080/posts', {
        method: 'POST',
        body: JSON.stringify(postData),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    setPost((existingPosts) => [postData, ...existingPosts]);
}
return (
    <>
        {postIsVisible ? (
            <Modal onClose={onStopPosting}>
                <NewPost
                    onCancel={onStopPosting}
                    onAddPost={addPostHandler}
                >
                </NewPost>
            </Modal>
        ) : false}
        {!isFetching && posts.length > 0 && (
            <ul className={classes.posts}>
                {posts.map((post) => <Post key={post.body} author={post.author} body={post.body}></Post>)}
            </ul>
        )}
        {!isFetching && posts.length === 0 && (
            <div style={{ textAlign: 'center', color: 'white' }}>
                <h2>There are no Post yet.</h2>
                <p>Start adding some!</p>
            </div>
        )}
        {isFetching && (
            <div style={{textAlign: 'center', color: 'white'}}>
                <p>Loading Posts...</p>
            </div>
        )}
    </>
);
}

export default PostList;