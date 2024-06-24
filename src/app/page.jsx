'use client'

import MainLayoutPage from "@/components/mainLayout";
import { faCheck, faEllipsisH, faLayerGroup, faPowerOff, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { PieChart, pieArcLabelClasses } from "@mui/x-charts";
import Image from "next/image";

export default function Home() {
  return (
    <MainLayoutPage>
      <div className="flex justify-center w-full">
        <div className="grid grid-cols-1 md:gap-5 gap-2 text-sm w-full max-w-[1000px]">
          <div className="p-5 border dark:border-zinc-800 bg-white dark:bg-zinc-900 md:rounded-xl rounded-md text-zinc-800 dark:text-zinc-100 h-full w-full">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3 font-medium">
                <FontAwesomeIcon icon={faLayerGroup} className="w-4 h-4 text-inherit" />
                Total Mata Pelajaran saat ini
              </div>
              <p className="px-2 py-1 rounded-full border text-xs font-extrabold dark:bg-zinc-950 dark:border-zinc-700 text-zinc-600 dark:text-zinc-100">
                1212
              </p>
            </div>
            <hr className="my-3 dark:opacity-10" />
            <div className="flex flex-col md:flex-row md:items-center md:divide-x dark:divide-zinc-700 gap-5 md:gap-0">
              <div className="w-full px-5 py-2 flex items-center justify-center">
                <div className="flex items-center gap-5">
                  <div className="w-10 h-10 rounded-full bg-green-500 dark:bg-green-500/10 text-white dark:text-green-500 flex items-center justify-center flex-shrink-0">
                    <FontAwesomeIcon icon={faPowerOff} className="w-5 h-5 text-inherit" />
                  </div>
                  <div className="">
                    <h1 className="font-bold text-xl">
                      120 Pelajaran
                    </h1>
                    <p className="opacity-50">
                      Yang sedang Aktif saat ini.
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-full px-5 py-2 flex items-center justify-center">
                <div className="flex items-center gap-5">
                  <div className="w-10 h-10 rounded-full bg-red-500 dark:bg-red-500/10 text-white dark:text-red-500 flex items-center justify-center flex-shrink-0">
                    <FontAwesomeIcon icon={faPowerOff} className="w-5 h-5 text-inherit" />
                  </div>
                  <div className="">
                    <h1 className="font-bold text-xl">
                      120 Pelajaran
                    </h1>
                    <p className="opacity-50">
                      Yang sedang Tidak Aktif saat ini.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="p-5 border dark:border-zinc-800 bg-white dark:bg-zinc-900 md:rounded-xl rounded-md text-zinc-800 dark:text-zinc-100 h-full w-full">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3 font-medium">
                <FontAwesomeIcon icon={faLayerGroup} className="w-4 h-4 text-inherit" />
                Total Mata Pelajaran yang Tidak Aktif
              </div>
              <p className="px-2 py-1 rounded-full border text-xs font-extrabold dark:bg-zinc-950 dark:border-zinc-700 text-zinc-600 dark:text-zinc-100">
                1212
              </p>
            </div>
            <hr className="my-3 dark:opacity-10" />
            <div className="grid grid-cols-4 p-3 border dark:border-zinc-700 rounded-md">
              <p className="col-span-3 md:col-span-2 flex items-center">
                Mata Pelajaran
              </p>
              <p className="hidden md:flex items-center">
                Kategori
              </p>
              <p className="hidden md:flex items-center">
                Jurusan
              </p>
              <div className="md:hidden flex items-center justify-center">
                <FontAwesomeIcon icon={faEllipsisH} className="w-3 h-3 text-inherit" />
              </div>
            </div>
            <div className="relative w-full overflow-auto pt-2 max-h-[300px]">
              {Array.from({ length: 15 }).map((_, index) => (
                <div key={index} className="grid grid-cols-4 px-3 py-4 hover:bg-zinc-100 dark:hover:bg-zinc-800">
                  <p className="col-span-3 md:col-span-2 flex items-center">
                    Bahasa Indonesia
                  </p>
                  <p className="hidden md:flex items-center">
                    Muatan Nasional
                  </p>
                  <p className="hidden md:flex items-center">
                    Semua
                  </p>
                  <div className="md:hidden flex items-center justify-center">
                    <FontAwesomeIcon icon={faEllipsisH} className="w-3 h-3 text-inherit" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="p-5 border dark:border-zinc-800 bg-white dark:bg-zinc-900 md:rounded-xl rounded-md text-zinc-800 dark:text-zinc-100 h-full w-full">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3 font-medium">
                <FontAwesomeIcon icon={faLayerGroup} className="w-4 h-4 text-inherit" />
                Total Mata Pelajaran yang Belum memiliki Nilai
              </div>
              <p className="px-2 py-1 rounded-full border text-xs font-extrabold dark:bg-zinc-950 dark:border-zinc-700 text-zinc-600 dark:text-zinc-100">
                1212
              </p>
            </div>
            <hr className="my-3 dark:opacity-10" />
            <div className="grid grid-cols-4 p-3 border dark:border-zinc-700 rounded-md">
              <p className="col-span-3 md:col-span-2 flex items-center">
                Mata Pelajaran
              </p>
              <p className="hidden md:flex items-center">
                Kategori
              </p>
              <p className="hidden md:flex items-center">
                Jurusan
              </p>
              <div className="md:hidden flex items-center justify-center">
                <FontAwesomeIcon icon={faEllipsisH} className="w-3 h-3 text-inherit" />
              </div>
            </div>
            <div className="relative w-full overflow-auto pt-2 max-h-[300px]">
              {Array.from({ length: 15 }).map((_, index) => (
                <div key={index} className="grid grid-cols-4 px-3 py-4 hover:bg-zinc-100 dark:hover:bg-zinc-800">
                  <p className="col-span-3 md:col-span-2 flex items-center">
                    Bahasa Indonesia
                  </p>
                  <p className="hidden md:flex items-center">
                    Muatan Nasional
                  </p>
                  <p className="hidden md:flex items-center">
                    Semua
                  </p>
                  <div className="md:hidden flex items-center justify-center">
                    <FontAwesomeIcon icon={faEllipsisH} className="w-3 h-3 text-inherit" />
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </MainLayoutPage>
  );
}
