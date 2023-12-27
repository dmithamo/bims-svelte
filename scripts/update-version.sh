#!/bin/bash
echo  "Updating version..."

if [ -e ".env" ] ; then
  version=$(git rev-parse --short HEAD)
  sed -i '' "s/PUBLIC_VERSION=.*/PUBLIC_VERSION=$version/" .env
  echo "Version updated."
  echo "PUBLIC_VERSION=$version"

else
  echo "No .env file found. Please run setup-local.sh first."
fi

