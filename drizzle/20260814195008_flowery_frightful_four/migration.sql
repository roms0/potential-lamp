CREATE TABLE "cards" (
	"id" varchar PRIMARY KEY,
	"created_at" timestamp(0) with time zone DEFAULT now() NOT NULL,
	"title" varchar NOT NULL,
	"title_norm" varchar NOT NULL,
	"fingerprint" varchar NOT NULL,
	"business" varchar NOT NULL,
	"status" varchar NOT NULL,
	"telegram" varchar,
	"description" varchar,
	"website" varchar
);
