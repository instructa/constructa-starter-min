import { createEnv } from '@t3-oss/env-core';
import * as z from 'zod';

export const env = createEnv({
  server: {
    MY_SECRET_VAR: z.url(),
  },
  runtimeEnv: process.env,
});
