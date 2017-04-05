## Sample State

```js
{
  carDetail: {
    "id": "Honda_Accord",
    "name": "Accord",
    "year": 2017,
    "styles": [{
      "id": ##,
      "name": "LX-S w/Honda Sensing 2dr Coupe (2.4L 4cyl CVT)",
      "submodel": {
        "body": "Coupe",
        "modelName": "Accord Coupe",
        "niceName": "coupe",
        ...
      }
    },
    {...},
    ...]
  },
  cars: {
    Honda: {
      "id": "Honda_Accord",
      "name": "Accord",
      "year": 2017,
      "styles": [{
        "id": ##,
        "name": "LX-S w/Honda Sensing 2dr Coupe (2.4L 4cyl CVT)",
        "submodel": {
          "body": "Coupe",
          "modelName": "Accord Coupe",
          "niceName": "coupe",
          ...
        }
      },
      {...},
      ...]
    },
    Toyota: {
      ...
    }
  },
  session: {
    currentUser: {
      favCars: [
        {
          "id": "Honda_Accord",
          "name": "Accord",
          "year": 2017,
          "styles": [{
            "id": ##,
            "name": "LX-S w/Honda Sensing 2dr Coupe (2.4L 4cyl CVT)",
            "submodel": {
              "body": "Coupe",
              "modelName": "Accord Coupe",
              "niceName": "coupe"
            }
          },
          {...},
          ...]
        }
      ]
      id: "currentUser's ##"
    }
  },
  query: {
    location: {
      city: "San Francisco",
      state: "CA",
      zipcode: "#####"
    },
    Dealers: {
      DealerID: {
        name: "Honda of San Francisco",
        street address: "123 Golden Gate Drive",
        phone: "###-###-####"
      },
      DealerID2: {
        ...
      },
      ...
    }
  }
}
```
