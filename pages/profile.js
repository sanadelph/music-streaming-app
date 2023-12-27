import Dashboard from "@/components/Profile/Dashboard";
import DashboardLayout from "@/components/Profile/DashboardLayout";
import Followings from "@/components/Profile/Followings/Followings";
import LikedSongs from "@/components/Profile/LikedSongs";
import Playlists from "@/components/Profile/Playlist/Playlists";
import { useRouter } from "next/router";
import React from "react";

function profilePage() {
  const { query } = useRouter();
  const loadComponent = () => {
    if (!query.module) return <LikedSongs />;
    else if (query.module === "liked") return <LikedSongs />;
    else if (query.module === "playlists") return <Playlists />;
    else if (query.module === "followings") return <Followings />;
  };
  return (
    <React.Fragment>
      <DashboardLayout />
      <Dashboard>{loadComponent()}</Dashboard>
    </React.Fragment>
  );
}
export default profilePage;
