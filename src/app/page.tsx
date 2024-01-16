import React from "react";
import axios from "axios";
import Link from "next/link";
import Image from "next/image";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

interface data {
  idCategory: string;
  strCategory: string;
  strCategoryThumb: string;
  strCategoryDescription: string;
}

export default async function Home() {
  // Fetch Data
  const res = await axios.get(
    "https://www.themealdb.com/api/json/v1/1/categories.php"
  );
  const data: data[] = res.data.categories;

  return (
    <>
      {/* Hero  */}
      <MaxWidthWrapper className="flex flex-col gap-y-6 justify-center items-center bg-no-repeat bg-cover bg-[url('/assets/hero.png')] text-white">
        <h1 className="font-bold text-6xl">Meals App</h1>
        <p className="text-center lg:text-base text-sm">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
          condimentum tristique varius. Curabitur sollicitudin mattis volutpat.
          In ut egestas ante, congue eleifend lacus. Duis elit sem, iaculis nec
          massa in, sagittis feugiat ligula. Duis auctor massa lectus, quis
          fermentum felis ornare vitae. Vestibulum fringilla elit eu aliquet
          tempor. Sed blandit, nulla a eleifend suscipit, sem libero sagittis
          nunc, ac pretium lectus metus vel orci. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. Donec ornare egestas elementum. Fusce
          posuere quam sit amet neque tristique eleifend.
        </p>
        <Button>Explore</Button>
      </MaxWidthWrapper>

      {/* List */}
      <MaxWidthWrapper className="flex flex-col justify-center items-center py-16">
        <h1 className="font-bold text-6xl">Categories</h1>
        <Separator className="my-4" />

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-8 pt-16">
          {data.map((item) => (
            <>
              <Link
                key={item.idCategory}
                href={`/category/${item.strCategory}`}
                className=" relative bg-white rounded-lg hover:shadow-2xl shadow-lg w-40 lg:w-96 h-40 lg:h-96 flex justify-center items-center transition duration-300 ease-in-out hover:scale-110"
              >
                <Image
                  src={item.strCategoryThumb}
                  alt={item.strCategoryThumb}
                  width={500}
                  height={500}
                  className=" h-full object-cover rounded-lg"
                />
                <div className="absolute rounded-lg w-full h-full bg-black bg-opacity-40 flex justify-center items-center">
                  <p className="text-white text-2xl lg:text-4xl font-semibold text-center">
                    {item.strCategory}
                  </p>
                </div>
              </Link>
            </>
          ))}
        </div>
      </MaxWidthWrapper>
    </>
  );
}
