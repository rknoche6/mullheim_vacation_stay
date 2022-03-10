const router = require("express").Router();


//Message rountes
// write a message

router.post("/contactus/:id", async (req, res) => {
    try {
      const { description } = req.body;
      const { id } = req.params;
      const newMessage = await pool.query(
        "INSERT INTO messages (description, user_fk_id) VALUES ($1, $2) RETURNING * ",
        [description, id]
      );
  
      res.json(newMessage.rows);
    } catch (err) {
      console.error(err.message);
    }
  });
// get messages

router.get("/contactus/:id", async (req, res) => {
    try {
      const allMessages = await pool.query("SELECT * FROM messages WHERE user_fk_id = $1;", [
          id,
      ]);
      res.json(allMessages.rows);
    } catch (err) {
      console.error(err.message);
    }
});
  
  // get a single message
  
router.get("/messages/:id", async (req, res) => {
    try {
      const { id } = req.params;
      const message = await pool.query("SELECT * FROM messages WHERE message_id = $1", [
        id,
      ]);
  
      res.json(message.rows[0]);
    } catch (err) {
      console.error(err.messsage);
    }
  });
  
  // update a message
  
router.put("/messages/:id", async (req, res) => {
    try {
      const { id } = req.params;
      const { description } = req.body;
  
      const updateMessage = await pool.query(
        "UPDATE messages SET description = $1 WHERE message_id = $2",
        [description, id]
      );
  
      res.json("Message was updated");
    } catch (err) {
      console.error(err.messsage);
    }
  });
  
  // delete a message
  
router.delete("/messages/:id", async (req, res) => {
    try {
      const { id } = req.params;
      const deleteMessage = await pool.query(
        "DELETE FROM messages WHERE message_id= $1",
        [id]
      );
  
      res.json("message was deleted");
    } catch (error) {
      console.error(error);
    }
  });
  
module.exports = router