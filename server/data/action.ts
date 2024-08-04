"use server";
import { eq, sql } from "drizzle-orm";
import { db } from "../db";
import { cart, items } from "../db/schema";

const idMap = new Map<number, boolean>();

export const addtoCart = async (productId: number) => {
  try {
    const product = await db.query.items.findFirst({
      where: eq(items.id, productId),
    });

    if (!product) {
      throw new Error("Product not found");
    }

    if (idMap.get(productId)) {
      const [product] = await db
        .select()
        .from(cart)
        .where(eq(cart.itemId, productId));

      await db
        .update(cart)
        .set({ quantity: product.quantity + 1 })
        .where(eq(cart.itemId, productId));
    } else {
      idMap.set(productId, true);
      await db.insert(cart).values({
        name: product.title,
        itemId: productId,
        quantity: 1,
        price: product.price,
      });
    }
    return product;
  } catch (error) {
    console.error("Error adding product to cart:", error);
    throw error;
  }
};

// TODO: pop up the removed item
export const removeFromCart = async (productId: number) => {
  try {
    const product = await db
      .delete(cart)
      .where(eq(cart.id, productId))
      .returning();
    return product;
  } catch (error) {
    console.error("Error removing product from cart:", error);
    throw error;
  }
};
