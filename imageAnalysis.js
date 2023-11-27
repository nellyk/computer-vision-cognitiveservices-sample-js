const { ComputerVisionClient } = require("@azure/cognitiveservices-computervision");
const { CognitiveServicesCredentials } = require("@azure/ms-rest-azure-js");


async function main() {
    const computerVisionKey = process.env["computerVisionKey"];
    const computerVisionEndPoint =
      process.env["computerVisionEndPoint"];
    const cognitiveServiceCredentials = new CognitiveServicesCredentials(computerVisionKey);
    const client = new ComputerVisionClient(cognitiveServiceCredentials, computerVisionEndPoint);
  
    const describeURL = 'https://raw.githubusercontent.com/Azure-Samples/cognitive-services-sample-data-files/master/ComputerVision/Images/celebrities.jpg';

    const features = ['Categories','Brands','Adult','Color','Description','Faces','Objects','Tags'];
    const domainDetails = ['Celebrities','Landmarks'];
    
    client
      .analyzeImage(describeURL, {visualFeatures: features, details: domainDetails})
      .then((result) => {
        //feature is not supported. Please apply for access at https://aka.ms/celebrityrecognition
        console.log("The result is:");
        console.log(result);
      })
      .catch((err) => {
        console.log("An error occurred:");
        console.error(err);
      });
  }
  
  main();