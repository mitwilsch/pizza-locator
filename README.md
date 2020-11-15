# Sink

Plan for functionality:
Run server on ustom port, responding with data
Scan for other Ips on local nnetwork with same IP, ask them for JSON data
If named, add to client list. Client React app displays other clients, shows functions (files list, ssh button, sync selected dirs with rsync)

For testing, assume 2 devices runnning the client and server in Termux.

# todo
- [x] clean up custom logic and routes from old stuff
- [x]clean up client page
- [x] respond to GET with config file vars
- [x] store ip in config vars
- [x] implement port scans
- [x] implement timer on port scans
- [] implement saving of port IPs, sending GET to fetch config vars
- [] Implement showing saved IPs in client
