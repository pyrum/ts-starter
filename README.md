# ts-boilerplate
This is a typescript starter code with reasonable minimum settings and support packages. Hope this will help you save a lot of time in reading and setting up.
## Usage
* Clone this repo using 'git clone \<this github repo> --depth=1 \<your project name>' 
* run 'yarn install'
* and you're ready to go!
## Pre-requisites
* node, git and vscode, obviously!
* These extensions in vscode
  * prettier
  * eslint
## Features
### Typescript
* run 'yarn compile' to compile and emit 
* Expects all the source code to be in /src
* The emitted js files will be in /dist
* emitOnError is enabled. (set it to false, if you want to be lousy)
### Jasmine
* run 'yarn test' to run all the specs
* specs are expected as /specs/**/*.spec.ts
* specs can be written as typescript files
* A basic spec and it's source file is provided as reference
### Linting
* eslint is used with necessary packages for typescript linting
### Code formatting
* Prettier is configured with reasonable options
* Prettier errors will be reported as eslint errors/warnings
### Development helpers
#### ts-node
* run 'yarn start' to run the index.ts file in /src
#### nodemon
* 'yarn watch' watches /src and /spec by default
* run 'yarn watch xxx' to watch and run command xxx
  * 'yarn watch yarn start' will watch /src and /spec and runs 'yarn start' on modification
