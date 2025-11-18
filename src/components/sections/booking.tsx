'use client'

import Cal, { getCalApi } from "@calcom/embed-react";
import { CalendarClock } from "lucide-react"; // Changed icon
import { useEffect } from "react";

const Booking = () => {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: "30min" });
      cal("ui", { hideEventTypeDetails: false, layout: "month_view" });
    })();
  }, []);

  return (
    <section className="">
      {/* <div className='mb-4 md:mb-8'>
        <div className='team-badge flex items-center justify-center gap-2 mb-4'>
          <CalendarClock className='w-4 h-4 text-primary' />
          <span className='text-light-4 text-sm font-medium'>
            Schedule a Call
          </span>
        </div>
        <h2 className='section-title text-2xl lg:text-4xl font-semibold text-center text-light'>
          Book a <span className='text-primary'>Meeting</span> with Us
        </h2>
      </div> */}

      <Cal
        namespace="30min"
        calLink={process.env.NEXT_PUBLIC_CAL_LINK ?? ""}
        style={{ width: "100%", height: "100%", overflow: "scroll" }}
        config={{ layout: "month_view" }}
      />
    </section>
  );
};

export default Booking;