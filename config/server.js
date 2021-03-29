module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  url: env('', 'http://localhost:1337'),
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', 'd80fffbe8146ec2c93219f2515c854d3'),
    },
  },
});
