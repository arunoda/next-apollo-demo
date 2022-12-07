import React from "react";
import User from "./User";
import renderer from "react-test-renderer";

const data = { name: "singh", address: { suite: "88", city: "city" } };
describe("User", () => {
  it("should renders correct tree when particular props are sent", () => {
    const tree = renderer.create(<User client={data} />);
    expect(tree).toMatchSnapshot(
      `<li className="user">
        <figure>
          <p>singh</p>
          <span># 
          88 
          ,</span>
          <br />
          <span>city</span>
          <br />
          <span />
        </figure>
      </li>`
    );
  });
});
