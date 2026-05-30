import LiveRoomContent from "@/app/live/[room]/page"; 

export default function dashboardLivePage({ params }: any) {
  return <LiveRoomContent params={params} />;
}