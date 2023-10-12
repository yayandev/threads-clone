import UserProfile from "@/components/UserProfile";
import { Metadata } from "next";

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
