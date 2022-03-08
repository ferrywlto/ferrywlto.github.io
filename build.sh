#!/usr/bin/env bash
yes | rm -rf docs/*
yarn install
yarn generate
cp -rf dist/* docs
cp CNAME docs