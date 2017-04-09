export const fetchCars = data => (
  $.ajax({
    method: "GET",
    url: `api/trims/`,
    data: data
  })
);

export const fetchColValues = col => (
  $.ajax({
    method: 'GET',
    url: 'cardata/col-values',
    data: {col}
  })
);
