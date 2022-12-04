const AxiosMockAdapter = require("axios-mock-adapter");
const axios = require("axios");
const UserServer = require("../../httpRequest/users");

const mockData = [
  { name: "gursimran", address: { city: "LMN", Street: "Street" } },
];
describe("Users", () => {
  it("should return data from the configured endpoint", async () => {
    let axiosMock = new AxiosMockAdapter(axios);
    axiosMock.onGet(process.env.USER_DETAILS_URL).reply(200, mockData);
    const res = await UserServer();
    expect(res).toEqual(mockData);
  });
});
