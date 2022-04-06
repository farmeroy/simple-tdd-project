import Form from '../components/Form'
import { render, screen } from "@testing-library/react"
import userEvent from '@testing-library/user-event'

describe("<Form />", () => {
  

  test("Renders form", () => {
    render(<Form />);
    const formEl = screen.getByRole('form');
    expect(formEl).toBeInTheDocument();
  })

  test("renders 'username' input", () => {
    render(<Form />)
    const labelEl = screen.getByLabelText('username', {exact: false} );
    expect(labelEl).toBeInTheDocument();
  })

  test("renders 'email input'", () => {
    render(<Form/>);
    const label = screen.getByLabelText(/email/i);
    expect(label).toBeInTheDocument();
  })

  test("Renders 'sign up' button", () => {
    render(<Form />)
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
  })

  test("renders 'first name' input", () => {
    render(<Form />)
    const label = screen.getByLabelText(/first name/i);
    expect(label).toBeInTheDocument();
  })

  test("renders 'last name' input", () => {
    render(<Form />);
    const label = screen.getByLabelText(/last name/i)
    expect(label).toBeInTheDocument();
  })

  test("Render an error message for all invalid input fields if all fields are empty and submit button is pushed", () => {
    render(<Form />)
    const button = screen.getByRole('button');
    userEvent.click(button);
    expect(screen.getByText(/username field is required/i)).toBeInTheDocument();
    expect(screen.getByText(/first name field is required/i)).toBeInTheDocument();
    expect(screen.getByText(/username field is required/i)).toBeInTheDocument();
    expect(screen.getByText(/email field is required/i)).toBeInTheDocument();
  })

})
