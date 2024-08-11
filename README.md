This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, generate and migrate Prisma schema:
```bash
yarn prisma generate
#then
yarn prisma migrate dev
#or
yarn prisma migrate deploy
```

After that, run the development server:

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

You can start editing the page by modifying `src/app/page.js`. The page auto-updates as you edit the file.

The backend is located in the `src/app/api` folder.

## Techstack

I used several technologies in doing this assignment:
- Next.js 14 (Fullstack Web Framework)
- Prisma ORM & MySQL Database
- Tailwind CSS & shadcn/ui (Styling & UI Component)
- Tanstack React Query (Data Fetching)
- Tanstack React Table (Datatable)

## Result

The following is a demo of the results I have made.

![Watch the video](./docs/demo.mp4)



