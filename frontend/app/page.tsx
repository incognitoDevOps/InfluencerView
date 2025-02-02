"use client";

import Image from "next/image";
import * as React from "react";
import { BarChart } from "@mui/x-charts/BarChart";
import { PieChart } from "@mui/x-charts";

export default function Home() {
  const data = [
    { data: [4, 2, 5, 4, 1], stack: "A", label: "Series A1" },
    { data: [2, 8, 1, 3, 1], stack: "A", label: "Series A2" },
    { data: [4, 6, 5, 8, 9], label: "Series B1" },
  ];
  return (
    <div>
      <BarChart
        series={data}
        barLabel={(item, context) => {
          if ((item.value ?? 0) > 10) {
            return "High";
          }
          return context.bar.height < 60 ? null : item.value?.toString();
        }}
        width={600}
        height={350}
      />

      <PieChart
        margin={{ top: 100, bottom: 100, left: 100, right: 100 }}
        slotProps={{
          legend: {
            direction: "row",
            position: { vertical: "top", horizontal: "middle" },
            padding: 0,
          },
        }}
        series={[]}
      />
    </div>
  );
}
