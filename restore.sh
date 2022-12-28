#!/usr/bin/env bash

ROOT=$PWD

echo
cd "$ROOT/vite"
echo "$(basename $PWD)"
npm i

echo
cd "$ROOT/spa"
echo "$(basename $PWD)"
npm i

echo
cd "$ROOT/lib"
echo "$(basename $PWD)"
npm i

echo
cd "$ROOT/lib-vite"
echo "$(basename $PWD)"
npm i

echo
cd "$ROOT/bin"
echo "$(basename $PWD)"
npm i
