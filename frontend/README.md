# Full Stack Test - Frontend Angular

This project is built using [Nx](https://nx.dev), a powerful set of extensible dev tools for monorepos, [Angular](https://angular.io/), a platform for building mobile and desktop web applications, and [NgRx](https://ngrx.io/), a framework for reactive state management in Angular applications.

## Getting Started

### Prerequisites

Before running the project, ensure you have the following installed:

- Node.js (Preferably the latest stable version)
- npm (Node Package Manager)
- Angular CLI (`npm install -g @angular/cli`)
- Nx CLI (`npm install -g nx`)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/sunnyDev93/Beaconcure.git
   cd frontend
   ```

2. Navigate to the project directory:

   ```bash
   cd angular-app
   ```

3. Install the dependencies:
   ```bash
   npm install
   ```

### Running the Application

- Run the development server:

  ```bash
  nx serve
  ```

  Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

- Build the project:

  ```bash
  nx build
  ```

  The build artifacts will be stored in the `dist/` directory.

- Running unit tests:

  ```bash
  nx test
  ```

  Execute the unit tests via [Jest](https://jestjs.io/).

- Running end-to-end tests:
  ```bash
  nx e2e
  ```
  Execute the end-to-end tests via [Cypress](https://www.cypress.io/).

## Project Structure

Describe the architecture of your project here. Include details about the Nx workspace, Angular modules, components, NgRx store, etc.

## Contributing

We welcome contributions to the project. To contribute:

1. Fork the repository.
2. Create a new feature branch: `git checkout -b my-new-feature`.
3. Make your changes and commit them: `git commit -am 'Add some feature'`.
4. Push to the branch: `git push origin my-new-feature`.
5. Submit a pull request.

## License


## Further Help

To get more help on the Nx use `nx help` or check out the [Nx Documentation](https://nx.dev/angular).

For more information on Angular, check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

For more information on NgRx, visit the [NgRx official documentation](https://ngrx.io/docs).
