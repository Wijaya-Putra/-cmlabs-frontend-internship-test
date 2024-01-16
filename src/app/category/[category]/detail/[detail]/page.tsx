import React from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

interface data {
  idMeal: string;
  strMeal: string;
  strCategory: string;
  strArea: string;
  strInstructions: string;
  strTags: string;
  strYoutube: string;
  strSource: string;
}

export default async function Details({
  params,
}: {
  params: { detail: string };
}) {
  const res = await axios.get(
    `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${params.detail}`
  );

  const data: data[] = res.data.meals;
  console.log(data);
  return (
    <>
      <div className="flex flex-col">
        id : {params.detail}
        {data ? (
          data.map((item) => (
            <>
              <div key={item.idMeal}></div>
              <p>{item.strMeal}</p>
              <p>{item.strCategory}</p>
              <p>{item.strArea}</p>
              <p>{item.strInstructions}</p>
              <p>{item.strTags}</p>
              <p>{item.strYoutube}</p>
              <p>{item.strSource}</p>
            </>
          ))
        ) : (
          <p>No data available</p>
        )}
      </div>
    </>
  );
}
