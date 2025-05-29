# CV

*A sleek academic resume template for researchers, scholars, and thinkers.*

CV is a minimalist, responsive personal website template built for academics, researchers, and graduate students. Showcase your publications, research interests, CV, and professional journey — all in one elegant place. Designed with clarity and simplicity in mind, CV helps you present your scholarly work and personal story with confidence.

---

## 🚀 Features

- ✍️ Personal profile and experience sections
- 📚 Publications list
- 🧠 Research interests & projects
- 🎓 Education history
- 👨‍🏫 Teaching experience
- 🎤 Talks and presentations
- 💼 Skills showcase
- 🌐 Clean, responsive layout (mobile-ready)

---

## 📦 Getting Started (Local Development)

To get started with CV locally:

### 1. Clone the Repository

```bash
git clone https://github.com/ahmadrafidev/cv.git
cd cv
```

### 2. Install Dependencies

```bash
pnpm install
```

### 3. Run the Dev Server

```bash
pnpm dev
```

Visit [http://localhost:3000](http://localhost:3000) in your browser to view your CV site.

---

## 🗂 Folder Structure

```txt
app/                    # Next.js app directory
├── page.tsx           # Main homepage
├── layout.tsx         # Root layout
├── globals.css        # Global styles
├── loading.tsx        # Loading state
├── experience/        # Experience page
├── education/         # Education page
├── teaching/          # Teaching experience page
├── talks/            # Talks and presentations page
├── publications/      # Publications page
content/              # Content files in Markdown
├── profile.md        # Personal info and bio
├── experience.md     # Work experience
├── education.md      # Education history
├── publications.md   # List of academic works
├── research.md       # Research interests
├── teaching.md       # Teaching experience
├── talks.md         # Talks and presentations
├── skills.md         # Skills and expertise
public/               # Static assets (images, etc)
lib/                  # Utility functions and helpers
types/                # TypeScript type definitions
```

---

## ✏️ Customization

- Update content in the `content/` directory using Markdown files
- Customize styles using Tailwind CSS in `app/globals.css`
- Add or remove sections as needed
- Replace placeholders with your personal info and data
- For more, read [this documentation](./HOW_TO_USE.md)

---

## 📄 License

MIT License. Feel free to fork, clone, and customize.

---

## 📬 Contact

Created by [Ahmad Rafi Wirana](https://www.rafiwirana.co/). Feel free to reach out or open an issue!
