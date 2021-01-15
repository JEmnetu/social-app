import { Row } from "react-bootstrap";
import Post from "./Post";
const Posts = ({ currentPosts }) => {
  return (
    <>
      <Row className="d-flex text-break">
        {currentPosts.map((post, i) => (
          <Post post={post} index={i} />
        ))}
      </Row>
    </>
  );
};

export default Posts;
