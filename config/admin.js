module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'dfebaa6f753006bc94b1f5ca45c57f2c'),
  },
});
