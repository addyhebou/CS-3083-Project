// const signIn = async (email, password, customer) => {
//   try {
//     const response = await fetch(
//       `http://localhost:4000/customers/email/${email}/password/${password}`
//     );
//     const json = await response.json();
//     setCustomer(json);
//     localStorage.setItem('name', customer[0]['name']);
//     localStorage.setItem('password', customer[0]['password']);
//     localStorage.setItem('email', customer[0]['email']);
//     localStorage.setItem('phone', customer[0]['phone']);
//     localStorage.setItem('birth_date', customer[0]['birth_date']);
//     localStorage.setItem('imageURL', customer[0]['image_URL']);
//     window.location.replace('/');
//   } catch (error) {
//     console.log(error.message);
//   }
// };
