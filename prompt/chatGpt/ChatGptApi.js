const { Configuration, OpenAIApi } = require('openai');

const CHAT_GPT_MODEL = 'text-davinci-003';
const CHAT_GPT_MAX_TOKENS = 1000;

class ChatGptApi {
  constructor(apiKey) {
    const configuration = new Configuration({
      apiKey,
    });
    this.openai = new OpenAIApi(configuration);
  }

  async makeRequest(prompt) {
    const response = await this.openai.createCompletion({
      model: CHAT_GPT_MODEL,
      max_tokens: CHAT_GPT_MAX_TOKENS,
      prompt: prompt,
    });

    const text = response.data.choices[0].text;
    return text;
  };
}

module.exports = ChatGptApi;
