CREATE TABLE IF NOT EXISTS "products" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" text,
	"description" text,
	"price" integer,
	"userId" text
);
--> statement-breakpoint
ALTER TABLE "users" DROP COLUMN IF EXISTS "subscribed";