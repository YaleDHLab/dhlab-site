# Yale DHLAB Website

This repository hosts the source code for the new website of Yale University's Digital Humanities Lab.

## Developing

First download the application source:

```
git clone https://github.com/YaleDHLab/dhlab-site
cd dhlab-site
```

Then install a Ruby version manager and install ruby 2.4.1:

```
brew install rbenv
rbenv install 2.4.1
rbenv local 2.4.1
```

Then install the Ruby dependencies:

```
bundle install
```

Then install yarn and install the JavaScript dependencies:

```
npm install -g yarn
yarn install
```

Finally, you can start the development server by running:

```
bundle exec jekyll serve
```

## Deployment

To deploy the site to GitHub pages you can run:

```
npm run deploy
```