# Next Js Boilerplate

This boilerplate is starting point of any project with all batteries included. you can directly start development without spending time on project setup.

## Tech Stack

**Client:** [NextJs] (https://nextjs.org/), typescript

**Styling:** [Antd](https://ant.design/), [Storybook](https://storybook.js.org/), Styled Components

**Code Formatter:** [Prettier](https://prettier.io/), [Eslint](https://eslint.org/)

### Developer Guide

1. This boilerplate has been setup with three layouts,
   i) Base layout for all pages in app
   ii) Auth layout for authentication pages i.e. login, signup in (auth)
   iii) Dashboard Layout for admin pages with header, sidebar and content in (dashboard)

2. You can modify the ant design tokens in themeVariable.ts file.

3. You can add color variables in variable.ts file as per according to your project.

4. For theming we have added two themes i.e. default and dark.

5. Prior to committing, ensure you verify and resolve linting issues by running the following commands:

   - `npm run lint`
   - `npm run lint:fix`

6. Add comments when necessary for better understanding, and make further improvements as needed.

7. Customize the ESLint rules in the .eslintrc.json file to meet your project's specific requirements.

### Other useful scripts

- `npm run build` to build a project
- `npm run dev` to run (dev) a project
- `npm run build` to build a project
- `npm run preview` to run preview a project
- `npm run lint` to lint a project
- `npm run lint:fix` to lint:fix a project
- `npm run format` to format a project
- `npm run storybook` to start storybook dev server
- `npm run build-storybook` to build storybook
