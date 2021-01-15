import { useState } from "react";
import axios from "axios";
import { Button, Col, Form, Row } from "react-bootstrap";

const PostForm = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newPost = { title, author, message };
    try {
      await axios.post("/posts", newPost);
      setTitle("");
      setAuthor("");
      setMessage("");
      alert("Post submitted!");
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <Form className="post-form" onSubmit={handleSubmit}>
      <Row>
        <Col>
          <Form.Group>
            <Form.Label>Title:</Form.Label>
            <Form.Control
              type="text"
              name="title"
              id="title"
              value={title}
              onChange={(e) => {
                setTitle(e.target.value);
              }}
            />
          </Form.Group>
        </Col>
        <Col>
          <Form.Group>
            <Form.Label>Author:</Form.Label>
            <Form.Control
              type="text"
              name="author"
              id="author"
              value={author}
              onChange={(e) => {
                setAuthor(e.target.value);
              }}
            />
          </Form.Group>
        </Col>
      </Row>

      <Form.Group>
        <Form.Label>Message:</Form.Label>
        <Form.Control
          as="textarea"
          rows={4}
          name="message"
          id="message"
          value={message}
          onChange={(e) => {
            setMessage(e.target.value);
          }}
        />
      </Form.Group>

      <Button className="btn btn-sm" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default PostForm;
