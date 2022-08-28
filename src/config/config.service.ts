import { Injectable, Logger } from '@nestjs/common';
import * as fs from 'fs';
import * as path from 'path';
import { IConfig } from 'src/config/config.interface';

@Injectable()
export class ConfigService {
  private _logger = new Logger(ConfigService.name);
  private _config: Partial<IConfig> = {};

  get config(): Partial<IConfig> {
    return this._config;
  }

  constructor() {
    try {
      const strConfig = fs.readFileSync(
        path.resolve(__dirname, './config.json'),
        'utf-8',
      );
      this._config = JSON.parse(strConfig);
      this._logger.log('config.json has been successfully read');
    } catch (error) {
      this._logger.warn(
        `Can't read config.json file, empty fallback will be used. `,
        error,
      );
    }
  }
}
