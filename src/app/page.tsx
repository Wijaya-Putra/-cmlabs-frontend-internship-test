import React from "react";
import axios from "axios";
import Link from "next/link";

interface data {
  idCategory: string;
  strCategory: string;
  strCategoryThumb: string;
  strCategoryDescription: string;
}

export default async function Home() {
  const res = await axios.get(
    "https://www.themealdb.com/api/json/v1/1/categories.php"
  );

  const data: data[] = res.data.categories;

  return (
    <>
      <div className="flex flex-col">
        {data.map((item) => (
          <>
            <Link key={item.idCategory} href={`/category/${item.strCategory}`}>
              {item.strCategory}
            </Link>
          </>
        ))}
      </div>
    </>
  );
}
