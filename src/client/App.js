import React, { useEffect, useState } from 'react';
import DriveUtils from './DriveUtils';

const { fetchApi } = DriveUtils();

const App = () => {
  const [feed, setFeed] = useState();

  useEffect(() => {
    fetchApi().then((data) => setFeed(data));
  }, []);

  if (feed) {
    // dont run until feed state is populated
    const { iconLink, thumbnailLink, title } = feed.items[0];
    return (
      <div>
        <p>{title}</p>
        <img src={iconLink} />
      </div>
    );
  }

  return <div>Loading</div>;
};

export default App;
