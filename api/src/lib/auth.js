// Define what you want `currentUser` to return throughout your app. For example,
// to return a real user from your database, you could do something like:
//
//   export const getCurrentUser = async ({ email }) => {
//     return await db.user.findOne({ where: { email } })
//   }

import { AuthenticationError } from '@redwoodjs/api'

export const getCurrentUser = async (_decoded, { type, token }) => {
  return {
    hello: 'I come from the `getCurrentUser` function on the api side.',
    type,
    token: token.replace(/\w/g, '*'),
  }
}

// Use this function in your services to check that a user is logged in, and
// optionally raise an error if they're not.

export const requireAuth = () => {
  if (!context.currentUser) {
    throw new AuthenticationError("You don't have permission to do that.")
  }
}
