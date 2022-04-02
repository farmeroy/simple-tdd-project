import React from 'react'
import { screen, cleanup } from '@testing-library/react'
import Login from '../components/Login'


afterEach(cleanup)

test('calls onSubmit with username and password', () => {
  const handleSubmit = jest.fn();
  const {getByLabelText, getByText} = renderIntoDocument(<Login onSubmit={handleSubmit} />)
  getByLabelText(/username/i).value = 'chuck';
  getByLabelText(/password/i).value = 'norris';
})
