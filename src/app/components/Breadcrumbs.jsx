"use client";

import { usePathname, useRouter } from "next/navigation";

const Breadcrumbs = () => {
  const pathname = usePathname();
  const router = useRouter();
  const pathnames = pathname.split("/").filter((x) => x);

  return (
    <div className="text-[#FCFCFC] text-sm">
      <span
        className="cursor-pointer hover:underline underline-offset-8"
        onClick={() => router.push("/")}
      >
        Home{" "}
      </span>
      {pathnames.map((name, index) => {
        // Hyphen replace karega aur first letter ko capitalize karega
        const formattedName = name
          .replace(/-/g, " ") // '-' ko ' & ' se replace karega
          .replace(/\b\w/g, (char) => char.toUpperCase()); // First letter capitalize karega

        return (
          <span key={index} className="ml-1">
            /{" "}
            <span className="cursor-pointer underline underline-offset-8">
              {formattedName}
            </span>
          </span>
        );
      })}
    </div>
  );
};

export default Breadcrumbs;
