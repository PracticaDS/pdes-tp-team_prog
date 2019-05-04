// <reference types="Cypress" />

import { machines } from '../../src/components/Game/Game.constants'

const defaultCss = 'machineElement'
const selectedCss = 'machineSelected'
const validMachineTypes = () => machines.map(mt => mt.id)
const filterMachineType = machineType => validMachineTypes().filter(mt => mt !== machineType)
const cy_selector = name => `[component_name=${name}]`
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
