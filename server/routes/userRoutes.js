const router = require("express").Router();



// user routes
//get all users

router.get("/users", async (req, res) => {
    try {
      const allUsers = await pool.query("SELECT * FROM Users");
      res.json(allUsers.rows);
    } catch (err) {
      console.error(err);
    }
  });
  
//get a specific user
  router.get("/users/:id", async (req, res) => {
    try {
      const { id } = req.params;
      const message = await pool.query("SELECT * FROM Users WHERE user_id = $1", [
        id,
      ]);
  
      res.json(message.rows[0]);
    } catch (err) {
      console.error(err.messsage);
    }
  });
  
//add users
  
  router.post("/users", async (req, res) => {
    try {
      const { email } = req.body;
      const { username } = req.body;
      const { password } = req.body;
      const newUser = await pool.query(
        "INSERT INTO Users (email, username, password) VALUES($1,$2,$3) RETURNING *",
        [email, username, password]
      );
      res.json(newUser.rows[0]);
    } catch (err) {
      console.error(err);
      res.json("Failed")
    }
  });
  
  router.post("/users/:username", async (req, res) => {
    try {
      const { username } = req.params
      const user = await pool.query("SELECT * FROM Users WHERE username = $1", [
        username,
      ]);
      const { password } = req.body
      if (user.rows[0]) {
        let auth = user.rows[0].password === password;
        if (auth) {
          res.json(auth);
        } else {
          res.json("Failed");
        }
      } else {
        res.json("Failed");
      }
    } catch (err) {
      console.error(err);
    }
  });
  