import React, { useState } from 'react';
import { Button } from '@material-ui/core';

import Utils from '../utils';

const { searchFormat, fakeApi } = Utils();

const SearchBox = ({ handler }) => {
  const [text, setText] = useState('');

  const styles = {
    searchBox: {
      margin: '5em',
    },
  };

  const submitHandler = (text) => {
    handler();
    text = searchFormat(text);
    // change this to fetchApi for live
    fakeApi(text).then((res) => handler(res));
  };
  return (
    <div style={styles.searchBox}>
      <input type="text" onChange={(e) => setText(e.target.value)} />
      <Button color="primary" onClick={() => submitHandler(text)}>
        Search
      </Button>
    </div>
  );
};
export default SearchBox;
