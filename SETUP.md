# Setup

## Prerequisites

- Node.js 18 or later
- npm

## Development

From the project root:

```bash
npm install
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000). The site includes Home, Services, and Contact Us routes.

## Production

```bash
npm run build
npm start
```

## Inquiry Form

The contact form submits directly to Web3Forms. For local development, add the access key to the project root `.env.local` file:

```text
NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY=your-web3forms-access-key
```

The `.env.local` file is ignored by Git. Set the same environment variable in the production build environment before building the static site. `NEXT_PUBLIC_` values are included in the browser bundle, so use this only for the Web3Forms access key, not a private credential.

In Web3Forms, confirm that this access key is configured to deliver submissions to `info@theblackempowermentgroup.com` and that the recipient email has been verified.
