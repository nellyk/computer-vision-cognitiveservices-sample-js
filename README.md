Azure AI Vision with Javascript 

Sample app using the Computer Vision SDK for Javascript. This sample app is a very simple console app that demonstrates:

- Image recognition using the Computer Vision SDK for Javascript.
- Image analysis using the Computer Vision SDK for Javascript.

## Prerequisites

* A subscription key for the Computer Vision Service. See [Try the Computer Vision service for free](https://docs.microsoft.com/en-us/azure/cognitive-services/computer-vision/quickstarts/curl-analyze).
* Node.js version 16x or later.
* Replace the environment variables `computerVisionKey` and `computerVisionEndPoint`  in `ImageAnalysis.js`  and `ImageRecognition.js` with the right values from the speech service created in the previous step.

## Quickstart

```bash
git clone
npm install
npm run ImageAnalysis
npm run ImageRecognition
```

## References

* [Quickstart: Analyze a local image using the Computer Vision SDK for JavaScript](https://docs.microsoft.com/en-us/azure/cognitive-services/computer-vision/quickstarts-sdk/client-library?tabs=visual-studio&pivots=programming-language-javascript)
* [Computer Vision SDK API reference for JavaScript](https://docs.microsoft.com/javascript/api/overview/azure/cognitiveservices/computervision?view=azure-node-latest)