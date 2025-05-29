# AI Starter

This is a starter project template.

## Available Commands

### Project CLI (`pnpm ex0`)

This project includes a custom CLI tool for common tasks. Run it using `pnpm ex0 <command>`.

| Command    | Description                                                                | Args                 |
| :--------- | :------------------------------------------------------------------------- | :------------------- |
| `init`     | Initialize the project (dependencies, DB setup, Docker)                    |                      |
| `stop`     | Stop running Docker containers                                             |                      |
| `reload`   | Reload Docker containers with updated configuration                        |                      |
| `recreate` | Recreate Docker containers and volume (WARNING: deletes all data!)         |                      |
| `testdata` | Create or delete seed test data in the database                            | `--create`, `--delete` |
| `deploy`   | [TODO] Deploy the application                                              |                      |

### npm/pnpm Scripts

Standard project scripts are available via `pnpm <script-name>`.

| Script             | Description                                      | Underlying Command                                                                       |
| :----------------- | :----------------------------------------------- | :--------------------------------------------------------------------------------------- |
| `dev`              | Start development server                         | `vinxi dev`                                                                              |
| `build`            | Build the project                                | `vinxi build`                                                                            |
| `start`            | Start production server                          | `vinxi start`                                                                            |
| `test`             | Run tests                                        | `vitest`                                                                                 |
| `db:pull`          | Pull database schema using Drizzle Kit           | `npx drizzle-kit pull`                                                                   |
| `db:generate`      | Generate Drizzle migrations/schema changes       | `npx drizzle-kit generate`                                                               |
| `db:migrate`       | Apply Drizzle migrations                         | `npx drizzle-kit migrate`                                                                |
| `biome:fix:unsafe` | Fix code style issues (includes unsafe fixes)    | `biome check --fix --unsafe`                                                             |
| `biome:check`      | Check code style issues                          | `biome check`                                                                            |
| `auth:init`        | Generate Better Auth schema                      | `npx -y @better-auth/cli@latest generate --config server/auth.ts --output server/db/auth.schema.ts` |
| `ex0`              | Run the custom project CLI                       | `tsx cli/index.ts`                                                                       |

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
# tanstack-starter-min
