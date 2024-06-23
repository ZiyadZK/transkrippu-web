'use client'

import MainLayoutPage from "@/components/mainLayout";
import { faLayerGroup } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { PieChart, pieArcLabelClasses } from "@mui/x-charts";
import Image from "next/image";

export default function Home() {
  return (
    <MainLayoutPage>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 text-sm">
        <div className="p-5 border dark:border-zinc-800 bg-white dark:bg-zinc-900 md:rounded-xl rounded-md text-zinc-800 dark:text-zinc-100 h-full">
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
          <div className="flex items-center justify-center w-full bg-white rounded-lg border py-10">
            <PieChart
              series={[
                {
                  arcLabel: (item) => item.value > 0 && `${item.value}`,
                  data: [
                    { id: 0, value: 10, label: 'Aktif', color: 'green' },
                    { id: 1, value: 15, label: 'Tidak Aktif', color: 'gray' },
                  ],
                  highlightScope: { faded: 'global', highlighted: 'item' },
                  faded: { innerRadius: 30, additionalRadius: -30, color: 'gray' },

                  innerRadius: 30,
                  outerRadius: 100,
                  cornerRadius: 10
                },
              ]}

              sx={{
                [`& .${pieArcLabelClasses.root}`]: {
                  fill: 'white',
                  fontWeight: 'bold',
                },
              }}

              width={400}
              height={200}
            />
          </div>
        </div>
      </div>
    </MainLayoutPage>
  );
}
