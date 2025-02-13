import React from 'react';
import { render, screen } from '@testing-library/react';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import Home from '../src/pages/index';
import '@testing-library/jest-dom/extend-expect';

const mock = new MockAdapter(axios);

describe('Headlines', () => {
  it('renders headlines correctly', async () => {
    mock.onGet('https://newsapi.org/v2/top-headlines').reply(200, {
      articles: [
        {
          title: 'Headline 1',
          description: 'Description 1',
          url: 'https://example.com/1',
          urlToImage: 'https://example.com/image1.jpg',
        },
        {
          title: 'Headline 2',
          description: 'Description 2',
          url: 'https://example.com/2',
          urlToImage: 'https://example.com/image2.jpg',
        },
      ],
    });

    render(<Home />);
    expect(await screen.findByText('Headline 1')).toBeInTheDocument();
    expect(await screen.findByText('Headline 2')).toBeInTheDocument();
  });

  it('displays loading state correctly', () => {
    render(<Home />);
    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });

  it('displays error state correctly', async () => {
    mock.onGet('https://newsapi.org/v2/top-headlines').reply(500);

    render(<Home />);
    expect(await screen.findByText('Error: Request failed with status code 500')).toBeInTheDocument();
  });
});