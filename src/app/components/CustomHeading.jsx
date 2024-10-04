import React, { forwardRef } from "react";

const CustomHeading = forwardRef(({ className, children }, ref) => {
  return (
    <h1
      ref={ref}
      className={`c-heading text-center text-[4vw] font-bold pt-10 text-sky-400 ${className}`}
    >
      {children}
    </h1>
  );
});

CustomHeading.displayName = "CustomHeading";

export default CustomHeading;
