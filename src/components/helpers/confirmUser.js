import { CognitoUserPool, CognitoUser } from "amazon-cognito-identity-js";

const poolData = {
  UserPoolId: "us-east-2_3nFztHSmf",
  ClientId: "av5qrejuu51rc4fruva66irim",
};

export default confirmUser = (props) => {
  const userPool = new CognitoUserPool(poolData);

  const userData = {
    Username: props.user.username,
    Pool: userPool,
  };

  const cognitoUser = new CognitoUser(userData);
  cognitoUser.confirmRegistration(
    props.verificationCode,
    true,
    function (err, result) {
      if (err) {
        alert(err.message || JSON.stringify(err));
        return;
      }
      console.log("call result " + result);
    }
  );
};
