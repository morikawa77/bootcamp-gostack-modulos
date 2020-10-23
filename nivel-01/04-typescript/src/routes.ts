import { Request, Response } from 'express';
import createUser from './services/CreateUser';

export function helloWorld(request: Request, response: Response) {
  const user = createUser({
    email: 'morikawa77@gmail.com',
    password: '12345',
    techs: [
      'Node.js',
      'ReactJS',
      'React Native',
      { title: 'JavaScript', experience: 100 },
    ],
  });

  return response.json({ message: "Hello World" });
}