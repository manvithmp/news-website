import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import Search from '../src/pages/search';
import '@testing-library/jest-dom/extend-expect';

const mock = new MockAdapter(axios);

describe('Search', () => {
  it('renders search results correctly', async () => {
    mock.onGet('https://newsapi.org/v2/everything').reply(200, {
      articles: [
        {
          title: 'Search Result 1',
          description: 'Description 1',
          url: 'https://example.com/1',
          urlToImage: 'https://example.com/image1.jpg',
        },
        {
          title: 'Search Result 2',
          description: 'Description 2',
          url: 'https://example.com/2',
          urlToImage: 'https://example.com/image2.jpg',
        },
      ],
    });

    render(<Search />);
    fireEvent.change(screen.getByPlaceholderText('Search for news...'), { target: { value: 'test' } });
    fireEvent.click(screen.getByText('Search'));

    expect(await screen.findByText('Search Result 1')).toBeInTheDocument();
    expect(await screen.findByText('Search Result 2')).toBeInTheDocument();
  });

  it('displays loading state correctly', () => {
    render(<Search />);
    fireEvent.change(screen.getByPlaceholderText('Search for news...'), { target: { value: 'test' } });
    fireEvent.click(screen.getByText('Search'));

    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });

  it('displays error state correctly', async () => {
    mock.onGet('https://newsapi.org/v2/everything').reply(500);

    render(<Search />);
    fireEvent.change(screen.getByPlaceholderText('Search for news...'), { target: { value: 'test' } });
    fireEvent.click(screen.getByText('Search'));

    expect(await screen.findByText('Error: Request failed with status code 500')).toBeInTheDocument();
  });
});