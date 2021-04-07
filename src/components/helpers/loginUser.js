import * as AWS from "aws-sdk/global";
import {
  AuthenticationDetails,
  CognitoUserPool,
  CognitoUser,
} from "amazon-cognito-identity-js";

let cognitoUser;

export const loginUser = (props) => {
  const authenticationData = {
    Username: props.username,
    Password: props.password,
  };

  const authenticationDetails = new AuthenticationDetails(authenticationData);

  const poolData = {
    UserPoolId: "us-east-2_3nFztHSmf",
    ClientId: "av5qrejuu51rc4fruva66irim",
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
      const accessToken = result.getIdToken().getJwtToken();
      AWS.config.region = "us-east-2";
      AWS.config.credentials = new AWS.CognitoIdentityCredentials({
        IdentityPoolId: "us-east-2:88d42ddb-71ff-493e-b2c4-b64b23f37456",
        Logins: {
          "cognito-idp.us-east-2.amazonaws.com/us-east-2_3nFztHSmf": accessToken,
        },
      });

      AWS.config.credentials.refresh((error) => {
        if (error) {
          console.log("from refresh" + error);
          props.reject(error);
        } else {
          // instantiate AWS service object like S3 or Dynamodb
          console.log(result);
          console.log("Successfully logged!!");
          props.resolve(result);
        }
      });
    },
    onFailure: function (error) {
      console.log(error);
      alert(error.message || JSON.stringify(error));
    },
  });
};

export const logoutUser = () => {
  cognitoUser.signOut();
  console.log("User is logged out!");
};
