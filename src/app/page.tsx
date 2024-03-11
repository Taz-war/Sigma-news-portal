import LatestNews from "@/components/ui/LatestNews/LatestNews";
import SideBar from "@/components/ui/SideBar/SideBar";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable"

export default function Home() {
  return (
    <div className=" p-2">
      {/* <h1>Welcome to homePage !!!</h1> */}
      <ResizablePanelGroup
        direction="horizontal"
        className="min-h-[200px]  rounded-lg border"
      >
        <ResizablePanel defaultSize={75}>
          <div className="flex h-full items-center justify-center p-2">
            <LatestNews />
          </div>
        </ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel defaultSize={25}>
          <div className="flex h-full items-start justify-center p-2">
            <SideBar />
          </div>
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  );
}
