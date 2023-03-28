import { InfinitySpin } from "react-loader-spinner";

export default function Loader() {
  return (
    <>
      <div className="container max-w-8xl mx-auto">
        <div className="flex items-center justify-center border-[3px] border-indigo-900 rounded-lg px-12 py-16 bg-white">
          <InfinitySpin width="200" color="#4fa94d" />
        </div>
      </div>
    </>
  );
}
