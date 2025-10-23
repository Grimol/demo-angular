# AnkhTrack

Angular application with complete CI/CD pipeline.

## 🚀 Quick Start

```bash
# Install dependencies
make install

# Start development server
make dev

# Run tests
make test

# Build for production
make build
```

## 📋 Available Commands

### Development
- `make install` - Install dependencies with npm ci
- `make install-dev` - Install dependencies with npm install
- `make dev` - Start development server
- `make setup` - Clean and install dependencies

### Testing
- `make test` - Run tests (single run)
- `make test-watch` - Run tests in watch mode
- `make test-ci` - Run tests with coverage for CI
- `make test-coverage` - Run tests with coverage report

### Quality & Build
- `make lint` - Run ESLint
- `make lint-fix` - Fix ESLint errors automatically
- `make format` - Format code with Prettier
- `make build` - Build for production
- `make build-dev` - Build for development

### Deployment
- `make preview` - Deploy to Vercel preview
- `make deploy` - Deploy to Vercel production

### CI/CD
- `make ci` - Complete CI pipeline (install + lint + test + build)
- `make clean` - Clean dist and node_modules

## 🔧 CI/CD Pipeline

### Automated Testing
- ✅ Tests run automatically on pull requests
- ✅ Linting checks code quality
- ✅ Code coverage reports generated
- ✅ Build verification

### Deployment
- ✅ Automatic deployment to Vercel
- ✅ Preview deployments for pull requests
- ✅ Production deployment on main branch

### GitHub Actions
- **Tests Workflow** (`.github/workflows/test.yml`) - Runs on pull requests
- **CI/CD Workflow** (`.github/workflows/ci.yml`) - Full pipeline with deployment

## 🌐 Live Application

Production: https://demo-angular-henna.vercel.app

## 📊 Code Coverage

Current coverage: ~68% statements, 62% lines

Coverage reports are generated in the `coverage/` directory after running tests with coverage.

## 🛠️ Tech Stack

- **Framework**: Angular 20.3
- **Testing**: Jasmine + Karma
- **Linting**: ESLint + TypeScript ESLint
- **Formatting**: Prettier
- **Build**: Angular CLI
- **Deployment**: Vercel
- **CI/CD**: GitHub Actions

## 📁 Project Structure

```
src/
├── app/
│   ├── components/          # Application components
│   │   ├── dashboard/       # Dashboard component
│   │   ├── footer/          # Footer component
│   │   ├── header/          # Header component
│   │   ├── home/            # Home component
│   │   └── login/           # Login component
│   ├── guards/              # Route guards
│   ├── models/              # Data models
│   ├── services/            # Services
│   ├── app.config.ts        # App configuration
│   ├── app.routes.ts        # Route definitions
│   └── app.ts               # Root component
├── index.html               # Main HTML template
├── main.ts                  # Application bootstrap
└── styles.css               # Global styles
```

## 🔒 Environment Setup

1. Node.js 18+ required
2. Angular CLI installed globally
3. Chrome/Chromium for headless testing

## 📝 Development Workflow

1. Create feature branch from `main`
2. Make changes and test locally with `make test`
3. Run full CI pipeline with `make ci`
4. Create pull request (triggers automated tests)
5. Merge to `main` (triggers deployment)

## 🐛 Troubleshooting

- **Tests failing**: Run `make test-coverage` to see detailed coverage
- **Build issues**: Check `make lint` for code quality issues
- **Deployment problems**: Verify Vercel configuration in `vercel.json`