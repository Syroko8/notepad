# General notes

this repo is intended to play with the code and for technical tests.

## docsify reference

https://docsify.js.org/#/quickstart

## Working in local environment

```bash
npm i docsify-cli -g

# or

npm i docsify-cli 
```

init docs
```bash
docsify init ./docs
```

run the server
```bash
docsify serve ./docs
```

Generate de _sidebar.md file
```bash
rm _sidebar.md 

docsify generate .
```

## publishing on github: github-pages

![github_pages.jpg](_img%2Fgithub_pages.jpg)

- into the github repo, go to setting -> pages
- into branch paragraph, select master-> /docs
- configure deployment to static site. An static.yml is created and commit & push to master.
- into the index.html docsify file, setup the repo property `repo`

```javascript
    window.$docsify = {
      el: "#app",
      name: 'notepad',
      repo: 'https://github.com/Syroko8/notepad/tree/main/docs',
      loadSidebar: true,
      subMaxLevel: 3,
      search: 'auto',
      loadNavbar: true,
      coverpage: true,
    }
```

- remove `_sidebar.md` and regenerate the index
 
```bash
rm _sidebar.md 

docsify generate /docs
```

- every time you push the files over the docs folder, the deploy refresh the changes 


![github_deploy.jpg](_img%2Fgithub_deploy.jpg)

