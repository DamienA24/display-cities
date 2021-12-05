module.exports = {
  development: {
    client: "mysql",
    connection: {
      host: "127.0.0.1",
      database: "cities",
      user: "root",
      password: "root",
      port: 3306
    },
    pool: {
      min: 1,
      max: 1,
    },
  },

  "pre-prod": {
    client: "mysql",
    connection: {
      host: process.env.DB_HOST,
      database: process.env.DB_DATABASE,
      user: process.env.DB_USER,
      password: process.env.DB_PASS,
      port: process.env.DB_PORT,
    },
    pool: {
      min: 0,
      max: 10,
    },
  },
};
