"use client"
import Footer from "@/components/ui/Footer";
import Header from "@/components/ui/Header";

export default function Home() {
  return (
    <div className="flex flex-col  w-full min-h-screen max-w-[1536px]">
      <Header />
      <p>Home Page</p>
      <Footer/>
    </div>
  );
}
