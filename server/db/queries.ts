import { cache } from "react";
import { db } from ".";

export const getProducts = cache(async () => {
  try {
    const products = await db.query.items.findMany();
    return products;
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
});
