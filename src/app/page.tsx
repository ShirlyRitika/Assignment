import TabsWidget from "./Tabs/page";
import GalleryWidget from "./Gallery/page";

const Page = () => {
  return (
    <div className="min-h-screen bg-[#1C1F2A] p-10 flex justify-center items-start">
      <div className="grid grid-cols-2 gap-6 w-[1200px]">
        <div className="bg-gray-400 h-[520px] rounded-lg"></div>
        <div className="flex flex-col gap-6">
          <TabsWidget />
          <GalleryWidget />
        </div>
      </div>
    </div>
  );
};

export default Page;
