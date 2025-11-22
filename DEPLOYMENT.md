# Deployment Guide

This guide will help you deploy the Taxes Management Application to various platforms.

## 🚀 Quick Deployment Options

### Option 1: Vercel (Recommended - Easiest)

1. **Push to GitHub** (see GitHub Setup below)
2. Go to [vercel.com](https://vercel.com) and sign in
3. Click "Add New Project"
4. Import your GitHub repository
5. Vercel will auto-detect Vite settings
6. Click "Deploy"
7. Your app will be live in minutes!

**Vercel automatically:**
- Detects Vite framework
- Sets up build commands
- Provides HTTPS
- Enables automatic deployments on git push

### Option 2: Netlify

1. **Push to GitHub** (see GitHub Setup below)
2. Go to [netlify.com](https://netlify.com) and sign in
3. Click "Add new site" → "Import an existing project"
4. Connect to GitHub and select your repository
5. Build settings (auto-detected):
   - Build command: `npm run build`
   - Publish directory: `dist`
6. Click "Deploy site"
7. Your app will be live!

### Option 3: GitHub Pages

1. **Push to GitHub** (see GitHub Setup below)
2. Install `gh-pages` package:
   ```bash
   npm install --save-dev gh-pages
   ```
3. Update `package.json` scripts:
   ```json
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
   ```
4. Update `vite.config.ts`:
   ```typescript
   export default defineConfig({
     base: '/your-repo-name/',
     plugins: [react()],
   })
   ```
5. Deploy:
   ```bash
   npm run deploy
   ```
6. Enable GitHub Pages in repository settings:
   - Go to Settings → Pages
   - Source: `gh-pages` branch
   - Save

## 📦 GitHub Setup

### Step 1: Initialize Git Repository

```bash
# Initialize git (if not already done)
git init

# Add all files
git add .

# Create initial commit
git commit -m "Initial commit: Taxes Management Application"
```

### Step 2: Create GitHub Repository

1. Go to [github.com](https://github.com) and sign in
2. Click the "+" icon → "New repository"
3. Repository name: `inkle-taxes-app` (or your preferred name)
4. Description: "Taxes Management Application - Inkle Frontend Intern Assignment"
5. Choose Public (required for free hosting)
6. **DO NOT** initialize with README, .gitignore, or license (we already have these)
7. Click "Create repository"

### Step 3: Push to GitHub

```bash
# Add remote repository (replace YOUR_USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR_USERNAME/inkle-taxes-app.git

# Rename branch to main (if needed)
git branch -M main

# Push to GitHub
git push -u origin main
```

### Step 4: Verify

Visit `https://github.com/YOUR_USERNAME/inkle-taxes-app` to verify your code is uploaded.

## 🔗 Getting Your Repository Link

After pushing to GitHub, your repository link will be:
```
https://github.com/YOUR_USERNAME/inkle-taxes-app
```

Replace `YOUR_USERNAME` with your actual GitHub username.

## 🌐 Getting Your Deployment Link

### Vercel
After deployment, Vercel provides a URL like:
```
https://inkle-taxes-app.vercel.app
```

### Netlify
After deployment, Netlify provides a URL like:
```
https://inkle-taxes-app.netlify.app
```

### GitHub Pages
After deployment, your URL will be:
```
https://YOUR_USERNAME.github.io/inkle-taxes-app
```

## ✅ Checklist

- [ ] Code pushed to GitHub
- [ ] Repository is public
- [ ] Application deployed to hosting platform
- [ ] Deployment URL is accessible
- [ ] All features working correctly
- [ ] README updated with deployment link

## 🐛 Troubleshooting

### Build Fails
- Ensure all dependencies are in `package.json`
- Check that Node.js version is 18+
- Review build logs for specific errors

### 404 Errors on Refresh (SPA Routing)
- Netlify: `netlify.toml` is already configured
- Vercel: Should auto-detect, but check redirects in settings
- GitHub Pages: Ensure base path is set correctly in `vite.config.ts`

### API CORS Issues
- MockAPI should handle CORS automatically
- If issues occur, check browser console for specific errors

## 📝 Next Steps

1. Update README.md with your actual deployment URL
2. Test all functionality on the deployed site
3. Share your repository and deployment links

---

**Need Help?** Check the platform-specific documentation:
- [Vercel Docs](https://vercel.com/docs)
- [Netlify Docs](https://docs.netlify.com)
- [GitHub Pages Docs](https://docs.github.com/pages)

