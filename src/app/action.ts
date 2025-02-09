"use server";

export const sendEmail = async (formData: FormData) => {
  const name = formData.get("name");
  const email = formData.get("email");
  const message = formData.get("message");

  if (!name || !email || !message) {
    alert("Please fill out all fields.");
    return;
  }

  console.log({
    name,
    email,
    message,
  });
};
