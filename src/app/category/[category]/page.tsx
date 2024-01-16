import React from "react";
import axios from "axios";
import Link from "next/link";
import Image from "next/image";

interface data {
  strMeal: string;
  strMealThumb: string;
  idMeal: string;
}

export default async function Meals({
  params,
}: {
  params: { category: string };
}) {
  const res = await axios.get(
    `https://www.themealdb.com/api/json/v1/1/filter.php?c=${params.category}`
  );

  const data: data[] = res.data.meals;
  return (
    <>
      <div className="flex flex-col">
        {params.category}

        {data.map((item) => (
          <>
            <Link
              key={item.idMeal}
              href={`/category/${params.category}/detail/${item.idMeal}`}
            >
              <Image
                src={item.strMealThumb}
                alt={item.strMealThumb}
                width={500}
                height={500}
              />
              {item.strMeal}
            </Link>
          </>
        ))}
      </div>
    </>
  );
}
