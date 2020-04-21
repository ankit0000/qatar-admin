import { Input } from 'antd';
import './search.css';
import React, { Component, memo, useState, useEffect } from 'react';

const searchBox = React.memo(props => {
  const [searchTitle, setSearchTitle] = useState('');

  function searchChange(value) {
    console.log('search change', value);
    setSearchTitle(value);
    props.searchName(value);
  }

  useEffect(value => {
    console.log('first useEfffect', value);
  }, []);

  useEffect(
    value => {
      console.log('Second useEfffect called', value);
    },
    [searchTitle]
  );

  console.log('search box loder');
  return (
    <React.Fragment>
      <div className="button-conatiner">
        <input
          className="button-item"
          onChange={event => searchChange(event.target.value)}
          type="search"
          placeholder="Search"
        />
      </div>
    </React.Fragment>
  );
});

export default searchBox;
