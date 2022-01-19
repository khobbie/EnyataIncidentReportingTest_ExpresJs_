
CREATE TABLE public.incidents
(
    id serial  PRIMARY KEY,
    client_id numeric,
    incident_desc text COLLATE pg_catalog."default",
    city character varying COLLATE pg_catalog."default",
    country character varying COLLATE pg_catalog."default",
    date date,
    weather_report json
)
