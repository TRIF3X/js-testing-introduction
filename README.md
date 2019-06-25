# Testing

## Types of Tests:
- Unit Tests: Fully isolated (testing one function)
- Integration Tests: With dependancies (testing a function that calls a function)
- End to End Testing(E2E): Full flow, validating the DOM after a click

## Testing Setup:
- Test Runner(unit & integration): Execute tests and summarize results
    - Mocha, Jest
- Assertion Library(unit & integration): Define testing logic, conditions
    - Chat, Jest
- Headless Browser(E2E): simulate browser interaction
    - Puppeteer

## Tips:
- Check for false positives
- Check that the given input will give the desired output
- Check inputs are valid
