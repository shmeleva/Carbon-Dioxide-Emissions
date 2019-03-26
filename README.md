# Carbon-Dioxide-Emissions

* [User Interface](#user-interface)
* [Keeping Everything Up to Date](#keeping-everything-up-to-date)
* [RESTful API Design](#restful-api-design)
* [Database Schema](#database-schema)

### :sparkles: User Interface

I've used [Vue.js](https://vuejs.org/) as a frontend framework and [ECharts](https://echarts.apache.org/) for visualizations (I feel like it's more flexible than classic [Chart.js](https://www.chartjs.org/)).

#### Home
![Home](/docs/images/home.png)

* Colours indicate an income group. Income groups are retrieved from the World Bank.
* Crown icons :crown: indicate superpowers. Superpowers can be configured in `config.js`.

#### Lifetime
![Home](/docs/images/lifetime.png)

* CO<sub>2</sub> emissions in the past `age` years are shown on a line chart.


### :sparkles: Keeping Everything Up to Date

Here are some things that I've considered.

#### Data Storage

##### Problem
We can't constantly get data directly from the World Bank, mainly because it takes time.
##### Solution
MongoDB stores all the data. The data is updated on a regular basis by `/backend/tasks/update`. Now, updates are configured to run every Monday at 23:55.

#### Data Versioning
##### Problem
Users should not be affected by updates, meaning that they should be able to continue using the application while the data is being updated.
##### Solution
Several dataset versions exist at the same time. `Version` documents keep a timestamp and state, `Country` documents reference `Version._id`.

#### Deleting Old Documents
##### Problem
Database growth. Every update creates a new version and old documents become a waste.
##### Solution
Old documents are deleted on a regular basis by `/backend/tasks/clear`. Now, it is configured to run every Tuesday at 23:55.

#### Avoiding Unnecessary Updates
##### Problem
The data is updated even if there were no changes.
##### Solution
*The idea was to store an MD5 for each version & only perform an update if an MD5 has changed. Not implemented, though.*

### :sparkles: RESTful API Design

#### Search

To build a search with autocomplete suggestions, we need to get a list of countries with `code` and `name` fields. Since there are 200-300 countries & we only need a couple of fields at this stage, it's better to get all countries at once.

**Request:**
```
GET /countries&fields=code+name
```

**Response:**
```
[{
    name: String,
    code: String
}]
```

#### Visualization

To show a visualization for selected countries, we need to get a country with `name`, `code`, `income`, `superpower`, and `emissions` fields.

**Request:**
```
GET /countries/<code>?fields=code+name+income+superpower+emissions
```

**Response:**
```
{
  name: String,
  code: String,
  income: String,
  superpower: Boolean,
  emissions: [{
    year: Number,
    value: Number,
    valuePerCapita: Number
  }]
}
```

*I was also considering returning a version of a dataset and then sending it as a parameter, so that the same version is used throughout the session:*

**_Response:_**
```
{
  version: ObjectId,
  countries: [{
    name: String,
    code: String,
  }]
}
```

**_Request:_**
```
GET /countries&version=<version>
```

*However, I decided not to overcomplicate things.*

### :sparkles: Database Schema

(1) Entities do not change once they are created. So, it makes no difference whether updates are an expensive operation or nor.

(2) We need to be able to quickly *(a)* get all countries from the specified version and *(b)* a country with its emissions by its code from the specified version. Therefore, we can create [a compound index](https://docs.mongodb.com/manual/indexes/#compound-index) `{ version: -1, code: 1 }`, because these are the fields we use to search entities.

(3) We (normally) want to get all emissions of a country at once to limit the number of requests. So, emissions can be stored as an array of subdocuments.

### :sparkles: Problems & Further Improvements

* I don't really handle errors well, especially when it comes to updating the data. There are some TODOs for that in a source code. E.g., for a network error I could've retry the request.
* UI works just fine on small screens but doesn't look particularly nice. When a browser window size changes, charts do not adjust accordingly.
* I set some colours and font styles for charts in JS, so should the theme change, several files must be edited.
