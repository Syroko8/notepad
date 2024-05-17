# Rest api

We are going to use the Fake API to test rest api calls
https://jsonplaceholder.typicode.com/

The purpose of this project is to test rest api calls and play with the chained promises

## Install npm and nvm

First of all, you need to install npm and nvm. You can follow the instructions in the following link:

https://docs.npmjs.com/downloading-and-installing-node-js-and-npm

`We strongly recommend using a Node version manager like nvm to install Node.js and npm. We do not recommend using a Node installer, since the Node installation process installs npm in a directory with local permissions and can cause permissions errors when you run npm packages globally.`

## Instructions to run the project

Over this folder execute the following commands:

```bash
npm install
npm run start
```
output
```bash
createUser...
{"id":11,"name":"Leanne Graham","username":"Bret","email":"Sincere@april.biz","address":{"street":"Kulas Light","suite":"Apt. 556","city":"Gwenborough","zipcode":"92998-3874","geo":{"lat":"-37.3159","lng":"81.1496"}},"phone":"1-770-736-8031 x56442","website":"hildegard.org","company":{"name":"Romaguera-Crona","catchPhrase":"Multi-layered client-server neural-net","bs":"harness real-time e-markets"}}
createArticle...
{"id":101,"title":"adipisicing aliqua laboris ad pariatur","body":"Aute non quis eu culpa enim fugiat anim irure sit anim. Ipsum labore proident quis laboris ullamco officia cillum aliqua. Cupidatat consequat exercitation nulla sit occaecat aute non labore voluptate id ea. Consectetur excepteur adipisicing est adipisicing incididunt sit commodo tempor ipsum deserunt minim dolor velit id.","userId":11}
createComment...
{"postId":101,"id":501,"name":"dolor officia quis sunt ex","email":"any@gmail.com","body":"Adipisicing eu exercitation minim amet consequat id nostrud voluptate. Ex laboris consequat pariatur aute nostrud cillum. Aliqua veniam id cillum ipsum adipisicing ullamco est do reprehenderit ex minim aliquip Lorem. Sint quis adipisicing non adipisicing adipisicing excepteur occaecat labore proident aliqua aute veniam laboris."}
{"commentId":501,"postId":101,"userId":11}
```


## Basic commands to create a project from the scratch

Execute the following commands to create a project from the scratch, install a dependency and run the project

```bash
npm init -y
npm i lorem-ipsum
npm install
npm run start
```