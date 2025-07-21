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
    <>
      <Header />
      <Hero />
      <Clients />
      <Community />
      <Unlock />
      <Achievemennts />
      <Calendar />
      <Customers />
      <CommunityUpdates />
      <Footer />
    </>
  );
}
