/* eslint-disable react/no-unescaped-entities */
import { Box, Flex, SimpleGrid, Text, theme } from "@chakra-ui/react";
import { ApexOptions } from "apexcharts";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";

const Chart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

const options: ApexOptions = {
  chart: {
    toolbar: {
      show: false,
    },
    zoom: {
      enabled: false,
    },
    foreColor: theme.colors.gray[500],
  },
  grid: {
    show: false,
  },
  dataLabels: {
    enabled: false,
  },
  tooltip: {
    enabled: false,
  },
  xaxis: {
    type: "datetime",
    axisBorder: {
      color: theme.colors.gray[600],
    },
    axisTicks: {
      color: theme.colors.gray[600],
    },
    categories: [
      "2021-03-18T00:00:00.000Z",
      "2021-03-19T00:00:00.000Z",
      "2021-03-20T00:00:00.000Z",
      "2021-03-21T00:00:00.000Z",
      "2021-03-22T00:00:00.000Z",
      "2021-03-23T00:00:00.000Z",
      "2021-03-24T00:00:00.000Z",
    ],
  },
  fill: {
    opacity: 0.3,
    type: "gradient",
    gradient: {
      shade: "dark",
      opacityFrom: 0.7,
      opacityTo: 0.3,
    },
  },
};

const series = [{ name: "series1", data: [31, 120, 10, 28, 51, 18, 109] }];

function Dashboard() {
  const [assembleGraphics, setAssembleGraphics] = useState(false);

  useEffect(() => {
    setAssembleGraphics(true);
  }, []);

  return (
    <Flex direction="column" h="100vh">
      <Header />

      <Flex maxWidth={1480} w="100%" my="6" mx="auto" px="6">
        <Sidebar />
        {assembleGraphics && (
          <SimpleGrid flex="1" gap="4" minChildWidth="320px">
            <Box p={["6", "8"]} bg="gray.800" borderRadius={8} pb="4">
              <Text fontSize="lg" mb="4">
                Inscrit de la semaine
              </Text>
              <Chart
                type="area"
                height={160}
                options={options}
                series={series}
              />
            </Box>
            <Box p={["6", "8"]} bg="gray.800" borderRadius={8} pb="4">
              <Text fontSize="lg" mb="4">
                Taux d'ouverture
              </Text>
              <Chart
                type="area"
                height={160}
                options={options}
                series={series}
              />
            </Box>
          </SimpleGrid>
        )}
      </Flex>
    </Flex>
  );
}

export default Dashboard;
