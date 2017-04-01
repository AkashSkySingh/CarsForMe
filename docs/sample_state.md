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
        "niceName": "coupe"
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
          "niceName": "coupe"
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
    cover_photo_url: "cover.com/cover",
    description: "currentUser's description",
    followees: [
      0: "ID of a user that userDetail is following",
      1: ...
    ],
    followers: [
      0: "ID of a user following userDetail",
      1: ...
    ],
    id: "currentUser's id",
    posts : [
      0: {
        description: "post description",
        id: "post's id",
        image_url: "post.com/post",
        location: "post, post, usa",
        title: "post title",
        user: {
          user_id: "poster's id",
          user_image_url: "poster.com/poster",
          username: "poster's username"
        }
      },
      1: {
        ...
      }
    ]
  }
}
```
