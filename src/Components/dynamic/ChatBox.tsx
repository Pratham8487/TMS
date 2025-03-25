import { IoCallOutline } from "react-icons/io5";
import { CiVideoOn } from "react-icons/ci";
import { RiAttachmentLine } from "react-icons/ri";
import OnlineNotificationSymbol from "../../assets/OnlineNotification.png";
import SendIcon from "../../assets/Vector.png";

export default function ChatBox() {
  return (
    <>
      <div className="bg-[#FFFFFF] w-full h-[5rem] flex justify-between items-center px-6">
        {/* Profile Section */}
        <div className="flex items-center p-[0.625rem] rounded-[0.625rem] gap-3">
          <img
            src="https://s3-alpha-sig.figma.com/img/b1ce/594a/a60dc1bbd63c7d6b0436844674f5f409?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=k6pLgyWPssTXmiBaYsx7dlEbz4dwejW5PTYFhv2WB-TRmUqSVFHMVMHO5n9ZcnkerGKj2hjcOGj7MEKDBd5IECg27kd3FBW9YlZhg3E7imsEEB6ydDPZlgBAxUSPXsRsv8HOgnqWWhybpPbTwKULCapvAu4V3xJkLTnjLCgDOB44-htGJyu3iVQxJX0TEIPJYBp~uQUJ6AJJR6PI8un2Fz3042cvR3HpNi5JTz3Zv0ZO~XUB9ueP-bZbVydcHo6QQa8aFO40gKzEjsH4rChCedLEgrj9bbRbaQT9PzeEwqRg-EvVs9gHwQkHf5aB0OE8pzCYWiqQG15aoHpW6uZ2Ng__"
            alt="Not Found"
            className="w-12 h-12 rounded-full object-cover"
          />
          <div className="space-y-1">
            <h1 className="text-[#141522] font-semibold text-sm leading-[1.5] tracking-[-0.02em]">
              Angelie Crison
            </h1>
            <div className="flex justify-between items-center w-[3.6rem]">
              <img
                src={OnlineNotificationSymbol}
                alt=" "
                className="w-[0.625rem] h-[0.625rem]"
              />
              <span className="text-[#141522] font-['Plus_Jakarta_Sans'] font-medium text-[0.75rem] leading-[1] tracking-[-0.02em]">
                Online
              </span>
            </div>
          </div>
        </div>

        {/* Icons Section */}
        <div className="flex gap-4">
          <div className="w-[2.5rem] h-[2.5rem] flex justify-center items-center rounded-full border border-gray-200 hover:cursor-pointer">
            <IoCallOutline className="w-5 h-5 text-gray-500" />
          </div>
          <div className="w-[2.5rem] h-[2.5rem] flex justify-center items-center rounded-full border border-gray-200 hover:cursor-pointer">
            <CiVideoOn className="w-5 h-5 text-gray-500" />
          </div>
        </div>
      </div>
      <div className="relative w-full h-[5rem] bg-white ">
        <div className="relative ">
          <input
            type="text"
            placeholder="Send your message..."
            className="w-full p-2 pl-6 pr-12 text-[#8E92BC] h-[5rem] rounded-xl outline-none "
          />
          <RiAttachmentLine className="cursor-pointer w-[2.8rem] h-[2.8rem] gap-[0.625rem] rounded-[0.625rem] p-[0.625rem] absolute right-15 top-1/2 transform -translate-y-1/2 text-gray-500 text-xl"/>
          <img
            src={SendIcon}
            className="cursor-pointer bg-[#546FFF] w-[2.75rem] h-[2.75rem] gap-[0.625rem] rounded-[0.625rem] p-[0.625rem] absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 text-xl"
            alt="not found"
          />
        </div>
      </div>
    </>
  );
}
