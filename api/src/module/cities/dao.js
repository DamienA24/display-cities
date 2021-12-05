import db from "../DB";
const Db = db.Db;

export const selectCities = async (data) => {
  return await Db.query(
    "SELECT * FROM city WHERE postal_code=:postal_code OR name=:name",
    {
      postal_code: data,
      name: data,
    }
  );
};
