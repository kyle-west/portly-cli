# [portmageddon](https://www.npmjs.com/package/portmageddon)

This CLI offers a quick way to proxy a web process from a machine on your network as if it were coming from your own localhost. 

I built this to make local development easier for myself when testing things on VM's. Since this was useful to me I decided to publish it out there for others to use too.

# Installation 

```
npm install -g portmageddon
```

## Usage

`portmageddon` takes a set of forwarding rules as arugments. `portmageddon <host>:<port> on <local-port>` will forward traffic from `http://<host>:<port>` thru to `http://<local-port>`.

```sh
# this will forward traffic from http://localhost:5000 thru to http://10.0.2.2:8080
portmageddon 10.0.2.2:5000 on 8080
```

You can chain forwarding rules and `portmageddon` will boot up proxies for each.

```sh
portmageddon   10.0.2.2:5000 on 8080   10.0.2.2:5001 on 8081   10.0.2.2:5002 on 8082
#   http://10.0.2.2:5000 proxied on http://localhost:8080
#   http://10.0.2.2:5001 proxied on http://localhost:8081
#   http://10.0.2.2:5002 proxied on http://localhost:8082
```
