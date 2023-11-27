const { ComputerVisionClient } = require("@azure/cognitiveservices-computervision");
const { CognitiveServicesCredentials } = require("@azure/ms-rest-azure-js");

async function main() {
  const computerVisionKey = process.env["computerVisionKey"];
  const computerVisionEndPoint =
    process.env["computerVisionEndPoint"];
  const cognitiveServiceCredentials = new CognitiveServicesCredentials(computerVisionKey);
  const client = new ComputerVisionClient(cognitiveServiceCredentials, computerVisionEndPoint);

  const url =
    "https://moderatorsampleimages.blob.core.windows.net/samples/sample16.png";
  const options = {
    maxCandidates: 5,
    language: "en"
  };
  client
    .describeImage(url, options)
    .then((result) => {
      console.log("The result is:");
      console.log(result);
    })
    .catch((err) => {
      console.log("An error occurred:");
      console.error(err);
    });
}

main();

