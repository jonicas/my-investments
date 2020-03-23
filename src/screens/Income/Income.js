import React, { useState, useEffect } from "react";
import dayjs from "dayjs";
import isSameOrAfter from "dayjs/plugin/isSameOrAfter";
import { money } from "utils/formatters";
import useLocalStorage from "utils/useLocalStorage";
import { rendimento } from "utils/api";

import "./Income.css";

import BaseChip from "../../components/BaseChip/BaseChip";
import BaseAreaChart from "../../components/BaseAreaChart/BaseAreaChart";

import mockData from "../../mock-data.json";

dayjs.extend(isSameOrAfter);

function getChartMonths(items, { type = "month" } = {}) {
  let lastMonth = null;
  if (type !== "month") return items;
  const result = items.filter((item, index) => {
    let month = new Date(item[0]).getMonth();
    if (month !== lastMonth || ++index === items.length) {
      lastMonth = month;
      return true;
    }
    return false;
  });
  return result;
}

function filterDataset({ filter, items }) {
  if (filter.type === "all") return items;

  return items.filter(item => {
    const date = dayjs(item[0]);
    let filterDate = dayjs().subtract(filter.value, "month");

    if (filter.type === "month") {
      return filter.value === 0
        ? date.isSame(filterDate, "month")
        : date.isSameOrAfter(filterDate);
    }

    return new Date(item[0]).getFullYear() === filter.value;
  });
}

function generateLabels(items) {
  return items.map((item, index) => {
    return new Intl.DateTimeFormat("pt-BR").format(item[0]);
  });
}

function Income() {
  const incomeData = mockData;
  const currentYear = new Date().getFullYear();
  const dateTypes = {
    month: [
      { label: "Mês atual", value: 0 },
      { label: "3 meses", value: 3 }
    ],
    year: [
      { label: currentYear, value: currentYear },
      { label: currentYear - 1, value: currentYear - 1 }
    ]
  };

  const [data, setData] = useState(getChartMonths(incomeData));
  const [incomeValue, setIncomeValue] = useState(0);
  const [chartLabels, setChartLabels] = useState(generateLabels(data));
  const [filter, setFilter] = useLocalStorage("filter", {
    type: "all",
    value: null
  });

  const chartData = data.map((item, index) => {
    return item[1];
  });

  useEffect(() => {
    const fetchData = async () => {
      const res = await rendimento.get(filter);
      setIncomeValue(res[res.length - 1][1]);
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const res = await rendimento.get(filter);
      setData(
        getChartMonths(filterDataset({ filter, items: res }), {
          type: filter.type === "month" ? "week" : "month"
        })
      );
    };
    fetchData();
  }, [filter, incomeData]);

  useEffect(() => {
    setChartLabels(generateLabels(data));
  }, [data]);

  return (
    <div className="Income_Layout">
      <div className="IncomeValue_Container">
        <h2>{money(incomeValue)}</h2>
        <h1 className="IncomeValue_Label">Meu patrimônio</h1>
      </div>
      <div className="IncomeFilter_Container">
        <div>
          <BaseChip
            active={filter.type === "all"}
            onClick={() => setFilter({ type: "all", value: null })}
          >
            Desde o início
          </BaseChip>
          <BaseChip
            active={filter.type === "year"}
            onClick={() => setFilter({ type: "year", value: 2020 })}
          >
            Ano
          </BaseChip>
          <BaseChip
            active={filter.type === "month"}
            onClick={() => setFilter({ type: "month", value: 0 })}
          >
            Mês
          </BaseChip>
        </div>
        {filter.type !== "all" && <span className="IncomeFilter_Divider" />}
        <div>
          {filter.type !== "all" &&
            dateTypes[filter.type].map(({ label, value }) => (
              <BaseChip
                active={filter.value === value}
                rounded={true}
                key={value}
                onClick={() => setFilter({ ...filter, value })}
              >
                {label}
              </BaseChip>
            ))}
        </div>
      </div>

      <div className="IncomeChart_Container">
        <BaseAreaChart data={chartData} labels={chartLabels} />
      </div>
    </div>
  );
}

export default Income;
