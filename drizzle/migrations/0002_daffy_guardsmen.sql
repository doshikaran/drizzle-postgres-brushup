CREATE TABLE IF NOT EXISTS "orders" (
	"id" serial PRIMARY KEY NOT NULL,
	"product_id" text,
	"quantity" integer,
	"user_id" text
);
--> statement-breakpoint
ALTER TABLE "products" RENAME COLUMN "userId" TO "user_id";