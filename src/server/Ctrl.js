const express = require('express');
const Utils = require('./Utils');

const model = {
  name: 'tablet',
  ip: null,
};

const helloWorld = async (req, res) => {
  model.ip = await Utils.getIP();
  return res.json(model);
};

const status = async (req, res) => {
  const data = await Utils.getStats();

  return res.json(data);
};

const runScan = async (req, res) => {
  const data = await Utils.scanAll();
  return res.json(data);
};

module.exports = { runScan, helloWorld, status };
