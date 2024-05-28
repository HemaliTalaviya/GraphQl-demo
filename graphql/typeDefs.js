const { gql } = require('apollo-server')    
module.exports = gql`
type User {
    name:String,
    email:String,
    age:Int
}

input userinput {
    name:String,
    email:String,
    age:Int
}

type Query {
    user(ID:ID!):User!
    getUser (age:Int):[User]
}

type Mutation {
    createUser(userinput:userinput):User!
    updateUser(ID:ID!,userinput:userinput!):Boolean
}
`