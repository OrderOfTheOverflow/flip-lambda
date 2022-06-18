# Automation Test in Flip App

This project built to reduce manual testing in our daily software development. We believe that automate testing is one
of key point to tackle too many times for manual testers, especially in regression test.

# Tech Stack

- [Webdriver V6](https://webdriver.io/)
- [Appium server](https://appium.io/docs/en/about-appium/getting-started/?lang=en)
- NodeJS v14
- Java v14
- [Jasmine as test runner](https://jasmine.github.io/)

# Prerequisite

- Install Android Emulator if you want to run in the emulator
- Simulator in XCode if you want to run in the simulator
- Real device if you want to run in your mobile phone

# Quickstart

- Install: Java v14, NodeJS v14, yarn, npm, git
- Go to  root directory
- `yarn global add appium && yarn install`
- Before running tests, please provide apk file in `./automation_tests/apps`, for android it should be `flip.apk`
  and for iOS it should be `Flip.app` or `Flip.ipa`
- Change `.env` value, ask eqi@flip.id for access key flip test API
- Change config value in `./automation_tests/config/constant.conf.js` (change with your own environment). Note that you
  might need to run specific scenarios, you can comment out some scenarios that you don't want to be run.
- open terminal and run `yarn appium`, keep it running.
- Run the tests for Android with `yarn test-app:android` and for iOS with `yarn test-app:ios`

> **Note:**
> This project only handles local execution on 1 em/simulator at a time, not parallel execution. For more info about that Google on setting up a grid with Appium.

## Installing Appium on a local machine

See [Installing Appium on a local machine](./docs/APPIUM.md)

## Setting up Android and iOS on a local machine

To setup your local machine to use an Android emulator and an iOS simulator
see [Setting up Android and iOS on a local machine](./docs/ANDROID_IOS_SETUP.md)

## Quick start

## Config

This project uses a specific config for iOS and Android, see [configs](./config/) and are based on `wdio.shared.conf.js`
. This shared config holds all the defaults so the iOS and Android configs only need to hold the capabilities and specs
that are needed for running on iOS and or Android (app or browser).

Since we do not have Appium installed as part of this package, this has been configured to use the global Appium
installation. This is configured in wdio.shared.conf.js

```
    // ====================
    // Appium Configuration
    // ====================
    services: [
        [
            'appium',
            {
            // For options see
            // https://github.com/webdriverio/webdriverio/tree/master/packages/wdio-appium-service
                args: {
                // For arguments see
                // https://github.com/webdriverio/webdriverio/tree/master/packages/wdio-appium-service
                },
                command: 'appium',
            },
        ],
    ],
```

## Locator strategy for native apps

The locator strategy for this project is to use `accessibilityID`'s, see also
the [WebdriverIO docs](https://webdriver.io/docs/selectors/#accessibility-id) or this newsletter
on [AppiumPro](https://appiumpro.com/editions/20).
`accessibilityID`'s make it easy to script once and run on iOS and Android because most of the apps already have
some `accessibilityID`'s.

If `accessibilityID`'s can't be used and for example only XPATH is only available then the following setup could be used
to make cross-platform selectors

```js
const SELECTORS = {
  WEB_VIEW_SCREEN: browser.isAndroid
    ? "*//android.webkit.WebView"
    : "*//XCUIElementTypeWebView"
};
```

## Cloud vendors

### Lambda Test

This project now also provides a setup for testing with the Real Device Cloud (RDC) of LambdaTest. Please check this
documentation [Mobile Automation Test using Lambda Test](https://docs.google.com/document/d/1QvK81EVz_AfAHsVfJ84IQPxkWy1Z8QSFUrKubsySm1k/edit)

## FAQ

See [FAQ](./docs/FAQ.md)

## Tips and Tricks

See [Tips and Tricks](./docs/TIPS_TRICKS.md)
