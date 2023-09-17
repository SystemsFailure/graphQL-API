const { buildSchema } = require('graphql');

const schema = buildSchema(`
    type Query {
        hello: String,
        what: String,
    }
`);

module.exports = schema;