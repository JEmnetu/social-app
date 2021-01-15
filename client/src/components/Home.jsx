import { useEffect, useState } from "react";
import axios from "axios";
import { Col, Container, Row } from "react-bootstrap";
import Posts from "./Posts/Posts";

const Home = () => {
  const [currentPosts, setCurrentPosts] = useState(undefined);

  useEffect(() => {
    const getPosts = async () => {
      try {
        const res = await axios.get("/posts");
        const posts = res.data;
        setCurrentPosts(posts);
      } catch (error) {
        console.log(error.message);
      }
    };

    getPosts();
  }, []);

  return (
    <Container>
      {!currentPosts ? null : <Posts currentPosts={currentPosts} />}
    </Container>
  );
};

export default Home;
