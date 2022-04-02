import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { async } from 'rxjs';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Product } from './assets/entities/product-entity';
import { ProductModule } from './product/product.module';
console.log(process.cwd(),)
@Module({
  imports: [
    TypeOrmModule.forRootAsync ({
      imports: [ConfigModule],
      useFactory: async(configService : ConfigService) => ({
        type: "mysql",
        host: configService.get("DATABASE_HOST"),
        port: parseInt(configService.get("DATABASE_PORT"), 10),
        username: configService.get("DATABASE_USER"),
        password: configService.get("DATABASE_PASSWORD"),
        database: configService.get("DATABASE_NAME"),
        entities: [Product]
      }),
      inject: [ConfigService]
    }),
    ProductModule,
    ConfigModule.forRoot({
      envFilePath: `${process.cwd()}/db.env`
    })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
