// pages/api/auth/login.js

import { signIn } from 'next-auth/react';

export default async (req, res) => {
  try {
    await signIn('credentials', {
      username: req.body.username,
      password: req.body.password
    });

    return res.status(200).end();
  } catch (error) {
    return res.status(401).end();
  }
}
