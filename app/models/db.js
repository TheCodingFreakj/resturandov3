import { createConnection } from "mysql";
import { HOST, USER, PASSWORD, DB } from "../../config/db.config.js";

// Create a connection to the database
const connection = createConnection({
  host: HOST,
  user: USER,
  password: PASSWORD,
  database: DB,
});

// open the MySQL connection
connection.connect((error) => {
  if (error) throw error;
  console.log("Successfully connected to the database.");
});

export default connection;
