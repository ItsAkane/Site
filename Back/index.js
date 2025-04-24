require('dotenv').config();



const { PGHOST, PGDATABASE, PGUSER, PGPASSWORD } = process.env;

const pool = new pool(``);

async function getPgVersion() {
  const result = await sql`SELECT version()`;
  console.log(result[0]);
}

getPgVersion();