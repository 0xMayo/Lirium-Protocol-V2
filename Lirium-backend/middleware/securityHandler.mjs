import cors from 'cors';
import ExpressMongoSanitize from 'express-mongo-sanitize';
import xss from 'xss-clean';
import helmet from 'helmet';
import hpp from 'hpp';
import rateLimit from 'express-rate-limit';

export const securityHandler = (app) => {
  app.use(cors());
  app.use(ExpressMongoSanitize());
  app.use(xss());
  app.use(helmet());
  app.use(hpp());
  app.use(
    rateLimit({
      windowMs: 1 * 60 * 1000,
      max: 100000,
    })
  );
};