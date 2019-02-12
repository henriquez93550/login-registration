import React, { Component } from "react";
import DeleteBtn from "../components/DeleteBtn";
import Jumbotrons from "../components/Jumbotrons";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, TextArea } from "../components/Form";
import Dashboard from "../components/dashboard/Dashboard";

class Blogs extends Component {
  state = {
    blogs: [],
    topic: "",
    author: "",
    synopsis: "",
    responses: ""
  };

  componentDidMount() {
    this.loadBlogs();
  }

  loadBlogs = () => {
    API.getBlogs()
      .then(res =>
        this.setState({ blogs: res.data, topic: "", author: "", synopsis: "" })
      )
      .catch(err => console.log(err));
  };

  deleteBlog = id => {
    API.deleteBlog(id)
      .then(res => this.loadBlogs())
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.topic && this.state.author) {
      API.saveBlog({
        topic: this.state.topic,
        author: this.state.author,
        synopsis: this.state.synopsis,
        responses: this.state.responses
      })
        .then(res => {
          this.loadBlogs();
          console.log(res.data);
        })
        .catch(err => console.log(err));
    }
  };

  render() {
    return (
      <Container fluid>
        <Dashboard />
        <Row>
          <Col size="md-6">
            <Jumbotrons>
              <h1>Post Your Question Here</h1>
            </Jumbotrons>
            <form className="form-wrapper mt-2">
              <Input
                value={this.state.topic}
                onChange={this.handleInputChange}
                name="topic"
                placeholder="Topic (required)"
              />
              <Input
                value={this.state.author}
                onChange={this.handleInputChange}
                name="author"
                placeholder="Author (required)"
              />
              <TextArea
                value={this.state.synopsis}
                onChange={this.handleInputChange}
                name="synopsis"
                placeholder="Synopsis (required)"
              />
              <button
                style={{
                  width: "180px",
                  borderRadius: "30px",
                  letterSpacing: "1.5px",
                  marginTop: "1rem"
                }}
                disabled={!(this.state.author && this.state.topic)}
                onClick={this.handleFormSubmit}
                className="btn btn-warning btn-block"
              >
                Submit Question
              </button>
            </form>
          </Col>

          <Col size="md-6 sm-12">
            <Jumbotrons>
              <h1>Lastest Blogs</h1>
            </Jumbotrons>
            {this.state.blogs.length ? (
              <List>
                {this.state.blogs.map(blog => (
                  <ListItem key={blog._id}>
                    <Link to={"/blogs/" + blog._id}>
                      <strong style={{ marginLeft: "1rem" }}>
                        {blog.topic} by {blog.author}
                      </strong>
                    </Link>
                    <DeleteBtn onClick={() => this.deleteBlog(blog._id)} />
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Blogs;
