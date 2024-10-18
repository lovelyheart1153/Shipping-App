import { getSession } from "@/actions/session";
import LoginForm from "./LoginForm";
import { redirect } from "next/navigation";

const LoginPage = async () => {
  const session = await getSession();
  if (session.isLoggedIn) redirect("/dashboard");

  return (
    <div className="h-full flex justify-center items-center">
      <LoginForm />
    </div>
  );
};

export default LoginPage;
