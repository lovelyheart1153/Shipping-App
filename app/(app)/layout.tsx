import { PropsWithChildren } from "react";
import Navbar from "../_components/Navbar";
import Footer from "../_components/Footer";

const layout = ({ children }: PropsWithChildren) => {
  return (
    <div>
      <Navbar />
      {children} <Footer />{" "}
    </div>
  );
};

export default layout;
