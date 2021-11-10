-- a. Show all the future flights in the system.
SELECT * FROM public.flight
WHERE status = 'on-time';

-- b. Show all of the delayed flights in the system.
SELECT * FROM public.flight
WHERE status = 'delayed';

-- c. Show the customer names who bought the tickets.
SELECT name_on_card FROM public.ticket;

-- d. Show all of the airplanes owned by the airline (such as "China Eastern")
SELECT * FROM public.airplane
WHERE airline = 'CEA';