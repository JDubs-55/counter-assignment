// import necessary react testing library helpers here
//import the Counter component here
import {render, screen, fireEvent } from '@testing-library/react'
import Counter from '../components/Counter';

beforeEach(() => {
  // Render the Counter component here
})

test('renders counter message', () => {
  // Complete the unit test below based on the objective in the line above
  render(<Counter />);
  const counterMessage = screen.getByText("Counter");
  expect(counterMessage).toBeInTheDocument();
});

test('should render initial count with value of 0', () => {
  // Complete the unit test below based on the objective in the line above
  render(<Counter />);
  const counterValue = screen.getByText("0");
  expect(counterValue).toBeInTheDocument();
});

test('clicking + increments the count', () => {
  // Complete the unit test below based on the objective in the line above
  
  render(<Counter />);

  fireEvent.click(screen.getByText("+"));

  const counterValue = screen.getByText("1");
  expect(counterValue).toBeInTheDocument();
  
});

test('clicking - decrements the count', () => {
  // Complete the unit test below based on the objective in the line above
  render(<Counter />);

  fireEvent.click(screen.getByText("-"));

  const counterValue = screen.getByText("-1");
  expect(counterValue).toBeInTheDocument();
});
