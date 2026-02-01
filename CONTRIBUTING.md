# Contributing to Continuum Frontend

## Pre-Commit Hooks (Local CI Runners)

This project uses **pre-commit** to automatically run code quality checks before each commit. This ensures that all code meets quality standards before it reaches the repository, catching issues locally before they hit GitHub Actions.

### Quick Setup

Run the setup script from the project root:

```bash
./setup-hooks.sh
```

This will:
- Install frontend npm dependencies
- Install pre-commit (in a local `.venv` if not already installed)
- Configure Git pre-commit and pre-push hooks

### Manual Setup

If you prefer to set things up manually:

```bash
# 1. Set up frontend
cd frontend
npm install

# 2. Install pre-commit (if not already installed)
cd ..
python3 -m venv .venv
source .venv/bin/activate
pip install pre-commit

# 3. Install git hooks
pre-commit install
pre-commit install --hook-type pre-push
```

---

## What Happens on Commit

When you run `git commit`, the following checks run automatically:

### General Checks
| Check | Description |
|-------|-------------|
| Trailing whitespace | Removes trailing whitespace |
| End of file fixer | Ensures files end with a newline |
| YAML/JSON validation | Validates YAML and JSON syntax |
| Large file check | Blocks files > 2MB (increased for SVG assets) |
| Merge conflict check | Detects merge conflict markers |
| Private key detection | Prevents committing secrets |

### Frontend Checks (TypeScript/React)
| Check | Description |
|-------|-------------|
| **TypeScript** | Type checking via `npm run typecheck` |
| **ESLint** | Linting for TypeScript/React |

### On Push Only
| Check | Description |
|-------|-------------|
| **Frontend Build** | Verifies the frontend builds successfully |

---

## Running Hooks Manually

```bash
# Run all hooks on all files
pre-commit run --all-files

# Run a specific hook
pre-commit run frontend-typecheck --all-files
pre-commit run frontend-lint --all-files
pre-commit run frontend-build --all-files

# Run hooks on staged files only
pre-commit run
```

### Available Hook IDs

| Hook ID | Description |
|---------|-------------|
| `frontend-typecheck` | TypeScript type checking |
| `frontend-lint` | ESLint |
| `frontend-build` | Build verification (pre-push only) |

---

## Fixing Common Issues

### TypeScript/React

```bash
cd frontend

# See all lint errors
npm run lint

# Auto-fix what can be fixed
npm run lint:fix

# Check TypeScript errors
npm run typecheck

# Test build
npm run build
```

---

## Common Errors and Solutions

### TypeScript/React

| Error | Solution |
|-------|----------|
| `no-unused-vars` | Remove or use the variable |
| `no-explicit-any` | Replace `any` with a proper type |
| `react-hooks/exhaustive-deps` | Add missing dependencies to the array |
| TypeScript type errors | Add proper type annotations |

---

## Bypassing Hooks (Emergency Only)

In rare cases where you need to commit without running hooks:

```bash
git commit --no-verify -m "your message"
```

⚠️ **Use sparingly** — this defeats the purpose of code quality checks. CI will still run on GitHub and block merging if checks fail.

---

## Troubleshooting

### "pre-commit: command not found"

If you used the setup script, pre-commit is in `.venv`. Run:

```bash
source .venv/bin/activate
```

Or run pre-commit directly:

```bash
.venv/bin/pre-commit run --all-files
```

### Hooks not running

Re-install the hooks:

```bash
source .venv/bin/activate
pre-commit install
pre-commit install --hook-type pre-push
```

### Frontend npm errors

Re-install dependencies:

```bash
cd frontend
rm -rf node_modules
npm install
```

### Build failing

Make sure you're running from the correct directory:

```bash
cd frontend
npm run build
```

---

## Available Scripts

### Frontend (`frontend/`)

| Script | Description |
|--------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run lint` | Run ESLint |
| `npm run lint:fix` | Run ESLint with auto-fix |
| `npm run typecheck` | Run TypeScript type checking |
| `npm run preview` | Preview production build |

---

## Project Structure

```
continuum-frontend/
├── frontend/
│   ├── src/
│   │   ├── api/          # API client functions
│   │   ├── assets/       # Static assets
│   │   ├── components/   # React components
│   │   ├── data/         # Mock data
│   │   ├── hooks/        # Custom React hooks
│   │   ├── pages/        # Page components
│   │   ├── store/        # State management
│   │   ├── App.tsx       # Main app component
│   │   ├── main.tsx      # Entry point
│   │   └── router.tsx    # Route definitions
│   ├── public/           # Public static files
│   ├── package.json      # npm dependencies
│   ├── tsconfig.json     # TypeScript config
│   ├── vite.config.ts    # Vite config
│   └── eslint.config.js  # ESLint config
├── .pre-commit-config.yaml
├── setup-hooks.sh
└── docker-compose.yml
```
