import React from "react";
import { PieChart, Pie, Cell, Label, ResponsiveContainer } from "recharts";

const Example = () => {
  const data = [
    { name: "Group A", value: 900 },
    { name: "Group B", value: 400 },
  ];
  const COLORS = ["#393939", "#FF6020"];

  const radius = 65;
  const strokeWidth = 13; // Set to 0 to remove stroke

  return (
    <div className="relative z-[2] w-[178px] h-[178px] rounded-[45px] bg-[#2F2F2F] flex justify-center items-center flex-col ">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart width={178} height={178}>
          <Pie
            data={data}
            innerRadius={radius - strokeWidth}
            outerRadius={radius}
            fill="#8884d8"
            dataKey="value"
            stroke="none"
            startAngle={360}
            endAngle={0}
            labelLine={false}
            cornerRadius={40}
            className="focus:outline-none focus:border-none"
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
                style={{
                  filter: `drop-shadow(0px 0px 5px ${
                    COLORS[index % COLORS.length]
                  })`,
                }}
              />
            ))}
            <Label
              content={
                <text
                  x={89}
                  y={89}
                  textAnchor="middle"
                  dominantBaseline="middle"
                  fill="#FFF"
                  fontFamily="Metropolis-bold"
                  fontSize="20px"
                >
                  5,233
                </text>
              }
            />
            <Label
              content={
                <text
                  x={89}
                  y={110}
                  textAnchor="middle"
                  dominantBaseline="middle"
                  fill="#FF8250"
                  fontFamily="Metropolis-semibold"
                  fontSize="10px"
                >
                  Steps
                </text>
              }
            />
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Example;
