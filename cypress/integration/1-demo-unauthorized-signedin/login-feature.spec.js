// describe("Test Suite for Email and Password Input fields", function () {
//   it("It should be visible", function () {
//     cy.visit("https://staging.zenledger.io/login");
//     cy.get("input.form-control:nth-of-type(1)")
//     .should("be.visible")
//     .and('have.length',2)
//   });
// });

describe("Test Suite for Email and Password Input fields", function () {
  it("It should be visible", function () {
    cy.visit("https://staging.zenledger.io/login");
    cy.get("input.form-control:nth-of-type(1)")
      .should("be.visible")
      .and("have.length", 2);
  });
  it("It should have placeholders", function () {
    cy.get(":nth-child(1) > :nth-child(2) > .form-control").should(
      "have.attr",
      "placeholder",
      "Enter Email address here"
    );
    cy.get(".position-relative > .form-control").should(
      "have.attr",
      "placeholder",
      "Enter password here"
    );
  });
});
