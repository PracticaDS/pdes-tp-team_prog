// <reference types="Cypress" />

// we can't import the Game.constants file there is a problem with cypress and images
const machines = [
  { id: 2, name: 'Seller' },
  { id: 3, name: 'Crafter' },
  { id: 4, name: 'Furnace' },
  { id: 5, name: 'Transporter' },
]
const defaultCss = 'machineElement'
const selectedCss = 'machineSelected'
const validMachineTypes = () => machines.map(mt => mt.id)
const filterMachineType = machineType => validMachineTypes().filter(mt => mt !== machineType)
const cy_selector = attr => `[component_name=${attr}]`
const getMachineTypeSelector = machineType => cy_selector(`machine_${machineType}`)
const clickMachineType = machineType => {
  cy.get(getMachineTypeSelector(machineType)).click()
}
const testMachineTypeCssClass = (machineType, cssClass) => {
  cy.get(getMachineTypeSelector(machineType))
    .children()
    .should('have.class', cssClass)
}
const testClickedMachineCss = (machineType, cssClass) => {
  clickMachineType(machineType)
  testMachineTypeCssClass(machineType, cssClass)
}
const testFilteredMachinesCss = (machineType, cssClass) => {
  clickMachineType(machineType)
  filterMachineType(machineType).forEach(machine => {
    testMachineTypeCssClass(machine, cssClass)
  })
}
context('Select Machine', () => {
  beforeEach(() => {
    cy.visit('/')
  })
  describe('When the user have not clicked any machine yet', () => {
    it('should show an empty element below the gameRightPanel element', () => {
      cy.get(cy_selector('game-right-panel'))
        .children()
        .should('not.exist')
    })
    it('should show the default class value for every machine type', () => {
      validMachineTypes().forEach(machineType => {
        testMachineTypeCssClass(machineType, 'machineElement')
      })
    })
  })
  describe('When a user is going to click a machine', () => {
    describe('When it is the starter machine', () => {
      const starterMachineType = 1
      it('should open a selector for the possible materials', () => {
        clickMachineType(starterMachineType)
        cy.get(cy_selector(`material_selector_${starterMachineType}`)).should('exist')
      })
    })

    validMachineTypes().forEach(machineType => {
      describe(`When it is the ${machineType} machine`, () => {
        it(`should change the default class of the ${machineType} machine to ${selectedCss}`, () => {
          testClickedMachineCss(machineType, selectedCss)
        })
        it('should not change the other machines', () => {
          testFilteredMachinesCss(machineType, defaultCss)
        })
        it('should show the details panel', () => {
          clickMachineType(machineType)
          cy.get(cy_selector('details')).should('exist')
        })
      })
    })
  })
})
