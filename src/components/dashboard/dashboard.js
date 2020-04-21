import React, { Component } from 'react';
import { Row, Col, Slider } from 'antd';
import { Person, Person1 } from '../Person/Person';
import './dashboard.css';
import Header from '../common/header/header';
import Pagination from '../common/pagination/pagination';
import Searchbox from '../common/search/search';

class Dashboard extends React.Component {
  constructor() {
    super();
    this.state = {
      posts: [],
      min: 0,
      max: 25,
      searchQuery: '',
      searchName: 'Search'
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then(
        post => {
          console.log('result', post);
          this.setState({
            posts: post
          });
        },
        error => {
          console.log('error', error);
        }
      );
  }

  shouldComponentUpdate() {
    console.log('component should padate');
    return true;
  }

  componentDidUpdate() {
    console.log('component did update');
  }

  getPosts() {
    let filterArray = this.state.posts.filter(item => {
      return item.title.includes(this.state.searchQuery);
    });
    return filterArray.slice(this.state.min, this.state.max).map(post => {
      return (
        <div key={post.id} className="posts">
          {post.id} and {post.title}
        </div>
      );
    });
  }

  pageChange = (a, b) => {
    if (a <= 1) {
      this.setState({
        min: 0,
        max: 25
      });
    } else {
      this.setState({
        min: this.state.max,
        max: a * 25
      });
    }
  };

  searchValueChange(value) {
    console.log('searchValueChange', value);
    this.setState({
      searchQuery: value
    });
  }

  render() {
    return (
      <React.Fragment>
        <div className="posts-container">
          <Searchbox
            searchName={value => {
              this.searchValueChange(value);
            }}
          />
          {this.getPosts()}
        </div>
        <Pagination
          pageChange={(page, pageSize) => this.pageChange(page, pageSize)}
          total={this.state.posts}
          defaultPageSize={this.state.max}
        ></Pagination>
      </React.Fragment>
    );
  }
}

export default Dashboard;
