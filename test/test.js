const request = require("supertest");
    const app = require("../index");

    describe("GET /", () => {
      it("Hello Ogba Education Clinic - OEC", (done) => {
        request(app).get("/").expect("Hello Ogba Education Clinic - OEC", done);
      })
    });