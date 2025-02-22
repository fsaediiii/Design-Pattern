"use client";
import { useEffect, useState } from "react";
import axios from "axios";

const AxiosComponent = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://cc.omidbnk.ir/content-management/end-user/get-about-us"
        );
        setData(response.data);
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

export default AxiosComponent;
