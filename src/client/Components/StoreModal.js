import React from 'react';

const StoreModal = ({ store }) => {
  const styles = {
    store: {
      margin: '5em',
    },
  };
  if (store) {
    const { StoreID, AddressDescription } = store;
    return (
      <div style={styles.store}>
        <p>Store #{StoreID}</p>
        <p>Address: {AddressDescription}</p>
      </div>
    );
  }

  return <div style={styles.store}>Waiting...</div>;
};

export default StoreModal;
