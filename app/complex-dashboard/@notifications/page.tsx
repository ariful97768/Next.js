import Link from "next/link";
import React from "react";

const Notifications = () => {
  return (
    <div>
      Notifications
      <Link href={"/complex-dashboard/archived"}>archived</Link>
    </div>
  );
};

export default Notifications;
