import React from "react";
import axios from "axios";
import Image from "next/image";

interface data {
  idMeal: string;
  strMeal: string;
  strDrinkAlternate: string;
  strCategory: string;
  strArea: string;
  strInstructions: string;
  strMealThumb: string;
  strTags: string;
  strYoutube: string;
  strIngredient1: string;
  strIngredient2: string;
  strIngredient3: string;
  strIngredient4: string;
  strIngredient5: string;
  strIngredient6: string;
  strIngredient7: string;
  strIngredient8: string;
  strIngredient9: string;
  strIngredient10: string;
  strIngredient11: string;
  strIngredient12: string;
  strIngredient13: string;
  strIngredient14: string;
  strIngredient15: string;
  strIngredient16: string;
  strIngredient17: string;
  strIngredient18: string;
  strIngredient19: string;
  strIngredient20: string;

  strMeasure1: string;
  strMeasure2: string;
  strMeasure3: string;
  strMeasure4: string;
  strMeasure5: string;
  strMeasure6: string;
  strMeasure7: string;
  strMeasure8: string;
  strMeasure9: string;
  strMeasure10: string;
  strMeasure11: string;
  strMeasure12: string;
  strMeasure13: string;
  strMeasure14: string;
  strMeasure15: string;
  strMeasure16: string;
  strMeasure17: string;
  strMeasure18: string;
  strMeasure19: string;
  strMeasure20: string;

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
              <Image
                src={item.strMealThumb}
                alt={item.strMealThumb}
                width={500}
                height={500}
              />
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
