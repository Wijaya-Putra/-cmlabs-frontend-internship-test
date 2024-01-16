import React from "react";
import axios from "axios";
import Link from "next/link";
import Image from "next/image";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Separator } from "@/components/ui/separator";

interface data {
  strMeal: string;
  strMealThumb: string;
  idMeal: string;
}

interface categoryData {
  idCategory: string;
  strCategory: string;
  strCategoryThumb: string;
  strCategoryDescription: string;
}

export default async function Meals({
  params,
}: {
  params: { category: string };
}) {
  // Fetch Meals
  const res = await axios.get(
    `https://www.themealdb.com/api/json/v1/1/filter.php?c=${params.category}`
  );

  const data: data[] = res.data.meals;

  // Fetch Category Description
  const des = await axios.get(
    "https://www.themealdb.com/api/json/v1/1/categories.php"
  );

  const categoryData: categoryData[] = des.data.categories;

  let catDesciption = "";
  categoryData.forEach((category) => {
    if (category.strCategory === `${params.category}`) {
      catDesciption = category.strCategoryDescription;
    }
  });

  return (
    <>
      {/* Hero  */}
      <MaxWidthWrapper className="flex flex-col gap-y-6 justify-center items-center  bg-gradient-to-b from-orange-100 to-transparent">
        <h1 className="font-bold text-5xl lg:text-6xl">{params.category}</h1>
        <p className="text-center lg:text-base text-xs">{catDesciption}</p>
      </MaxWidthWrapper>

      <MaxWidthWrapper className="flex flex-col justify-center items-center py-16">
        <h1 className="font-bold text-6xl">Meals</h1>

        <Separator className="my-4" />

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-8 pt-16">
          {data.map((item) => (
            <>
              <Link
                key={item.idMeal}
                href={`/category/${params.category}/detail/${item.idMeal}`}
                className=" relative bg-white rounded-lg hover:shadow-2xl shadow-lg w-40 lg:w-96 h-40 lg:h-96 flex justify-center items-center transition duration-300 ease-in-out hover:scale-110"
              >
                <Image
                  src={item.strMealThumb}
                  alt={item.strMealThumb}
                  width={500}
                  height={500}
                  className=" h-full object-cover rounded-lg"
                />
                <div className="absolute rounded-lg w-full h-full bg-black bg-opacity-40 flex justify-center items-center">
                  <p className="text-white text-2xl lg:text-4xl font-semibold text-center">
                    {item.strMeal}
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
