import { db, VercelPoolClient } from "@vercel/postgres";

const products = [
  {
    id: "1",
    name: "Flex",
    price: "599",
    description: "A Full POS in the palm of your hand.",
    image_url:
      "https://images.ctfassets.net/v6ivjcl8qjz2/4rR79F5AxJND4uoCPQIT4o/de5b26c425757e54d74fa9757e87c7d2/hardware-carousel-flex-3-right-45-up-mobile-280x250-2x.png",
  },
  {
    id: "2",
    name: "Kiosk",
    price: "3,499",
    description: "Quick and easy customer ordering.",
    image_url:
      "https://images.ctfassets.net/v6ivjcl8qjz2/33lfMYEF5kqkzGrunrGkL2/1a590ff282a0d4565ac163c66d25b9ad/hardware-carousel-kiosk.webp",
  },
  {
    id: "3",
    name: "Mini",
    price: "799",
    description: "Super powered for small spaces.",
    image_url:
      "https://images.ctfassets.net/v6ivjcl8qjz2/6xXCupM14ZkhwNsbfFOzLv/e4550484013e80aa8e4a636d3fcc1d72/hardware-carousel-mini-3-right-45-mobile-280x250.png",
  },

  {
    id: "4",
    name: "Duo",
    price: "1,799",
    description: "A power-packed workstation.",
    image_url:
      "https://images.ctfassets.net/v6ivjcl8qjz2/1cnevHCglJs2g2YYhJ3U6z/749006e1ec7adbda694b1377d59006fe/hardware-carousel-duo-2022-customer-right-45-mobile-280x250-2x.png",
  },

  {
    id: "5",
    name: "Solo",
    price: "1,699",
    description: "A power-packed workstation.",
    image_url:
      "https://images.ctfassets.net/v6ivjcl8qjz2/7pokPoZCrTKWcXL95QkJKz/862116a4a8410250fbfd8a0ef7d30444/hardware-carousel-solo-top-with-stand-mobile-280x250-2x.png",
  },
  {
    id: "6",
    name: "KDS",
    price: "799",
    description: "Restaurant operations elevated.",
    image_url:
      "https://images.ctfassets.net/v6ivjcl8qjz2/3gShfHn1S0UuwQ7DX2CzuT/87934e9ef408a35328fc4202eda9c926/hardware-carousel-kds-sizes-mobile.webp",
  },
  {
    id: "7",
    name: "Go",
    price: "149",
    description: "A pocket-sized POS.",
    image_url:
      "https://images.ctfassets.net/v6ivjcl8qjz2/5yOtc8v8eeS2a6FzWUwCOa/2b54307f652859f81d0081ff41948ff7/hardware-carousel-go-3-right-45-mobile-280x250-2x.png",
  },
];
async function seedUsers(client: VercelPoolClient) {
  try {
    // Insert data into the "users" table
    const insertedProducts = await Promise.all(
      products.map(async (product) => {
        return client.sql`
        INSERT INTO users (id, name, email, password)
        VALUES (${product.id}, ${product.name}, ${product.price})
        ON CONFLICT (id) DO NOTHING;
      `;
      })
    );

    console.log(`Seeded ${insertedProducts.length} users`);

    return {
      users: insertedProducts,
    };
  } catch (error) {
    console.error("Error seeding users:", error);
    throw error;
  }
}

async function main() {
  const client = await db.connect();

  await seedUsers(client);
}

main().catch((err) => {
  console.error(
    "An error occurred while attempting to seed the database:",
    err
  );
});
