import Express from 'express';
import BodyParser from 'body-parser';
import cors from 'cors';

import ownerRoutes from './Routes/owners';
import propertyRoutes from './Routes/properties';
import paymentRoutes from './Routes/payments';
import tenantRoutes from './Routes/tenants';
import authRoutes from './Routes/auth';

const corsOpts = {
	origin: '*',
	methods: ['GET', 'POST', 'PUT', 'DELETE'],
	allowedHeaders: ['Content-Type'],
};

const port = process.env.PORT || 6000;
const app = Express();

// app.use(cors(corsOpts));

app.use(BodyParser.urlencoded({ extended: false }));
app.use(BodyParser.json());

const setHeaders = (req: any, res: any, next: any) => {
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
	res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
	res.setHeader('x-access-token', '*');
	next();
};

const setHeadersAuth = (req: any, res: any, next: any) => {
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
	res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
	res.setHeader('Access-Control-Allow-Credentials', 'true');
	next();
};

app.use('/owner', setHeaders, ownerRoutes);
app.use('/payment', setHeaders, paymentRoutes);
app.use('/tenant', setHeaders, tenantRoutes);
app.use('/property', setHeaders, propertyRoutes);
app.use('/auth', setHeadersAuth, authRoutes);

app.use('/', (req, res) => {
	res.send('<h1>Connected to Investabook-Server</h1>');
});

app.use((req, res) => {
	res.status(400).send('<h1>Page not found</h1>');
});

app.listen(port, () => {
	console.log(`Conncted to port ${port}`);
});
