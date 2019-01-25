# hku-scraper

Scraper for hku.

# Requirements

- `node`@^10.15
-

# Usage

- [Travis CI Cron Jobs](https://docs.travis-ci.com/user/cron-jobs/)

# Troubleshooting

- [Finding missing chrome binaries (Amazon AWS)](https://aws.amazon.com/ko/blogs/devops/how-to-run-headless-front-end-tests-with-aws-cloud9-and-aws-codebuild/)

  ```
  cd node_modules/puppeteer/.local-chromium/linux-*/chrome-linux/
  ldd chrome | grep not
  ```

- [Troubleshooting (Puppeteer)](https://github.com/GoogleChrome/puppeteer/blob/master/docs/troubleshooting.md)
