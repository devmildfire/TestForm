import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import getFormValues from "./getFormValues";
import { SyntheticEvent } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const onSubmit = (e: SyntheticEvent<HTMLFormElement, SubmitEvent>) => {
    e.preventDefault();
    const { isEmpty, data, formData } = getFormValues(e.currentTarget);

    if (isEmpty) {
      console.log("please provide all values");
      return;
    }

    // do something
    console.log("data from form fields ... ", data);

    var addedObject: { [k: string]: any } = {};
    addedObject.UserID = "SomeUserID";

    formData.append(`addedObject[UserID]`, "SomeUserID");

    // var jsonString = JSON.stringify(addedObject);

    // formData.append("addedObject", jsonString);

    console.log("formData ... ");

    // Display the key/value pairs
    for (const pair of formData.entries()) {
      console.log(`${pair[0]}, ${pair[1]}`);
    }

    // clear inputs
    // e.currentTarget.reset();

    // fetch("https://httpbin.org/post", {
    //   method: "POST",
    //   body: formData,
    // })
    //   .then((res) => res.json())
    //   .then((data) => console.log(data));

    fetch("http://127.0.0.1:3000/products", {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => console.log("Done!"));
  };

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        <div>
          <img
            alt="api image"
            src="http://localhost:3000/products/onepicture/preview_PicFinder8a75bbd9-4130-4fe1-9177-05e0c9d52fa6.png"
          />
        </div>
        <form className="form" onSubmit={onSubmit}>
          <div className="form-row">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input id="name" type="text" name="name" className="form-input" />
          </div>
          <div className="form-row">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              id="email"
              type="email"
              name="email"
              className="form-input"
            />
          </div>
          <div className="form-row">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              id="password"
              type="password"
              name="password"
              className="form-input"
            />
          </div>
          <div className="form-row">
            <label htmlFor="file" className="form-label">
              file
            </label>
            <input id="file" type="file" name="file" className="form-input" />
          </div>
          <button type="submit" className="btn btn-block">
            Submit
          </button>
        </form>
      </main>
    </>
  );
}
