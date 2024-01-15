"use client";
import axios from "axios";
import { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Lenis from "@studio-freight/lenis";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";

interface Category {
  idCategory: string;
  strCategory: string;
  strCategoryDescription: string;
}

const Categories = () => {
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

  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(
        "https://www.themealdb.com/api/json/v1/1/categories.php"
      );
      setCategories(res.data.categories);
    };

    fetchData();
  }, []);

  // Dynamic Routing
  const router = useRouter();

  const handleCategoryClick = (categoryName: string) => {
    router.push(`/${categoryName}`);
  };

  // Image loader
  const myLoader = ({ src }: { src: string }) => {
    return `https://www.themealdb.com/images/category/${src}.png`;
  };

  return (
    <>
      <MaxWidthWrapper className="flex flex-col justify-center items-center">
        <div className="w-full h-96 flex justify-center items-center bg-gray-200">
          <div className="flex flex-col justify-center items-center gap-y-5">
            <p className="text-8xl">Meals App</p>
            <p className="">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Vestibulum convallis ex et magna porta porta. Etiam vitae ligula
              mattis, placerat velit eu, porta nisi. Ut pretium porta quam eget
              tristique. Morbi fringilla justo in hendrerit luctus. Etiam
              gravida felis vitae neque aliquet vestibulum. Morbi elementum
              fermentum quam sed varius. Aliquam erat volutpat. Vivamus leo mi,
              dignissim ac lacus quis, posuere tempor mauris. In in libero
              tempor, faucibus mi sed, volutpat turpis. Ut vitae venenatis ante.
              Proin orci elit, rhoncus nec posuere id, bibendum nec dolor. p
            </p>
          </div>
        </div>

        <div className="text-6xl font-semibold flex justify-center items-center py-16 w-full">
          Categories
        </div>

        <div className="grid grid-cols-3 gap-5">
          {categories.map((category) => (
            <div
              key={category.idCategory}
              onClick={() => handleCategoryClick(category.strCategory)}
              className="flex flex-col space-y-4 items-center p-4 rounded-md"
            >
              <div className="relative w-full h-80 bg-white rounded-md flex items-center justify-center shadow-md hover:shadow-xl">
                <Image
                  loader={myLoader}
                  src={category.strCategory}
                  width={500}
                  height={500}
                  alt={category.strCategory}
                  className="h-full"
                />

                <div className="absolute bg-black bg-opacity-50 rounded-md w-full h-full"></div>

                <div className="absolute text-3xl text-white font-bold">
                  {category.strCategory}
                </div>
              </div>
            </div>
          ))}
        </div>
      </MaxWidthWrapper>
    </>
  );
};

export default Categories;
