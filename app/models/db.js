import { createConnection } from "mysql";
import { HOST, USER, PASSWORD, DB ,PORTDB} from "../../config/db.config.js";

// Create a connection to the database
const connection = createConnection({
  host: HOST,
  user: USER,
  password: PASSWORD,
  database: DB,
  port:PORTDB
});

// open the MySQL connection
connection.connect((error) => {
  if (error) throw error;
  console.log("Successfully connected to the database.");
});

export default connection;
