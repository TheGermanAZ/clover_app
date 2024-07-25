import { pgTable, serial, text } from "drizzle-orm/pg-core";

export const items = pgTable("items", {
  id: serial("id").primaryKey(),
  title: text("name").notNull().default("No title"),
  price: text("price").notNull().default("0"),
  description: text("description").notNull().default("No description"),
  imageRef: text("image_ref")
    .notNull()
    .default("https://via.placeholder.com/150"),
});

// TODO: add a userid to cart either with a user table or 3rd party auth
export const cart = pgTable("cart", {
  id: serial("id").primaryKey(),
  itemId: serial("item_id").notNull(),
  quantity: serial("quantity").notNull(),
  price: text("price").notNull(),
});

export type SelectItem = typeof items.$inferSelect;
export type InsertItem = typeof items.$inferInsert;

export type SelectCart = typeof cart.$inferSelect;
export type InsertCart = typeof cart.$inferInsert;
