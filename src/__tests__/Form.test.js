import Form from '../components/Form'
import { render, screen } from "@testing-library/react"

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

  test("Renders 'login' button", () => {
    render(<Form />)
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
  })

})
