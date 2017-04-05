# CarsForMe: DEVELOPMENT_README

- [CarsForMe: Live][live]
- [CarsForMe: Github][github]

[live]: https://www.CarsForMe.net
[github]: https://github.com/AkashSkySingh/CarsForMe

## Background

The premise of this project is to help a new car buyer narrow down the selection of vehicles, eventually to find a car that fits their needs.

To new car buyers, researching potential vehicle choices can be an alien, and often burdensome task. Often times, a new car buyer will have to scour many available dealership sites to find relevant information for vehicles of their interest. This web app will be a one-stop spot  for detailed information relating to the newest vehicle models available on the market.

The integration of CarQueryAPI with our personal database which has relevant pricing information will provide an overall picture of what a new car buyer will expect of a vehicle on the market. Our users will first input their desired qualities in a search form, and narrow down their vehicles to a list. Upon selecting any car from their list, using their registered information, as well as the location specific information a user entered upon registration, a list of nearby car dealerships with said vehicle will be shown.

## Minimum Viable Product

- [ ] Django/Python Back-End
- [ ] Car list generation w/ price via CarQuery/Django Database
- [ ] In-depth car detail via Car Query API
- [ ] Map of nearby dealerships of similar make to car selected

## Design Docs
* [View Wireframes][wireframes]
* [Component Hierarchy][components]
* [API endpoints][api-endpoints]
* [DB schema][schema]
* [Sample State][sample-state]

[wireframes]: docs/wireframes
[components]: docs/component_hierarchy.md
[sample-state]: docs/sample_state.md
[api-endpoints]: docs/api_endpoints.md
[schema]: docs/schema.md

## Wireframes

![image of Home Splash Page](/docs/wireframes/Home%20Page_Splash.png)
![image of Results Page](/docs/wireframes/Results.png)
![image of Show Page](/docs/wireframes/Show.png)

## Technologies & Technical Challenges

This web app will be implemented using Django framework and Python language in the back-end with a React Redux front end for components.

Additionally, this web app employs CarQuery API to provide detailed information tying it to a locally hosted join table for car-related pricing information. This, in concert with additional user specific information, will provide a rendered result for local dealerships that provide the vehicle for an in-person review if required by the user.

The primary technical challenges will be:

- Adjusting to Django framework with a new language of Python. All group members will be learning this language and framework over the timeline of this project.
- Adequately hosting and problem solving issues amongst the integration and cooperation of different APIs. Query results from one API will be used with additional information for another API/AJAX request.
- Another possible technical issue is getting Google Places to accept relevant  query information to produce the necessary dealership information.

### CarQueryApi Implementation

```
$.getJSON("https://www.carqueryapi.com/api/0.3/" + "?callback=?", {cmd:"getInfo", year: 2017, make: 'toyota', model:'camry'}, function(data) {
}
```

The variable, getInfo, can be anything from makes, models, trims, and years for the various cars we need more information on, and this information will then be seeded into our database for potential user use. 

## Group Members and Work Breakdown
Our group consists of Aaron Huynh, Akashpreet Singh, and Khalil Nasirov. All members are expected to learn Django and Python, as well as complete the following tasks:

- Aaron will complete the following:
  + [ ] Setting up Django
  + [ ] Splash page general outline and award winning cars components
  + [ ] Result page general outline and filter components
  + [ ] Car detail container and other show page components
  + [ ] Refactoring code
- Akash will complete the following:
  + [ ] Setting up Django
  + [ ] Car list index container and car list item components
  + [ ] Integrate Google Places/Maps API to show dealerships
  + [ ] Styling
  + [ ] Setting up domain and pushing to production
- Khalil will complete the following:
  + [ ] Set up database using CarQuery API and seeding
  + [ ] Pricing information for cars 
  + [ ] Implementing Routes/Controllers in the backend
  + [ ] Search functionality and filtering the results
  + [ ] Styling

## Implementation Timeline

### Phase 1: Django up and running

**Objective:** The main goal today is to get Django up and running along with some data verified and seeded. Any extra time would be spent on implementing user authentication. By the end of the day, we will have:
 - [ ] Set up Django and get a splash page up on local host (Aaron + Akash)
 - [ ] Consolidate data of cars and import to database using CarQuery API (Khalil)
 - [ ] Final decision on car and user Models, Validations and Routes (group)

### Phase 2: Complete Auth and Splash

**Objective:** Work on completing user authentication and finishing the splash page. By the end of the day, we will have:
 - [ ] Complete user authentication (be able to login and signup accounts (Aaron + Akash)
 - [ ] Finish splash page with fake award cars data on the bottom (Akash + Aaron)
 - [ ] Verify seeded data and help complete the two tasks above (Khalil)
 - [ ] Implementing Routes/Controllers in the backend (Khalil)
 
### Phase 3: Car Result Page and Bug Testing

**Objective:** Start working on the results show page where there’s a filter side bar and a car index container based on the filter selection. By the end of the day, we will have:
 - [ ] Create the results page with filter container on the left (Khalil + Aaron)
 - [ ] Implement search functionality and filtering the results (Khalil + Aaron)
 - [ ] Create the Car List Index container with mini car detail container on the right (Akash)
 - [ ] Check Phase 1 and 2 work for bugs (Aaron)

### Phase 4:  Show Page and Google API integration

**Objective:** Car detail/show page with google API for dealerships . By the end of the day, we will have:
 - [ ] Implement a car detail container where it shows the car specs (Aaron)
 - [ ] Implement Google Maps/Places to get the nearest 3 dealerships under the Car’s Make based on the users location (from profile) (Akash + Khalil)
 - [ ] Check Phase 3 work for bugs (Khalil)

### Phase 5: Clean-Up and Testing

**Objective:** Focus on polishing the final product, ensuring a bug free application. By the end of the day, we will have:
 - [ ] Finish Styling (Khalil + Akash)
 - [ ] Verify seed data (Khalil)
 - [ ] Refactor code (Aaron)
 - [ ] Final test and features (Khalil)
 - [ ] Complete the Production readme (Akash)
 - [ ] Push to prod (Akash)

### Bonus Features (TBD)
- [ ] Provide user vehicle following/favoriting functionality
- [ ] Allow user to change location to search nearby dealers for selected vehicle
- [ ] Compare vehicle side-by-side functionality

## Technologies Used:
- [ ] Google Places API
- [ ] Google Maps API
- [ ] Car Query API
- [ ] Django/Python
