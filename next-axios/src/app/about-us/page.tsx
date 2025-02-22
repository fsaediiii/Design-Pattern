"use client";
import { useEffect, useState } from "react";

const FetchComponent = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://cc.omidbnk.ir/content-management/end-user/get-about-us"
        );
        if (!response.ok) {
          throw new Error("خطا در دریافت اطلاعات");
        }
        const result = await response.json();
        setData(result);
      } catch (err) {
        setError("خطا در دریافت اطلاعات");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <p>در حال بارگذاری...</p>;
  if (error) return <p>{error}</p>;

  return <pre>{JSON.stringify(data, null, 2)}</pre>;
};

export default FetchComponent;
