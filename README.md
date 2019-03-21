# Carbon-Dioxide-Emissions

Hi! 👋

Here I'll try to explain why I implemented things one way and not another.
* [Keeping Everything Up to Date](#keeping-everything-up-to-date)
* [RESTful API Design](#restful-api-design)
* [Database Schema](#database-schema)

### :sparkles: Keeping Everything Up to Date

There were a couple of things that I've considered while thinking of a solution.

#### Data Storage

First, constantly getting and parsing the data from the World Bank is not a feasible solution, mainly because it takes time. Therefore, I keep the data in a database in a format that is suitable for our application & update it periodically (=once a day by default).

#### Data Versioning

Second, users should not be affected by updates, meaning that they should be able to continue using the application while the data is being updated. Therefore, I keep multiple dataset versions.

#### Avoiding Unnecessary Updates

Third, I want to avoid unnecessary updates. To achieve this, I store an MD5 for each version & only perform an update if an MD5 has changed.

*There is probably an easier way, but* 🤷.

### :sparkles: RESTful API Design

#### Search

To build a search with autocomplete suggestions, we need to get a list of countries with `name` and `code` fields. Since there are less than 200 countries & we only need a couple of fields at this stage, it's better to get all countries at once.

**Request:**
```
GET /countries&compact=true
```

**Response:**
```
countries: [{
    name: String,
    code: String
}]
```

#### Visualization

To show a visualization for selected countries, we need to get a list of countries with `name`, `code`, `region`, `incomeGroup`, and `emissions` fields.

**Request:**
```
GET /countries&compact=false&codes=<code1,code2,...,codeN>
```

**Response:**
```
[{
  name: String,
  code: String,
  region: String,
  incomeGroup: String,
  emissions: [{
    year: Number,
    value: Number,
    valuePerCapita: Number
  }]
}]
```

#### Lifetime

To visualize how the situation has changed during the user's lifetime, we need to filter countries by location.

**Request:**
```
GET /countries&compact=false&codes=<code>
```

**Response:**
```
[{
  name: String,
  code: String,
  region: String,
  incomeGroup: String,
  emissions: [{
    year: Number,
    value: Number,
    valuePerCapita: Number
  }]
}]
```

As a result, I've ended up with just one method `GET /countries` that accepts the following parameters:

| Parameter  | Required   | Description                                                                  |
| ---------- | ---------- | ---------------------------------------------------------------------------- |
| `compact`  | No         | If set to `true`, only `name` and `code` fields are returned.                |
| `codes`    | No         | If set, only countries with these three-letter country codes are returned.   |
| `from`     | No         | If set, only values where `year > from` are returned.                        |
| `to`       | No         | If set, only values where `year < to` are returned.                          |

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

1. Entities do not change once they are created. So, it makes no difference whether updates are an expensive operation or nor.
2. We need to be able to quickly *(a)* get all countries from the specified version and *(b)* countries (and their emissions) by codes from the specified version. Therefore, we can create [a compound index](https://docs.mongodb.com/manual/indexes/#compound-index) `{ version: -1, code: 1 }`, because these are the fields we use to search entities.
3. We (normally) want to get all emissions of a country at once to limit the number of requests. So, emissions can be stored as an array of subdocuments.

*If (1) and (3) were not the case, e.g., if we would add new values dynamically or limit a time range, I might've done it differently.*

[Why shouldn't I embed large arrays in my documents?](http://www.askasya.com/post/largeembeddedarrays/)
