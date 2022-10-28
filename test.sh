#!/usr/bin/env bash

ROOT=$PWD
cd "$ROOT/vite"
npm run test
cd "$ROOT/spa"
npm run test
cd "$ROOT/lib"
npm run test
cd "$ROOT/bin"
npm run test
