# Deployment Guide

## Option 1: Run Locally

```bash
npm install
npm run dev
```

Open the local Vite URL.

## Option 2: Deploy to Vercel

1. Create a GitHub repository.
2. Upload all files from this project.
3. Open Vercel and select **Add New Project**.
4. Import the GitHub repository.
5. Use these settings:
   - Framework: Vite
   - Build Command: `npm run build`
   - Output Directory: `dist`
6. Click Deploy.

## Option 3: Deploy to Netlify

1. Create a GitHub repository.
2. Upload all files.
3. Open Netlify and select **Add new site**.
4. Connect the repository.
5. Use:
   - Build command: `npm run build`
   - Publish directory: `dist`
6. Deploy.

## Suggested Backend Options

For real deployment, use one of the following:

- Firebase: authentication, Firestore database, storage
- Supabase: authentication, Postgres database, storage
- Laravel/PHP + MySQL: suitable if hosted on a university-managed server
- Google Sheets API: simple prototype backend for announcements/resources

## Real Modules to Connect Later

- Announcement CMS
- Resource file upload
- Student concern database
- Locker application and assignment database
- Admin login
- Email notification system
- Quarterly report generator
