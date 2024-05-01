import React, { useEffect, useState } from "react";
import { IconType } from "react-icons";
import { AiFillFileText } from "react-icons/ai";
import {
  FaChartBar,
  FaChartLine,
  FaChartPie,
  FaGamepad,
  FaStopwatch,
} from "react-icons/fa";
import { HiMenuAlt4 } from "react-icons/hi";
import { IoIosPeople } from "react-icons/io";
import {
  RiCoupon3Fill,
  RiDashboardFill,
  RiShoppingBag3Fill,
} from "react-icons/ri";
import { Link, useLocation } from "react-router-dom";

const AdminSidebar = () => {
  const location = useLocation();
  const [showModal, setShowModal] = useState<boolean>(false);
  const [phoneActive, setPhoneActive] = useState<boolean>(
    window.innerWidth < 1100
  );

  const resizeHandler = () => {
    setPhoneActive(window.innerWidth < 1100);
  };

  useEffect(() => {
    window.addEventListener("resize", resizeHandler);

    return () => {
      window.removeEventListener("resize", resizeHandler);
    };
  }, []);

  const sidebarData = [
    {
      title: "Dashboard",
      items: [
        { url: "/admin/dashboard", text: "Dashboard", Icon: RiDashboardFill },
        { url: "/admin/products", text: "Product", Icon: RiShoppingBag3Fill },
        { url: "/admin/customer", text: "Customer", Icon: IoIosPeople },
        {
          url: "/admin/transaction",
          text: "Transaction",
          Icon: AiFillFileText,
        },
      ],
    },
    {
      title: "Charts",
      items: [
        { url: "/admin/chart/bar", text: "Bar", Icon: FaChartBar },
        { url: "/admin/chart/pie", text: "Pie", Icon: FaChartPie },
        { url: "/admin/chart/line", text: "Line", Icon: FaChartLine },
      ],
    }
    // {
    //   title: "Apps",
    //   items: [
    //     { url: "/admin/app/stopwatch", text: "Stopwatch", Icon: FaStopwatch },
    //     { url: "/admin/app/coupon", text: "Coupon", Icon: RiCoupon3Fill },
    //     { url: "/admin/app/toss", text: "Toss", Icon: FaGamepad },
    //   ],
    // },
  ];

  return (
    <>
      {phoneActive && (
        <button id="hamburger" onClick={() => setShowModal(true)}>
          <HiMenuAlt4 />
        </button>
      )}

      <aside
        style={
          phoneActive
            ? {
                width: "20rem",
                height: "100vh",
                position: "fixed",
                top: 0,
                left: showModal ? "0" : "-20rem",
                transition: "all 0.5s",
              }
            : {}
        }
      >
        <h2>Logo.</h2>
        {sidebarData.map((data, index) => (
          <SidebarOptions key={index} data={data} />
        ))}

        {phoneActive && (
          <button id="close-sidebar" onClick={() => setShowModal(false)}>
            Close
          </button>
        )}
      </aside>
    </>
  );
};

const SidebarOptions = ({ data }: any) => (
  <div>
    <h5>{data.title}</h5>
    <ul>
      {data.items.map((item: any, index: any) => (
        <Li key={index} url={item.url} text={item.text} Icon={item.Icon} />
      ))}
    </ul>
  </div>
);

interface LiProps {
  url: string;
  text: string;

  Icon: IconType;
}

const Li = ({ url, text, Icon }: LiProps) => (
  <li
    style={{
      backgroundColor: location.pathname.includes(url)
        ? "rgba(0,115,255,0.1)"
        : "white",
    }}
  >
    <Link
      to={url}
      style={{
        color: location.pathname.includes(url) ? "rgb(0,115,255)" : "black",
      }}
    >
      <Icon />
      {text}
    </Link>
  </li>
);

export default AdminSidebar;
