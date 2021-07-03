import {
  CognitoUserPool,
  CognitoUserAttribute,
} from "amazon-cognito-identity-js";

const poolData = {
  UserPoolId: "us-east-1_MbArJOZj4",
  ClientId: "69jpaktslu50nhlvrmdjran0v4",
};

const userPool = new CognitoUserPool(poolData);

const createUser = (props) => {
  return new Promise((resolve, reject) => {
    const { user } = props;
    console.log(props);
    const attributeList = [];
    const name = {
      Name: "name",
      Value: user.firstname + " " + user.lastname,
    };
    const preferredUsername = {
      Name: "preferred_username",
      Value: user.preferredUsername,
    };
    const gender = {
      Name: "gender",
      Value: user.gender,
    };
    const birthdate = {
      Name: "birthdate",
      Value: user.birthdate,
    };
    const address = {
      Name: "address",
      Value: user.address,
    };
    const email = {
      Name: "email",
      Value: user.email,
    };
    const phoneNumber = {
      Name: "phone_number",
      Value: user.phoneNumber,
    };

    const attributeName = new CognitoUserAttribute(name);
    const attributePreferredUsername = new CognitoUserAttribute(
      preferredUsername
    );
    const attributeGender = new CognitoUserAttribute(gender);
    const attributeBirthdate = new CognitoUserAttribute(birthdate);
    const attributeEmail = new CognitoUserAttribute(email);
    const attributePhoneNumber = new CognitoUserAttribute(phoneNumber);
    const attributeAddress = new CognitoUserAttribute(address);

    attributeList.push(attributeName);
    attributeList.push(attributePreferredUsername);
    attributeList.push(attributeGender);
    attributeList.push(attributeBirthdate);
    attributeList.push(attributeEmail);
    attributeList.push(attributePhoneNumber);
    attributeList.push(attributeAddress);

    userPool.signUp(
      user.preferredUsername,
      user.confirmPassword,
      attributeList,
      null,
      function (err, result) {
        if (!err) {
          let user = result.user;
          console.log(user);
          resolve(user);
        } else {
          reject(err);
        }
      }
    );
  });
};

export default createUser;
