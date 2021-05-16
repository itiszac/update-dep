# Update Dependencies

update all of your projects outdate node dependencies quick and easy

## Usage

1.  check outdated packages and pipe to clipboard:

         npm outdated --json | pbcopy

1.  paste the content into the latestDeps object inside update.js
1.  check package.json and ensure packages are up to date
1.  remove package-lock.json if exists

         rm package-lock.json

1.  install packages

         npm install
