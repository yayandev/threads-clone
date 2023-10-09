import UserProfile from "@/components/UserProfile";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Profile - Threads",
};

const PageProfile = () => {
  return <UserProfile />;
};

export default PageProfile;
