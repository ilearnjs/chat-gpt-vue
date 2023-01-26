# OpenAI api + Vue

A simple project to play with OpenAI api and Vue components.

To make it work with Vue 3 components update the [following line](https://github.com/ilearnjs/openai-vue/blob/master/prompt/chatGpt/ChatGptController.js#L4).

## Demo

https://user-images.githubusercontent.com/20753143/214729222-f7ad1625-386d-47a5-a8df-d70aa2397b45.mov

## How to run

### Client

```bash
cd client
yarn
yarn serve
```

### Prompt

To make it work you need to put your OpenAI api key and path to the component you want to play with to the `prompt/config.js` file.

```bash
cd prompt
yarn
yarn start
```
