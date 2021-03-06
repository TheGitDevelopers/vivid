# Vivid mobile app

## About <a name = "about"></a>

This app allows users to find people who want to drink a beer or to find the interesting event in their city.

## Getting Started <a name = "getting_started"></a>

### Local project

Clone the repository

```
git clone https://github.com/TheGitDevelopers/vivid.git
```

### Installing

The app is running on [Expo](https://expo.io) so you need to install it as global command line.

```
npm install -g expo-cli
```

Please note that almost every JavaScript framework is using Node.js.</br>
React Native and Expo requires Node.js in [10 LTS version](https://nodejs.org), but we encourage to use the latest.
</br>
</br>
Go to the root of the project and type in console:

```
npm install
```

## How to run? <a name = "usage"></a>

After each update, please run command:

```
npm i
npm run test
```

If tests will fail, please contact the person who has committed last.

### Mobile app

1. You can use Expo mobile app to run it on your real mobile devices
2. If you've already installed this app, please type:

```
npm start
```

3. Then scan the QR code with your mobile phone.

### Emulator (Windows only)

1. Download the [Android Studio](https://developer.android.com/studio).
2. Set up Android Studio's [tools](https://docs.expo.io/versions/latest/workflow/android-studio-emulator)
3. Set up a virtual device
4. You should run script named "run_pixel_emulator_script.bat", but make sure that your android emulator has same device version and it's installed in this directory
5. If you've already installed this app, please type:

```
npm start
```

5. Then open metro panel and use the local device option.

## How to commit? <a name = "commit"></a>

Before you start coding, please switch on the master branch and update your local repo

```
git checkout master
git pull origin master
```

Then test all components by typing

```
npm run test
```

If each test passed, you can create your branch:

```
git checkout -b task_name_here
```

Do some changes, commit file and push on your remote branch

```
git add .
git commit -m "your changes"
git push origin task_name_here
```

## What we are using? <a name="tools"></a>

### Testing

1. Jest
2. React test renderer
3. Enzyme

### Linters

1. Eslint
2. Prettier
3. Husky

### Project structure

1. Prop-types
