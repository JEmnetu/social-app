import "./App.css";
import Home from "./components/Home";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import PostForm from "./components/Posts/PostForm";

function App() {
  return (
    <div className="container">
      <Router>
        <Link to="/">
          {" "}
          <h2 className="text-center">Home</h2>
        </Link>
        <Link to="/posts">
          {" "}
          <h2 className="text-center">Post</h2>
        </Link>
        <Route path="/" exact component={Home} />
        <Route path="/posts" exact component={PostForm} />
      </Router>
    </div>
  );
}

export default App;
