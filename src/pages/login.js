import Link from "next/link";
import styles from "../styles/Form.module.css";
import Image from "next/image";
import { HiAtSymbol, HiFingerPrint } from "react-icons/hi";
import { useState } from "react";
import { signIn, signOut } from "next-auth/react";
import { useFormik } from "formik";
import login_validate from "../lib/validate";
import { useRouter } from "next/router";
import { Button, GoogleButton } from "@/components/button";

export default function Login() {
  const [show, setShow] = useState(false);
  const router = useRouter();
  // formik hook
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validate: login_validate,
    onSubmit,
  });

  async function onSubmit(values) {
    const status = await signIn("credentials", {
      redirect: false,
      email: values.email,
      password: values.password,
      callbackUrl: "/",
    });

    if (status.ok) router.push(status.url);
  }

  // Google Handler function
  async function handleGoogleSignin() {
    signIn("google", { callbackUrl: "http://localhost:3000" });
  }

  // Github Login
  async function handleGithubSignin() {
    signIn("github", { callbackUrl: "http://localhost:3000" });
  }

  return (
    <>
      <section
        className="w-full h-screen flex flex-row justify-around items-center gap-10"
        style={{
          backgroundImage: `url('/assests/bg/BG.svg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* form */}
        <div className=" ">
         
        </div>
        <div className="">
          <form
            className="flex  flex-col gap-5"
            onSubmit={formik.handleSubmit}
          >
            <div
              className={`${styles.input_group} ${
                formik.errors.email && formik.touched.email
                  ? "border-rose-600"
                  : ""
              }`}
            >
              <input
                type="email"
                name="email"
                placeholder="Email"
                className={styles.input_text}
                {...formik.getFieldProps("email")}
              />
            </div>
            {/* {formik.errors.email && formik.touched.email ? <span className='text-rose-500'>{formik.errors.email}</span> : <></>} */}

            <div
              className={`${styles.input_group} ${
                formik.errors.password && formik.touched.password
                  ? "border-rose-600"
                  : ""
              }`}
            >
              <input
                type={`${show ? "text" : "password"}`}
                name="password"
                placeholder="password"
                className={styles.input_text}
                {...formik.getFieldProps("password")}
              />
            </div>

            <div className=" flex flex-row gap-5">
            <Button
                  className={"  font-semibold text-[20px]  sm:text-[24px] px-8  sm:px-12  py-1 sm:py-2"}
                >
                  Login
                </Button>
                <GoogleButton/>
            </div>
            <div className="input-button">
           
            </div>
            <div className="input-button">
             
            </div>
          </form>
          <p className="text-center text-gray-400 ">
            don't have an account yet?{" "}
            <Link href={"/register"}>
              <span className="text-blue-700">Sign Up</span>
            </Link>
          </p>
        </div>
        {/* bottom */}
      </section>
    </>
  );
}
