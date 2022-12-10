#!/usr/bin/env bash

rm -rf dist
yarn build
cd dist
git init
git add .
git commit -m update
git remote add origin git@github.com:Promise-Devotion/react-billing-preview.git
git push -f origin master:master
cd -