# বাজার দর (BazarDor)

**বাজার দর --- প্রয়োজনীয় পণ্যের দামের এক নজরের ধারণা।**

BazarDor is a responsive market-price tracking web application focused
on everyday essentials in Bangladesh. It is designed to help users
compare today's prices with the previous day's prices, identify products
whose prices have increased or decreased, and explore prices across
different markets.

> **Project status:** In development\
> **Application language:** Bengali-first user interface\
> **Programming language:** TypeScript\
> **Backend:** API already created\
> **GitHub repository:** Not provided yet\
> **Live demo:** Not deployed yet

## Features

-   **Daily price movement:** Separate sections for products whose
    prices increased or decreased today compared with the previous day.
-   **Product catalogue:** Browse everyday essentials such as rice,
    lentils, fish, vegetables, eggs, butter, ginger, garlic, and more.
-   **Product detail pages:** Display product summaries, categories,
    units, minimum/maximum/average prices, and market-wise prices.
-   **Category browsing and sorting:** Browse products by category and
    sort by default order, lowest price, or highest price.
-   **Authentication:** Sign in and sign up with email/password, plus
    Google and GitHub social authentication through Better Auth.
-   **Protected product details:** Require login to access product
    detail pages.
-   **Profile updates:** Allow signed-in users to update their name.
-   **Price ticker:** Display a continuously scrolling ticker with
    product names, prices, and daily price changes.
-   **Responsive layout:** Support mobile, tablet, and desktop screens.
-   **Loading and feedback states:** Show loading skeletons while data
    is being fetched and toast notifications for authentication,
    validation, and relevant actions.
-   **Friendly 404 handling:** Show a helpful not-found page with a link
    back to the home page for invalid routes and unknown
    products/categories.

## Technology Stack

-   **Next.js** --- React framework for the web application.
-   **Next.js App Router** --- Routing and page navigation.
-   **TypeScript** --- Main application programming language.
-   **Tailwind CSS** --- Styling and responsive layouts.
-   **Better Auth** --- Authentication, planned for email/password and
    Google/GitHub providers.
-   **react-hot-toast** --- Toast notifications, if included in the
    implementation.
-   **Existing custom API** --- Source of product and market-price data.

> This README documents the intended project requirements. A feature
> should be considered implemented only after it has been completed and
> tested in the application.

## Main Pages and Routes

  -----------------------------------------------------------------------
  Route                   Purpose                 Access
  ----------------------- ----------------------- -----------------------
  `/`                     Home page with hero     Public
                          banner, price ticker,   
                          price increase/decrease 
                          sections, and all       
                          products                

  `/category/[slug]`      Category product list   Public
                          with sorting and empty  
                          states                  

  `/product/[slug]`       Product summary, price  Protected
                          range, average price,   
                          and market-wise prices  

  `/signin`               Email/password sign-in  Public
                          and social sign-in      

  `/signup`               Account registration    Public
                          and social sign-up      

  `/profile`              User profile and        Signed-in users
                          profile update entry    
                          point                   

  `/profile/update`       Form to update the      Signed-in users
                          user's name             

  Not found               Friendly 404 page for   Public
                          unknown routes or       
                          invalid slugs           
  -----------------------------------------------------------------------

Routes should be adjusted if the actual implementation uses different
paths.

## Product Price Presentation

The home page is intended to organize products into three sections:

-   **আজ দাম বেড়েছে ▲** --- Products whose prices increased compared
    with the previous day.
-   **আজ দাম কমেছে ▼** --- Products whose prices decreased compared with
    the previous day.
-   **সব পণ্য** --- The complete product catalogue.

Each product card should display an emoji or illustration, product name,
unit, today's price in Bengali numerals, and a price-change indicator.
Price increases, decreases, and unchanged prices should have distinct
visual states.

Category pages should provide these sorting options:

-   ডিফল্ট
-   দাম: কম থেকে বেশি
-   দাম: বেশি থেকে কম

Sorting should use numeric price values rather than formatted strings to
avoid incorrect ordering with Bengali numerals and thousands separators.

## Getting Started

### Prerequisites

-   Node.js compatible with the Next.js version in the project
-   npm
-   Access to the existing backend API
-   Google and GitHub OAuth credentials if those social sign-in
    providers are enabled

### 1. Get the project source

The GitHub repository URL has not been provided yet. Once the repository
is available, clone it with:


git clone: https://github.com/rifaa-tamanna/bazar-dor-project


Replace the placeholders with the actual repository URL and project
directory.

### 2. Install dependencies

``` bash
npm install
```

### 3. Configure environment variables

Create a `.env.local` file in the project root and add the variables
required by the actual application configuration.

Depending on the implementation, these may include:

-   Backend API base URL.
-   Better Auth secret and base URL.
-   Database connection settings, if required by Better Auth.
-   Google OAuth client ID and client secret.
-   GitHub OAuth client ID and client secret.

Use the exact variable names expected by the project code and the
relevant documentation. Do not commit `.env.local`, API secrets, OAuth
credentials, or other sensitive values to Git.

### 4. Start the development server

``` bash
npm run dev
```

Resolve build errors and test the relevant pages before deployment.

## Authentication

The assignment requirements specify Better Auth for:

-   Email/password sign-in.
-   Account registration with name, email, and password.
-   Google and GitHub social sign-in.
-   Success/error notifications and validation feedback.
-   Redirect handling for protected pages.
-   Profile name updates using Better Auth's supported user-update flow.

Email verification and password-reset flows are outside the current
assignment scope.

Social sign-in requires valid provider credentials and correctly
configured callback URLs. Confirm that authentication and profile
updates work locally and after deployment.

## Responsive Design

The application should remain usable on:

-   **Mobile:** Stacked hero layout, readable text, usable navigation
    and ticker, and a compact product grid.
-   **Tablet:** Adaptable navigation and product grid with appropriate
    spacing.
-   **Desktop:** Full navigation, side-by-side hero content, and a
    multi-column product grid.

All pages, forms, product cards, category controls, and footer content
should remain usable across viewport sizes.

## Project Status

BazarDor is currently **under development**. The backend API is already
created. The GitHub repository URL has not been provided, and the
application has not yet been deployed. Other features should be verified
in the running application before being described as complete.

## License

No license has been specified yet. Add a license file if and when a
license is selected.
