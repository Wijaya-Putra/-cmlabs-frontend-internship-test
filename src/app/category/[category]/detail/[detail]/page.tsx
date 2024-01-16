import React from "react";
import axios from "axios";
import Image from "next/image";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Link from "next/link";

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
  // Fetch Meal Deatils
  const res = await axios.get(
    `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${params.detail}`
  );

  const data: data[] = res.data.meals;

  // Make link to embed
  let youtubeLink = "";
  data.map((data) => {
    if (data.strYoutube != "") {
      youtubeLink = data.strYoutube;
    }
  });

  let videoId = youtubeLink.split("v=")[1];
  let embedLink = "https://www.youtube.com/embed/" + videoId;

  return (
    <>
      {/* Hero  */}
      <MaxWidthWrapper className="h-fit flex flex-col py-32 gap-y-6 justify-center items-center">
        {data ? (
          data.map((item) => (
            <>
              <h1 key={item.idMeal} className="font-bold text-6xl">
                {item.strMeal}
              </h1>
              <h1 className="font-bold text-lg">
                {item.strCategory}, {item.strArea}
              </h1>
              <div className="w-full h-fit flex flex-col lg:flex-row justify-center gap-y-8">
                <div className="w-full lg:w-1/2  gap-y-4 h-full flex flex-col items-center lg:items-start">
                  <Image
                    src={item.strMealThumb}
                    alt={item.strMealThumb}
                    width={500}
                    height={500}
                    className=" h-full object-cover rounded-lg"
                  />
                  <Link
                    className="text-sm text-gray-400 hover:underline"
                    href={item.strSource}
                  >
                    Source: {item.strSource}
                  </Link>
                </div>
                <div className="w-full lg:w-1/2  gap-y-8 h-full flex flex-col justify-center">
                  <h1 className="font-semibold text-3xl">Instruction </h1>
                  <p className="text-left" style={{ whiteSpace: "pre-line" }}>
                    {item.strInstructions}
                  </p>

                  <h1 className="font-semibold text-3xl">Ingridients </h1>
                  <ul>
                    <li>
                      {item.strMeasure1} {item.strIngredient1}
                    </li>
                    <li>
                      {item.strMeasure2} {item.strIngredient2}
                    </li>
                    <li>
                      {item.strMeasure3} {item.strIngredient3}
                    </li>
                    <li>
                      {item.strMeasure4} {item.strIngredient4}
                    </li>
                    <li>
                      {item.strMeasure5} {item.strIngredient5}
                    </li>
                    <li>
                      {item.strMeasure6} {item.strIngredient6}
                    </li>
                    <li>
                      {item.strMeasure7} {item.strIngredient7}
                    </li>
                    <li>
                      {item.strMeasure8} {item.strIngredient8}
                    </li>
                    <li>
                      {item.strMeasure9} {item.strIngredient9}
                    </li>
                    <li>
                      {item.strMeasure10} {item.strIngredient10}
                    </li>
                    <li>
                      {item.strMeasure11} {item.strIngredient11}
                    </li>
                    <li>
                      {item.strMeasure12} {item.strIngredient12}
                    </li>
                    <li>
                      {item.strMeasure13} {item.strIngredient13}
                    </li>
                    <li>
                      {item.strMeasure14} {item.strIngredient14}
                    </li>
                    <li>
                      {item.strMeasure15} {item.strIngredient15}
                    </li>
                    <li>
                      {item.strMeasure16} {item.strIngredient16}
                    </li>
                    <li>
                      {item.strMeasure17} {item.strIngredient17}
                    </li>
                    <li>
                      {item.strMeasure18} {item.strIngredient18}
                    </li>
                    <li>
                      {item.strMeasure19} {item.strIngredient19}
                    </li>
                    <li>
                      {item.strMeasure20} {item.strIngredient20}
                    </li>
                  </ul>
                </div>
              </div>

              <h1 className="font-bold text-2xl">Youtube Tutorial </h1>

              <iframe
                width="560"
                height="315"
                src={embedLink}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              ></iframe>
            </>
          ))
        ) : (
          <p>No data available</p>
        )}
      </MaxWidthWrapper>
    </>
  );
}
