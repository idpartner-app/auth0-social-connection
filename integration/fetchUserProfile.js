/* globals request */
module.exports = function fetchUserProfile(accessToken, context, callback) {
  request.get(
    {
      url: "https://auth-api.idpartner-dev.com/oidc-proxy/proxy/me",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    },
    (err, resp, body) => {
      if (err) {
        return callback(err);
      }
      if (resp.statusCode !== 200) {
        return callback(
          new Error(
            `Failed status code check for user profile response. Received ${resp.statusCode}.`
          )
        );
      }
      let bodyParsed;
      try {
        bodyParsed = JSON.parse(body);
      } catch (jsonError) {
        return callback(new Error("Failed JSON parsing for user profile response."));
      }
      const profile = {
        user_id: bodyParsed.email,
        ...bodyParsed,
      };
      return callback(null, profile);
    }
  );
};
