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
          <div className="flex h-full items-center justify-center p-6">
            <span className="font-semibold">Content</span>
          </div>
        </ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel defaultSize={25}>
          <div className="flex h-full items-center justify-center p-6">
            <span className="font-semibold">Sidebar</span>
          </div>
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  );
}
