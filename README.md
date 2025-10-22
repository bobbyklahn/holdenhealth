# Holden Health Website

A modern, responsive healthcare solutions website built with Next.js, React, Three.js, and Tailwind CSS.

## Features

- **Modern Design**: Clean, professional interface inspired by Cardinal Health
- **Three.js Integration**: Animated particle background on hero section
- **Responsive Layout**: Mobile-first design that works on all devices
- **Contact Form**: Integrated with Resend for email notifications
- **Product Catalog**: Comprehensive product and solutions pages
- **TypeScript**: Fully typed for better development experience

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **3D Graphics**: Three.js with @react-three/fiber and @react-three/drei
- **Email Service**: Resend
- **Fonts**: Roboto (headings) and Inter (body text)

## Color Scheme

- Primary: `#b30202` (Red)
- Primary Dark: `#8a0101`
- Primary Light: `#e60303`

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn
- Resend API key (get one at https://resend.com)

### Installation

1. Clone the repository
2. Navigate to the website directory:
   ```bash
   cd website
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Create a `.env` file in the root directory:
   ```bash
   cp .env.example .env
   ```

5. Add your Resend API key to `.env`:
   ```
   RESEND_API_KEY=your_actual_resend_api_key
   ```

### Development

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build

Build for production:

```bash
npm run build
```

### Start Production Server

```bash
npm start
```

## Project Structure

```
website/
├── app/
│   ├── api/
│   │   └── contact/
│   │       └── route.ts         # Contact form API endpoint
│   ├── about/
│   │   └── page.tsx            # About page
│   ├── contact/
│   │   └── page.tsx            # Contact page with form
│   ├── products/
│   │   └── page.tsx            # Products page
│   ├── solutions/
│   │   └── page.tsx            # Solutions page
│   ├── globals.css             # Global styles
│   ├── layout.tsx              # Root layout
│   └── page.tsx                # Homepage
├── components/
│   ├── Header.tsx              # Navigation header
│   ├── Footer.tsx              # Footer component
│   └── ThreeBackground.tsx     # Three.js animated background
├── public/
│   └── images/                 # Image assets
├── next.config.ts              # Next.js configuration
├── tailwind.config.ts          # Tailwind CSS configuration
├── tsconfig.json               # TypeScript configuration
└── package.json
```

## Pages

- **Home** (`/`): Hero section with Three.js animation, product categories, and solutions overview
- **Products** (`/products`): Complete product catalog organized by category
- **Solutions** (`/solutions`): Healthcare solutions for different facility types
- **About** (`/about`): Company information and values
- **Contact** (`/contact`): Contact form with Resend integration

## Customization

### Replacing Placeholder Images

Images are currently using placeholder graphics. To replace with actual images:

1. Add your images to `public/images/`
2. Update image references in the respective page components
3. Recommended image formats: JPG, PNG, or WebP
4. Optimize images for web before uploading

### Updating Content

- **Company Information**: Edit `components/Footer.tsx` and `app/about/page.tsx`
- **Products**: Modify the product arrays in `app/products/page.tsx`
- **Contact Email**: Update the email recipient in `app/api/contact/route.ts`

### Styling

- Colors are defined in `tailwind.config.ts`
- Global styles are in `app/globals.css`
- Component-specific styles use Tailwind utility classes

## Contact Form Setup

The contact form uses Resend for email delivery. To set up:

1. Sign up at [Resend.com](https://resend.com)
2. Generate an API key
3. Add the key to your `.env` file
4. Update the recipient email in `app/api/contact/route.ts` (currently set to `bobbyleo@me.com`)

**Note**: In development, you can only send emails from `onboarding@resend.dev`. In production with a verified domain, you can use your custom domain.

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import the project in Vercel
3. Add environment variable `RESEND_API_KEY`
4. Deploy

### Other Platforms

This is a standard Next.js application and can be deployed to any platform that supports Node.js:
- Netlify
- AWS Amplify
- Digital Ocean App Platform
- Railway
- Render

## License

Copyright © 2025 Holden Health. All rights reserved.

## Support

For questions or support, contact: info@holdenhealth.com
