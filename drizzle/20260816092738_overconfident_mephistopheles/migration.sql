CREATE TABLE "executions" (
	"id" varchar PRIMARY KEY,
	"created_at" timestamp(0) with time zone DEFAULT now() NOT NULL,
	"business" varchar NOT NULL
);
