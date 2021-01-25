CREATE TABLE owners(
    owner_id serial,
    name character varying(50),
    email character varying(50),
    password character varying(50)
);

CREATE TABLE properties (
	property_id serial PRIMARY KEY,
    name character varying(50),
    address character varying(50),
    owner_id INT,
   	FOREIGN KEY(owner_id) REFERENCES owners(owner_id)
);

CREATE TABLE tenants (
	tenant_id serial PRIMARY KEY,
    name character varying(50),
    email character varying(50),
    building_id INT,
   	FOREIGN KEY(building_id) REFERENCES properties(property_id)
);

CREATE TABLE payments (
	payment_id serial PRIMARY KEY,
    mode character varying(50),
    paid_on TIMESTAMP,
    amount NUMERIC,
	approved boolean,
	tenant_id INT,
	building_id INT,
	FOREIGN KEY(tenant_id) REFERENCES tenants(tenant_id)
);