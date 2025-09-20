import React from "react";
import { Card } from "antd";
import { Pie } from "@ant-design/plots";

const data = [
  { type: "Dân chủ trực tiếp", value: 35 },
  { type: "Dân chủ đại diện", value: 50 },
  { type: "Khác", value: 15 }
];

const config = {
  appendPadding: 10,
  data,
  angleField: "value",
  colorField: "type",
  radius: 0.9,
  label: {
    type: "outer",
    content: "{name}: {percentage}"
  },
  interactions: [{ type: "element-active" }],
};

export default function ChartSection() {
  return (
    <Card title="Tỷ lệ các hình thức dân chủ" style={{ marginBottom: 24 }}>
      <Pie {...config} />
    </Card>
  );
}
