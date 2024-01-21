import { TypeOrmModuleOptions } from "@nestjs/typeorm";
import { join } from "path";

export const typeORMConfig = (): TypeOrmModuleOptions => {
  const config: TypeOrmModuleOptions = {
    applicationName: 'API Tasks',
    type: 'postgres',
    host: process.env.TYPEORM_HOST,
    port: +process.env.TYPEORM_PASSWORD,
    ssl: process.env.TYPEORM_AMBIENT === 'production' ? { rejectUnauthorized: false } : false,
    username: process.env.TYPEORM_USERNAME,
    password: process.env.TYPEORM_PASSWORD,
    database: process.env.TYPEORM_DATABASE,
    synchronize: true,
    entities: [join(__dirname, '/../apps/**/**.entity.{ts,js}')],
  }
  return config
}