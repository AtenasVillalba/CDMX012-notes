// import { render, screen } from '@testing-library/react';
// import App from '../App';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });
import { signInWithGoogle } from "../Lib/firebase";

jest.mock("../lib/Firebase-imports");

describe("signInWithGoogle", () => {
  it("should be a function", async () => {
    expect(typeof signInWithGoogle).toBe("function");
  });

  it ("should be create log in with google", async()=>{})
});

