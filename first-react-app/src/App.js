import "./App.css";

import CompC from "./components/CompC";
import { PostForm } from "./components/PostForm";
import PostFormAxios from "./components/PostFormAxios";
import { PostList } from "./components/PostList";
import PostListAxios from "./components/PostListAxios";
import Sample from "./components/Sample";
import { UserProvider } from "./components/userContext";

function App() {
  return (
    <div className="App">
      <PostFormAxios />
    </div>
  );
}

export default App;
