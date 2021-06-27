import React from "react";
import statisticsData from "../../data/statistical-data";
import { randomBgColor } from "../../utils/randomBgColor";
import {
  StatisticsSection,
  StatisticsUpload,
  StatisticsList,
  StatisticsItem,
  StatisticsLabel,
  StatisticsPercentage,
} from "./Statistics.styles";

function Statistics() {
  return (
    <StatisticsSection>
      <StatisticsUpload>UPLOAD STATS</StatisticsUpload>
      <StatisticsList>
        {statisticsData.map((statisticsEl) => (
          <StatisticsItem
            key={statisticsEl.id}
            style={{ backgroundColor: randomBgColor() }}
          >
            <StatisticsLabel>{statisticsEl.label}</StatisticsLabel>
            <StatisticsPercentage>
              {statisticsEl.percentage}%
            </StatisticsPercentage>
          </StatisticsItem>
        ))}
      </StatisticsList>
    </StatisticsSection>
  );
}

export default Statistics;
