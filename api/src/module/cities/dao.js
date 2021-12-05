import db from "../DB";
const Db = db.Db;

export const selectCities = async (data) => {
  return await Db.query(
    "SELECT * FROM city WHERE postal_code=:postal_code OR libelle=:libelle ORDER BY name ASC LIMIT 100",
    {
      postal_code: data,
      libelle: data,
    }
  );
};
