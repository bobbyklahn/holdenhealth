# Quick Start Guide

## Your Holden Health Website is Ready!

The development server is running at: **http://localhost:3000**

## What's Been Built

✅ **Homepage** with Three.js animated particle background
✅ **Products Page** with comprehensive product catalog
✅ **Solutions Page** showcasing healthcare solutions
✅ **About Page** with company information
✅ **Contact Page** with working contact form (Resend integration)
✅ **Responsive Design** - works on all devices
✅ **Custom Styling** - Roboto for headings, Inter for body text, #b30202 primary color

## Next Steps

### 1. Set Up Email Service (Important!)

To enable the contact form to send emails:

1. Sign up for a free account at https://resend.com
2. Get your API key from the dashboard
3. Create a `.env` file in the `/website` directory:
   ```bash
   RESEND_API_KEY=re_your_actual_api_key_here
   ```
4. Restart the dev server

### 2. Replace Placeholder Images

Current images are placeholders. To add your own:

1. Add images to `/website/public/images/`
2. Update image references in:
   - `app/page.tsx` (homepage product categories)
   - `app/products/page.tsx`
   - Any other pages where you want to display images

### 3. Customize Content

Edit these files to customize your content:

- **Company Info**: `app/about/page.tsx`
- **Products**: `app/products/page.tsx`
- **Contact Details**: `components/Footer.tsx` and `app/contact/page.tsx`
- **Homepage**: `app/page.tsx`

### 4. Deploy Your Site

When ready to deploy:

1. **Vercel (Recommended)**:
   - Push code to GitHub
   - Import project in Vercel
   - Add `RESEND_API_KEY` environment variable
   - Deploy

2. **Other platforms**: Netlify, AWS, Digital Ocean, etc. are all supported

## Project Structure

```
website/
├── app/                    # Pages and API routes
│   ├── api/contact/       # Contact form API
│   ├── about/             # About page
│   ├── contact/           # Contact page
│   ├── products/          # Products page
│   └── solutions/         # Solutions page
├── components/            # Reusable components
│   ├── Header.tsx        # Navigation
│   ├── Footer.tsx        # Footer
│   └── ThreeBackground.tsx # 3D animation
└── public/               # Static assets

```

## Available Commands

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm start        # Start production server
npm run lint     # Run linter
```

## Getting Help

- View the full README.md for detailed documentation
- Check Next.js docs: https://nextjs.org/docs
- Resend docs: https://resend.com/docs

## Design Reference

The site structure and design are inspired by Cardinal Health (https://www.cardinalhealth.com.au/en_au.html) as requested, with your custom branding:

- **Primary Color**: #b30202 (red)
- **Heading Font**: Roboto
- **Body Font**: Inter

Enjoy your new website! 🎉
