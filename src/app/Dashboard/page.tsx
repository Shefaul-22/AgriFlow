import { redirect } from "next/navigation";

export default function DashboardPage() {
  const role = "farmer"; 

  if (role === "farmer") redirect("/Dashboard/farmer");
  if (role === "admin") redirect("/Dashboard/admin");
  if (role === "delivaryPartner") redirect("/Dashboard/delivaryPartner");
  if (role === "user") redirect("/Dashboard/user");

  return null;
}