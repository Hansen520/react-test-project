import React from "react";
import { Card, Col, Image, Progress, Row } from "antd";
import BrokenLine from "@/components/Chart/BrokenLine";
import RoseChart from "@/components/Chart/RoseChart";
import NoNetwork from "@/assets/NoNetwork.svg";
import PieChart from "@/components/Chart/PieChart";
import "./index.less";

const Index = () => {
  return (
    <>
      <Row gutter={16} style={{ height: "160px" }}>
        <Col className="gutter-row" span={6}>
          <Card>
            <Row gutter={16}>
              <Col span={12} style={{ textAlign: "center" }}>
                <h3 style={{ color: "#959595" }}>事项A</h3>
                <div className="number">22</div>
              </Col>
              <Col span={12} style={{ textAlign: "center" }}>
                <Image preview={false} width={200} height={150} src={NoNetwork}></Image>
              </Col>
            </Row>
          </Card>
        </Col>
        <Col className="gutter-row" span={6}>
          <Card>
            <Row gutter={16}>
              <Col span={12} style={{ textAlign: "center" }}>
                <h3 style={{ color: "#959595" }}>事项B</h3>
                <div className="number">22</div>
              </Col>
              <Col span={12} style={{ textAlign: "center" }}>
                <Image preview={false} width={200} height={150} src={NoNetwork}></Image>
              </Col>
            </Row>
          </Card>
        </Col>
        <Col className="gutter-row" span={6}>
          <Card>
            <Row gutter={16}>
              <Col span={12} style={{ textAlign: "center" }}>
                <h3 style={{ color: "#959595" }}>事项C</h3>
                <div className="number">22</div>
              </Col>
              <Col span={12} style={{ textAlign: "center" }}>
                <Image preview={false} width={200} height={150} src={NoNetwork}></Image>
              </Col>
            </Row>
          </Card>
        </Col>
        <Col className="gutter-row" span={6}>
          <Card>
            <Row gutter={16}>
              <Col span={12} style={{ textAlign: "center" }}>
                <h3 style={{ color: "#959595" }}>事项D</h3>
                <div className="number">22</div>
              </Col>
              <Col span={12} style={{ textAlign: "center" }}>
                <Image preview={false} width={200} height={150} src={NoNetwork}></Image>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>

      <Row gutter={16} style={{ marginTop: "6px", height: "300px" }}>
        <Col className="gutter-row" span={6}>
          <Card bodyStyle={{ height: "100%" }}>
            <PieChart />
          </Card>
        </Col>
        <Col className="gutter-row" span={18} style={{ height: "100%" }}>
          <Card bodyStyle={{ height: "100%" }}>
            <BrokenLine />
          </Card>
        </Col>
      </Row>

      <Row gutter={16} style={{ marginTop: "6px", height: "400px" }}>
        <Col className="gutter-row" span={6}>
          <Card bodyStyle={{ height: "100%" }}>
            <div className="eventTitle">
              <h3>事件排名Top5</h3>
            </div>
            <div className="eventItem">
              <div className="itemTitle">
                <span className="itemCube" style={{ backgroundColor: "#1677ff" }}>
                  1
                </span>
                事件项一
              </div>
              <div className="itemContent">
                <Progress percent={95} status="active" strokeColor={{ from: "#fff0f0", to: "#1677ff" }} />
              </div>
            </div>
            <div className="eventItem">
              <div className="itemTitle">
                <span className="itemCube" style={{ backgroundColor: "#51ade9" }}>
                  1
                </span>
                事件项一
              </div>
              <div className="itemContent">
                <Progress percent={85} status="active" strokeColor={{ from: "#fff0f0", to: "#51ade9" }} />
              </div>
            </div>
            <div className="eventItem">
              <div className="itemTitle">
                <span className="itemCube" style={{ backgroundColor: "#79f2bb" }}>
                  1
                </span>
                事件项一
              </div>
              <div className="itemContent">
                <Progress percent={75} status="active" strokeColor={{ from: "#fff0f0", to: "#79f2bb" }} />
              </div>
            </div>
            <div className="eventItem">
              <div className="itemTitle">
                <span className="itemCube" style={{ backgroundColor: "#b058a3" }}>
                  1
                </span>
                事件项一
              </div>
              <div className="itemContent">
                <Progress percent={65} status="active" strokeColor={{ from: "#fff0f0", to: "#b058a3" }} />
              </div>
            </div>
            <div className="eventItem">
              <div className="itemTitle">
                <span className="itemCube" style={{ backgroundColor: "#f0d72a" }}>
                  1
                </span>
                事件项一
              </div>
              <div className="itemContent">
                <Progress percent={55} status="active" strokeColor={{ from: "#fff0f0", to: "#f0d72a" }} />
              </div>
            </div>
          </Card>
        </Col>
        <Col className="gutter-row" span={12}>
          <Card bodyStyle={{ height: "100%" }}>
            <div className="resource" style={{ width: "50%" }}>
              <RoseChart />
            </div>
          </Card>
        </Col>
        <Col className="gutter-row" span={6}>
          <Card>
            <div className="eventTitle">
              <h3>事件排名Top5</h3>
            </div>
            <div className="eventItem">
              <div className="itemTitle">
                <span className="itemCube" style={{ backgroundColor: "#1677ff" }}>
                  1
                </span>
                事件项一
              </div>
              <div className="itemContent">
                <Progress percent={95} status="active" strokeColor={{ from: "#fff0f0", to: "#1677ff" }} />
              </div>
            </div>
            <div className="eventItem">
              <div className="itemTitle">
                <span className="itemCube" style={{ backgroundColor: "#51ade9" }}>
                  1
                </span>
                事件项一
              </div>
              <div className="itemContent">
                <Progress percent={85} status="active" strokeColor={{ from: "#fff0f0", to: "#51ade9" }} />
              </div>
            </div>
            <div className="eventItem">
              <div className="itemTitle">
                <span className="itemCube" style={{ backgroundColor: "#79f2bb" }}>
                  1
                </span>
                事件项一
              </div>
              <div className="itemContent">
                <Progress percent={75} status="active" strokeColor={{ from: "#fff0f0", to: "#79f2bb" }} />
              </div>
            </div>
            <div className="eventItem">
              <div className="itemTitle">
                <span className="itemCube" style={{ backgroundColor: "#b058a3" }}>
                  1
                </span>
                事件项一
              </div>
              <div className="itemContent">
                <Progress percent={65} status="active" strokeColor={{ from: "#fff0f0", to: "#b058a3" }} />
              </div>
            </div>
            <div className="eventItem">
              <div className="itemTitle">
                <span className="itemCube" style={{ backgroundColor: "#f0d72a" }}>
                  1
                </span>
                事件项一
              </div>
              <div className="itemContent">
                <Progress percent={55} status="active" strokeColor={{ from: "#fff0f0", to: "#f0d72a" }} />
              </div>
            </div>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default Index;
