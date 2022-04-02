import Greeting from '../components/Greeting'
import {render, screen} from '@testing-library/react'

test('renders Hello World', () => {
  render(<Greeting/>);
  const helloWorldEl = screen.getByText('Hello World', {exact: false})
  expect(helloWorldEl).toBeInTheDocument();
})
