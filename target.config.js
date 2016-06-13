// module.exports = {
//     "rule": process.env.ORGANIZATION_RESTRICTION_MICROSERVICE,
//     "credentials": process.env.CREDENTIAL_MICROSERVICE,
//     "travelPlan": process.env.TRAVELPLAN_MICROSERVICE,
//     "masters": process.env.ORGANIZATION_SERVICE_REGISTRY,
//     "api": process.env.USER_ENTITY_MICROSERVICE,
//     "location": process.env.LOCATION_MICROSERVICE,
//     "searchResult": process.env.SEARCHRESULT_MICROSERVICE
// }

module.exports = {
    "rule": "http://localhost:8070",
    "credentials": "http://localhost:3031",
    "travelPlan": process.env.TRAVELPLAN_MICROSERVICE,
    "masters": "http://localhost:8071",
    "api": "http://localhost:8081",
    "location": process.env.LOCATION_MICROSERVICE,
    "searchResult": process.env.SEARCHRESULT_MICROSERVICE,
    "sample": 'http://localhost:8082'
}