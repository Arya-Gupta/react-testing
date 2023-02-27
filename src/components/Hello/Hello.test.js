import { render, screen } from "@testing-library/react"; // importing render method and the screen object from React Testing Library
import { Hello } from "./Hello";

test("Hello renders correctly", () => {
  render(<Hello />); // create a virtual DOM of the Hello component against which we test our assertions
  const textElement = screen.getByText("Hello"); // check whether the text "Hello" is present by querying the global screen object
  expect(textElement).toBeInTheDocument(); // using expect method from Jest to test our assertion
});

/*
The test method is globally available in a create-react-app project.
Argument 1 - name of the test
Argument 2 - function that contains the expectation to test
*/
