# ci-demo

A tiny Node.js project for learning how to build a CI/CD pipeline from scratch.

## What's inside

- `src/calculator.js` — a few simple functions (add, subtract, divide)
- `test/calculator.test.js` — tests using Node's built-in test runner
- `package.json` — defines `build`, `test`, and `lint` scripts

## Running locally

```bash
npm test      # runs the tests
npm run build # placeholder build step
```

No dependencies to install — it uses only what ships with Node.js (v18+).

## The plan

We build the pipeline in stages:

1. Get it running locally and push to GitHub
2. Add a CI workflow that builds + tests on every push
3. Make a test fail on purpose and watch CI catch it
4. Add linting / more checks
5. Add a deploy stage (delivery vs deployment)
