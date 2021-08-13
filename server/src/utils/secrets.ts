import * as dotenv from 'dotenv';
import * as fs from 'fs';

if (fs.existsSync('.env')) {
  console.debug('Using .env file to supply config environment variables');
  dotenv.config({path: '.env'});
} else {
  console.debug('Using .env.test file to supply config environment variables');
  dotenv.config({path: '.env.test'});
}
/**
 * Constant Environment
 */
export const ENVIRONMENT: string = process.env.NODE_ENV || 'dev';

/**
 * Constant Application Port
 */
export const PORT = process.env.PORT || 4000;
