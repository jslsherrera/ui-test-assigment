describe("verify cities", function(){
    it ("expand managers", function(){
        cy.visit("employees.html")
        cy.get('.jqx-tree-grid-collapse-button').click()
    })
    it ("verify 1 empolyee city", function(){
        cy.get('#row1treeGrid > .jqx-grid-cell-nowrap > .jqx-tree-grid-checkbox').click()
        cy.get('#btn').click()
        cy.get('.jqx-listitem-state-normal').should("have.text","Nancy is from Seattle")
    })
    it ("verify 2 empolyees city", function(){
        cy.get('#row5treeGrid > .jqx-grid-cell-nowrap > .jqx-tree-grid-checkbox').click()
        cy.get('#btn').click()
        cy.get('#listitem0listBoxSelected > .jqx-listitem-state-normal').should("have.text","Nancy is from Seattle")
        cy.get('#listitem1listBoxSelected > .jqx-listitem-state-normal').should("have.text","Michael is from London")
    })
})