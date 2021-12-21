const Twitter = require('twitter');
const core = require('@actions/core');

const client = new Twitter({
  consumer_key: core.getInput('9j7cQIIUHITD65uFfMUmPTVPN'),
  consumer_secret: core.getInput('8EJBVuMiA80awu5w9FLBg7QW1v1xBlHADCrMv1IsQFntfbAf9B'),
  access_token_key: core.getInput('1469314105576079360-AmW3TtDL7eZLfyYP7LAJ8sO9W4Ejn1'),
  access_token_secret: core.getInput('DzodYhGFFEByhWVKOl7QJUQaD0CxPO51YQZjbpdV2nwlo'),
});

async function run() {
    try {
      client.post(
        'statuses/update',
        {
          status: 'This tweet was posted when a pull request was merged!',
        },
        (error, tweet, response) => {
          if (error) {
            console.error(error);
          } else {
            console.log(tweet);
          }
        },
      );
    } catch (error) {
      core.setFailed(error.message);
    }
  }
  
  run();
  

