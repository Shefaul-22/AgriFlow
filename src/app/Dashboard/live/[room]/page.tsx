import LiveRoomContent from "@/app/live/[room]/page"; 

export default function DashboardLivePage({ params }: any) {
  return <LiveRoomContent params={params} />;
}