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
    "travelPlan": process.env.TRAVELPLAN_MICROSERVICE || "http://localhost:8080",
    "masters": "http://localhost:8071",
    "api": "http://localhost:3040",
    "location": process.env.LOCATION_MICROSERVICE,
    "search": process.env.SEARCHRESULT_MICROSERVICE || "http://localhost:3000",
    "sample": 'http://localhost:8082'
}