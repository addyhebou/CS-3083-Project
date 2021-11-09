-- Adding a China Express Airline
INSERT INTO public.airline
VALUES ('CEA', 'China Express Airlines');

-- Adding at least Two airports named "JFK" in NYC and "PVG" in Shanghai.
INSERT INTO public.airport
VALUES ('JFK', 'John F Kennedy', 'NYC');
INSERT INTO public.airport
VALUES ('PVG', 'Shanghai Pudong International', 'Shanghai');
 
-- Insert at least three customers with appropriate names and other attributes.
INSERT INTO public.customer
("name", "email", "password", "phone", "birth_date")
VALUES ('Addy Hebou', 'ash594@nyu.edu', 'dynamite12', '2405959273', '12-16-2000' );

INSERT INTO public.customer
("name", "email", "password", "phone", "birth_date")
VALUES ('Jules Kho', 'jgk332@nyu.edu', 'banana2929', '6103601668', 'NULL' );

INSERT INTO public.customer
("name", "email", "password", "phone", "birth_date")
VALUES ('Daijah Etienne', 'de937@nyu.edu', 'jukebox123', '8772410000', 'NULL' );


-- Insert at least three airplanes.
INSERT INTO public.airplane
VALUES ('CEA001', 'CEA', 135);
INSERT INTO public.airplane
VALUES ('UAL001', 'UAL', 200);
INSERT INTO public.airplane
VALUES ('AAL001', 'AAL', 150);

-- Insert At least One airline Staff working for China Eastern.
INSERT INTO public.airline_staff_member
VALUES('yaofei', 'shadoshadoshado', 'Yao', 'Fei', '08-08-1965');

-- Insert several flights with on-time, and delayed statuses.
-- Insert some tickets for corresponding flights and insert some purchase records (customers