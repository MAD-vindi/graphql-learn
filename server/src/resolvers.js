const resolvers = {
    // reutrns an array of tracks that will be used to populate
    // the homepage grid of our web client
    Query: {
        // get all tracks, will be used to populate the homepage grid of our web client
        tracksForHome: (_, __, { dataSources }) => {
            return dataSources.trackAPI.getTracksForHome();
        },
        // query a single specific track
        track: (_, { id }, { dataSources }) => {
            return dataSources.trackAPI.getTrack(id);
        }
    },

    Mutation: {
        // increment the numbeOfViews property of a Track
        incrementTrackViews: async (_, { id }, { dataSources }) => {
            try {
                const track = await dataSources.trackAPI.incrementTrackViews(id);

                return {
                    code: 200,
                    success: true,
                    message: `Successfully incremented number of views for the track ${id}`,
                    track
                }
            } catch (err) {
                return {
                    code: err.extensions.response.status,
                    success: false,
                    message: err.extensions.response.body,
                    track: null
                }
            }
        }
    },

    Track: {
        author: ({ authorId }, _, { dataSources }) => {
            return dataSources.trackAPI.getAuthor(authorId);
        },
        modules: ({ id }, _, { dataSources }) => {
            return dataSources.trackAPI.getTrackModules(id);
        }
    }
};

module.exports = resolvers;