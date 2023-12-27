import UserForm from "@/components/Login/Form";
import { useRouter } from "next/router";
import React from "react";

function LoginPage() {
  const { query } = useRouter();
  return (
    <React.Fragment>
      <UserForm mode={query.mode} />
    </React.Fragment>
  );
}

export default LoginPage;
