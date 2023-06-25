const { RESTDataSource } = require("@apollo/datasource-rest");

class TrackAPI extends RESTDataSource {
    baseURL = "https://odyssey-lift-off-rest-api.herokuapp.com/";

    getTracksForHome() {
        return this.get("tracks");
    }

    getAuthor(authorId) {
        return this.get(`author/${authorId}`);

        // return this.get(`author/${encodeURIComponent(authorId)}`);

        // To prevent malicious clients from accessing or manipulating 
        //data they shouldn't be, we recommend using the encodeURIComponent 
        //function for any HTTP path that accepts dynamic input. encodeURIComponent is a 
        //standard JavaScript function that encodes special 
        //characters in a URI, preventing a possible injection attack vector.

    }

    getTrack(trackId) {
        return this.get(`track/${trackId}`)
    }

    getTrackModules(trackId) {
        return this.get(`track/${trackId}/modules`)
    }

    incrementTrackViews(trackId) {
        return this.patch(`track/${trackId}/numberOfViews`)
    }
}

module.exports = TrackAPI;