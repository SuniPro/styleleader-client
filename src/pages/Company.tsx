import { TabMenu } from "../components/layouts/TabMenu";
import ApartmentIcon from "@mui/icons-material/Apartment";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import MicIcon from "@mui/icons-material/Mic";
import { useState } from "react";
import { BoardList } from "../components/Board/BoardList";
import { Board } from "../components/Board/Board";

export function Company() {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const companyMenu = [
    { icon: <ApartmentIcon sx={{ color: "#d7bc6a" }} />, title: "소개" },
    {
      icon: <LocationOnIcon sx={{ color: "#d7bc6a" }} />,
      title: "찾아오는 길",
    },
    { icon: <MicIcon sx={{ color: "#d7bc6a" }} />, title: "공지사항" },
  ];

  function CompanyContents(index: number) {
    switch (index) {
      case 0:
        return <></>;
      case 1:
        return <></>;
      case 2:
        return <Board></Board>;
    }
  }

  return (
    <>
      <TabMenu
        menuList={companyMenu}
        activeFunction={{ selectedIndex, setSelectedIndex }}
      />
      {CompanyContents(selectedIndex)}
    </>
  );
}
