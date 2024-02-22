import { DataSource } from 'typeorm';

export const dataSources = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'myuser',
  password: 'mypassword',
  database: 'mydb',
  synchronize: false,
  entities: ['src/**/*.entity{.ts,.js}'],
  migrations: ['src/migrations/*{.ts,.js}'],
});
