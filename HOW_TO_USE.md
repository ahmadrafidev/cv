# How to Customize Your CV

This guide will help you modify the content of your CV without any coding knowledge. All you need is a text editor (like Notepad, TextEdit, or VS Code) and basic knowledge of Markdown formatting.

## 📁 Where to Make Changes

All your CV content is stored in the `content` folder. You'll find several files that you can edit:

1. `profile.md` - Your personal introduction and contact information
2. `education.md` - Your educational background
3. `experience.md` - Your work experience
4. `skills.md` - Your technical and soft skills
5. `publications.md` - Your publications or written works
6. `research.md` - Your research experience or projects
7. `teaching.md` - Your teaching experience and courses
8. `talks.md` - Your presentations and speaking engagements

## ✍️ How to Edit Files

### Basic Markdown Formatting Guide

Markdown is a simple way to format text. Here are the basics:

- For **bold text** use: `**text**`
- For *italic text* use: `*text*`
- For bullet points, start a line with `-` or `*`
- For numbered lists, start lines with `1.`, `2.`, etc.
- For headings, use `#`:
  - `# Main Heading`
  - `## Subheading`
  - `### Smaller heading`

### File Structure

Each content file follows a specific format. Here's how to edit them:

#### Profile (`profile.md`)
```markdown
---
name: "Your Name"
title: "Your Title/Role"
summary: "A brief summary about yourself and your focus areas"
contact:
  email: "your.email@example.com"
  github: "your-github-username"
  linkedin: "your-linkedin-username"
  twitter: "your-twitter-handle"
  google_scholar: "your-scholar-id"
---
```

#### Experience (`experience.md`)
```markdown
---
experience:
  - role: "Your Job Title"
    company: "Company Name"
    companyUrl: "www.company-website.com"
    period: "2022-Present"
    highlights:
      - "Key achievement or responsibility"
      - "Another major accomplishment"
      - "One more significant contribution"

  - role: "Previous Job Title"
    company: "Previous Company"
    period: "2020-2022"
    highlights:
      - "Key achievement from this role"
      - "Another important accomplishment"
      - "One more highlight"
---
```

#### Education (`education.md`)
```markdown
---
education:
  - degree: "Your Degree Name"
    school: "University Name"
    year: "2020-2022"
    description: "Focus area or major achievements"

  - degree: "Your Previous Degree"
    school: "University Name"
    year: "2016-2020"
    description: "Relevant details about your study"
---
```

#### Research (`research.md`)
```markdown
---
research_interests:
  - title: "Research Area Title"

  - title: "Another Research Focus"

  - title: "Additional Research Area"
---
```

#### Skills (`skills.md`)
```markdown
---
skills:
  - category: "Programming Languages"
    items:
      - "Language 1"
      - "Language 2"
      - "Language 3"
      - "Language 4"

  - category: "Technologies & Frameworks"
    items:
      - "Technology 1"
      - "Framework 1"
      - "Tool 1"
      - "Platform 1"

---
```

#### Publications (`publications.md`)
```markdown
---
publications:
  - title: "Your Publication Title"
    authors: "Your Name, et al."
    venue: "Conference or Journal Name, Year"
    link: "https://link-to-publication.com"
    abstract: "Brief description of your publication..."

  - title: "Another Publication Title"
    authors: "Your Name, et al."
    venue: "Another Conference or Journal, Year"
    link: "https://link-to-another-publication.com"
    abstract: "Brief description of this publication..."
---
```

#### Teaching (`teaching.md`)
```markdown
---
teaching:
  - course: "Course Name"
    institution: "University or Institution Name"
    period: "2022-Present"
    description: "Brief description of the course"
    highlights:
      - "Key teaching achievement or responsibility"
      - "Another significant contribution"
      - "One more highlight"

  - course: "Previous Course"
    institution: "Previous Institution"
    period: "2020-2022"
    description: "Description of the course"
    highlights:
      - "Key achievement from this course"
      - "Another important accomplishment"
      - "One more highlight"
---
```

#### Talks (`talks.md`)
```markdown
---
talks:
  - title: "Talk or Presentation Title"
    event: "Event or Conference Name"
    date: "Month Year"
    location: "Location (City, Country)"
    description: "Brief description of your talk"
    link: "https://link-to-talk.com"
    slides: "https://link-to-slides.com"

  - title: "Another Talk Title"
    event: "Another Event"
    date: "Month Year"
    location: "Location (City, Country)"
    description: "Description of this talk"
    link: "https://link-to-another-talk.com"
    slides: "https://link-to-another-slides.com"
---
```

## 🖼️ Adding Your Photo

1. Save your profile photo in the `public` folder
2. Name it `profile.jpg` (or update the reference in your code if using a different name)
3. Make sure it's a professional headshot with good quality

## 📝 Tips for Writing Content

1. Keep descriptions clear and concise
2. Use bullet points for easy reading
3. Focus on achievements rather than just responsibilities
4. Use action verbs to start your descriptions
5. Include measurable results when possible
6. Proofread everything carefully

## ⚠️ Important Notes

1. Don't delete the `---` at the start and end of each file
2. Maintain the indentation (spaces at the start of lines) as shown in the examples
3. Save files after making changes
4. Preview your changes by running the website locally (ask a developer for help) or by committing to your repository

## 🆘 Common Issues

1. **Content not updating?** Make sure you've saved the file and rebuilt the website
2. **Formatting looks wrong?** Check that your Markdown syntax is correct
3. **Website broken?** Make sure you haven't accidentally deleted any necessary `---` or changed the file structure

## 📚 Need More Help?

If you need more detailed help with Markdown formatting, visit:
- [Basic Markdown Guide](https://www.markdownguide.org/basic-syntax/)
- [Markdown Cheat Sheet](https://www.markdownguide.org/cheat-sheet/) 