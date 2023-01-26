#!/usr/bin/env node
const assert = require('assert');
const fs = require('fs');
const readline = require('readline-sync');
const { apiKey, filePath } = require('./config');
const ChatGptController = require('./chatGpt/chatGptController');

assert(apiKey, 'Please provide an API key to config.js');
assert(filePath, 'Please provide a file path to config.js');

const chatGptController = new ChatGptController(apiKey);

async function start() {
  let componentCode = fs.readFileSync(filePath, 'utf8');
  let states = [];
  states.push(componentCode);
  
  console.log('Hi there. What do you want to change?');
  while(true) {
    let userInput = readline.question();
    if (userInput === 'b') {
      const previosState = states.pop();
      if (previosState) {
        componentCode = previosState;
        fs.writeFileSync(filePath, componentCode);
        console.log('I did! What do you want to change next?');
        continue;
      }
    }
    try {
      componentCode = await chatGptController.getUpdatedComponent(userInput, componentCode);
      states.push(componentCode);
      fs.writeFileSync(filePath, componentCode);
      console.log('I did! What do you want to change next?');
    } catch (e) {
      console.log('Can\'t update component :(');
      console.error(e);
    }
  }
}

start();
