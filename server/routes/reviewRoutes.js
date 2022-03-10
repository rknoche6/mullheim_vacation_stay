const router = require("express").Router();

// create a review

router.post("/reviews/:id", async (req, res) => {
    try {
      const { description } = req.body;
      const { id } = req.params;
      const newReview = await pool.query(
        "INSERT INTO reviews (description, user_fk_id) VALUES ($1, $2) RETURNING * ",
        [description, id]
      );
  
      res.json(newReview.rows);
    } catch (err) {
      console.error(err.message);
    }
  });
  
  // get reviews
  
  router.get("/reviews", async (req, res) => {
    try {
      const allReviews = await pool.query("SELECT * FROM reviews;");
  
      res.json(allReviews.rows);
    } catch (err) {
      console.error(err.message);
    }
  });
  
  // get a single review
  
  router.get("/reviews/:id", async (req, res) => {
    try {
      const { id } = req.params;
      const review = await pool.query("SELECT * FROM reviews WHERE review_id = $1", [
        id,
      ]);
  
      res.json(review.rows[0]);
    } catch (err) {
      console.error(err.messsage);
    }
  });
  
  // update a review
  
  router.put("/reviews/:id", async (req, res) => {
    try {
      const { id } = req.params;
      const { description } = req.body;
  
      const updateReview = await pool.query(
        "UPDATE reviews SET description = $1 WHERE review_id = $2",
        [description, id]
      );
  
      res.json("Review was updated");
    } catch (err) {
      console.error(err.messsage);
    }
  });
  
  // delete a review
  
  router.delete("/reviews/:id", async (req, res) => {
    try {
      const { id } = req.params;
      const deleteReview = await pool.query(
        "DELETE FROM reviews WHERE review_id= $1",
        [id]
      );
  
      res.json("Review was deleted");
    } catch (error) {
      console.error(error);
    }
  });

  module.exports = router