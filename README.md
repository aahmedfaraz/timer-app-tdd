# Timer App using TDD (Test Driven Development) approach

This is a react app using TDD approach with testing library React.

# New Learnings

1. `Use of multiple states:` When working on time based app, putting all state in one useState-Hook causes issue, specifically when updating the state within the timeout time gap.

2. `clearTimeout(timeOut):` Must use clearTimeout to avoid side-by-side non-required operations.

3. `Jest FakeTimers:` We can use setTimeout or setInterval simply but to avoid waiting upto the given time we can use FakeTimers, that's how to use em,

```js
// Time Traveling with Jest FakeTimers
import { act } from "@testing-library/react";

describe("MyComp Component", () => {
  beforeEach(() => {
    jest.useFakeTimers(); // Must call is before rendering
    render(<MyComp />);
  });
  afterEach(() => {
    jest.useRealTimers();
  });

  test("should ...", () => {
    // button clicked
    act(() => {
      // must be inside act function
      jest.advanceTimersByTime(20000); // Go 20 seconds in future
    });
    // See result
  });
});
```
