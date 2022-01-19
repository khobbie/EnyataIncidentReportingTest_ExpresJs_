
CREATE TABLE public.incidents
(
    id integer NOT NULL DEFAULT nextval('incidents_id_seq'::regclass),
    client_id numeric,
    incident_desc text COLLATE pg_catalog."default",
    city character varying COLLATE pg_catalog."default",
    country character varying COLLATE pg_catalog."default",
    date date,
    weather_report json,
    CONSTRAINT incidents_pkey PRIMARY KEY (id)
)
