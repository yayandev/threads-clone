import { Metadata } from "next";
import UserProfile from "@/components/UserProfile";

export const metadata: Metadata = {
  title: "Profile - Threads",
};

const PageProfile = ({
  params: { username },
}: {
  params: { username: string };
}) => {
  return <UserProfile username={username} />;
};

export default PageProfile;
