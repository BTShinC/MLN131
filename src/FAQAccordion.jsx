import React from "react";
import { Collapse, Typography } from "antd";

const { Panel } = Collapse;
const { Paragraph } = Typography;

const faqs = [
  {
    question: "Dân chủ XHCN là gì?",
    answer: "Dân chủ XHCN là chế độ chính trị bảo đảm quyền lực thuộc về nhân dân, mọi chính sách đều vì lợi ích của nhân dân."
  },
  {
    question: "Nhà nước pháp quyền XHCN có đặc điểm gì?",
    answer: "Nhà nước của nhân dân, do nhân dân, vì nhân dân; thượng tôn pháp luật; quyền lực nhà nước thống nhất, có kiểm soát."
  },
  {
    question: "Chuyển đổi số đóng vai trò gì?",
    answer: "Chuyển đổi số giúp nâng cao hiệu quả quản lý, minh bạch hóa, tăng sự tham gia của người dân vào quản lý xã hội."
  }
];

export default function FAQAccordion() {
  return (
    <Collapse accordion style={{ marginBottom: 24 }}>
      {faqs.map((faq, idx) => (
        <Panel header={faq.question} key={idx}>
          <Paragraph>{faq.answer}</Paragraph>
        </Panel>
      ))}
    </Collapse>
  );
}
