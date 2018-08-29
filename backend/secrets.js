// secrets.js

import dotenv from 'dotenv';

// loads the values from .env file into application's process.env
dotenv.config();

const secrets = {
  dbUri: process.env.DB_URI
};

export const getSecret = key => secrets[key];