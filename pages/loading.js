import Head from "next/head";
import React from "react";

export default function Loading() {
  return (
    <>
      <Head>
        <title>Loading...</title>
      </Head>
      <div class="min-h-screen flex items-center justify-center">
        <div class="bg-white p-8 rounded-lg shadow-sm w-full max-w-md">
          <div class="flex items-center justify-center">
            <div class="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-IjoRumput">
              <svg
                class="w-full h-full text-IjoRumput"
                viewBox="0 0 100 100"
                fill="none"
              >
                <circle
                  cx="50"
                  cy="50"
                  r="40"
                  stroke="currentColor"
                  stroke-width="8"
                  stroke-dasharray="164.9355 164.9355"
                  stroke-dashoffset="62.83185185185186"
                  transform="rotate(294.71 50 50)"
                ></circle>
              </svg>
            </div>
          </div>
          <div class="mt-4 text-center">
            <p class="text-lg font-semibold text-gray-600">Loading...</p>
          </div>
        </div>
      </div>
    </>
  );
}
