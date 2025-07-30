"use client";
import React, { useRef } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";

const HTMLFlipBook = dynamic(() => import("react-pageflip"), { ssr: false });

export default function NewsletterPDF() {
  const bookRef = useRef<any>(null);

  return (
    <div className="flex flex-col items-center">
      {/* Controles */}
      <div className="space-x-4">
        <button
          className="px-4 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
          onClick={() => bookRef.current.pageFlip().flipPrev()}
        >
          ← Anterior
        </button>
        <button
          className="px-4 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
          onClick={() => bookRef.current.pageFlip().flipNext()}
        >
          Siguiente →
        </button>
      </div>

      {/* Flipbook */}
      <div className="relative flex flex-col items-center z-0">
        <div
          className="shadow-2xl overflow-hidden"
          style={{ width: 300, height: 500, position: "relative", zIndex: 1 }}
        >
          <HTMLFlipBook
            ref={bookRef}
            width={1}
            height={1}
            size="fixed"
            autoSize={false}
            maxShadowOpacity={0.5}
            showCover={true}
            mobileScrollSupport={true}
            className="newsletter-flipbook"
            style={{ width: "100%", height: "100%" }}
            startPage={0}
            minWidth={100}
            maxWidth={1000}
            minHeight={100}
            maxHeight={1000}
            drawShadow={true}
            flippingTime={700}
            usePortrait={true}
            startZIndex={0}
            clickEventForward={true}
            useMouseEvents={true}
            swipeDistance={30}
            renderOnlyPageLengthChange={false}
            showPageCorners={true}
            disableFlipByClick={false}          >
            {/* Portada */}
            <Image
              src="/pdf/imgs/portada.png"
              alt="Portada del Newsletter"
              width={300}
              height={500}
              className="h-full w-auto mx-auto bg-white"
            />

            {/* Página 1 */}
            <Image
              src="/assets/newsletter/leaf.svg"
              alt="Página 1"
              width={300}
              height={500}
              className="object-contain w-full h-full bg-white"
            />

            {/* Página 2 */}
            <Image
              src="/assets/newsletter/circel.svg"
              alt="Página 2"
              width={300}
              height={500}
              className="object-contain w-full h-full bg-white"
            />

            {/* Contraportada */}
            <Image
              src="/pdf/imgs/portada.jpg"
              alt="Contraportada"
              width={300}
              height={500}
              className="h-full w-auto mx-auto bg-white"
            />
          </HTMLFlipBook>
        </div>
      </div>
    </div>
  );
}
