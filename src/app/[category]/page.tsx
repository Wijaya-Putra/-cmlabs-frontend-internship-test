"use client";

import { useRouter, usePathname } from "next/navigation";
import axios from "axios";
import { useState, useEffect } from "react";
import Image from "next/image";
import Lenis from "@studio-freight/lenis";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";

interface Meals {
  strMeal: string;
  strMealThumb: string;
  idMeal: string;
}

const Meal = () => {
  // Smooth Scrolling
  const lenis = new Lenis();

  lenis.on("scroll", (e: any) => {
    console.log(e);
  });

  function raf(time: any) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);

  // Fetch data from API
  const router = useRouter();
  const [meals, setMeals] = useState<Meals[]>([]);
  const pathname = usePathname();
  const categoryName = pathname ? pathname.split("/")[1] : "";

  useEffect(() => {
    const fetchMeals = async () => {
      if (categoryName) {
        const res = await axios.get(
          `https://www.themealdb.com/api/json/v1/1/filter.php?c=${categoryName}`
        );
        setMeals(res.data.meals);
      }
    };

    if (categoryName) {
      fetchMeals();
    }
  }, [categoryName]);

  // Image loader
  const myLoader = ({ src }: { src: string }) => {
    return src;
  };

  return (
    <>
      <MaxWidthWrapper>
        <div className="w-full h-96 flex justify-center items-center bg-gray-200">
          <div className="flex flex-col justify-center items-center gap-y-5">
            <p className="text-8xl">Meals Options</p>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-5 pb-20">
          {meals.map((meal) => (
            <div
              key={meal.idMeal}
              className="bg-green-200 flex flex-col space-y-4 items-center p-4"
            >
              <Image
                loader={myLoader}
                src={meal.strMealThumb}
                width={500}
                height={500}
                alt={meal.strMealThumb}
                className="relative w-full h-80 bg-white rounded-md flex items-center justify-center"
              />
              <p className="text-center">{meal.strMeal}</p>
            </div>
          ))}
        </div>
      </MaxWidthWrapper>
    </>
  );
};

export default Meal;
