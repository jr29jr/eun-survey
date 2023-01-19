CREATE TABLE public.survey (
	title varchar(255) NULL,
	id serial4 NOT NULL,
	CONSTRAINT survey_pkey PRIMARY KEY (id)
);

CREATE TABLE public.question (
	survey_id int4 NULL,
	"content" varchar(255) NULL,
	id serial4 NOT NULL,
	CONSTRAINT question_pkey PRIMARY KEY (id)
);

CREATE TABLE public."option" (
	question_id int4 NULL,
	"content" varchar(255) NULL,
	score int4 NULL,
	id serial4 NOT NULL,
	CONSTRAINT option_pkey PRIMARY KEY (id)
);

CREATE TABLE public.user_answer (
	option_id int4 NULL,
	user_answer_id int4 NULL,
	id serial4 NOT NULL,
	CONSTRAINT user_answer_pkey PRIMARY KEY (id)
);

CREATE TABLE public."user" (
	nickname varchar(30) NULL,
	id serial4 NOT NULL,
	CONSTRAINT user_pkey PRIMARY KEY (id)
);