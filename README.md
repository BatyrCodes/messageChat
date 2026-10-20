# ChatAI

Chat app built with React, Vite, and Firebase.

## Run locally

1. Install dependencies with `npm ci`.
2. Add your Firebase Web API key to `.env`:

   ```env
   VITE_API_KEY=your-firebase-api-key
   ```

3. Start the development server with `npm run dev`.

## Publish with GitHub Pages

The `Deploy to GitHub Pages` workflow builds and publishes the site whenever
you push to `main`, or when you start it manually from the Actions tab.

Before the first deployment:

1. In the repository settings, add an Actions repository secret named
   `VITE_API_KEY` containing the Firebase Web API key.
2. Under **Settings → Pages**, set the build and deployment source to **GitHub
   Actions**.
3. Push to `main` and check the workflow in the **Actions** tab. Once it
   succeeds, the Pages URL is shown in the `github-pages` deployment environment.

The Firebase Web API key is included in the public client bundle; it is not a
password. Restrict the key in Google Cloud and configure Firebase Authentication
authorized domains and Firestore/Storage security rules for the deployed site.
