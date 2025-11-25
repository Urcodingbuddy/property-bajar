# Stage 1: Build
FROM node:20-alpine AS builder
WORKDIR /app

# Enable pnpm
RUN corepack enable && corepack prepare pnpm@latest --activate

# Copy root package files and workspace config
COPY package.json pnpm-workspace.yaml pnpm-lock.yaml ./
COPY turbo.json ./

# Copy all workspace packages
COPY apps/api ./apps/api
COPY packages ./packages

# Install dependencies for entire monorepo
RUN pnpm install --frozen-lockfile

# Build the API app (this will also build dependencies)
RUN pnpm --filter=api build

# Stage 2: Runtime
FROM node:20-alpine
WORKDIR /app

# Enable pnpm
RUN corepack enable && corepack prepare pnpm@latest --activate

# Copy root package files
COPY package.json pnpm-workspace.yaml pnpm-lock.yaml ./
COPY turbo.json ./

# Copy built API and its dependencies
COPY --from=builder /app/apps/api/dist ./apps/api/dist
COPY --from=builder /app/apps/api/package.json ./apps/api/package.json
COPY --from=builder /app/packages ./packages

# Install only production dependencies
RUN pnpm install --frozen-lockfile --prod

EXPOSE 8080
CMD ["node", "apps/api/dist/server.js"]