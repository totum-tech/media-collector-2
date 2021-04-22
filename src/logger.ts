import { ConsoleHandler } from '@straw-hat/logger/dist/handlers/console-handler';
import { Logger, LogLevels } from '@straw-hat/logger';

const logger = new Logger('app', {
  handlers: [
    // Log everything
    new ConsoleHandler(LogLevels.Notset),
  ],
});

export default logger;
