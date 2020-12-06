import React, { useEffect, useState } from 'react';
import { AppBar, Typography, Toolbar } from '@material-ui/core';
import SearchBox from './Components/SearchBox';
import StoreModal from './Components/StoreModal';

const App = () => {
  const [store, setStore] = useState();
  console.log(store);
  const styles = {
    main: {
      display: 'flex',
      flexDirection: 'column',
    },
  };
  return (
    <div style={styles.main}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">Domino&apos;s Store Locator</Typography>
        </Toolbar>
      </AppBar>

      <body>Enter an address and find the nearest store</body>
      <SearchBox handler={setStore} />
      <StoreModal store={store} />
    </div>
  );
};

export default App;
