![image](https://github.com/KayDrechsler/nextjs-event-planner/assets/4559673/aefc3f6c-f7eb-4dd9-b1cb-003393449d82)


# Next.js - Event Planner
A Next.js case study application where I experimented with NextJS' page router instead of the app router. Even though the apps router is the recommended one by NextJS' dev team, it is worth knowing about the page router as well. The application shows and filters featured Events.

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

The project will have four routes:
1. `/` - The starting page (shows featured events)
2. `/events` - Events page (shows all events).
3. `/events/<some-id>` - Event detail page (shows selected event).
4. `/events/...slug` - Filtered events page. Filters events by month.

## Setup
### Installation
Run `npm install` within the root directory.

### Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

### Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

### Run Development Mode
Execute `npm run dev` within the root directory and open up `http://localhost:3000`.

## Used technologies
- React.js
- Next.js
- Google Firebase

## Todos
- [ ] Delete inline styles that were just assigned for demo purposes.
- [ ] Remove CSS element selectors and replace them with classes. Again: just a demo CSS project, which focusses on NextJS instead of CSS/SCSS features.
- [ ] Integrate authentication to secure Firebase data base. Here we're just using it as a demo case. No important data to be secured actually. But in a real world scenario this couldn't stay as it currently is.
- [ ] Whitelist the server once the application would be deployed to grant access to MongoDB. Currently this is just working locally on my personal machine since I whitelisted it already.
