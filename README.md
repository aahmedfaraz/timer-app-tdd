# Timer App using TDD (Test Driven Development) approach

This is a react app using TDD approach with testing library React.

# New Learnings

1. `Use of multiple states:` When working on time based app, putting all state in one useState-Hook causes issue, specifically when updating the state within the timeout time gap.

2. `clearTimeout(timeOut):` Must use clearTimeout to avoid side-by-side non-required operations.

3. `sinon`** + @types/sinon**, Using npm package **sinon** for useFakeTimers

```js
// Time-Travels🕗 with sinon's FakeTimers
let clock: any;
// initialize fake timer before every test
beforeEach(() => {
  clock = sinon.useFakeTimers();
});
// restore it after every test
afterEach(() => {
  clock.restore();
});
// use it like
clock.tick(5000); // for moving 5 seconds in future
```
