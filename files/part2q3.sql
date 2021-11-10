-- Adding a China Express Airline
INSERT INTO public.airline
VALUES ('CEA', 'China Express Airlines');

-- Adding at least Two airports named "JFK" in NYC and "PVG" in Shanghai.
INSERT INTO public.airport
VALUES ('JFK', 'John F Kennedy', 'NYC');
INSERT INTO public.airport
("code", "name", "city")
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
(plane_ID, airline, num_of_seats)
VALUES ('CEA001', 'CEA', 135);
INSERT INTO public.airplane
(plane_ID, airline, num_of_seats)
VALUES ('UAL001', 'UAL', 200);
INSERT INTO public.airplane
(plane_ID, airline, num_of_seats)
VALUES ('AAL001', 'AAL', 150);

-- Insert At least One airline Staff working for China Eastern.
INSERT INTO public.airline_staff_member
(username, password, first_name, last_name, birth_date)
VALUES('yaofei', 'shadoshadoshado', 'Yao', 'Fei', '08-08-1965');

-- Insert several flights with on-time, and delayed statuses.
INSERT INTO public.flight
(flight_num, airline, departure_date, departure_time, arrival_date, arrival_time, price, "status")
VALUES (0001, 'AAL', '11-24-2021', '05:32', '11-24-2021', '12:12', '450', 'on-time');
INSERT INTO public.flight
(flight_num, airline, departure_date, departure_time, arrival_date, arrival_time, price, "status")
VALUES (0001, 'UAL', '11-24-2021', '15:21', '11-24-2021', '17:08', '230', 'delayed');


--  Insert some tickets for corresponding flights 
--  and insert some purchase records (customers bought some tickets).
INSERT INTO public.ticket
("ticket_id", "sold_price", "date", "time", "card_type", "card_number", "name_on_card", "exp_date")
VALUES ('00000001', '450', '11-01-2021', '04:23', 'credit', '1029384756', 'Addy Hebou', '02-13-2025');
INSERT INTO public.ticket
("ticket_id", "sold_price", "date", "time", "card_type", "card_number", "name_on_card", "exp_date")
VALUES ('00000002', '450', '11-07-2021', '12:31', 'debit', '5647382910', 'Daijah Etienne', '04-17-2022');