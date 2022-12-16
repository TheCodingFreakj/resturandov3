import connection from "./db.js";
import moment from "moment";

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
        result(err, null);
        return;
      }

      result(null, results[0].user_id);
    });
  }
  static deleteUser(user, result) {

    var reservationToDelete =
      "SELECT tableId , fk_user_id, date FROM reservations WHERE phone = ?";
    connection.query(reservationToDelete, [user.phone], (err, usersTables) => {
      if (err) {
        result(err, null);
        return;
      }

      var isbookTimeExceeds =
        "SELECT endTime FROM timewindows WHERE fk_table_id = ?";
      connection.query(
        isbookTimeExceeds,
        [usersTables[0].tableId],
        (err, results) => {
          if (err) {
            result(err, null);
            return;
          }

          var today = new Date();

          if (new Date(usersTables[0].date) < today) {
            if (new Date(usersTables[0].date).getTime() < today.getTime()) {

              var deleteReser = `DELETE w,t,tw,ur FROM  reservations w
                  INNER JOIN user ur ON ur.user_id=w.fk_user_id
                INNER JOIN tables t ON t.table_id =w.tableId
                INNER JOIN timewindows tw ON tw.fk_table_id=t.table_id
                WHERE  ur.user_id=${usersTables[0].fk_user_id}`;

              connection.query(deleteReser, (err, rows) => {
                if (err) throw err;

              });
            }
            result(null, "Your Reservation has expired! Book Again");
          } else {
            result(null, "Your Reservation is Active");
          }
        }
      );
    });
  }
}
export default Users;
