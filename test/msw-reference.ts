// The following example demonstrates how to use MSW with Vitest.
// It sets up a server with REST and GraphQL handlers, starts the server before all tests, closes it after all tests, and resets handlers after each test.
// I grabbed it from the documentation to use as a reference if we get to the network mocking portion
// of the day.
import { afterAll, afterEach, beforeAll } from 'vitest'
import { setupServer } from 'msw/node'
import { HttpResponse, graphql, http } from 'msw'

const posts = [
  {
    userId: 1,
    id: 1,
    title: 'first post title',
    body: 'first post body',
  },
  // ...
]

export const restHandlers = [
  http.get('https://rest-endpoint.example/path/to/posts', () => {
    return HttpResponse.json(posts)
  }),
]

const graphqlHandlers = [
  graphql.query('ListPosts', () => {
    return HttpResponse.json(
      {
        data: { posts },
      },
    )
  }),
]

const server = setupServer(...restHandlers, ...graphqlHandlers)

// Start server before all tests
beforeAll(() => server.listen({ onUnhandledRequest: 'error' }))

//  Close server after all tests
afterAll(() => server.close())

// Reset handlers after each test `important for test isolation`
afterEach(() => server.resetHandlers())
