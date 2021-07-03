import * as AWS from "aws-sdk/global";
import {
  AuthenticationDetails,
  CognitoUserPool,
  CognitoUser,
} from "amazon-cognito-identity-js";
import { listAlbums, viewAlbum } from "./AWSS3Connection";

var cognitoUser;

export const loginUser = (props) => {
  return new Promise((resolve, reject) => {
    const authenticationData = {
      Username: props.username,
      Password: props.password,
    };

    const authenticationDetails = new AuthenticationDetails(authenticationData);

    const poolData = {
      UserPoolId: "us-east-1_MbArJOZj4",
      ClientId: "69jpaktslu50nhlvrmdjran0v4",
    };

    const userPool = new CognitoUserPool(poolData);
    const userData = {
      Username: props.username,
      Pool: userPool,
    };
    cognitoUser = new CognitoUser(userData);
    //console.log(props);
    cognitoUser.authenticateUser(authenticationDetails, {
      onSuccess: function (result) {
        //console.log("JWT token" + result.getAccessToken().getJwtToken());
        const idToken = result.getIdToken().getJwtToken();
        const accessToken = result.getAccessToken().getJwtToken();
        sessionStorage.setItem("idToken", idToken);
        sessionStorage.setItem("accessToken", accessToken);
        AWS.config.region = "us-east-1";
        AWS.config.credentials = new AWS.CognitoIdentityCredentials({
          IdentityPoolId: "us-east-1:abca93e9-23bf-439f-adbd-a29f1d7a760a",
          Logins: {
            "cognito-idp.us-east-1.amazonaws.com/us-east-1_MbArJOZj4": idToken,
          },
        });
        console.log(AWS.config.credentials);
        AWS.config.credentials.refresh((error) => {
          if (error) {
            console.log("from refresh" + error);
            reject(error);
          } else {
            // instantiate AWS service object like S3 or Dynamodb
            viewAlbum();
            //console.log(result);
            resolve(result);
          }
        });
      },
      onFailure: function (error) {
        console.log(error);
        reject(error);
        alert(error.message || JSON.stringify(error));
      },
    });
  });
};

export const logoutUser = () => {
  sessionStorage.removeItem("accessToken");
  cognitoUser.signOut();
  console.log("User is logged out!");
};
