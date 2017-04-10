export const fetchCars = data => {
  console.log('in ajax request');
  console.log(data);
  return (
  $.ajax({
    method: "GET",
    url: `cardata/car-list/`,
    data: data
  })
);};

export const fetchColValues = col => (
  $.ajax({
    method: 'GET',
    url: 'cardata/col-values',
    data: {col}
  })
);
