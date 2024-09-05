"use client";

import React, { useState } from "react";
import { Button } from "./custome-btn";
import { useRouter } from "next/navigation";

export const Search = () => {
  const [search, setSearch] = useState("");
  const router = useRouter();
  const handleSearch = () => {
    router.push(`?search=${search}`);
  };
  return (
    <div className=" flex justify-center">
      <input
        onChange={(e) => setSearch(e.target.value)}
        className="border border-slate-400  border-r-0 rounded-sm p-2"
        placeholder="search courses"
      />
      <Button className="rounded-l-none" onClick={handleSearch}>
        search
      </Button>
    </div>
  );
};
