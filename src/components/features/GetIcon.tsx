import { CgWebsite } from "react-icons/cg";
import { BiBrain } from "react-icons/bi";
import { SiHiveBlockchain } from "react-icons/si";

const getIconComponent = (iconName: any) => {
  switch (iconName) {
    case "CgWebsite":
      return <CgWebsite style={{ color: "e62e4a", fontSize: "40px" }} />;
    case "BiBrain":
      return <BiBrain style={{ color: "e62e4a", fontSize: "40px" }} />;
    case "SiHiveBlockchain":
      return <SiHiveBlockchain style={{ color: "e62e4a", fontSize: "40px" }} />;

    // Add cases for other icons as needed
    default:
      return null;
  }
};

export default getIconComponent;
