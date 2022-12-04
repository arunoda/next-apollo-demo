require("dotenv").config();

const USERS_URL = process.env.USER_DETAILS_URL;
const axios = require("axios");

const users = () => {
  const headers = {
    "Accept-Encoding": "application/json",
  };
  return axios
    .get(USERS_URL, { headers: headers })
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      //console.log("Error-->", err);
      throw err;
    });
};

module.exports = users;
