import * as AWS from "aws-sdk";

const REGION = "us-east-1";
const userPoolId = "us-east-1_MbArJOZj4";
const identityPoolId = "us-east-1:abca93e9-23bf-439f-adbd-a29f1d7a760a";

const BUCKET_NAME = "empfarm-bucket-1";
const ALBUM_NAME = "treasure";

export const viewAlbum = () => {
  //console.log(sessionStorage.getItem("idToken"));
  return new Promise((resolve, reject) => {
    AWS.config.update({
      region: REGION,
    });
    let loginMap = {};
    loginMap["cognito-idp.us-east-1.amazonaws.com/" + userPoolId] =
      sessionStorage.getItem("idToken");

    AWS.config.credentials = new AWS.CognitoIdentityCredentials({
      IdentityPoolId: identityPoolId,
      Logins: loginMap,
    });

    AWS.config.credentials.get((err) => {
      if (err) {
        console.log(err);
      } else {
        console.log(
          "Access Key Id: " + window.AWS.config.credentials.accessKeyId
        );
        console.log(
          "Secret Access Key: " + window.AWS.config.credentials.secretAccessKey
        );
        console.log(
          " Session Token: " + window.AWS.config.credentials.sessionToken
        );
      }
    });

    var S3Object = new AWS.S3({
      apiVersion: "2006-03-01",
    });
    S3Object.listObjects({ Bucket: BUCKET_NAME }, function (error, data) {
      if (error) {
        console.log("Error", error);
        reject(error);
      } else {
        console.log(data);
        resolve(data.Contents.slice(1));
      }
    });
    //   const accessKeyId = window.AWS.CognitoIdentityCredentials.accessKeyId;
    //   const secretAccessKey =
    //     window.AWS.CognitoIdentityCredentials.secretAccessKey;

    //   console.log(window.AWS.config.credentials);
    //   window.AWS.config.update({
    //     accessKeyId: accessKeyId,
    //     secretAccessKey: secretAccessKey,
    //     region: REGION,
    //     credentials: new window.AWS.CognitoIdentityCredentials({
    //       IdentityPoolId: identityPoolId,
    //     }),
    //   });

    //   new Promise((resolve, reject) => {
    //     const S3Object = new window.AWS.S3({
    //       params: { Bucket: BUCKET_NAME },
    //     });

    //     resolve(S3Object);
    //     reject("There was error while configuring the S3Object!");
    //   }).then((S3Object) => {
    //     console.log();
    //     S3Object.listObjects({ Bucket: BUCKET_NAME }, (err, data) => {
    //       if (err) {
    //         reject(err);
    //       } else {
    //         resolve(data);
    //       }
    //     });
    //   });
  });
};

export const addPhotoToTheAlbum = (files) => {
  if (files.length < 1) {
    alert("You have select the file first!!");
  }
  let file = files[0];
  let filename = file.name;
  let albumPhotosKey = encodeURIComponent(ALBUM_NAME) + "/";

  let photoKey = albumPhotosKey + filename;

  const upload = new AWS.S3.ManagedUpload({
    params: {
      Bucket: BUCKET_NAME,
      Key: photoKey,
      Body: file,
    },
  });

  return upload.promise();
};
