"use client";
import React from "react";
import Image from "next/image";
import clock from "@/public/footer/red-burning-flames-and-clock-timer-19030.svg";
import percent from "@/public/footer/100-percent-6637.svg";
import headset from "@/public/footer/headphones-svgrepo-com.svg";
import credit from "@/public/footer/two-credit-or-debit-cards-18400.svg";

function Information() {
  return (
    <div className="mt-12 w-full h-full flex flex-col items-center text-white">
      <div className="w-[300px] sm:w-[400px] md:w-[700px] lg:w-[1020px]">
        <div className="self-start flex flex-col">
          <span className="font-bold text-2xl mb-4">GameShop</span>
          <span className="italic mb-2">ทำไมถึงต้องซื้อรหัสที่ GameShop?</span>
          <span className="text-sm">
            มีลูกค้าบางคนที่อยากได้รหัสเกมสักเกมแต่ไม่มีร้านค้าไหนที่ถูกใจ
            เพื่อการนั้นเราถึงเปิดบริการเว็บไซด์ของเราขึ้นมาเพื่อแก้ไขปัญหานั้น
            ร้านเรามี ID Game ให้เลือกซื้อมากมาย!!
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 mt-5">
          <div className="flex w-full md:mb-5 items-center h-[100px]">
            <div className="w-[25%]">
              <Image src={clock} alt="clock" className="w-[70%] h-[70%]" />
            </div>
            <div className="w-full">
              <span className="text-sm">สดวก รวดเร็ว</span>
            </div>
          </div>
          <div className="flex w-full  items-center h-[100px]">
            <div className="w-[25%]">
              <Image src={percent} alt="clock" className="w-[70%] h-[70%]" />
            </div>
            <div className="w-full">
              <span className="text-sm">เรามีโปรโมชั่นและสิทธิประโยชน์ต่างๆที่จะตามมาอีกมากมาย</span>
            </div>
          </div>
          <div className="flex w-full  items-center h-[100px]">
            <div className="w-[25%]">
              <Image src={headset} alt="clock" className="w-[70%] h-[70%]" />
            </div>
            <div className="w-full">
              <span className="text-sm">ทีมสนับสนุนลูกค้าที่เป็นมิตรของเราพร้อมให้ความช่วยเหลือคุณเสมอ</span>
            </div>
          </div>
          <div className="flex w-full  items-center h-[100px]">
            <div className="w-[25%]">
              <Image src={credit} alt="clock" className="w-[70%] h-[70%]" />
            </div>
            <div className="w-full">
              <span className="text-sm">เพื่อความสะดวกสบายในการชำระเงิน เราได้เปิดบริการชำระเงินผ่านช่องทางต่างๆ</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Information;
