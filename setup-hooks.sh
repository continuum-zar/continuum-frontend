#!/bin/bash

# Setup script for local pre-commit hooks (Frontend)
# This script installs all necessary dependencies and configures git hooks

set -e  # Exit on error

echo "🔧 Setting up local pre-commit hooks for Continuum Frontend..."
echo ""

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Check if we're in the project root
if [ ! -d "frontend" ]; then
    echo -e "${RED}Error: Please run this script from the project root directory (continuum-frontend)${NC}"
    exit 1
fi

# Function to check command exists
command_exists() {
    command -v "$1" >/dev/null 2>&1
}

echo "📋 Checking prerequisites..."

# Check Python (needed for pre-commit itself)
if ! command_exists python3; then
    echo -e "${RED}Error: Python 3 is required for pre-commit but not installed${NC}"
    exit 1
fi
echo -e "  ${GREEN}✓${NC} Python 3 found"

# Check Node.js
if ! command_exists node; then
    echo -e "${RED}Error: Node.js is required but not installed${NC}"
    exit 1
fi
echo -e "  ${GREEN}✓${NC} Node.js found"

# Check npm
if ! command_exists npm; then
    echo -e "${RED}Error: npm is required but not installed${NC}"
    exit 1
fi
echo -e "  ${GREEN}✓${NC} npm found"

echo ""
echo "📦 Setting up Frontend..."

cd frontend

if [ ! -d "node_modules" ]; then
    echo "  Installing npm dependencies..."
    npm install
else
    echo "  npm dependencies already installed"
fi

echo -e "  ${GREEN}✓${NC} Frontend dependencies installed"

cd ..

echo ""
echo "🪝 Installing Git Hooks..."

# Ensure pre-commit is installed
if ! command_exists pre-commit; then
    echo "  Pre-commit not found. Creating a local virtual environment for it..."
    if [ ! -d ".venv" ]; then
        python3 -m venv .venv
    fi
    source .venv/bin/activate
    pip install pre-commit -q
    echo -e "  ${GREEN}✓${NC} Pre-commit installed in .venv"
fi

# Function to run pre-commit (from venv if needed)
run_pre_commit() {
    if [ -f ".venv/bin/pre-commit" ]; then
        .venv/bin/pre-commit "$@"
    else
        pre-commit "$@"
    fi
}

run_pre_commit install
run_pre_commit install --hook-type pre-push

echo -e "  ${GREEN}✓${NC} Git hooks installed"

echo ""
echo "🧪 Running initial hook validation..."

# Run hooks on all files to verify setup (but don't fail the script)
echo "  Running pre-commit on all files (this may take a moment)..."
if run_pre_commit run --all-files; then
    echo -e "  ${GREEN}✓${NC} All hooks passed!"
else
    echo -e "  ${YELLOW}⚠${NC} Some hooks failed - this is expected if there are existing issues"
    echo "     Run 'pre-commit run --all-files' to see details"
fi

echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo -e "${GREEN}✅ Setup complete!${NC}"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""
echo "The following hooks will now run automatically:"
echo ""
echo "  On every commit:"
echo "    • Trailing whitespace removal"
echo "    • End-of-file fixes"
echo "    • YAML/JSON validation"
echo "    • Large file detection"
echo "    • Frontend TypeScript check"
echo "    • Frontend ESLint"
echo ""
echo "  On every push:"
echo "    • Frontend build verification"
echo ""
echo "📚 Useful commands:"
echo "    pre-commit run --all-files    # Run all hooks manually"
echo "    pre-commit run <hook-id>      # Run a specific hook"
echo "    git commit --no-verify        # Skip hooks (use sparingly!)"
echo ""
