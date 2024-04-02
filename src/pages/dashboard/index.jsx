import React from "react";
import "./styles.scss";
import SideDrawer from "../../components/drawer";
import { CiSearch } from "react-icons/ci";
import { PiHandWaving } from "react-icons/pi";
import { AiOutlineDollarCircle } from "react-icons/ai";
import { FaLongArrowAltUp } from "react-icons/fa";
import { CgNotes } from "react-icons/cg";
import { CiWallet } from "react-icons/ci";
import { BsBucket } from "react-icons/bs";
import { FaLongArrowAltDown } from "react-icons/fa";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Cell,
} from "recharts";
import CircularProgress from "@mui/material/CircularProgress";
import image2 from '../../assets/image2.png'
const Dashboard = () => {
  const cards = [
    {
      id: 1,
      icon: <AiOutlineDollarCircle className="icon" />,
      label: "Earning",
      price: 198,
      percentage: 37.8,
      month: "this month",
    },
    {
      id: 2,
      icon: <CgNotes className="icon2" />,
      label: "Orders",
      price: 2.4,
      percentage: 2,
      month: "this month",
    },
    {
      id: 3,
      icon: <CiWallet className="icon3" />,
      label: "Balence",
      price: 2.4,
      percentage: 2,
      month: "this month",
    },
    {
      id: 4,
      icon: <BsBucket className="icon4" />,
      label: "Total Sales",
      price: 89,
      percentage: 11,
      month: "this month",
    },
  ];
  const colors = ["#8884d8", "#82ca9d", "#ffc658", "#ff7300", "#0088aa"];
  const graphArray = [
    {
      id: 1,
      name: "Jan",
      percentage: 50,
      color: "#f2efff",
    },
    {
      id: 2,
      name: "Feb",
      percentage: 20,
      color: "#f2efff",
    },
    {
      id: 3,
      name: "Mar",
      percentage: 30,
      color: "#f2efff",
    },
    {
      id: 4,
      name: "Apr",
      percentage: 60,
      color: "#f2efff",
    },
    {
      id: 5,
      name: "May",
      percentage: 70,
      color: "#f2efff",
    },
    {
      id: 6,
      name: "Jun",
      color: "#f2efff",
      percentage: 10,
    },
    {
      id: 7,
      name: "Jul",
      color: "#f2efff",
      percentage: 40,
    },
    {
      id: 8,
      name: "Aug",
      color: "#5a32ea",
      percentage: 80,
    },
    {
      id: 9,
      name: "Sep",
      color: "#f2efff",
      percentage: 30,
    },
    {
      id: 10,
      name: "Oct",
      color: "#f2efff",
      percentage: 50,
    },
    {
      id: 11,
      name: "Nov",
      color: "#f2efff",
      percentage: 20,
    },
    {
      id: 12,
      name: "Dec",
      color: "#f2efff",
      percentage: 70,
    },
  ];
  const CustomBar = (props) => {
    const { x, y, width, height, fill } = props;

    return (
      <rect
        x={x}
        y={y}
        width={width}
        height={height}
        fill={fill}
        rx={10}
        ry={10}
      />
    );
  };
  return (
    <div className="dashboard">
      <div className="dashboard_left-container">
        <SideDrawer />
      </div>
      <div className="dashboard_right-container">
        <div className="main">
          <div className="header">
            <div className="left-header">
              <p>Hello Shahrukh</p>
              <PiHandWaving className="icon" />
            </div>
            <div className="right-header">
              <CiSearch className="icon" />
              <input type="search" placeholder="search" />
            </div>
          </div>
          <div className="price-cards">
            {cards.map((card, i) => {
              return (
                <div className="price-card">
                  <div className="card-left ">
                    {card.icon}
                    {/* <AiOutlineDollarCircle className="icon" /> */}
                  </div>
                  <div className="card-right">
                    <p>{card.label}</p>
                    <h4>${card.price}k</h4>
                    <div>
                      <span>
                        {card.percentage > 10 ? (
                          <div>
                            <FaLongArrowAltUp />
                            {card.percentage}%
                          </div>
                        ) : (
                          <div className="percentage2">
                            <FaLongArrowAltDown />
                            {card.percentage}%
                          </div>
                        )}
                      </span>
                      <p>{card.month}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="bar-chart-graph">
            <div className="left-graph">
              <div className="header">
                <div className="left-content">
                  <h5>Overview</h5>
                  <p>Monthly Earning</p>
                </div>
                <div className="right-content">
                  <select>
                    <option>Quaterly</option>
                    <option>yearly</option>
                  </select>
                </div>
              </div>
              <div className="graph">
                <ResponsiveContainer width="100%" height="100%" aspect={3}>
                  <BarChart data={graphArray}>
                    <XAxis dataKey="name" tickLine={false} />
                    <Bar dataKey="percentage" shape={<CustomBar />}>
                      {graphArray.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
            <div className="right-graph">
              <div className="header">
                <h5>Customers</h5>
                <p>Customers that buy products</p>
              </div>
              <div className="circular-bar">
                <CircularProgress
                  variant="determinate"
                  value={65}
                  thickness={8}
                  style={{
                    width: "150px",
                    height: "150px",
                    color: "linear-gradient(to right, #b37eed, #5732e9)",
                  }}
                  className='progress-bar'
                />
                <div className="text-content">
                  <h6>65%</h6>
                  <p>Total New</p>
                  <p>Customers</p>
                </div>
              </div>
              
            </div>
          </div>
          <div className="product-sell">
                <div className="header">
                  <h3>Product Sell</h3>
                  <div>
                    <div>
                      <CiSearch/>
                      <input type="text" placeholder="Search"/>
                    </div>
                    <select>
                      <option>Last 30 days</option>
                      <option>Last 10 days</option>
                    </select>
                  </div>
                </div>
                <div className="sub-header">
                  <div>
                    <p>Product Name</p>
                  </div>
                  <div className="text-2">
                    <p>Stock</p>
                    <p>Price</p>
                    <p>Total Sales</p>
                  </div>
                </div>
                <div className="products">
                  <div className="left-content">
                    <img src={image2}/>
                    <div>
                      <h4>Abstract 3D</h4>
                      <p>Mollitia quia quidem quisquam nobis consequuntur!</p>
                    </div>
                  </div>
                  <div className="right-content">
                    <p>32 in stock</p>
                    <p>$ 45.99</p>
                    <p>20</p>
                  </div>
                </div>
                <div className="products">
                  <div className="left-content">
                    <img src={image2}/>
                    <div>
                      <h4>Abstract 3D</h4>
                      <p>Mollitia quia quidem quisquam nobis consequuntur!</p>
                    </div>
                  </div>
                  <div className="right-content">
                    <p>32 in stock</p>
                    <p>$ 45.99</p>
                    <p>20</p>
                  </div>
                </div>
              </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
