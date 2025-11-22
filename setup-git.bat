@echo off
REM Git Setup Script for Taxes Management Application (Windows)
REM This script helps initialize git and prepare for GitHub push

echo.
echo ========================================
echo  Git Setup for Taxes Management App
echo ========================================
echo.

REM Check if git is installed
where git >nul 2>nul
if %ERRORLEVEL% NEQ 0 (
    echo [ERROR] Git is not installed. Please install Git first.
    echo Download from: https://git-scm.com/download/win
    pause
    exit /b 1
)

REM Initialize git if not already initialized
if not exist ".git" (
    echo [1/3] Initializing git repository...
    git init
    echo [OK] Git repository initialized
) else (
    echo [OK] Git repository already initialized
)

REM Add all files
echo.
echo [2/3] Adding files to git...
git add .

REM Check if there are changes to commit
git diff --staged --quiet
if %ERRORLEVEL% EQU 0 (
    echo [INFO] No changes to commit
) else (
    echo [3/3] Creating initial commit...
    git commit -m "Initial commit: Taxes Management Application" -m "- React + TypeScript + Vite setup" -m "- @tanstack/react-table implementation" -m "- Edit modal with country dropdown" -m "- API integration with error handling" -m "- Modern UI/UX with responsive design"
    echo [OK] Initial commit created
)

echo.
echo ========================================
echo  Setup Complete!
echo ========================================
echo.
echo Next steps:
echo 1. Create a repository on GitHub: https://github.com/new
echo 2. Run these commands (replace YOUR_USERNAME):
echo.
echo    git remote add origin https://github.com/YOUR_USERNAME/inkle-taxes-app.git
echo    git branch -M main
echo    git push -u origin main
echo.
echo 3. Deploy to Vercel or Netlify (see DEPLOYMENT.md)
echo.
pause

