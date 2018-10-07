describe('simple test', () => {

    //comments
    it("get all users", () => {
        cy.request('/user')
            .its("body")
            .should("have.length", 2)
    });

    it("get 1 user", () => {
        cy.request('/user/1')
            .should((response) => {
                expect(response.status).to.eq(200)
                expect(response.headers).to.have.property('expires').to.eq(`-1`)
            })
            .its("body")
            .should((response) => {
                expect(response).to.be.a('object')
                expect(response.id).to.eq(1)
                expect(response.name).to.eq("vamsee")
            })
    });

    it("get all users 10 times", () => {
        cy.request('/user')
            .its("body")
            .should("have.length", 2)
            cy.request('/user')
            .its("body")
            .should("have.length", 2)
    });
    it("post user ?");

    it("test concurrent requests")

    it("test passing results from one test to other");


})