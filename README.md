# Software Development Website - README

## Installation Guide

### 1. Install Nuxt.js
Nuxt.js is required to set up the project.

Run one of the following commands to create a new Nuxt project:
```sh
npm create nuxt@latest
# or
npm create nuxt
```
For more details, refer to the official Nuxt documentation: [Nuxt Installation Guide](https://nuxt.com/docs/getting-started/installation)

### 2. Navigate to the Project Directory
After installation, navigate to your project folder:
```sh
cd your-project-name
```

## Required Modules Installation
To add necessary modules for development, execute the following commands:

### 3. Install Nuxt Modules
```sh
npx nuxi@latest module add image
npx nuxi@latest module add icon
npx nuxi@latest module add tailwindcss
```

### 4. Initialize Tailwind CSS
```sh
npx tailwindcss init
```

### 5. Install Additional Modules
```sh
npx nuxi@latest module add google-fonts
npx codemod@latest nuxt/4/file-structure
```
For more information on modules, visit: [Nuxt Modules](https://nuxt.com/modules)

### 6. Install Animate on Scroll (AOS)
To enable animations on scroll, install the AOS package:
```sh
npm install aos --save
```

## Sanity Installation & Setup
Sanity is used for managing content.

### 7. Install Sanity CLI
```sh
npm install -g @sanity/cli
```

### 8. Initialize Sanity Project
```sh
sanity init
```

### 9. Start Sanity Studio Locally
```sh
sanity start
```

### 10. Deploy Sanity Studio
```sh
sanity deploy
```

## Running the Website Locally

### 11. Start Development Server
To run the website on your local machine, use the following command:
```sh
npm run dev
```

### 12. Access on Mobile (Optional)
To run the development server with a QR code, use:
```sh
npm run dev --host
```
This allows access on mobile devices using the displayed QR code.

### 13. Start Development Server with Host Binding
To explicitly bind the development server to a host, use:
```sh
npm run dev -- --host
```
This makes the server accessible from other devices on the same network.

---
Your Nuxt.js website is now set up and ready for development. 🚀

