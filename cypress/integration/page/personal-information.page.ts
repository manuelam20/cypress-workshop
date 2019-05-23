
interface PersonalInformation {
  firstName: string;
  lastName: string;
  sex: string;
  experience: number;
  profession: string[];
  tools: string[];
  continent: string;
  commands: string[];
  file?: string;
  downloadFile?: boolean;
}

export class PersonalInformationPage{

  private firstNameField: string;
  private lastNameField: string;
  private submitButton: string;
  private pageTitleLabel: string;
  private uploadProfilePicture: string;
  private testFileDownloadLink: string;
  private sexOption: string;
  private experienceOptionRadioButton: string;
  private professionCheckbox: string;
  private toolsOptionCheckbox: string;
  private continentDropdown: string;

  constructor () {
    this.firstNameField = '[name="firstname"]';
    this.lastNameField =  '[name="lastname"]';
    this.submitButton = '#submit';
    this.pageTitleLabel = '#content  h1';
    this.uploadProfilePicture = '#photo';
    this.testFileDownloadLink = '//a[contains(text(),"Test File to Download")]';
    this.sexOption = '[name="sex"]';
    this.experienceOptionRadioButton = '[name="exp"]';
    this.professionCheckbox = '[name="profession"]';
    this.toolsOptionCheckbox = '[name="tool"]';
    this.continentDropdown = '#continents';
  }

  private getSexOption(name:string): Cypress.Chainable {
    return cy.get(this.sexOption)
    .find(`[value="${name}"]`);
  }

  private experienceOption(years: number): Cypress.Chainable {
    return cy.get(this.experienceOptionRadioButton)
    .find(`[value="${years}"]`);
  }

  private professionOption(prof: string): Cypress.Chainable {
    return cy.get(this.professionCheckbox)
    .find(`[value="${prof}"]`);
  }

  private toolsOption(tool: string): Cypress.Chainable {
    return cy.get(this.toolsOptionCheckbox)
    .find(`[value="${tool}"]`);
  }

  private continentsOption(continents: string): Cypress.Chainable {
    return cy.get(this.continentDropdown)
    .find(`[value="${continents}"]`);
  }

  public getPageTitle(): Cypress.Chainable {
    return cy.get(this.pageTitleLabel);
  }

  public fillForm(form: PersonalInformation) {
    debugger;
    cy.get(this.firstNameField).type(form.firstName);
    cy.get(this.lastNameField).type(form.lastName);
    this.getSexOption(form.sex).click();
    this.experienceOption(form.experience).click();

    for (const name of form.profession) {
      this.professionOption(name).click();
    }
    for (const name of form.tools) {
      this.toolsOption(name).click();
    }
    this.continentsOption(form.continent).click();
  }
}
