const app = require("./../index");
const supertest = require("supertest");
const request = supertest(app);
const pool = require("./../test_db.js");



describe("posts", () => {

  beforeAll(() => {
    pool.query(
      "INSERT INTO Users (user_id, email,username,password) VALUES (1, 'email@example.com', 'test', 'password')"
    );
  });

  afterAll(() => {
    pool.query("TRUNCATE TABLE posts;");
  });

  it("posts to /posts/1", async (done) => {
    const res = await request
      .post("/posts/1")
      .send({ description: "test post" })

      .then((response) => {
        expect(response.statusCode).toBe(200);
        expect(response.body[0].description).toBe("test post");
      });
    done();
  });

  it("gets from /posts", async (done) => {
    const res = await request
      .get("/posts")

      .then((response) => {
        expect(response.statusCode).toBe(200);
        expect(response.body.length).toEqual(1);
      });
    done();
  });

  it("gets a single post from /posts", async (done) => {
    const addPost = await request
      .post("/posts/1")
      .send({ description: "Another test post" });
    const posts = await request.get("/posts").then((response) => {
      return response.body[1].post_id;
    });
    const res = await request
      .get(`/posts/${posts}`)

      .then((response) => {
        expect(response.statusCode).toBe(200);
        expect(response.body.description).toBe("Another test post");
      });
    done();
  });

  it("updates a from /posts/:id", async (done) => {
    const posts = await request.get("/posts").then((response) => {
      return response.body[0].post_id;
    });
    const res = await request
      .put(`/posts/${posts}`)
      .send({ description: "new test post" })

      .then((response) => {
        expect(response.statusCode).toBe(200);
        expect(response.body).toEqual("Post was updated");
      });

    const updated = await request.get("/posts").then((response) => {
      expect(response.body[1].description).toEqual("new test post");
    });
    done();
  });

  it("deletes a posts from /posts/:id", async (done) => {
    const posts = await request.get("/posts").then((response) => {
      return response.body[0].post_id;
    });
    const res = await request
      .delete(`/posts/${posts}`)

      .then((response) => {
        expect(response.statusCode).toBe(200);
        expect(response.body).toEqual("Post was deleted");
      });

    const deleted = await request.get("/posts").then((response) => {
      console.log(response.body);
      expect(response.body.length).toEqual(1);
      expect(response.body).not.toContain({
        post_id: `${posts}`,
        description: "test post",
      });
    });
    done();
  });

})

describe("users", () => {
  beforeAll(() => {
    pool.query("DELETE FROM users WHERE user_id > 0;");
  });

  it("posts to /users", async (done) => {

    const res = await request
      .post("/users")
      .send({
        email: "test@test.com",
        username: "username",
        password: "password"
      })

      .then((response) => {
        expect(response.statusCode).toBe(200);
        expect(response.body.username).toBe("username");
      });
    done();
  });

  it("gets the users", async (done) => {
    const res = await request
      .get("/users")

      .then((response) => {
        expect(response.statusCode).toBe(200);
        expect(response.body.length).toEqual(1);
      });
    done();
  })
})