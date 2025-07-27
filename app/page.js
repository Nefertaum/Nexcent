import Image from "next/image";
import { Header } from "@/components/header/header";
import { Hero } from "@/components/home/hero/hero";
import { Clients } from "@/components/home/clients/clients";
import { Community } from "@/components/home/community/community";
import { Unlock } from "@/components/body/unlock/unlock";
import { Achievemennts } from "@/components/body/achievemennts/achievemennts";
import { Calendar } from "@/components/body/calendar/calendar";
import { Customers } from "@/components/body/customers/customers";
import { CommunityUpdates } from "@/components/body/communityUpdates/communityUpdates";
import { Footer } from "@/components/footer/footer";

export default function Home() {
  return (
    <div className="relative">
      <Header />
      <div className="flex flex-col absolute inset-y-[84px]  gap-[40px] w-[1440] h-[1285] justify-between content-between">
        <Hero />
        <Clients />
        <Community />
      </div>
      <div className="flex flex-col justify-between absolute w-[1440] h-[2242.39892578125] inset-y-[1411px] inset-x-[1px] gap-[48px]">
        <Unlock />
        <Achievemennts />
        <Calendar />
        <Customers />
        <CommunityUpdates />
      </div>
      <div className="flex flex-col justify-between absolute inset-y-[3748px] w-[1440] h-[628]">
        <Footer />
      </div>
    </div>
  );
}
