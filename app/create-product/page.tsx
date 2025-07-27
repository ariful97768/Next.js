import { addProduct } from "@/prisma/prisma-db";
import { redirect } from "next/navigation";
import React from "react";
import Submit from "../components/submit";

const CreateProduct = () => {
  async function AddProduct(formData: FormData) {
    "use server";
    const title = formData.get("title") as string;
    const price = formData.get("price") as string;
    const description = formData.get("dsc") as string;
    await addProduct(title, parseInt(price), description);
    redirect("/products-db");
  }
  return (
    <form action={AddProduct}>
      <input
        style={{ border: "2px solid red" }}
        type="text"
        name="title"
        id=""
      />
      <input
        style={{ border: "2px solid red" }}
        type="text"
        name="price"
        id=""
      />
      <input style={{ border: "2px solid red" }} type="text" name="dsc" id="" />
      <Submit />
    </form>
  );
};

export default CreateProduct;
