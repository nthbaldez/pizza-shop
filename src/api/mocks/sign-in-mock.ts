import { http, HttpResponse } from 'msw'

import { SignInBody } from '../sign-in'

// HttpRequestHandler foi tipado com o tipo do Body do SignIn. A função post pode receber dois generics:
// primeiro são os Params, o segundo é o RequestBody
export const signInMock = http.post<never, SignInBody>(
  '/authenticate',
  async ({ request }) => {
    const { email } = await request.json()

    if (email === 'johndoe@example.com') {
      return new HttpResponse(null, {
        status: 200,
        headers: {
          'Set-Cookie': 'auth=sample-jwt',
        },
      })
    }

    return new HttpResponse(null, { status: 401 })
  },
)
