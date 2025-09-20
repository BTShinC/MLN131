import React, { useState } from "react";
import { Card, Input, Button, List, Typography, message } from "antd";

export default function QuizEditor({ questions, setQuestions }) {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  const handleAdd = () => {
    if (!question.trim() || !answer.trim()) {
      message.error("Vui lòng nhập đủ câu hỏi và đáp án!");
      return;
    }
    setQuestions([...questions, { question, answer }]);
    setQuestion("");
    setAnswer("");
    message.success("Đã thêm câu hỏi mới!");
  };

  return (
    <Card title="Soạn Quiz - Thêm câu hỏi" style={{ marginBottom: 24 }}>
      <Input
        placeholder="Nhập câu hỏi..."
        value={question}
        onChange={e => setQuestion(e.target.value)}
        style={{ marginBottom: 8 }}
      />
      <Input
        placeholder="Nhập đáp án..."
        value={answer}
        onChange={e => setAnswer(e.target.value)}
        style={{ marginBottom: 8 }}
      />
      <Button type="primary" onClick={handleAdd} style={{ marginBottom: 16 }}>
        Thêm câu hỏi
      </Button>
      <List
        bordered
        dataSource={questions}
        renderItem={(item, idx) => (
          <List.Item>
            <Typography.Text strong>{`Câu ${idx + 1}: `}</Typography.Text>
            {item.question}
          </List.Item>
        )}
        locale={{ emptyText: "Chưa có câu hỏi nào." }}
      />
    </Card>
  );
}
