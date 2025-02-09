import Link from "next/link";

const SuccessPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl">
        Great! 🎉 Your message has been sent successfully! 📧
      </h1>
      <Link href={"/"}>
        Go back to the home page
      </Link>
    </div>
  );
};

export default SuccessPage;
