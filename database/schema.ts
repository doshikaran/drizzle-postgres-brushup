import {
  pgTable,
  primaryKey,
  text,
  integer,
  serial,
  boolean,
  timestamp,
} from "drizzle-orm/pg-core";
import { relations } from "drizzle-orm";

export const users = pgTable("users", {
  id: text("id").notNull().primaryKey(),
  name: text("name"),
  email: text("email").notNull(),
  emailVerified: timestamp("emailVerified", {
    mode: "date",
  }),
  // subscribed: boolean("subscribed")
});
export const usersRelations = relations(users, ({ many }) => ({
  products: many(products),
  orders: many(orders),
}));

export const products = pgTable("products", {
  id: serial("id").primaryKey(),
  name: text("name"),
  description: text("description"),
  price: integer("price"),
  userId: text("user_id"),
});

export const productsRelations = relations(products, ({ many, one }) => ({
  user: one(users, {
    fields: [products.userId],
    references: [users.id],
  }),
  orders: many(orders),
}));

export const orders = pgTable("orders", {
  id: serial("id").primaryKey(),
  productId: text("product_id"),
  quantity: integer("quantity"),
  userId: text("user_id"),
});

export const ordersRelations = relations(orders, ({ many, one }) => ({
  product: one(products, {
    fields: [orders.productId],
    references: [products.id],
  }),
  user: one(users, {
    fields: [orders.userId],
    references: [users.id],
  }),
}));
