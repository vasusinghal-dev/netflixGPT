export const validateName = (name) => {
  const nameRegex = /^[A-Za-z\s]+$/;
  if (!name) return "Name is required.";
  if (!nameRegex.test(name)) {
    return "Name cannot contain numbers or special characters.";
  }
  return "";
};

export const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email) return "Email is required.";
  if (!emailRegex.test(email)) return "Please enter a valid email address.";
  return "";
};

export const validatePassword = (password) => {
  if (!password) return "Password is required.";
  if (password.length < 4 || password.length > 60) {
    return "Your password must contain between 4 and 60 characters.";
  }
  return "";
};
