# myjobsearchvue

## Technical usage

1. Typescript Support (The project is converted to Typescript)
2. Class Style Component
3. Proxy (You can change the proxy value in `vue.config.js` as dev server to map the development api endpoint to avoid CORS issue. (Work around))

## Ngrok

- You can easily add the temporary tunnel for external access by running cmd `ngrok http 8081 -host-header='localhost:8081'` (Refer to the documentation of ngrok https://ngrok.com/ )

## API call

- The API call of the project is referenced from another project "myjobsearchlaravel"

## Screenshots

<img src="https://user-images.githubusercontent.com/5112837/71325897-b0cb7c80-24f3-11ea-820b-be91a027ac9f.png" >
<img src="https://user-images.githubusercontent.com/5112837/71325898-b0cb7c80-24f3-11ea-89e6-b8b217a27e94.png" >
<img src="https://user-images.githubusercontent.com/5112837/71325899-b1641300-24f3-11ea-8a23-7cbbf8e607d4.png" >
<img src="https://user-images.githubusercontent.com/5112837/71325900-b1641300-24f3-11ea-9fc1-ad78c85969df.png" >
<img src="https://user-images.githubusercontent.com/5112837/71325901-b1641300-24f3-11ea-851c-29d2f7d927f4.png" >
  
## Design

Reference from this:
https://dribbble.com/shots/8369503-WorkFinder-Job-Board-Platform

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Lints and fixes files

```
npm run lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).
