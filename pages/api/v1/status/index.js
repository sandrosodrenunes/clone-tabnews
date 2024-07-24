import database from "infra/database.js";
import { version } from "react";

async function status(request, response) {
  const databaseName = process.env.POSTGRES_DB;
  const updatedAt = new Date().toISOString();
  const databaseVersionResult = await database.query("SHOW server_version;");
  const databaseOpenedConnectionResult = await database.query({
    text: "SELECT count(*)::int FROM pg_stat_activity WHERE datname = $1;",
    values: [databaseName],
  });
  const databaseMaxConnectiosResult = await database.query(
    "SHOW max_connections;",
  );

  const databaseVersionValue = databaseVersionResult.rows[0].server_version;
  const databaseMaxConnectiosValue =
    databaseMaxConnectiosResult.rows[0].max_connections;
  const databaseOpenedConnectionValue =
    databaseOpenedConnectionResult.rows[0].count;

  response.status(200).json({
    updated_at: updatedAt,
    denpendencies: {
      databesa: {
        version: databaseVersionValue,
        max_connections: parseInt(databaseMaxConnectiosValue),
        opened_connections: databaseOpenedConnectionValue,
      },
    },
  });
}

export default status;
