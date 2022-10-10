import { useContext } from "react";
import { MusicContext } from "../contexts/MusicContext.jsx";
import Chart from "./Chart.jsx";
const ChartList = () => {
  const { chartsData } = useContext(MusicContext);

  return (
    <aside className="chart-section">
      <h2>Top Charts</h2>

      <div className="chart-main">
        {chartsData &&
          chartsData.data.map((info) => <Chart key={info.id} info={info} />)}
      </div>
    </aside>
  );
};

export default ChartList;
