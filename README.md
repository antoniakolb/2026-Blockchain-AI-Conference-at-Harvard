# Blockchain & AI Conference 2026 - Harvard

A modern, animated conference website built with Next.js and Tailwind CSS.

## 🚀 Deploy to Vercel (Step-by-Step)

### Step 1: Create a GitHub Account (if you don't have one)
1. Go to [github.com](https://github.com)
2. Click "Sign Up" and create a free account

### Step 2: Upload This Project to GitHub
1. Log into GitHub
2. Click the **+** icon (top right) → **New repository**
3. Name it something like `blockchain-conference`
4. Keep it **Public** (free hosting)
5. Click **Create repository**
6. On the next page, click **"uploading an existing file"**
7. Drag and drop ALL the files from this folder
8. Click **Commit changes**

### Step 3: Deploy on Vercel
1. Go to [vercel.com](https://vercel.com)
2. Click **"Sign Up"** → **"Continue with GitHub"**
3. Authorize Vercel to access your GitHub
4. Click **"Add New Project"**
5. Find your `blockchain-conference` repo and click **Import**
6. Leave all settings as default
7. Click **Deploy**
8. Wait 1-2 minutes... ✨ Your site is live!

### Step 4: Get Your URL
After deployment, Vercel gives you a free URL like:
`https://blockchain-conference-xyz.vercel.app`

## 🌐 Connect a Custom Domain (Optional)

If you bought a domain (e.g., from GoDaddy):

1. In Vercel, go to your project → **Settings** → **Domains**
2. Add your domain (e.g., `harvardblockchain2026.com`)
3. Vercel will show you DNS records to add
4. In GoDaddy (or your registrar):
   - Go to DNS settings
   - Add the records Vercel shows you
5. Wait 10-30 minutes for DNS to update
6. Done! Your custom domain now shows your site

## 📁 Project Structure

```
blockchain-conference/
├── app/
│   ├── globals.css      # Tailwind styles
│   ├── layout.js        # Page wrapper & metadata
│   └── page.js          # Main conference website
├── package.json         # Dependencies
├── tailwind.config.js   # Tailwind configuration
├── postcss.config.js    # PostCSS configuration
├── next.config.js       # Next.js configuration
└── README.md            # This file
```

## 🛠 Local Development (Optional)

If you want to run it locally first:

```bash
npm install
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000)

## Need Help?

- Vercel Docs: https://vercel.com/docs
- Next.js Docs: https://nextjs.org/docs
