const request = require("supertest");
const { expect } = require("chai");
const app = require("../src/app");

describe("HEX to RGB API integration test", () => {

  it("GET /api/hex-to-rgb returns rgb values", async () => {
    const res = await request(app)
      .get("/api/hex-to-rgb")
      .query({ hex: "#00ff00" });

    expect(res.status).to.equal(200);
    expect(res.body.rgb).to.deep.equal({ r: 0, g: 255, b: 0 });
  });

  it("returns error for invalid hex", async () => {
    const res = await request(app)
      .get("/api/hex-to-rgb")
      .query({ hex: "invalid" });

    expect(res.status).to.equal(400);
  });

});