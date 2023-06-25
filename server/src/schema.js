const gql = require("graphql-tag");

const typeDefs = gql`
type Query {
    "Query to get tracks array for the homepage grids"
    tracksForHome: [Track!]!
    "Query for a specific track"
    track(id: ID!): Track
}

type Mutation {
    incrementTrackViews(id: ID!): IncrementTrackViewsResponse!
}

type IncrementTrackViewsResponse {
    "Similar to http status codes, represents the status of the mutation"
    code: Int!
    "Indicates whether the mutation way successful"
    success: Boolean!
    "Human-readable message for the UI"
    message: String!
    "Newly updated track after a successful mutation"
    track: Track
}

"A track is a group of modules that teaches about a specific topic"
type Track {
    id: ID!
    "the track's title"
    title: String!
    "the track's main author"
    author: Author!
    "the track's main illustration to display in track card"
    thumbnail: String
    "the track's approximate length to complete, in minutes"
    length: Int
    "the number of modules this track contains"
    modulesCount: Int
    "The number of times a track has been viewed"
    numberOfViews: Int
    "The track's complete description, can be in Markdown format"
    description: String
    "The track's complete array of Modules"
    modules: [Module!]!
}

type Author {
    id: ID!
    "Author's first and last name"
    name: String!
    "URI for the profile pic of author"
    photo: String
}

"A Module is a single unit of teaching. Multiple Modules compose a Track"
type Module {
  id: ID!
  "The Module's title"
  title: String!
  "The Module's length in minutes"
  length: Int
}
`;

module.exports = typeDefs;