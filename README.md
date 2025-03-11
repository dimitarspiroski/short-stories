# Short Stories

Welcome to the **Short Stories** project! This web application allows users to explore, write, and manage short stories and novels. The platform is designed with multiple user roles: **Readers**, **Authors**, and **Editors** (Admins). Each role has specific capabilities, from reading and writing stories to reviewing and managing content.

## Features

- **Readers** can explore and read stories and novels.
- **Authors** can write and submit stories and novels for review.
- **Editors** (Admins) can review and approve submitted content, manage authors, and select featured stories (Editor's Choice).

## Tech Stack

This project utilizes a modern stack with the following key technologies:

- **Angular 19** - A powerful framework for building dynamic single-page applications (SPAs).
- **Tailwind CSS** - A utility-first CSS framework that enables rapid UI design.
- **Flowbite** - A UI component library built on top of Tailwind CSS, providing pre-designed, responsive components.

### Role-based Access Control (RBAC)

The application has a role-based system where users can have one of the following roles:

- **Reader**: A user who can view stories and novels but cannot contribute content.
- **Author**: A user who can submit new stories for approval.
- **Editor (Admin)**: A user who can approve content, manage users, and select featured stories (Editor’s Choice).

### Data Flow

1. **Authentication**: Users authenticate via Firebase Authentication or any custom authentication method.
2. **Data Management**: Data is fetched and manipulated through Angular services that communicate with the backend (Firebase or custom REST APIs).
3. **UI Updates**: Components are responsible for presenting the data in the UI, using **RxJS** observables to handle asynchronous data.

## Scripts

**Local**: Starts the Angular development server with Hot Module Replacement (HMR) disabled and automatically opens the app in your browser. You can run this with the following command:

```bash
npm run local
```

**Format**: Automatically formats the code using Prettier. You can run this with the following command:

```bash
npm run format
```
