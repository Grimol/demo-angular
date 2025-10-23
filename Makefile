# Variables
NODE_VERSION=18
NPM_CACHE_DIR=~/.npm

install:
	npm ci

install-dev:
	npm install

dev:
	ng serve

build:
	ng build --configuration production

build-dev:
	ng build

test:
	ng test --watch=false --browsers=ChromeHeadless

test-watch:
	ng test

test-ci:
	ng test --watch=false --browsers=ChromeHeadless --code-coverage

test-coverage:
	ng test --watch=false --browsers=ChromeHeadless --code-coverage

lint:
	ng lint

lint-fix:
	ng lint --fix

format:
	npx prettier --write "src/**/*.{ts,html,css,scss}"

clean:
	@if exist dist rmdir /s /q dist
	@if exist node_modules rmdir /s /q node_modules

setup: clean install-dev

ci: install lint test-ci build

preview: build
	npx vercel --prod=false

deploy: build
	npx vercel --prod

.PHONY: install install-dev dev build build-dev test test-watch test-ci test-coverage lint lint-fix format clean setup ci preview deploy