import connection from "./db.js";

// constructor

class Users {
  constructor(user) {
    this.phone = user.phone;
    this.name = user.name;

  }
  static createUser(newUser, result) {
    var user = "INSERT INTO user (phone, name) VALUES ?";
    var values = [[newUser.phone, newUser.name]];
    connection.query(user, [values], (err, results) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }

      result(null, { id: results.insertId, ...newUser });
    });
  }

  static searchExistingUser(oldUser, result) {
    let isDuplicate = false;
    var userAsking = "SELECT * FROM user WHERE phone = ?";

    connection.query(userAsking, [oldUser.phone], (err, results, fields) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }
      if (results.length === 0) {
        isDuplicate = false;
      }
      results.map(function (item) {
        if (item.phone === oldUser.phone) {
          isDuplicate = true;
        } else {
          isDuplicate = false;
        }
      });
      result(null, isDuplicate);
    });
  }

  static searchUserByPhone(user, result) {
    var userAsking = "SELECT user_id FROM user WHERE phone = ?";

    connection.query(userAsking, [user.phone], (err, results) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }

      result(null, results[0].user_id);
  
    });
  }
}
export default Users;
