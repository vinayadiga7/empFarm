export default validate = (props) => {
  let errorObject = [];
  let regex = "";
  if (props.name === "email") {
    regex = new Regex("[a-z0-9]+@[a-z]{2}.[a-z]{3}");
    if (!regex.test(props.value)) {
      errorObject.push(`username should be in proper format 'abc@abc.abc.' `);
      throw new error(errorObject);
    }
  }
  if (props.name === "password") {
    if (props.value.length < 8) {
      errorObject.push("Length of password should be greater than 8.");
      throw new error(errorObject);
    }
    regex = new Regex("[a-z]+[A-Z]+[0-9]+[!@#$%]+");
    if (!regex.test(props.value)) {
      errorObject.push(
        "Password should contain atleast one uppercase character, one lowercase character, one digit, one special character (!@$#%)."
      );
      throw new error(errorObject);
    }
  }
};
