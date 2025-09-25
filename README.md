# Trident Gymnastics Website

A modern, production-ready Astro website for Trident Gymnastics with Decap CMS integration.

## Features

- **Responsive Design**: Mobile-first design that works on all devices
- **Content Management**: Decap CMS integration for easy content editing
- **School Holiday Programs**: Dynamic content management for holiday programs
- **WhatsApp Integration**: Click-to-chat functionality throughout the site
- **SEO Optimized**: Meta tags, Open Graph, and structured data
- **Policy Management**: Automatic PDF listing from `/public/policies/`

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd trident-gymnastics
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:4321`

### Building for Production

```bash
npm run build
```

The built files will be in the `dist/` directory.

### Preview Production Build

```bash
npm run preview
```

## Configuration

### Phone Number and WhatsApp

To change the phone number and WhatsApp message, edit `src/config/site.ts`:

```typescript
export const siteConfig = {
  phone: '61XXXXXXXXX', // Replace with actual phone number
  whatsappMessage: 'Hi%20Trident%20Gymnastics%20-%20holiday%20program%20enquiry',
  // ... other config
};
```

### Site Information

Update site name, description, and URL in the same config file.

## Using the Visual Editor

### Accessing the CMS

Visit `/admin` on your deployed site to access the Decap CMS visual editor.

### Setup for Netlify

1. **Enable Netlify Identity**: In your Netlify dashboard, go to Site Settings → Identity
2. **Enable Git Gateway**: In Site Settings → Identity → Services, enable Git Gateway
3. **Add Users**: Use Netlify Identity to invite users who can edit content
4. **Access Editor**: Visit `/admin` to start editing content

### Content Management

#### School Holidays
- **Location**: `/admin` → "School Holidays" collection
- **Edit**: Modify the `holidays.yml` file with holiday programs, dates, and booking links
- **Features**: Add/remove programs, update operating rules, set banner images

#### Logos & Branding
- **Location**: `/admin` → "Site Assets" collection  
- **Primary Logo**: Uploads to `/uploads/` and displays in header (replaces text logo)
- **Footer Logo**: Optional footer branding
- **Hero Image**: Background image for home page hero section

#### Policies (PDFs)
- **Location**: `/admin` → "Policies" collection
- **Upload**: Add PDF files with custom titles and update dates
- **Display**: Shows on `/policies` page with CMS-managed policies listed first
- **Fallback**: Static PDFs in `/public/policies/` also display

### Media Management

- **Upload Path**: Files uploaded via CMS go to `/public/uploads/`
- **Static Images**: Place images in `/public/images/` for direct use
- **PDF Storage**: CMS policies stored in `/uploads/`, static PDFs in `/public/policies/`

### Adding Policy Documents

**Via CMS (Recommended):**
1. Go to `/admin` → "Policies" collection
2. Click "New Policy"
3. Add title, upload PDF, set update date
4. Save and publish

**Via Static Files:**
1. Add PDF files to `/public/policies/` directory
2. Rebuild the site to see them listed on `/policies`

## Project Structure

```
├── src/
│   ├── config/
│   │   └── site.ts          # Site configuration
│   ├── layouts/
│   │   └── Layout.astro     # Main layout component
│   └── pages/
│       ├── index.astro      # Home page
│       ├── classes.astro    # Classes page
│       ├── playgym.astro   # Playgym page
│       ├── opengym.astro    # Open gym page
│       ├── parties.astro    # Parties page
│       ├── about.astro      # About page
│       ├── contact.astro    # Contact page
│       ├── school-holidays.astro # Holiday programs
│       └── policies.astro   # Policies page
├── content/
│   └── holidays.yml         # Holiday programs data
├── admin/
│   ├── config.yml           # Decap CMS configuration
│   └── index.html           # CMS interface
├── public/
│   └── policies/            # Policy PDFs (create this)
├── package.json
├── astro.config.mjs
└── netlify.toml
```

## Deployment

### Netlify (Recommended)

1. Connect your repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `dist`
4. Enable Netlify Identity and Git Gateway
5. Deploy!

### Other Platforms

The site builds to static files in `dist/` and can be deployed to any static hosting service.

## Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run astro` - Run Astro CLI commands

### Adding New Pages

1. Create a new `.astro` file in `src/pages/`
2. Import and use the `Layout` component
3. Add navigation links in `src/layouts/Layout.astro`

### Styling

The site uses CSS custom properties for consistent theming. Colors and other design tokens are defined in the Layout component.

## Support

For questions or support, please contact the development team or refer to the [Astro documentation](https://docs.astro.build/).

## License

This project is proprietary to Trident Gymnastics.
