import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { MusicContext } from "../contexts/MusicContext";

const Details = () => {
  const { details, setDetails, fetchData } = useContext(MusicContext);
  const { type, query } = useParams();

  console.log(type + "/" + query);

  useEffect(() => {
    async function getDetails() {
      const data = await fetchData(type + "/" + query);

      setDetails(data);
    }

    getDetails();
  }, []);

  console.log(details);

  return <div>Details: {query}</div>;
};

export default Details;
