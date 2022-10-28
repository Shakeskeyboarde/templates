#!/usr/bin/env bash

ROOT=$PWD
cd "$ROOT/vite"
npm i
cd "$ROOT/spa"
npm i
cd "$ROOT/lib"
npm i
cd "$ROOT/bin"
npm i