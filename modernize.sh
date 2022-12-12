#!/usr/bin/env bash

ROOT=$PWD
cd "$ROOT/vite"
npm run modernize
npm i
cd "$ROOT/spa"
npm run modernize
npm i
cd "$ROOT/lib"
npm run modernize
npm i
cd "$ROOT/lib-vite"
npm run modernize
npm i
cd "$ROOT/bin"
npm run modernize
npm i
