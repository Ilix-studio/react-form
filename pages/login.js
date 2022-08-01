import React from "react";
import { useForm, Controller } from "react-hook-form";
import Form from "../components/Form";

const LoginScreen = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  return <div>
    <Form onsubmit>

    </Form>
  </div>;
};

export default LoginScreen;
