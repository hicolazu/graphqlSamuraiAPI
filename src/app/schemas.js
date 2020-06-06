import { gql } from "apollo-server";

const typeDefs = gql`
  type Book {
    isbn: String!
    name: String!
    coverImage: String
    price: Float
    promotionalPrice: Float
    rating: Float
    score: Float
    scores: [Score]
    tecnologies: [String]
    requirements: [String]
    description: String
  }

  type Score {
    name: String
    value: Float
  }

  type Query {
    book(isbn: String!): Book
    books: [Book!]
  }

  input BookInput {
    isbn: String!
    name: String!
    coverImage: String
    price: Float
    promotionalPrice: Float
    rating: Float
    score: Float
    scores: [ScoreInput]
    tecnologies: [String]
    requirements: [String]
    description: String
  }

  input ScoreInput {
    name: String!
    value: Float!
  }

  type Mutation {
    createBook(data: BookInput!): Book
    updateBook(isbn: String!, data: BookInput!): Boolean
    deleteBook(isbn: String!): Boolean
  }
`;

export default typeDefs;
