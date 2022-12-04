require("dotenv").config();

module.exports = {
  env: {
    limit: process.env.limit,
    user_url: process.env.user_url,
  },
};
