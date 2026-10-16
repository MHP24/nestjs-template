<h1 align="center">⭐ NestJS Template ⭐</h1>

<div align="center">
  <a href="https://mg-hp.com/" target="blank">
    <img src="https://github.com/marwin1991/profile-technology-icons/assets/136815194/519bfaf3-c242-431e-a269-876979f05574" width="200" alt="NestJS logo" />
  </a>

  <p>
    <strong>A ready-to-use NestJS starter with linting, commit conventions, env validation and Docker hot reload — on any OS.</strong>
  </p>

  <p>
    <img src="https://img.shields.io/badge/node-24.21.0-5FA04E?logo=nodedotjs&logoColor=white" alt="Node.js 24.21.0" />
    <img src="https://img.shields.io/badge/NestJS-12-E0234E?logo=nestjs&logoColor=white" alt="NestJS 12" />
    <img src="https://img.shields.io/badge/TypeScript-6-3178C6?logo=typescript&logoColor=white" alt="TypeScript 6" />
    <img src="https://img.shields.io/badge/ESLint-10-4B32C3?logo=eslint&logoColor=white" alt="ESLint 10" />
    <img src="https://img.shields.io/badge/Docker-ready-2496ED?logo=docker&logoColor=white" alt="Docker ready" />
  </p>
</div>

---

## 📕 About

This template gives you a clean NestJS project with the tooling already wired up, so you can start writing features instead of configuring them. It works the same on macOS, Linux and Windows, including hot reload inside Docker.

Testing is intentionally left out: pick the framework that fits your project (Jest, Vitest, etc.).

## ✨ Features

| Feature | Details |
|---|---|
| **ESLint + Prettier** | Flat config with `typescript-eslint` and Prettier integration |
| **Git hooks** | Husky runs ESLint on staged files before each commit and builds before each push |
| **Conventional Commits** | Commit messages are validated with commitlint |
| **Env validation** | `.env` variables are validated at startup with Joi; the app fails fast if something is missing |
| **Global validation pipe** | DTOs are validated and unknown properties are rejected |
| **Graceful shutdown** | Shutdown hooks are enabled, so lifecycle hooks run on `SIGTERM`/`SIGINT` |
| **Path alias** | Import from `@/` instead of long relative paths (`@/config` → `src/config`) |
| **Docker hot reload** | File-polling watch mode, so changes are picked up on Windows too |

## 📋 Requirements

- [Node.js](https://nodejs.org/en) **24.21.0** (pinned in `.nvmrc`, so `nvm use` picks it up)
- [Yarn](https://classic.yarnpkg.com/) 1.x
- [Docker](https://www.docker.com/) (optional, only for the Docker workflow)

## 🚀 Getting started

**1. Install dependencies**

```bash
nvm use
yarn
```

**2. Set up your environment variables**

Copy the template and fill in the values:

```bash
cp .env.template .env
```

| Variable | Type | Description |
|---|---|---|
| `PORT` | Positive integer | Port the app listens on |

**3. Run the app**

With Docker:

```bash
docker compose -f docker-compose.dev.yml up --build
```

Without Docker:

```bash
yarn start:dev
```

## 🛠️ Scripts

| Command | Description |
|---|---|
| `yarn start:dev` | Start in watch mode |
| `yarn start:debug` | Start in watch mode with the debugger attached |
| `yarn build` | Compile the project into `dist/` |
| `yarn start:prod` | Run the compiled build |
| `yarn lint` | Lint and auto-fix TypeScript files |
| `yarn format` | Format source files with Prettier |

## 📁 Project structure

```
src/
├── config/
│   ├── app.config.ts   # Env loading and Joi validation schema
│   └── index.ts
├── app.module.ts       # Root module
└── main.ts             # Bootstrap: validation pipe, shutdown hooks
```

## 📝 Commit conventions

Commits must follow the [Conventional Commits](https://www.conventionalcommits.org/) format, otherwise the commit is rejected:

```bash
git commit -m "feat(users): add sign-up endpoint"
git commit -m "fix: handle missing PORT variable"
```

Common types: `feat`, `fix`, `chore`, `docs`, `refactor`, `test`, `perf`, `ci`.
