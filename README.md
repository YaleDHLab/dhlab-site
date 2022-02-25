# Yale DHLAB Website

[![Build Status](https://travis-ci.org/YaleDHLab/dhlab-site.svg?branch=master)](https://travis-ci.org/YaleDHLab/dhlab-site)

This repository hosts the source code for the new website of Yale University's Digital Humanities Lab.

## Developing

First download the application source:

```
git clone https://github.com/YaleDHLab/dhlab-site
cd dhlab-site
```

### Mac Users
Follow [these instructions](https://www.moncefbelyamani.com/how-to-install-xcode-homebrew-git-rvm-ruby-on-mac/#start-here-if-you-choose-the-long-and-manual-route) to ensure modern, non-System ruby on recent versions of OS X, especially on Apple Silicon (M1 chips).

Pay special attention to the section where you [detect, and if neccessary remove](https://www.moncefbelyamani.com/how-to-install-xcode-homebrew-git-rvm-ruby-on-mac/#start-here-if-you-choose-the-long-and-manual-route), previous ruby virtual environments such as rvm, rbenv, and asdf.

Then:
```
brew install chruby ruby-install
ruby-install ruby-2.7.2
echo ". /usr/local/opt/chruby/share/chruby/chruby.sh" >> ~/.zshrc
echo ". /usr/local/opt/chruby/share/chruby/auto.sh" >> ~/.zshrc
echo "chruby ruby-2.7.2" >> ~/.zshrc
```
Important: close and reopen the Terminal.app (all windows, not just your current one).
Verify you're on the right version of Ruby:
```
ruby -v
```
Then install the Ruby dependencies:

```
bundle install
```
On the Mac, use homebrew to install Node:
```
brew install node
```
Then install yarn and install the JavaScript dependencies:

```
npm install -g yarn
yarn install
```

Finally, you can start the development server by running:

```
bundle exec jekyll serve --incremental
```

## Deployment

To deploy the site to GitHub pages you can run:

```
npm run deploy
```

## Tests

To run the test suite, you can run:

```
npm run test
```
