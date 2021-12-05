import { selectCities } from "./dao";
import { CodeValidator } from "./Validator/CitiesValidator";

export const getCities = async (code) => {
  const Validator = new CodeValidator({ code });
  await Validator.validate();

  const cities = await selectCities(code);
  return cities;
};
