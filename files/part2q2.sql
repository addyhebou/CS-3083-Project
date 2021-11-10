CREATE TABLE IF NOT EXISTS public.airline
(
    "airline_ID" character(3) COLLATE pg_catalog."default" NOT NULL,
    name character varying(25) COLLATE pg_catalog."default" NOT NULL,
    CONSTRAINT airline_pkey PRIMARY KEY ("airline_ID")
)
 
CREATE TABLE IF NOT EXISTS public.airline_staff_member
(
    username character varying(25) COLLATE pg_catalog."default" NOT NULL,
    password character varying(25) COLLATE pg_catalog."default" NOT NULL,
    first_name character varying(25) COLLATE pg_catalog."default" NOT NULL,
    last_name character varying(25) COLLATE pg_catalog."default",
    birth_date character varying(10) COLLATE pg_catalog."default",
    phone character varying(15) COLLATE pg_catalog."default",
    CONSTRAINT airline_staff_member_pkey PRIMARY KEY (username)
)

CREATE TABLE IF NOT EXISTS public.airplane
(
    "plane_ID" character varying(15) COLLATE pg_catalog."default" NOT NULL,
    airline character varying(10) COLLATE pg_catalog."default" NOT NULL,
    num_of_seats integer NOT NULL,
    CONSTRAINT plane_pkey PRIMARY KEY ("plane_ID"),
    CONSTRAINT airline_fkey FOREIGN KEY (airline)
        REFERENCES public.airline ("airline_ID") MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
)

CREATE TABLE IF NOT EXISTS public.airport
(
    code character varying(3) COLLATE pg_catalog."default" NOT NULL,
    name character varying(50) COLLATE pg_catalog."default" NOT NULL,
    city character varying(50) COLLATE pg_catalog."default" NOT NULL,
    CONSTRAINT airport_pkey PRIMARY KEY (code)
)

CREATE TABLE IF NOT EXISTS public.customer
(
    name character varying(15) COLLATE pg_catalog."default" NOT NULL,
    email character varying(25) COLLATE pg_catalog."default" NOT NULL,
    password character varying(25) COLLATE pg_catalog."default" NOT NULL,
    phone character varying(50) COLLATE pg_catalog."default" NOT NULL,
    birth_date character varying(8) COLLATE pg_catalog."default",
    CONSTRAINT customer_pkey PRIMARY KEY (email)
)

CREATE TABLE IF NOT EXISTS public.customer_address
(
    email character varying(25) COLLATE pg_catalog."default" NOT NULL,
    street_address character varying(50) COLLATE pg_catalog."default" NOT NULL,
    city character varying(50) COLLATE pg_catalog."default" NOT NULL,
    state character varying(50) COLLATE pg_catalog."default" NOT NULL,
    postal_code character(5) COLLATE pg_catalog."default" NOT NULL,
    "Apt, Suite, Box Num" character varying(50) COLLATE pg_catalog."default" NOT NULL,
    country character varying(25) COLLATE pg_catalog."default",
    CONSTRAINT addresses_pkey PRIMARY KEY (email),
    CONSTRAINT email_fkey FOREIGN KEY (email)
        REFERENCES public.customer (email) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
)

CREATE TABLE IF NOT EXISTS public.flight
(
    flight_num integer NOT NULL,
    airline character varying(25) COLLATE pg_catalog."default" NOT NULL,
    depature_date character varying(10) COLLATE pg_catalog."default" NOT NULL,
    departure_time character varying(5) COLLATE pg_catalog."default" NOT NULL,
    arrival_date character varying(10) COLLATE pg_catalog."default" NOT NULL,
    arrival_time character varying(5) COLLATE pg_catalog."default" NOT NULL,
    price integer NOT NULL,
    status character varying COLLATE pg_catalog."default",
    CONSTRAINT flight_pkey PRIMARY KEY (flight_num, depature_date, departure_time),
    CONSTRAINT airline_fkey FOREIGN KEY (airline)
        REFERENCES public.airline ("airline_ID") MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
)

CREATE TABLE IF NOT EXISTS public.ticket
(
    ticket_id character varying(8) COLLATE pg_catalog."default" NOT NULL,
    sold_price integer NOT NULL,
    date character varying(10) COLLATE pg_catalog."default" NOT NULL,
    "time" character varying(5) COLLATE pg_catalog."default" NOT NULL,
    card_type character varying(15) COLLATE pg_catalog."default",
    card_number character varying(15) COLLATE pg_catalog."default",
    name_on_card character varying(15) COLLATE pg_catalog."default",
    exp_date character varying(10) COLLATE pg_catalog."default",
    CONSTRAINT ticket_pkey PRIMARY KEY (ticket_id)
)

