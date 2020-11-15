import React, { useState, useEffect } from 'react';

const ClientModal = client => {
  console.log(client);
  return (
    <div>
      <p>Name: {client.name}</p>
      <p>IP: {client.ip}</p>
    </div>
  );
};

const ScanButton = setClients => {
  useEffect(() => {
    async function fetchData() {
      console.log('starting scan');
      const res = await fetch('/api/scan/')
        .then(res => res.json())
        .then(data => setClients(data));
    }
    fetchData();
  });
  return (
    <div>
      <button>Scan</button>
    </div>
  );
};

const App = () => {
  const [selfClient, setSelfClient] = useState({ name: '', ip: '' });
  const [clients, setClients] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch('/api/')
        .then(res => res.json())
        .then(data => setSelfClient(data));
    }

    fetchData();
  }, []);

  useEffect(() => {
    console.log(clients);
  }, [clients]);

  console.log(selfClient);

  return (
    <div>
      Hello {selfClient.name}
      {ScanButton(setClients)}
      {clients.map(client => ClientModal(client))}
    </div>
  );
}; // App

export default App;
