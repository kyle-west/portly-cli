#!/usr/bin/env node
const proxy = require('simple-http-proxy');
const express = require('express')

const args = process.argv.slice(2)

const proxyOptions = {
  'xforward': {
    'proto': 'x-orig-proto',
    'host': 'x-orig-host',
    'port': 'x-orig-port',
    'path': 'x-orig-base'
  },
  'timeout': 60000
};

const rules = []
args.forEach((arg, i) => {
  if (arg.toLowerCase() === 'on') {
    rules.push([args[i-1], parseInt(args[i+1], 10)])
  }
});

const servers = []
rules.forEach(([forwardIP, port]) => {
  const app = express()
  app.use(proxy(`http://${forwardIP}/`, proxyOptions)) 
  servers.push(app.listen(port, () => console.log(`http://${forwardIP} proxied on http://localhost:${port}`)))
})