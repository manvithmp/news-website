import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import CategoryNav from '../src/components/CategoryNav';
import { useRouter } from 'next/router';
import '@testing-library/jest-dom/extend-expect';

jest.mock('next/router', () => ({
  useRouter: jest.fn(),
}));

const mockPush = jest.fn();
useRouter.mockReturnValue({
  push: mockPush,
});

describe('Category Selection', () => {
  it('renders categories correctly', () => {
    render(<CategoryNav />);

    expect(screen.getByText('business')).toBeInTheDocument();
    expect(screen.getByText('entertainment')).toBeInTheDocument();
    expect(screen.getByText('general')).toBeInTheDocument();
    expect(screen.getByText('health')).toBeInTheDocument();
    expect(screen.getByText('science')).toBeInTheDocument();
    expect(screen.getByText('sports')).toBeInTheDocument();
    expect(screen.getByText('technology')).toBeInTheDocument();
  });

  it('handles category selection correctly', () => {
    render(<CategoryNav />);

    fireEvent.click(screen.getByText('business'));
    expect(mockPush).toHaveBeenCalledWith('/category/business');

    fireEvent.click(screen.getByText('technology'));
    expect(mockPush).toHaveBeenCalledWith('/category/technology');
  });
});