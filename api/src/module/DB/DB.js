const environment = process.env.NODE_ENV || "development";
const configuration = require("../../config/knexfile")[environment];
const database = require("knex")(configuration);

class Db {
  /**
   *use to query db and return all result
   *
   * @static
   * @param {*} query
   * @param {*} [params={}]
   * @param {boolean} [withMetaData=false]
   * @returns
   * @memberof Db
   */
  static async query(query, params = {}, withMetaData = false) {
    try {
      const [result, metaData] = await database.raw(query, params);
      return withMetaData ? [result, metaData] : result;
    } catch (err) {
      if (err.message === "Pool is destroyed") {
        process.exit(1);
      }
      throw err;
    }
  }
}

export default Db;
