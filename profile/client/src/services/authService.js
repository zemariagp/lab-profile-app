import axios from "axios";


export const LogIn = async dataForRequest => {
  console.log("dataForRequest", dataForRequest);
  try {

    const response = await axios.post("/auth/login", dataForRequest);
    console.log("response: ", response);
    return response.data.user;

  } catch (error) {
    throw error;
  }

}

export const SignUp = async dataForRequest => {

  try {

    const response = await axios.post("/auth/signup", dataForRequest);
    console.log("response: ", response.data.newUser);
    return response.data.newUser;

  } catch (error) {
    throw error;
  }

}



export const LogOut = async () => {

  try {
    await axios.post("/auth/logout");
  } catch (error) {
    throw error;
  }
} 