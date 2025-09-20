import React from "react";
import { Carousel } from "antd";

const images = [
  {
    src: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
    caption: "Chuyển đổi số trong quản lý nhà nước"
  },
  {
    src: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=600&q=80",
    caption: "Người dân tham gia bầu cử"
  },
  {
    src: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80",
    caption: "Hội nghị Quốc hội điện tử"
  }
];

export default function ImageCarousel() {
  return (
    <Carousel autoplay style={{ marginBottom: 24 }}>
      {images.map((img, idx) => (
        <div key={idx} style={{ textAlign: "center" }}>
          <img src={img.src} alt={img.caption} style={{ maxHeight: 260, margin: "0 auto", borderRadius: 12 }} />
          <div style={{ color: "#c62828", fontWeight: "bold", marginTop: 8 }}>{img.caption}</div>
        </div>
      ))}
    </Carousel>
  );
}
