import Express from 'express';
import BodyParser from 'body-parser';

import ownerRoutes from './Routes/owners';
import propertyRoutes from './Routes/properties';
import paymentRoutes from './Routes/payments';
import tenantRoutes from './Routes/tenants';

const port = process.env.PORT || 6000;
const app = Express();

app.use(BodyParser.urlencoded({ extended: false }));
app.use(BodyParser.json());

app.use('/owner', ownerRoutes);
app.use('/payment', paymentRoutes);
app.use('/tenant', tenantRoutes);
app.use('/property', propertyRoutes);

app.use('/', (req, res) => {
	res.send('<h1>Connected to Investabook-Server</h1>');
});

app.use((req, res) => {
	res.status(400).send('<h1>Page not found</h1>');
});

app.listen(port, () => {
	console.log(`Conncted to port ${port}`);
});
