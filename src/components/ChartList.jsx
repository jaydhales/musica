import { useContext } from "react";
import { MusicContext } from "../contexts/MusicContext.jsx";
import Chart from "./Chart.jsx";
import Scroller from "./Scroller.jsx";
const ChartList = () => {
  const { chartsData, screenWidth } = useContext(MusicContext);

  const directionByWidth = screenWidth > 1024 ? "vertical" : "horizontal";

  return (
    <aside className="chart-section">
      <h2>Top Charts</h2>

      <Scroller direction={directionByWidth} customStyle="chart-main">
        {chartsData &&
          chartsData.data.map((info) => <Chart key={info.id} info={info} />)}
      </Scroller>
    </aside>
  );
};

export default ChartList;
