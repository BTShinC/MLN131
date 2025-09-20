import React, { useState } from "react";
import "./App.scss";
import { Layout, Menu, Typography, Card, Button, Statistic, Timeline, Row, Col } from "antd";
import ImageCarousel from "./ImageCarousel";
import FAQAccordion from "./FAQAccordion";
import ChartSection from "./ChartSection";
import FeedbackForm from "./FeedbackForm";
import QuizEditor from "./QuizEditor";
import {
  HomeOutlined,
  TeamOutlined,
  BankOutlined,
  GlobalOutlined,
  QuestionCircleOutlined,
  SmileOutlined,
  GithubOutlined,
  LinkedinOutlined,
} from "@ant-design/icons";

const { Header, Sider, Content, Footer } = Layout;
const { Title, Paragraph } = Typography;

export default function App() {
  const [collapsed, setCollapsed] = useState(false);
  const [questions, setQuestions] = useState([
    {
      question: "Nhà nước pháp quyền XHCN Việt Nam có đặc điểm gì?",
      answer: "Nhà nước của nhân dân, do nhân dân, vì nhân dân; quản lý xã hội bằng pháp luật; đảm bảo quyền làm chủ của nhân dân."
    }
  ]);
  const [currentIdx, setCurrentIdx] = useState(0);
  const [quizValue, setQuizValue] = useState("");
  const [quizResult, setQuizResult] = useState(null);

  // Quiz logic
  const handleQuiz = () => {
    if (!questions[currentIdx]) return;
    const ans = questions[currentIdx].answer.trim().toLowerCase();
    if (quizValue.trim().toLowerCase() === ans) {
      setQuizResult("Chính xác!");
    } else {
      setQuizResult("Chưa đúng, hãy thử lại!");
    }
  };

  return (
    <Layout style={{ minHeight: "100vh" }}>
      {/* Sidebar Menu */}
      <Sider collapsible collapsed={collapsed} onCollapse={setCollapsed}>
        <div style={{ color: "white", textAlign: "center", padding: 16, fontWeight: "bold", fontSize: 22 }}>
          <SmileOutlined style={{ fontSize: 32, color: "#fff" }} />
          <div style={{ marginTop: 8 }}>XHCN</div>
        </div>
        <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
          <Menu.Item key="1" icon={<HomeOutlined />}>Giới thiệu</Menu.Item>
          <Menu.Item key="2" icon={<TeamOutlined />}>Dân chủ XHCN</Menu.Item>
          <Menu.Item key="3" icon={<BankOutlined />}>Nhà nước pháp quyền</Menu.Item>
          <Menu.Item key="4" icon={<GlobalOutlined />}>Thực tiễn</Menu.Item>
          <Menu.Item key="5" icon={<QuestionCircleOutlined />}>Quiz</Menu.Item>
        </Menu>
      </Sider>

      {/* Main Content */}
      <Layout>
        <Header style={{ background: "#c62828", padding: 0 }}>
          <Title level={2} style={{ color: "white", textAlign: "center", margin: 0, letterSpacing: 1 }}>
            Dân chủ xã hội chủ nghĩa & Nhà nước pháp quyền XHCN ở Việt Nam
          </Title>
        </Header>

        <Content style={{ margin: "20px" }}>
          {/* Hero Section */}
          <Card style={{ marginBottom: 24, background: "linear-gradient(90deg, #c62828 60%, #f9f9f9 100%)", color: "white" }}>
            <Row align="middle" gutter={32}>
              <Col xs={24} md={16}>
                <Title level={3} style={{ color: "white", marginBottom: 0 }}>Chào mừng đến với XHCN Việt Nam!</Title>
                <Paragraph style={{ color: "#fff", fontSize: 18 }}>
                  Khám phá các giá trị cốt lõi của dân chủ xã hội chủ nghĩa và nhà nước pháp quyền XHCN qua các ví dụ thực tiễn, số liệu, và mini quiz tương tác.
                </Paragraph>
              </Col>
              <Col xs={24} md={8}>
                <Statistic title="Tỷ lệ hài lòng của người dân" value={92.5} suffix="%" valueStyle={{ color: "#fff", fontWeight: "bold" }} />
                <Statistic title="Chỉ số chuyển đổi số" value={78.3} suffix="/ 100" valueStyle={{ color: "#fff", fontWeight: "bold" }} style={{ marginTop: 16 }} />
              </Col>
            </Row>
          </Card>

          {/* Image Carousel */}
          <ImageCarousel />

          {/* Timeline Section */}
          <Card title="Các mốc phát triển quan trọng" style={{ marginBottom: 24 }}>
            <Timeline mode="alternate">
              <Timeline.Item color="green">1945: Thành lập nước Việt Nam Dân chủ Cộng hòa</Timeline.Item>
              <Timeline.Item color="blue">1959: Hiến pháp đầu tiên khẳng định quyền làm chủ của nhân dân</Timeline.Item>
              <Timeline.Item color="red">1986: Đổi mới, phát triển nền dân chủ XHCN</Timeline.Item>
              <Timeline.Item color="purple">2013: Hiến pháp mới, củng cố nhà nước pháp quyền XHCN</Timeline.Item>
              <Timeline.Item color="gold">2025: Đẩy mạnh chuyển đổi số, xây dựng chính quyền số</Timeline.Item>
            </Timeline>
          </Card>

          {/* Chart Section */}
          <ChartSection />

          {/* FAQ Accordion */}
          <FAQAccordion />

          {/* Dân chủ */}

          {/* Dân chủ */}
          <Card title="Dân chủ XHCN ở Việt Nam" style={{ marginBottom: 20 }}>
            <Paragraph>
              Dân chủ XHCN là bản chất của chế độ ta, bảo đảm quyền lực thuộc về nhân dân. Mọi đường lối, chính sách đều vì lợi ích của nhân dân.
            </Paragraph>
            <ul>
              <li>Quyền bầu cử, ứng cử rộng rãi</li>
              <li>Tham gia xây dựng pháp luật, giám sát chính quyền</li>
              <li>Tiếp cận thông tin, phản biện xã hội</li>
            </ul>
          </Card>

          {/* Nhà nước pháp quyền */}
          <Card title="Nhà nước pháp quyền XHCN" style={{ marginBottom: 20 }}>
            <ul>
              <li>Nhà nước của nhân dân, do nhân dân, vì nhân dân.</li>
              <li>Thượng tôn Hiến pháp và pháp luật.</li>
              <li>Quyền lực nhà nước thống nhất, có sự phân công, phối hợp, kiểm soát.</li>
              <li>Đảm bảo quyền con người, quyền công dân</li>
              <li>Chính phủ điện tử, chuyển đổi số mạnh mẽ</li>
            </ul>
          </Card>

          {/* Thực tiễn */}
          <Card title="Liên hệ thực tiễn" style={{ marginBottom: 20 }}>
            <Paragraph>
              Hiện nay, Việt Nam đang đẩy mạnh cải cách hành chính, chuyển đổi số, Quốc hội điện tử, chính quyền số, tạo điều kiện cho người dân tham gia quản lý xã hội.
            </Paragraph>
            <Row gutter={16}>
              <Col xs={24} md={8}>
                <Statistic title="Tỷ lệ dịch vụ công trực tuyến" value={98} suffix="%" />
              </Col>
              <Col xs={24} md={8}>
                <Statistic title="Số đại biểu Quốc hội là nữ" value={30.3} suffix="%" />
              </Col>
              <Col xs={24} md={8}>
                <Statistic title="Tỷ lệ người dân hài lòng với chính quyền" value={92.5} suffix="%" />
              </Col>
            </Row>
          </Card>

          {/* Quiz Editor */}
          <QuizEditor questions={questions} setQuestions={setQuestions} />

          {/* Quiz */}
          {questions.length > 0 && (
            <Card title={`Mini Quiz: ${questions[currentIdx].question}`}> 
              <Paragraph>Nhập câu trả lời của bạn:</Paragraph>
              <input
                type="text"
                value={quizValue}
                onChange={e => { setQuizValue(e.target.value); setQuizResult(null); }}
                style={{ width: "100%", padding: 8, borderRadius: 6, border: "1px solid #ccc", marginBottom: 8 }}
                placeholder="Gõ câu trả lời..."
              />
              <Button type="primary" onClick={handleQuiz} style={{ marginRight: 8 }}>
                Kiểm tra
              </Button>
              <Button onClick={() => { setQuizValue(""); setQuizResult(null); }}>
                Xóa
              </Button>
              {quizResult && (
                <Paragraph style={{ color: quizResult.startsWith("Chính xác") ? "green" : "red", marginTop: 10 }}>
                  {quizResult}
                </Paragraph>
              )}
              <div style={{ marginTop: 16 }}>
                <Button
                  disabled={currentIdx === 0}
                  onClick={() => { setCurrentIdx(i => i - 1); setQuizValue(""); setQuizResult(null); }}
                  style={{ marginRight: 8 }}
                >
                  Câu trước
                </Button>
                <Button
                  disabled={currentIdx === questions.length - 1}
                  onClick={() => { setCurrentIdx(i => i + 1); setQuizValue(""); setQuizResult(null); }}
                >
                  Câu tiếp
                </Button>
              </div>
            </Card>
          )}

          {/* Feedback Form */}
          <FeedbackForm />
        </Content>

        <Footer style={{ textAlign: "center" }}>
          <div>
            © 2025 - Nhóm X | Môn Kinh tế chính trị Mác - Lênin
            <span style={{ marginLeft: 16 }}>
              <a href="https://github.com/" target="_blank" rel="noopener noreferrer" style={{ color: "#fff", marginRight: 8 }}><GithubOutlined /></a>
              <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" style={{ color: "#fff" }}><LinkedinOutlined /></a>
            </span>
          </div>
        </Footer>
      </Layout>
    </Layout>
  );
}
