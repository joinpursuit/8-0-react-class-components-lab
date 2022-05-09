# React Class Components Lab

Refactor functional components to be class components, in order to get a bit of practice.

---

## Lab Setup

### Getting started

1. Fork and clone this repository.

1. Navigate to the cloned repository's directory on your command line. Then, run the following command:

   ```
   npm install
   ```

   This will install the libraries needed to run the tests.

1. Open up the repository in VSCode. Follow the instructions below to complete the Lab.

### Tests

To run the tests, you can run the following command from the command line. You will need to be in the root directory of your local directory.

```
npm test
```

This will run Jest tests.

### Test Watcher

If you'd like to have your tests reload as you are working on your code, you can run the following command.

```
npm run watch
```

Follow the on-screen prompts to run some or all of the tests.

## Instructions

In this lab, you will _refactor_ some functional components so that they are React class components.

Run the app using `npm start`. Go to `localhost:3000` in your browser and you will see a very basic social media feed.

Take a look at the components in the `src` folder. You should see `.js`, `.css`, and `.test.js` files for these components:`Ad`, `App`, `ContactList`, `Feed`, and `Post`.

Run the tests with `npm test`. You will notice that each test fails for the same assertion: `<Component /> has been refactored as a class component.`

npm audit fix --force

### Stretch goals

#### Improve the application

Add a `Profile` section to the social media app.

- It should be as a separate `<Profile />` component.
- It should be a React class component.
- It should include a person's photo, name, and short bio.
- Render the `<Profile />` component from the `<App />` component.
- The `<Profile />` should appear to the right of the `<ContactList />`

#### Refactor an old application

Refactor the profile page you made in [the React Introduction Lab](https://github.com/joinpursuit/Pursuit-Core-Web-React-Introduction-Lab) so that all of the components are class components.

- All components should be React class components.
- Your lab should still look the same way it did before in the web browser.
- All of the unit tests should still pass.
