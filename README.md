# React Native FlatList TypeError: Cannot read properties of undefined (reading 'name')

This repository demonstrates a common error in React Native when using FlatList to render items before data is fetched. It showcases the bug and its solution.

## Bug
The `bug.js` file contains the buggy code.  The FlatList attempts to render items even if the `this.state.items` array is not populated, leading to a `TypeError: Cannot read properties of undefined (reading 'name')`.

## Solution
The `bugSolution.js` file provides the corrected code. The solution adds proper loading state management and conditional rendering to prevent the error. It only renders the FlatList once data is available.   This demonstrates handling asynchronous operations gracefully and managing the loading state effectively.

## How to reproduce
1. Clone the repository.
2. Navigate to the repository in your terminal.
3. Run `npm install`
4. Run the app using your preferred React Native method (e.g., `npx react-native run-android` or `npx react-native run-ios`).
5. Observe the initial error in `bug.js` and the corrected behavior in `bugSolution.js`.