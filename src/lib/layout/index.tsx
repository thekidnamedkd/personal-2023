import type { ReactNode } from "react";

import Footer from "./Footer";
import Header from "./Header";
import Meta from "./Meta";

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
      <Meta />
      <div className="retro-scrollbar flex h-[95vh] w-[93vw] flex-col items-start justify-between overflow-y-scroll rounded-[3px] border-2 border-black bg-[#dddddd] p-6 shadow-[0_6px_0_rgba(0,0,0,0.12)] sm:h-[90vh] sm:w-[90vw] lg:h-[82vh] lg:w-[82vw]">
        <Header />
        <main
          id="#"
          className="retro-scrollbar my-6 h-min w-full overflow-y-visible border-2 border-black bg-white p-[14px] shadow-[inset_0_0_2px_black] md:h-full md:overflow-y-scroll"
        >
          {children}
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
