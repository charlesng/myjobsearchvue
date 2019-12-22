# myjobsearchvue

## Technical usage

1. Typescript Support (The project is converted to Typescript)
2. Class Style Component
3. Proxy (You can change the proxy value in `vue.config.js` as dev server to map the development api endpoint to avoid CORS issue. (Work around))
4. Add Theme for Vuetify (`./src/plugins/vuetify.ts`)

## Ngrok

- You can easily add the temporary tunnel for external access by running cmd `ngrok http 8081 -host-header='localhost:8081'` (Refer to the documentation of ngrok https://ngrok.com/ )

## API call

- The API call of the project is referenced from another project "myjobsearchlaravel"

## Screenshots

<img src="https://user-images.githubusercontent.com/5112837/71326104-6d264200-24f6-11ea-9a7d-dcd387d1bebe.png" >
<img src="https://user-images.githubusercontent.com/5112837/71326105-6d264200-24f6-11ea-978d-3ffdf0d135bc.png" >
<img src="https://user-images.githubusercontent.com/5112837/71326100-6d264200-24f6-11ea-9b80-51a0f48400e2.png" >
<img src="https://user-images.githubusercontent.com/5112837/71326102-6d264200-24f6-11ea-9e99-1f233c7f3409.png" >
<img src="https://user-images.githubusercontent.com/5112837/71326103-6d264200-24f6-11ea-9602-b179d95a9b79.png" >
  
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
