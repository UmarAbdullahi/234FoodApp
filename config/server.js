module.exports = ({ env }) => ({
<<<<<<< HEAD
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  app: {
    keys: env.array('APP_KEYS'),
  },
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', 'acd0e1abc7b133f63357c91d9a33b568'),
    },
  },
});
=======
  host: env("HOST", "0.0.0.0"),
  port: env.int("PORT", 1337),
  app: {
    keys: env.array("APP_KEYS", ["testKey1", "testKey2"]),
  },
});
>>>>>>> 6928b0dcff0b37541573ea3df3624fa9b8da0a99
