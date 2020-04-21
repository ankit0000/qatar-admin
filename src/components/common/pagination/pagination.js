import { Pagination } from 'antd';
import React from 'react';

const pagination = props => {
  return (
    <Pagination
      defaultCurrent={1}
      defaultPageSize={props.defaultPageSize}
      total={props.total.length}
      onChange={props.pageChange}
      style={{ clear: 'both' }}
    />
  );
};

export default pagination;
