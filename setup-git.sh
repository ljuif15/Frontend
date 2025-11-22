#!/bin/bash

# Git Setup Script for Taxes Management Application
# This script helps initialize git and prepare for GitHub push

echo "🚀 Setting up Git repository..."

# Check if git is installed
if ! command -v git &> /dev/null; then
    echo "❌ Git is not installed. Please install Git first."
    exit 1
fi

# Initialize git if not already initialized
if [ ! -d ".git" ]; then
    echo "📦 Initializing git repository..."
    git init
    echo "✅ Git repository initialized"
else
    echo "✅ Git repository already initialized"
fi

# Add all files
echo "📝 Adding files to git..."
git add .

# Check if there are changes to commit
if git diff --staged --quiet; then
    echo "ℹ️  No changes to commit"
else
    echo "💾 Creating initial commit..."
    git commit -m "Initial commit: Taxes Management Application
    
    - React + TypeScript + Vite setup
    - @tanstack/react-table implementation
    - Edit modal with country dropdown
    - API integration with error handling
    - Modern UI/UX with responsive design"
    echo "✅ Initial commit created"
fi

echo ""
echo "✨ Git setup complete!"
echo ""
echo "📋 Next steps:"
echo "1. Create a repository on GitHub (https://github.com/new)"
echo "2. Run these commands (replace YOUR_USERNAME with your GitHub username):"
echo ""
echo "   git remote add origin https://github.com/YOUR_USERNAME/inkle-taxes-app.git"
echo "   git branch -M main"
echo "   git push -u origin main"
echo ""
echo "3. Deploy to Vercel or Netlify (see DEPLOYMENT.md for details)"

