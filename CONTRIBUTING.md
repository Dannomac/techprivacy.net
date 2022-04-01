# Contributing  
If you would like to contribute to techprivacy.net feel free to create an issue or open a pull request.  
Help in any form is appreciated.  
# Local development
This project uses create-react-app as it's base framework.  
## What you'll need
* NodeJS (LTS recommended)  
* npm  
### To run this project locally run these commands:  
**Install dependencies**  
`npm install`  
**Start local development server (live updating)**  
`npm run start`  
**Build for production**  
`npm run build`
# Contributing
A good first contribution is to fix any issues with documentation or fix spelling/grammar mistakes on the website.  
## Steps before submitting pull request
Before you submit your pull request please ensure you have done the following  
* Ran eslint  
`npm run test`
* Ensure code styling matches the following rules:  
  * 4 spaces
  * Spaces not tabs
  * Uses double quotes not single quotes  
  * Try and keep with the general style of the file
  * Semicolons are used
  * No hanging commas

Eslint is configured to check for code styling

A .editorconfig file is used to enforce code 
styling in the editor. To see if your editor supports it visit [editorconfig.org/#pre-installed](https://editorconfig.org/#pre-installed) If it does not there is a good chance an extension can be installed to enable support  

If eslint finds issues with your code styling, it can normally be fixed automatically by running  
`npm run test:fix`