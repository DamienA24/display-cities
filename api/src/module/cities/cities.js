import { selectCities } from "./dao";
import { CodeValidator } from "./Validator/CitiesValidator";

const postalCodeDom = ["971", "974", "977", "978", "988"];

export const getCities = async (code) => {
  const Validator = new CodeValidator({ code });
  await Validator.validate();

  const resultCities = await selectCities(code);
  if (resultCities && resultCities.length > 0) {
    const cities = {
      metropole: resultCities.filter(
        (city) => !postalCodeDom.includes(city.postal_code.slice(0, 3))
      ),
      dom: resultCities.filter((city) =>
        postalCodeDom.includes(city.postal_code.slice(0, 3))
      ),
    };
    return {
      success: true,
      data: cities,
    };
  }
  return {
    success: false,
    data: {},
  };
};
