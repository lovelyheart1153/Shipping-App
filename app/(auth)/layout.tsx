import { PropsWithChildren } from "react";

const layout = ({ children }: PropsWithChildren) => {
  return <div className="h-screen w-full">{children}</div>;
};

export default layout;
