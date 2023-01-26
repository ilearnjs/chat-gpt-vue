const ChatGptApi = require('./ChatGptApi');

const getUpdateComponentPrompt = (userInput, componentCode) => `
Please update the following Vue 2 component code based on the user input.
Component code:
${componentCode}
User input: ${userInput}
`;

class ChatGptController {
  constructor(apiKey) {
    this.chatGptApi = new ChatGptApi(apiKey);
  }

  async getUpdatedComponent(userInput, componentCode) {
    const prompt = getUpdateComponentPrompt(userInput, componentCode);
    const response = await this.chatGptApi.makeRequest(prompt);
    return response;
  }
}

module.exports = ChatGptController;
