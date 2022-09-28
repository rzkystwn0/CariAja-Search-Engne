import React, { useState } from "react";
import { useRouter } from "next/router";
import Router from "next/router";
import Head from "next/head";
import axios from "axios";

function keyword(props) {
  const [search, setSearch] = useState("");
  const router = useRouter();
  const { keyword, result } = props;

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
        <title>{keyword} - CariAja</title>
      </Head>
      <div className="container sm:w-12/12 w-11/12">
        <div className="flex border-b-4 items-center py-4">
          <div>
            <a href="/">
              <img src="/CariAja2..png" className="sm:w-[150px] w-[80px] mx-3" />
            </a>
          </div>
          <div className="">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                Searching();
              }}
            >
              <div className="border border-black/60  items-center flex justify-between py-3 px-4 rounded-full sm:mx-12">
                <input
                  type="text"
                  placeholder="Cari"
                  className="bg-transparent sm:h-4 h-4 outline-0 sm:text-md text-sm text-black"
                  onChange={(e) => {
                    setSearch(e.target.value);
                  }}
                />
                <button type="submit"><img src="/search.svg" className="w-[12px]" /></button>
                
              </div>
            </form>
          </div>
        </div>
        <p className="poppins sm:my-3 my-1 text-black">
          Hasil pencarian dari <span className="text-[#00C2FF] italic">"{keyword}"</span>
        </p>
        {
        result.map((dat) => {
          return (
            <div className="border-b-2 sm:py-4 py:1 sm:my-4 my-1" key={dat.position}>
              <a href={dat.link} className="w-11/12 sm:7/12 sm:text-xl text-md text-bold sm:my-2 text-[#FA1313]">
                {dat.title}
              </a>
              <p className="w-11/12 sm:7/12 text-black/60 sm:text-base text-xs">
                {dat.snippet}
              </p>
            </div>
          );
        })
        }
      </div>
    </>
  );
}

export default keyword;

export async function getServerSideProps(ctx) {
  let reqData = JSON.stringify({
    "q": ctx.query.keyword,
    "gl": "id",
    "hl": "en",
    "autocorrect": false
  });
  
  let config = {
    method: 'post',
    url: 'https://google.serper.dev/search',
    headers: { 
      'X-API-KEY': 'c24bd50bd7d94436054affbbe63fac98eeef27b0', 
      'Content-Type': 'application/json'
    },
    data : reqData
  };
  
  const getData = await axios(config).then((response) => {
    return response
  });
  return {
    props: {
      result: getData.data.organic,
      keyword: ctx.query.keyword,
    },
  };
}
