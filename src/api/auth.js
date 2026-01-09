import axios from "axios";

export const userLogin = async (email, password) => {
  const url = "https://api.escuelajs.co/api/v1/auth/login";
  try {
    console.log(email,password)
    const { data } = await axios.post(url, {
      email: email,
      password: password,
    });
    console.log(data);
    return data;
  } catch (err) {
    return err;
  }
};
export const userSignUp = async (name,email, password) => {
  const url = "https://api.escuelajs.co/api/v1/users";
  const avatar = "https://picsum.photos/800";
  try {
    // console.log(name,email,password)
    const { data } = await axios.post(url, {
      name:name,
      email: email,
      password: password,
      avatar:avatar
    });
    console.log(data);
    return data;
  } catch (err) {
    return err;
  }
};


// import axios from "axios";

// export const userLogin = async (email, password) => {
//   const url = "https://api.escuelajs.co/api/v1/auth/login";
//   try {
//     const { data } = await axios.post(url, {
//       email: "john@mail.com",
//       password: "changeme",
//     });

//     // If login is successful, return the data (likely the JWT token)
//     return {
//       success: true,
//       data,
//     };
//   } catch (err) {
//     // Handle different types of errors

//     if (err.response) {
//       if (err.response.status === 401) {
//         // Unauthorized - Invalid credentials
//         console.error("Unauthorized error:", err.response.data);
//         return {
//           success: false,
//           error: "Invalid email or password.",
//         };
//       }

//       // For other response errors (e.g., 500, 404, etc.)
//       console.error("Response error:", err.response.data);
//       console.error("Status code:", err.response.status);
//       return {
//         success: false,
//         error: err.response.data,
//         status: err.response.status,
//       };
//     } else if (err.request) {
//       // If no response was received from the server
//       console.error("Request error:", err.request);
//       return {
//         success: false,
//         error: "No response from server. Please try again later.",
//       };
//     } else {
//       // Handle any other errors (network error, invalid request, etc.)
//       console.error("Error setting up request:", err.message);
//       return {
//         success: false,
//         error: "Error setting up the request. Please check your connection.",
//       };
//     }
//   }
// };
