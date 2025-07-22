# Światowy Związek Żołnierzy Armii Krajowej – Official Website

<a href="https://ak1944.pl">
  <img src="https://ak1944.pl/_next/image?url=%2Fimages%2FLogo_SZZAK.png&w=256&q=75" alt="Logo AK 1944">
</a>

**🌐 <a href="https://ak1944.pl">Visit page: ak1944.pl</a>**

## About the project

This project is a modern version of the official website for the World Union of Home Army Soldiers (ŚZŻAK). The goal is:
Commemorating AK heroes and promoting history
Making valuable historical content accessible in an approachable form
Preserving memory of the past using modern technologies
Creating an engaging, responsive, and easy-to-navigate website

are a team of young developers who are developing this project on a charitable basis, using our skills so that the history of the Home Army is accessible to future generations.

## 🛠️ Technologies

![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)
![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Storybook](https://img.shields.io/badge/Storybook-FF4785?style=for-the-badge&logo=storybook&logoColor=white)
![Jest](https://img.shields.io/badge/Jest-C21325?style=for-the-badge&logo=jest&logoColor=white)
![Axe](https://img.shields.io/badge/Axe-2E2E2E?style=for-the-badge&logo=axe&logoColor=white)
![Stripe](https://img.shields.io/badge/Stripe-008CDD?style=for-the-badge&logo=stripe&logoColor=white)
![Payload](https://img.shields.io/badge/Payload-000000?style=for-the-badge&logo=payload&logoColor=white)

## 🚀 How to run the project locally?

```bash
git clone https://github.com/Delicadency/AK1944.git
cd AK1944
npm install
npm run dev
Open http://localhost:3000 in browser.
```

## ♿ Accessibility (WCAG 2.1 Level AA)

We ensure our website is accessible to all users by implementing:

- **Semantic HTML & ARIA attributes** - proper HTML5 tags and ARIA labels for better screen reader support
- **High contrast mode** - toggle between light/dark themes with WCAG-compliant contrast ratios
- **Responsive Web Design (RWD)** - fully responsive from mobile to 4K displays with touch-friendly elements
- **Full keyboard navigation** - accessible without mouse, with visible focus indicators

All features are regularly tested with Axe DevTools to maintain accessibility standards.

## 📁 Project Structure

```
AK1944/
├── .github/               # GitHub workflows and configs
├── .husky/                # Git hooks for code quality
├── .next/                 # Next.js build output
├── .storybook/            # Storybook configuration
├── node_modules/          # Dependencies
├── public/                # Static assets
│   ├── images/            # Image files
│   ├── favicon.ico        # Site favicon
│   └── vercel.svg         # Vercel logo
├── src/                   # Source code
│   ├── app/               # Next.js App Router
│   ├── components/        # Reusable UI components
│   ├── context/           # React Context providers
│   ├── data/              # Static data files
│   ├── dataAccess/        # Data fetching logic
│   ├── hooks/             # Custom React hooks
│   ├── icons/             # SVG icons
│   ├── mocks/             # Mock data for testing
│   ├── types/             # TypeScript type definitions
│   └── utils/             # Helper functions
├── .env.example           # Environment variables template
├── .eslintrc.json         # ESLint configuration
├── .gitignore             # Git ignore file
├── jest.config.js         # Jest testing config
├── next.config.ts         # Next.js configuration
├── package.json           # Project dependencies
├── tailwind.config.ts     # Tailwind CSS config
└── tsconfig.json          # TypeScript config
```

### Naming Convention

- **Components**: PascalCase (`HeroSection.tsx`, `NavigationBar.tsx`)
- **Files**: camelCase (`useAuth.ts`, `formatDate.ts`)
- **Folders**: kebab-case (`about-us`, `contact-form`)
- **CSS Modules**: camelCase (`styles.module.css`)

## 🤝 Contributing

We welcome contributions to help preserve and share the history of the Home Army! If you'd like to submit a Pull Request, please ensure your code meets our standards:

### Code Quality Requirements:

- **Code formatting** - All code must be formatted with Prettier (run `npm run format`)
- **Linting** - Code must pass ESLint checks without errors (run `npm run lint`)
- **Styling** - Use only Tailwind CSS utility classes as defined in our `tailwind.config.ts`
- **Accessibility** - All new features must be WCAG 2.1 Level AA compliant:
- Test with keyboard navigation
- Verify proper ARIA attributes
- Check contrast ratios
- Test with screen readers

### Before submitting PR:

```bash
npm run lint
npm run format
npm run test
```
