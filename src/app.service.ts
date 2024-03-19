import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AppService {
  constructor(private readonly configServie: ConfigService) {}

  getHello(): string {
    return 'Hola Mundo!';
  }
  getEnv(): string {
    return this.configServie.get('DB_HOST');
  }
}
