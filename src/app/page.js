// app/page.js
import BgVedio from "./Vedio/BgVedio";
import NewArrivals from "./new_arrival/new_arrival";
import CEO from "./Ceo/page";
import City from "./city/page";
import Circle from "./slider/page";

// ✅ Only ONE import for FooterEnd
import FooterEnd from "./Footer/FooterEnd";

export default function Home() {
  return (
    <>
      <BgVedio />
      <NewArrivals />
      <CEO />
      <City />
      <Circle />
      <FooterEnd />
    </>
  );
}
