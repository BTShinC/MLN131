import React, { useState } from "react";
import { Card, Input, Button, message } from "antd";

export default function FeedbackForm() {
  const [value, setValue] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = () => {
    if (!value.trim()) {
      message.error("Vui lòng nhập ý kiến!");
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setValue("");
      message.success("Cảm ơn bạn đã đóng góp ý kiến!");
    }, 1200);
  };

  return (
    <Card title="Đóng góp ý kiến" style={{ marginBottom: 24 }}>
      <Input.TextArea
        rows={3}
        value={value}
        onChange={e => setValue(e.target.value)}
        placeholder="Nhập ý kiến của bạn..."
        style={{ marginBottom: 12 }}
      />
      <Button type="primary" onClick={handleSubmit} loading={loading}>
        Gửi ý kiến
      </Button>
    </Card>
  );
}
