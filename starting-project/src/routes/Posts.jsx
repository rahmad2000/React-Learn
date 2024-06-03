import { Outlet } from "react-router-dom";
import PostList from "../components/PostList";
function Posts() {
  return <>
  <Outlet></Outlet>
    <main>
      <PostList></PostList>
    </main>
  </>
}



export default Posts;
