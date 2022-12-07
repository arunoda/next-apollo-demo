const app = require("../server");
const supertest = require("supertest");

const request = supertest(app);

describe("the application to fetch users based on query", () => {
  afterAll((done) => {
    done();
  });
  it("should fetch 5 users", async () => {
    const res = await request
      .post("/graphql")
      .send({
        query: `{
            users(offset: 0, limit: 5) {
              id
              name
              address {
                city
              }
            }
          }
        `,
      })
      .set("Accept", "application/json");
    expect(res.statusCode).toEqual(200);
    expect(res.body.data.users.length).toEqual(5);
  });
});
