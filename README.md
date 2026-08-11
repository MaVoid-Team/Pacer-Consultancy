# PACER Consultants (Interactive Experience)

> **Modern & Interactive Web Experience for PACER Consultants**  
> Showcasing engineering solutions, methodology, projects, and clients with smooth animations and responsive design.

---

## 🌐 Live Website

- **Live URL:** [https://pacer-consultants-demo-85525634371.us-central1.run.app](https://pacer-consultants-demo-85525634371.us-central1.run.app)
- **Hosted on:** Google Cloud Run (`us-central1`)

---

## 🚀 Tech Stack

- **Frontend:** React 19, Vite (Rolldown)
- **Styling:** Tailwind CSS v4, Framer Motion, Lenis (Smooth Scroll), OGL (WebGL)
- **Web Server:** Nginx (Alpine)
- **Deployment:** Google Cloud Run (Containerized Docker)

---

## 🛠️ Local Development

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run dev server:**
   ```bash
   npm run dev
   ```

3. **Build for production:**
   ```bash
   npm run build
   ```

4. **Preview production build:**
   ```bash
   npm run preview
   ```

---

## 🐳 Docker Deployment

```bash
docker build -t pacer-consultants-demo .
docker run -p 8080:8080 pacer-consultants-demo
```
