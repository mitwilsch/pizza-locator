import React, { useEffect, useState } from 'react';

const Utils = () => {
  const searchFormat = (string) => {
    string = string.replace(/\s+/g, '+');
    return string;
  };
  const fetchApi = async (query) => {
    const res = await fetch(`api/${query}`);
    const data = await res.json();

    return data;
  };

  const fakeApi = async (query) => {
    console.log(query);
    return {
      StoreID: '7726',
      IsDeliveryStore: true,
      MinDistance: 0.8,
      MaxDistance: 0.8,
      Phone: '619-444-3030',
      AddressDescription:
        '1787 E. Main St\nEl Cajon, CA 92021\nE Main St between Greenfield and Pepper',
      HolidaysDescription: '11/26 Closed',
      HoursDescription: 'Su-Th 10:30am-12:00am\nFr-Sa 10:30am-1:00am',
      ServiceHoursDescription: {
        Carryout: 'Su-Sa 10:30am-10:00pm',
        Delivery: 'Su-Th 10:30am-12:00am\nFr-Sa 10:30am-1:00am',
        DriveUpCarryout: 'Su-Sa 4:00pm-9:00pm',
      },
      IsOnlineCapable: true,
      IsOnlineNow: true,
      IsNEONow: false,
      IsSpanish: true,
      LocationInfo: 'E Main St between Greenfield and Pepper',
      LanguageLocationInfo: { en: 'E Main St between Greenfield and Pepper' },
      AllowDeliveryOrders: true,
      AllowCarryoutOrders: true,
      AllowDuc: true,
      ServiceMethodEstimatedWaitMinutes: {
        Delivery: { Min: 32, Max: 42 },
        Carryout: { Min: 10, Max: 15 },
      },
      StoreCoordinates: {
        StoreLatitude: '32.814528',
        StoreLongitude: '-116.916605',
      },
      AllowPickupWindowOrders: false,
      ContactlessDelivery: 'REQUIRED',
      ContactlessCarryout: 'DISABLED',
      IsOpen: true,
      ServiceIsOpen: { Carryout: true, Delivery: true, DriveUpCarryout: false },
    };
  };
  return { searchFormat, fetchApi, fakeApi };
};

const SearchBox = ({ handler }) => {
  const [text, setText] = useState('');
  const { searchFormat, fetchApi, fakeApi } = Utils();
  const styles = {
    searchBox: {
      margin: '5em',
    },
  };
  const submitHandler = (text) => {
    handler();
    text = searchFormat(text);
    // change this to fetchApi for live
    fetchApi(text).then((res) => handler(res));
  };
  return (
    <div style={styles.searchBox}>
      <input type="text" onChange={(e) => setText(e.target.value)} />
      <button type="button" onClick={() => submitHandler(text)}>
        Search
      </button>
    </div>
  );
};

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
      <h1>Domino's Finder</h1>
      <body>Enter an address and find the nearest store</body>
      <SearchBox handler={setStore} />
      <StoreModal store={store} />
    </div>
  );
};

export default App;
