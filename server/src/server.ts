import express, { Request, Response, NextFunction } from 'express';

const app = express();
const port = process.env.PORT || 3000;

// Eksempel på en asynkron funksjon
const someAsyncFunction = async (): Promise<string> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Data fra asynkron funksjon");
        }, 1000);
    });
};

// Asynkron rute med try-catch
app.get('/example', async (req: Request, res: Response, next: NextFunction) => {
    try {
        const result = await someAsyncFunction();
        res.json({ message: result });
    } catch (err) {
        next(err);  // Videreformidle feil til global feilhåndtering
    }
});

// En annen rute for testing
app.get('/error', async (req: Request, res: Response, next: NextFunction) => {
    try {
        throw new Error("En feil oppstod!");
    } catch (err) {
        next(err);  // Videreformidle feil til global feilhåndtering
    }
});

// Global feilhåndtering (for å fange alle feil i applikasjonen)
app.use((err: any, req: Request, res: Response, next: NextFunction) => {
    console.error(err.stack);  // Logg feilen i konsollen
    res.status(500).send('Noe gikk galt!');  // Send tilbake en generell feil
});

// Start serveren
app.listen(port, () => {
    console.log(`Serveren kjører på http://localhost:${port}`);
});
