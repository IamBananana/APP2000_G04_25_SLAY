import express, { Request, Response, Router } from 'express';

const apiRouter: Router = Router();

// Definer en asynkron rutehåndterer for /api
apiRouter.get('/', async (req: Request, res: Response): Promise<void> => {
  try {
    const data = await someAsyncFunction();
    res.json({ message: 'Hello world', data });
  } catch (error: unknown) {
    if (error instanceof Error) {
      res.status(500).json({ error: 'Something went wrong', details: error.message });
    } else {
      res.status(500).json({ error: 'Unknown error occurred' });
    }
  }
});

const someAsyncFunction = async (): Promise<string> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('Async function result');
    }, 1000);
  });
};

export default apiRouter;
