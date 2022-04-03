import Greeting from "../components/Greeting";
import { render, screen } from "@testing-library/react";
import userEvent from '@testing-library/user-event';

describe("<Greeting />", () => {

  test("renders Hello World", () => {
    render(<Greeting />);
    const helloWorldEl = screen.getByText("Hello World", { exact: false });
    expect(helloWorldEl).toBeInTheDocument();
  });

  test("renders 'good to see you' text if the button isn't clicked", () => {
    render(<Greeting />);
    const textEl = screen.getByText("good to see you", {exact: false});
    expect(textEl).toBeInTheDocument();
  })

  test("renders 'bye bye' if the button is clicked", () => {
    render(<Greeting />);
    const button = screen.getByRole('button');
    userEvent.click(button);
    const textEl = screen.getByText('bye bye', {exact: false})
    expect(textEl).toBeInTheDocument();
  })

  test("does not render 'good to see you' after button is clicked", () => {
    render(<Greeting />);
    const button = screen.getByRole('button');
    const textEl = screen.queryByText('good to see you', {exact: false})
    userEvent.click(button);
    expect(textEl).not.toBeInTheDocument();
  })
});
