

## Rick And Morty 

This project has been developed using the Rick And Morty API with Next.js.

## Visitor Stories
Users can perform the following actions in this application:

- View a list of all locations and all characters with a page structure,
- View the `name` `type` and `resident count` information of a location in all locations,
- View the `status` and `type` information of a character in all characters and filter them by `alive` `dead` and `unknown`
- Click on any location to see its residents along with the `dimension` information and filter the residents based on their `status`
- Navigate to the details of any character to view information such as `species` `type` `gender` and `origin`
- List other characters with the same `status` and `location` as the character whose details are being viewed,
- Add and remove characters to/from favorites on the character list, location details, and character pages,
- View characters added to favorites on the "my favorites" page.

## Technologies
- Nextjs
- API Routes
- Redux-toolkit
- SCSS
- axios
- next-redux-wrapper
- redux-persist
- Swiper

## Screenshots

The application has been developed with a "mobile-first" approach, making it completely responsive. Therefore, it can be used without any issues cross browsers.
<br />
<img width="180" alt="screenshot" src="https://github.com/enesergun/ricky-and-morty-typescript/assets/63712936/3fee54ca-aa8a-4d2d-a5a2-ad169b5675fb">
<img width="180" alt="Screenshot 2023-12-28 at 03 06 31" src="https://github.com/enesergun/ricky-and-morty-typescript/assets/63712936/20218afa-4c4e-41be-94fd-56190db4dffb">
<br />
<img width="466" alt="Screenshot 2023-12-28 at 03 06 12" src="https://github.com/enesergun/ricky-and-morty-typescript/assets/63712936/6827d0c9-0bbb-4909-b05a-aecf24816b91">
<img width="466" alt="Screenshot 2023-12-28 at 03 06 01" src="https://github.com/enesergun/ricky-and-morty-typescript/assets/63712936/8b7481cd-61e6-4081-89a5-f4b911ce93d8">

## Good FCP, SI, LCP, TBT, CLS Scores

Following the analysis conducted with Lighthouse, we observe high scores in Performance, Accessibility, Best Practices, and SEO on the pages within the project.

### For example,

- Single Location Page ( Mobile ) 

<img width="426" alt="Screenshot 2023-12-28 at 03 22 07" src="https://github.com/enesergun/ricky-and-morty-typescript/assets/63712936/83017335-28bc-4431-b2d4-264abeb7f91c">

- Character List Page ( Desktop ) 

<img width="426" alt="Screenshot 2023-12-28 at 03 24 46" src="https://github.com/enesergun/ricky-and-morty-typescript/assets/63712936/26be231f-e85d-41d7-ae67-4e3bee92d4fc">

### On the other hand, the Cumulative Layout Shift (CLS) scores on all pages are less than 0.0.

- Character List Page ( Mobile )
<img width="526" alt="image" src="https://github.com/enesergun/ricky-and-morty-typescript/assets/63712936/d32d97b0-503c-449e-bd1b-aa1bc721ad01">

- Location List Page ( Desktop ) 
<img width="526" alt="image" src="https://github.com/enesergun/ricky-and-morty-typescript/assets/63712936/664a44e7-3463-443c-8633-1af3977b13a4">

- Character Detail Page ( Mobile )
<img width="526" alt="image" src="https://github.com/enesergun/ricky-and-morty-typescript/assets/63712936/38bdaf7d-22c2-4d62-9311-1bb69ad80e59">

## Setup 
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
