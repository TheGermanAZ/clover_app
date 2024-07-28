import { text } from "drizzle-orm/pg-core";
import { cart, items } from "../db/schema";
import { cache } from "react";
import { db } from "../db";
import { eq } from "drizzle-orm";

export const getProducts = cache(async () => {
  try {
    const products = await db.query.items.findMany();
    return products;
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
});
