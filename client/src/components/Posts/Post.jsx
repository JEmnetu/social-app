import { Col } from "react-bootstrap";

const Post = ({ post, i }) => {
  return (
    <>
      <Col md={8} className="mb-5 bg-warning mx-3 pt-1 pb-4 post-bloc" key={i}>
        <h5 className="mb-0">{post.title}</h5>
        <h6>@{post.author}</h6>
        <p className="text-wrap">{post.message}</p>
      </Col>
    </>
  );
};

export default Post;
