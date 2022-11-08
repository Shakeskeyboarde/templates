#!/usr/bin/env bash

ROOT=$PWD
cd "$ROOT/vite"
npm run test
npm run prepack
cd "$ROOT/spa"
npm run test
npm run prepack
cd "$ROOT/lib"
npm run test
npm run prepack
cd "$ROOT/bin"
npm run test
npm run prepack
