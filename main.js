const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const { buildSchema } = require('graphql');

const schema = require('./src/schemes/grapql.sheme');

const root = {
    hello: () => {
        return 'hello world';
    },
    what: () => {
        return 'what?'
    }
}


const app = express();

app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true
}));

app.listen(3000, () => {
    console.log('GraphQL server listening on http://localhost:3000');
})


