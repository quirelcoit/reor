# Deployment Guide

Since your presentation is built using vanilla HTML, CSS, and JavaScript, it is a **static website**. This makes it extremely easy and free to host. Here are the best ways to get it online so anyone can view it via a link.

## 1. Vercel or Netlify (Easiest & Fastest)
These are the industry standards for hosting web apps.

### Vercel (Drag & Drop)
1. Go to [vercel.com](https://vercel.com).
2. Create a free account.
3. Go to the "Add New" button and select **"Project"**.
4. Instead of connecting a Git repository, look for the **"Drag and Drop"** box at the bottom.
5. Drag your entire `reor` folder onto that box.
6. **Done!** It will give you a public URL (e.g., `corplan-ict.vercel.app`) that anyone can open.

---

## 2. GitHub Pages (Best for Version Control)
If you have your code on GitHub, this is the most professional route.

1. Create a new repository on GitHub.
2. Push your code: `index.html`, `style.css`, `script.js`, and `bg-quirino.png`.
3. Go to **Settings** > **Pages** in your repository.
4. Under "Branch", select `main` and click **Save**.
5. Your site will be live at `https://yourusername.github.io/your-repo-name/`.

---

## 4. Immediate "In the Room" sharing (No Laptop needed)
If you just want people *in the room* to see it on their phones while you present:

1. Connect your laptop and those people to the **same Wi-Fi**.
2. Run a local server (I can help you do this if you have Node.js installed).
3. Find your **Internal IP address** (e.g., `192.168.1.5`).
4. Tell them to go to `http://192.168.1.5:8080` in their browsers.

> [!TIP]
> **I recommend Vercel** for your presentation because it is blazing fast, handles the background image perfectly, and gives you a professional link in under 2 minutes.
