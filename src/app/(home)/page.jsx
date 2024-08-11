"use client";

import Link from "next/link";
import {
  FaArrowLeft,
  FaArrowRight,
  FaFacebook,
  FaInstagram,
  FaX,
} from "react-icons/fa6";
import { FiPhoneCall } from "react-icons/fi";

export default function Home() {
  return (
    <main className="w-full min-h-screen">
      <div className="text-center">
        <div className="fixed inset-x-0 top-0 flex justify-center bg-white py-6 z-50">
          <img src="/images/logo/logo.png" className="h-8" />
        </div>
        <div className="text-blue-500 bg-yellow-50 py-2 mt-[80px] hidden md:block">
          <ul className="text-lg flex flex-row font-medium justify-center gap-10">
            <li>
              <Link href={"/#"}>Tentang Kami</Link>
            </li>
            <li>
              <Link href={"/#"}>Produk</Link>
            </li>
            <li>
              <Link href={"/#"}>
                Inspirasi <span className="italic">Baking</span>
              </Link>
            </li>
            <li>
              <Link href={"/#"}>
                <span className="italic">Baking & Consulting</span>
              </Link>
            </li>
            <li>
              <Link href={"/#"}>Pemberdayaan UKM</Link>
            </li>
            <li>
              <Link href={"/#"}>Acara</Link>
            </li>
            <li>
              <Link href={"/#"}>Hubungi Kami</Link>
            </li>
          </ul>
        </div>
        {/* Carousel */}
        <div
          id="default-carousel"
          className="relative w-full"
          data-carousel="slide"
        >
          {/* Carousel wrapper */}
          <div className="relative h-[870px] overflow-hidden ">
            <div
              className="hidden duration-700 ease-in-out"
              data-carousel-item=""
            >
              <img
                src="/images/pabrik.jpg"
                className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                alt="..."
              />
            </div>
            <div
              className="hidden duration-700 ease-in-out"
              data-carousel-item=""
            >
              <img
                src="/images/banner/banner4.png"
                className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                alt="..."
              />
            </div>
            <div
              className="hidden duration-700 ease-in-out"
              data-carousel-item=""
            >
              <img
                src="/images/pabrik.jpg"
                className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                alt="..."
              />
            </div>
            <div
              className="hidden duration-700 ease-in-out"
              data-carousel-item=""
            >
              <img
                src="/images/banner/banner4.png"
                className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                alt="..."
              />
            </div>
          </div>
          {/* Slider indicators */}
          <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
            <button
              type="button"
              className="w-3 h-3 rounded-full"
              aria-current="true"
              aria-label="Slide 1"
              data-carousel-slide-to={0}
            />
            <button
              type="button"
              className="w-3 h-3 rounded-full"
              aria-current="false"
              aria-label="Slide 2"
              data-carousel-slide-to={1}
            />
            <button
              type="button"
              className="w-3 h-3 rounded-full"
              aria-current="false"
              aria-label="Slide 3"
              data-carousel-slide-to={2}
            />
            <button
              type="button"
              className="w-3 h-3 rounded-full"
              aria-current="false"
              aria-label="Slide 4"
              data-carousel-slide-to={3}
            />
          </div>
          {/* Slider controls */}
          <button
            type="button"
            className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
            data-carousel-prev=""
          >
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
              <svg
                className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 1 1 5l4 4"
                />
              </svg>
              <span className="sr-only">Previous</span>
            </span>
          </button>
          <button
            type="button"
            className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
            data-carousel-next=""
          >
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
              <svg
                className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="m1 9 4-4-4-4"
                />
              </svg>
              <span className="sr-only">Next</span>
            </span>
          </button>
        </div>
        {/* Profil */}
        <section className="px-64 my-20">
          <div className="flex flex-row items-center">
            <div className="flex flex-col w-1/2 justify-start text-left gap-8 pr-36">
              <h2 className="text-5xl font-medium">
                Pioneer in Flour Innovation
              </h2>
              <p>
                PT. Sriboga Raturaya berdiri pada tahun 1995. Pada tahun 2011
                berubah menjadi PT. Sriboga Flour Mill sebagai pelopor Produsen
                Tepung Terigu yang memiliki gizi tinggi di Indonesia.
              </p>
              <div className="">
                <button className="py-2 px-6 border-2 border-blue-800 text-blue-800 font-medium rounded-[3px]">
                  Learn More
                </button>
              </div>
            </div>
            <div className="w-1/2 rounded-lg">
              <img
                src="/images/pabrik.jpg"
                alt=""
                className="object-cover h-[530px] rounded-xl "
              />
            </div>
          </div>
        </section>
        {/* Client */}
        <section id="client" className="my-20">
          <div className="w-full bg-orange-50 py-10">
            <h2 className="text-5xl font-medium">Our Client Trust</h2>
            <div className="w-full inline-flex flex-nowrap overflow-hidden my-16">
              <ul className="flex items-center justify-center md:justify-start [&_li]:mx-20 [&_img]:max-w-none animate-infinite-scroll">
                <li>
                  <img
                    src="/images/brand/ajinomoto.png"
                    alt="Ajinomoto"
                    className="h-28"
                  />
                </li>
                <li>
                  <img
                    src="/images/brand/dara.png"
                    alt="Mi burung dara"
                    className="h-28"
                  />
                </li>
                <li>
                  <img src="/images/brand/jco.png" alt="jco" className="h-28" />
                </li>
                <li>
                  <img
                    src="/images/brand/marugame.png"
                    alt="Marugame"
                    className="h-28"
                  />
                </li>
                <li>
                  <img
                    src="/images/brand/nissin.png"
                    alt="Nissin"
                    className="h-28"
                  />
                </li>
                <li>
                  <img
                    src="/images/brand/pizza-hut.png"
                    alt="Pizza Hut"
                    className="h-28"
                  />
                </li>
                <li>
                  <img
                    src="/images/brand/sari-roti.png"
                    alt="Sari Roti"
                    className="h-28"
                  />
                </li>
              </ul>
              <ul
                className="flex items-center justify-center md:justify-start [&_li]:mx-20 [&_img]:max-w-none animate-infinite-scroll"
                aria-hidden="true"
              >
                <li>
                  <img
                    src="/images/brand/ajinomoto.png"
                    alt="Ajinomoto"
                    className="h-28"
                  />
                </li>
                <li>
                  <img
                    src="/images/brand/dara.png"
                    alt="Mi burung dara"
                    className="h-28"
                  />
                </li>
                <li>
                  <img src="/images/brand/jco.png" alt="jco" className="h-28" />
                </li>
                <li>
                  <img
                    src="/images/brand/marugame.png"
                    alt="Marugame"
                    className="h-28"
                  />
                </li>
                <li>
                  <img
                    src="/images/brand/nissin.png"
                    alt="Nissin"
                    className="h-28"
                  />
                </li>
                <li>
                  <img
                    src="/images/brand/pizza-hut.png"
                    alt="Pizza Hut"
                    className="h-28"
                  />
                </li>
                <li>
                  <img
                    src="/images/brand/sari-roti.png"
                    alt="Sari Roti"
                    className="h-28"
                  />
                </li>
              </ul>
            </div>
          </div>
        </section>
        {/* Product */}
        <section id="product" className="px-64 my-20">
          <div className="flex flex-row justify-between items-center">
            <h2 className="text-5xl font-medium">Our superior product</h2>
            <Link href={"/#"} className="text-blue-800 font-medium">
              See all product
            </Link>
          </div>
          <div className="grid grid-cols-4 gap-10 mt-16">
            <div className="flex flex-col justify-center gap-6">
              <img
                src="/images/pabrik.jpg"
                className="object-cover h-[480px] rounded-2xl"
                alt=""
              />
              <p className="text-xl">Tepung Terigu Double Zero</p>
              <div>
                <button className="py-2 px-6 border-2 border-blue-800 text-blue-800 font-medium rounded-[3px]">
                  See Product
                </button>
              </div>
            </div>
            <div className="flex flex-col justify-center gap-6">
              <img
                src="/images/pabrik.jpg"
                className="object-cover h-[480px] rounded-2xl"
                alt=""
              />
              <p className="text-xl">Tepung Terigu Double Zero</p>
              <div>
                <button className="py-2 px-6 border-2 border-blue-800 text-blue-800 font-medium rounded-[3px]">
                  See Product
                </button>
              </div>
            </div>
            <div className="flex flex-col justify-center gap-6">
              <img
                src="/images/pabrik.jpg"
                className="object-cover h-[480px] rounded-2xl"
                alt=""
              />
              <p className="text-xl">Tepung Terigu Double Zero</p>
              <div>
                <button className="py-2 px-6 border-2 border-blue-800 text-blue-800 font-medium rounded-[3px]">
                  See Product
                </button>
              </div>
            </div>
            <div className="flex flex-col justify-center gap-6">
              <img
                src="/images/pabrik.jpg"
                className="object-cover h-[480px] rounded-2xl"
                alt=""
              />
              <p className="text-xl">Tepung Terigu Double Zero</p>
              <div>
                <button className="py-2 px-6 border-2 border-blue-800 text-blue-800 font-medium rounded-[3px]">
                  See Product
                </button>
              </div>
            </div>
          </div>
        </section>
        {/* Goals */}
        <section
          id="goals"
          className="text-center text-white bg-blue-700 w-full"
        >
          <div className="w-full py-20 flex justify-center">
            <div className="w-[580px]">
              <h3 className="text-5xl font-medium">
                From us to your favorite dish
              </h3>
              <p className="my-10">
                We're passionate about feeding the ones we love delicious dishes
                made from the highest quality ingredients. Get inspired for your
                next meal or baking project by browsing through our library of
                original recipes featuring our ancient and heritage grains.
              </p>
              <button className="py-2 px-6 border-2 rounded-[3px]">
                Discover recipes
              </button>
              <div className="flex flex-row justify-center mt-8">
                <img
                  src="/images/logo/bakery.png"
                  alt="bakery logo"
                  className="w-32"
                />
              </div>
            </div>
          </div>
        </section>
        {/* Baking Class */}
        <section id="class" className="text-left pl-64 my-20">
          <h2 className="text-5xl font-medium">Upcoming Baking Class & Demo</h2>
          <div className="flex flex-row gap-10 mt-10">
            <div className="flex flex-col gap-4 w-72">
              <img
                src="/images/pabrik.jpg"
                alt=""
                className="object-cover w-72 h-72 rounded-xl"
              />
              <div className="flex-grow">
                <p className="text-2xl">
                  Baking Demo Surabaya, Come & join us!
                </p>
              </div>
              <div className="mt-auto">
                <p>14 Januari 2023</p>
              </div>
            </div>
            <div className="flex flex-col gap-4 w-72">
              <img
                src="/images/pabrik.jpg"
                alt=""
                className="object-cover w-72 h-72 rounded-xl"
              />
              <div className="flex-grow">
                <p className="text-2xl">Content 2</p>
              </div>
              <div className="mt-auto">
                <p>14 Januari 2023</p>
              </div>
            </div>
            <div className="flex flex-col gap-4 w-72">
              <img
                src="/images/pabrik.jpg"
                alt=""
                className="object-cover w-72 h-72 rounded-xl"
              />
              <div className="flex-grow">
                <p className="text-2xl">Content 2</p>
              </div>
              <div className="mt-auto">
                <p>14 Januari 2023</p>
              </div>
            </div>
            <div className="flex flex-col gap-4 w-72">
              <img
                src="/images/pabrik.jpg"
                alt=""
                className="object-cover w-72 h-72 rounded-xl"
              />
              <div className="flex-grow">
                <p className="text-2xl">Content 2</p>
              </div>
              <div className="mt-auto">
                <p>14 Januari 2023</p>
              </div>
            </div>
            <div className="flex flex-col gap-4 w-72">
              <img
                src="/images/pabrik.jpg"
                alt=""
                className="object-cover w-72 h-72 rounded-xl"
              />
              <div className="flex-grow">
                <p className="text-2xl">Content 2</p>
              </div>
              <div className="mt-auto">
                <p>14 Januari 2023</p>
              </div>
            </div>
          </div>
          <div className="flex flex-row gap-8 mt-10">
            <FaArrowLeft className="cursor-pointer text-3xl" />
            <FaArrowRight className="cursor-pointer text-3xl" />
          </div>
        </section>
        {/* Story */}
        <section id="story" className="px-64 my-40 text-left">
          <div className="flex flex-row justify-between items-center">
            <h2 className="text-5xl font-medium">Our Newest Story</h2>
            <Link href={"/#"} className="text-blue-800">
              See all stories
            </Link>
          </div>
          <div className="flex flex-row gap-12 mt-10">
            <div className="flex flex-col gap-4 w-1/2">
              <img
                src="/images/pabrik.jpg"
                alt=""
                className="object-cover w-full h-72 rounded-xl"
              />
              <div className="flex-grow mb-8">
                <p className="text-2xl">Story 1</p>
              </div>
              <div className="mt-auto">
                <p>14 Januari 2023</p>
              </div>
            </div>
            <div className="flex flex-col gap-4 w-1/2">
              <img
                src="/images/pabrik.jpg"
                alt=""
                className="object-cover w-full h-72 rounded-xl"
              />
              <div className="flex-grow mb-8">
                <p className="text-2xl">Story 2</p>
              </div>
              <div className="mt-auto">
                <p>14 Januari 2023</p>
              </div>
            </div>
          </div>
        </section>
      </div>
      <footer className="w-full bg-blue-800 py-16 text-white px-64">
        <div className=" w-full flex flex-row gap-10 justify-between">
          <ul className="w-3/4 grid grid-rows-3 grid-flow-col">
            <li>Tentang Kami</li>
            <li>Produk</li>
            <li>Inspirasi Baking</li>
            <li>Baking & Consulting</li>
            <li>Pemberdayaan UKM</li>
            <li>Acara</li>
            <li>Hubungi Kami</li>
          </ul>
          <div className="flex flex-col gap-3 w-1/4">
            <div className="">
              <img src="/images/logo/logo.png" className="h-12" alt="logo" />
            </div>
            <p>Follow Us</p>
            <div className="flex flex-row gap-6 text-3xl">
              <FaInstagram />
              <FaFacebook />
              <FaX />
            </div>
          </div>
        </div>
        <div className="mt-10 flex flex-row items-end justify-between w-full">
          <div className="flex flex-row items-center gap-4 w-3/4">
            <FiPhoneCall className="text-6xl" />
            <div className="flex flex-col">
              <p>Customer Care</p>
              <p className="font-bold text-3xl">0-800-140-1109</p>
            </div>
          </div>
          <div className="w-1/4">
            <p>&copy; 2024 Develop by NEXA</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
