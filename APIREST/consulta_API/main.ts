import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import {Mutation} from "./resolvers/Mutation.ts"
import mongoose from "mongoose"
import { typeDefs } from "./gql/schema.ts";
const resolvers={

  Mutation
}
const server = new ApolloServer({
  typeDefs,
  resolvers,
});
await mongoose.connect("mongodb+srv://javier:javier@nebrija.awzbgfs.mongodb.net/?retryWrites=true&w=majority");
if(mongoose.connection){console.info("conectado")}
const { url } = await startStandaloneServer(server);
console.log(`🚀 Server ready at ${url}`);