# Bahria Foundation College Nuzhat Yazdani Campus

The official website for Bahria Foundation College, Nuzhat Yazdani Campus, built by Ahmed Hannan. This web application serves as a digital presence for the institution, providing information to students, parents, and visitors.

## About the Project

Bahria Foundation College is dedicated to nurturing disciplined, confident, and intellectually curious students. Through quality education, strong moral values, and a commitment to excellence, we prepare our students to meet future challenges and serve society with integrity.

This website provides comprehensive information about the institution including its history, academic programs, faculty, facilities, and latest announcements and events.

## Tech Stack

### Backend
- **Ruby on Rails 8.1.1** - Full-stack web framework
- **PostgreSQL** - Relational database
- **Active Storage** - File attachment handling for events and announcements
- **Action Mailer** - Email delivery for notifications and contact form
- **Action Text** - Rich text content for announcements
- **BCrypt** - Secure password hashing

### Frontend
- **Tailwind CSS 4.4** - Utility-first CSS framework
- **DaisyUI 5.5** - Component library for Tailwind CSS
- **Hotwire** - Modern HTML-first approach
  - **Turbo** - Speed up page loads and form submissions
  - **Stimulus** - Lightweight JavaScript controller framework

### Additional Libraries
- **Trix** - Rich text editor (via Action Text)
- **Propshaft** - Modern asset pipeline

## Features

### Public Pages
- **Home** - Overview and featured content
- **About** - Institution history, vision, mission, and principal's message
- **Academics** - Academic programs and curriculum information
- **Facilities** - Campus facilities and infrastructure
- **Faculty** - Teaching staff information
- **Contact** - Contact form for inquiries

### Dynamic Content
- **Announcements** - Rich text announcements with pinning functionality
- **Events** - School events with photo galleries and lightbox viewer

### User Authentication
- Session-based authentication for administrators

### Design
- Responsive design for all screen sizes
- Clean, professional appearance
- Accessible color scheme with DaisyUI theming

## Database Schema

- **users** - Admin user accounts with secure password authentication
- **sessions** - Session tracking for login persistence
- **announcements** - News and updates with rich text content
- **events** - School events with date and photo attachments
- **active_storage_blobs/attachments/variant_records** - File storage for uploaded images
- **action_text_rich_texts** - Rich text content storage

## Upcoming Features

- **Downloads Section** - Downloadable timetables, circulars, and syllabus documents
- **Fee Voucher Viewer** - Online fee voucher access and management
- Additional student and parent resources

## Getting Started

### Prerequisites
- Ruby 3.x
- PostgreSQL
- Node.js and Yarn

### Setup

```bash
# Install dependencies
bundle install
yarn install

# Setup database
rails db:create
rails db:migrate

# Start development server
bin/dev
```

Visit `http://localhost:3000` to see the application.

## Deployment

The application is configured for deployment with Docker containers. Kamal deployment configuration is included for future use.

## License

This project was developed by Ahmed Hannan for Bahria Foundation College Nuzhat Yazdani Campus.

---

© 2025 Bahria Foundation College Nuzhat Yazdani Campus

