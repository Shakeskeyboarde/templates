#!/usr/bin/env bash
set -e

ROOT=$PWD

echo
cd "$ROOT/vite"
echo "$(basename $PWD)"
npm i
npm run test
npm run prepack

echo
cd "$ROOT/spa"
echo "$(basename $PWD)"
npm i
npm run test
npm run prepack

echo
cd "$ROOT/lib"
echo "$(basename $PWD)"
npm i
npm run test
npm run prepack

echo
cd "$ROOT/lib-vite"
echo "$(basename $PWD)"
npm i
npm run test
npm run prepack

echo
cd "$ROOT/bin"
echo "$(basename $PWD)"
npm i
npm run test
npm run prepack

echo
echo Passed!
echo