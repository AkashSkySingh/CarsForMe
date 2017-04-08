export const fetchCars = car => {
  let keys = Object.keys(car);
  let query = keys.map( key => `${key}=${car[key]}`).join("&");
  return $.ajax({
    method: "GET",
    url: `api/trims/?${query}`
  });
};

export const fetchColValues = col => {
  return $.ajax({
    method: 'GET',
    url: 'cardata/col-values',
    data: {col}
  });
};
