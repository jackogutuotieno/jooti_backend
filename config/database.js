module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'bookshelf',
      settings: {
        client: 'postgres',
        host: env('DATABASE_HOST', ''),
        port: env.int('DATABASE_PORT', 5432),
        database: env('DATABASE_NAME', 'jooti_backend'),
        username: env('DATABASE_USERNAME', 'postgres'),
        password: env('DATABASE_PASSWORD', 'Joo@1044'),
        ssl: env.bool('DATABASE_SSL', false),
      },
      options: {}
    },
  },
});
