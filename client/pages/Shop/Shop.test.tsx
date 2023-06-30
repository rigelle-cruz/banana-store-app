//@vitest-environment jsdom
import { expect, test, vi, beforeEach } from 'vitest'

import { cleanup, render, screen } from '@testing-library/react'
import matchers from '@testing-library/jest-dom/matchers'
import { QueryClient, QueryClientProvider } from 'react-query'
import nock from 'nock'
import * as auth0 from '@auth0/auth0-react'

import Shop from './Shop'
import { Song } from '../../../types/Song'

const queryClient = new QueryClient()

expect.extend(matchers)
vi.mock('./apis/shop')


beforeEach(cleanup)
;(auth0 as auth0.User).useAuth0 = vi.fn().mockReturnValue({
  isAuthenticated: true,
  isLoading: false,
  getAccessTokenSilently: vi.fn(),
})

test('MySongsPage fetches a song array', async () => {
  const songs: Song[] = [
    {
      id: '1',
      title: 'Song Title',
      artist: 'Song Artist',
      genre: 'Song Genre',
      link: 'https://www.youtube.com/watch?v=1',
      comments: 'comment',
    },
    {
      id: '2',
      title: 'Song Title2',
      artist: 'Song Artist2',
      genre: 'Song Genre2',
      link: 'https://www.youtube.com/watch?v=2',
      comments: 'comment',
    },
  ]

  // intercept http requests to respond with our mock data
  nock('http://localhost').get('/api/v1/songs').reply(200, songs)

  render(
    <QueryClientProvider client={queryClient}>
      <MySongsPage />
    </QueryClientProvider>
  )

  const songTitles = await screen.findAllByRole('heading', { level: 3 })
  const artists = await screen.findAllByRole('heading', { level: 4 })
  expect(songTitles).toHaveLength(2)
  expect(songTitles[0].textContent).toMatch('Song Title')
  expect(songTitles[1].textContent).toMatch('Song Title2')
  expect(artists[0].textContent).toMatch('Song Artist')
  expect(artists[1].textContent).toMatch('Song Artist')
})