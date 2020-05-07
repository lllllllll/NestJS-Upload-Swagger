import { Module } from '@nestjs/common';
import { MulterModule } from '@nestjs/platform-express';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CitiesModule } from './Cities/city.module';
import { UploadController } from './Uploads/Upload.controller';

@Module({
  imports: [TypeOrmModule.forRoot(),
    CitiesModule,
    MulterModule.register({
      dest: './files',
    }),
  ],
  controllers: [UploadController],
})

export class AppModule {}
