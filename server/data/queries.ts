import { text } from "drizzle-orm/pg-core";
import { cart, items } from "../db/schema";
import { cache } from "react";
import { db } from "../db";
import { asc, eq } from "drizzle-orm";

export const getProducts = cache(async () => {
  try {
    const products = await db.query.items.findMany({
      orderBy: [asc(items.id)],
    });
    return products;
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
});

export const getProduct = cache(async (productId: number) => {
  try {
    const product = await db.query.items.findFirst({
      where: eq(items.id, productId),
    });
    return product;
  } catch (error) {
    console.error("Error fetching product:", error);
    throw error;
  }
});

export const getCart = async () => {
  try {
    const cartItems = await db.query.cart.findMany({
      orderBy: [asc(cart.id)],
    });
    return cartItems;
  } catch (error) {
    console.error("Error fetching cart:", error);
    throw error;
  }
};

export const getCartItem = async (productId: number) => {
  try {
    const cartItem = await db
      .select()
      .from(cart)
      .where(eq(cart.itemId, productId));
    return cartItem;
  } catch (error) {
    console.error("Error fetching cart item:", error);
    throw error;
  }
};
