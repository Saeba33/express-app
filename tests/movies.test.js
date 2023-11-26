const request = require("supertest");
const app = require("../app");

describe("GET /api/movies", () => {
  it("should return all movies", async () => {
    const response = await request(app).get("/api/movies");
    expect(response.headers["content-type"]).toMatch(/json/);
    expect(response.status).toEqual(200);
  });
});

describe("GET /api/movies/:id", () => {
  describe("for movie with id 1", () => {
    it("should return status 200", async () => {
      const response = await request(app).get("/api/movies/1");
      expect(response.status).toEqual(200);
      expect(response.headers["content-type"]).toMatch(/json/);
    });
  });

  describe("for movie with id 0", () => {
    it("should return status 404", async () => {
      const response = await request(app).get("/api/movies/0");

      expect(response.status).toEqual(404);
    });
  });
});