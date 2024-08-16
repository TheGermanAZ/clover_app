I created this project to learn how much it takes to create an online storefront that sells products. Since clover is a company that primarily provides a way to enable businesses to sell their services and products through the multiple POS products.

Along with learning how to create a storefront, I also wanted to learn the state of the art of how to create a react website. Since React is one of the most popular frontend frameworks, and one of the most innovative in the modern web development world. I thought it would be exciting to see how much it takes to build a website using server actions. At first it was great the developer experience was great and simple use cases were easy to implement.

However, as I kept using them I realized there were edge cases that aren't easy to handle. I overused server actions and on second thought if I used them more sparingly I would have been able to avoid some of the edge cases. For example I was using the database to store most of my state, instead what I should have done was use a combination of the database and a state management library like rtk. I was sending the state of the cart to the database leading to the client being very chatty with the database and the server.

Overall I learned a lot about how to build a website using server actions with Nextjs and what it takes to create a modern storefront.

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
