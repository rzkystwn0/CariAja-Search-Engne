import Head from "next/head";
import { useState } from "react";
import Router from "next/router";
import Loader from "../components/Loader";

export default function Home() {
  const [search, setSearch] = useState("");

  function Searching() {
    if (!search) {
    } else {
      Router.push({
        pathname: `/search/${search}`,
      });
    }
  }

  return (
    <>
      <Head>
        <title>CariAja - Seacrch Engine</title>
      </Head>
      <div className="container flex items-center h-screen">
        <div className="sm:w-6/12 w-12/12 mx-auto">
          <img src="CariAja1..png" className="mx-auto sm:w-[350px] w-[300px]" />
          <div className="">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                Searching();
              }}
            >
              <div className="border border-black/60  items-center my-6 flex sm:w-8/12 justify-between mx-auto py-3 px-4 rounded-full ">
                <input
                  type="text"
                  placeholder="Cari"
                  className="bg-transparent h-6 outline-0 text-xl"
                  onChange={(e) => {
                    setSearch(e.target.value);
                  }}
                />
                <button
                  onClick={(e) => {
                    Searching();
                  }}
                >
                  <img src="search.svg" />
                </button>
              </div>
            </form>
          </div>
          <p className="poopins mt-20 text-black/40 sm:text-base text-xs text-center w-5/12 sm:w-3/12 mx-auto">
            Search Engine created by <a href="https://rzkystwn.netlify.app/" target="_blank" className="underline">Rizky Setiawan.</a>
          </p>
        </div>
      </div>
    </>
  );
}
