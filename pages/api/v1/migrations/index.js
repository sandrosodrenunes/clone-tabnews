import { up } from "infra/migrations/1722276446856_test-migration";
import migrationRunner from "node-pg-migrate";
import { join } from "node:path";
import database from "infra/database";

export default async function migrations(request, response) {
  const dbClient = await database.getNewClient();
  const defaultMigrationOptions = {
    dbClient: dbClient,
    databaseUrl: process.env.DATABASE_URL,
    dryRun: true,
    dir: join("infra", "migrations"),
    direction: "up",
    verbose: true,
    migrationsTable: "pgmigration",
  };

  if (request.method === "GET") {
    console.log("Entrou no GET");
    const pendingMigrations = await migrationRunner(defaultMigrationOptions);
    await dbClient.end();
    return response.status(200).json(pendingMigrations);
  }

  if (request.method === "POST") {
    console.log("Entrou no POST");
    const migradetMigration = await migrationRunner({
      ...defaultMigrationOptions,
      dryRun: false,
    });

    await dbClient.end();

    if (migradetMigration.length > 0) {
      return response.status(201).json(migradetMigration);
    }

    return response.status(200).json(migradetMigration);
  }

  return response.status(405).end();
}
