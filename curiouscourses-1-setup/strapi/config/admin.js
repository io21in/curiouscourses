module.exports = ({ env }) => ({
  auth: {
    secret: env("ADMIN_JWT_SECRET", "1Tj6gxcig/6X/gUNZwtpoQ=="),
  },
  apiToken: {
    salt: env("API_TOKEN_SALT", "dGyVDNNJgpQWWgvRWPdR+Q=="),
  },
  transfer: {
    token: {
      salt: env("TRANSFER_TOKEN_SALT"),
    },
  },
  flags: {
    nps: env.bool("FLAG_NPS", true),
    promoteEE: env.bool("FLAG_PROMOTE_EE", true),
  },
});
