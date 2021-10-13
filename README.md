# Timer App using TDD (Test Driven Development) approach

This is a react app using TDD approach with testing library React.

# New Learnings

1. `Use of multiple states:` When working on time based app, putting all state in one useState-Hook causes issue, specifically when updating the state within the timeout time gap.

2. `clearTimeout(timeOut):` Must use clearTimeout to avoid side-by-side non-required operations.
