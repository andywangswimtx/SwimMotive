/**
 * USA Swimming Power Points Table Data (Age 14 & Under)
 * Extracted from USA Swimming Data Hub Power Point Table.
 *
 * Points are ordered in descending order:
 * [1100, 1000, 900, 800, 700, 600, 500, 400, 300, 200, 100, 10, 1]
 */

export interface PowerPointLevelTime {
  point: number;
  seconds: number;
  timeDisplay: string;
}

export type PowerPointsTable = PowerPointLevelTime[];

export const POWER_POINT_LEVELS = [
  1100, 1000, 900, 800, 700, 600, 500, 400, 300, 200, 100, 10, 1
] as const;

export type PowerPointLevel = typeof POWER_POINT_LEVELS[number];

export const POWER_POINTS_DATA: Record<
  string, // 'SCY' | 'LCM'
  Record<
    string, // 'Boy' | 'Girl'
    Record<
      string, // '9&U' | '10' | '11' | '12' | '13' | '14'
      Record<string, PowerPointsTable> // eventCode -> table
    >
  >
> = {
  "SCY": {
    "Boy": {
      "9&U": {
        "50_FR": [
          {
            "point": 1100,
            "seconds": 24.05,
            "timeDisplay": "24.05"
          },
          {
            "point": 1000,
            "seconds": 25.63,
            "timeDisplay": "25.63"
          },
          {
            "point": 900,
            "seconds": 27.24,
            "timeDisplay": "27.24"
          },
          {
            "point": 800,
            "seconds": 28.9,
            "timeDisplay": "28.90"
          },
          {
            "point": 700,
            "seconds": 30.61,
            "timeDisplay": "30.61"
          },
          {
            "point": 600,
            "seconds": 32.37,
            "timeDisplay": "32.37"
          },
          {
            "point": 500,
            "seconds": 34.2,
            "timeDisplay": "34.20"
          },
          {
            "point": 400,
            "seconds": 36.11,
            "timeDisplay": "36.11"
          },
          {
            "point": 300,
            "seconds": 38.13,
            "timeDisplay": "38.13"
          },
          {
            "point": 200,
            "seconds": 40.32,
            "timeDisplay": "40.32"
          },
          {
            "point": 100,
            "seconds": 42.78,
            "timeDisplay": "42.78"
          },
          {
            "point": 10,
            "seconds": 45.68,
            "timeDisplay": "45.68"
          },
          {
            "point": 1,
            "seconds": 46.13,
            "timeDisplay": "46.13"
          }
        ],
        "100_FR": [
          {
            "point": 1100,
            "seconds": 54.86,
            "timeDisplay": "54.86"
          },
          {
            "point": 1000,
            "seconds": 57.75,
            "timeDisplay": "57.75"
          },
          {
            "point": 900,
            "seconds": 60.75,
            "timeDisplay": "1:00.75"
          },
          {
            "point": 800,
            "seconds": 63.86,
            "timeDisplay": "1:03.86"
          },
          {
            "point": 700,
            "seconds": 67.1,
            "timeDisplay": "1:07.10"
          },
          {
            "point": 600,
            "seconds": 70.5,
            "timeDisplay": "1:10.50"
          },
          {
            "point": 500,
            "seconds": 74.11,
            "timeDisplay": "1:14.11"
          },
          {
            "point": 400,
            "seconds": 77.96,
            "timeDisplay": "1:17.96"
          },
          {
            "point": 300,
            "seconds": 82.17,
            "timeDisplay": "1:22.17"
          },
          {
            "point": 200,
            "seconds": 86.88,
            "timeDisplay": "1:26.88"
          },
          {
            "point": 100,
            "seconds": 92.53,
            "timeDisplay": "1:32.53"
          },
          {
            "point": 10,
            "seconds": 100.16,
            "timeDisplay": "1:40.16"
          },
          {
            "point": 1,
            "seconds": 101.68,
            "timeDisplay": "1:41.68"
          }
        ],
        "200_FR": [
          {
            "point": 1100,
            "seconds": 121.34,
            "timeDisplay": "2:01.34"
          },
          {
            "point": 1000,
            "seconds": 126.88,
            "timeDisplay": "2:06.88"
          },
          {
            "point": 900,
            "seconds": 132.66,
            "timeDisplay": "2:12.66"
          },
          {
            "point": 800,
            "seconds": 138.71,
            "timeDisplay": "2:18.71"
          },
          {
            "point": 700,
            "seconds": 145.07,
            "timeDisplay": "2:25.07"
          },
          {
            "point": 600,
            "seconds": 151.81,
            "timeDisplay": "2:31.81"
          },
          {
            "point": 500,
            "seconds": 159.02,
            "timeDisplay": "2:39.02"
          },
          {
            "point": 400,
            "seconds": 166.85,
            "timeDisplay": "2:46.85"
          },
          {
            "point": 300,
            "seconds": 175.53,
            "timeDisplay": "2:55.53"
          },
          {
            "point": 200,
            "seconds": 185.49,
            "timeDisplay": "3:05.49"
          },
          {
            "point": 100,
            "seconds": 197.85,
            "timeDisplay": "3:17.85"
          },
          {
            "point": 10,
            "seconds": 216.08,
            "timeDisplay": "3:36.08"
          },
          {
            "point": 1,
            "seconds": 220.29,
            "timeDisplay": "3:40.29"
          }
        ],
        "500_FR": [
          {
            "point": 1100,
            "seconds": 326.84,
            "timeDisplay": "5:26.84"
          },
          {
            "point": 1000,
            "seconds": 342.02,
            "timeDisplay": "5:42.02"
          },
          {
            "point": 900,
            "seconds": 357.82,
            "timeDisplay": "5:57.82"
          },
          {
            "point": 800,
            "seconds": 374.33,
            "timeDisplay": "6:14.33"
          },
          {
            "point": 700,
            "seconds": 391.69,
            "timeDisplay": "6:31.69"
          },
          {
            "point": 600,
            "seconds": 410.08,
            "timeDisplay": "6:50.08"
          },
          {
            "point": 500,
            "seconds": 429.73,
            "timeDisplay": "7:09.73"
          },
          {
            "point": 400,
            "seconds": 451.02,
            "timeDisplay": "7:31.02"
          },
          {
            "point": 300,
            "seconds": 474.58,
            "timeDisplay": "7:54.58"
          },
          {
            "point": 200,
            "seconds": 501.57,
            "timeDisplay": "8:21.57"
          },
          {
            "point": 100,
            "seconds": 534.9,
            "timeDisplay": "8:54.90"
          },
          {
            "point": 10,
            "seconds": 583.63,
            "timeDisplay": "9:43.63"
          },
          {
            "point": 1,
            "seconds": 594.67,
            "timeDisplay": "9:54.67"
          }
        ],
        "50_BK": [
          {
            "point": 1100,
            "seconds": 29.09,
            "timeDisplay": "29.09"
          },
          {
            "point": 1000,
            "seconds": 30.65,
            "timeDisplay": "30.65"
          },
          {
            "point": 900,
            "seconds": 32.27,
            "timeDisplay": "32.27"
          },
          {
            "point": 800,
            "seconds": 33.94,
            "timeDisplay": "33.94"
          },
          {
            "point": 700,
            "seconds": 35.69,
            "timeDisplay": "35.69"
          },
          {
            "point": 600,
            "seconds": 37.52,
            "timeDisplay": "37.52"
          },
          {
            "point": 500,
            "seconds": 39.45,
            "timeDisplay": "39.45"
          },
          {
            "point": 400,
            "seconds": 41.52,
            "timeDisplay": "41.52"
          },
          {
            "point": 300,
            "seconds": 43.77,
            "timeDisplay": "43.77"
          },
          {
            "point": 200,
            "seconds": 46.28,
            "timeDisplay": "46.28"
          },
          {
            "point": 100,
            "seconds": 49.28,
            "timeDisplay": "49.28"
          },
          {
            "point": 10,
            "seconds": 53.28,
            "timeDisplay": "53.28"
          },
          {
            "point": 1,
            "seconds": 54.07,
            "timeDisplay": "54.07"
          }
        ],
        "100_BK": [
          {
            "point": 1100,
            "seconds": 62.54,
            "timeDisplay": "1:02.54"
          },
          {
            "point": 1000,
            "seconds": 65.9,
            "timeDisplay": "1:05.90"
          },
          {
            "point": 900,
            "seconds": 69.37,
            "timeDisplay": "1:09.37"
          },
          {
            "point": 800,
            "seconds": 72.97,
            "timeDisplay": "1:12.97"
          },
          {
            "point": 700,
            "seconds": 76.72,
            "timeDisplay": "1:16.72"
          },
          {
            "point": 600,
            "seconds": 80.66,
            "timeDisplay": "1:20.66"
          },
          {
            "point": 500,
            "seconds": 84.82,
            "timeDisplay": "1:24.82"
          },
          {
            "point": 400,
            "seconds": 89.26,
            "timeDisplay": "1:29.26"
          },
          {
            "point": 300,
            "seconds": 94.09,
            "timeDisplay": "1:34.09"
          },
          {
            "point": 200,
            "seconds": 99.49,
            "timeDisplay": "1:39.49"
          },
          {
            "point": 100,
            "seconds": 105.93,
            "timeDisplay": "1:45.93"
          },
          {
            "point": 10,
            "seconds": 114.54,
            "timeDisplay": "1:54.54"
          },
          {
            "point": 1,
            "seconds": 116.21,
            "timeDisplay": "1:56.21"
          }
        ],
        "50_BR": [
          {
            "point": 1100,
            "seconds": 32.61,
            "timeDisplay": "32.61"
          },
          {
            "point": 1000,
            "seconds": 34.38,
            "timeDisplay": "34.38"
          },
          {
            "point": 900,
            "seconds": 36.24,
            "timeDisplay": "36.24"
          },
          {
            "point": 800,
            "seconds": 38.14,
            "timeDisplay": "38.14"
          },
          {
            "point": 700,
            "seconds": 40.13,
            "timeDisplay": "40.13"
          },
          {
            "point": 600,
            "seconds": 42.2,
            "timeDisplay": "42.20"
          },
          {
            "point": 500,
            "seconds": 44.41,
            "timeDisplay": "44.41"
          },
          {
            "point": 400,
            "seconds": 46.75,
            "timeDisplay": "46.75"
          },
          {
            "point": 300,
            "seconds": 49.28,
            "timeDisplay": "49.28"
          },
          {
            "point": 200,
            "seconds": 52.13,
            "timeDisplay": "52.13"
          },
          {
            "point": 100,
            "seconds": 55.48,
            "timeDisplay": "55.48"
          },
          {
            "point": 10,
            "seconds": 59.92,
            "timeDisplay": "59.92"
          },
          {
            "point": 1,
            "seconds": 60.77,
            "timeDisplay": "1:00.77"
          }
        ],
        "100_BR": [
          {
            "point": 1100,
            "seconds": 70.95,
            "timeDisplay": "1:10.95"
          },
          {
            "point": 1000,
            "seconds": 75.02,
            "timeDisplay": "1:15.02"
          },
          {
            "point": 900,
            "seconds": 79.21,
            "timeDisplay": "1:19.21"
          },
          {
            "point": 800,
            "seconds": 83.55,
            "timeDisplay": "1:23.55"
          },
          {
            "point": 700,
            "seconds": 88.05,
            "timeDisplay": "1:28.05"
          },
          {
            "point": 600,
            "seconds": 92.74,
            "timeDisplay": "1:32.74"
          },
          {
            "point": 500,
            "seconds": 97.68,
            "timeDisplay": "1:37.68"
          },
          {
            "point": 400,
            "seconds": 102.91,
            "timeDisplay": "1:42.91"
          },
          {
            "point": 300,
            "seconds": 108.56,
            "timeDisplay": "1:48.56"
          },
          {
            "point": 200,
            "seconds": 114.8,
            "timeDisplay": "1:54.80"
          },
          {
            "point": 100,
            "seconds": 122.11,
            "timeDisplay": "2:02.11"
          },
          {
            "point": 10,
            "seconds": 131.49,
            "timeDisplay": "2:11.49"
          },
          {
            "point": 1,
            "seconds": 133.17,
            "timeDisplay": "2:13.17"
          }
        ],
        "50_FL": [
          {
            "point": 1100,
            "seconds": 27.77,
            "timeDisplay": "27.77"
          },
          {
            "point": 1000,
            "seconds": 29.2,
            "timeDisplay": "29.20"
          },
          {
            "point": 900,
            "seconds": 30.67,
            "timeDisplay": "30.67"
          },
          {
            "point": 800,
            "seconds": 32.21,
            "timeDisplay": "32.21"
          },
          {
            "point": 700,
            "seconds": 33.82,
            "timeDisplay": "33.82"
          },
          {
            "point": 600,
            "seconds": 35.5,
            "timeDisplay": "35.50"
          },
          {
            "point": 500,
            "seconds": 37.3,
            "timeDisplay": "37.30"
          },
          {
            "point": 400,
            "seconds": 39.22,
            "timeDisplay": "39.22"
          },
          {
            "point": 300,
            "seconds": 41.32,
            "timeDisplay": "41.32"
          },
          {
            "point": 200,
            "seconds": 43.69,
            "timeDisplay": "43.69"
          },
          {
            "point": 100,
            "seconds": 46.54,
            "timeDisplay": "46.54"
          },
          {
            "point": 10,
            "seconds": 50.47,
            "timeDisplay": "50.47"
          },
          {
            "point": 1,
            "seconds": 51.27,
            "timeDisplay": "51.27"
          }
        ],
        "100_FL": [
          {
            "point": 1100,
            "seconds": 62.03,
            "timeDisplay": "1:02.03"
          },
          {
            "point": 1000,
            "seconds": 65.39,
            "timeDisplay": "1:05.39"
          },
          {
            "point": 900,
            "seconds": 68.9,
            "timeDisplay": "1:08.90"
          },
          {
            "point": 800,
            "seconds": 72.56,
            "timeDisplay": "1:12.56"
          },
          {
            "point": 700,
            "seconds": 76.42,
            "timeDisplay": "1:16.42"
          },
          {
            "point": 600,
            "seconds": 80.51,
            "timeDisplay": "1:20.51"
          },
          {
            "point": 500,
            "seconds": 84.9,
            "timeDisplay": "1:24.90"
          },
          {
            "point": 400,
            "seconds": 89.66,
            "timeDisplay": "1:29.66"
          },
          {
            "point": 300,
            "seconds": 94.94,
            "timeDisplay": "1:34.94"
          },
          {
            "point": 200,
            "seconds": 101.01,
            "timeDisplay": "1:41.01"
          },
          {
            "point": 100,
            "seconds": 108.55,
            "timeDisplay": "1:48.55"
          },
          {
            "point": 10,
            "seconds": 119.73,
            "timeDisplay": "1:59.73"
          },
          {
            "point": 1,
            "seconds": 122.33,
            "timeDisplay": "2:02.33"
          }
        ],
        "100_IM": [
          {
            "point": 1100,
            "seconds": 64.6,
            "timeDisplay": "1:04.60"
          },
          {
            "point": 1000,
            "seconds": 67.53,
            "timeDisplay": "1:07.53"
          },
          {
            "point": 900,
            "seconds": 70.56,
            "timeDisplay": "1:10.56"
          },
          {
            "point": 800,
            "seconds": 73.74,
            "timeDisplay": "1:13.74"
          },
          {
            "point": 700,
            "seconds": 77.08,
            "timeDisplay": "1:17.08"
          },
          {
            "point": 600,
            "seconds": 80.6,
            "timeDisplay": "1:20.60"
          },
          {
            "point": 500,
            "seconds": 84.4,
            "timeDisplay": "1:24.40"
          },
          {
            "point": 400,
            "seconds": 88.56,
            "timeDisplay": "1:28.56"
          },
          {
            "point": 300,
            "seconds": 93.14,
            "timeDisplay": "1:33.14"
          },
          {
            "point": 200,
            "seconds": 98.4,
            "timeDisplay": "1:38.40"
          },
          {
            "point": 100,
            "seconds": 105.0,
            "timeDisplay": "1:45.00"
          },
          {
            "point": 10,
            "seconds": 114.81,
            "timeDisplay": "1:54.81"
          },
          {
            "point": 1,
            "seconds": 117.08,
            "timeDisplay": "1:57.08"
          }
        ],
        "200_IM": [
          {
            "point": 1100,
            "seconds": 137.29,
            "timeDisplay": "2:17.29"
          },
          {
            "point": 1000,
            "seconds": 143.72,
            "timeDisplay": "2:23.72"
          },
          {
            "point": 900,
            "seconds": 150.41,
            "timeDisplay": "2:30.41"
          },
          {
            "point": 800,
            "seconds": 157.4,
            "timeDisplay": "2:37.40"
          },
          {
            "point": 700,
            "seconds": 164.74,
            "timeDisplay": "2:44.74"
          },
          {
            "point": 600,
            "seconds": 172.51,
            "timeDisplay": "2:52.51"
          },
          {
            "point": 500,
            "seconds": 180.81,
            "timeDisplay": "3:00.81"
          },
          {
            "point": 400,
            "seconds": 189.8,
            "timeDisplay": "3:09.80"
          },
          {
            "point": 300,
            "seconds": 199.73,
            "timeDisplay": "3:19.73"
          },
          {
            "point": 200,
            "seconds": 211.1,
            "timeDisplay": "3:31.10"
          },
          {
            "point": 100,
            "seconds": 225.12,
            "timeDisplay": "3:45.12"
          },
          {
            "point": 10,
            "seconds": 245.5,
            "timeDisplay": "4:05.50"
          },
          {
            "point": 1,
            "seconds": 250.09,
            "timeDisplay": "4:10.09"
          }
        ]
      },
      "10": {
        "50_FR": [
          {
            "point": 1100,
            "seconds": 22.61,
            "timeDisplay": "22.61"
          },
          {
            "point": 1000,
            "seconds": 24.09,
            "timeDisplay": "24.09"
          },
          {
            "point": 900,
            "seconds": 25.61,
            "timeDisplay": "25.61"
          },
          {
            "point": 800,
            "seconds": 27.17,
            "timeDisplay": "27.17"
          },
          {
            "point": 700,
            "seconds": 28.77,
            "timeDisplay": "28.77"
          },
          {
            "point": 600,
            "seconds": 30.43,
            "timeDisplay": "30.43"
          },
          {
            "point": 500,
            "seconds": 32.15,
            "timeDisplay": "32.15"
          },
          {
            "point": 400,
            "seconds": 33.95,
            "timeDisplay": "33.95"
          },
          {
            "point": 300,
            "seconds": 35.85,
            "timeDisplay": "35.85"
          },
          {
            "point": 200,
            "seconds": 37.91,
            "timeDisplay": "37.91"
          },
          {
            "point": 100,
            "seconds": 40.23,
            "timeDisplay": "40.23"
          },
          {
            "point": 10,
            "seconds": 42.95,
            "timeDisplay": "42.95"
          },
          {
            "point": 1,
            "seconds": 43.37,
            "timeDisplay": "43.37"
          }
        ],
        "100_FR": [
          {
            "point": 1100,
            "seconds": 51.08,
            "timeDisplay": "51.08"
          },
          {
            "point": 1000,
            "seconds": 53.77,
            "timeDisplay": "53.77"
          },
          {
            "point": 900,
            "seconds": 56.56,
            "timeDisplay": "56.56"
          },
          {
            "point": 800,
            "seconds": 59.45,
            "timeDisplay": "59.45"
          },
          {
            "point": 700,
            "seconds": 62.47,
            "timeDisplay": "1:02.47"
          },
          {
            "point": 600,
            "seconds": 65.64,
            "timeDisplay": "1:05.64"
          },
          {
            "point": 500,
            "seconds": 69.0,
            "timeDisplay": "1:09.00"
          },
          {
            "point": 400,
            "seconds": 72.59,
            "timeDisplay": "1:12.59"
          },
          {
            "point": 300,
            "seconds": 76.5,
            "timeDisplay": "1:16.50"
          },
          {
            "point": 200,
            "seconds": 80.89,
            "timeDisplay": "1:20.89"
          },
          {
            "point": 100,
            "seconds": 86.15,
            "timeDisplay": "1:26.15"
          },
          {
            "point": 10,
            "seconds": 93.26,
            "timeDisplay": "1:33.26"
          },
          {
            "point": 1,
            "seconds": 94.67,
            "timeDisplay": "1:34.67"
          }
        ],
        "200_FR": [
          {
            "point": 1100,
            "seconds": 112.84,
            "timeDisplay": "1:52.84"
          },
          {
            "point": 1000,
            "seconds": 118.0,
            "timeDisplay": "1:58.00"
          },
          {
            "point": 900,
            "seconds": 123.37,
            "timeDisplay": "2:03.37"
          },
          {
            "point": 800,
            "seconds": 128.99,
            "timeDisplay": "2:08.99"
          },
          {
            "point": 700,
            "seconds": 134.91,
            "timeDisplay": "2:14.91"
          },
          {
            "point": 600,
            "seconds": 141.14,
            "timeDisplay": "2:21.14"
          },
          {
            "point": 500,
            "seconds": 147.88,
            "timeDisplay": "2:27.88"
          },
          {
            "point": 400,
            "seconds": 155.16,
            "timeDisplay": "2:35.16"
          },
          {
            "point": 300,
            "seconds": 163.23,
            "timeDisplay": "2:43.23"
          },
          {
            "point": 200,
            "seconds": 172.5,
            "timeDisplay": "2:52.50"
          },
          {
            "point": 100,
            "seconds": 183.99,
            "timeDisplay": "3:03.99"
          },
          {
            "point": 10,
            "seconds": 200.94,
            "timeDisplay": "3:20.94"
          },
          {
            "point": 1,
            "seconds": 204.86,
            "timeDisplay": "3:24.86"
          }
        ],
        "500_FR": [
          {
            "point": 1100,
            "seconds": 300.53,
            "timeDisplay": "5:00.53"
          },
          {
            "point": 1000,
            "seconds": 314.5,
            "timeDisplay": "5:14.50"
          },
          {
            "point": 900,
            "seconds": 329.02,
            "timeDisplay": "5:29.02"
          },
          {
            "point": 800,
            "seconds": 344.21,
            "timeDisplay": "5:44.21"
          },
          {
            "point": 700,
            "seconds": 360.17,
            "timeDisplay": "6:00.17"
          },
          {
            "point": 600,
            "seconds": 377.08,
            "timeDisplay": "6:17.08"
          },
          {
            "point": 500,
            "seconds": 395.15,
            "timeDisplay": "6:35.15"
          },
          {
            "point": 400,
            "seconds": 414.73,
            "timeDisplay": "6:54.73"
          },
          {
            "point": 300,
            "seconds": 436.39,
            "timeDisplay": "7:16.39"
          },
          {
            "point": 200,
            "seconds": 461.21,
            "timeDisplay": "7:41.21"
          },
          {
            "point": 100,
            "seconds": 491.86,
            "timeDisplay": "8:11.86"
          },
          {
            "point": 10,
            "seconds": 536.67,
            "timeDisplay": "8:56.67"
          },
          {
            "point": 1,
            "seconds": 546.82,
            "timeDisplay": "9:06.82"
          }
        ],
        "50_BK": [
          {
            "point": 1100,
            "seconds": 27.22,
            "timeDisplay": "27.22"
          },
          {
            "point": 1000,
            "seconds": 28.68,
            "timeDisplay": "28.68"
          },
          {
            "point": 900,
            "seconds": 30.19,
            "timeDisplay": "30.19"
          },
          {
            "point": 800,
            "seconds": 31.76,
            "timeDisplay": "31.76"
          },
          {
            "point": 700,
            "seconds": 33.39,
            "timeDisplay": "33.39"
          },
          {
            "point": 600,
            "seconds": 35.11,
            "timeDisplay": "35.11"
          },
          {
            "point": 500,
            "seconds": 36.92,
            "timeDisplay": "36.92"
          },
          {
            "point": 400,
            "seconds": 38.85,
            "timeDisplay": "38.85"
          },
          {
            "point": 300,
            "seconds": 40.95,
            "timeDisplay": "40.95"
          },
          {
            "point": 200,
            "seconds": 43.31,
            "timeDisplay": "43.31"
          },
          {
            "point": 100,
            "seconds": 46.11,
            "timeDisplay": "46.11"
          },
          {
            "point": 10,
            "seconds": 49.86,
            "timeDisplay": "49.86"
          },
          {
            "point": 1,
            "seconds": 50.59,
            "timeDisplay": "50.59"
          }
        ],
        "100_BK": [
          {
            "point": 1100,
            "seconds": 58.38,
            "timeDisplay": "58.38"
          },
          {
            "point": 1000,
            "seconds": 61.52,
            "timeDisplay": "1:01.52"
          },
          {
            "point": 900,
            "seconds": 64.76,
            "timeDisplay": "1:04.76"
          },
          {
            "point": 800,
            "seconds": 68.12,
            "timeDisplay": "1:08.12"
          },
          {
            "point": 700,
            "seconds": 71.62,
            "timeDisplay": "1:11.62"
          },
          {
            "point": 600,
            "seconds": 75.3,
            "timeDisplay": "1:15.30"
          },
          {
            "point": 500,
            "seconds": 79.18,
            "timeDisplay": "1:19.18"
          },
          {
            "point": 400,
            "seconds": 83.32,
            "timeDisplay": "1:23.32"
          },
          {
            "point": 300,
            "seconds": 87.83,
            "timeDisplay": "1:27.83"
          },
          {
            "point": 200,
            "seconds": 92.88,
            "timeDisplay": "1:32.88"
          },
          {
            "point": 100,
            "seconds": 98.89,
            "timeDisplay": "1:38.89"
          },
          {
            "point": 10,
            "seconds": 106.92,
            "timeDisplay": "1:46.92"
          },
          {
            "point": 1,
            "seconds": 108.48,
            "timeDisplay": "1:48.48"
          }
        ],
        "50_BR": [
          {
            "point": 1100,
            "seconds": 30.22,
            "timeDisplay": "30.22"
          },
          {
            "point": 1000,
            "seconds": 31.88,
            "timeDisplay": "31.88"
          },
          {
            "point": 900,
            "seconds": 33.58,
            "timeDisplay": "33.58"
          },
          {
            "point": 800,
            "seconds": 35.35,
            "timeDisplay": "35.35"
          },
          {
            "point": 700,
            "seconds": 37.19,
            "timeDisplay": "37.19"
          },
          {
            "point": 600,
            "seconds": 39.12,
            "timeDisplay": "39.12"
          },
          {
            "point": 500,
            "seconds": 41.16,
            "timeDisplay": "41.16"
          },
          {
            "point": 400,
            "seconds": 43.33,
            "timeDisplay": "43.33"
          },
          {
            "point": 300,
            "seconds": 45.68,
            "timeDisplay": "45.68"
          },
          {
            "point": 200,
            "seconds": 48.31,
            "timeDisplay": "48.31"
          },
          {
            "point": 100,
            "seconds": 51.42,
            "timeDisplay": "51.42"
          },
          {
            "point": 10,
            "seconds": 55.53,
            "timeDisplay": "55.53"
          },
          {
            "point": 1,
            "seconds": 56.32,
            "timeDisplay": "56.32"
          }
        ],
        "100_BR": [
          {
            "point": 1100,
            "seconds": 65.18,
            "timeDisplay": "1:05.18"
          },
          {
            "point": 1000,
            "seconds": 68.92,
            "timeDisplay": "1:08.92"
          },
          {
            "point": 900,
            "seconds": 72.77,
            "timeDisplay": "1:12.77"
          },
          {
            "point": 800,
            "seconds": 76.76,
            "timeDisplay": "1:16.76"
          },
          {
            "point": 700,
            "seconds": 80.89,
            "timeDisplay": "1:20.89"
          },
          {
            "point": 600,
            "seconds": 85.2,
            "timeDisplay": "1:25.20"
          },
          {
            "point": 500,
            "seconds": 89.73,
            "timeDisplay": "1:29.73"
          },
          {
            "point": 400,
            "seconds": 94.54,
            "timeDisplay": "1:34.54"
          },
          {
            "point": 300,
            "seconds": 99.73,
            "timeDisplay": "1:39.73"
          },
          {
            "point": 200,
            "seconds": 105.47,
            "timeDisplay": "1:45.47"
          },
          {
            "point": 100,
            "seconds": 112.18,
            "timeDisplay": "1:52.18"
          },
          {
            "point": 10,
            "seconds": 120.79,
            "timeDisplay": "2:00.79"
          },
          {
            "point": 1,
            "seconds": 122.34,
            "timeDisplay": "2:02.34"
          }
        ],
        "50_FL": [
          {
            "point": 1100,
            "seconds": 25.74,
            "timeDisplay": "25.74"
          },
          {
            "point": 1000,
            "seconds": 27.06,
            "timeDisplay": "27.06"
          },
          {
            "point": 900,
            "seconds": 28.43,
            "timeDisplay": "28.43"
          },
          {
            "point": 800,
            "seconds": 29.85,
            "timeDisplay": "29.85"
          },
          {
            "point": 700,
            "seconds": 31.34,
            "timeDisplay": "31.34"
          },
          {
            "point": 600,
            "seconds": 32.9,
            "timeDisplay": "32.90"
          },
          {
            "point": 500,
            "seconds": 34.56,
            "timeDisplay": "34.56"
          },
          {
            "point": 400,
            "seconds": 36.34,
            "timeDisplay": "36.34"
          },
          {
            "point": 300,
            "seconds": 38.29,
            "timeDisplay": "38.29"
          },
          {
            "point": 200,
            "seconds": 40.48,
            "timeDisplay": "40.48"
          },
          {
            "point": 100,
            "seconds": 43.13,
            "timeDisplay": "43.13"
          },
          {
            "point": 10,
            "seconds": 46.76,
            "timeDisplay": "46.76"
          },
          {
            "point": 1,
            "seconds": 47.51,
            "timeDisplay": "47.51"
          }
        ],
        "100_FL": [
          {
            "point": 1100,
            "seconds": 57.23,
            "timeDisplay": "57.23"
          },
          {
            "point": 1000,
            "seconds": 60.34,
            "timeDisplay": "1:00.34"
          },
          {
            "point": 900,
            "seconds": 63.57,
            "timeDisplay": "1:03.57"
          },
          {
            "point": 800,
            "seconds": 66.95,
            "timeDisplay": "1:06.95"
          },
          {
            "point": 700,
            "seconds": 70.51,
            "timeDisplay": "1:10.51"
          },
          {
            "point": 600,
            "seconds": 74.29,
            "timeDisplay": "1:14.29"
          },
          {
            "point": 500,
            "seconds": 78.33,
            "timeDisplay": "1:18.33"
          },
          {
            "point": 400,
            "seconds": 82.72,
            "timeDisplay": "1:22.72"
          },
          {
            "point": 300,
            "seconds": 87.59,
            "timeDisplay": "1:27.59"
          },
          {
            "point": 200,
            "seconds": 93.19,
            "timeDisplay": "1:33.19"
          },
          {
            "point": 100,
            "seconds": 100.15,
            "timeDisplay": "1:40.15"
          },
          {
            "point": 10,
            "seconds": 110.46,
            "timeDisplay": "1:50.46"
          },
          {
            "point": 1,
            "seconds": 112.87,
            "timeDisplay": "1:52.87"
          }
        ],
        "100_IM": [
          {
            "point": 1100,
            "seconds": 60.27,
            "timeDisplay": "1:00.27"
          },
          {
            "point": 1000,
            "seconds": 62.98,
            "timeDisplay": "1:02.98"
          },
          {
            "point": 900,
            "seconds": 65.81,
            "timeDisplay": "1:05.81"
          },
          {
            "point": 800,
            "seconds": 68.77,
            "timeDisplay": "1:08.77"
          },
          {
            "point": 700,
            "seconds": 71.88,
            "timeDisplay": "1:11.88"
          },
          {
            "point": 600,
            "seconds": 75.19,
            "timeDisplay": "1:15.19"
          },
          {
            "point": 500,
            "seconds": 78.73,
            "timeDisplay": "1:18.73"
          },
          {
            "point": 400,
            "seconds": 82.58,
            "timeDisplay": "1:22.58"
          },
          {
            "point": 300,
            "seconds": 86.86,
            "timeDisplay": "1:26.86"
          },
          {
            "point": 200,
            "seconds": 91.78,
            "timeDisplay": "1:31.78"
          },
          {
            "point": 100,
            "seconds": 97.91,
            "timeDisplay": "1:37.91"
          },
          {
            "point": 10,
            "seconds": 107.03,
            "timeDisplay": "1:47.03"
          },
          {
            "point": 1,
            "seconds": 109.18,
            "timeDisplay": "1:49.18"
          }
        ],
        "200_IM": [
          {
            "point": 1100,
            "seconds": 128.43,
            "timeDisplay": "2:08.43"
          },
          {
            "point": 1000,
            "seconds": 134.44,
            "timeDisplay": "2:14.44"
          },
          {
            "point": 900,
            "seconds": 140.7,
            "timeDisplay": "2:20.70"
          },
          {
            "point": 800,
            "seconds": 147.23,
            "timeDisplay": "2:27.23"
          },
          {
            "point": 700,
            "seconds": 154.1,
            "timeDisplay": "2:34.10"
          },
          {
            "point": 600,
            "seconds": 161.37,
            "timeDisplay": "2:41.37"
          },
          {
            "point": 500,
            "seconds": 169.13,
            "timeDisplay": "2:49.13"
          },
          {
            "point": 400,
            "seconds": 177.54,
            "timeDisplay": "2:57.54"
          },
          {
            "point": 300,
            "seconds": 186.83,
            "timeDisplay": "3:06.83"
          },
          {
            "point": 200,
            "seconds": 197.47,
            "timeDisplay": "3:17.47"
          },
          {
            "point": 100,
            "seconds": 210.58,
            "timeDisplay": "3:30.58"
          },
          {
            "point": 10,
            "seconds": 229.65,
            "timeDisplay": "3:49.65"
          },
          {
            "point": 1,
            "seconds": 233.94,
            "timeDisplay": "3:53.94"
          }
        ]
      },
      "11": {
        "50_FR": [
          {
            "point": 1100,
            "seconds": 22.0,
            "timeDisplay": "22.00"
          },
          {
            "point": 1000,
            "seconds": 23.3,
            "timeDisplay": "23.30"
          },
          {
            "point": 900,
            "seconds": 24.63,
            "timeDisplay": "24.63"
          },
          {
            "point": 800,
            "seconds": 26.0,
            "timeDisplay": "26.00"
          },
          {
            "point": 700,
            "seconds": 27.4,
            "timeDisplay": "27.40"
          },
          {
            "point": 600,
            "seconds": 28.86,
            "timeDisplay": "28.86"
          },
          {
            "point": 500,
            "seconds": 30.36,
            "timeDisplay": "30.36"
          },
          {
            "point": 400,
            "seconds": 31.94,
            "timeDisplay": "31.94"
          },
          {
            "point": 300,
            "seconds": 33.61,
            "timeDisplay": "33.61"
          },
          {
            "point": 200,
            "seconds": 35.42,
            "timeDisplay": "35.42"
          },
          {
            "point": 100,
            "seconds": 37.45,
            "timeDisplay": "37.45"
          },
          {
            "point": 10,
            "seconds": 39.83,
            "timeDisplay": "39.83"
          },
          {
            "point": 1,
            "seconds": 40.2,
            "timeDisplay": "40.20"
          }
        ],
        "100_FR": [
          {
            "point": 1100,
            "seconds": 49.27,
            "timeDisplay": "49.27"
          },
          {
            "point": 1000,
            "seconds": 51.62,
            "timeDisplay": "51.62"
          },
          {
            "point": 900,
            "seconds": 54.06,
            "timeDisplay": "54.06"
          },
          {
            "point": 800,
            "seconds": 56.58,
            "timeDisplay": "56.58"
          },
          {
            "point": 700,
            "seconds": 59.21,
            "timeDisplay": "59.21"
          },
          {
            "point": 600,
            "seconds": 61.98,
            "timeDisplay": "1:01.98"
          },
          {
            "point": 500,
            "seconds": 64.91,
            "timeDisplay": "1:04.91"
          },
          {
            "point": 400,
            "seconds": 68.04,
            "timeDisplay": "1:08.04"
          },
          {
            "point": 300,
            "seconds": 71.45,
            "timeDisplay": "1:11.45"
          },
          {
            "point": 200,
            "seconds": 75.28,
            "timeDisplay": "1:15.28"
          },
          {
            "point": 100,
            "seconds": 79.87,
            "timeDisplay": "1:19.87"
          },
          {
            "point": 10,
            "seconds": 86.07,
            "timeDisplay": "1:26.07"
          },
          {
            "point": 1,
            "seconds": 87.3,
            "timeDisplay": "1:27.30"
          }
        ],
        "200_FR": [
          {
            "point": 1100,
            "seconds": 108.81,
            "timeDisplay": "1:48.81"
          },
          {
            "point": 1000,
            "seconds": 113.32,
            "timeDisplay": "1:53.32"
          },
          {
            "point": 900,
            "seconds": 118.01,
            "timeDisplay": "1:58.01"
          },
          {
            "point": 800,
            "seconds": 122.93,
            "timeDisplay": "2:02.93"
          },
          {
            "point": 700,
            "seconds": 128.09,
            "timeDisplay": "2:08.09"
          },
          {
            "point": 600,
            "seconds": 133.57,
            "timeDisplay": "2:13.57"
          },
          {
            "point": 500,
            "seconds": 139.43,
            "timeDisplay": "2:19.43"
          },
          {
            "point": 400,
            "seconds": 145.79,
            "timeDisplay": "2:25.79"
          },
          {
            "point": 300,
            "seconds": 152.84,
            "timeDisplay": "2:32.84"
          },
          {
            "point": 200,
            "seconds": 160.93,
            "timeDisplay": "2:40.93"
          },
          {
            "point": 100,
            "seconds": 170.97,
            "timeDisplay": "2:50.97"
          },
          {
            "point": 10,
            "seconds": 185.78,
            "timeDisplay": "3:05.78"
          },
          {
            "point": 1,
            "seconds": 189.2,
            "timeDisplay": "3:09.20"
          }
        ],
        "500_FR": [
          {
            "point": 1100,
            "seconds": 289.64,
            "timeDisplay": "4:49.64"
          },
          {
            "point": 1000,
            "seconds": 301.82,
            "timeDisplay": "5:01.82"
          },
          {
            "point": 900,
            "seconds": 314.5,
            "timeDisplay": "5:14.50"
          },
          {
            "point": 800,
            "seconds": 327.76,
            "timeDisplay": "5:27.76"
          },
          {
            "point": 700,
            "seconds": 341.7,
            "timeDisplay": "5:41.70"
          },
          {
            "point": 600,
            "seconds": 356.45,
            "timeDisplay": "5:56.45"
          },
          {
            "point": 500,
            "seconds": 372.22,
            "timeDisplay": "6:12.22"
          },
          {
            "point": 400,
            "seconds": 389.31,
            "timeDisplay": "6:29.31"
          },
          {
            "point": 300,
            "seconds": 408.22,
            "timeDisplay": "6:48.22"
          },
          {
            "point": 200,
            "seconds": 429.89,
            "timeDisplay": "7:09.89"
          },
          {
            "point": 100,
            "seconds": 456.65,
            "timeDisplay": "7:36.65"
          },
          {
            "point": 10,
            "seconds": 495.75,
            "timeDisplay": "8:15.75"
          },
          {
            "point": 1,
            "seconds": 504.62,
            "timeDisplay": "8:24.62"
          }
        ],
        "1000_FR": [
          {
            "point": 1100,
            "seconds": 615.67,
            "timeDisplay": "10:15.67"
          },
          {
            "point": 1000,
            "seconds": 641.17,
            "timeDisplay": "10:41.17"
          },
          {
            "point": 900,
            "seconds": 667.7,
            "timeDisplay": "11:07.70"
          },
          {
            "point": 800,
            "seconds": 695.51,
            "timeDisplay": "11:35.51"
          },
          {
            "point": 700,
            "seconds": 724.74,
            "timeDisplay": "12:04.74"
          },
          {
            "point": 600,
            "seconds": 755.73,
            "timeDisplay": "12:35.73"
          },
          {
            "point": 500,
            "seconds": 788.88,
            "timeDisplay": "13:08.88"
          },
          {
            "point": 400,
            "seconds": 824.89,
            "timeDisplay": "13:44.89"
          },
          {
            "point": 300,
            "seconds": 864.75,
            "timeDisplay": "14:24.75"
          },
          {
            "point": 200,
            "seconds": 910.56,
            "timeDisplay": "15:10.56"
          },
          {
            "point": 100,
            "seconds": 967.36,
            "timeDisplay": "16:07.36"
          },
          {
            "point": 10,
            "seconds": 1051.16,
            "timeDisplay": "17:31.16"
          },
          {
            "point": 1,
            "seconds": 1070.46,
            "timeDisplay": "17:50.46"
          }
        ],
        "1650_FR": [
          {
            "point": 1100,
            "seconds": 1024.79,
            "timeDisplay": "17:04.79"
          },
          {
            "point": 1000,
            "seconds": 1074.11,
            "timeDisplay": "17:54.11"
          },
          {
            "point": 900,
            "seconds": 1125.1,
            "timeDisplay": "18:45.10"
          },
          {
            "point": 800,
            "seconds": 1178.02,
            "timeDisplay": "19:38.02"
          },
          {
            "point": 700,
            "seconds": 1233.21,
            "timeDisplay": "20:33.21"
          },
          {
            "point": 600,
            "seconds": 1291.1,
            "timeDisplay": "21:31.10"
          },
          {
            "point": 500,
            "seconds": 1352.32,
            "timeDisplay": "22:32.32"
          },
          {
            "point": 400,
            "seconds": 1417.81,
            "timeDisplay": "23:37.81"
          },
          {
            "point": 300,
            "seconds": 1489.08,
            "timeDisplay": "24:49.08"
          },
          {
            "point": 200,
            "seconds": 1568.95,
            "timeDisplay": "26:08.95"
          },
          {
            "point": 100,
            "seconds": 1664.28,
            "timeDisplay": "27:44.28"
          },
          {
            "point": 10,
            "seconds": 1792.59,
            "timeDisplay": "29:52.59"
          },
          {
            "point": 1,
            "seconds": 1817.6,
            "timeDisplay": "30:17.60"
          }
        ],
        "50_BK": [
          {
            "point": 1100,
            "seconds": 26.15,
            "timeDisplay": "26.15"
          },
          {
            "point": 1000,
            "seconds": 27.42,
            "timeDisplay": "27.42"
          },
          {
            "point": 900,
            "seconds": 28.74,
            "timeDisplay": "28.74"
          },
          {
            "point": 800,
            "seconds": 30.1,
            "timeDisplay": "30.10"
          },
          {
            "point": 700,
            "seconds": 31.52,
            "timeDisplay": "31.52"
          },
          {
            "point": 600,
            "seconds": 33.01,
            "timeDisplay": "33.01"
          },
          {
            "point": 500,
            "seconds": 34.58,
            "timeDisplay": "34.58"
          },
          {
            "point": 400,
            "seconds": 36.26,
            "timeDisplay": "36.26"
          },
          {
            "point": 300,
            "seconds": 38.09,
            "timeDisplay": "38.09"
          },
          {
            "point": 200,
            "seconds": 40.13,
            "timeDisplay": "40.13"
          },
          {
            "point": 100,
            "seconds": 42.56,
            "timeDisplay": "42.56"
          },
          {
            "point": 10,
            "seconds": 45.82,
            "timeDisplay": "45.82"
          },
          {
            "point": 1,
            "seconds": 46.46,
            "timeDisplay": "46.46"
          }
        ],
        "100_BK": [
          {
            "point": 1100,
            "seconds": 56.15,
            "timeDisplay": "56.15"
          },
          {
            "point": 1000,
            "seconds": 58.87,
            "timeDisplay": "58.87"
          },
          {
            "point": 900,
            "seconds": 61.69,
            "timeDisplay": "1:01.69"
          },
          {
            "point": 800,
            "seconds": 64.61,
            "timeDisplay": "1:04.61"
          },
          {
            "point": 700,
            "seconds": 67.66,
            "timeDisplay": "1:07.66"
          },
          {
            "point": 600,
            "seconds": 70.85,
            "timeDisplay": "1:10.85"
          },
          {
            "point": 500,
            "seconds": 74.23,
            "timeDisplay": "1:14.23"
          },
          {
            "point": 400,
            "seconds": 77.84,
            "timeDisplay": "1:17.84"
          },
          {
            "point": 300,
            "seconds": 81.76,
            "timeDisplay": "1:21.76"
          },
          {
            "point": 200,
            "seconds": 86.14,
            "timeDisplay": "1:26.14"
          },
          {
            "point": 100,
            "seconds": 91.37,
            "timeDisplay": "1:31.37"
          },
          {
            "point": 10,
            "seconds": 98.36,
            "timeDisplay": "1:38.36"
          },
          {
            "point": 1,
            "seconds": 99.71,
            "timeDisplay": "1:39.71"
          }
        ],
        "200_BK": [
          {
            "point": 1100,
            "seconds": 122.68,
            "timeDisplay": "2:02.68"
          },
          {
            "point": 1000,
            "seconds": 128.43,
            "timeDisplay": "2:08.43"
          },
          {
            "point": 900,
            "seconds": 134.38,
            "timeDisplay": "2:14.38"
          },
          {
            "point": 800,
            "seconds": 140.57,
            "timeDisplay": "2:20.57"
          },
          {
            "point": 700,
            "seconds": 147.03,
            "timeDisplay": "2:27.03"
          },
          {
            "point": 600,
            "seconds": 153.82,
            "timeDisplay": "2:33.82"
          },
          {
            "point": 500,
            "seconds": 161.02,
            "timeDisplay": "2:41.02"
          },
          {
            "point": 400,
            "seconds": 168.74,
            "timeDisplay": "2:48.74"
          },
          {
            "point": 300,
            "seconds": 177.17,
            "timeDisplay": "2:57.17"
          },
          {
            "point": 200,
            "seconds": 186.66,
            "timeDisplay": "3:06.66"
          },
          {
            "point": 100,
            "seconds": 198.06,
            "timeDisplay": "3:18.06"
          },
          {
            "point": 10,
            "seconds": 213.67,
            "timeDisplay": "3:33.67"
          },
          {
            "point": 1,
            "seconds": 216.82,
            "timeDisplay": "3:36.82"
          }
        ],
        "50_BR": [
          {
            "point": 1100,
            "seconds": 29.24,
            "timeDisplay": "29.24"
          },
          {
            "point": 1000,
            "seconds": 30.69,
            "timeDisplay": "30.69"
          },
          {
            "point": 900,
            "seconds": 32.18,
            "timeDisplay": "32.18"
          },
          {
            "point": 800,
            "seconds": 33.73,
            "timeDisplay": "33.73"
          },
          {
            "point": 700,
            "seconds": 35.34,
            "timeDisplay": "35.34"
          },
          {
            "point": 600,
            "seconds": 37.02,
            "timeDisplay": "37.02"
          },
          {
            "point": 500,
            "seconds": 38.81,
            "timeDisplay": "38.81"
          },
          {
            "point": 400,
            "seconds": 40.71,
            "timeDisplay": "40.71"
          },
          {
            "point": 300,
            "seconds": 42.77,
            "timeDisplay": "42.77"
          },
          {
            "point": 200,
            "seconds": 45.07,
            "timeDisplay": "45.07"
          },
          {
            "point": 100,
            "seconds": 47.79,
            "timeDisplay": "47.79"
          },
          {
            "point": 10,
            "seconds": 51.39,
            "timeDisplay": "51.39"
          },
          {
            "point": 1,
            "seconds": 52.08,
            "timeDisplay": "52.08"
          }
        ],
        "100_BR": [
          {
            "point": 1100,
            "seconds": 63.04,
            "timeDisplay": "1:03.04"
          },
          {
            "point": 1000,
            "seconds": 66.3,
            "timeDisplay": "1:06.30"
          },
          {
            "point": 900,
            "seconds": 69.67,
            "timeDisplay": "1:09.67"
          },
          {
            "point": 800,
            "seconds": 73.15,
            "timeDisplay": "1:13.15"
          },
          {
            "point": 700,
            "seconds": 76.76,
            "timeDisplay": "1:16.76"
          },
          {
            "point": 600,
            "seconds": 80.53,
            "timeDisplay": "1:20.53"
          },
          {
            "point": 500,
            "seconds": 84.49,
            "timeDisplay": "1:24.49"
          },
          {
            "point": 400,
            "seconds": 88.69,
            "timeDisplay": "1:28.69"
          },
          {
            "point": 300,
            "seconds": 93.22,
            "timeDisplay": "1:33.22"
          },
          {
            "point": 200,
            "seconds": 98.24,
            "timeDisplay": "1:38.24"
          },
          {
            "point": 100,
            "seconds": 104.1,
            "timeDisplay": "1:44.10"
          },
          {
            "point": 10,
            "seconds": 111.63,
            "timeDisplay": "1:51.63"
          },
          {
            "point": 1,
            "seconds": 112.98,
            "timeDisplay": "1:52.98"
          }
        ],
        "200_BR": [
          {
            "point": 1100,
            "seconds": 138.34,
            "timeDisplay": "2:18.34"
          },
          {
            "point": 1000,
            "seconds": 146.28,
            "timeDisplay": "2:26.28"
          },
          {
            "point": 900,
            "seconds": 154.41,
            "timeDisplay": "2:34.41"
          },
          {
            "point": 800,
            "seconds": 162.76,
            "timeDisplay": "2:42.76"
          },
          {
            "point": 700,
            "seconds": 171.37,
            "timeDisplay": "2:51.37"
          },
          {
            "point": 600,
            "seconds": 180.29,
            "timeDisplay": "3:00.29"
          },
          {
            "point": 500,
            "seconds": 189.57,
            "timeDisplay": "3:09.57"
          },
          {
            "point": 400,
            "seconds": 199.32,
            "timeDisplay": "3:19.32"
          },
          {
            "point": 300,
            "seconds": 209.7,
            "timeDisplay": "3:29.70"
          },
          {
            "point": 200,
            "seconds": 220.96,
            "timeDisplay": "3:40.96"
          },
          {
            "point": 100,
            "seconds": 233.77,
            "timeDisplay": "3:53.77"
          },
          {
            "point": 10,
            "seconds": 249.16,
            "timeDisplay": "4:09.16"
          },
          {
            "point": 1,
            "seconds": 251.59,
            "timeDisplay": "4:11.59"
          }
        ],
        "50_FL": [
          {
            "point": 1100,
            "seconds": 24.77,
            "timeDisplay": "24.77"
          },
          {
            "point": 1000,
            "seconds": 25.93,
            "timeDisplay": "25.93"
          },
          {
            "point": 900,
            "seconds": 27.12,
            "timeDisplay": "27.12"
          },
          {
            "point": 800,
            "seconds": 28.35,
            "timeDisplay": "28.35"
          },
          {
            "point": 700,
            "seconds": 29.65,
            "timeDisplay": "29.65"
          },
          {
            "point": 600,
            "seconds": 31.02,
            "timeDisplay": "31.02"
          },
          {
            "point": 500,
            "seconds": 32.46,
            "timeDisplay": "32.46"
          },
          {
            "point": 400,
            "seconds": 34.01,
            "timeDisplay": "34.01"
          },
          {
            "point": 300,
            "seconds": 35.71,
            "timeDisplay": "35.71"
          },
          {
            "point": 200,
            "seconds": 37.62,
            "timeDisplay": "37.62"
          },
          {
            "point": 100,
            "seconds": 39.92,
            "timeDisplay": "39.92"
          },
          {
            "point": 10,
            "seconds": 43.1,
            "timeDisplay": "43.10"
          },
          {
            "point": 1,
            "seconds": 43.74,
            "timeDisplay": "43.74"
          }
        ],
        "100_FL": [
          {
            "point": 1100,
            "seconds": 54.87,
            "timeDisplay": "54.87"
          },
          {
            "point": 1000,
            "seconds": 57.69,
            "timeDisplay": "57.69"
          },
          {
            "point": 900,
            "seconds": 60.6,
            "timeDisplay": "1:00.60"
          },
          {
            "point": 800,
            "seconds": 63.65,
            "timeDisplay": "1:03.65"
          },
          {
            "point": 700,
            "seconds": 66.82,
            "timeDisplay": "1:06.82"
          },
          {
            "point": 600,
            "seconds": 70.15,
            "timeDisplay": "1:10.15"
          },
          {
            "point": 500,
            "seconds": 73.69,
            "timeDisplay": "1:13.69"
          },
          {
            "point": 400,
            "seconds": 77.48,
            "timeDisplay": "1:17.48"
          },
          {
            "point": 300,
            "seconds": 81.64,
            "timeDisplay": "1:21.64"
          },
          {
            "point": 200,
            "seconds": 86.32,
            "timeDisplay": "1:26.32"
          },
          {
            "point": 100,
            "seconds": 91.96,
            "timeDisplay": "1:31.96"
          },
          {
            "point": 10,
            "seconds": 99.71,
            "timeDisplay": "1:39.71"
          },
          {
            "point": 1,
            "seconds": 101.3,
            "timeDisplay": "1:41.30"
          }
        ],
        "200_FL": [
          {
            "point": 1100,
            "seconds": 123.43,
            "timeDisplay": "2:03.43"
          },
          {
            "point": 1000,
            "seconds": 130.0,
            "timeDisplay": "2:10.00"
          },
          {
            "point": 900,
            "seconds": 136.8,
            "timeDisplay": "2:16.80"
          },
          {
            "point": 800,
            "seconds": 143.85,
            "timeDisplay": "2:23.85"
          },
          {
            "point": 700,
            "seconds": 151.2,
            "timeDisplay": "2:31.20"
          },
          {
            "point": 600,
            "seconds": 158.91,
            "timeDisplay": "2:38.91"
          },
          {
            "point": 500,
            "seconds": 167.07,
            "timeDisplay": "2:47.07"
          },
          {
            "point": 400,
            "seconds": 175.79,
            "timeDisplay": "2:55.79"
          },
          {
            "point": 300,
            "seconds": 185.28,
            "timeDisplay": "3:05.28"
          },
          {
            "point": 200,
            "seconds": 195.92,
            "timeDisplay": "3:15.92"
          },
          {
            "point": 100,
            "seconds": 208.62,
            "timeDisplay": "3:28.62"
          },
          {
            "point": 10,
            "seconds": 225.71,
            "timeDisplay": "3:45.71"
          },
          {
            "point": 1,
            "seconds": 229.05,
            "timeDisplay": "3:49.05"
          }
        ],
        "100_IM": [
          {
            "point": 1100,
            "seconds": 58.19,
            "timeDisplay": "58.19"
          },
          {
            "point": 1000,
            "seconds": 60.57,
            "timeDisplay": "1:00.57"
          },
          {
            "point": 900,
            "seconds": 63.04,
            "timeDisplay": "1:03.04"
          },
          {
            "point": 800,
            "seconds": 65.63,
            "timeDisplay": "1:05.63"
          },
          {
            "point": 700,
            "seconds": 68.36,
            "timeDisplay": "1:08.36"
          },
          {
            "point": 600,
            "seconds": 71.25,
            "timeDisplay": "1:11.25"
          },
          {
            "point": 500,
            "seconds": 74.35,
            "timeDisplay": "1:14.35"
          },
          {
            "point": 400,
            "seconds": 77.72,
            "timeDisplay": "1:17.72"
          },
          {
            "point": 300,
            "seconds": 81.47,
            "timeDisplay": "1:21.47"
          },
          {
            "point": 200,
            "seconds": 85.77,
            "timeDisplay": "1:25.77"
          },
          {
            "point": 100,
            "seconds": 91.14,
            "timeDisplay": "1:31.14"
          },
          {
            "point": 10,
            "seconds": 99.12,
            "timeDisplay": "1:39.12"
          },
          {
            "point": 1,
            "seconds": 101.0,
            "timeDisplay": "1:41.00"
          }
        ],
        "200_IM": [
          {
            "point": 1100,
            "seconds": 122.99,
            "timeDisplay": "2:02.99"
          },
          {
            "point": 1000,
            "seconds": 128.21,
            "timeDisplay": "2:08.21"
          },
          {
            "point": 900,
            "seconds": 133.63,
            "timeDisplay": "2:13.63"
          },
          {
            "point": 800,
            "seconds": 139.29,
            "timeDisplay": "2:19.29"
          },
          {
            "point": 700,
            "seconds": 145.26,
            "timeDisplay": "2:25.26"
          },
          {
            "point": 600,
            "seconds": 151.56,
            "timeDisplay": "2:31.56"
          },
          {
            "point": 500,
            "seconds": 158.3,
            "timeDisplay": "2:38.30"
          },
          {
            "point": 400,
            "seconds": 165.59,
            "timeDisplay": "2:45.59"
          },
          {
            "point": 300,
            "seconds": 173.65,
            "timeDisplay": "2:53.65"
          },
          {
            "point": 200,
            "seconds": 182.88,
            "timeDisplay": "3:02.88"
          },
          {
            "point": 100,
            "seconds": 194.25,
            "timeDisplay": "3:14.25"
          },
          {
            "point": 10,
            "seconds": 210.79,
            "timeDisplay": "3:30.79"
          },
          {
            "point": 1,
            "seconds": 214.51,
            "timeDisplay": "3:34.51"
          }
        ],
        "400_IM": [
          {
            "point": 1100,
            "seconds": 264.62,
            "timeDisplay": "4:24.62"
          },
          {
            "point": 1000,
            "seconds": 276.81,
            "timeDisplay": "4:36.81"
          },
          {
            "point": 900,
            "seconds": 289.44,
            "timeDisplay": "4:49.44"
          },
          {
            "point": 800,
            "seconds": 302.58,
            "timeDisplay": "5:02.58"
          },
          {
            "point": 700,
            "seconds": 316.32,
            "timeDisplay": "5:16.32"
          },
          {
            "point": 600,
            "seconds": 330.77,
            "timeDisplay": "5:30.77"
          },
          {
            "point": 500,
            "seconds": 346.12,
            "timeDisplay": "5:46.12"
          },
          {
            "point": 400,
            "seconds": 362.6,
            "timeDisplay": "6:02.60"
          },
          {
            "point": 300,
            "seconds": 380.64,
            "timeDisplay": "6:20.64"
          },
          {
            "point": 200,
            "seconds": 401.0,
            "timeDisplay": "6:41.00"
          },
          {
            "point": 100,
            "seconds": 425.59,
            "timeDisplay": "7:05.59"
          },
          {
            "point": 10,
            "seconds": 459.6,
            "timeDisplay": "7:39.60"
          },
          {
            "point": 1,
            "seconds": 466.58,
            "timeDisplay": "7:46.58"
          }
        ]
      },
      "12": {
        "50_FR": [
          {
            "point": 1100,
            "seconds": 20.64,
            "timeDisplay": "20.64"
          },
          {
            "point": 1000,
            "seconds": 21.86,
            "timeDisplay": "21.86"
          },
          {
            "point": 900,
            "seconds": 23.12,
            "timeDisplay": "23.12"
          },
          {
            "point": 800,
            "seconds": 24.4,
            "timeDisplay": "24.40"
          },
          {
            "point": 700,
            "seconds": 25.72,
            "timeDisplay": "25.72"
          },
          {
            "point": 600,
            "seconds": 27.08,
            "timeDisplay": "27.08"
          },
          {
            "point": 500,
            "seconds": 28.49,
            "timeDisplay": "28.49"
          },
          {
            "point": 400,
            "seconds": 29.97,
            "timeDisplay": "29.97"
          },
          {
            "point": 300,
            "seconds": 31.54,
            "timeDisplay": "31.54"
          },
          {
            "point": 200,
            "seconds": 33.23,
            "timeDisplay": "33.23"
          },
          {
            "point": 100,
            "seconds": 35.14,
            "timeDisplay": "35.14"
          },
          {
            "point": 10,
            "seconds": 37.38,
            "timeDisplay": "37.38"
          },
          {
            "point": 1,
            "seconds": 37.73,
            "timeDisplay": "37.73"
          }
        ],
        "100_FR": [
          {
            "point": 1100,
            "seconds": 46.13,
            "timeDisplay": "46.13"
          },
          {
            "point": 1000,
            "seconds": 48.33,
            "timeDisplay": "48.33"
          },
          {
            "point": 900,
            "seconds": 50.61,
            "timeDisplay": "50.61"
          },
          {
            "point": 800,
            "seconds": 52.97,
            "timeDisplay": "52.97"
          },
          {
            "point": 700,
            "seconds": 55.43,
            "timeDisplay": "55.43"
          },
          {
            "point": 600,
            "seconds": 58.02,
            "timeDisplay": "58.02"
          },
          {
            "point": 500,
            "seconds": 60.76,
            "timeDisplay": "1:00.76"
          },
          {
            "point": 400,
            "seconds": 63.69,
            "timeDisplay": "1:03.69"
          },
          {
            "point": 300,
            "seconds": 66.89,
            "timeDisplay": "1:06.89"
          },
          {
            "point": 200,
            "seconds": 70.48,
            "timeDisplay": "1:10.48"
          },
          {
            "point": 100,
            "seconds": 74.77,
            "timeDisplay": "1:14.77"
          },
          {
            "point": 10,
            "seconds": 80.57,
            "timeDisplay": "1:20.57"
          },
          {
            "point": 1,
            "seconds": 81.73,
            "timeDisplay": "1:21.73"
          }
        ],
        "200_FR": [
          {
            "point": 1100,
            "seconds": 101.76,
            "timeDisplay": "1:41.76"
          },
          {
            "point": 1000,
            "seconds": 105.97,
            "timeDisplay": "1:45.97"
          },
          {
            "point": 900,
            "seconds": 110.36,
            "timeDisplay": "1:50.36"
          },
          {
            "point": 800,
            "seconds": 114.95,
            "timeDisplay": "1:54.95"
          },
          {
            "point": 700,
            "seconds": 119.78,
            "timeDisplay": "1:59.78"
          },
          {
            "point": 600,
            "seconds": 124.9,
            "timeDisplay": "2:04.90"
          },
          {
            "point": 500,
            "seconds": 130.39,
            "timeDisplay": "2:10.39"
          },
          {
            "point": 400,
            "seconds": 136.33,
            "timeDisplay": "2:16.33"
          },
          {
            "point": 300,
            "seconds": 142.92,
            "timeDisplay": "2:22.92"
          },
          {
            "point": 200,
            "seconds": 150.5,
            "timeDisplay": "2:30.50"
          },
          {
            "point": 100,
            "seconds": 159.88,
            "timeDisplay": "2:39.88"
          },
          {
            "point": 10,
            "seconds": 173.73,
            "timeDisplay": "2:53.73"
          },
          {
            "point": 1,
            "seconds": 176.93,
            "timeDisplay": "2:56.93"
          }
        ],
        "500_FR": [
          {
            "point": 1100,
            "seconds": 272.43,
            "timeDisplay": "4:32.43"
          },
          {
            "point": 1000,
            "seconds": 283.9,
            "timeDisplay": "4:43.90"
          },
          {
            "point": 900,
            "seconds": 295.82,
            "timeDisplay": "4:55.82"
          },
          {
            "point": 800,
            "seconds": 308.29,
            "timeDisplay": "5:08.29"
          },
          {
            "point": 700,
            "seconds": 321.4,
            "timeDisplay": "5:21.40"
          },
          {
            "point": 600,
            "seconds": 335.28,
            "timeDisplay": "5:35.28"
          },
          {
            "point": 500,
            "seconds": 350.11,
            "timeDisplay": "5:50.11"
          },
          {
            "point": 400,
            "seconds": 366.19,
            "timeDisplay": "6:06.19"
          },
          {
            "point": 300,
            "seconds": 383.97,
            "timeDisplay": "6:23.97"
          },
          {
            "point": 200,
            "seconds": 404.35,
            "timeDisplay": "6:44.35"
          },
          {
            "point": 100,
            "seconds": 429.52,
            "timeDisplay": "7:09.52"
          },
          {
            "point": 10,
            "seconds": 466.3,
            "timeDisplay": "7:46.30"
          },
          {
            "point": 1,
            "seconds": 474.64,
            "timeDisplay": "7:54.64"
          }
        ],
        "1000_FR": [
          {
            "point": 1100,
            "seconds": 572.87,
            "timeDisplay": "9:32.87"
          },
          {
            "point": 1000,
            "seconds": 596.6,
            "timeDisplay": "9:56.60"
          },
          {
            "point": 900,
            "seconds": 621.31,
            "timeDisplay": "10:21.31"
          },
          {
            "point": 800,
            "seconds": 647.16,
            "timeDisplay": "10:47.16"
          },
          {
            "point": 700,
            "seconds": 674.36,
            "timeDisplay": "11:14.36"
          },
          {
            "point": 600,
            "seconds": 703.19,
            "timeDisplay": "11:43.19"
          },
          {
            "point": 500,
            "seconds": 734.04,
            "timeDisplay": "12:14.04"
          },
          {
            "point": 400,
            "seconds": 767.53,
            "timeDisplay": "12:47.53"
          },
          {
            "point": 300,
            "seconds": 804.64,
            "timeDisplay": "13:24.64"
          },
          {
            "point": 200,
            "seconds": 847.26,
            "timeDisplay": "14:07.26"
          },
          {
            "point": 100,
            "seconds": 900.12,
            "timeDisplay": "15:00.12"
          },
          {
            "point": 10,
            "seconds": 990.0,
            "timeDisplay": "16:30.00"
          },
          {
            "point": 1,
            "seconds": 996.05,
            "timeDisplay": "16:36.05"
          }
        ],
        "1650_FR": [
          {
            "point": 1100,
            "seconds": 944.24,
            "timeDisplay": "15:44.24"
          },
          {
            "point": 1000,
            "seconds": 989.68,
            "timeDisplay": "16:29.68"
          },
          {
            "point": 900,
            "seconds": 1036.67,
            "timeDisplay": "17:16.67"
          },
          {
            "point": 800,
            "seconds": 1085.43,
            "timeDisplay": "18:05.43"
          },
          {
            "point": 700,
            "seconds": 1136.28,
            "timeDisplay": "18:56.28"
          },
          {
            "point": 600,
            "seconds": 1189.62,
            "timeDisplay": "19:49.62"
          },
          {
            "point": 500,
            "seconds": 1246.03,
            "timeDisplay": "20:46.03"
          },
          {
            "point": 400,
            "seconds": 1306.37,
            "timeDisplay": "21:46.37"
          },
          {
            "point": 300,
            "seconds": 1372.04,
            "timeDisplay": "22:52.04"
          },
          {
            "point": 200,
            "seconds": 1445.64,
            "timeDisplay": "24:05.64"
          },
          {
            "point": 100,
            "seconds": 1533.47,
            "timeDisplay": "25:33.47"
          },
          {
            "point": 10,
            "seconds": 1651.7,
            "timeDisplay": "27:31.70"
          },
          {
            "point": 1,
            "seconds": 1674.74,
            "timeDisplay": "27:54.74"
          }
        ],
        "50_BK": [
          {
            "point": 1100,
            "seconds": 24.39,
            "timeDisplay": "24.39"
          },
          {
            "point": 1000,
            "seconds": 25.57,
            "timeDisplay": "25.57"
          },
          {
            "point": 900,
            "seconds": 26.8,
            "timeDisplay": "26.80"
          },
          {
            "point": 800,
            "seconds": 28.07,
            "timeDisplay": "28.07"
          },
          {
            "point": 700,
            "seconds": 29.39,
            "timeDisplay": "29.39"
          },
          {
            "point": 600,
            "seconds": 30.78,
            "timeDisplay": "30.78"
          },
          {
            "point": 500,
            "seconds": 32.24,
            "timeDisplay": "32.24"
          },
          {
            "point": 400,
            "seconds": 33.81,
            "timeDisplay": "33.81"
          },
          {
            "point": 300,
            "seconds": 35.51,
            "timeDisplay": "35.51"
          },
          {
            "point": 200,
            "seconds": 37.42,
            "timeDisplay": "37.42"
          },
          {
            "point": 100,
            "seconds": 39.69,
            "timeDisplay": "39.69"
          },
          {
            "point": 10,
            "seconds": 42.73,
            "timeDisplay": "42.73"
          },
          {
            "point": 1,
            "seconds": 43.32,
            "timeDisplay": "43.32"
          }
        ],
        "100_BK": [
          {
            "point": 1100,
            "seconds": 51.92,
            "timeDisplay": "51.92"
          },
          {
            "point": 1000,
            "seconds": 54.44,
            "timeDisplay": "54.44"
          },
          {
            "point": 900,
            "seconds": 57.05,
            "timeDisplay": "57.05"
          },
          {
            "point": 800,
            "seconds": 59.75,
            "timeDisplay": "59.75"
          },
          {
            "point": 700,
            "seconds": 62.57,
            "timeDisplay": "1:02.57"
          },
          {
            "point": 600,
            "seconds": 65.52,
            "timeDisplay": "1:05.52"
          },
          {
            "point": 500,
            "seconds": 68.64,
            "timeDisplay": "1:08.64"
          },
          {
            "point": 400,
            "seconds": 71.98,
            "timeDisplay": "1:11.98"
          },
          {
            "point": 300,
            "seconds": 75.61,
            "timeDisplay": "1:15.61"
          },
          {
            "point": 200,
            "seconds": 79.66,
            "timeDisplay": "1:19.66"
          },
          {
            "point": 100,
            "seconds": 84.49,
            "timeDisplay": "1:24.49"
          },
          {
            "point": 10,
            "seconds": 90.96,
            "timeDisplay": "1:30.96"
          },
          {
            "point": 1,
            "seconds": 92.22,
            "timeDisplay": "1:32.22"
          }
        ],
        "200_BK": [
          {
            "point": 1100,
            "seconds": 112.38,
            "timeDisplay": "1:52.38"
          },
          {
            "point": 1000,
            "seconds": 117.64,
            "timeDisplay": "1:57.64"
          },
          {
            "point": 900,
            "seconds": 123.1,
            "timeDisplay": "2:03.10"
          },
          {
            "point": 800,
            "seconds": 128.76,
            "timeDisplay": "2:08.76"
          },
          {
            "point": 700,
            "seconds": 134.68,
            "timeDisplay": "2:14.68"
          },
          {
            "point": 600,
            "seconds": 140.9,
            "timeDisplay": "2:20.90"
          },
          {
            "point": 500,
            "seconds": 147.5,
            "timeDisplay": "2:27.50"
          },
          {
            "point": 400,
            "seconds": 154.57,
            "timeDisplay": "2:34.57"
          },
          {
            "point": 300,
            "seconds": 162.29,
            "timeDisplay": "2:42.29"
          },
          {
            "point": 200,
            "seconds": 170.98,
            "timeDisplay": "2:50.98"
          },
          {
            "point": 100,
            "seconds": 181.43,
            "timeDisplay": "3:01.43"
          },
          {
            "point": 10,
            "seconds": 195.73,
            "timeDisplay": "3:15.73"
          },
          {
            "point": 1,
            "seconds": 198.61,
            "timeDisplay": "3:18.61"
          }
        ],
        "50_BR": [
          {
            "point": 1100,
            "seconds": 26.98,
            "timeDisplay": "26.98"
          },
          {
            "point": 1000,
            "seconds": 28.31,
            "timeDisplay": "28.31"
          },
          {
            "point": 900,
            "seconds": 29.69,
            "timeDisplay": "29.69"
          },
          {
            "point": 800,
            "seconds": 31.12,
            "timeDisplay": "31.12"
          },
          {
            "point": 700,
            "seconds": 32.61,
            "timeDisplay": "32.61"
          },
          {
            "point": 600,
            "seconds": 34.16,
            "timeDisplay": "34.16"
          },
          {
            "point": 500,
            "seconds": 35.8,
            "timeDisplay": "35.80"
          },
          {
            "point": 400,
            "seconds": 37.56,
            "timeDisplay": "37.56"
          },
          {
            "point": 300,
            "seconds": 39.46,
            "timeDisplay": "39.46"
          },
          {
            "point": 200,
            "seconds": 41.57,
            "timeDisplay": "41.57"
          },
          {
            "point": 100,
            "seconds": 44.09,
            "timeDisplay": "44.09"
          },
          {
            "point": 10,
            "seconds": 47.41,
            "timeDisplay": "47.41"
          },
          {
            "point": 1,
            "seconds": 48.04,
            "timeDisplay": "48.04"
          }
        ],
        "100_BR": [
          {
            "point": 1100,
            "seconds": 58.38,
            "timeDisplay": "58.38"
          },
          {
            "point": 1000,
            "seconds": 61.41,
            "timeDisplay": "1:01.41"
          },
          {
            "point": 900,
            "seconds": 64.53,
            "timeDisplay": "1:04.53"
          },
          {
            "point": 800,
            "seconds": 67.75,
            "timeDisplay": "1:07.75"
          },
          {
            "point": 700,
            "seconds": 71.09,
            "timeDisplay": "1:11.09"
          },
          {
            "point": 600,
            "seconds": 74.58,
            "timeDisplay": "1:14.58"
          },
          {
            "point": 500,
            "seconds": 78.25,
            "timeDisplay": "1:18.25"
          },
          {
            "point": 400,
            "seconds": 82.14,
            "timeDisplay": "1:22.14"
          },
          {
            "point": 300,
            "seconds": 86.34,
            "timeDisplay": "1:26.34"
          },
          {
            "point": 200,
            "seconds": 90.98,
            "timeDisplay": "1:30.98"
          },
          {
            "point": 100,
            "seconds": 96.42,
            "timeDisplay": "1:36.42"
          },
          {
            "point": 10,
            "seconds": 103.38,
            "timeDisplay": "1:43.38"
          },
          {
            "point": 1,
            "seconds": 104.64,
            "timeDisplay": "1:44.64"
          }
        ],
        "200_BR": [
          {
            "point": 1100,
            "seconds": 125.84,
            "timeDisplay": "2:05.84"
          },
          {
            "point": 1000,
            "seconds": 133.06,
            "timeDisplay": "2:13.06"
          },
          {
            "point": 900,
            "seconds": 140.45,
            "timeDisplay": "2:20.45"
          },
          {
            "point": 800,
            "seconds": 148.05,
            "timeDisplay": "2:28.05"
          },
          {
            "point": 700,
            "seconds": 155.89,
            "timeDisplay": "2:35.89"
          },
          {
            "point": 600,
            "seconds": 164.0,
            "timeDisplay": "2:44.00"
          },
          {
            "point": 500,
            "seconds": 172.44,
            "timeDisplay": "2:52.44"
          },
          {
            "point": 400,
            "seconds": 181.31,
            "timeDisplay": "3:01.31"
          },
          {
            "point": 300,
            "seconds": 190.75,
            "timeDisplay": "3:10.75"
          },
          {
            "point": 200,
            "seconds": 201.0,
            "timeDisplay": "3:21.00"
          },
          {
            "point": 100,
            "seconds": 212.65,
            "timeDisplay": "3:32.65"
          },
          {
            "point": 10,
            "seconds": 226.65,
            "timeDisplay": "3:46.65"
          },
          {
            "point": 1,
            "seconds": 228.86,
            "timeDisplay": "3:48.86"
          }
        ],
        "50_FL": [
          {
            "point": 1100,
            "seconds": 23.36,
            "timeDisplay": "23.36"
          },
          {
            "point": 1000,
            "seconds": 24.44,
            "timeDisplay": "24.44"
          },
          {
            "point": 900,
            "seconds": 25.57,
            "timeDisplay": "25.57"
          },
          {
            "point": 800,
            "seconds": 26.74,
            "timeDisplay": "26.74"
          },
          {
            "point": 700,
            "seconds": 27.96,
            "timeDisplay": "27.96"
          },
          {
            "point": 600,
            "seconds": 29.24,
            "timeDisplay": "29.24"
          },
          {
            "point": 500,
            "seconds": 30.61,
            "timeDisplay": "30.61"
          },
          {
            "point": 400,
            "seconds": 32.07,
            "timeDisplay": "32.07"
          },
          {
            "point": 300,
            "seconds": 33.67,
            "timeDisplay": "33.67"
          },
          {
            "point": 200,
            "seconds": 35.47,
            "timeDisplay": "35.47"
          },
          {
            "point": 100,
            "seconds": 37.64,
            "timeDisplay": "37.64"
          },
          {
            "point": 10,
            "seconds": 40.63,
            "timeDisplay": "40.63"
          },
          {
            "point": 1,
            "seconds": 41.24,
            "timeDisplay": "41.24"
          }
        ],
        "100_FL": [
          {
            "point": 1100,
            "seconds": 50.79,
            "timeDisplay": "50.79"
          },
          {
            "point": 1000,
            "seconds": 53.4,
            "timeDisplay": "53.40"
          },
          {
            "point": 900,
            "seconds": 56.1,
            "timeDisplay": "56.10"
          },
          {
            "point": 800,
            "seconds": 58.91,
            "timeDisplay": "58.91"
          },
          {
            "point": 700,
            "seconds": 61.85,
            "timeDisplay": "1:01.85"
          },
          {
            "point": 600,
            "seconds": 64.94,
            "timeDisplay": "1:04.94"
          },
          {
            "point": 500,
            "seconds": 68.21,
            "timeDisplay": "1:08.21"
          },
          {
            "point": 400,
            "seconds": 71.73,
            "timeDisplay": "1:11.73"
          },
          {
            "point": 300,
            "seconds": 75.57,
            "timeDisplay": "1:15.57"
          },
          {
            "point": 200,
            "seconds": 79.9,
            "timeDisplay": "1:19.90"
          },
          {
            "point": 100,
            "seconds": 85.12,
            "timeDisplay": "1:25.12"
          },
          {
            "point": 10,
            "seconds": 92.3,
            "timeDisplay": "1:32.30"
          },
          {
            "point": 1,
            "seconds": 93.76,
            "timeDisplay": "1:33.76"
          }
        ],
        "200_FL": [
          {
            "point": 1100,
            "seconds": 113.68,
            "timeDisplay": "1:53.68"
          },
          {
            "point": 1000,
            "seconds": 119.73,
            "timeDisplay": "1:59.73"
          },
          {
            "point": 900,
            "seconds": 125.99,
            "timeDisplay": "2:05.99"
          },
          {
            "point": 800,
            "seconds": 132.48,
            "timeDisplay": "2:12.48"
          },
          {
            "point": 700,
            "seconds": 139.25,
            "timeDisplay": "2:19.25"
          },
          {
            "point": 600,
            "seconds": 146.35,
            "timeDisplay": "2:26.35"
          },
          {
            "point": 500,
            "seconds": 153.86,
            "timeDisplay": "2:33.86"
          },
          {
            "point": 400,
            "seconds": 161.9,
            "timeDisplay": "2:41.90"
          },
          {
            "point": 300,
            "seconds": 170.64,
            "timeDisplay": "2:50.64"
          },
          {
            "point": 200,
            "seconds": 180.44,
            "timeDisplay": "3:00.44"
          },
          {
            "point": 100,
            "seconds": 192.14,
            "timeDisplay": "3:12.14"
          },
          {
            "point": 10,
            "seconds": 207.88,
            "timeDisplay": "3:27.88"
          },
          {
            "point": 1,
            "seconds": 210.95,
            "timeDisplay": "3:30.95"
          }
        ],
        "100_IM": [
          {
            "point": 1100,
            "seconds": 53.75,
            "timeDisplay": "53.75"
          },
          {
            "point": 1000,
            "seconds": 55.93,
            "timeDisplay": "55.93"
          },
          {
            "point": 900,
            "seconds": 58.22,
            "timeDisplay": "58.22"
          },
          {
            "point": 800,
            "seconds": 60.61,
            "timeDisplay": "1:00.61"
          },
          {
            "point": 700,
            "seconds": 63.13,
            "timeDisplay": "1:03.13"
          },
          {
            "point": 600,
            "seconds": 65.81,
            "timeDisplay": "1:05.81"
          },
          {
            "point": 500,
            "seconds": 68.66,
            "timeDisplay": "1:08.66"
          },
          {
            "point": 400,
            "seconds": 71.77,
            "timeDisplay": "1:11.77"
          },
          {
            "point": 300,
            "seconds": 75.22,
            "timeDisplay": "1:15.22"
          },
          {
            "point": 200,
            "seconds": 79.2,
            "timeDisplay": "1:19.20"
          },
          {
            "point": 100,
            "seconds": 84.17,
            "timeDisplay": "1:24.17"
          },
          {
            "point": 10,
            "seconds": 91.53,
            "timeDisplay": "1:31.53"
          },
          {
            "point": 1,
            "seconds": 93.26,
            "timeDisplay": "1:33.26"
          }
        ],
        "200_IM": [
          {
            "point": 1100,
            "seconds": 114.63,
            "timeDisplay": "1:54.63"
          },
          {
            "point": 1000,
            "seconds": 119.49,
            "timeDisplay": "1:59.49"
          },
          {
            "point": 900,
            "seconds": 124.55,
            "timeDisplay": "2:04.55"
          },
          {
            "point": 800,
            "seconds": 129.83,
            "timeDisplay": "2:09.83"
          },
          {
            "point": 700,
            "seconds": 135.38,
            "timeDisplay": "2:15.38"
          },
          {
            "point": 600,
            "seconds": 141.26,
            "timeDisplay": "2:21.26"
          },
          {
            "point": 500,
            "seconds": 147.53,
            "timeDisplay": "2:27.53"
          },
          {
            "point": 400,
            "seconds": 154.33,
            "timeDisplay": "2:34.33"
          },
          {
            "point": 300,
            "seconds": 161.84,
            "timeDisplay": "2:41.84"
          },
          {
            "point": 200,
            "seconds": 170.44,
            "timeDisplay": "2:50.44"
          },
          {
            "point": 100,
            "seconds": 181.04,
            "timeDisplay": "3:01.04"
          },
          {
            "point": 10,
            "seconds": 196.45,
            "timeDisplay": "3:16.45"
          },
          {
            "point": 1,
            "seconds": 199.92,
            "timeDisplay": "3:19.92"
          }
        ],
        "400_IM": [
          {
            "point": 1100,
            "seconds": 244.32,
            "timeDisplay": "4:04.32"
          },
          {
            "point": 1000,
            "seconds": 255.58,
            "timeDisplay": "4:15.58"
          },
          {
            "point": 900,
            "seconds": 267.24,
            "timeDisplay": "4:27.24"
          },
          {
            "point": 800,
            "seconds": 279.37,
            "timeDisplay": "4:39.37"
          },
          {
            "point": 700,
            "seconds": 292.04,
            "timeDisplay": "4:52.04"
          },
          {
            "point": 600,
            "seconds": 305.4,
            "timeDisplay": "5:05.40"
          },
          {
            "point": 500,
            "seconds": 319.57,
            "timeDisplay": "5:19.57"
          },
          {
            "point": 400,
            "seconds": 334.78,
            "timeDisplay": "5:34.78"
          },
          {
            "point": 300,
            "seconds": 351.44,
            "timeDisplay": "5:51.44"
          },
          {
            "point": 200,
            "seconds": 370.24,
            "timeDisplay": "6:10.24"
          },
          {
            "point": 100,
            "seconds": 392.94,
            "timeDisplay": "6:32.94"
          },
          {
            "point": 10,
            "seconds": 424.34,
            "timeDisplay": "7:04.34"
          },
          {
            "point": 1,
            "seconds": 430.79,
            "timeDisplay": "7:10.79"
          }
        ]
      },
      "13": {
        "50_FR": [
          {
            "point": 1100,
            "seconds": 19.98,
            "timeDisplay": "19.98"
          },
          {
            "point": 1000,
            "seconds": 21.04,
            "timeDisplay": "21.04"
          },
          {
            "point": 900,
            "seconds": 22.13,
            "timeDisplay": "22.13"
          },
          {
            "point": 800,
            "seconds": 23.24,
            "timeDisplay": "23.24"
          },
          {
            "point": 700,
            "seconds": 24.38,
            "timeDisplay": "24.38"
          },
          {
            "point": 600,
            "seconds": 25.56,
            "timeDisplay": "25.56"
          },
          {
            "point": 500,
            "seconds": 26.79,
            "timeDisplay": "26.79"
          },
          {
            "point": 400,
            "seconds": 28.07,
            "timeDisplay": "28.07"
          },
          {
            "point": 300,
            "seconds": 29.43,
            "timeDisplay": "29.43"
          },
          {
            "point": 200,
            "seconds": 30.89,
            "timeDisplay": "30.89"
          },
          {
            "point": 100,
            "seconds": 32.54,
            "timeDisplay": "32.54"
          },
          {
            "point": 10,
            "seconds": 34.49,
            "timeDisplay": "34.49"
          },
          {
            "point": 1,
            "seconds": 34.79,
            "timeDisplay": "34.79"
          }
        ],
        "100_FR": [
          {
            "point": 1100,
            "seconds": 44.59,
            "timeDisplay": "44.59"
          },
          {
            "point": 1000,
            "seconds": 46.5,
            "timeDisplay": "46.50"
          },
          {
            "point": 900,
            "seconds": 48.48,
            "timeDisplay": "48.48"
          },
          {
            "point": 800,
            "seconds": 50.53,
            "timeDisplay": "50.53"
          },
          {
            "point": 700,
            "seconds": 52.66,
            "timeDisplay": "52.66"
          },
          {
            "point": 600,
            "seconds": 54.91,
            "timeDisplay": "54.91"
          },
          {
            "point": 500,
            "seconds": 57.29,
            "timeDisplay": "57.29"
          },
          {
            "point": 400,
            "seconds": 59.83,
            "timeDisplay": "59.83"
          },
          {
            "point": 300,
            "seconds": 62.6,
            "timeDisplay": "1:02.60"
          },
          {
            "point": 200,
            "seconds": 65.71,
            "timeDisplay": "1:05.71"
          },
          {
            "point": 100,
            "seconds": 69.44,
            "timeDisplay": "1:09.44"
          },
          {
            "point": 10,
            "seconds": 74.44,
            "timeDisplay": "1:14.44"
          },
          {
            "point": 1,
            "seconds": 75.47,
            "timeDisplay": "1:15.47"
          }
        ],
        "200_FR": [
          {
            "point": 1100,
            "seconds": 98.36,
            "timeDisplay": "1:38.36"
          },
          {
            "point": 1000,
            "seconds": 102.02,
            "timeDisplay": "1:42.02"
          },
          {
            "point": 900,
            "seconds": 105.84,
            "timeDisplay": "1:45.84"
          },
          {
            "point": 800,
            "seconds": 109.83,
            "timeDisplay": "1:49.83"
          },
          {
            "point": 700,
            "seconds": 114.02,
            "timeDisplay": "1:54.02"
          },
          {
            "point": 600,
            "seconds": 118.47,
            "timeDisplay": "1:58.47"
          },
          {
            "point": 500,
            "seconds": 123.23,
            "timeDisplay": "2:03.23"
          },
          {
            "point": 400,
            "seconds": 128.4,
            "timeDisplay": "2:08.40"
          },
          {
            "point": 300,
            "seconds": 134.12,
            "timeDisplay": "2:14.12"
          },
          {
            "point": 200,
            "seconds": 140.7,
            "timeDisplay": "2:20.70"
          },
          {
            "point": 100,
            "seconds": 148.86,
            "timeDisplay": "2:28.86"
          },
          {
            "point": 10,
            "seconds": 160.89,
            "timeDisplay": "2:40.89"
          },
          {
            "point": 1,
            "seconds": 163.67,
            "timeDisplay": "2:43.67"
          }
        ],
        "500_FR": [
          {
            "point": 1100,
            "seconds": 263.3,
            "timeDisplay": "4:23.30"
          },
          {
            "point": 1000,
            "seconds": 273.25,
            "timeDisplay": "4:33.25"
          },
          {
            "point": 900,
            "seconds": 283.61,
            "timeDisplay": "4:43.61"
          },
          {
            "point": 800,
            "seconds": 294.44,
            "timeDisplay": "4:54.44"
          },
          {
            "point": 700,
            "seconds": 305.82,
            "timeDisplay": "5:05.82"
          },
          {
            "point": 600,
            "seconds": 317.87,
            "timeDisplay": "5:17.87"
          },
          {
            "point": 500,
            "seconds": 330.75,
            "timeDisplay": "5:30.75"
          },
          {
            "point": 400,
            "seconds": 344.71,
            "timeDisplay": "5:44.71"
          },
          {
            "point": 300,
            "seconds": 360.15,
            "timeDisplay": "6:00.15"
          },
          {
            "point": 200,
            "seconds": 377.84,
            "timeDisplay": "6:17.84"
          },
          {
            "point": 100,
            "seconds": 399.7,
            "timeDisplay": "6:39.70"
          },
          {
            "point": 10,
            "seconds": 431.64,
            "timeDisplay": "7:11.64"
          },
          {
            "point": 1,
            "seconds": 438.88,
            "timeDisplay": "7:18.88"
          }
        ],
        "1000_FR": [
          {
            "point": 1100,
            "seconds": 551.2,
            "timeDisplay": "9:11.20"
          },
          {
            "point": 1000,
            "seconds": 571.72,
            "timeDisplay": "9:31.72"
          },
          {
            "point": 900,
            "seconds": 593.08,
            "timeDisplay": "9:53.08"
          },
          {
            "point": 800,
            "seconds": 615.43,
            "timeDisplay": "10:15.43"
          },
          {
            "point": 700,
            "seconds": 638.95,
            "timeDisplay": "10:38.95"
          },
          {
            "point": 600,
            "seconds": 663.87,
            "timeDisplay": "11:03.87"
          },
          {
            "point": 500,
            "seconds": 690.54,
            "timeDisplay": "11:30.54"
          },
          {
            "point": 400,
            "seconds": 719.5,
            "timeDisplay": "11:59.50"
          },
          {
            "point": 300,
            "seconds": 751.58,
            "timeDisplay": "12:31.58"
          },
          {
            "point": 200,
            "seconds": 788.43,
            "timeDisplay": "13:08.43"
          },
          {
            "point": 100,
            "seconds": 834.13,
            "timeDisplay": "13:54.13"
          },
          {
            "point": 10,
            "seconds": 901.53,
            "timeDisplay": "15:01.53"
          },
          {
            "point": 1,
            "seconds": 917.07,
            "timeDisplay": "15:17.07"
          }
        ],
        "1650_FR": [
          {
            "point": 1100,
            "seconds": 905.64,
            "timeDisplay": "15:05.64"
          },
          {
            "point": 1000,
            "seconds": 944.73,
            "timeDisplay": "15:44.73"
          },
          {
            "point": 900,
            "seconds": 985.15,
            "timeDisplay": "16:25.15"
          },
          {
            "point": 800,
            "seconds": 1027.1,
            "timeDisplay": "17:07.10"
          },
          {
            "point": 700,
            "seconds": 1070.85,
            "timeDisplay": "17:50.85"
          },
          {
            "point": 600,
            "seconds": 1116.73,
            "timeDisplay": "18:36.73"
          },
          {
            "point": 500,
            "seconds": 1165.26,
            "timeDisplay": "19:25.26"
          },
          {
            "point": 400,
            "seconds": 1217.17,
            "timeDisplay": "20:17.17"
          },
          {
            "point": 300,
            "seconds": 1273.66,
            "timeDisplay": "21:13.66"
          },
          {
            "point": 200,
            "seconds": 1336.98,
            "timeDisplay": "22:16.98"
          },
          {
            "point": 100,
            "seconds": 1412.54,
            "timeDisplay": "23:32.54"
          },
          {
            "point": 10,
            "seconds": 1514.24,
            "timeDisplay": "25:14.24"
          },
          {
            "point": 1,
            "seconds": 1534.07,
            "timeDisplay": "25:34.07"
          }
        ],
        "50_BK": [
          {
            "point": 1100,
            "seconds": 23.13,
            "timeDisplay": "23.13"
          },
          {
            "point": 1000,
            "seconds": 24.13,
            "timeDisplay": "24.13"
          },
          {
            "point": 900,
            "seconds": 25.18,
            "timeDisplay": "25.18"
          },
          {
            "point": 800,
            "seconds": 26.26,
            "timeDisplay": "26.26"
          },
          {
            "point": 700,
            "seconds": 27.38,
            "timeDisplay": "27.38"
          },
          {
            "point": 600,
            "seconds": 28.56,
            "timeDisplay": "28.56"
          },
          {
            "point": 500,
            "seconds": 29.81,
            "timeDisplay": "29.81"
          },
          {
            "point": 400,
            "seconds": 31.14,
            "timeDisplay": "31.14"
          },
          {
            "point": 300,
            "seconds": 32.59,
            "timeDisplay": "32.59"
          },
          {
            "point": 200,
            "seconds": 34.21,
            "timeDisplay": "34.21"
          },
          {
            "point": 100,
            "seconds": 36.14,
            "timeDisplay": "36.14"
          },
          {
            "point": 10,
            "seconds": 38.73,
            "timeDisplay": "38.73"
          },
          {
            "point": 1,
            "seconds": 39.24,
            "timeDisplay": "39.24"
          }
        ],
        "100_BK": [
          {
            "point": 1100,
            "seconds": 49.7,
            "timeDisplay": "49.70"
          },
          {
            "point": 1000,
            "seconds": 51.86,
            "timeDisplay": "51.86"
          },
          {
            "point": 900,
            "seconds": 54.1,
            "timeDisplay": "54.10"
          },
          {
            "point": 800,
            "seconds": 56.42,
            "timeDisplay": "56.42"
          },
          {
            "point": 700,
            "seconds": 58.84,
            "timeDisplay": "58.84"
          },
          {
            "point": 600,
            "seconds": 61.37,
            "timeDisplay": "1:01.37"
          },
          {
            "point": 500,
            "seconds": 64.05,
            "timeDisplay": "1:04.05"
          },
          {
            "point": 400,
            "seconds": 66.91,
            "timeDisplay": "1:06.91"
          },
          {
            "point": 300,
            "seconds": 70.03,
            "timeDisplay": "1:10.03"
          },
          {
            "point": 200,
            "seconds": 73.51,
            "timeDisplay": "1:13.51"
          },
          {
            "point": 100,
            "seconds": 77.66,
            "timeDisplay": "1:17.66"
          },
          {
            "point": 10,
            "seconds": 83.21,
            "timeDisplay": "1:23.21"
          },
          {
            "point": 1,
            "seconds": 84.29,
            "timeDisplay": "1:24.29"
          }
        ],
        "200_BK": [
          {
            "point": 1100,
            "seconds": 108.3,
            "timeDisplay": "1:48.30"
          },
          {
            "point": 1000,
            "seconds": 112.85,
            "timeDisplay": "1:52.85"
          },
          {
            "point": 900,
            "seconds": 117.56,
            "timeDisplay": "1:57.56"
          },
          {
            "point": 800,
            "seconds": 122.47,
            "timeDisplay": "2:02.47"
          },
          {
            "point": 700,
            "seconds": 127.58,
            "timeDisplay": "2:07.58"
          },
          {
            "point": 600,
            "seconds": 132.96,
            "timeDisplay": "2:12.96"
          },
          {
            "point": 500,
            "seconds": 138.66,
            "timeDisplay": "2:18.66"
          },
          {
            "point": 400,
            "seconds": 144.78,
            "timeDisplay": "2:24.78"
          },
          {
            "point": 300,
            "seconds": 151.45,
            "timeDisplay": "2:31.45"
          },
          {
            "point": 200,
            "seconds": 158.97,
            "timeDisplay": "2:38.97"
          },
          {
            "point": 100,
            "seconds": 168.0,
            "timeDisplay": "2:48.00"
          },
          {
            "point": 10,
            "seconds": 180.37,
            "timeDisplay": "3:00.37"
          },
          {
            "point": 1,
            "seconds": 182.86,
            "timeDisplay": "3:02.86"
          }
        ],
        "50_BR": [
          {
            "point": 1100,
            "seconds": 25.6,
            "timeDisplay": "25.60"
          },
          {
            "point": 1000,
            "seconds": 26.74,
            "timeDisplay": "26.74"
          },
          {
            "point": 900,
            "seconds": 27.91,
            "timeDisplay": "27.91"
          },
          {
            "point": 800,
            "seconds": 29.13,
            "timeDisplay": "29.13"
          },
          {
            "point": 700,
            "seconds": 30.39,
            "timeDisplay": "30.39"
          },
          {
            "point": 600,
            "seconds": 31.72,
            "timeDisplay": "31.72"
          },
          {
            "point": 500,
            "seconds": 33.12,
            "timeDisplay": "33.12"
          },
          {
            "point": 400,
            "seconds": 34.61,
            "timeDisplay": "34.61"
          },
          {
            "point": 300,
            "seconds": 36.23,
            "timeDisplay": "36.23"
          },
          {
            "point": 200,
            "seconds": 38.03,
            "timeDisplay": "38.03"
          },
          {
            "point": 100,
            "seconds": 40.17,
            "timeDisplay": "40.17"
          },
          {
            "point": 10,
            "seconds": 43.0,
            "timeDisplay": "43.00"
          },
          {
            "point": 1,
            "seconds": 43.54,
            "timeDisplay": "43.54"
          }
        ],
        "100_BR": [
          {
            "point": 1100,
            "seconds": 55.93,
            "timeDisplay": "55.93"
          },
          {
            "point": 1000,
            "seconds": 58.53,
            "timeDisplay": "58.53"
          },
          {
            "point": 900,
            "seconds": 61.21,
            "timeDisplay": "1:01.21"
          },
          {
            "point": 800,
            "seconds": 63.97,
            "timeDisplay": "1:03.97"
          },
          {
            "point": 700,
            "seconds": 66.84,
            "timeDisplay": "1:06.84"
          },
          {
            "point": 600,
            "seconds": 69.84,
            "timeDisplay": "1:09.84"
          },
          {
            "point": 500,
            "seconds": 72.99,
            "timeDisplay": "1:12.99"
          },
          {
            "point": 400,
            "seconds": 76.33,
            "timeDisplay": "1:16.33"
          },
          {
            "point": 300,
            "seconds": 79.93,
            "timeDisplay": "1:19.93"
          },
          {
            "point": 200,
            "seconds": 83.92,
            "timeDisplay": "1:23.92"
          },
          {
            "point": 100,
            "seconds": 88.58,
            "timeDisplay": "1:28.58"
          },
          {
            "point": 10,
            "seconds": 94.57,
            "timeDisplay": "1:34.57"
          },
          {
            "point": 1,
            "seconds": 95.65,
            "timeDisplay": "1:35.65"
          }
        ],
        "200_BR": [
          {
            "point": 1100,
            "seconds": 119.58,
            "timeDisplay": "1:59.58"
          },
          {
            "point": 1000,
            "seconds": 125.72,
            "timeDisplay": "2:05.72"
          },
          {
            "point": 900,
            "seconds": 132.01,
            "timeDisplay": "2:12.01"
          },
          {
            "point": 800,
            "seconds": 138.47,
            "timeDisplay": "2:18.47"
          },
          {
            "point": 700,
            "seconds": 145.13,
            "timeDisplay": "2:25.13"
          },
          {
            "point": 600,
            "seconds": 152.03,
            "timeDisplay": "2:32.03"
          },
          {
            "point": 500,
            "seconds": 159.21,
            "timeDisplay": "2:39.21"
          },
          {
            "point": 400,
            "seconds": 166.76,
            "timeDisplay": "2:46.76"
          },
          {
            "point": 300,
            "seconds": 174.78,
            "timeDisplay": "2:54.78"
          },
          {
            "point": 200,
            "seconds": 183.49,
            "timeDisplay": "3:03.49"
          },
          {
            "point": 100,
            "seconds": 193.4,
            "timeDisplay": "3:13.40"
          },
          {
            "point": 10,
            "seconds": 205.3,
            "timeDisplay": "3:25.30"
          },
          {
            "point": 1,
            "seconds": 207.19,
            "timeDisplay": "3:27.19"
          }
        ],
        "50_FL": [
          {
            "point": 1100,
            "seconds": 22.77,
            "timeDisplay": "22.77"
          },
          {
            "point": 1000,
            "seconds": 23.72,
            "timeDisplay": "23.72"
          },
          {
            "point": 900,
            "seconds": 24.7,
            "timeDisplay": "24.70"
          },
          {
            "point": 800,
            "seconds": 25.73,
            "timeDisplay": "25.73"
          },
          {
            "point": 700,
            "seconds": 26.79,
            "timeDisplay": "26.79"
          },
          {
            "point": 600,
            "seconds": 27.92,
            "timeDisplay": "27.92"
          },
          {
            "point": 500,
            "seconds": 29.11,
            "timeDisplay": "29.11"
          },
          {
            "point": 400,
            "seconds": 30.39,
            "timeDisplay": "30.39"
          },
          {
            "point": 300,
            "seconds": 31.79,
            "timeDisplay": "31.79"
          },
          {
            "point": 200,
            "seconds": 33.36,
            "timeDisplay": "33.36"
          },
          {
            "point": 100,
            "seconds": 35.26,
            "timeDisplay": "35.26"
          },
          {
            "point": 10,
            "seconds": 37.9,
            "timeDisplay": "37.90"
          },
          {
            "point": 1,
            "seconds": 38.42,
            "timeDisplay": "38.42"
          }
        ],
        "100_FL": [
          {
            "point": 1100,
            "seconds": 49.25,
            "timeDisplay": "49.25"
          },
          {
            "point": 1000,
            "seconds": 51.38,
            "timeDisplay": "51.38"
          },
          {
            "point": 900,
            "seconds": 53.58,
            "timeDisplay": "53.58"
          },
          {
            "point": 800,
            "seconds": 55.86,
            "timeDisplay": "55.86"
          },
          {
            "point": 700,
            "seconds": 58.24,
            "timeDisplay": "58.24"
          },
          {
            "point": 600,
            "seconds": 60.73,
            "timeDisplay": "1:00.73"
          },
          {
            "point": 500,
            "seconds": 63.37,
            "timeDisplay": "1:03.37"
          },
          {
            "point": 400,
            "seconds": 66.2,
            "timeDisplay": "1:06.20"
          },
          {
            "point": 300,
            "seconds": 69.27,
            "timeDisplay": "1:09.27"
          },
          {
            "point": 200,
            "seconds": 72.71,
            "timeDisplay": "1:12.71"
          },
          {
            "point": 100,
            "seconds": 76.82,
            "timeDisplay": "1:16.82"
          },
          {
            "point": 10,
            "seconds": 82.35,
            "timeDisplay": "1:22.35"
          },
          {
            "point": 1,
            "seconds": 83.44,
            "timeDisplay": "1:23.44"
          }
        ],
        "200_FL": [
          {
            "point": 1100,
            "seconds": 108.66,
            "timeDisplay": "1:48.66"
          },
          {
            "point": 1000,
            "seconds": 113.52,
            "timeDisplay": "1:53.52"
          },
          {
            "point": 900,
            "seconds": 118.54,
            "timeDisplay": "1:58.54"
          },
          {
            "point": 800,
            "seconds": 123.74,
            "timeDisplay": "2:03.74"
          },
          {
            "point": 700,
            "seconds": 129.15,
            "timeDisplay": "2:09.15"
          },
          {
            "point": 600,
            "seconds": 134.8,
            "timeDisplay": "2:14.80"
          },
          {
            "point": 500,
            "seconds": 140.77,
            "timeDisplay": "2:20.77"
          },
          {
            "point": 400,
            "seconds": 147.13,
            "timeDisplay": "2:27.13"
          },
          {
            "point": 300,
            "seconds": 154.01,
            "timeDisplay": "2:34.01"
          },
          {
            "point": 200,
            "seconds": 161.69,
            "timeDisplay": "2:41.69"
          },
          {
            "point": 100,
            "seconds": 170.75,
            "timeDisplay": "2:50.75"
          },
          {
            "point": 10,
            "seconds": 182.67,
            "timeDisplay": "3:02.67"
          },
          {
            "point": 1,
            "seconds": 184.91,
            "timeDisplay": "3:04.91"
          }
        ],
        "100_IM": [
          {
            "point": 1100,
            "seconds": 50.55,
            "timeDisplay": "50.55"
          },
          {
            "point": 1000,
            "seconds": 52.4,
            "timeDisplay": "52.40"
          },
          {
            "point": 900,
            "seconds": 54.33,
            "timeDisplay": "54.33"
          },
          {
            "point": 800,
            "seconds": 56.36,
            "timeDisplay": "56.36"
          },
          {
            "point": 700,
            "seconds": 58.48,
            "timeDisplay": "58.48"
          },
          {
            "point": 600,
            "seconds": 60.74,
            "timeDisplay": "1:00.74"
          },
          {
            "point": 500,
            "seconds": 63.16,
            "timeDisplay": "1:03.16"
          },
          {
            "point": 400,
            "seconds": 65.8,
            "timeDisplay": "1:05.80"
          },
          {
            "point": 300,
            "seconds": 68.72,
            "timeDisplay": "1:08.72"
          },
          {
            "point": 200,
            "seconds": 72.08,
            "timeDisplay": "1:12.08"
          },
          {
            "point": 100,
            "seconds": 76.26,
            "timeDisplay": "1:16.26"
          },
          {
            "point": 10,
            "seconds": 82.49,
            "timeDisplay": "1:22.49"
          },
          {
            "point": 1,
            "seconds": 83.96,
            "timeDisplay": "1:23.96"
          }
        ],
        "200_IM": [
          {
            "point": 1100,
            "seconds": 110.75,
            "timeDisplay": "1:50.75"
          },
          {
            "point": 1000,
            "seconds": 114.97,
            "timeDisplay": "1:54.97"
          },
          {
            "point": 900,
            "seconds": 119.36,
            "timeDisplay": "1:59.36"
          },
          {
            "point": 800,
            "seconds": 123.94,
            "timeDisplay": "2:03.94"
          },
          {
            "point": 700,
            "seconds": 128.76,
            "timeDisplay": "2:08.76"
          },
          {
            "point": 600,
            "seconds": 133.86,
            "timeDisplay": "2:13.86"
          },
          {
            "point": 500,
            "seconds": 139.31,
            "timeDisplay": "2:19.31"
          },
          {
            "point": 400,
            "seconds": 145.21,
            "timeDisplay": "2:25.21"
          },
          {
            "point": 300,
            "seconds": 151.73,
            "timeDisplay": "2:31.73"
          },
          {
            "point": 200,
            "seconds": 159.19,
            "timeDisplay": "2:39.19"
          },
          {
            "point": 100,
            "seconds": 168.38,
            "timeDisplay": "2:48.38"
          },
          {
            "point": 10,
            "seconds": 181.76,
            "timeDisplay": "3:01.76"
          },
          {
            "point": 1,
            "seconds": 184.78,
            "timeDisplay": "3:04.78"
          }
        ],
        "400_IM": [
          {
            "point": 1100,
            "seconds": 234.7,
            "timeDisplay": "3:54.70"
          },
          {
            "point": 1000,
            "seconds": 244.4,
            "timeDisplay": "4:04.40"
          },
          {
            "point": 900,
            "seconds": 254.45,
            "timeDisplay": "4:14.45"
          },
          {
            "point": 800,
            "seconds": 264.91,
            "timeDisplay": "4:24.91"
          },
          {
            "point": 700,
            "seconds": 275.85,
            "timeDisplay": "4:35.85"
          },
          {
            "point": 600,
            "seconds": 287.35,
            "timeDisplay": "4:47.35"
          },
          {
            "point": 500,
            "seconds": 299.57,
            "timeDisplay": "4:59.57"
          },
          {
            "point": 400,
            "seconds": 312.69,
            "timeDisplay": "5:12.69"
          },
          {
            "point": 300,
            "seconds": 327.04,
            "timeDisplay": "5:27.04"
          },
          {
            "point": 200,
            "seconds": 343.25,
            "timeDisplay": "5:43.25"
          },
          {
            "point": 100,
            "seconds": 362.82,
            "timeDisplay": "6:02.82"
          },
          {
            "point": 10,
            "seconds": 389.89,
            "timeDisplay": "6:29.89"
          },
          {
            "point": 1,
            "seconds": 395.45,
            "timeDisplay": "6:35.45"
          }
        ]
      },
      "14": {
        "50_FR": [
          {
            "point": 1100,
            "seconds": 19.22,
            "timeDisplay": "19.22"
          },
          {
            "point": 1000,
            "seconds": 20.24,
            "timeDisplay": "20.24"
          },
          {
            "point": 900,
            "seconds": 21.29,
            "timeDisplay": "21.29"
          },
          {
            "point": 800,
            "seconds": 22.36,
            "timeDisplay": "22.36"
          },
          {
            "point": 700,
            "seconds": 23.46,
            "timeDisplay": "23.46"
          },
          {
            "point": 600,
            "seconds": 24.59,
            "timeDisplay": "24.59"
          },
          {
            "point": 500,
            "seconds": 25.77,
            "timeDisplay": "25.77"
          },
          {
            "point": 400,
            "seconds": 27.01,
            "timeDisplay": "27.01"
          },
          {
            "point": 300,
            "seconds": 28.31,
            "timeDisplay": "28.31"
          },
          {
            "point": 200,
            "seconds": 29.72,
            "timeDisplay": "29.72"
          },
          {
            "point": 100,
            "seconds": 31.31,
            "timeDisplay": "31.31"
          },
          {
            "point": 10,
            "seconds": 33.18,
            "timeDisplay": "33.18"
          },
          {
            "point": 1,
            "seconds": 33.47,
            "timeDisplay": "33.47"
          }
        ],
        "100_FR": [
          {
            "point": 1100,
            "seconds": 42.87,
            "timeDisplay": "42.87"
          },
          {
            "point": 1000,
            "seconds": 44.71,
            "timeDisplay": "44.71"
          },
          {
            "point": 900,
            "seconds": 46.6,
            "timeDisplay": "46.60"
          },
          {
            "point": 800,
            "seconds": 48.58,
            "timeDisplay": "48.58"
          },
          {
            "point": 700,
            "seconds": 50.63,
            "timeDisplay": "50.63"
          },
          {
            "point": 600,
            "seconds": 52.79,
            "timeDisplay": "52.79"
          },
          {
            "point": 500,
            "seconds": 55.08,
            "timeDisplay": "55.08"
          },
          {
            "point": 400,
            "seconds": 57.52,
            "timeDisplay": "57.52"
          },
          {
            "point": 300,
            "seconds": 60.18,
            "timeDisplay": "1:00.18"
          },
          {
            "point": 200,
            "seconds": 63.17,
            "timeDisplay": "1:03.17"
          },
          {
            "point": 100,
            "seconds": 66.75,
            "timeDisplay": "1:06.75"
          },
          {
            "point": 10,
            "seconds": 71.59,
            "timeDisplay": "1:11.59"
          },
          {
            "point": 1,
            "seconds": 72.55,
            "timeDisplay": "1:12.55"
          }
        ],
        "200_FR": [
          {
            "point": 1100,
            "seconds": 94.95,
            "timeDisplay": "1:34.95"
          },
          {
            "point": 1000,
            "seconds": 98.48,
            "timeDisplay": "1:38.48"
          },
          {
            "point": 900,
            "seconds": 102.16,
            "timeDisplay": "1:42.16"
          },
          {
            "point": 800,
            "seconds": 106.01,
            "timeDisplay": "1:46.01"
          },
          {
            "point": 700,
            "seconds": 110.07,
            "timeDisplay": "1:50.07"
          },
          {
            "point": 600,
            "seconds": 114.36,
            "timeDisplay": "1:54.36"
          },
          {
            "point": 500,
            "seconds": 118.95,
            "timeDisplay": "1:58.95"
          },
          {
            "point": 400,
            "seconds": 123.94,
            "timeDisplay": "2:03.94"
          },
          {
            "point": 300,
            "seconds": 129.47,
            "timeDisplay": "2:09.47"
          },
          {
            "point": 200,
            "seconds": 135.82,
            "timeDisplay": "2:15.82"
          },
          {
            "point": 100,
            "seconds": 143.69,
            "timeDisplay": "2:23.69"
          },
          {
            "point": 10,
            "seconds": 155.3,
            "timeDisplay": "2:35.30"
          },
          {
            "point": 1,
            "seconds": 157.98,
            "timeDisplay": "2:37.98"
          }
        ],
        "500_FR": [
          {
            "point": 1100,
            "seconds": 254.55,
            "timeDisplay": "4:14.55"
          },
          {
            "point": 1000,
            "seconds": 264.16,
            "timeDisplay": "4:24.16"
          },
          {
            "point": 900,
            "seconds": 274.18,
            "timeDisplay": "4:34.18"
          },
          {
            "point": 800,
            "seconds": 284.64,
            "timeDisplay": "4:44.64"
          },
          {
            "point": 700,
            "seconds": 295.64,
            "timeDisplay": "4:55.64"
          },
          {
            "point": 600,
            "seconds": 307.29,
            "timeDisplay": "5:07.29"
          },
          {
            "point": 500,
            "seconds": 319.75,
            "timeDisplay": "5:19.75"
          },
          {
            "point": 400,
            "seconds": 333.24,
            "timeDisplay": "5:33.24"
          },
          {
            "point": 300,
            "seconds": 348.17,
            "timeDisplay": "5:48.17"
          },
          {
            "point": 200,
            "seconds": 365.27,
            "timeDisplay": "6:05.27"
          },
          {
            "point": 100,
            "seconds": 386.4,
            "timeDisplay": "6:26.40"
          },
          {
            "point": 10,
            "seconds": 417.27,
            "timeDisplay": "6:57.27"
          },
          {
            "point": 1,
            "seconds": 424.28,
            "timeDisplay": "7:04.28"
          }
        ],
        "1000_FR": [
          {
            "point": 1100,
            "seconds": 531.89,
            "timeDisplay": "8:51.89"
          },
          {
            "point": 1000,
            "seconds": 551.68,
            "timeDisplay": "9:11.68"
          },
          {
            "point": 900,
            "seconds": 572.3,
            "timeDisplay": "9:32.30"
          },
          {
            "point": 800,
            "seconds": 593.87,
            "timeDisplay": "9:53.87"
          },
          {
            "point": 700,
            "seconds": 616.56,
            "timeDisplay": "10:16.56"
          },
          {
            "point": 600,
            "seconds": 640.61,
            "timeDisplay": "10:40.61"
          },
          {
            "point": 500,
            "seconds": 666.35,
            "timeDisplay": "11:06.35"
          },
          {
            "point": 400,
            "seconds": 694.29,
            "timeDisplay": "11:34.29"
          },
          {
            "point": 300,
            "seconds": 725.24,
            "timeDisplay": "12:05.24"
          },
          {
            "point": 200,
            "seconds": 760.8,
            "timeDisplay": "12:40.80"
          },
          {
            "point": 100,
            "seconds": 804.91,
            "timeDisplay": "13:24.91"
          },
          {
            "point": 10,
            "seconds": 869.94,
            "timeDisplay": "14:29.94"
          },
          {
            "point": 1,
            "seconds": 884.93,
            "timeDisplay": "14:44.93"
          }
        ],
        "1650_FR": [
          {
            "point": 1100,
            "seconds": 876.32,
            "timeDisplay": "14:36.32"
          },
          {
            "point": 1000,
            "seconds": 914.15,
            "timeDisplay": "15:14.15"
          },
          {
            "point": 900,
            "seconds": 953.26,
            "timeDisplay": "15:53.26"
          },
          {
            "point": 800,
            "seconds": 993.85,
            "timeDisplay": "16:33.85"
          },
          {
            "point": 700,
            "seconds": 1036.18,
            "timeDisplay": "17:16.18"
          },
          {
            "point": 600,
            "seconds": 1080.58,
            "timeDisplay": "18:00.58"
          },
          {
            "point": 500,
            "seconds": 1127.53,
            "timeDisplay": "18:47.53"
          },
          {
            "point": 400,
            "seconds": 1177.76,
            "timeDisplay": "19:37.76"
          },
          {
            "point": 300,
            "seconds": 1232.42,
            "timeDisplay": "20:32.42"
          },
          {
            "point": 200,
            "seconds": 1293.69,
            "timeDisplay": "21:33.69"
          },
          {
            "point": 100,
            "seconds": 1366.8,
            "timeDisplay": "22:46.80"
          },
          {
            "point": 10,
            "seconds": 1465.22,
            "timeDisplay": "24:25.22"
          },
          {
            "point": 1,
            "seconds": 1484.4,
            "timeDisplay": "24:44.40"
          }
        ],
        "50_BK": [
          {
            "point": 1100,
            "seconds": 22.24,
            "timeDisplay": "22.24"
          },
          {
            "point": 1000,
            "seconds": 23.2,
            "timeDisplay": "23.20"
          },
          {
            "point": 900,
            "seconds": 24.21,
            "timeDisplay": "24.21"
          },
          {
            "point": 800,
            "seconds": 25.25,
            "timeDisplay": "25.25"
          },
          {
            "point": 700,
            "seconds": 26.33,
            "timeDisplay": "26.33"
          },
          {
            "point": 600,
            "seconds": 27.46,
            "timeDisplay": "27.46"
          },
          {
            "point": 500,
            "seconds": 28.66,
            "timeDisplay": "28.66"
          },
          {
            "point": 400,
            "seconds": 29.95,
            "timeDisplay": "29.95"
          },
          {
            "point": 300,
            "seconds": 31.34,
            "timeDisplay": "31.34"
          },
          {
            "point": 200,
            "seconds": 32.9,
            "timeDisplay": "32.90"
          },
          {
            "point": 100,
            "seconds": 34.76,
            "timeDisplay": "34.76"
          },
          {
            "point": 10,
            "seconds": 37.24,
            "timeDisplay": "37.24"
          },
          {
            "point": 1,
            "seconds": 37.73,
            "timeDisplay": "37.73"
          }
        ],
        "100_BK": [
          {
            "point": 1100,
            "seconds": 47.78,
            "timeDisplay": "47.78"
          },
          {
            "point": 1000,
            "seconds": 49.86,
            "timeDisplay": "49.86"
          },
          {
            "point": 900,
            "seconds": 52.02,
            "timeDisplay": "52.02"
          },
          {
            "point": 800,
            "seconds": 54.25,
            "timeDisplay": "54.25"
          },
          {
            "point": 700,
            "seconds": 56.57,
            "timeDisplay": "56.57"
          },
          {
            "point": 600,
            "seconds": 59.01,
            "timeDisplay": "59.01"
          },
          {
            "point": 500,
            "seconds": 61.59,
            "timeDisplay": "1:01.59"
          },
          {
            "point": 400,
            "seconds": 64.34,
            "timeDisplay": "1:04.34"
          },
          {
            "point": 300,
            "seconds": 67.33,
            "timeDisplay": "1:07.33"
          },
          {
            "point": 200,
            "seconds": 70.68,
            "timeDisplay": "1:10.68"
          },
          {
            "point": 100,
            "seconds": 74.67,
            "timeDisplay": "1:14.67"
          },
          {
            "point": 10,
            "seconds": 80.01,
            "timeDisplay": "1:20.01"
          },
          {
            "point": 1,
            "seconds": 81.05,
            "timeDisplay": "1:21.05"
          }
        ],
        "200_BK": [
          {
            "point": 1100,
            "seconds": 103.42,
            "timeDisplay": "1:43.42"
          },
          {
            "point": 1000,
            "seconds": 107.77,
            "timeDisplay": "1:47.77"
          },
          {
            "point": 900,
            "seconds": 112.27,
            "timeDisplay": "1:52.27"
          },
          {
            "point": 800,
            "seconds": 116.95,
            "timeDisplay": "1:56.95"
          },
          {
            "point": 700,
            "seconds": 121.84,
            "timeDisplay": "2:01.84"
          },
          {
            "point": 600,
            "seconds": 126.98,
            "timeDisplay": "2:06.98"
          },
          {
            "point": 500,
            "seconds": 132.42,
            "timeDisplay": "2:12.42"
          },
          {
            "point": 400,
            "seconds": 138.26,
            "timeDisplay": "2:18.26"
          },
          {
            "point": 300,
            "seconds": 144.64,
            "timeDisplay": "2:24.64"
          },
          {
            "point": 200,
            "seconds": 151.82,
            "timeDisplay": "2:31.82"
          },
          {
            "point": 100,
            "seconds": 160.45,
            "timeDisplay": "2:40.45"
          },
          {
            "point": 10,
            "seconds": 172.25,
            "timeDisplay": "2:52.25"
          },
          {
            "point": 1,
            "seconds": 174.63,
            "timeDisplay": "2:54.63"
          }
        ],
        "50_BR": [
          {
            "point": 1100,
            "seconds": 24.64,
            "timeDisplay": "24.64"
          },
          {
            "point": 1000,
            "seconds": 25.73,
            "timeDisplay": "25.73"
          },
          {
            "point": 900,
            "seconds": 26.86,
            "timeDisplay": "26.86"
          },
          {
            "point": 800,
            "seconds": 28.03,
            "timeDisplay": "28.03"
          },
          {
            "point": 700,
            "seconds": 29.24,
            "timeDisplay": "29.24"
          },
          {
            "point": 600,
            "seconds": 30.52,
            "timeDisplay": "30.52"
          },
          {
            "point": 500,
            "seconds": 31.86,
            "timeDisplay": "31.86"
          },
          {
            "point": 400,
            "seconds": 33.29,
            "timeDisplay": "33.29"
          },
          {
            "point": 300,
            "seconds": 34.84,
            "timeDisplay": "34.84"
          },
          {
            "point": 200,
            "seconds": 36.58,
            "timeDisplay": "36.58"
          },
          {
            "point": 100,
            "seconds": 38.62,
            "timeDisplay": "38.62"
          },
          {
            "point": 10,
            "seconds": 41.35,
            "timeDisplay": "41.35"
          },
          {
            "point": 1,
            "seconds": 41.88,
            "timeDisplay": "41.88"
          }
        ],
        "100_BR": [
          {
            "point": 1100,
            "seconds": 53.8,
            "timeDisplay": "53.80"
          },
          {
            "point": 1000,
            "seconds": 56.3,
            "timeDisplay": "56.30"
          },
          {
            "point": 900,
            "seconds": 58.88,
            "timeDisplay": "58.88"
          },
          {
            "point": 800,
            "seconds": 61.52,
            "timeDisplay": "1:01.52"
          },
          {
            "point": 700,
            "seconds": 64.3,
            "timeDisplay": "1:04.30"
          },
          {
            "point": 600,
            "seconds": 67.18,
            "timeDisplay": "1:07.18"
          },
          {
            "point": 500,
            "seconds": 70.2,
            "timeDisplay": "1:10.20"
          },
          {
            "point": 400,
            "seconds": 73.42,
            "timeDisplay": "1:13.42"
          },
          {
            "point": 300,
            "seconds": 76.88,
            "timeDisplay": "1:16.88"
          },
          {
            "point": 200,
            "seconds": 80.72,
            "timeDisplay": "1:20.72"
          },
          {
            "point": 100,
            "seconds": 85.2,
            "timeDisplay": "1:25.20"
          },
          {
            "point": 10,
            "seconds": 90.88,
            "timeDisplay": "1:30.88"
          },
          {
            "point": 1,
            "seconds": 92.01,
            "timeDisplay": "1:32.01"
          }
        ],
        "200_BR": [
          {
            "point": 1100,
            "seconds": 116.1,
            "timeDisplay": "1:56.10"
          },
          {
            "point": 1000,
            "seconds": 122.08,
            "timeDisplay": "2:02.08"
          },
          {
            "point": 900,
            "seconds": 128.18,
            "timeDisplay": "2:08.18"
          },
          {
            "point": 800,
            "seconds": 134.46,
            "timeDisplay": "2:14.46"
          },
          {
            "point": 700,
            "seconds": 140.93,
            "timeDisplay": "2:20.93"
          },
          {
            "point": 600,
            "seconds": 147.62,
            "timeDisplay": "2:27.62"
          },
          {
            "point": 500,
            "seconds": 154.6,
            "timeDisplay": "2:34.60"
          },
          {
            "point": 400,
            "seconds": 161.92,
            "timeDisplay": "2:41.92"
          },
          {
            "point": 300,
            "seconds": 169.71,
            "timeDisplay": "2:49.71"
          },
          {
            "point": 200,
            "seconds": 178.17,
            "timeDisplay": "2:58.17"
          },
          {
            "point": 100,
            "seconds": 187.79,
            "timeDisplay": "3:07.79"
          },
          {
            "point": 10,
            "seconds": 199.35,
            "timeDisplay": "3:19.35"
          },
          {
            "point": 1,
            "seconds": 201.18,
            "timeDisplay": "3:21.18"
          }
        ],
        "50_FL": [
          {
            "point": 1100,
            "seconds": 21.78,
            "timeDisplay": "21.78"
          },
          {
            "point": 1000,
            "seconds": 22.69,
            "timeDisplay": "22.69"
          },
          {
            "point": 900,
            "seconds": 23.63,
            "timeDisplay": "23.63"
          },
          {
            "point": 800,
            "seconds": 24.6,
            "timeDisplay": "24.60"
          },
          {
            "point": 700,
            "seconds": 25.63,
            "timeDisplay": "25.63"
          },
          {
            "point": 600,
            "seconds": 26.7,
            "timeDisplay": "26.70"
          },
          {
            "point": 500,
            "seconds": 27.84,
            "timeDisplay": "27.84"
          },
          {
            "point": 400,
            "seconds": 29.06,
            "timeDisplay": "29.06"
          },
          {
            "point": 300,
            "seconds": 30.4,
            "timeDisplay": "30.40"
          },
          {
            "point": 200,
            "seconds": 31.9,
            "timeDisplay": "31.90"
          },
          {
            "point": 100,
            "seconds": 33.72,
            "timeDisplay": "33.72"
          },
          {
            "point": 10,
            "seconds": 36.2,
            "timeDisplay": "36.20"
          },
          {
            "point": 1,
            "seconds": 36.74,
            "timeDisplay": "36.74"
          }
        ],
        "100_FL": [
          {
            "point": 1100,
            "seconds": 47.1,
            "timeDisplay": "47.10"
          },
          {
            "point": 1000,
            "seconds": 49.13,
            "timeDisplay": "49.13"
          },
          {
            "point": 900,
            "seconds": 51.24,
            "timeDisplay": "51.24"
          },
          {
            "point": 800,
            "seconds": 53.42,
            "timeDisplay": "53.42"
          },
          {
            "point": 700,
            "seconds": 55.68,
            "timeDisplay": "55.68"
          },
          {
            "point": 600,
            "seconds": 58.08,
            "timeDisplay": "58.08"
          },
          {
            "point": 500,
            "seconds": 60.6,
            "timeDisplay": "1:00.60"
          },
          {
            "point": 400,
            "seconds": 63.3,
            "timeDisplay": "1:03.30"
          },
          {
            "point": 300,
            "seconds": 66.22,
            "timeDisplay": "1:06.22"
          },
          {
            "point": 200,
            "seconds": 69.52,
            "timeDisplay": "1:09.52"
          },
          {
            "point": 100,
            "seconds": 73.45,
            "timeDisplay": "1:13.45"
          },
          {
            "point": 10,
            "seconds": 78.7,
            "timeDisplay": "1:18.70"
          },
          {
            "point": 1,
            "seconds": 79.8,
            "timeDisplay": "1:19.80"
          }
        ],
        "200_FL": [
          {
            "point": 1100,
            "seconds": 103.83,
            "timeDisplay": "1:43.83"
          },
          {
            "point": 1000,
            "seconds": 108.45,
            "timeDisplay": "1:48.45"
          },
          {
            "point": 900,
            "seconds": 113.25,
            "timeDisplay": "1:53.25"
          },
          {
            "point": 800,
            "seconds": 118.25,
            "timeDisplay": "1:58.25"
          },
          {
            "point": 700,
            "seconds": 123.4,
            "timeDisplay": "2:03.40"
          },
          {
            "point": 600,
            "seconds": 128.8,
            "timeDisplay": "2:08.80"
          },
          {
            "point": 500,
            "seconds": 134.48,
            "timeDisplay": "2:14.48"
          },
          {
            "point": 400,
            "seconds": 140.6,
            "timeDisplay": "2:20.60"
          },
          {
            "point": 300,
            "seconds": 147.15,
            "timeDisplay": "2:27.15"
          },
          {
            "point": 200,
            "seconds": 154.5,
            "timeDisplay": "2:34.50"
          },
          {
            "point": 100,
            "seconds": 163.1,
            "timeDisplay": "2:43.10"
          },
          {
            "point": 10,
            "seconds": 174.55,
            "timeDisplay": "2:54.55"
          },
          {
            "point": 1,
            "seconds": 176.72,
            "timeDisplay": "2:56.72"
          }
        ],
        "100_IM": [
          {
            "point": 1100,
            "seconds": 48.58,
            "timeDisplay": "48.58"
          },
          {
            "point": 1000,
            "seconds": 50.37,
            "timeDisplay": "50.37"
          },
          {
            "point": 900,
            "seconds": 52.22,
            "timeDisplay": "52.22"
          },
          {
            "point": 800,
            "seconds": 54.17,
            "timeDisplay": "54.17"
          },
          {
            "point": 700,
            "seconds": 56.22,
            "timeDisplay": "56.22"
          },
          {
            "point": 600,
            "seconds": 58.38,
            "timeDisplay": "58.38"
          },
          {
            "point": 500,
            "seconds": 60.71,
            "timeDisplay": "1:00.71"
          },
          {
            "point": 400,
            "seconds": 63.25,
            "timeDisplay": "1:03.25"
          },
          {
            "point": 300,
            "seconds": 66.06,
            "timeDisplay": "1:06.06"
          },
          {
            "point": 200,
            "seconds": 69.28,
            "timeDisplay": "1:09.28"
          },
          {
            "point": 100,
            "seconds": 73.31,
            "timeDisplay": "1:13.31"
          },
          {
            "point": 10,
            "seconds": 79.22,
            "timeDisplay": "1:19.22"
          },
          {
            "point": 1,
            "seconds": 80.73,
            "timeDisplay": "1:20.73"
          }
        ],
        "200_IM": [
          {
            "point": 1100,
            "seconds": 106.45,
            "timeDisplay": "1:46.45"
          },
          {
            "point": 1000,
            "seconds": 110.5,
            "timeDisplay": "1:50.50"
          },
          {
            "point": 900,
            "seconds": 114.75,
            "timeDisplay": "1:54.75"
          },
          {
            "point": 800,
            "seconds": 119.15,
            "timeDisplay": "1:59.15"
          },
          {
            "point": 700,
            "seconds": 123.77,
            "timeDisplay": "2:03.77"
          },
          {
            "point": 600,
            "seconds": 128.66,
            "timeDisplay": "2:08.66"
          },
          {
            "point": 500,
            "seconds": 133.9,
            "timeDisplay": "2:13.90"
          },
          {
            "point": 400,
            "seconds": 139.58,
            "timeDisplay": "2:19.58"
          },
          {
            "point": 300,
            "seconds": 145.82,
            "timeDisplay": "2:25.82"
          },
          {
            "point": 200,
            "seconds": 153.0,
            "timeDisplay": "2:33.00"
          },
          {
            "point": 100,
            "seconds": 161.8,
            "timeDisplay": "2:41.80"
          },
          {
            "point": 10,
            "seconds": 174.55,
            "timeDisplay": "2:54.55"
          },
          {
            "point": 1,
            "seconds": 177.65,
            "timeDisplay": "2:57.65"
          }
        ],
        "400_IM": [
          {
            "point": 1100,
            "seconds": 225.0,
            "timeDisplay": "3:45.00"
          },
          {
            "point": 1000,
            "seconds": 234.32,
            "timeDisplay": "3:54.32"
          },
          {
            "point": 900,
            "seconds": 243.95,
            "timeDisplay": "4:03.95"
          },
          {
            "point": 800,
            "seconds": 254.0,
            "timeDisplay": "4:14.00"
          },
          {
            "point": 700,
            "seconds": 264.4,
            "timeDisplay": "4:24.40"
          },
          {
            "point": 600,
            "seconds": 275.52,
            "timeDisplay": "4:35.52"
          },
          {
            "point": 500,
            "seconds": 287.2,
            "timeDisplay": "4:47.20"
          },
          {
            "point": 400,
            "seconds": 299.82,
            "timeDisplay": "4:59.82"
          },
          {
            "point": 300,
            "seconds": 313.5,
            "timeDisplay": "5:13.50"
          },
          {
            "point": 200,
            "seconds": 329.0,
            "timeDisplay": "5:29.00"
          },
          {
            "point": 100,
            "seconds": 369.0,
            "timeDisplay": "6:09.00"
          },
          {
            "point": 10,
            "seconds": 395.5,
            "timeDisplay": "6:35.50"
          },
          {
            "point": 1,
            "seconds": 401.0,
            "timeDisplay": "6:41.00"
          }
        ]
      }
    },
    "Girl": {
      "9&U": {
        "50_FR": [
          {
            "point": 1100,
            "seconds": 25.06,
            "timeDisplay": "25.06"
          },
          {
            "point": 1000,
            "seconds": 26.44,
            "timeDisplay": "26.44"
          },
          {
            "point": 900,
            "seconds": 27.87,
            "timeDisplay": "27.87"
          },
          {
            "point": 800,
            "seconds": 29.35,
            "timeDisplay": "29.35"
          },
          {
            "point": 700,
            "seconds": 30.89,
            "timeDisplay": "30.89"
          },
          {
            "point": 600,
            "seconds": 32.5,
            "timeDisplay": "32.50"
          },
          {
            "point": 500,
            "seconds": 34.2,
            "timeDisplay": "34.20"
          },
          {
            "point": 400,
            "seconds": 36.01,
            "timeDisplay": "36.01"
          },
          {
            "point": 300,
            "seconds": 37.97,
            "timeDisplay": "37.97"
          },
          {
            "point": 200,
            "seconds": 40.15,
            "timeDisplay": "40.15"
          },
          {
            "point": 100,
            "seconds": 42.73,
            "timeDisplay": "42.73"
          },
          {
            "point": 10,
            "seconds": 46.12,
            "timeDisplay": "46.12"
          },
          {
            "point": 1,
            "seconds": 46.76,
            "timeDisplay": "46.76"
          }
        ],
        "100_FR": [
          {
            "point": 1100,
            "seconds": 56.18,
            "timeDisplay": "56.18"
          },
          {
            "point": 1000,
            "seconds": 58.83,
            "timeDisplay": "58.83"
          },
          {
            "point": 900,
            "seconds": 61.58,
            "timeDisplay": "1:01.58"
          },
          {
            "point": 800,
            "seconds": 64.46,
            "timeDisplay": "1:04.46"
          },
          {
            "point": 700,
            "seconds": 67.49,
            "timeDisplay": "1:07.49"
          },
          {
            "point": 600,
            "seconds": 70.69,
            "timeDisplay": "1:10.69"
          },
          {
            "point": 500,
            "seconds": 74.1,
            "timeDisplay": "1:14.10"
          },
          {
            "point": 400,
            "seconds": 77.8,
            "timeDisplay": "1:17.80"
          },
          {
            "point": 300,
            "seconds": 81.88,
            "timeDisplay": "1:21.88"
          },
          {
            "point": 200,
            "seconds": 86.54,
            "timeDisplay": "1:26.54"
          },
          {
            "point": 100,
            "seconds": 92.28,
            "timeDisplay": "1:32.28"
          },
          {
            "point": 10,
            "seconds": 100.59,
            "timeDisplay": "1:40.59"
          },
          {
            "point": 1,
            "seconds": 102.45,
            "timeDisplay": "1:42.45"
          }
        ],
        "200_FR": [
          {
            "point": 1100,
            "seconds": 124.27,
            "timeDisplay": "2:04.27"
          },
          {
            "point": 1000,
            "seconds": 129.36,
            "timeDisplay": "2:09.36"
          },
          {
            "point": 900,
            "seconds": 134.68,
            "timeDisplay": "2:14.68"
          },
          {
            "point": 800,
            "seconds": 140.27,
            "timeDisplay": "2:20.27"
          },
          {
            "point": 700,
            "seconds": 146.2,
            "timeDisplay": "2:26.20"
          },
          {
            "point": 600,
            "seconds": 152.52,
            "timeDisplay": "2:32.52"
          },
          {
            "point": 500,
            "seconds": 159.34,
            "timeDisplay": "2:39.34"
          },
          {
            "point": 400,
            "seconds": 166.82,
            "timeDisplay": "2:46.82"
          },
          {
            "point": 300,
            "seconds": 175.21,
            "timeDisplay": "2:55.21"
          },
          {
            "point": 200,
            "seconds": 185.01,
            "timeDisplay": "3:05.01"
          },
          {
            "point": 100,
            "seconds": 197.49,
            "timeDisplay": "3:17.49"
          },
          {
            "point": 10,
            "seconds": 217.1,
            "timeDisplay": "3:37.10"
          },
          {
            "point": 1,
            "seconds": 222.17,
            "timeDisplay": "3:42.17"
          }
        ],
        "500_FR": [
          {
            "point": 1100,
            "seconds": 334.58,
            "timeDisplay": "5:34.58"
          },
          {
            "point": 1000,
            "seconds": 347.8,
            "timeDisplay": "5:47.80"
          },
          {
            "point": 900,
            "seconds": 361.66,
            "timeDisplay": "6:01.66"
          },
          {
            "point": 800,
            "seconds": 376.26,
            "timeDisplay": "6:16.26"
          },
          {
            "point": 700,
            "seconds": 391.74,
            "timeDisplay": "6:31.74"
          },
          {
            "point": 600,
            "seconds": 408.3,
            "timeDisplay": "6:48.30"
          },
          {
            "point": 500,
            "seconds": 426.21,
            "timeDisplay": "7:06.21"
          },
          {
            "point": 400,
            "seconds": 445.9,
            "timeDisplay": "7:25.90"
          },
          {
            "point": 300,
            "seconds": 468.08,
            "timeDisplay": "7:48.08"
          },
          {
            "point": 200,
            "seconds": 494.11,
            "timeDisplay": "8:14.11"
          },
          {
            "point": 100,
            "seconds": 527.51,
            "timeDisplay": "8:47.51"
          },
          {
            "point": 10,
            "seconds": 581.03,
            "timeDisplay": "9:41.03"
          },
          {
            "point": 1,
            "seconds": 595.34,
            "timeDisplay": "9:55.34"
          }
        ],
        "50_BK": [
          {
            "point": 1100,
            "seconds": 29.77,
            "timeDisplay": "29.77"
          },
          {
            "point": 1000,
            "seconds": 31.2,
            "timeDisplay": "31.20"
          },
          {
            "point": 900,
            "seconds": 32.68,
            "timeDisplay": "32.68"
          },
          {
            "point": 800,
            "seconds": 34.23,
            "timeDisplay": "34.23"
          },
          {
            "point": 700,
            "seconds": 35.86,
            "timeDisplay": "35.86"
          },
          {
            "point": 600,
            "seconds": 37.57,
            "timeDisplay": "37.57"
          },
          {
            "point": 500,
            "seconds": 39.4,
            "timeDisplay": "39.40"
          },
          {
            "point": 400,
            "seconds": 41.38,
            "timeDisplay": "41.38"
          },
          {
            "point": 300,
            "seconds": 43.56,
            "timeDisplay": "43.56"
          },
          {
            "point": 200,
            "seconds": 46.05,
            "timeDisplay": "46.05"
          },
          {
            "point": 100,
            "seconds": 49.09,
            "timeDisplay": "49.09"
          },
          {
            "point": 10,
            "seconds": 53.46,
            "timeDisplay": "53.46"
          },
          {
            "point": 1,
            "seconds": 54.42,
            "timeDisplay": "54.42"
          }
        ],
        "100_BK": [
          {
            "point": 1100,
            "seconds": 64.33,
            "timeDisplay": "1:04.33"
          },
          {
            "point": 1000,
            "seconds": 67.57,
            "timeDisplay": "1:07.57"
          },
          {
            "point": 900,
            "seconds": 70.94,
            "timeDisplay": "1:10.94"
          },
          {
            "point": 800,
            "seconds": 74.44,
            "timeDisplay": "1:14.44"
          },
          {
            "point": 700,
            "seconds": 78.11,
            "timeDisplay": "1:18.11"
          },
          {
            "point": 600,
            "seconds": 81.96,
            "timeDisplay": "1:21.96"
          },
          {
            "point": 500,
            "seconds": 86.06,
            "timeDisplay": "1:26.06"
          },
          {
            "point": 400,
            "seconds": 90.47,
            "timeDisplay": "1:30.47"
          },
          {
            "point": 300,
            "seconds": 95.3,
            "timeDisplay": "1:35.30"
          },
          {
            "point": 200,
            "seconds": 100.75,
            "timeDisplay": "1:40.75"
          },
          {
            "point": 100,
            "seconds": 107.36,
            "timeDisplay": "1:47.36"
          },
          {
            "point": 10,
            "seconds": 116.54,
            "timeDisplay": "1:56.54"
          },
          {
            "point": 1,
            "seconds": 118.45,
            "timeDisplay": "1:58.45"
          }
        ],
        "50_BR": [
          {
            "point": 1100,
            "seconds": 32.58,
            "timeDisplay": "32.58"
          },
          {
            "point": 1000,
            "seconds": 34.47,
            "timeDisplay": "34.47"
          },
          {
            "point": 900,
            "seconds": 36.42,
            "timeDisplay": "36.42"
          },
          {
            "point": 800,
            "seconds": 38.43,
            "timeDisplay": "38.43"
          },
          {
            "point": 700,
            "seconds": 40.51,
            "timeDisplay": "40.51"
          },
          {
            "point": 600,
            "seconds": 42.68,
            "timeDisplay": "42.68"
          },
          {
            "point": 500,
            "seconds": 44.96,
            "timeDisplay": "44.96"
          },
          {
            "point": 400,
            "seconds": 47.38,
            "timeDisplay": "47.38"
          },
          {
            "point": 300,
            "seconds": 49.99,
            "timeDisplay": "49.99"
          },
          {
            "point": 200,
            "seconds": 52.86,
            "timeDisplay": "52.86"
          },
          {
            "point": 100,
            "seconds": 56.22,
            "timeDisplay": "56.22"
          },
          {
            "point": 10,
            "seconds": 60.43,
            "timeDisplay": "1:00.43"
          },
          {
            "point": 1,
            "seconds": 61.26,
            "timeDisplay": "1:01.26"
          }
        ],
        "100_BR": [
          {
            "point": 1100,
            "seconds": 71.27,
            "timeDisplay": "1:11.27"
          },
          {
            "point": 1000,
            "seconds": 75.48,
            "timeDisplay": "1:15.48"
          },
          {
            "point": 900,
            "seconds": 79.82,
            "timeDisplay": "1:19.82"
          },
          {
            "point": 800,
            "seconds": 84.29,
            "timeDisplay": "1:24.29"
          },
          {
            "point": 700,
            "seconds": 88.92,
            "timeDisplay": "1:28.92"
          },
          {
            "point": 600,
            "seconds": 93.74,
            "timeDisplay": "1:33.74"
          },
          {
            "point": 500,
            "seconds": 98.8,
            "timeDisplay": "1:38.80"
          },
          {
            "point": 400,
            "seconds": 104.15,
            "timeDisplay": "1:44.15"
          },
          {
            "point": 300,
            "seconds": 109.89,
            "timeDisplay": "1:49.89"
          },
          {
            "point": 200,
            "seconds": 116.22,
            "timeDisplay": "1:56.22"
          },
          {
            "point": 100,
            "seconds": 123.55,
            "timeDisplay": "2:03.55"
          },
          {
            "point": 10,
            "seconds": 132.79,
            "timeDisplay": "2:12.79"
          },
          {
            "point": 1,
            "seconds": 134.39,
            "timeDisplay": "2:14.39"
          }
        ],
        "50_FL": [
          {
            "point": 1100,
            "seconds": 27.71,
            "timeDisplay": "27.71"
          },
          {
            "point": 1000,
            "seconds": 29.27,
            "timeDisplay": "29.27"
          },
          {
            "point": 900,
            "seconds": 30.88,
            "timeDisplay": "30.88"
          },
          {
            "point": 800,
            "seconds": 32.54,
            "timeDisplay": "32.54"
          },
          {
            "point": 700,
            "seconds": 34.27,
            "timeDisplay": "34.27"
          },
          {
            "point": 600,
            "seconds": 36.08,
            "timeDisplay": "36.08"
          },
          {
            "point": 500,
            "seconds": 37.98,
            "timeDisplay": "37.98"
          },
          {
            "point": 400,
            "seconds": 40.0,
            "timeDisplay": "40.00"
          },
          {
            "point": 300,
            "seconds": 42.19,
            "timeDisplay": "42.19"
          },
          {
            "point": 200,
            "seconds": 44.62,
            "timeDisplay": "44.62"
          },
          {
            "point": 100,
            "seconds": 47.47,
            "timeDisplay": "47.47"
          },
          {
            "point": 10,
            "seconds": 51.18,
            "timeDisplay": "51.18"
          },
          {
            "point": 1,
            "seconds": 51.87,
            "timeDisplay": "51.87"
          }
        ],
        "100_FL": [
          {
            "point": 1100,
            "seconds": 61.82,
            "timeDisplay": "1:01.82"
          },
          {
            "point": 1000,
            "seconds": 65.46,
            "timeDisplay": "1:05.46"
          },
          {
            "point": 900,
            "seconds": 69.24,
            "timeDisplay": "1:09.24"
          },
          {
            "point": 800,
            "seconds": 73.18,
            "timeDisplay": "1:13.18"
          },
          {
            "point": 700,
            "seconds": 77.3,
            "timeDisplay": "1:17.30"
          },
          {
            "point": 600,
            "seconds": 81.65,
            "timeDisplay": "1:21.65"
          },
          {
            "point": 500,
            "seconds": 86.29,
            "timeDisplay": "1:26.29"
          },
          {
            "point": 400,
            "seconds": 91.28,
            "timeDisplay": "1:31.28"
          },
          {
            "point": 300,
            "seconds": 96.76,
            "timeDisplay": "1:36.76"
          },
          {
            "point": 200,
            "seconds": 102.99,
            "timeDisplay": "1:42.99"
          },
          {
            "point": 100,
            "seconds": 110.58,
            "timeDisplay": "1:50.58"
          },
          {
            "point": 10,
            "seconds": 121.29,
            "timeDisplay": "2:01.29"
          },
          {
            "point": 1,
            "seconds": 123.58,
            "timeDisplay": "2:03.58"
          }
        ],
        "100_IM": [
          {
            "point": 1100,
            "seconds": 64.83,
            "timeDisplay": "1:04.83"
          },
          {
            "point": 1000,
            "seconds": 67.94,
            "timeDisplay": "1:07.94"
          },
          {
            "point": 900,
            "seconds": 71.18,
            "timeDisplay": "1:11.18"
          },
          {
            "point": 800,
            "seconds": 74.55,
            "timeDisplay": "1:14.55"
          },
          {
            "point": 700,
            "seconds": 78.09,
            "timeDisplay": "1:18.09"
          },
          {
            "point": 600,
            "seconds": 81.83,
            "timeDisplay": "1:21.83"
          },
          {
            "point": 500,
            "seconds": 85.82,
            "timeDisplay": "1:25.82"
          },
          {
            "point": 400,
            "seconds": 90.12,
            "timeDisplay": "1:30.12"
          },
          {
            "point": 300,
            "seconds": 94.87,
            "timeDisplay": "1:34.87"
          },
          {
            "point": 200,
            "seconds": 100.28,
            "timeDisplay": "1:40.28"
          },
          {
            "point": 100,
            "seconds": 106.92,
            "timeDisplay": "1:46.92"
          },
          {
            "point": 10,
            "seconds": 116.42,
            "timeDisplay": "1:56.42"
          },
          {
            "point": 1,
            "seconds": 118.51,
            "timeDisplay": "1:58.51"
          }
        ],
        "200_IM": [
          {
            "point": 1100,
            "seconds": 137.19,
            "timeDisplay": "2:17.19"
          },
          {
            "point": 1000,
            "seconds": 143.99,
            "timeDisplay": "2:23.99"
          },
          {
            "point": 900,
            "seconds": 151.05,
            "timeDisplay": "2:31.05"
          },
          {
            "point": 800,
            "seconds": 158.41,
            "timeDisplay": "2:38.41"
          },
          {
            "point": 700,
            "seconds": 166.11,
            "timeDisplay": "2:46.11"
          },
          {
            "point": 600,
            "seconds": 174.23,
            "timeDisplay": "2:54.23"
          },
          {
            "point": 500,
            "seconds": 182.87,
            "timeDisplay": "3:02.87"
          },
          {
            "point": 400,
            "seconds": 192.17,
            "timeDisplay": "3:12.17"
          },
          {
            "point": 300,
            "seconds": 202.38,
            "timeDisplay": "3:22.38"
          },
          {
            "point": 200,
            "seconds": 213.95,
            "timeDisplay": "3:33.95"
          },
          {
            "point": 100,
            "seconds": 228.02,
            "timeDisplay": "3:48.02"
          },
          {
            "point": 10,
            "seconds": 247.79,
            "timeDisplay": "4:07.79"
          },
          {
            "point": 1,
            "seconds": 251.96,
            "timeDisplay": "4:11.96"
          }
        ]
      },
      "10": {
        "50_FR": [
          {
            "point": 1100,
            "seconds": 23.4,
            "timeDisplay": "23.40"
          },
          {
            "point": 1000,
            "seconds": 24.69,
            "timeDisplay": "24.69"
          },
          {
            "point": 900,
            "seconds": 26.03,
            "timeDisplay": "26.03"
          },
          {
            "point": 800,
            "seconds": 27.41,
            "timeDisplay": "27.41"
          },
          {
            "point": 700,
            "seconds": 28.85,
            "timeDisplay": "28.85"
          },
          {
            "point": 600,
            "seconds": 30.35,
            "timeDisplay": "30.35"
          },
          {
            "point": 500,
            "seconds": 31.94,
            "timeDisplay": "31.94"
          },
          {
            "point": 400,
            "seconds": 33.63,
            "timeDisplay": "33.63"
          },
          {
            "point": 300,
            "seconds": 35.46,
            "timeDisplay": "35.46"
          },
          {
            "point": 200,
            "seconds": 37.49,
            "timeDisplay": "37.49"
          },
          {
            "point": 100,
            "seconds": 39.91,
            "timeDisplay": "39.91"
          },
          {
            "point": 10,
            "seconds": 43.07,
            "timeDisplay": "43.07"
          },
          {
            "point": 1,
            "seconds": 43.68,
            "timeDisplay": "43.68"
          }
        ],
        "100_FR": [
          {
            "point": 1100,
            "seconds": 52.27,
            "timeDisplay": "52.27"
          },
          {
            "point": 1000,
            "seconds": 54.74,
            "timeDisplay": "54.74"
          },
          {
            "point": 900,
            "seconds": 57.3,
            "timeDisplay": "57.30"
          },
          {
            "point": 800,
            "seconds": 59.98,
            "timeDisplay": "59.98"
          },
          {
            "point": 700,
            "seconds": 62.8,
            "timeDisplay": "1:02.80"
          },
          {
            "point": 600,
            "seconds": 65.77,
            "timeDisplay": "1:05.77"
          },
          {
            "point": 500,
            "seconds": 68.95,
            "timeDisplay": "1:08.95"
          },
          {
            "point": 400,
            "seconds": 72.39,
            "timeDisplay": "1:12.39"
          },
          {
            "point": 300,
            "seconds": 76.19,
            "timeDisplay": "1:16.19"
          },
          {
            "point": 200,
            "seconds": 80.53,
            "timeDisplay": "1:20.53"
          },
          {
            "point": 100,
            "seconds": 85.87,
            "timeDisplay": "1:25.87"
          },
          {
            "point": 10,
            "seconds": 93.6,
            "timeDisplay": "1:33.60"
          },
          {
            "point": 1,
            "seconds": 95.33,
            "timeDisplay": "1:35.33"
          }
        ],
        "200_FR": [
          {
            "point": 1100,
            "seconds": 115.25,
            "timeDisplay": "1:55.25"
          },
          {
            "point": 1000,
            "seconds": 119.97,
            "timeDisplay": "1:59.97"
          },
          {
            "point": 900,
            "seconds": 124.9,
            "timeDisplay": "2:04.90"
          },
          {
            "point": 800,
            "seconds": 130.09,
            "timeDisplay": "2:10.09"
          },
          {
            "point": 700,
            "seconds": 135.55,
            "timeDisplay": "2:15.55"
          },
          {
            "point": 600,
            "seconds": 141.45,
            "timeDisplay": "2:21.45"
          },
          {
            "point": 500,
            "seconds": 147.77,
            "timeDisplay": "2:27.77"
          },
          {
            "point": 400,
            "seconds": 154.71,
            "timeDisplay": "2:34.71"
          },
          {
            "point": 300,
            "seconds": 162.49,
            "timeDisplay": "2:42.49"
          },
          {
            "point": 200,
            "seconds": 171.58,
            "timeDisplay": "2:51.58"
          },
          {
            "point": 100,
            "seconds": 183.15,
            "timeDisplay": "3:03.15"
          },
          {
            "point": 10,
            "seconds": 201.34,
            "timeDisplay": "3:21.34"
          },
          {
            "point": 1,
            "seconds": 206.04,
            "timeDisplay": "3:26.04"
          }
        ],
        "500_FR": [
          {
            "point": 1100,
            "seconds": 311.59,
            "timeDisplay": "5:11.59"
          },
          {
            "point": 1000,
            "seconds": 323.91,
            "timeDisplay": "5:23.91"
          },
          {
            "point": 900,
            "seconds": 336.81,
            "timeDisplay": "5:36.81"
          },
          {
            "point": 800,
            "seconds": 350.4,
            "timeDisplay": "5:50.40"
          },
          {
            "point": 700,
            "seconds": 364.82,
            "timeDisplay": "6:04.82"
          },
          {
            "point": 600,
            "seconds": 380.24,
            "timeDisplay": "6:20.24"
          },
          {
            "point": 500,
            "seconds": 396.93,
            "timeDisplay": "6:36.93"
          },
          {
            "point": 400,
            "seconds": 415.26,
            "timeDisplay": "6:55.26"
          },
          {
            "point": 300,
            "seconds": 435.92,
            "timeDisplay": "7:15.92"
          },
          {
            "point": 200,
            "seconds": 460.16,
            "timeDisplay": "7:40.16"
          },
          {
            "point": 100,
            "seconds": 491.26,
            "timeDisplay": "8:11.26"
          },
          {
            "point": 10,
            "seconds": 541.11,
            "timeDisplay": "9:01.11"
          },
          {
            "point": 1,
            "seconds": 554.43,
            "timeDisplay": "9:14.43"
          }
        ],
        "50_BK": [
          {
            "point": 1100,
            "seconds": 27.51,
            "timeDisplay": "27.51"
          },
          {
            "point": 1000,
            "seconds": 28.84,
            "timeDisplay": "28.84"
          },
          {
            "point": 900,
            "seconds": 30.21,
            "timeDisplay": "30.21"
          },
          {
            "point": 800,
            "seconds": 31.64,
            "timeDisplay": "31.64"
          },
          {
            "point": 700,
            "seconds": 33.14,
            "timeDisplay": "33.14"
          },
          {
            "point": 600,
            "seconds": 34.73,
            "timeDisplay": "34.73"
          },
          {
            "point": 500,
            "seconds": 36.42,
            "timeDisplay": "36.42"
          },
          {
            "point": 400,
            "seconds": 38.25,
            "timeDisplay": "38.25"
          },
          {
            "point": 300,
            "seconds": 40.27,
            "timeDisplay": "40.27"
          },
          {
            "point": 200,
            "seconds": 42.56,
            "timeDisplay": "42.56"
          },
          {
            "point": 100,
            "seconds": 45.38,
            "timeDisplay": "45.38"
          },
          {
            "point": 10,
            "seconds": 49.42,
            "timeDisplay": "49.42"
          },
          {
            "point": 1,
            "seconds": 50.31,
            "timeDisplay": "50.31"
          }
        ],
        "100_BK": [
          {
            "point": 1100,
            "seconds": 58.82,
            "timeDisplay": "58.82"
          },
          {
            "point": 1000,
            "seconds": 61.79,
            "timeDisplay": "1:01.79"
          },
          {
            "point": 900,
            "seconds": 64.87,
            "timeDisplay": "1:04.87"
          },
          {
            "point": 800,
            "seconds": 68.07,
            "timeDisplay": "1:08.07"
          },
          {
            "point": 700,
            "seconds": 71.42,
            "timeDisplay": "1:11.42"
          },
          {
            "point": 600,
            "seconds": 74.95,
            "timeDisplay": "1:14.95"
          },
          {
            "point": 500,
            "seconds": 78.69,
            "timeDisplay": "1:18.69"
          },
          {
            "point": 400,
            "seconds": 82.72,
            "timeDisplay": "1:22.72"
          },
          {
            "point": 300,
            "seconds": 87.13,
            "timeDisplay": "1:27.13"
          },
          {
            "point": 200,
            "seconds": 92.12,
            "timeDisplay": "1:32.12"
          },
          {
            "point": 100,
            "seconds": 98.16,
            "timeDisplay": "1:38.16"
          },
          {
            "point": 10,
            "seconds": 106.56,
            "timeDisplay": "1:46.56"
          },
          {
            "point": 1,
            "seconds": 108.3,
            "timeDisplay": "1:48.30"
          }
        ],
        "50_BR": [
          {
            "point": 1100,
            "seconds": 29.88,
            "timeDisplay": "29.88"
          },
          {
            "point": 1000,
            "seconds": 31.61,
            "timeDisplay": "31.61"
          },
          {
            "point": 900,
            "seconds": 33.39,
            "timeDisplay": "33.39"
          },
          {
            "point": 800,
            "seconds": 35.23,
            "timeDisplay": "35.23"
          },
          {
            "point": 700,
            "seconds": 37.14,
            "timeDisplay": "37.14"
          },
          {
            "point": 600,
            "seconds": 39.14,
            "timeDisplay": "39.14"
          },
          {
            "point": 500,
            "seconds": 41.23,
            "timeDisplay": "41.23"
          },
          {
            "point": 400,
            "seconds": 43.44,
            "timeDisplay": "43.44"
          },
          {
            "point": 300,
            "seconds": 45.83,
            "timeDisplay": "45.83"
          },
          {
            "point": 200,
            "seconds": 48.47,
            "timeDisplay": "48.47"
          },
          {
            "point": 100,
            "seconds": 51.54,
            "timeDisplay": "51.54"
          },
          {
            "point": 10,
            "seconds": 55.47,
            "timeDisplay": "55.47"
          },
          {
            "point": 1,
            "seconds": 56.17,
            "timeDisplay": "56.17"
          }
        ],
        "100_BR": [
          {
            "point": 1100,
            "seconds": 65.1,
            "timeDisplay": "1:05.10"
          },
          {
            "point": 1000,
            "seconds": 68.95,
            "timeDisplay": "1:08.95"
          },
          {
            "point": 900,
            "seconds": 72.91,
            "timeDisplay": "1:12.91"
          },
          {
            "point": 800,
            "seconds": 77.0,
            "timeDisplay": "1:17.00"
          },
          {
            "point": 700,
            "seconds": 81.23,
            "timeDisplay": "1:21.23"
          },
          {
            "point": 600,
            "seconds": 85.63,
            "timeDisplay": "1:25.63"
          },
          {
            "point": 500,
            "seconds": 90.25,
            "timeDisplay": "1:30.25"
          },
          {
            "point": 400,
            "seconds": 95.14,
            "timeDisplay": "1:35.14"
          },
          {
            "point": 300,
            "seconds": 100.39,
            "timeDisplay": "1:40.39"
          },
          {
            "point": 200,
            "seconds": 106.16,
            "timeDisplay": "1:46.16"
          },
          {
            "point": 100,
            "seconds": 112.86,
            "timeDisplay": "1:52.86"
          },
          {
            "point": 10,
            "seconds": 121.31,
            "timeDisplay": "2:01.31"
          },
          {
            "point": 1,
            "seconds": 122.77,
            "timeDisplay": "2:02.77"
          }
        ],
        "50_FL": [
          {
            "point": 1100,
            "seconds": 25.72,
            "timeDisplay": "25.72"
          },
          {
            "point": 1000,
            "seconds": 27.16,
            "timeDisplay": "27.16"
          },
          {
            "point": 900,
            "seconds": 28.66,
            "timeDisplay": "28.66"
          },
          {
            "point": 800,
            "seconds": 30.2,
            "timeDisplay": "30.20"
          },
          {
            "point": 700,
            "seconds": 31.81,
            "timeDisplay": "31.81"
          },
          {
            "point": 600,
            "seconds": 33.48,
            "timeDisplay": "33.48"
          },
          {
            "point": 500,
            "seconds": 35.25,
            "timeDisplay": "35.25"
          },
          {
            "point": 400,
            "seconds": 37.12,
            "timeDisplay": "37.12"
          },
          {
            "point": 300,
            "seconds": 39.15,
            "timeDisplay": "39.15"
          },
          {
            "point": 200,
            "seconds": 41.4,
            "timeDisplay": "41.40"
          },
          {
            "point": 100,
            "seconds": 44.05,
            "timeDisplay": "44.05"
          },
          {
            "point": 10,
            "seconds": 47.49,
            "timeDisplay": "47.49"
          },
          {
            "point": 1,
            "seconds": 48.13,
            "timeDisplay": "48.13"
          }
        ],
        "100_FL": [
          {
            "point": 1100,
            "seconds": 57.15,
            "timeDisplay": "57.15"
          },
          {
            "point": 1000,
            "seconds": 60.53,
            "timeDisplay": "1:00.53"
          },
          {
            "point": 900,
            "seconds": 64.02,
            "timeDisplay": "1:04.02"
          },
          {
            "point": 800,
            "seconds": 67.65,
            "timeDisplay": "1:07.65"
          },
          {
            "point": 700,
            "seconds": 71.48,
            "timeDisplay": "1:11.48"
          },
          {
            "point": 600,
            "seconds": 75.5,
            "timeDisplay": "1:15.50"
          },
          {
            "point": 500,
            "seconds": 79.78,
            "timeDisplay": "1:19.78"
          },
          {
            "point": 400,
            "seconds": 84.4,
            "timeDisplay": "1:24.40"
          },
          {
            "point": 300,
            "seconds": 89.46,
            "timeDisplay": "1:29.46"
          },
          {
            "point": 200,
            "seconds": 95.23,
            "timeDisplay": "1:35.23"
          },
          {
            "point": 100,
            "seconds": 102.24,
            "timeDisplay": "1:42.24"
          },
          {
            "point": 10,
            "seconds": 112.15,
            "timeDisplay": "1:52.15"
          },
          {
            "point": 1,
            "seconds": 114.27,
            "timeDisplay": "1:54.27"
          }
        ],
        "100_IM": [
          {
            "point": 1100,
            "seconds": 60.13,
            "timeDisplay": "1:00.13"
          },
          {
            "point": 1000,
            "seconds": 63.02,
            "timeDisplay": "1:03.02"
          },
          {
            "point": 900,
            "seconds": 66.02,
            "timeDisplay": "1:06.02"
          },
          {
            "point": 800,
            "seconds": 69.15,
            "timeDisplay": "1:09.15"
          },
          {
            "point": 700,
            "seconds": 72.43,
            "timeDisplay": "1:12.43"
          },
          {
            "point": 600,
            "seconds": 75.9,
            "timeDisplay": "1:15.90"
          },
          {
            "point": 500,
            "seconds": 79.6,
            "timeDisplay": "1:19.60"
          },
          {
            "point": 400,
            "seconds": 83.59,
            "timeDisplay": "1:23.59"
          },
          {
            "point": 300,
            "seconds": 88.0,
            "timeDisplay": "1:28.00"
          },
          {
            "point": 200,
            "seconds": 93.02,
            "timeDisplay": "1:33.02"
          },
          {
            "point": 100,
            "seconds": 99.17,
            "timeDisplay": "1:39.17"
          },
          {
            "point": 10,
            "seconds": 107.9,
            "timeDisplay": "1:47.90"
          },
          {
            "point": 1,
            "seconds": 120.01,
            "timeDisplay": "2:00.01"
          }
        ],
        "200_IM": [
          {
            "point": 1100,
            "seconds": 127.86,
            "timeDisplay": "2:07.86"
          },
          {
            "point": 1000,
            "seconds": 134.2,
            "timeDisplay": "2:14.20"
          },
          {
            "point": 900,
            "seconds": 140.78,
            "timeDisplay": "2:20.78"
          },
          {
            "point": 800,
            "seconds": 147.64,
            "timeDisplay": "2:27.64"
          },
          {
            "point": 700,
            "seconds": 154.81,
            "timeDisplay": "2:34.81"
          },
          {
            "point": 600,
            "seconds": 162.38,
            "timeDisplay": "2:42.38"
          },
          {
            "point": 500,
            "seconds": 170.43,
            "timeDisplay": "2:50.43"
          },
          {
            "point": 400,
            "seconds": 179.1,
            "timeDisplay": "2:59.10"
          },
          {
            "point": 300,
            "seconds": 188.61,
            "timeDisplay": "3:08.61"
          },
          {
            "point": 200,
            "seconds": 199.4,
            "timeDisplay": "3:19.40"
          },
          {
            "point": 100,
            "seconds": 212.51,
            "timeDisplay": "3:32.51"
          },
          {
            "point": 10,
            "seconds": 230.93,
            "timeDisplay": "3:50.93"
          },
          {
            "point": 1,
            "seconds": 234.83,
            "timeDisplay": "3:54.83"
          }
        ]
      },
      "11": {
        "50_FR": [
          {
            "point": 1100,
            "seconds": 22.67,
            "timeDisplay": "22.67"
          },
          {
            "point": 1000,
            "seconds": 23.8,
            "timeDisplay": "23.80"
          },
          {
            "point": 900,
            "seconds": 24.97,
            "timeDisplay": "24.97"
          },
          {
            "point": 800,
            "seconds": 26.18,
            "timeDisplay": "26.18"
          },
          {
            "point": 700,
            "seconds": 27.44,
            "timeDisplay": "27.44"
          },
          {
            "point": 600,
            "seconds": 28.75,
            "timeDisplay": "28.75"
          },
          {
            "point": 500,
            "seconds": 30.14,
            "timeDisplay": "30.14"
          },
          {
            "point": 400,
            "seconds": 31.62,
            "timeDisplay": "31.62"
          },
          {
            "point": 300,
            "seconds": 33.22,
            "timeDisplay": "33.22"
          },
          {
            "point": 200,
            "seconds": 35.01,
            "timeDisplay": "35.01"
          },
          {
            "point": 100,
            "seconds": 37.12,
            "timeDisplay": "37.12"
          },
          {
            "point": 10,
            "seconds": 39.89,
            "timeDisplay": "39.89"
          },
          {
            "point": 1,
            "seconds": 40.42,
            "timeDisplay": "40.42"
          }
        ],
        "100_FR": [
          {
            "point": 1100,
            "seconds": 50.05,
            "timeDisplay": "50.05"
          },
          {
            "point": 1000,
            "seconds": 52.19,
            "timeDisplay": "52.19"
          },
          {
            "point": 900,
            "seconds": 54.41,
            "timeDisplay": "54.41"
          },
          {
            "point": 800,
            "seconds": 56.74,
            "timeDisplay": "56.74"
          },
          {
            "point": 700,
            "seconds": 59.18,
            "timeDisplay": "59.18"
          },
          {
            "point": 600,
            "seconds": 61.76,
            "timeDisplay": "1:01.76"
          },
          {
            "point": 500,
            "seconds": 64.52,
            "timeDisplay": "1:04.52"
          },
          {
            "point": 400,
            "seconds": 67.5,
            "timeDisplay": "1:07.50"
          },
          {
            "point": 300,
            "seconds": 70.79,
            "timeDisplay": "1:10.79"
          },
          {
            "point": 200,
            "seconds": 74.56,
            "timeDisplay": "1:14.56"
          },
          {
            "point": 100,
            "seconds": 79.19,
            "timeDisplay": "1:19.19"
          },
          {
            "point": 10,
            "seconds": 85.89,
            "timeDisplay": "1:25.89"
          },
          {
            "point": 1,
            "seconds": 87.4,
            "timeDisplay": "1:27.40"
          }
        ],
        "200_FR": [
          {
            "point": 1100,
            "seconds": 110.39,
            "timeDisplay": "1:50.39"
          },
          {
            "point": 1000,
            "seconds": 114.49,
            "timeDisplay": "1:54.49"
          },
          {
            "point": 900,
            "seconds": 118.77,
            "timeDisplay": "1:58.77"
          },
          {
            "point": 800,
            "seconds": 123.28,
            "timeDisplay": "2:03.28"
          },
          {
            "point": 700,
            "seconds": 128.03,
            "timeDisplay": "2:08.03"
          },
          {
            "point": 600,
            "seconds": 133.14,
            "timeDisplay": "2:13.14"
          },
          {
            "point": 500,
            "seconds": 138.64,
            "timeDisplay": "2:18.64"
          },
          {
            "point": 400,
            "seconds": 144.65,
            "timeDisplay": "2:24.65"
          },
          {
            "point": 300,
            "seconds": 151.43,
            "timeDisplay": "2:31.43"
          },
          {
            "point": 200,
            "seconds": 159.33,
            "timeDisplay": "2:39.33"
          },
          {
            "point": 100,
            "seconds": 169.33,
            "timeDisplay": "2:49.33"
          },
          {
            "point": 10,
            "seconds": 185.09,
            "timeDisplay": "3:05.09"
          },
          {
            "point": 1,
            "seconds": 189.27,
            "timeDisplay": "3:09.27"
          }
        ],
        "500_FR": [
          {
            "point": 1100,
            "seconds": 294.5,
            "timeDisplay": "4:54.50"
          },
          {
            "point": 1000,
            "seconds": 305.07,
            "timeDisplay": "5:05.07"
          },
          {
            "point": 900,
            "seconds": 316.14,
            "timeDisplay": "5:16.14"
          },
          {
            "point": 800,
            "seconds": 327.79,
            "timeDisplay": "5:27.79"
          },
          {
            "point": 700,
            "seconds": 340.16,
            "timeDisplay": "5:40.16"
          },
          {
            "point": 600,
            "seconds": 353.38,
            "timeDisplay": "5:53.38"
          },
          {
            "point": 500,
            "seconds": 367.69,
            "timeDisplay": "6:07.69"
          },
          {
            "point": 400,
            "seconds": 383.41,
            "timeDisplay": "6:23.41"
          },
          {
            "point": 300,
            "seconds": 401.12,
            "timeDisplay": "6:41.12"
          },
          {
            "point": 200,
            "seconds": 421.91,
            "timeDisplay": "7:01.91"
          },
          {
            "point": 100,
            "seconds": 448.59,
            "timeDisplay": "7:28.59"
          },
          {
            "point": 10,
            "seconds": 491.33,
            "timeDisplay": "8:11.33"
          },
          {
            "point": 1,
            "seconds": 502.76,
            "timeDisplay": "8:22.76"
          }
        ],
        "1000_FR": [
          {
            "point": 1100,
            "seconds": 614.43,
            "timeDisplay": "10:14.43"
          },
          {
            "point": 1000,
            "seconds": 638.75,
            "timeDisplay": "10:38.75"
          },
          {
            "point": 900,
            "seconds": 664.13,
            "timeDisplay": "11:04.13"
          },
          {
            "point": 800,
            "seconds": 690.74,
            "timeDisplay": "11:30.74"
          },
          {
            "point": 700,
            "seconds": 718.81,
            "timeDisplay": "11:58.81"
          },
          {
            "point": 600,
            "seconds": 748.65,
            "timeDisplay": "12:28.65"
          },
          {
            "point": 500,
            "seconds": 780.69,
            "timeDisplay": "13:00.69"
          },
          {
            "point": 400,
            "seconds": 815.61,
            "timeDisplay": "13:35.61"
          },
          {
            "point": 300,
            "seconds": 854.52,
            "timeDisplay": "14:14.52"
          },
          {
            "point": 200,
            "seconds": 899.52,
            "timeDisplay": "14:59.52"
          },
          {
            "point": 100,
            "seconds": 955.94,
            "timeDisplay": "15:55.94"
          },
          {
            "point": 10,
            "seconds": 1041.42,
            "timeDisplay": "17:21.42"
          },
          {
            "point": 1,
            "seconds": 1062.09,
            "timeDisplay": "17:42.09"
          }
        ],
        "1650_FR": [
          {
            "point": 1100,
            "seconds": 1048.3,
            "timeDisplay": "17:28.30"
          },
          {
            "point": 1000,
            "seconds": 1091.05,
            "timeDisplay": "18:11.05"
          },
          {
            "point": 900,
            "seconds": 1135.61,
            "timeDisplay": "18:55.61"
          },
          {
            "point": 800,
            "seconds": 1182.26,
            "timeDisplay": "19:42.26"
          },
          {
            "point": 700,
            "seconds": 1231.38,
            "timeDisplay": "20:31.38"
          },
          {
            "point": 600,
            "seconds": 1283.51,
            "timeDisplay": "21:23.51"
          },
          {
            "point": 500,
            "seconds": 1339.37,
            "timeDisplay": "22:19.37"
          },
          {
            "point": 400,
            "seconds": 1400.06,
            "timeDisplay": "23:20.06"
          },
          {
            "point": 300,
            "seconds": 1467.45,
            "timeDisplay": "24:27.45"
          },
          {
            "point": 200,
            "seconds": 1545.04,
            "timeDisplay": "25:45.04"
          },
          {
            "point": 100,
            "seconds": 1641.61,
            "timeDisplay": "27:21.61"
          },
          {
            "point": 10,
            "seconds": 1785.36,
            "timeDisplay": "29:45.36"
          },
          {
            "point": 1,
            "seconds": 1819.03,
            "timeDisplay": "30:19.03"
          }
        ],
        "50_BK": [
          {
            "point": 1100,
            "seconds": 26.4,
            "timeDisplay": "26.40"
          },
          {
            "point": 1000,
            "seconds": 27.55,
            "timeDisplay": "27.55"
          },
          {
            "point": 900,
            "seconds": 28.74,
            "timeDisplay": "28.74"
          },
          {
            "point": 800,
            "seconds": 29.99,
            "timeDisplay": "29.99"
          },
          {
            "point": 700,
            "seconds": 31.29,
            "timeDisplay": "31.29"
          },
          {
            "point": 600,
            "seconds": 32.67,
            "timeDisplay": "32.67"
          },
          {
            "point": 500,
            "seconds": 34.14,
            "timeDisplay": "34.14"
          },
          {
            "point": 400,
            "seconds": 35.73,
            "timeDisplay": "35.73"
          },
          {
            "point": 300,
            "seconds": 37.48,
            "timeDisplay": "37.48"
          },
          {
            "point": 200,
            "seconds": 39.48,
            "timeDisplay": "39.48"
          },
          {
            "point": 100,
            "seconds": 41.92,
            "timeDisplay": "41.92"
          },
          {
            "point": 10,
            "seconds": 45.43,
            "timeDisplay": "45.43"
          },
          {
            "point": 1,
            "seconds": 46.21,
            "timeDisplay": "46.21"
          }
        ],
        "100_BK": [
          {
            "point": 1100,
            "seconds": 56.5,
            "timeDisplay": "56.50"
          },
          {
            "point": 1000,
            "seconds": 59.08,
            "timeDisplay": "59.08"
          },
          {
            "point": 900,
            "seconds": 61.75,
            "timeDisplay": "1:01.75"
          },
          {
            "point": 800,
            "seconds": 64.53,
            "timeDisplay": "1:04.53"
          },
          {
            "point": 700,
            "seconds": 67.45,
            "timeDisplay": "1:07.45"
          },
          {
            "point": 600,
            "seconds": 70.51,
            "timeDisplay": "1:10.51"
          },
          {
            "point": 500,
            "seconds": 73.77,
            "timeDisplay": "1:13.77"
          },
          {
            "point": 400,
            "seconds": 77.27,
            "timeDisplay": "1:17.27"
          },
          {
            "point": 300,
            "seconds": 81.11,
            "timeDisplay": "1:21.11"
          },
          {
            "point": 200,
            "seconds": 85.44,
            "timeDisplay": "1:25.44"
          },
          {
            "point": 100,
            "seconds": 90.69,
            "timeDisplay": "1:30.69"
          },
          {
            "point": 10,
            "seconds": 97.99,
            "timeDisplay": "1:37.99"
          },
          {
            "point": 1,
            "seconds": 99.51,
            "timeDisplay": "1:39.51"
          }
        ],
        "200_BK": [
          {
            "point": 1100,
            "seconds": 120.94,
            "timeDisplay": "2:00.94"
          },
          {
            "point": 1000,
            "seconds": 127.09,
            "timeDisplay": "2:07.09"
          },
          {
            "point": 900,
            "seconds": 133.43,
            "timeDisplay": "2:13.43"
          },
          {
            "point": 800,
            "seconds": 139.99,
            "timeDisplay": "2:19.99"
          },
          {
            "point": 700,
            "seconds": 146.81,
            "timeDisplay": "2:26.81"
          },
          {
            "point": 600,
            "seconds": 153.93,
            "timeDisplay": "2:33.93"
          },
          {
            "point": 500,
            "seconds": 161.43,
            "timeDisplay": "2:41.43"
          },
          {
            "point": 400,
            "seconds": 169.41,
            "timeDisplay": "2:49.41"
          },
          {
            "point": 300,
            "seconds": 178.03,
            "timeDisplay": "2:58.03"
          },
          {
            "point": 200,
            "seconds": 187.6,
            "timeDisplay": "3:07.60"
          },
          {
            "point": 100,
            "seconds": 198.85,
            "timeDisplay": "3:18.85"
          },
          {
            "point": 10,
            "seconds": 213.47,
            "timeDisplay": "3:33.47"
          },
          {
            "point": 1,
            "seconds": 216.15,
            "timeDisplay": "3:36.15"
          }
        ],
        "50_BR": [
          {
            "point": 1100,
            "seconds": 28.76,
            "timeDisplay": "28.76"
          },
          {
            "point": 1000,
            "seconds": 30.26,
            "timeDisplay": "30.26"
          },
          {
            "point": 900,
            "seconds": 31.81,
            "timeDisplay": "31.81"
          },
          {
            "point": 800,
            "seconds": 33.41,
            "timeDisplay": "33.41"
          },
          {
            "point": 700,
            "seconds": 35.07,
            "timeDisplay": "35.07"
          },
          {
            "point": 600,
            "seconds": 36.8,
            "timeDisplay": "36.80"
          },
          {
            "point": 500,
            "seconds": 38.62,
            "timeDisplay": "38.62"
          },
          {
            "point": 400,
            "seconds": 40.55,
            "timeDisplay": "40.55"
          },
          {
            "point": 300,
            "seconds": 42.62,
            "timeDisplay": "42.62"
          },
          {
            "point": 200,
            "seconds": 44.92,
            "timeDisplay": "44.92"
          },
          {
            "point": 100,
            "seconds": 47.59,
            "timeDisplay": "47.59"
          },
          {
            "point": 10,
            "seconds": 51.0,
            "timeDisplay": "51.00"
          },
          {
            "point": 1,
            "seconds": 51.61,
            "timeDisplay": "51.61"
          }
        ],
        "100_BR": [
          {
            "point": 1100,
            "seconds": 62.26,
            "timeDisplay": "1:02.26"
          },
          {
            "point": 1000,
            "seconds": 65.58,
            "timeDisplay": "1:05.58"
          },
          {
            "point": 900,
            "seconds": 69.0,
            "timeDisplay": "1:09.00"
          },
          {
            "point": 800,
            "seconds": 72.53,
            "timeDisplay": "1:12.53"
          },
          {
            "point": 700,
            "seconds": 76.19,
            "timeDisplay": "1:16.19"
          },
          {
            "point": 600,
            "seconds": 79.99,
            "timeDisplay": "1:19.99"
          },
          {
            "point": 500,
            "seconds": 83.98,
            "timeDisplay": "1:23.98"
          },
          {
            "point": 400,
            "seconds": 88.2,
            "timeDisplay": "1:28.20"
          },
          {
            "point": 300,
            "seconds": 92.73,
            "timeDisplay": "1:32.73"
          },
          {
            "point": 200,
            "seconds": 97.72,
            "timeDisplay": "1:37.72"
          },
          {
            "point": 100,
            "seconds": 103.51,
            "timeDisplay": "1:43.51"
          },
          {
            "point": 10,
            "seconds": 110.79,
            "timeDisplay": "1:50.79"
          },
          {
            "point": 1,
            "seconds": 112.06,
            "timeDisplay": "1:52.06"
          }
        ],
        "200_BR": [
          {
            "point": 1100,
            "seconds": 134.9,
            "timeDisplay": "2:14.90"
          },
          {
            "point": 1000,
            "seconds": 142.48,
            "timeDisplay": "2:22.48"
          },
          {
            "point": 900,
            "seconds": 150.25,
            "timeDisplay": "2:30.25"
          },
          {
            "point": 800,
            "seconds": 158.25,
            "timeDisplay": "2:38.25"
          },
          {
            "point": 700,
            "seconds": 166.5,
            "timeDisplay": "2:46.50"
          },
          {
            "point": 600,
            "seconds": 175.06,
            "timeDisplay": "2:55.06"
          },
          {
            "point": 500,
            "seconds": 183.99,
            "timeDisplay": "3:03.99"
          },
          {
            "point": 400,
            "seconds": 193.39,
            "timeDisplay": "3:13.39"
          },
          {
            "point": 300,
            "seconds": 203.42,
            "timeDisplay": "3:23.42"
          },
          {
            "point": 200,
            "seconds": 214.36,
            "timeDisplay": "3:34.36"
          },
          {
            "point": 100,
            "seconds": 226.86,
            "timeDisplay": "3:46.86"
          },
          {
            "point": 10,
            "seconds": 242.1,
            "timeDisplay": "4:02.10"
          },
          {
            "point": 1,
            "seconds": 244.57,
            "timeDisplay": "4:04.57"
          }
        ],
        "50_FL": [
          {
            "point": 1100,
            "seconds": 24.57,
            "timeDisplay": "24.57"
          },
          {
            "point": 1000,
            "seconds": 25.82,
            "timeDisplay": "25.82"
          },
          {
            "point": 900,
            "seconds": 27.11,
            "timeDisplay": "27.11"
          },
          {
            "point": 800,
            "seconds": 28.44,
            "timeDisplay": "28.44"
          },
          {
            "point": 700,
            "seconds": 29.82,
            "timeDisplay": "29.82"
          },
          {
            "point": 600,
            "seconds": 31.27,
            "timeDisplay": "31.27"
          },
          {
            "point": 500,
            "seconds": 32.8,
            "timeDisplay": "32.80"
          },
          {
            "point": 400,
            "seconds": 34.42,
            "timeDisplay": "34.42"
          },
          {
            "point": 300,
            "seconds": 36.17,
            "timeDisplay": "36.17"
          },
          {
            "point": 200,
            "seconds": 38.11,
            "timeDisplay": "38.11"
          },
          {
            "point": 100,
            "seconds": 40.4,
            "timeDisplay": "40.40"
          },
          {
            "point": 10,
            "seconds": 43.37,
            "timeDisplay": "43.37"
          },
          {
            "point": 1,
            "seconds": 43.92,
            "timeDisplay": "43.92"
          }
        ],
        "100_FL": [
          {
            "point": 1100,
            "seconds": 54.06,
            "timeDisplay": "54.06"
          },
          {
            "point": 1000,
            "seconds": 57.1,
            "timeDisplay": "57.10"
          },
          {
            "point": 900,
            "seconds": 60.24,
            "timeDisplay": "1:00.24"
          },
          {
            "point": 800,
            "seconds": 63.49,
            "timeDisplay": "1:03.49"
          },
          {
            "point": 700,
            "seconds": 66.86,
            "timeDisplay": "1:06.86"
          },
          {
            "point": 600,
            "seconds": 70.39,
            "timeDisplay": "1:10.39"
          },
          {
            "point": 500,
            "seconds": 74.1,
            "timeDisplay": "1:14.10"
          },
          {
            "point": 400,
            "seconds": 78.04,
            "timeDisplay": "1:18.04"
          },
          {
            "point": 300,
            "seconds": 82.31,
            "timeDisplay": "1:22.31"
          },
          {
            "point": 200,
            "seconds": 87.04,
            "timeDisplay": "1:27.04"
          },
          {
            "point": 100,
            "seconds": 92.61,
            "timeDisplay": "1:32.61"
          },
          {
            "point": 10,
            "seconds": 99.85,
            "timeDisplay": "1:39.85"
          },
          {
            "point": 1,
            "seconds": 101.18,
            "timeDisplay": "1:41.18"
          }
        ],
        "200_FL": [
          {
            "point": 1100,
            "seconds": 121.53,
            "timeDisplay": "2:01.53"
          },
          {
            "point": 1000,
            "seconds": 128.94,
            "timeDisplay": "2:08.94"
          },
          {
            "point": 900,
            "seconds": 136.55,
            "timeDisplay": "2:16.55"
          },
          {
            "point": 800,
            "seconds": 144.38,
            "timeDisplay": "2:24.38"
          },
          {
            "point": 700,
            "seconds": 152.49,
            "timeDisplay": "2:32.49"
          },
          {
            "point": 600,
            "seconds": 160.9,
            "timeDisplay": "2:40.90"
          },
          {
            "point": 500,
            "seconds": 169.7,
            "timeDisplay": "2:49.70"
          },
          {
            "point": 400,
            "seconds": 178.98,
            "timeDisplay": "2:58.98"
          },
          {
            "point": 300,
            "seconds": 188.9,
            "timeDisplay": "3:08.90"
          },
          {
            "point": 200,
            "seconds": 199.77,
            "timeDisplay": "3:19.77"
          },
          {
            "point": 100,
            "seconds": 212.26,
            "timeDisplay": "3:32.26"
          },
          {
            "point": 10,
            "seconds": 227.7,
            "timeDisplay": "3:47.70"
          },
          {
            "point": 1,
            "seconds": 230.27,
            "timeDisplay": "3:50.27"
          }
        ],
        "100_IM": [
          {
            "point": 1100,
            "seconds": 57.52,
            "timeDisplay": "57.52"
          },
          {
            "point": 1000,
            "seconds": 60.03,
            "timeDisplay": "1:00.03"
          },
          {
            "point": 900,
            "seconds": 62.62,
            "timeDisplay": "1:02.62"
          },
          {
            "point": 800,
            "seconds": 65.32,
            "timeDisplay": "1:05.32"
          },
          {
            "point": 700,
            "seconds": 68.17,
            "timeDisplay": "1:08.17"
          },
          {
            "point": 600,
            "seconds": 71.17,
            "timeDisplay": "1:11.17"
          },
          {
            "point": 500,
            "seconds": 74.37,
            "timeDisplay": "1:14.37"
          },
          {
            "point": 400,
            "seconds": 77.84,
            "timeDisplay": "1:17.84"
          },
          {
            "point": 300,
            "seconds": 81.66,
            "timeDisplay": "1:21.66"
          },
          {
            "point": 200,
            "seconds": 86.01,
            "timeDisplay": "1:26.01"
          },
          {
            "point": 100,
            "seconds": 91.33,
            "timeDisplay": "1:31.33"
          },
          {
            "point": 10,
            "seconds": 98.96,
            "timeDisplay": "1:38.96"
          },
          {
            "point": 1,
            "seconds": 100.65,
            "timeDisplay": "1:40.65"
          }
        ],
        "200_IM": [
          {
            "point": 1100,
            "seconds": 122.81,
            "timeDisplay": "2:02.81"
          },
          {
            "point": 1000,
            "seconds": 128.33,
            "timeDisplay": "2:08.33"
          },
          {
            "point": 900,
            "seconds": 134.04,
            "timeDisplay": "2:14.04"
          },
          {
            "point": 800,
            "seconds": 140.01,
            "timeDisplay": "2:20.01"
          },
          {
            "point": 700,
            "seconds": 146.24,
            "timeDisplay": "2:26.24"
          },
          {
            "point": 600,
            "seconds": 152.82,
            "timeDisplay": "2:32.82"
          },
          {
            "point": 500,
            "seconds": 159.81,
            "timeDisplay": "2:39.81"
          },
          {
            "point": 400,
            "seconds": 167.35,
            "timeDisplay": "2:47.35"
          },
          {
            "point": 300,
            "seconds": 175.62,
            "timeDisplay": "2:55.62"
          },
          {
            "point": 200,
            "seconds": 185.0,
            "timeDisplay": "3:05.00"
          },
          {
            "point": 100,
            "seconds": 196.39,
            "timeDisplay": "3:16.39"
          },
          {
            "point": 10,
            "seconds": 212.41,
            "timeDisplay": "3:32.41"
          },
          {
            "point": 1,
            "seconds": 215.8,
            "timeDisplay": "3:35.80"
          }
        ],
        "400_IM": [
          {
            "point": 1100,
            "seconds": 262.14,
            "timeDisplay": "4:22.14"
          },
          {
            "point": 1000,
            "seconds": 274.75,
            "timeDisplay": "4:34.75"
          },
          {
            "point": 900,
            "seconds": 287.8,
            "timeDisplay": "4:47.80"
          },
          {
            "point": 800,
            "seconds": 301.33,
            "timeDisplay": "5:01.33"
          },
          {
            "point": 700,
            "seconds": 315.45,
            "timeDisplay": "5:15.45"
          },
          {
            "point": 600,
            "seconds": 330.26,
            "timeDisplay": "5:30.26"
          },
          {
            "point": 500,
            "seconds": 345.92,
            "timeDisplay": "5:45.92"
          },
          {
            "point": 400,
            "seconds": 362.67,
            "timeDisplay": "6:02.67"
          },
          {
            "point": 300,
            "seconds": 380.9,
            "timeDisplay": "6:20.90"
          },
          {
            "point": 200,
            "seconds": 401.33,
            "timeDisplay": "6:41.33"
          },
          {
            "point": 100,
            "seconds": 425.72,
            "timeDisplay": "7:05.72"
          },
          {
            "point": 10,
            "seconds": 458.54,
            "timeDisplay": "7:38.54"
          },
          {
            "point": 1,
            "seconds": 464.94,
            "timeDisplay": "7:44.94"
          }
        ]
      },
      "12": {
        "50_FR": [
          {
            "point": 1100,
            "seconds": 21.77,
            "timeDisplay": "21.77"
          },
          {
            "point": 1000,
            "seconds": 22.86,
            "timeDisplay": "22.86"
          },
          {
            "point": 900,
            "seconds": 23.98,
            "timeDisplay": "23.98"
          },
          {
            "point": 800,
            "seconds": 25.15,
            "timeDisplay": "25.15"
          },
          {
            "point": 700,
            "seconds": 26.36,
            "timeDisplay": "26.36"
          },
          {
            "point": 600,
            "seconds": 27.62,
            "timeDisplay": "27.62"
          },
          {
            "point": 500,
            "seconds": 28.96,
            "timeDisplay": "28.96"
          },
          {
            "point": 400,
            "seconds": 30.38,
            "timeDisplay": "30.38"
          },
          {
            "point": 300,
            "seconds": 31.92,
            "timeDisplay": "31.92"
          },
          {
            "point": 200,
            "seconds": 33.63,
            "timeDisplay": "33.63"
          },
          {
            "point": 100,
            "seconds": 35.66,
            "timeDisplay": "35.66"
          },
          {
            "point": 10,
            "seconds": 38.33,
            "timeDisplay": "38.33"
          },
          {
            "point": 1,
            "seconds": 38.83,
            "timeDisplay": "38.83"
          }
        ],
        "100_FR": [
          {
            "point": 1100,
            "seconds": 48.11,
            "timeDisplay": "48.11"
          },
          {
            "point": 1000,
            "seconds": 50.16,
            "timeDisplay": "50.16"
          },
          {
            "point": 900,
            "seconds": 52.3,
            "timeDisplay": "52.30"
          },
          {
            "point": 800,
            "seconds": 54.54,
            "timeDisplay": "54.54"
          },
          {
            "point": 700,
            "seconds": 56.88,
            "timeDisplay": "56.88"
          },
          {
            "point": 600,
            "seconds": 59.37,
            "timeDisplay": "59.37"
          },
          {
            "point": 500,
            "seconds": 62.02,
            "timeDisplay": "1:02.02"
          },
          {
            "point": 400,
            "seconds": 64.88,
            "timeDisplay": "1:04.88"
          },
          {
            "point": 300,
            "seconds": 68.05,
            "timeDisplay": "1:08.05"
          },
          {
            "point": 200,
            "seconds": 71.67,
            "timeDisplay": "1:11.67"
          },
          {
            "point": 100,
            "seconds": 76.12,
            "timeDisplay": "1:16.12"
          },
          {
            "point": 10,
            "seconds": 82.56,
            "timeDisplay": "1:22.56"
          },
          {
            "point": 1,
            "seconds": 84.01,
            "timeDisplay": "1:24.01"
          }
        ],
        "200_FR": [
          {
            "point": 1100,
            "seconds": 105.72,
            "timeDisplay": "1:45.72"
          },
          {
            "point": 1000,
            "seconds": 109.65,
            "timeDisplay": "1:49.65"
          },
          {
            "point": 900,
            "seconds": 113.75,
            "timeDisplay": "1:53.75"
          },
          {
            "point": 800,
            "seconds": 118.07,
            "timeDisplay": "1:58.07"
          },
          {
            "point": 700,
            "seconds": 122.64,
            "timeDisplay": "2:02.64"
          },
          {
            "point": 600,
            "seconds": 127.52,
            "timeDisplay": "2:07.52"
          },
          {
            "point": 500,
            "seconds": 132.78,
            "timeDisplay": "2:12.78"
          },
          {
            "point": 400,
            "seconds": 138.55,
            "timeDisplay": "2:18.55"
          },
          {
            "point": 300,
            "seconds": 145.03,
            "timeDisplay": "2:25.03"
          },
          {
            "point": 200,
            "seconds": 152.59,
            "timeDisplay": "2:32.59"
          },
          {
            "point": 100,
            "seconds": 162.22,
            "timeDisplay": "2:42.22"
          },
          {
            "point": 10,
            "seconds": 177.35,
            "timeDisplay": "2:57.35"
          },
          {
            "point": 1,
            "seconds": 181.27,
            "timeDisplay": "3:01.27"
          }
        ],
        "500_FR": [
          {
            "point": 1100,
            "seconds": 282.08,
            "timeDisplay": "4:42.08"
          },
          {
            "point": 1000,
            "seconds": 292.19,
            "timeDisplay": "4:52.19"
          },
          {
            "point": 900,
            "seconds": 302.79,
            "timeDisplay": "5:02.79"
          },
          {
            "point": 800,
            "seconds": 313.96,
            "timeDisplay": "5:13.96"
          },
          {
            "point": 700,
            "seconds": 325.8,
            "timeDisplay": "5:25.80"
          },
          {
            "point": 600,
            "seconds": 338.47,
            "timeDisplay": "5:38.47"
          },
          {
            "point": 500,
            "seconds": 352.16,
            "timeDisplay": "5:52.16"
          },
          {
            "point": 400,
            "seconds": 367.23,
            "timeDisplay": "6:07.23"
          },
          {
            "point": 300,
            "seconds": 384.2,
            "timeDisplay": "6:24.20"
          },
          {
            "point": 200,
            "seconds": 404.11,
            "timeDisplay": "6:44.11"
          },
          {
            "point": 100,
            "seconds": 429.66,
            "timeDisplay": "7:09.66"
          },
          {
            "point": 10,
            "seconds": 470.6,
            "timeDisplay": "7:50.60"
          },
          {
            "point": 1,
            "seconds": 481.54,
            "timeDisplay": "8:01.54"
          }
        ],
        "1000_FR": [
          {
            "point": 1100,
            "seconds": 586.23,
            "timeDisplay": "9:46.23"
          },
          {
            "point": 1000,
            "seconds": 609.43,
            "timeDisplay": "10:09.43"
          },
          {
            "point": 900,
            "seconds": 633.65,
            "timeDisplay": "10:33.65"
          },
          {
            "point": 800,
            "seconds": 659.04,
            "timeDisplay": "10:59.04"
          },
          {
            "point": 700,
            "seconds": 685.82,
            "timeDisplay": "11:25.82"
          },
          {
            "point": 600,
            "seconds": 714.28,
            "timeDisplay": "11:54.28"
          },
          {
            "point": 500,
            "seconds": 744.86,
            "timeDisplay": "12:24.86"
          },
          {
            "point": 400,
            "seconds": 778.18,
            "timeDisplay": "12:58.18"
          },
          {
            "point": 300,
            "seconds": 815.3,
            "timeDisplay": "13:35.30"
          },
          {
            "point": 200,
            "seconds": 858.23,
            "timeDisplay": "14:18.23"
          },
          {
            "point": 100,
            "seconds": 912.07,
            "timeDisplay": "15:12.07"
          },
          {
            "point": 10,
            "seconds": 993.62,
            "timeDisplay": "16:33.62"
          },
          {
            "point": 1,
            "seconds": 1013.34,
            "timeDisplay": "16:53.34"
          }
        ],
        "1650_FR": [
          {
            "point": 1100,
            "seconds": 977.98,
            "timeDisplay": "16:17.98"
          },
          {
            "point": 1000,
            "seconds": 1017.87,
            "timeDisplay": "16:57.87"
          },
          {
            "point": 900,
            "seconds": 1059.44,
            "timeDisplay": "17:39.44"
          },
          {
            "point": 800,
            "seconds": 1102.96,
            "timeDisplay": "18:22.96"
          },
          {
            "point": 700,
            "seconds": 1148.79,
            "timeDisplay": "19:08.79"
          },
          {
            "point": 600,
            "seconds": 1197.42,
            "timeDisplay": "19:57.42"
          },
          {
            "point": 500,
            "seconds": 1249.53,
            "timeDisplay": "20:49.53"
          },
          {
            "point": 400,
            "seconds": 1306.15,
            "timeDisplay": "21:46.15"
          },
          {
            "point": 300,
            "seconds": 1369.02,
            "timeDisplay": "22:49.02"
          },
          {
            "point": 200,
            "seconds": 1441.41,
            "timeDisplay": "24:01.41"
          },
          {
            "point": 100,
            "seconds": 1531.5,
            "timeDisplay": "25:31.50"
          },
          {
            "point": 10,
            "seconds": 1665.62,
            "timeDisplay": "27:45.62"
          },
          {
            "point": 1,
            "seconds": 1697.03,
            "timeDisplay": "28:17.03"
          }
        ],
        "50_BK": [
          {
            "point": 1100,
            "seconds": 25.28,
            "timeDisplay": "25.28"
          },
          {
            "point": 1000,
            "seconds": 26.37,
            "timeDisplay": "26.37"
          },
          {
            "point": 900,
            "seconds": 27.52,
            "timeDisplay": "27.52"
          },
          {
            "point": 800,
            "seconds": 28.71,
            "timeDisplay": "28.71"
          },
          {
            "point": 700,
            "seconds": 29.96,
            "timeDisplay": "29.96"
          },
          {
            "point": 600,
            "seconds": 31.28,
            "timeDisplay": "31.28"
          },
          {
            "point": 500,
            "seconds": 32.69,
            "timeDisplay": "32.69"
          },
          {
            "point": 400,
            "seconds": 34.21,
            "timeDisplay": "34.21"
          },
          {
            "point": 300,
            "seconds": 35.88,
            "timeDisplay": "35.88"
          },
          {
            "point": 200,
            "seconds": 37.8,
            "timeDisplay": "37.80"
          },
          {
            "point": 100,
            "seconds": 40.14,
            "timeDisplay": "40.14"
          },
          {
            "point": 10,
            "seconds": 43.5,
            "timeDisplay": "43.50"
          },
          {
            "point": 1,
            "seconds": 44.24,
            "timeDisplay": "44.24"
          }
        ],
        "100_BK": [
          {
            "point": 1100,
            "seconds": 53.33,
            "timeDisplay": "53.33"
          },
          {
            "point": 1000,
            "seconds": 55.77,
            "timeDisplay": "55.77"
          },
          {
            "point": 900,
            "seconds": 58.29,
            "timeDisplay": "58.29"
          },
          {
            "point": 800,
            "seconds": 60.92,
            "timeDisplay": "1:00.92"
          },
          {
            "point": 700,
            "seconds": 63.67,
            "timeDisplay": "1:03.67"
          },
          {
            "point": 600,
            "seconds": 66.57,
            "timeDisplay": "1:06.57"
          },
          {
            "point": 500,
            "seconds": 69.64,
            "timeDisplay": "1:09.64"
          },
          {
            "point": 400,
            "seconds": 72.95,
            "timeDisplay": "1:12.95"
          },
          {
            "point": 300,
            "seconds": 76.57,
            "timeDisplay": "1:16.57"
          },
          {
            "point": 200,
            "seconds": 80.66,
            "timeDisplay": "1:20.66"
          },
          {
            "point": 100,
            "seconds": 85.62,
            "timeDisplay": "1:25.62"
          },
          {
            "point": 10,
            "seconds": 92.51,
            "timeDisplay": "1:32.51"
          },
          {
            "point": 1,
            "seconds": 93.75,
            "timeDisplay": "1:33.75"
          }
        ],
        "200_BK": [
          {
            "point": 1100,
            "seconds": 113.42,
            "timeDisplay": "1:53.42"
          },
          {
            "point": 1000,
            "seconds": 119.19,
            "timeDisplay": "1:59.19"
          },
          {
            "point": 900,
            "seconds": 125.13,
            "timeDisplay": "2:05.13"
          },
          {
            "point": 800,
            "seconds": 131.29,
            "timeDisplay": "2:11.29"
          },
          {
            "point": 700,
            "seconds": 137.67,
            "timeDisplay": "2:17.67"
          },
          {
            "point": 600,
            "seconds": 144.36,
            "timeDisplay": "2:24.36"
          },
          {
            "point": 500,
            "seconds": 151.4,
            "timeDisplay": "2:31.40"
          },
          {
            "point": 400,
            "seconds": 158.88,
            "timeDisplay": "2:38.88"
          },
          {
            "point": 300,
            "seconds": 166.96,
            "timeDisplay": "2:46.96"
          },
          {
            "point": 200,
            "seconds": 175.94,
            "timeDisplay": "2:55.94"
          },
          {
            "point": 100,
            "seconds": 186.49,
            "timeDisplay": "3:06.49"
          },
          {
            "point": 10,
            "seconds": 200.21,
            "timeDisplay": "3:20.21"
          },
          {
            "point": 1,
            "seconds": 202.72,
            "timeDisplay": "3:22.72"
          }
        ],
        "50_BR": [
          {
            "point": 1100,
            "seconds": 27.52,
            "timeDisplay": "27.52"
          },
          {
            "point": 1000,
            "seconds": 28.97,
            "timeDisplay": "28.97"
          },
          {
            "point": 900,
            "seconds": 30.45,
            "timeDisplay": "30.45"
          },
          {
            "point": 800,
            "seconds": 31.98,
            "timeDisplay": "31.98"
          },
          {
            "point": 700,
            "seconds": 33.57,
            "timeDisplay": "33.57"
          },
          {
            "point": 600,
            "seconds": 35.23,
            "timeDisplay": "35.23"
          },
          {
            "point": 500,
            "seconds": 36.97,
            "timeDisplay": "36.97"
          },
          {
            "point": 400,
            "seconds": 38.81,
            "timeDisplay": "38.81"
          },
          {
            "point": 300,
            "seconds": 40.79,
            "timeDisplay": "40.79"
          },
          {
            "point": 200,
            "seconds": 42.99,
            "timeDisplay": "42.99"
          },
          {
            "point": 100,
            "seconds": 45.55,
            "timeDisplay": "45.55"
          },
          {
            "point": 10,
            "seconds": 48.82,
            "timeDisplay": "48.82"
          },
          {
            "point": 1,
            "seconds": 49.4,
            "timeDisplay": "49.40"
          }
        ],
        "100_BR": [
          {
            "point": 1100,
            "seconds": 59.01,
            "timeDisplay": "59.01"
          },
          {
            "point": 1000,
            "seconds": 62.16,
            "timeDisplay": "1:02.16"
          },
          {
            "point": 900,
            "seconds": 65.4,
            "timeDisplay": "1:05.40"
          },
          {
            "point": 800,
            "seconds": 68.74,
            "timeDisplay": "1:08.74"
          },
          {
            "point": 700,
            "seconds": 72.2,
            "timeDisplay": "1:12.20"
          },
          {
            "point": 600,
            "seconds": 75.81,
            "timeDisplay": "1:15.81"
          },
          {
            "point": 500,
            "seconds": 79.59,
            "timeDisplay": "1:19.59"
          },
          {
            "point": 400,
            "seconds": 83.58,
            "timeDisplay": "1:23.58"
          },
          {
            "point": 300,
            "seconds": 87.88,
            "timeDisplay": "1:27.88"
          },
          {
            "point": 200,
            "seconds": 92.61,
            "timeDisplay": "1:32.61"
          },
          {
            "point": 100,
            "seconds": 98.09,
            "timeDisplay": "1:38.09"
          },
          {
            "point": 10,
            "seconds": 105.0,
            "timeDisplay": "1:45.00"
          },
          {
            "point": 1,
            "seconds": 106.2,
            "timeDisplay": "1:46.20"
          }
        ],
        "200_BR": [
          {
            "point": 1100,
            "seconds": 126.76,
            "timeDisplay": "2:06.76"
          },
          {
            "point": 1000,
            "seconds": 133.88,
            "timeDisplay": "2:13.88"
          },
          {
            "point": 900,
            "seconds": 141.18,
            "timeDisplay": "2:21.18"
          },
          {
            "point": 800,
            "seconds": 148.69,
            "timeDisplay": "2:28.69"
          },
          {
            "point": 700,
            "seconds": 156.45,
            "timeDisplay": "2:36.45"
          },
          {
            "point": 600,
            "seconds": 164.49,
            "timeDisplay": "2:44.49"
          },
          {
            "point": 500,
            "seconds": 172.88,
            "timeDisplay": "2:52.88"
          },
          {
            "point": 400,
            "seconds": 181.72,
            "timeDisplay": "3:01.72"
          },
          {
            "point": 300,
            "seconds": 191.14,
            "timeDisplay": "3:11.14"
          },
          {
            "point": 200,
            "seconds": 201.41,
            "timeDisplay": "3:21.41"
          },
          {
            "point": 100,
            "seconds": 213.16,
            "timeDisplay": "3:33.16"
          },
          {
            "point": 10,
            "seconds": 227.48,
            "timeDisplay": "3:47.48"
          },
          {
            "point": 1,
            "seconds": 229.81,
            "timeDisplay": "3:49.81"
          }
        ],
        "50_FL": [
          {
            "point": 1100,
            "seconds": 23.67,
            "timeDisplay": "23.67"
          },
          {
            "point": 1000,
            "seconds": 24.87,
            "timeDisplay": "24.87"
          },
          {
            "point": 900,
            "seconds": 26.11,
            "timeDisplay": "26.11"
          },
          {
            "point": 800,
            "seconds": 27.4,
            "timeDisplay": "27.40"
          },
          {
            "point": 700,
            "seconds": 28.73,
            "timeDisplay": "28.73"
          },
          {
            "point": 600,
            "seconds": 30.13,
            "timeDisplay": "30.13"
          },
          {
            "point": 500,
            "seconds": 31.59,
            "timeDisplay": "31.59"
          },
          {
            "point": 400,
            "seconds": 33.15,
            "timeDisplay": "33.15"
          },
          {
            "point": 300,
            "seconds": 34.84,
            "timeDisplay": "34.84"
          },
          {
            "point": 200,
            "seconds": 36.71,
            "timeDisplay": "36.71"
          },
          {
            "point": 100,
            "seconds": 38.92,
            "timeDisplay": "38.92"
          },
          {
            "point": 10,
            "seconds": 41.78,
            "timeDisplay": "41.78"
          },
          {
            "point": 1,
            "seconds": 42.31,
            "timeDisplay": "42.31"
          }
        ],
        "100_FL": [
          {
            "point": 1100,
            "seconds": 51.34,
            "timeDisplay": "51.34"
          },
          {
            "point": 1000,
            "seconds": 54.23,
            "timeDisplay": "54.23"
          },
          {
            "point": 900,
            "seconds": 57.21,
            "timeDisplay": "57.21"
          },
          {
            "point": 800,
            "seconds": 60.3,
            "timeDisplay": "1:00.30"
          },
          {
            "point": 700,
            "seconds": 63.5,
            "timeDisplay": "1:03.50"
          },
          {
            "point": 600,
            "seconds": 66.85,
            "timeDisplay": "1:06.85"
          },
          {
            "point": 500,
            "seconds": 70.37,
            "timeDisplay": "1:10.37"
          },
          {
            "point": 400,
            "seconds": 74.12,
            "timeDisplay": "1:14.12"
          },
          {
            "point": 300,
            "seconds": 78.17,
            "timeDisplay": "1:18.17"
          },
          {
            "point": 200,
            "seconds": 82.66,
            "timeDisplay": "1:22.66"
          },
          {
            "point": 100,
            "seconds": 87.95,
            "timeDisplay": "1:27.95"
          },
          {
            "point": 10,
            "seconds": 94.82,
            "timeDisplay": "1:34.82"
          },
          {
            "point": 1,
            "seconds": 96.09,
            "timeDisplay": "1:36.09"
          }
        ],
        "200_FL": [
          {
            "point": 1100,
            "seconds": 113.31,
            "timeDisplay": "1:53.31"
          },
          {
            "point": 1000,
            "seconds": 120.21,
            "timeDisplay": "2:00.21"
          },
          {
            "point": 900,
            "seconds": 127.3,
            "timeDisplay": "2:07.30"
          },
          {
            "point": 800,
            "seconds": 134.61,
            "timeDisplay": "2:14.61"
          },
          {
            "point": 700,
            "seconds": 142.16,
            "timeDisplay": "2:22.16"
          },
          {
            "point": 600,
            "seconds": 150.0,
            "timeDisplay": "2:30.00"
          },
          {
            "point": 500,
            "seconds": 158.21,
            "timeDisplay": "2:38.21"
          },
          {
            "point": 400,
            "seconds": 166.86,
            "timeDisplay": "2:46.86"
          },
          {
            "point": 300,
            "seconds": 176.11,
            "timeDisplay": "2:56.11"
          },
          {
            "point": 200,
            "seconds": 186.24,
            "timeDisplay": "3:06.24"
          },
          {
            "point": 100,
            "seconds": 197.89,
            "timeDisplay": "3:17.89"
          },
          {
            "point": 10,
            "seconds": 212.28,
            "timeDisplay": "3:32.28"
          },
          {
            "point": 1,
            "seconds": 214.67,
            "timeDisplay": "3:34.67"
          }
        ],
        "100_IM": [
          {
            "point": 1100,
            "seconds": 55.07,
            "timeDisplay": "55.07"
          },
          {
            "point": 1000,
            "seconds": 57.46,
            "timeDisplay": "57.46"
          },
          {
            "point": 900,
            "seconds": 59.95,
            "timeDisplay": "59.95"
          },
          {
            "point": 800,
            "seconds": 62.54,
            "timeDisplay": "1:02.54"
          },
          {
            "point": 700,
            "seconds": 65.26,
            "timeDisplay": "1:05.26"
          },
          {
            "point": 600,
            "seconds": 68.14,
            "timeDisplay": "1:08.14"
          },
          {
            "point": 500,
            "seconds": 71.21,
            "timeDisplay": "1:11.21"
          },
          {
            "point": 400,
            "seconds": 74.52,
            "timeDisplay": "1:14.52"
          },
          {
            "point": 300,
            "seconds": 78.17,
            "timeDisplay": "1:18.17"
          },
          {
            "point": 200,
            "seconds": 82.34,
            "timeDisplay": "1:22.34"
          },
          {
            "point": 100,
            "seconds": 87.44,
            "timeDisplay": "1:27.44"
          },
          {
            "point": 10,
            "seconds": 94.75,
            "timeDisplay": "1:34.75"
          },
          {
            "point": 1,
            "seconds": 96.36,
            "timeDisplay": "1:36.36"
          }
        ],
        "200_IM": [
          {
            "point": 1100,
            "seconds": 116.48,
            "timeDisplay": "1:56.48"
          },
          {
            "point": 1000,
            "seconds": 121.7,
            "timeDisplay": "2:01.70"
          },
          {
            "point": 900,
            "seconds": 127.13,
            "timeDisplay": "2:07.13"
          },
          {
            "point": 800,
            "seconds": 132.78,
            "timeDisplay": "2:12.78"
          },
          {
            "point": 700,
            "seconds": 138.7,
            "timeDisplay": "2:18.70"
          },
          {
            "point": 600,
            "seconds": 144.94,
            "timeDisplay": "2:24.94"
          },
          {
            "point": 500,
            "seconds": 151.58,
            "timeDisplay": "2:31.58"
          },
          {
            "point": 400,
            "seconds": 158.72,
            "timeDisplay": "2:38.72"
          },
          {
            "point": 300,
            "seconds": 166.57,
            "timeDisplay": "2:46.57"
          },
          {
            "point": 200,
            "seconds": 175.46,
            "timeDisplay": "2:55.46"
          },
          {
            "point": 100,
            "seconds": 186.27,
            "timeDisplay": "3:06.27"
          },
          {
            "point": 10,
            "seconds": 201.46,
            "timeDisplay": "3:21.46"
          },
          {
            "point": 1,
            "seconds": 204.67,
            "timeDisplay": "3:24.67"
          }
        ],
        "400_IM": [
          {
            "point": 1100,
            "seconds": 247.12,
            "timeDisplay": "4:07.12"
          },
          {
            "point": 1000,
            "seconds": 259.02,
            "timeDisplay": "4:19.02"
          },
          {
            "point": 900,
            "seconds": 271.31,
            "timeDisplay": "4:31.31"
          },
          {
            "point": 800,
            "seconds": 284.08,
            "timeDisplay": "4:44.08"
          },
          {
            "point": 700,
            "seconds": 297.38,
            "timeDisplay": "4:57.38"
          },
          {
            "point": 600,
            "seconds": 311.34,
            "timeDisplay": "5:11.34"
          },
          {
            "point": 500,
            "seconds": 326.11,
            "timeDisplay": "5:26.11"
          },
          {
            "point": 400,
            "seconds": 341.9,
            "timeDisplay": "5:41.90"
          },
          {
            "point": 300,
            "seconds": 359.08,
            "timeDisplay": "5:59.08"
          },
          {
            "point": 200,
            "seconds": 378.35,
            "timeDisplay": "6:18.35"
          },
          {
            "point": 100,
            "seconds": 401.33,
            "timeDisplay": "6:41.33"
          },
          {
            "point": 10,
            "seconds": 432.27,
            "timeDisplay": "7:12.27"
          },
          {
            "point": 1,
            "seconds": 438.31,
            "timeDisplay": "7:18.31"
          }
        ]
      },
      "13": {
        "50_FR": [
          {
            "point": 1100,
            "seconds": 21.74,
            "timeDisplay": "21.74"
          },
          {
            "point": 1000,
            "seconds": 22.71,
            "timeDisplay": "22.71"
          },
          {
            "point": 900,
            "seconds": 23.72,
            "timeDisplay": "23.72"
          },
          {
            "point": 800,
            "seconds": 24.76,
            "timeDisplay": "24.76"
          },
          {
            "point": 700,
            "seconds": 25.84,
            "timeDisplay": "25.84"
          },
          {
            "point": 600,
            "seconds": 26.97,
            "timeDisplay": "26.97"
          },
          {
            "point": 500,
            "seconds": 28.16,
            "timeDisplay": "28.16"
          },
          {
            "point": 400,
            "seconds": 29.44,
            "timeDisplay": "29.44"
          },
          {
            "point": 300,
            "seconds": 30.82,
            "timeDisplay": "30.82"
          },
          {
            "point": 200,
            "seconds": 32.35,
            "timeDisplay": "32.35"
          },
          {
            "point": 100,
            "seconds": 34.17,
            "timeDisplay": "34.17"
          },
          {
            "point": 10,
            "seconds": 36.55,
            "timeDisplay": "36.55"
          },
          {
            "point": 1,
            "seconds": 37.01,
            "timeDisplay": "37.01"
          }
        ],
        "100_FR": [
          {
            "point": 1100,
            "seconds": 47.52,
            "timeDisplay": "47.52"
          },
          {
            "point": 1000,
            "seconds": 49.35,
            "timeDisplay": "49.35"
          },
          {
            "point": 900,
            "seconds": 51.24,
            "timeDisplay": "51.24"
          },
          {
            "point": 800,
            "seconds": 53.23,
            "timeDisplay": "53.23"
          },
          {
            "point": 700,
            "seconds": 55.31,
            "timeDisplay": "55.31"
          },
          {
            "point": 600,
            "seconds": 57.51,
            "timeDisplay": "57.51"
          },
          {
            "point": 500,
            "seconds": 59.86,
            "timeDisplay": "59.86"
          },
          {
            "point": 400,
            "seconds": 62.4,
            "timeDisplay": "1:02.40"
          },
          {
            "point": 300,
            "seconds": 65.21,
            "timeDisplay": "1:05.21"
          },
          {
            "point": 200,
            "seconds": 68.42,
            "timeDisplay": "1:08.42"
          },
          {
            "point": 100,
            "seconds": 72.37,
            "timeDisplay": "1:12.37"
          },
          {
            "point": 10,
            "seconds": 78.09,
            "timeDisplay": "1:18.09"
          },
          {
            "point": 1,
            "seconds": 79.37,
            "timeDisplay": "1:19.37"
          }
        ],
        "200_FR": [
          {
            "point": 1100,
            "seconds": 103.6,
            "timeDisplay": "1:43.60"
          },
          {
            "point": 1000,
            "seconds": 107.06,
            "timeDisplay": "1:47.06"
          },
          {
            "point": 900,
            "seconds": 110.68,
            "timeDisplay": "1:50.68"
          },
          {
            "point": 800,
            "seconds": 114.48,
            "timeDisplay": "1:54.48"
          },
          {
            "point": 700,
            "seconds": 118.51,
            "timeDisplay": "1:58.51"
          },
          {
            "point": 600,
            "seconds": 122.81,
            "timeDisplay": "2:02.81"
          },
          {
            "point": 500,
            "seconds": 127.46,
            "timeDisplay": "2:07.46"
          },
          {
            "point": 400,
            "seconds": 132.54,
            "timeDisplay": "2:12.54"
          },
          {
            "point": 300,
            "seconds": 138.25,
            "timeDisplay": "2:18.25"
          },
          {
            "point": 200,
            "seconds": 144.92,
            "timeDisplay": "2:24.92"
          },
          {
            "point": 100,
            "seconds": 153.4,
            "timeDisplay": "2:33.40"
          },
          {
            "point": 10,
            "seconds": 166.75,
            "timeDisplay": "2:46.75"
          },
          {
            "point": 1,
            "seconds": 170.2,
            "timeDisplay": "2:50.20"
          }
        ],
        "500_FR": [
          {
            "point": 1100,
            "seconds": 275.74,
            "timeDisplay": "4:35.74"
          },
          {
            "point": 1000,
            "seconds": 284.64,
            "timeDisplay": "4:44.64"
          },
          {
            "point": 900,
            "seconds": 293.96,
            "timeDisplay": "4:53.96"
          },
          {
            "point": 800,
            "seconds": 303.79,
            "timeDisplay": "5:03.79"
          },
          {
            "point": 700,
            "seconds": 314.2,
            "timeDisplay": "5:14.20"
          },
          {
            "point": 600,
            "seconds": 325.35,
            "timeDisplay": "5:25.35"
          },
          {
            "point": 500,
            "seconds": 337.4,
            "timeDisplay": "5:37.40"
          },
          {
            "point": 400,
            "seconds": 350.65,
            "timeDisplay": "5:50.65"
          },
          {
            "point": 300,
            "seconds": 365.57,
            "timeDisplay": "6:05.57"
          },
          {
            "point": 200,
            "seconds": 383.09,
            "timeDisplay": "6:23.09"
          },
          {
            "point": 100,
            "seconds": 405.56,
            "timeDisplay": "6:45.56"
          },
          {
            "point": 10,
            "seconds": 441.58,
            "timeDisplay": "7:21.58"
          },
          {
            "point": 1,
            "seconds": 451.21,
            "timeDisplay": "7:31.21"
          }
        ],
        "1000_FR": [
          {
            "point": 1100,
            "seconds": 566.08,
            "timeDisplay": "9:26.08"
          },
          {
            "point": 1000,
            "seconds": 586.22,
            "timeDisplay": "9:46.22"
          },
          {
            "point": 900,
            "seconds": 607.24,
            "timeDisplay": "10:07.24"
          },
          {
            "point": 800,
            "seconds": 629.28,
            "timeDisplay": "10:29.28"
          },
          {
            "point": 700,
            "seconds": 652.53,
            "timeDisplay": "10:52.53"
          },
          {
            "point": 600,
            "seconds": 677.24,
            "timeDisplay": "11:17.24"
          },
          {
            "point": 500,
            "seconds": 703.78,
            "timeDisplay": "11:43.78"
          },
          {
            "point": 400,
            "seconds": 732.71,
            "timeDisplay": "12:12.71"
          },
          {
            "point": 300,
            "seconds": 764.93,
            "timeDisplay": "12:44.93"
          },
          {
            "point": 200,
            "seconds": 802.2,
            "timeDisplay": "13:22.20"
          },
          {
            "point": 100,
            "seconds": 848.93,
            "timeDisplay": "14:08.93"
          },
          {
            "point": 10,
            "seconds": 919.73,
            "timeDisplay": "15:19.73"
          },
          {
            "point": 1,
            "seconds": 936.85,
            "timeDisplay": "15:36.85"
          }
        ],
        "1650_FR": [
          {
            "point": 1100,
            "seconds": 946.03,
            "timeDisplay": "15:46.03"
          },
          {
            "point": 1000,
            "seconds": 980.71,
            "timeDisplay": "16:20.71"
          },
          {
            "point": 900,
            "seconds": 1016.85,
            "timeDisplay": "16:56.85"
          },
          {
            "point": 800,
            "seconds": 1054.68,
            "timeDisplay": "17:34.68"
          },
          {
            "point": 700,
            "seconds": 1094.53,
            "timeDisplay": "18:14.53"
          },
          {
            "point": 600,
            "seconds": 1136.8,
            "timeDisplay": "18:56.80"
          },
          {
            "point": 500,
            "seconds": 1182.1,
            "timeDisplay": "19:42.10"
          },
          {
            "point": 400,
            "seconds": 1231.32,
            "timeDisplay": "20:31.32"
          },
          {
            "point": 300,
            "seconds": 1285.98,
            "timeDisplay": "21:25.98"
          },
          {
            "point": 200,
            "seconds": 1348.9,
            "timeDisplay": "22:28.90"
          },
          {
            "point": 100,
            "seconds": 1427.23,
            "timeDisplay": "23:47.23"
          },
          {
            "point": 10,
            "seconds": 1543.81,
            "timeDisplay": "25:43.81"
          },
          {
            "point": 1,
            "seconds": 1571.12,
            "timeDisplay": "26:11.12"
          }
        ],
        "50_BK": [
          {
            "point": 1100,
            "seconds": 25.05,
            "timeDisplay": "25.05"
          },
          {
            "point": 1000,
            "seconds": 26.03,
            "timeDisplay": "26.03"
          },
          {
            "point": 900,
            "seconds": 27.05,
            "timeDisplay": "27.05"
          },
          {
            "point": 800,
            "seconds": 28.11,
            "timeDisplay": "28.11"
          },
          {
            "point": 700,
            "seconds": 29.22,
            "timeDisplay": "29.22"
          },
          {
            "point": 600,
            "seconds": 30.39,
            "timeDisplay": "30.39"
          },
          {
            "point": 500,
            "seconds": 31.65,
            "timeDisplay": "31.65"
          },
          {
            "point": 400,
            "seconds": 33.0,
            "timeDisplay": "33.00"
          },
          {
            "point": 300,
            "seconds": 34.49,
            "timeDisplay": "34.49"
          },
          {
            "point": 200,
            "seconds": 36.19,
            "timeDisplay": "36.19"
          },
          {
            "point": 100,
            "seconds": 38.28,
            "timeDisplay": "38.28"
          },
          {
            "point": 10,
            "seconds": 41.26,
            "timeDisplay": "41.26"
          },
          {
            "point": 1,
            "seconds": 41.93,
            "timeDisplay": "41.93"
          }
        ],
        "100_BK": [
          {
            "point": 1100,
            "seconds": 52.69,
            "timeDisplay": "52.69"
          },
          {
            "point": 1000,
            "seconds": 54.85,
            "timeDisplay": "54.85"
          },
          {
            "point": 900,
            "seconds": 57.09,
            "timeDisplay": "57.09"
          },
          {
            "point": 800,
            "seconds": 59.42,
            "timeDisplay": "59.42"
          },
          {
            "point": 700,
            "seconds": 61.86,
            "timeDisplay": "1:01.86"
          },
          {
            "point": 600,
            "seconds": 64.42,
            "timeDisplay": "1:04.42"
          },
          {
            "point": 500,
            "seconds": 67.15,
            "timeDisplay": "1:07.15"
          },
          {
            "point": 400,
            "seconds": 70.08,
            "timeDisplay": "1:10.08"
          },
          {
            "point": 300,
            "seconds": 73.29,
            "timeDisplay": "1:13.29"
          },
          {
            "point": 200,
            "seconds": 76.92,
            "timeDisplay": "1:16.92"
          },
          {
            "point": 100,
            "seconds": 81.31,
            "timeDisplay": "1:21.31"
          },
          {
            "point": 10,
            "seconds": 87.42,
            "timeDisplay": "1:27.42"
          },
          {
            "point": 1,
            "seconds": 88.7,
            "timeDisplay": "1:28.70"
          }
        ],
        "200_BK": [
          {
            "point": 1100,
            "seconds": 112.11,
            "timeDisplay": "1:52.11"
          },
          {
            "point": 1000,
            "seconds": 117.22,
            "timeDisplay": "1:57.22"
          },
          {
            "point": 900,
            "seconds": 122.49,
            "timeDisplay": "2:02.49"
          },
          {
            "point": 800,
            "seconds": 127.94,
            "timeDisplay": "2:07.94"
          },
          {
            "point": 700,
            "seconds": 133.61,
            "timeDisplay": "2:13.61"
          },
          {
            "point": 600,
            "seconds": 139.53,
            "timeDisplay": "2:19.53"
          },
          {
            "point": 500,
            "seconds": 145.76,
            "timeDisplay": "2:25.76"
          },
          {
            "point": 400,
            "seconds": 152.39,
            "timeDisplay": "2:32.39"
          },
          {
            "point": 300,
            "seconds": 159.55,
            "timeDisplay": "2:39.55"
          },
          {
            "point": 200,
            "seconds": 167.5,
            "timeDisplay": "2:47.50"
          },
          {
            "point": 100,
            "seconds": 176.85,
            "timeDisplay": "2:56.85"
          },
          {
            "point": 10,
            "seconds": 189.0,
            "timeDisplay": "3:09.00"
          },
          {
            "point": 1,
            "seconds": 191.23,
            "timeDisplay": "3:11.23"
          }
        ],
        "50_BR": [
          {
            "point": 1100,
            "seconds": 27.36,
            "timeDisplay": "27.36"
          },
          {
            "point": 1000,
            "seconds": 28.64,
            "timeDisplay": "28.64"
          },
          {
            "point": 900,
            "seconds": 29.96,
            "timeDisplay": "29.96"
          },
          {
            "point": 800,
            "seconds": 31.33,
            "timeDisplay": "31.33"
          },
          {
            "point": 700,
            "seconds": 32.74,
            "timeDisplay": "32.74"
          },
          {
            "point": 600,
            "seconds": 34.22,
            "timeDisplay": "34.22"
          },
          {
            "point": 500,
            "seconds": 35.77,
            "timeDisplay": "35.77"
          },
          {
            "point": 400,
            "seconds": 37.41,
            "timeDisplay": "37.41"
          },
          {
            "point": 300,
            "seconds": 39.18,
            "timeDisplay": "39.18"
          },
          {
            "point": 200,
            "seconds": 41.14,
            "timeDisplay": "41.14"
          },
          {
            "point": 100,
            "seconds": 43.42,
            "timeDisplay": "43.42"
          },
          {
            "point": 10,
            "seconds": 46.33,
            "timeDisplay": "46.33"
          },
          {
            "point": 1,
            "seconds": 46.85,
            "timeDisplay": "46.85"
          }
        ],
        "100_BR": [
          {
            "point": 1100,
            "seconds": 58.31,
            "timeDisplay": "58.31"
          },
          {
            "point": 1000,
            "seconds": 61.1,
            "timeDisplay": "1:01.10"
          },
          {
            "point": 900,
            "seconds": 63.97,
            "timeDisplay": "1:03.97"
          },
          {
            "point": 800,
            "seconds": 66.93,
            "timeDisplay": "1:06.93"
          },
          {
            "point": 700,
            "seconds": 69.99,
            "timeDisplay": "1:09.99"
          },
          {
            "point": 600,
            "seconds": 73.18,
            "timeDisplay": "1:13.18"
          },
          {
            "point": 500,
            "seconds": 76.53,
            "timeDisplay": "1:16.53"
          },
          {
            "point": 400,
            "seconds": 80.07,
            "timeDisplay": "1:20.07"
          },
          {
            "point": 300,
            "seconds": 83.87,
            "timeDisplay": "1:23.87"
          },
          {
            "point": 200,
            "seconds": 88.05,
            "timeDisplay": "1:28.05"
          },
          {
            "point": 100,
            "seconds": 92.91,
            "timeDisplay": "1:32.91"
          },
          {
            "point": 10,
            "seconds": 99.02,
            "timeDisplay": "1:39.02"
          },
          {
            "point": 1,
            "seconds": 100.08,
            "timeDisplay": "1:40.08"
          }
        ],
        "200_BR": [
          {
            "point": 1100,
            "seconds": 124.66,
            "timeDisplay": "2:04.66"
          },
          {
            "point": 1000,
            "seconds": 130.93,
            "timeDisplay": "2:10.93"
          },
          {
            "point": 900,
            "seconds": 137.36,
            "timeDisplay": "2:17.36"
          },
          {
            "point": 800,
            "seconds": 143.97,
            "timeDisplay": "2:23.97"
          },
          {
            "point": 700,
            "seconds": 150.8,
            "timeDisplay": "2:30.80"
          },
          {
            "point": 600,
            "seconds": 157.88,
            "timeDisplay": "2:37.88"
          },
          {
            "point": 500,
            "seconds": 165.27,
            "timeDisplay": "2:45.27"
          },
          {
            "point": 400,
            "seconds": 173.05,
            "timeDisplay": "2:53.05"
          },
          {
            "point": 300,
            "seconds": 181.34,
            "timeDisplay": "3:01.34"
          },
          {
            "point": 200,
            "seconds": 190.39,
            "timeDisplay": "3:10.39"
          },
          {
            "point": 100,
            "seconds": 200.73,
            "timeDisplay": "3:20.73"
          },
          {
            "point": 10,
            "seconds": 213.34,
            "timeDisplay": "3:33.34"
          },
          {
            "point": 1,
            "seconds": 215.38,
            "timeDisplay": "3:35.38"
          }
        ],
        "50_FL": [
          {
            "point": 1100,
            "seconds": 23.27,
            "timeDisplay": "23.27"
          },
          {
            "point": 1000,
            "seconds": 24.33,
            "timeDisplay": "24.33"
          },
          {
            "point": 900,
            "seconds": 25.43,
            "timeDisplay": "25.43"
          },
          {
            "point": 800,
            "seconds": 26.56,
            "timeDisplay": "26.56"
          },
          {
            "point": 700,
            "seconds": 27.73,
            "timeDisplay": "27.73"
          },
          {
            "point": 600,
            "seconds": 28.96,
            "timeDisplay": "28.96"
          },
          {
            "point": 500,
            "seconds": 30.25,
            "timeDisplay": "30.25"
          },
          {
            "point": 400,
            "seconds": 31.63,
            "timeDisplay": "31.63"
          },
          {
            "point": 300,
            "seconds": 33.12,
            "timeDisplay": "33.12"
          },
          {
            "point": 200,
            "seconds": 34.77,
            "timeDisplay": "34.77"
          },
          {
            "point": 100,
            "seconds": 36.71,
            "timeDisplay": "36.71"
          },
          {
            "point": 10,
            "seconds": 39.23,
            "timeDisplay": "39.23"
          },
          {
            "point": 1,
            "seconds": 39.7,
            "timeDisplay": "39.70"
          }
        ],
        "100_FL": [
          {
            "point": 1100,
            "seconds": 51.17,
            "timeDisplay": "51.17"
          },
          {
            "point": 1000,
            "seconds": 53.59,
            "timeDisplay": "53.59"
          },
          {
            "point": 900,
            "seconds": 56.09,
            "timeDisplay": "56.09"
          },
          {
            "point": 800,
            "seconds": 58.66,
            "timeDisplay": "58.66"
          },
          {
            "point": 700,
            "seconds": 61.33,
            "timeDisplay": "1:01.33"
          },
          {
            "point": 600,
            "seconds": 64.11,
            "timeDisplay": "1:04.11"
          },
          {
            "point": 500,
            "seconds": 67.03,
            "timeDisplay": "1:07.03"
          },
          {
            "point": 400,
            "seconds": 70.12,
            "timeDisplay": "1:10.12"
          },
          {
            "point": 300,
            "seconds": 73.44,
            "timeDisplay": "1:13.44"
          },
          {
            "point": 200,
            "seconds": 77.1,
            "timeDisplay": "1:17.10"
          },
          {
            "point": 100,
            "seconds": 81.36,
            "timeDisplay": "1:21.36"
          },
          {
            "point": 10,
            "seconds": 86.77,
            "timeDisplay": "1:26.77"
          },
          {
            "point": 1,
            "seconds": 87.72,
            "timeDisplay": "1:27.72"
          }
        ],
        "200_FL": [
          {
            "point": 1100,
            "seconds": 111.7,
            "timeDisplay": "1:51.70"
          },
          {
            "point": 1000,
            "seconds": 117.43,
            "timeDisplay": "1:57.43"
          },
          {
            "point": 900,
            "seconds": 123.3,
            "timeDisplay": "2:03.30"
          },
          {
            "point": 800,
            "seconds": 129.34,
            "timeDisplay": "2:09.34"
          },
          {
            "point": 700,
            "seconds": 135.56,
            "timeDisplay": "2:15.56"
          },
          {
            "point": 600,
            "seconds": 142.0,
            "timeDisplay": "2:22.00"
          },
          {
            "point": 500,
            "seconds": 148.71,
            "timeDisplay": "2:28.71"
          },
          {
            "point": 400,
            "seconds": 155.75,
            "timeDisplay": "2:35.75"
          },
          {
            "point": 300,
            "seconds": 163.25,
            "timeDisplay": "2:43.25"
          },
          {
            "point": 200,
            "seconds": 171.39,
            "timeDisplay": "2:51.39"
          },
          {
            "point": 100,
            "seconds": 180.64,
            "timeDisplay": "3:00.64"
          },
          {
            "point": 10,
            "seconds": 191.76,
            "timeDisplay": "3:11.76"
          },
          {
            "point": 1,
            "seconds": 193.52,
            "timeDisplay": "3:13.52"
          }
        ],
        "100_IM": [
          {
            "point": 1100,
            "seconds": 53.3,
            "timeDisplay": "53.30"
          },
          {
            "point": 1000,
            "seconds": 55.38,
            "timeDisplay": "55.38"
          },
          {
            "point": 900,
            "seconds": 57.54,
            "timeDisplay": "57.54"
          },
          {
            "point": 800,
            "seconds": 59.8,
            "timeDisplay": "59.80"
          },
          {
            "point": 700,
            "seconds": 62.16,
            "timeDisplay": "1:02.16"
          },
          {
            "point": 600,
            "seconds": 64.66,
            "timeDisplay": "1:04.66"
          },
          {
            "point": 500,
            "seconds": 67.33,
            "timeDisplay": "1:07.33"
          },
          {
            "point": 400,
            "seconds": 70.21,
            "timeDisplay": "1:10.21"
          },
          {
            "point": 300,
            "seconds": 73.38,
            "timeDisplay": "1:13.38"
          },
          {
            "point": 200,
            "seconds": 77.0,
            "timeDisplay": "1:17.00"
          },
          {
            "point": 100,
            "seconds": 81.43,
            "timeDisplay": "1:21.43"
          },
          {
            "point": 10,
            "seconds": 87.78,
            "timeDisplay": "1:27.78"
          },
          {
            "point": 1,
            "seconds": 89.18,
            "timeDisplay": "1:29.18"
          }
        ],
        "200_IM": [
          {
            "point": 1100,
            "seconds": 115.46,
            "timeDisplay": "1:55.46"
          },
          {
            "point": 1000,
            "seconds": 120.11,
            "timeDisplay": "2:00.11"
          },
          {
            "point": 900,
            "seconds": 124.94,
            "timeDisplay": "2:04.94"
          },
          {
            "point": 800,
            "seconds": 129.97,
            "timeDisplay": "2:09.97"
          },
          {
            "point": 700,
            "seconds": 135.23,
            "timeDisplay": "2:15.23"
          },
          {
            "point": 600,
            "seconds": 140.79,
            "timeDisplay": "2:20.79"
          },
          {
            "point": 500,
            "seconds": 146.69,
            "timeDisplay": "2:26.69"
          },
          {
            "point": 400,
            "seconds": 153.05,
            "timeDisplay": "2:33.05"
          },
          {
            "point": 300,
            "seconds": 160.03,
            "timeDisplay": "2:40.03"
          },
          {
            "point": 200,
            "seconds": 167.95,
            "timeDisplay": "2:47.95"
          },
          {
            "point": 100,
            "seconds": 177.56,
            "timeDisplay": "2:57.56"
          },
          {
            "point": 10,
            "seconds": 191.08,
            "timeDisplay": "3:11.08"
          },
          {
            "point": 1,
            "seconds": 193.94,
            "timeDisplay": "3:13.94"
          }
        ],
        "400_IM": [
          {
            "point": 1100,
            "seconds": 241.52,
            "timeDisplay": "4:01.52"
          },
          {
            "point": 1000,
            "seconds": 251.94,
            "timeDisplay": "4:11.94"
          },
          {
            "point": 900,
            "seconds": 262.72,
            "timeDisplay": "4:22.72"
          },
          {
            "point": 800,
            "seconds": 273.91,
            "timeDisplay": "4:33.91"
          },
          {
            "point": 700,
            "seconds": 285.57,
            "timeDisplay": "4:45.57"
          },
          {
            "point": 600,
            "seconds": 297.81,
            "timeDisplay": "4:57.81"
          },
          {
            "point": 500,
            "seconds": 310.75,
            "timeDisplay": "5:10.75"
          },
          {
            "point": 400,
            "seconds": 324.6,
            "timeDisplay": "5:24.60"
          },
          {
            "point": 300,
            "seconds": 339.66,
            "timeDisplay": "5:39.66"
          },
          {
            "point": 200,
            "seconds": 356.55,
            "timeDisplay": "5:56.55"
          },
          {
            "point": 100,
            "seconds": 376.7,
            "timeDisplay": "6:16.70"
          },
          {
            "point": 10,
            "seconds": 403.82,
            "timeDisplay": "6:43.82"
          },
          {
            "point": 1,
            "seconds": 409.12,
            "timeDisplay": "6:49.12"
          }
        ]
      },
      "14": {
        "50_FR": [
          {
            "point": 1100,
            "seconds": 21.22,
            "timeDisplay": "21.22"
          },
          {
            "point": 1000,
            "seconds": 22.17,
            "timeDisplay": "22.17"
          },
          {
            "point": 900,
            "seconds": 23.15,
            "timeDisplay": "23.15"
          },
          {
            "point": 800,
            "seconds": 24.17,
            "timeDisplay": "24.17"
          },
          {
            "point": 700,
            "seconds": 25.22,
            "timeDisplay": "25.22"
          },
          {
            "point": 600,
            "seconds": 26.33,
            "timeDisplay": "26.33"
          },
          {
            "point": 500,
            "seconds": 27.49,
            "timeDisplay": "27.49"
          },
          {
            "point": 400,
            "seconds": 28.73,
            "timeDisplay": "28.73"
          },
          {
            "point": 300,
            "seconds": 30.08,
            "timeDisplay": "30.08"
          },
          {
            "point": 200,
            "seconds": 31.58,
            "timeDisplay": "31.58"
          },
          {
            "point": 100,
            "seconds": 33.35,
            "timeDisplay": "33.35"
          },
          {
            "point": 10,
            "seconds": 35.68,
            "timeDisplay": "35.68"
          },
          {
            "point": 1,
            "seconds": 36.12,
            "timeDisplay": "36.12"
          }
        ],
        "100_FR": [
          {
            "point": 1100,
            "seconds": 46.82,
            "timeDisplay": "46.82"
          },
          {
            "point": 1000,
            "seconds": 48.62,
            "timeDisplay": "48.62"
          },
          {
            "point": 900,
            "seconds": 50.49,
            "timeDisplay": "50.49"
          },
          {
            "point": 800,
            "seconds": 52.44,
            "timeDisplay": "52.44"
          },
          {
            "point": 700,
            "seconds": 54.5,
            "timeDisplay": "54.50"
          },
          {
            "point": 600,
            "seconds": 56.67,
            "timeDisplay": "56.67"
          },
          {
            "point": 500,
            "seconds": 58.97,
            "timeDisplay": "58.97"
          },
          {
            "point": 400,
            "seconds": 61.48,
            "timeDisplay": "1:01.48"
          },
          {
            "point": 300,
            "seconds": 64.26,
            "timeDisplay": "1:04.26"
          },
          {
            "point": 200,
            "seconds": 67.42,
            "timeDisplay": "1:07.42"
          },
          {
            "point": 100,
            "seconds": 71.31,
            "timeDisplay": "1:11.31"
          },
          {
            "point": 10,
            "seconds": 76.95,
            "timeDisplay": "1:16.95"
          },
          {
            "point": 1,
            "seconds": 78.21,
            "timeDisplay": "1:18.21"
          }
        ],
        "200_FR": [
          {
            "point": 1100,
            "seconds": 102.19,
            "timeDisplay": "1:42.19"
          },
          {
            "point": 1000,
            "seconds": 105.6,
            "timeDisplay": "1:45.60"
          },
          {
            "point": 900,
            "seconds": 109.17,
            "timeDisplay": "1:49.17"
          },
          {
            "point": 800,
            "seconds": 112.92,
            "timeDisplay": "1:52.92"
          },
          {
            "point": 700,
            "seconds": 116.9,
            "timeDisplay": "1:56.90"
          },
          {
            "point": 600,
            "seconds": 121.14,
            "timeDisplay": "2:01.14"
          },
          {
            "point": 500,
            "seconds": 125.72,
            "timeDisplay": "2:05.72"
          },
          {
            "point": 400,
            "seconds": 130.74,
            "timeDisplay": "2:10.74"
          },
          {
            "point": 300,
            "seconds": 136.37,
            "timeDisplay": "2:16.37"
          },
          {
            "point": 200,
            "seconds": 142.94,
            "timeDisplay": "2:22.94"
          },
          {
            "point": 100,
            "seconds": 151.31,
            "timeDisplay": "2:31.31"
          },
          {
            "point": 10,
            "seconds": 164.47,
            "timeDisplay": "2:44.47"
          },
          {
            "point": 1,
            "seconds": 167.88,
            "timeDisplay": "2:47.88"
          }
        ],
        "500_FR": [
          {
            "point": 1100,
            "seconds": 271.64,
            "timeDisplay": "4:31.64"
          },
          {
            "point": 1000,
            "seconds": 280.4,
            "timeDisplay": "4:40.40"
          },
          {
            "point": 900,
            "seconds": 289.59,
            "timeDisplay": "4:49.59"
          },
          {
            "point": 800,
            "seconds": 299.26,
            "timeDisplay": "4:59.26"
          },
          {
            "point": 700,
            "seconds": 309.53,
            "timeDisplay": "5:09.53"
          },
          {
            "point": 600,
            "seconds": 320.5,
            "timeDisplay": "5:20.50"
          },
          {
            "point": 500,
            "seconds": 332.38,
            "timeDisplay": "5:32.38"
          },
          {
            "point": 400,
            "seconds": 345.43,
            "timeDisplay": "5:45.43"
          },
          {
            "point": 300,
            "seconds": 360.13,
            "timeDisplay": "6:00.13"
          },
          {
            "point": 200,
            "seconds": 377.37,
            "timeDisplay": "6:17.37"
          },
          {
            "point": 100,
            "seconds": 399.53,
            "timeDisplay": "6:39.53"
          },
          {
            "point": 10,
            "seconds": 435.01,
            "timeDisplay": "7:15.01"
          },
          {
            "point": 1,
            "seconds": 444.49,
            "timeDisplay": "7:24.49"
          }
        ],
        "1000_FR": [
          {
            "point": 1100,
            "seconds": 558.98,
            "timeDisplay": "9:18.98"
          },
          {
            "point": 1000,
            "seconds": 578.87,
            "timeDisplay": "9:38.87"
          },
          {
            "point": 900,
            "seconds": 599.63,
            "timeDisplay": "9:59.63"
          },
          {
            "point": 800,
            "seconds": 621.39,
            "timeDisplay": "10:21.39"
          },
          {
            "point": 700,
            "seconds": 644.31,
            "timeDisplay": "10:44.31"
          },
          {
            "point": 600,
            "seconds": 668.75,
            "timeDisplay": "11:08.75"
          },
          {
            "point": 500,
            "seconds": 694.96,
            "timeDisplay": "11:34.96"
          },
          {
            "point": 400,
            "seconds": 723.52,
            "timeDisplay": "12:03.52"
          },
          {
            "point": 300,
            "seconds": 755.34,
            "timeDisplay": "12:35.34"
          },
          {
            "point": 200,
            "seconds": 792.14,
            "timeDisplay": "13:12.14"
          },
          {
            "point": 100,
            "seconds": 838.29,
            "timeDisplay": "13:58.29"
          },
          {
            "point": 10,
            "seconds": 908.2,
            "timeDisplay": "15:08.20"
          },
          {
            "point": 1,
            "seconds": 925.1,
            "timeDisplay": "15:25.10"
          }
        ],
        "1650_FR": [
          {
            "point": 1100,
            "seconds": 931.13,
            "timeDisplay": "15:31.13"
          },
          {
            "point": 1000,
            "seconds": 965.26,
            "timeDisplay": "16:05.26"
          },
          {
            "point": 900,
            "seconds": 1000.83,
            "timeDisplay": "16:40.83"
          },
          {
            "point": 800,
            "seconds": 1038.07,
            "timeDisplay": "17:18.07"
          },
          {
            "point": 700,
            "seconds": 1077.28,
            "timeDisplay": "17:57.28"
          },
          {
            "point": 600,
            "seconds": 1118.89,
            "timeDisplay": "18:38.89"
          },
          {
            "point": 500,
            "seconds": 1163.47,
            "timeDisplay": "19:23.47"
          },
          {
            "point": 400,
            "seconds": 1211.93,
            "timeDisplay": "20:11.93"
          },
          {
            "point": 300,
            "seconds": 1265.72,
            "timeDisplay": "21:05.72"
          },
          {
            "point": 200,
            "seconds": 1327.65,
            "timeDisplay": "22:07.65"
          },
          {
            "point": 100,
            "seconds": 1404.74,
            "timeDisplay": "23:24.74"
          },
          {
            "point": 10,
            "seconds": 1519.55,
            "timeDisplay": "25:19.55"
          },
          {
            "point": 1,
            "seconds": 1546.37,
            "timeDisplay": "25:46.37"
          }
        ],
        "50_BK": [
          {
            "point": 1100,
            "seconds": 24.45,
            "timeDisplay": "24.45"
          },
          {
            "point": 1000,
            "seconds": 25.41,
            "timeDisplay": "25.41"
          },
          {
            "point": 900,
            "seconds": 26.4,
            "timeDisplay": "26.40"
          },
          {
            "point": 800,
            "seconds": 27.44,
            "timeDisplay": "27.44"
          },
          {
            "point": 700,
            "seconds": 28.52,
            "timeDisplay": "28.52"
          },
          {
            "point": 600,
            "seconds": 29.67,
            "timeDisplay": "29.67"
          },
          {
            "point": 500,
            "seconds": 30.89,
            "timeDisplay": "30.89"
          },
          {
            "point": 400,
            "seconds": 32.2,
            "timeDisplay": "32.20"
          },
          {
            "point": 300,
            "seconds": 33.67,
            "timeDisplay": "33.67"
          },
          {
            "point": 200,
            "seconds": 35.34,
            "timeDisplay": "35.34"
          },
          {
            "point": 100,
            "seconds": 37.36,
            "timeDisplay": "37.36"
          },
          {
            "point": 10,
            "seconds": 40.3,
            "timeDisplay": "40.30"
          },
          {
            "point": 1,
            "seconds": 40.93,
            "timeDisplay": "40.93"
          }
        ],
        "100_BK": [
          {
            "point": 1100,
            "seconds": 51.43,
            "timeDisplay": "51.43"
          },
          {
            "point": 1000,
            "seconds": 53.55,
            "timeDisplay": "53.55"
          },
          {
            "point": 900,
            "seconds": 55.72,
            "timeDisplay": "55.72"
          },
          {
            "point": 800,
            "seconds": 58.01,
            "timeDisplay": "58.01"
          },
          {
            "point": 700,
            "seconds": 60.38,
            "timeDisplay": "1:00.38"
          },
          {
            "point": 600,
            "seconds": 62.88,
            "timeDisplay": "1:02.88"
          },
          {
            "point": 500,
            "seconds": 65.54,
            "timeDisplay": "1:05.54"
          },
          {
            "point": 400,
            "seconds": 68.41,
            "timeDisplay": "1:08.41"
          },
          {
            "point": 300,
            "seconds": 71.54,
            "timeDisplay": "1:11.54"
          },
          {
            "point": 200,
            "seconds": 75.08,
            "timeDisplay": "1:15.08"
          },
          {
            "point": 100,
            "seconds": 79.37,
            "timeDisplay": "1:19.37"
          },
          {
            "point": 10,
            "seconds": 85.33,
            "timeDisplay": "1:25.33"
          },
          {
            "point": 1,
            "seconds": 86.58,
            "timeDisplay": "1:26.58"
          }
        ],
        "200_BK": [
          {
            "point": 1100,
            "seconds": 109.87,
            "timeDisplay": "1:49.87"
          },
          {
            "point": 1000,
            "seconds": 114.88,
            "timeDisplay": "1:54.88"
          },
          {
            "point": 900,
            "seconds": 120.05,
            "timeDisplay": "2:00.05"
          },
          {
            "point": 800,
            "seconds": 125.39,
            "timeDisplay": "2:05.39"
          },
          {
            "point": 700,
            "seconds": 130.94,
            "timeDisplay": "2:10.94"
          },
          {
            "point": 600,
            "seconds": 136.74,
            "timeDisplay": "2:16.74"
          },
          {
            "point": 500,
            "seconds": 142.85,
            "timeDisplay": "2:22.85"
          },
          {
            "point": 400,
            "seconds": 149.35,
            "timeDisplay": "2:29.35"
          },
          {
            "point": 300,
            "seconds": 156.36,
            "timeDisplay": "2:36.36"
          },
          {
            "point": 200,
            "seconds": 164.16,
            "timeDisplay": "2:44.16"
          },
          {
            "point": 100,
            "seconds": 173.32,
            "timeDisplay": "2:53.32"
          },
          {
            "point": 10,
            "seconds": 185.23,
            "timeDisplay": "3:05.23"
          },
          {
            "point": 1,
            "seconds": 187.41,
            "timeDisplay": "3:07.41"
          }
        ],
        "50_BR": [
          {
            "point": 1100,
            "seconds": 26.93,
            "timeDisplay": "26.93"
          },
          {
            "point": 1000,
            "seconds": 28.19,
            "timeDisplay": "28.19"
          },
          {
            "point": 900,
            "seconds": 29.49,
            "timeDisplay": "29.49"
          },
          {
            "point": 800,
            "seconds": 30.84,
            "timeDisplay": "30.84"
          },
          {
            "point": 700,
            "seconds": 32.23,
            "timeDisplay": "32.23"
          },
          {
            "point": 600,
            "seconds": 33.68,
            "timeDisplay": "33.68"
          },
          {
            "point": 500,
            "seconds": 35.21,
            "timeDisplay": "35.21"
          },
          {
            "point": 400,
            "seconds": 36.82,
            "timeDisplay": "36.82"
          },
          {
            "point": 300,
            "seconds": 38.56,
            "timeDisplay": "38.56"
          },
          {
            "point": 200,
            "seconds": 40.5,
            "timeDisplay": "40.50"
          },
          {
            "point": 100,
            "seconds": 42.74,
            "timeDisplay": "42.74"
          },
          {
            "point": 10,
            "seconds": 45.6,
            "timeDisplay": "45.60"
          },
          {
            "point": 1,
            "seconds": 46.12,
            "timeDisplay": "46.12"
          }
        ],
        "100_BR": [
          {
            "point": 1100,
            "seconds": 57.38,
            "timeDisplay": "57.38"
          },
          {
            "point": 1000,
            "seconds": 60.12,
            "timeDisplay": "1:00.12"
          },
          {
            "point": 900,
            "seconds": 62.94,
            "timeDisplay": "1:02.94"
          },
          {
            "point": 800,
            "seconds": 65.86,
            "timeDisplay": "1:05.86"
          },
          {
            "point": 700,
            "seconds": 68.88,
            "timeDisplay": "1:08.88"
          },
          {
            "point": 600,
            "seconds": 72.02,
            "timeDisplay": "1:12.02"
          },
          {
            "point": 500,
            "seconds": 75.32,
            "timeDisplay": "1:15.32"
          },
          {
            "point": 400,
            "seconds": 78.8,
            "timeDisplay": "1:18.80"
          },
          {
            "point": 300,
            "seconds": 82.52,
            "timeDisplay": "1:22.52"
          },
          {
            "point": 200,
            "seconds": 86.64,
            "timeDisplay": "1:26.64"
          },
          {
            "point": 100,
            "seconds": 91.44,
            "timeDisplay": "1:31.44"
          },
          {
            "point": 10,
            "seconds": 97.4,
            "timeDisplay": "1:37.40"
          },
          {
            "point": 1,
            "seconds": 98.52,
            "timeDisplay": "1:38.52"
          }
        ],
        "200_BR": [
          {
            "point": 1100,
            "seconds": 122.9,
            "timeDisplay": "2:02.90"
          },
          {
            "point": 1000,
            "seconds": 129.07,
            "timeDisplay": "2:09.07"
          },
          {
            "point": 900,
            "seconds": 135.41,
            "timeDisplay": "2:15.41"
          },
          {
            "point": 800,
            "seconds": 141.93,
            "timeDisplay": "2:21.93"
          },
          {
            "point": 700,
            "seconds": 148.66,
            "timeDisplay": "2:28.66"
          },
          {
            "point": 600,
            "seconds": 155.64,
            "timeDisplay": "2:35.64"
          },
          {
            "point": 500,
            "seconds": 162.93,
            "timeDisplay": "2:42.93"
          },
          {
            "point": 400,
            "seconds": 170.59,
            "timeDisplay": "2:50.59"
          },
          {
            "point": 300,
            "seconds": 178.77,
            "timeDisplay": "2:58.77"
          },
          {
            "point": 200,
            "seconds": 187.69,
            "timeDisplay": "3:07.69"
          },
          {
            "point": 100,
            "seconds": 197.89,
            "timeDisplay": "3:17.89"
          },
          {
            "point": 10,
            "seconds": 210.31,
            "timeDisplay": "3:30.31"
          },
          {
            "point": 1,
            "seconds": 212.33,
            "timeDisplay": "3:32.33"
          }
        ],
        "50_FL": [
          {
            "point": 1100,
            "seconds": 22.77,
            "timeDisplay": "22.77"
          },
          {
            "point": 1000,
            "seconds": 23.81,
            "timeDisplay": "23.81"
          },
          {
            "point": 900,
            "seconds": 24.88,
            "timeDisplay": "24.88"
          },
          {
            "point": 800,
            "seconds": 25.98,
            "timeDisplay": "25.98"
          },
          {
            "point": 700,
            "seconds": 27.14,
            "timeDisplay": "27.14"
          },
          {
            "point": 600,
            "seconds": 28.34,
            "timeDisplay": "28.34"
          },
          {
            "point": 500,
            "seconds": 29.61,
            "timeDisplay": "29.61"
          },
          {
            "point": 400,
            "seconds": 30.96,
            "timeDisplay": "30.96"
          },
          {
            "point": 300,
            "seconds": 32.41,
            "timeDisplay": "32.41"
          },
          {
            "point": 200,
            "seconds": 34.03,
            "timeDisplay": "34.03"
          },
          {
            "point": 100,
            "seconds": 35.92,
            "timeDisplay": "35.92"
          },
          {
            "point": 10,
            "seconds": 38.4,
            "timeDisplay": "38.40"
          },
          {
            "point": 1,
            "seconds": 38.86,
            "timeDisplay": "38.86"
          }
        ],
        "100_FL": [
          {
            "point": 1100,
            "seconds": 50.07,
            "timeDisplay": "50.07"
          },
          {
            "point": 1000,
            "seconds": 52.45,
            "timeDisplay": "52.45"
          },
          {
            "point": 900,
            "seconds": 54.9,
            "timeDisplay": "54.90"
          },
          {
            "point": 800,
            "seconds": 57.4,
            "timeDisplay": "57.40"
          },
          {
            "point": 700,
            "seconds": 60.03,
            "timeDisplay": "1:00.03"
          },
          {
            "point": 600,
            "seconds": 62.75,
            "timeDisplay": "1:02.75"
          },
          {
            "point": 500,
            "seconds": 65.6,
            "timeDisplay": "1:05.60"
          },
          {
            "point": 400,
            "seconds": 68.62,
            "timeDisplay": "1:08.62"
          },
          {
            "point": 300,
            "seconds": 71.88,
            "timeDisplay": "1:11.88"
          },
          {
            "point": 200,
            "seconds": 75.45,
            "timeDisplay": "1:15.45"
          },
          {
            "point": 100,
            "seconds": 79.63,
            "timeDisplay": "1:19.63"
          },
          {
            "point": 10,
            "seconds": 84.85,
            "timeDisplay": "1:24.85"
          },
          {
            "point": 1,
            "seconds": 85.86,
            "timeDisplay": "1:25.86"
          }
        ],
        "200_FL": [
          {
            "point": 1100,
            "seconds": 109.05,
            "timeDisplay": "1:49.05"
          },
          {
            "point": 1000,
            "seconds": 114.65,
            "timeDisplay": "1:54.65"
          },
          {
            "point": 900,
            "seconds": 120.35,
            "timeDisplay": "2:00.35"
          },
          {
            "point": 800,
            "seconds": 126.25,
            "timeDisplay": "2:06.25"
          },
          {
            "point": 700,
            "seconds": 132.3,
            "timeDisplay": "2:12.30"
          },
          {
            "point": 600,
            "seconds": 138.6,
            "timeDisplay": "2:18.60"
          },
          {
            "point": 500,
            "seconds": 145.15,
            "timeDisplay": "2:25.15"
          },
          {
            "point": 400,
            "seconds": 152.05,
            "timeDisplay": "2:32.05"
          },
          {
            "point": 300,
            "seconds": 159.35,
            "timeDisplay": "2:39.35"
          },
          {
            "point": 200,
            "seconds": 167.3,
            "timeDisplay": "2:47.30"
          },
          {
            "point": 100,
            "seconds": 176.3,
            "timeDisplay": "2:56.30"
          },
          {
            "point": 10,
            "seconds": 187.15,
            "timeDisplay": "3:07.15"
          },
          {
            "point": 1,
            "seconds": 188.95,
            "timeDisplay": "3:08.95"
          }
        ],
        "100_IM": [
          {
            "point": 1100,
            "seconds": 52.17,
            "timeDisplay": "52.17"
          },
          {
            "point": 1000,
            "seconds": 54.2,
            "timeDisplay": "54.20"
          },
          {
            "point": 900,
            "seconds": 56.331,
            "timeDisplay": "56.33"
          },
          {
            "point": 800,
            "seconds": 58.52,
            "timeDisplay": "58.52"
          },
          {
            "point": 700,
            "seconds": 60.85,
            "timeDisplay": "1:00.85"
          },
          {
            "point": 600,
            "seconds": 63.3,
            "timeDisplay": "1:03.30"
          },
          {
            "point": 500,
            "seconds": 65.91,
            "timeDisplay": "1:05.91"
          },
          {
            "point": 400,
            "seconds": 68.72,
            "timeDisplay": "1:08.72"
          },
          {
            "point": 300,
            "seconds": 71.83,
            "timeDisplay": "1:11.83"
          },
          {
            "point": 200,
            "seconds": 75.38,
            "timeDisplay": "1:15.38"
          },
          {
            "point": 100,
            "seconds": 79.7,
            "timeDisplay": "1:19.70"
          },
          {
            "point": 10,
            "seconds": 85.85,
            "timeDisplay": "1:25.85"
          },
          {
            "point": 1,
            "seconds": 87.33,
            "timeDisplay": "1:27.33"
          }
        ],
        "200_IM": [
          {
            "point": 1100,
            "seconds": 113.0,
            "timeDisplay": "1:53.00"
          },
          {
            "point": 1000,
            "seconds": 117.58,
            "timeDisplay": "1:57.58"
          },
          {
            "point": 900,
            "seconds": 122.3,
            "timeDisplay": "2:02.30"
          },
          {
            "point": 800,
            "seconds": 127.2,
            "timeDisplay": "2:07.20"
          },
          {
            "point": 700,
            "seconds": 132.38,
            "timeDisplay": "2:12.38"
          },
          {
            "point": 600,
            "seconds": 137.83,
            "timeDisplay": "2:17.83"
          },
          {
            "point": 500,
            "seconds": 143.61,
            "timeDisplay": "2:23.61"
          },
          {
            "point": 400,
            "seconds": 149.8,
            "timeDisplay": "2:29.80"
          },
          {
            "point": 300,
            "seconds": 156.66,
            "timeDisplay": "2:36.66"
          },
          {
            "point": 200,
            "seconds": 164.4,
            "timeDisplay": "2:44.40"
          },
          {
            "point": 100,
            "seconds": 173.85,
            "timeDisplay": "2:53.85"
          },
          {
            "point": 10,
            "seconds": 187.0,
            "timeDisplay": "3:07.00"
          },
          {
            "point": 1,
            "seconds": 189.88,
            "timeDisplay": "3:09.88"
          }
        ],
        "400_IM": [
          {
            "point": 1100,
            "seconds": 236.68,
            "timeDisplay": "3:56.68"
          },
          {
            "point": 1000,
            "seconds": 246.85,
            "timeDisplay": "4:06.85"
          },
          {
            "point": 900,
            "seconds": 257.5,
            "timeDisplay": "4:17.50"
          },
          {
            "point": 800,
            "seconds": 268.45,
            "timeDisplay": "4:28.45"
          },
          {
            "point": 700,
            "seconds": 279.9,
            "timeDisplay": "4:39.90"
          },
          {
            "point": 600,
            "seconds": 291.8,
            "timeDisplay": "4:51.80"
          },
          {
            "point": 500,
            "seconds": 304.5,
            "timeDisplay": "5:04.50"
          },
          {
            "point": 400,
            "seconds": 318.15,
            "timeDisplay": "5:18.15"
          },
          {
            "point": 300,
            "seconds": 332.85,
            "timeDisplay": "5:32.85"
          },
          {
            "point": 200,
            "seconds": 349.35,
            "timeDisplay": "5:49.35"
          },
          {
            "point": 100,
            "seconds": 369.21,
            "timeDisplay": "6:09.21"
          },
          {
            "point": 10,
            "seconds": 395.75,
            "timeDisplay": "6:35.75"
          },
          {
            "point": 1,
            "seconds": 401.0,
            "timeDisplay": "6:41.00"
          }
        ]
      }
    }
  },
  "LCM": {
    "Boy": {
      "9&U": {
        "50_FR": [
          {
            "point": 1100,
            "seconds": 27.5,
            "timeDisplay": "27.50"
          },
          {
            "point": 1000,
            "seconds": 29.31,
            "timeDisplay": "29.31"
          },
          {
            "point": 900,
            "seconds": 31.16,
            "timeDisplay": "31.16"
          },
          {
            "point": 800,
            "seconds": 33.05,
            "timeDisplay": "33.05"
          },
          {
            "point": 700,
            "seconds": 35.0,
            "timeDisplay": "35.00"
          },
          {
            "point": 600,
            "seconds": 37.02,
            "timeDisplay": "37.02"
          },
          {
            "point": 500,
            "seconds": 39.11,
            "timeDisplay": "39.11"
          },
          {
            "point": 400,
            "seconds": 41.3,
            "timeDisplay": "41.30"
          },
          {
            "point": 300,
            "seconds": 43.61,
            "timeDisplay": "43.61"
          },
          {
            "point": 200,
            "seconds": 46.11,
            "timeDisplay": "46.11"
          },
          {
            "point": 100,
            "seconds": 48.93,
            "timeDisplay": "48.93"
          },
          {
            "point": 10,
            "seconds": 52.24,
            "timeDisplay": "52.24"
          },
          {
            "point": 1,
            "seconds": 52.75,
            "timeDisplay": "52.75"
          }
        ],
        "100_FR": [
          {
            "point": 1100,
            "seconds": 62.34,
            "timeDisplay": "1:02.34"
          },
          {
            "point": 1000,
            "seconds": 65.63,
            "timeDisplay": "1:05.63"
          },
          {
            "point": 900,
            "seconds": 69.03,
            "timeDisplay": "1:09.03"
          },
          {
            "point": 800,
            "seconds": 72.56,
            "timeDisplay": "1:12.56"
          },
          {
            "point": 700,
            "seconds": 76.25,
            "timeDisplay": "1:16.25"
          },
          {
            "point": 600,
            "seconds": 80.11,
            "timeDisplay": "1:20.11"
          },
          {
            "point": 500,
            "seconds": 84.21,
            "timeDisplay": "1:24.21"
          },
          {
            "point": 400,
            "seconds": 88.59,
            "timeDisplay": "1:28.59"
          },
          {
            "point": 300,
            "seconds": 93.37,
            "timeDisplay": "1:33.37"
          },
          {
            "point": 200,
            "seconds": 98.73,
            "timeDisplay": "1:38.73"
          },
          {
            "point": 100,
            "seconds": 105.14,
            "timeDisplay": "1:45.14"
          },
          {
            "point": 10,
            "seconds": 113.82,
            "timeDisplay": "1:53.82"
          },
          {
            "point": 1,
            "seconds": 115.53,
            "timeDisplay": "1:55.53"
          }
        ],
        "200_FR": [
          {
            "point": 1100,
            "seconds": 137.89,
            "timeDisplay": "2:17.89"
          },
          {
            "point": 1000,
            "seconds": 144.19,
            "timeDisplay": "2:24.19"
          },
          {
            "point": 900,
            "seconds": 150.76,
            "timeDisplay": "2:30.76"
          },
          {
            "point": 800,
            "seconds": 157.61,
            "timeDisplay": "2:37.61"
          },
          {
            "point": 700,
            "seconds": 164.85,
            "timeDisplay": "2:44.85"
          },
          {
            "point": 600,
            "seconds": 172.48,
            "timeDisplay": "2:52.48"
          },
          {
            "point": 500,
            "seconds": 180.74,
            "timeDisplay": "3:00.74"
          },
          {
            "point": 400,
            "seconds": 189.61,
            "timeDisplay": "3:09.61"
          },
          {
            "point": 300,
            "seconds": 199.47,
            "timeDisplay": "3:19.47"
          },
          {
            "point": 200,
            "seconds": 210.79,
            "timeDisplay": "3:30.79"
          },
          {
            "point": 100,
            "seconds": 224.84,
            "timeDisplay": "3:44.84"
          },
          {
            "point": 10,
            "seconds": 245.58,
            "timeDisplay": "4:05.58"
          },
          {
            "point": 1,
            "seconds": 250.24,
            "timeDisplay": "4:10.24"
          }
        ],
        "400_FR": [
          {
            "point": 1100,
            "seconds": 299.49,
            "timeDisplay": "4:59.49"
          },
          {
            "point": 1000,
            "seconds": 313.41,
            "timeDisplay": "5:13.41"
          },
          {
            "point": 900,
            "seconds": 327.89,
            "timeDisplay": "5:27.89"
          },
          {
            "point": 800,
            "seconds": 343.01,
            "timeDisplay": "5:43.01"
          },
          {
            "point": 700,
            "seconds": 358.92,
            "timeDisplay": "5:58.92"
          },
          {
            "point": 600,
            "seconds": 375.77,
            "timeDisplay": "6:15.77"
          },
          {
            "point": 500,
            "seconds": 393.77,
            "timeDisplay": "6:33.77"
          },
          {
            "point": 400,
            "seconds": 413.27,
            "timeDisplay": "6:53.27"
          },
          {
            "point": 300,
            "seconds": 434.87,
            "timeDisplay": "7:14.87"
          },
          {
            "point": 200,
            "seconds": 459.6,
            "timeDisplay": "7:39.60"
          },
          {
            "point": 100,
            "seconds": 490.31,
            "timeDisplay": "8:10.31"
          },
          {
            "point": 10,
            "seconds": 534.79,
            "timeDisplay": "8:54.79"
          },
          {
            "point": 1,
            "seconds": 544.92,
            "timeDisplay": "9:04.92"
          }
        ],
        "50_BK": [
          {
            "point": 1100,
            "seconds": 33.23,
            "timeDisplay": "33.23"
          },
          {
            "point": 1000,
            "seconds": 35.02,
            "timeDisplay": "35.02"
          },
          {
            "point": 900,
            "seconds": 36.86,
            "timeDisplay": "36.86"
          },
          {
            "point": 800,
            "seconds": 38.77,
            "timeDisplay": "38.77"
          },
          {
            "point": 700,
            "seconds": 40.77,
            "timeDisplay": "40.77"
          },
          {
            "point": 600,
            "seconds": 42.86,
            "timeDisplay": "42.86"
          },
          {
            "point": 500,
            "seconds": 45.07,
            "timeDisplay": "45.07"
          },
          {
            "point": 400,
            "seconds": 47.43,
            "timeDisplay": "47.43"
          },
          {
            "point": 300,
            "seconds": 50.0,
            "timeDisplay": "50.00"
          },
          {
            "point": 200,
            "seconds": 52.87,
            "timeDisplay": "52.87"
          },
          {
            "point": 100,
            "seconds": 56.29,
            "timeDisplay": "56.29"
          },
          {
            "point": 10,
            "seconds": 60.87,
            "timeDisplay": "1:00.87"
          },
          {
            "point": 1,
            "seconds": 62.01,
            "timeDisplay": "1:02.01"
          }
        ],
        "100_BK": [
          {
            "point": 1100,
            "seconds": 72.19,
            "timeDisplay": "1:12.19"
          },
          {
            "point": 1000,
            "seconds": 76.06,
            "timeDisplay": "1:16.06"
          },
          {
            "point": 900,
            "seconds": 80.07,
            "timeDisplay": "1:20.07"
          },
          {
            "point": 800,
            "seconds": 84.23,
            "timeDisplay": "1:24.23"
          },
          {
            "point": 700,
            "seconds": 88.56,
            "timeDisplay": "1:28.56"
          },
          {
            "point": 600,
            "seconds": 93.1,
            "timeDisplay": "1:33.10"
          },
          {
            "point": 500,
            "seconds": 97.91,
            "timeDisplay": "1:37.91"
          },
          {
            "point": 400,
            "seconds": 103.04,
            "timeDisplay": "1:43.04"
          },
          {
            "point": 300,
            "seconds": 108.6,
            "timeDisplay": "1:48.60"
          },
          {
            "point": 200,
            "seconds": 114.84,
            "timeDisplay": "1:54.84"
          },
          {
            "point": 100,
            "seconds": 122.28,
            "timeDisplay": "2:02.28"
          },
          {
            "point": 10,
            "seconds": 132.2,
            "timeDisplay": "2:12.20"
          },
          {
            "point": 1,
            "seconds": 134.14,
            "timeDisplay": "2:14.14"
          }
        ],
        "50_BR": [
          {
            "point": 1100,
            "seconds": 37.83,
            "timeDisplay": "37.83"
          },
          {
            "point": 1000,
            "seconds": 39.9,
            "timeDisplay": "39.90"
          },
          {
            "point": 900,
            "seconds": 42.03,
            "timeDisplay": "42.03"
          },
          {
            "point": 800,
            "seconds": 44.25,
            "timeDisplay": "44.25"
          },
          {
            "point": 700,
            "seconds": 46.55,
            "timeDisplay": "46.55"
          },
          {
            "point": 600,
            "seconds": 48.97,
            "timeDisplay": "48.97"
          },
          {
            "point": 500,
            "seconds": 51.51,
            "timeDisplay": "51.51"
          },
          {
            "point": 400,
            "seconds": 54.23,
            "timeDisplay": "54.23"
          },
          {
            "point": 300,
            "seconds": 57.17,
            "timeDisplay": "57.17"
          },
          {
            "point": 200,
            "seconds": 60.46,
            "timeDisplay": "1:00.46"
          },
          {
            "point": 100,
            "seconds": 64.36,
            "timeDisplay": "1:04.36"
          },
          {
            "point": 10,
            "seconds": 69.51,
            "timeDisplay": "1:09.51"
          },
          {
            "point": 1,
            "seconds": 70.49,
            "timeDisplay": "1:10.49"
          }
        ],
        "100_BR": [
          {
            "point": 1100,
            "seconds": 81.83,
            "timeDisplay": "1:21.83"
          },
          {
            "point": 1000,
            "seconds": 86.56,
            "timeDisplay": "1:26.56"
          },
          {
            "point": 900,
            "seconds": 91.39,
            "timeDisplay": "1:31.39"
          },
          {
            "point": 800,
            "seconds": 96.4,
            "timeDisplay": "1:36.40"
          },
          {
            "point": 700,
            "seconds": 101.56,
            "timeDisplay": "1:41.56"
          },
          {
            "point": 600,
            "seconds": 107.0,
            "timeDisplay": "1:47.00"
          },
          {
            "point": 500,
            "seconds": 112.69,
            "timeDisplay": "1:52.69"
          },
          {
            "point": 400,
            "seconds": 118.74,
            "timeDisplay": "1:58.74"
          },
          {
            "point": 300,
            "seconds": 125.25,
            "timeDisplay": "2:05.25"
          },
          {
            "point": 200,
            "seconds": 132.43,
            "timeDisplay": "2:12.43"
          },
          {
            "point": 100,
            "seconds": 140.87,
            "timeDisplay": "2:20.87"
          },
          {
            "point": 10,
            "seconds": 151.7,
            "timeDisplay": "2:31.70"
          },
          {
            "point": 1,
            "seconds": 153.64,
            "timeDisplay": "2:33.64"
          }
        ],
        "50_FL": [
          {
            "point": 1100,
            "seconds": 31.63,
            "timeDisplay": "31.63"
          },
          {
            "point": 1000,
            "seconds": 33.26,
            "timeDisplay": "33.26"
          },
          {
            "point": 900,
            "seconds": 34.94,
            "timeDisplay": "34.94"
          },
          {
            "point": 800,
            "seconds": 36.69,
            "timeDisplay": "36.69"
          },
          {
            "point": 700,
            "seconds": 38.52,
            "timeDisplay": "38.52"
          },
          {
            "point": 600,
            "seconds": 40.45,
            "timeDisplay": "40.45"
          },
          {
            "point": 500,
            "seconds": 42.49,
            "timeDisplay": "42.49"
          },
          {
            "point": 400,
            "seconds": 44.67,
            "timeDisplay": "44.67"
          },
          {
            "point": 300,
            "seconds": 47.07,
            "timeDisplay": "47.07"
          },
          {
            "point": 200,
            "seconds": 49.77,
            "timeDisplay": "49.77"
          },
          {
            "point": 100,
            "seconds": 53.02,
            "timeDisplay": "53.02"
          },
          {
            "point": 10,
            "seconds": 57.49,
            "timeDisplay": "57.49"
          },
          {
            "point": 1,
            "seconds": 58.41,
            "timeDisplay": "58.41"
          }
        ],
        "100_FL": [
          {
            "point": 1100,
            "seconds": 72.18,
            "timeDisplay": "1:12.18"
          },
          {
            "point": 1000,
            "seconds": 76.1,
            "timeDisplay": "1:16.10"
          },
          {
            "point": 900,
            "seconds": 80.17,
            "timeDisplay": "1:20.17"
          },
          {
            "point": 800,
            "seconds": 84.44,
            "timeDisplay": "1:24.44"
          },
          {
            "point": 700,
            "seconds": 88.93,
            "timeDisplay": "1:28.93"
          },
          {
            "point": 600,
            "seconds": 93.69,
            "timeDisplay": "1:33.69"
          },
          {
            "point": 500,
            "seconds": 98.79,
            "timeDisplay": "1:38.79"
          },
          {
            "point": 400,
            "seconds": 104.33,
            "timeDisplay": "1:44.33"
          },
          {
            "point": 300,
            "seconds": 110.47,
            "timeDisplay": "1:50.47"
          },
          {
            "point": 200,
            "seconds": 117.54,
            "timeDisplay": "1:57.54"
          },
          {
            "point": 100,
            "seconds": 126.32,
            "timeDisplay": "2:06.32"
          },
          {
            "point": 10,
            "seconds": 139.32,
            "timeDisplay": "2:19.32"
          },
          {
            "point": 1,
            "seconds": 142.35,
            "timeDisplay": "2:22.35"
          }
        ],
        "200_IM": [
          {
            "point": 1100,
            "seconds": 158.35,
            "timeDisplay": "2:38.35"
          },
          {
            "point": 1000,
            "seconds": 165.76,
            "timeDisplay": "2:45.76"
          },
          {
            "point": 900,
            "seconds": 173.48,
            "timeDisplay": "2:53.48"
          },
          {
            "point": 800,
            "seconds": 181.54,
            "timeDisplay": "3:01.54"
          },
          {
            "point": 700,
            "seconds": 190.01,
            "timeDisplay": "3:10.01"
          },
          {
            "point": 600,
            "seconds": 198.97,
            "timeDisplay": "3:18.97"
          },
          {
            "point": 500,
            "seconds": 208.54,
            "timeDisplay": "3:28.54"
          },
          {
            "point": 400,
            "seconds": 218.91,
            "timeDisplay": "3:38.91"
          },
          {
            "point": 300,
            "seconds": 230.37,
            "timeDisplay": "3:50.37"
          },
          {
            "point": 200,
            "seconds": 243.48,
            "timeDisplay": "4:03.48"
          },
          {
            "point": 100,
            "seconds": 259.65,
            "timeDisplay": "4:19.65"
          },
          {
            "point": 10,
            "seconds": 283.16,
            "timeDisplay": "4:43.16"
          },
          {
            "point": 1,
            "seconds": 288.45,
            "timeDisplay": "4:48.45"
          }
        ]
      },
      "10": {
        "50_FR": [
          {
            "point": 1100,
            "seconds": 26.0,
            "timeDisplay": "26.00"
          },
          {
            "point": 1000,
            "seconds": 27.71,
            "timeDisplay": "27.71"
          },
          {
            "point": 900,
            "seconds": 29.46,
            "timeDisplay": "29.46"
          },
          {
            "point": 800,
            "seconds": 31.25,
            "timeDisplay": "31.25"
          },
          {
            "point": 700,
            "seconds": 33.1,
            "timeDisplay": "33.10"
          },
          {
            "point": 600,
            "seconds": 35.0,
            "timeDisplay": "35.00"
          },
          {
            "point": 500,
            "seconds": 36.98,
            "timeDisplay": "36.98"
          },
          {
            "point": 400,
            "seconds": 39.05,
            "timeDisplay": "39.05"
          },
          {
            "point": 300,
            "seconds": 41.24,
            "timeDisplay": "41.24"
          },
          {
            "point": 200,
            "seconds": 43.6,
            "timeDisplay": "43.60"
          },
          {
            "point": 100,
            "seconds": 46.27,
            "timeDisplay": "46.27"
          },
          {
            "point": 10,
            "seconds": 49.4,
            "timeDisplay": "49.40"
          },
          {
            "point": 1,
            "seconds": 49.88,
            "timeDisplay": "49.88"
          }
        ],
        "100_FR": [
          {
            "point": 1100,
            "seconds": 58.48,
            "timeDisplay": "58.48"
          },
          {
            "point": 1000,
            "seconds": 61.57,
            "timeDisplay": "1:01.57"
          },
          {
            "point": 900,
            "seconds": 64.76,
            "timeDisplay": "1:04.76"
          },
          {
            "point": 800,
            "seconds": 68.07,
            "timeDisplay": "1:08.07"
          },
          {
            "point": 700,
            "seconds": 71.53,
            "timeDisplay": "1:11.53"
          },
          {
            "point": 600,
            "seconds": 75.15,
            "timeDisplay": "1:15.15"
          },
          {
            "point": 500,
            "seconds": 78.99,
            "timeDisplay": "1:18.99"
          },
          {
            "point": 400,
            "seconds": 83.1,
            "timeDisplay": "1:23.10"
          },
          {
            "point": 300,
            "seconds": 87.58,
            "timeDisplay": "1:27.58"
          },
          {
            "point": 200,
            "seconds": 92.61,
            "timeDisplay": "1:32.61"
          },
          {
            "point": 100,
            "seconds": 98.62,
            "timeDisplay": "1:38.62"
          },
          {
            "point": 10,
            "seconds": 106.76,
            "timeDisplay": "1:46.76"
          },
          {
            "point": 1,
            "seconds": 108.37,
            "timeDisplay": "1:48.37"
          }
        ],
        "200_FR": [
          {
            "point": 1100,
            "seconds": 128.71,
            "timeDisplay": "2:08.71"
          },
          {
            "point": 1000,
            "seconds": 134.59,
            "timeDisplay": "2:14.59"
          },
          {
            "point": 900,
            "seconds": 140.72,
            "timeDisplay": "2:20.72"
          },
          {
            "point": 800,
            "seconds": 147.13,
            "timeDisplay": "2:27.13"
          },
          {
            "point": 700,
            "seconds": 153.88,
            "timeDisplay": "2:33.88"
          },
          {
            "point": 600,
            "seconds": 161.03,
            "timeDisplay": "2:41.03"
          },
          {
            "point": 500,
            "seconds": 168.68,
            "timeDisplay": "2:48.68"
          },
          {
            "point": 400,
            "seconds": 176.98,
            "timeDisplay": "2:56.98"
          },
          {
            "point": 300,
            "seconds": 186.19,
            "timeDisplay": "3:06.19"
          },
          {
            "point": 200,
            "seconds": 196.76,
            "timeDisplay": "3:16.76"
          },
          {
            "point": 100,
            "seconds": 209.87,
            "timeDisplay": "3:29.87"
          },
          {
            "point": 10,
            "seconds": 229.2,
            "timeDisplay": "3:49.20"
          },
          {
            "point": 1,
            "seconds": 233.66,
            "timeDisplay": "3:53.66"
          }
        ],
        "400_FR": [
          {
            "point": 1100,
            "seconds": 273.56,
            "timeDisplay": "4:33.56"
          },
          {
            "point": 1000,
            "seconds": 286.27,
            "timeDisplay": "4:46.27"
          },
          {
            "point": 900,
            "seconds": 299.49,
            "timeDisplay": "4:59.49"
          },
          {
            "point": 800,
            "seconds": 313.32,
            "timeDisplay": "5:13.32"
          },
          {
            "point": 700,
            "seconds": 327.85,
            "timeDisplay": "5:27.85"
          },
          {
            "point": 600,
            "seconds": 343.23,
            "timeDisplay": "5:43.23"
          },
          {
            "point": 500,
            "seconds": 359.68,
            "timeDisplay": "5:59.68"
          },
          {
            "point": 400,
            "seconds": 377.5,
            "timeDisplay": "6:17.50"
          },
          {
            "point": 300,
            "seconds": 397.22,
            "timeDisplay": "6:37.22"
          },
          {
            "point": 200,
            "seconds": 419.81,
            "timeDisplay": "6:59.81"
          },
          {
            "point": 100,
            "seconds": 447.72,
            "timeDisplay": "7:27.72"
          },
          {
            "point": 10,
            "seconds": 488.5,
            "timeDisplay": "8:08.50"
          },
          {
            "point": 1,
            "seconds": 497.74,
            "timeDisplay": "8:17.74"
          }
        ],
        "50_BK": [
          {
            "point": 1100,
            "seconds": 31.21,
            "timeDisplay": "31.21"
          },
          {
            "point": 1000,
            "seconds": 32.88,
            "timeDisplay": "32.88"
          },
          {
            "point": 900,
            "seconds": 34.62,
            "timeDisplay": "34.62"
          },
          {
            "point": 800,
            "seconds": 36.41,
            "timeDisplay": "36.41"
          },
          {
            "point": 700,
            "seconds": 38.29,
            "timeDisplay": "38.29"
          },
          {
            "point": 600,
            "seconds": 40.25,
            "timeDisplay": "40.25"
          },
          {
            "point": 500,
            "seconds": 42.32,
            "timeDisplay": "42.32"
          },
          {
            "point": 400,
            "seconds": 44.54,
            "timeDisplay": "44.54"
          },
          {
            "point": 300,
            "seconds": 46.95,
            "timeDisplay": "46.95"
          },
          {
            "point": 200,
            "seconds": 49.65,
            "timeDisplay": "49.65"
          },
          {
            "point": 100,
            "seconds": 52.86,
            "timeDisplay": "52.86"
          },
          {
            "point": 10,
            "seconds": 57.16,
            "timeDisplay": "57.16"
          },
          {
            "point": 1,
            "seconds": 58.0,
            "timeDisplay": "58.00"
          }
        ],
        "100_BK": [
          {
            "point": 1100,
            "seconds": 67.72,
            "timeDisplay": "1:07.72"
          },
          {
            "point": 1000,
            "seconds": 71.36,
            "timeDisplay": "1:11.36"
          },
          {
            "point": 900,
            "seconds": 75.12,
            "timeDisplay": "1:15.12"
          },
          {
            "point": 800,
            "seconds": 79.01,
            "timeDisplay": "1:19.01"
          },
          {
            "point": 700,
            "seconds": 83.08,
            "timeDisplay": "1:23.08"
          },
          {
            "point": 600,
            "seconds": 87.34,
            "timeDisplay": "1:27.34"
          },
          {
            "point": 500,
            "seconds": 91.84,
            "timeDisplay": "1:31.84"
          },
          {
            "point": 400,
            "seconds": 96.65,
            "timeDisplay": "1:36.65"
          },
          {
            "point": 300,
            "seconds": 101.88,
            "timeDisplay": "1:41.88"
          },
          {
            "point": 200,
            "seconds": 107.74,
            "timeDisplay": "1:47.74"
          },
          {
            "point": 100,
            "seconds": 114.71,
            "timeDisplay": "1:54.71"
          },
          {
            "point": 10,
            "seconds": 124.03,
            "timeDisplay": "2:04.03"
          },
          {
            "point": 1,
            "seconds": 125.84,
            "timeDisplay": "2:05.84"
          }
        ],
        "50_BR": [
          {
            "point": 1100,
            "seconds": 34.98,
            "timeDisplay": "34.98"
          },
          {
            "point": 1000,
            "seconds": 36.88,
            "timeDisplay": "36.88"
          },
          {
            "point": 900,
            "seconds": 38.87,
            "timeDisplay": "38.87"
          },
          {
            "point": 800,
            "seconds": 40.92,
            "timeDisplay": "40.92"
          },
          {
            "point": 700,
            "seconds": 43.05,
            "timeDisplay": "43.05"
          },
          {
            "point": 600,
            "seconds": 45.28,
            "timeDisplay": "45.28"
          },
          {
            "point": 500,
            "seconds": 47.63,
            "timeDisplay": "47.63"
          },
          {
            "point": 400,
            "seconds": 50.15,
            "timeDisplay": "50.15"
          },
          {
            "point": 300,
            "seconds": 52.87,
            "timeDisplay": "52.87"
          },
          {
            "point": 200,
            "seconds": 55.91,
            "timeDisplay": "55.91"
          },
          {
            "point": 100,
            "seconds": 59.51,
            "timeDisplay": "59.51"
          },
          {
            "point": 10,
            "seconds": 64.28,
            "timeDisplay": "1:04.28"
          },
          {
            "point": 1,
            "seconds": 65.17,
            "timeDisplay": "1:05.17"
          }
        ],
        "100_BR": [
          {
            "point": 1100,
            "seconds": 76.13,
            "timeDisplay": "1:16.13"
          },
          {
            "point": 1000,
            "seconds": 80.5,
            "timeDisplay": "1:20.50"
          },
          {
            "point": 900,
            "seconds": 85.0,
            "timeDisplay": "1:25.00"
          },
          {
            "point": 800,
            "seconds": 89.65,
            "timeDisplay": "1:29.65"
          },
          {
            "point": 700,
            "seconds": 94.48,
            "timeDisplay": "1:34.48"
          },
          {
            "point": 600,
            "seconds": 99.52,
            "timeDisplay": "1:39.52"
          },
          {
            "point": 500,
            "seconds": 104.81,
            "timeDisplay": "1:44.81"
          },
          {
            "point": 400,
            "seconds": 110.42,
            "timeDisplay": "1:50.42"
          },
          {
            "point": 300,
            "seconds": 116.49,
            "timeDisplay": "1:56.49"
          },
          {
            "point": 200,
            "seconds": 123.19,
            "timeDisplay": "2:03.19"
          },
          {
            "point": 100,
            "seconds": 131.03,
            "timeDisplay": "2:11.03"
          },
          {
            "point": 10,
            "seconds": 141.09,
            "timeDisplay": "2:21.09"
          },
          {
            "point": 1,
            "seconds": 142.9,
            "timeDisplay": "2:22.90"
          }
        ],
        "50_FL": [
          {
            "point": 1100,
            "seconds": 29.29,
            "timeDisplay": "29.29"
          },
          {
            "point": 1000,
            "seconds": 30.79,
            "timeDisplay": "30.79"
          },
          {
            "point": 900,
            "seconds": 32.35,
            "timeDisplay": "32.35"
          },
          {
            "point": 800,
            "seconds": 33.97,
            "timeDisplay": "33.97"
          },
          {
            "point": 700,
            "seconds": 35.67,
            "timeDisplay": "35.67"
          },
          {
            "point": 600,
            "seconds": 37.45,
            "timeDisplay": "37.45"
          },
          {
            "point": 500,
            "seconds": 39.33,
            "timeDisplay": "39.33"
          },
          {
            "point": 400,
            "seconds": 41.36,
            "timeDisplay": "41.36"
          },
          {
            "point": 300,
            "seconds": 43.58,
            "timeDisplay": "43.58"
          },
          {
            "point": 200,
            "seconds": 46.08,
            "timeDisplay": "46.08"
          },
          {
            "point": 100,
            "seconds": 49.09,
            "timeDisplay": "49.09"
          },
          {
            "point": 10,
            "seconds": 53.23,
            "timeDisplay": "53.23"
          },
          {
            "point": 1,
            "seconds": 54.08,
            "timeDisplay": "54.08"
          }
        ],
        "100_FL": [
          {
            "point": 1100,
            "seconds": 65.66,
            "timeDisplay": "1:05.66"
          },
          {
            "point": 1000,
            "seconds": 69.22,
            "timeDisplay": "1:09.22"
          },
          {
            "point": 900,
            "seconds": 72.92,
            "timeDisplay": "1:12.92"
          },
          {
            "point": 800,
            "seconds": 76.8,
            "timeDisplay": "1:16.80"
          },
          {
            "point": 700,
            "seconds": 80.89,
            "timeDisplay": "1:20.89"
          },
          {
            "point": 600,
            "seconds": 85.22,
            "timeDisplay": "1:25.22"
          },
          {
            "point": 500,
            "seconds": 89.86,
            "timeDisplay": "1:29.86"
          },
          {
            "point": 400,
            "seconds": 94.9,
            "timeDisplay": "1:34.90"
          },
          {
            "point": 300,
            "seconds": 100.49,
            "timeDisplay": "1:40.49"
          },
          {
            "point": 200,
            "seconds": 106.91,
            "timeDisplay": "1:46.91"
          },
          {
            "point": 100,
            "seconds": 114.9,
            "timeDisplay": "1:54.90"
          },
          {
            "point": 10,
            "seconds": 126.73,
            "timeDisplay": "2:06.73"
          },
          {
            "point": 1,
            "seconds": 129.49,
            "timeDisplay": "2:09.49"
          }
        ],
        "200_IM": [
          {
            "point": 1100,
            "seconds": 146.28,
            "timeDisplay": "2:26.28"
          },
          {
            "point": 1000,
            "seconds": 153.13,
            "timeDisplay": "2:33.13"
          },
          {
            "point": 900,
            "seconds": 160.26,
            "timeDisplay": "2:40.26"
          },
          {
            "point": 800,
            "seconds": 167.7,
            "timeDisplay": "2:47.70"
          },
          {
            "point": 700,
            "seconds": 175.52,
            "timeDisplay": "2:55.52"
          },
          {
            "point": 600,
            "seconds": 183.8,
            "timeDisplay": "3:03.80"
          },
          {
            "point": 500,
            "seconds": 192.65,
            "timeDisplay": "3:12.65"
          },
          {
            "point": 400,
            "seconds": 202.23,
            "timeDisplay": "3:22.23"
          },
          {
            "point": 300,
            "seconds": 212.81,
            "timeDisplay": "3:32.81"
          },
          {
            "point": 200,
            "seconds": 224.92,
            "timeDisplay": "3:44.92"
          },
          {
            "point": 100,
            "seconds": 239.86,
            "timeDisplay": "3:59.86"
          },
          {
            "point": 10,
            "seconds": 261.58,
            "timeDisplay": "4:21.58"
          },
          {
            "point": 1,
            "seconds": 266.46,
            "timeDisplay": "4:26.46"
          }
        ]
      },
      "11": {
        "50_FR": [
          {
            "point": 1100,
            "seconds": 25.13,
            "timeDisplay": "25.13"
          },
          {
            "point": 1000,
            "seconds": 26.62,
            "timeDisplay": "26.62"
          },
          {
            "point": 900,
            "seconds": 28.15,
            "timeDisplay": "28.15"
          },
          {
            "point": 800,
            "seconds": 29.71,
            "timeDisplay": "29.71"
          },
          {
            "point": 700,
            "seconds": 31.32,
            "timeDisplay": "31.32"
          },
          {
            "point": 600,
            "seconds": 32.98,
            "timeDisplay": "32.98"
          },
          {
            "point": 500,
            "seconds": 34.7,
            "timeDisplay": "34.70"
          },
          {
            "point": 400,
            "seconds": 36.51,
            "timeDisplay": "36.51"
          },
          {
            "point": 300,
            "seconds": 38.42,
            "timeDisplay": "38.42"
          },
          {
            "point": 200,
            "seconds": 40.48,
            "timeDisplay": "40.48"
          },
          {
            "point": 100,
            "seconds": 42.8,
            "timeDisplay": "42.80"
          },
          {
            "point": 10,
            "seconds": 45.53,
            "timeDisplay": "45.53"
          },
          {
            "point": 1,
            "seconds": 45.95,
            "timeDisplay": "45.95"
          }
        ],
        "100_FR": [
          {
            "point": 1100,
            "seconds": 56.59,
            "timeDisplay": "56.59"
          },
          {
            "point": 1000,
            "seconds": 59.29,
            "timeDisplay": "59.29"
          },
          {
            "point": 900,
            "seconds": 62.08,
            "timeDisplay": "1:02.08"
          },
          {
            "point": 800,
            "seconds": 64.98,
            "timeDisplay": "1:04.98"
          },
          {
            "point": 700,
            "seconds": 68.01,
            "timeDisplay": "1:08.01"
          },
          {
            "point": 600,
            "seconds": 71.19,
            "timeDisplay": "1:11.19"
          },
          {
            "point": 500,
            "seconds": 74.55,
            "timeDisplay": "1:14.55"
          },
          {
            "point": 400,
            "seconds": 78.14,
            "timeDisplay": "1:18.14"
          },
          {
            "point": 300,
            "seconds": 82.07,
            "timeDisplay": "1:22.07"
          },
          {
            "point": 200,
            "seconds": 86.47,
            "timeDisplay": "1:26.47"
          },
          {
            "point": 100,
            "seconds": 91.73,
            "timeDisplay": "1:31.73"
          },
          {
            "point": 10,
            "seconds": 98.86,
            "timeDisplay": "1:38.86"
          },
          {
            "point": 1,
            "seconds": 100.27,
            "timeDisplay": "1:40.27"
          }
        ],
        "200_FR": [
          {
            "point": 1100,
            "seconds": 124.23,
            "timeDisplay": "2:04.23"
          },
          {
            "point": 1000,
            "seconds": 129.38,
            "timeDisplay": "2:09.38"
          },
          {
            "point": 900,
            "seconds": 134.74,
            "timeDisplay": "2:14.74"
          },
          {
            "point": 800,
            "seconds": 140.34,
            "timeDisplay": "2:20.34"
          },
          {
            "point": 700,
            "seconds": 146.24,
            "timeDisplay": "2:26.24"
          },
          {
            "point": 600,
            "seconds": 152.49,
            "timeDisplay": "2:32.49"
          },
          {
            "point": 500,
            "seconds": 159.18,
            "timeDisplay": "2:39.18"
          },
          {
            "point": 400,
            "seconds": 166.45,
            "timeDisplay": "2:46.45"
          },
          {
            "point": 300,
            "seconds": 174.49,
            "timeDisplay": "2:54.49"
          },
          {
            "point": 200,
            "seconds": 183.74,
            "timeDisplay": "3:03.74"
          },
          {
            "point": 100,
            "seconds": 195.2,
            "timeDisplay": "3:15.20"
          },
          {
            "point": 10,
            "seconds": 212.11,
            "timeDisplay": "3:32.11"
          },
          {
            "point": 1,
            "seconds": 216.01,
            "timeDisplay": "3:36.01"
          }
        ],
        "400_FR": [
          {
            "point": 1100,
            "seconds": 259.73,
            "timeDisplay": "4:19.73"
          },
          {
            "point": 1000,
            "seconds": 270.66,
            "timeDisplay": "4:30.66"
          },
          {
            "point": 900,
            "seconds": 282.03,
            "timeDisplay": "4:42.03"
          },
          {
            "point": 800,
            "seconds": 293.92,
            "timeDisplay": "4:53.92"
          },
          {
            "point": 700,
            "seconds": 306.41,
            "timeDisplay": "5:06.41"
          },
          {
            "point": 600,
            "seconds": 319.64,
            "timeDisplay": "5:19.64"
          },
          {
            "point": 500,
            "seconds": 333.79,
            "timeDisplay": "5:33.79"
          },
          {
            "point": 400,
            "seconds": 349.11,
            "timeDisplay": "5:49.11"
          },
          {
            "point": 300,
            "seconds": 366.07,
            "timeDisplay": "6:06.07"
          },
          {
            "point": 200,
            "seconds": 385.49,
            "timeDisplay": "6:25.49"
          },
          {
            "point": 100,
            "seconds": 409.49,
            "timeDisplay": "6:49.49"
          },
          {
            "point": 10,
            "seconds": 444.56,
            "timeDisplay": "7:24.56"
          },
          {
            "point": 1,
            "seconds": 452.51,
            "timeDisplay": "7:32.51"
          }
        ],
        "800_FR": [
          {
            "point": 1100,
            "seconds": 554.96,
            "timeDisplay": "9:14.96"
          },
          {
            "point": 1000,
            "seconds": 577.95,
            "timeDisplay": "9:37.95"
          },
          {
            "point": 900,
            "seconds": 601.89,
            "timeDisplay": "10:01.89"
          },
          {
            "point": 800,
            "seconds": 626.93,
            "timeDisplay": "10:26.93"
          },
          {
            "point": 700,
            "seconds": 653.28,
            "timeDisplay": "10:53.28"
          },
          {
            "point": 600,
            "seconds": 681.21,
            "timeDisplay": "11:21.21"
          },
          {
            "point": 500,
            "seconds": 711.1,
            "timeDisplay": "11:51.10"
          },
          {
            "point": 400,
            "seconds": 743.54,
            "timeDisplay": "12:23.54"
          },
          {
            "point": 300,
            "seconds": 779.48,
            "timeDisplay": "12:59.48"
          },
          {
            "point": 200,
            "seconds": 820.77,
            "timeDisplay": "13:40.77"
          },
          {
            "point": 100,
            "seconds": 871.98,
            "timeDisplay": "14:31.98"
          },
          {
            "point": 10,
            "seconds": 947.5,
            "timeDisplay": "15:47.50"
          },
          {
            "point": 1,
            "seconds": 964.91,
            "timeDisplay": "16:04.91"
          }
        ],
        "1500_FR": [
          {
            "point": 1100,
            "seconds": 1093.85,
            "timeDisplay": "18:13.85"
          },
          {
            "point": 1000,
            "seconds": 1146.48,
            "timeDisplay": "19:06.48"
          },
          {
            "point": 900,
            "seconds": 1200.91,
            "timeDisplay": "20:00.91"
          },
          {
            "point": 800,
            "seconds": 1257.4,
            "timeDisplay": "20:57.40"
          },
          {
            "point": 700,
            "seconds": 1316.3,
            "timeDisplay": "21:56.30"
          },
          {
            "point": 600,
            "seconds": 1378.1,
            "timeDisplay": "22:58.10"
          },
          {
            "point": 500,
            "seconds": 1443.44,
            "timeDisplay": "24:03.44"
          },
          {
            "point": 400,
            "seconds": 1513.34,
            "timeDisplay": "25:13.34"
          },
          {
            "point": 300,
            "seconds": 1589.41,
            "timeDisplay": "26:29.41"
          },
          {
            "point": 200,
            "seconds": 1674.67,
            "timeDisplay": "27:54.67"
          },
          {
            "point": 100,
            "seconds": 1776.42,
            "timeDisplay": "29:36.42"
          },
          {
            "point": 10,
            "seconds": 1913.38,
            "timeDisplay": "31:53.38"
          },
          {
            "point": 1,
            "seconds": 1940.07,
            "timeDisplay": "32:20.07"
          }
        ],
        "50_BK": [
          {
            "point": 1100,
            "seconds": 30.21,
            "timeDisplay": "30.21"
          },
          {
            "point": 1000,
            "seconds": 31.68,
            "timeDisplay": "31.68"
          },
          {
            "point": 900,
            "seconds": 33.2,
            "timeDisplay": "33.20"
          },
          {
            "point": 800,
            "seconds": 34.77,
            "timeDisplay": "34.77"
          },
          {
            "point": 700,
            "seconds": 36.41,
            "timeDisplay": "36.41"
          },
          {
            "point": 600,
            "seconds": 38.13,
            "timeDisplay": "38.13"
          },
          {
            "point": 500,
            "seconds": 39.95,
            "timeDisplay": "39.95"
          },
          {
            "point": 400,
            "seconds": 41.89,
            "timeDisplay": "41.89"
          },
          {
            "point": 300,
            "seconds": 44.0,
            "timeDisplay": "44.00"
          },
          {
            "point": 200,
            "seconds": 46.36,
            "timeDisplay": "46.36"
          },
          {
            "point": 100,
            "seconds": 49.17,
            "timeDisplay": "49.17"
          },
          {
            "point": 10,
            "seconds": 52.93,
            "timeDisplay": "52.93"
          },
          {
            "point": 1,
            "seconds": 53.67,
            "timeDisplay": "53.67"
          }
        ],
        "100_BK": [
          {
            "point": 1100,
            "seconds": 65.08,
            "timeDisplay": "1:05.08"
          },
          {
            "point": 1000,
            "seconds": 68.24,
            "timeDisplay": "1:08.24"
          },
          {
            "point": 900,
            "seconds": 71.51,
            "timeDisplay": "1:11.51"
          },
          {
            "point": 800,
            "seconds": 74.9,
            "timeDisplay": "1:14.90"
          },
          {
            "point": 700,
            "seconds": 78.43,
            "timeDisplay": "1:18.43"
          },
          {
            "point": 600,
            "seconds": 82.13,
            "timeDisplay": "1:22.13"
          },
          {
            "point": 500,
            "seconds": 86.05,
            "timeDisplay": "1:26.05"
          },
          {
            "point": 400,
            "seconds": 90.23,
            "timeDisplay": "1:30.23"
          },
          {
            "point": 300,
            "seconds": 94.77,
            "timeDisplay": "1:34.77"
          },
          {
            "point": 200,
            "seconds": 99.86,
            "timeDisplay": "1:39.86"
          },
          {
            "point": 100,
            "seconds": 105.91,
            "timeDisplay": "1:45.91"
          },
          {
            "point": 10,
            "seconds": 113.73,
            "timeDisplay": "1:53.73"
          },
          {
            "point": 1,
            "seconds": 115.59,
            "timeDisplay": "1:55.59"
          }
        ],
        "200_BK": [
          {
            "point": 1100,
            "seconds": 143.51,
            "timeDisplay": "2:23.51"
          },
          {
            "point": 1000,
            "seconds": 150.24,
            "timeDisplay": "2:30.24"
          },
          {
            "point": 900,
            "seconds": 157.2,
            "timeDisplay": "2:37.20"
          },
          {
            "point": 800,
            "seconds": 164.44,
            "timeDisplay": "2:44.44"
          },
          {
            "point": 700,
            "seconds": 172.0,
            "timeDisplay": "2:52.00"
          },
          {
            "point": 600,
            "seconds": 179.93,
            "timeDisplay": "2:59.93"
          },
          {
            "point": 500,
            "seconds": 188.36,
            "timeDisplay": "3:08.36"
          },
          {
            "point": 400,
            "seconds": 197.39,
            "timeDisplay": "3:17.39"
          },
          {
            "point": 300,
            "seconds": 207.25,
            "timeDisplay": "3:27.25"
          },
          {
            "point": 200,
            "seconds": 218.35,
            "timeDisplay": "3:38.35"
          },
          {
            "point": 100,
            "seconds": 231.69,
            "timeDisplay": "3:51.69"
          },
          {
            "point": 10,
            "seconds": 249.95,
            "timeDisplay": "4:09.95"
          },
          {
            "point": 1,
            "seconds": 253.63,
            "timeDisplay": "4:13.63"
          }
        ],
        "50_BR": [
          {
            "point": 1100,
            "seconds": 33.66,
            "timeDisplay": "33.66"
          },
          {
            "point": 1000,
            "seconds": 35.32,
            "timeDisplay": "35.32"
          },
          {
            "point": 900,
            "seconds": 37.04,
            "timeDisplay": "37.04"
          },
          {
            "point": 800,
            "seconds": 38.82,
            "timeDisplay": "38.82"
          },
          {
            "point": 700,
            "seconds": 40.68,
            "timeDisplay": "40.68"
          },
          {
            "point": 600,
            "seconds": 42.62,
            "timeDisplay": "42.62"
          },
          {
            "point": 500,
            "seconds": 44.67,
            "timeDisplay": "44.67"
          },
          {
            "point": 400,
            "seconds": 46.85,
            "timeDisplay": "46.85"
          },
          {
            "point": 300,
            "seconds": 49.22,
            "timeDisplay": "49.22"
          },
          {
            "point": 200,
            "seconds": 51.87,
            "timeDisplay": "51.87"
          },
          {
            "point": 100,
            "seconds": 55.0,
            "timeDisplay": "55.00"
          },
          {
            "point": 10,
            "seconds": 59.15,
            "timeDisplay": "59.15"
          },
          {
            "point": 1,
            "seconds": 59.94,
            "timeDisplay": "59.94"
          }
        ],
        "100_BR": [
          {
            "point": 1100,
            "seconds": 73.47,
            "timeDisplay": "1:13.47"
          },
          {
            "point": 1000,
            "seconds": 77.28,
            "timeDisplay": "1:17.28"
          },
          {
            "point": 900,
            "seconds": 81.2,
            "timeDisplay": "1:21.20"
          },
          {
            "point": 800,
            "seconds": 85.26,
            "timeDisplay": "1:25.26"
          },
          {
            "point": 700,
            "seconds": 89.46,
            "timeDisplay": "1:29.46"
          },
          {
            "point": 600,
            "seconds": 93.86,
            "timeDisplay": "1:33.86"
          },
          {
            "point": 500,
            "seconds": 98.47,
            "timeDisplay": "1:38.47"
          },
          {
            "point": 400,
            "seconds": 103.37,
            "timeDisplay": "1:43.37"
          },
          {
            "point": 300,
            "seconds": 108.65,
            "timeDisplay": "1:48.65"
          },
          {
            "point": 200,
            "seconds": 114.49,
            "timeDisplay": "1:54.49"
          },
          {
            "point": 100,
            "seconds": 121.32,
            "timeDisplay": "2:01.32"
          },
          {
            "point": 10,
            "seconds": 129.99,
            "timeDisplay": "2:09.99"
          },
          {
            "point": 1,
            "seconds": 131.67,
            "timeDisplay": "2:11.67"
          }
        ],
        "200_BR": [
          {
            "point": 1100,
            "seconds": 160.07,
            "timeDisplay": "2:40.07"
          },
          {
            "point": 1000,
            "seconds": 169.25,
            "timeDisplay": "2:49.25"
          },
          {
            "point": 900,
            "seconds": 178.66,
            "timeDisplay": "2:58.66"
          },
          {
            "point": 800,
            "seconds": 188.32,
            "timeDisplay": "3:08.32"
          },
          {
            "point": 700,
            "seconds": 198.29,
            "timeDisplay": "3:18.29"
          },
          {
            "point": 600,
            "seconds": 208.6,
            "timeDisplay": "3:28.60"
          },
          {
            "point": 500,
            "seconds": 219.35,
            "timeDisplay": "3:39.35"
          },
          {
            "point": 400,
            "seconds": 230.63,
            "timeDisplay": "3:50.63"
          },
          {
            "point": 300,
            "seconds": 242.63,
            "timeDisplay": "4:02.63"
          },
          {
            "point": 200,
            "seconds": 255.67,
            "timeDisplay": "4:15.67"
          },
          {
            "point": 100,
            "seconds": 270.49,
            "timeDisplay": "4:30.49"
          },
          {
            "point": 10,
            "seconds": 288.3,
            "timeDisplay": "4:48.30"
          },
          {
            "point": 1,
            "seconds": 291.11,
            "timeDisplay": "4:51.11"
          }
        ],
        "50_FL": [
          {
            "point": 1100,
            "seconds": 28.17,
            "timeDisplay": "28.17"
          },
          {
            "point": 1000,
            "seconds": 29.48,
            "timeDisplay": "29.48"
          },
          {
            "point": 900,
            "seconds": 30.84,
            "timeDisplay": "30.84"
          },
          {
            "point": 800,
            "seconds": 32.25,
            "timeDisplay": "32.25"
          },
          {
            "point": 700,
            "seconds": 33.72,
            "timeDisplay": "33.72"
          },
          {
            "point": 600,
            "seconds": 35.27,
            "timeDisplay": "35.27"
          },
          {
            "point": 500,
            "seconds": 36.92,
            "timeDisplay": "36.92"
          },
          {
            "point": 400,
            "seconds": 38.68,
            "timeDisplay": "38.68"
          },
          {
            "point": 300,
            "seconds": 40.61,
            "timeDisplay": "40.61"
          },
          {
            "point": 200,
            "seconds": 42.78,
            "timeDisplay": "42.78"
          },
          {
            "point": 100,
            "seconds": 45.4,
            "timeDisplay": "45.40"
          },
          {
            "point": 10,
            "seconds": 49.0,
            "timeDisplay": "49.00"
          },
          {
            "point": 1,
            "seconds": 49.74,
            "timeDisplay": "49.74"
          }
        ],
        "100_FL": [
          {
            "point": 1100,
            "seconds": 62.77,
            "timeDisplay": "1:02.77"
          },
          {
            "point": 1000,
            "seconds": 65.99,
            "timeDisplay": "1:05.99"
          },
          {
            "point": 900,
            "seconds": 69.33,
            "timeDisplay": "1:09.33"
          },
          {
            "point": 800,
            "seconds": 72.8,
            "timeDisplay": "1:12.80"
          },
          {
            "point": 700,
            "seconds": 76.43,
            "timeDisplay": "1:16.43"
          },
          {
            "point": 600,
            "seconds": 80.24,
            "timeDisplay": "1:20.24"
          },
          {
            "point": 500,
            "seconds": 84.29,
            "timeDisplay": "1:24.29"
          },
          {
            "point": 400,
            "seconds": 88.63,
            "timeDisplay": "1:28.63"
          },
          {
            "point": 300,
            "seconds": 93.38,
            "timeDisplay": "1:33.38"
          },
          {
            "point": 200,
            "seconds": 98.74,
            "timeDisplay": "1:38.74"
          },
          {
            "point": 100,
            "seconds": 105.18,
            "timeDisplay": "1:45.18"
          },
          {
            "point": 10,
            "seconds": 114.06,
            "timeDisplay": "1:54.06"
          },
          {
            "point": 1,
            "seconds": 115.87,
            "timeDisplay": "1:55.87"
          }
        ],
        "200_FL": [
          {
            "point": 1100,
            "seconds": 144.44,
            "timeDisplay": "2:24.44"
          },
          {
            "point": 1000,
            "seconds": 152.12,
            "timeDisplay": "2:32.12"
          },
          {
            "point": 900,
            "seconds": 160.07,
            "timeDisplay": "2:40.07"
          },
          {
            "point": 800,
            "seconds": 168.32,
            "timeDisplay": "2:48.32"
          },
          {
            "point": 700,
            "seconds": 176.92,
            "timeDisplay": "2:56.92"
          },
          {
            "point": 600,
            "seconds": 185.94,
            "timeDisplay": "3:05.94"
          },
          {
            "point": 500,
            "seconds": 195.49,
            "timeDisplay": "3:15.49"
          },
          {
            "point": 400,
            "seconds": 205.69,
            "timeDisplay": "3:25.69"
          },
          {
            "point": 300,
            "seconds": 216.8,
            "timeDisplay": "3:36.80"
          },
          {
            "point": 200,
            "seconds": 229.25,
            "timeDisplay": "3:49.25"
          },
          {
            "point": 100,
            "seconds": 244.11,
            "timeDisplay": "4:04.11"
          },
          {
            "point": 10,
            "seconds": 264.11,
            "timeDisplay": "4:24.11"
          },
          {
            "point": 1,
            "seconds": 268.01,
            "timeDisplay": "4:28.01"
          }
        ],
        "200_IM": [
          {
            "point": 1100,
            "seconds": 141.36,
            "timeDisplay": "2:21.36"
          },
          {
            "point": 1000,
            "seconds": 147.36,
            "timeDisplay": "2:27.36"
          },
          {
            "point": 900,
            "seconds": 153.6,
            "timeDisplay": "2:33.60"
          },
          {
            "point": 800,
            "seconds": 160.11,
            "timeDisplay": "2:40.11"
          },
          {
            "point": 700,
            "seconds": 166.96,
            "timeDisplay": "2:46.96"
          },
          {
            "point": 600,
            "seconds": 174.2,
            "timeDisplay": "2:54.20"
          },
          {
            "point": 500,
            "seconds": 181.95,
            "timeDisplay": "3:01.95"
          },
          {
            "point": 400,
            "seconds": 190.33,
            "timeDisplay": "3:10.33"
          },
          {
            "point": 300,
            "seconds": 199.59,
            "timeDisplay": "3:19.59"
          },
          {
            "point": 200,
            "seconds": 210.19,
            "timeDisplay": "3:30.19"
          },
          {
            "point": 100,
            "seconds": 223.26,
            "timeDisplay": "3:43.26"
          },
          {
            "point": 10,
            "seconds": 242.27,
            "timeDisplay": "4:02.27"
          },
          {
            "point": 1,
            "seconds": 246.55,
            "timeDisplay": "4:06.55"
          }
        ],
        "400_IM": [
          {
            "point": 1100,
            "seconds": 308.35,
            "timeDisplay": "5:08.35"
          },
          {
            "point": 1000,
            "seconds": 322.55,
            "timeDisplay": "5:22.55"
          },
          {
            "point": 900,
            "seconds": 337.27,
            "timeDisplay": "5:37.27"
          },
          {
            "point": 800,
            "seconds": 352.58,
            "timeDisplay": "5:52.58"
          },
          {
            "point": 700,
            "seconds": 368.59,
            "timeDisplay": "6:08.59"
          },
          {
            "point": 600,
            "seconds": 385.43,
            "timeDisplay": "6:25.43"
          },
          {
            "point": 500,
            "seconds": 403.31,
            "timeDisplay": "6:43.31"
          },
          {
            "point": 400,
            "seconds": 422.52,
            "timeDisplay": "7:02.52"
          },
          {
            "point": 300,
            "seconds": 443.54,
            "timeDisplay": "7:23.54"
          },
          {
            "point": 200,
            "seconds": 467.27,
            "timeDisplay": "7:47.27"
          },
          {
            "point": 100,
            "seconds": 495.92,
            "timeDisplay": "8:15.92"
          },
          {
            "point": 10,
            "seconds": 535.55,
            "timeDisplay": "8:55.55"
          },
          {
            "point": 1,
            "seconds": 543.68,
            "timeDisplay": "9:03.68"
          }
        ]
      },
      "12": {
        "50_FR": [
          {
            "point": 1100,
            "seconds": 23.65,
            "timeDisplay": "23.65"
          },
          {
            "point": 1000,
            "seconds": 25.05,
            "timeDisplay": "25.05"
          },
          {
            "point": 900,
            "seconds": 26.48,
            "timeDisplay": "26.48"
          },
          {
            "point": 800,
            "seconds": 27.95,
            "timeDisplay": "27.95"
          },
          {
            "point": 700,
            "seconds": 29.46,
            "timeDisplay": "29.46"
          },
          {
            "point": 600,
            "seconds": 31.02,
            "timeDisplay": "31.02"
          },
          {
            "point": 500,
            "seconds": 32.64,
            "timeDisplay": "32.64"
          },
          {
            "point": 400,
            "seconds": 34.34,
            "timeDisplay": "34.34"
          },
          {
            "point": 300,
            "seconds": 36.14,
            "timeDisplay": "36.14"
          },
          {
            "point": 200,
            "seconds": 38.08,
            "timeDisplay": "38.08"
          },
          {
            "point": 100,
            "seconds": 40.26,
            "timeDisplay": "40.26"
          },
          {
            "point": 10,
            "seconds": 42.74,
            "timeDisplay": "42.74"
          },
          {
            "point": 1,
            "seconds": 43.23,
            "timeDisplay": "43.23"
          }
        ],
        "100_FR": [
          {
            "point": 1100,
            "seconds": 52.97,
            "timeDisplay": "52.97"
          },
          {
            "point": 1000,
            "seconds": 55.5,
            "timeDisplay": "55.50"
          },
          {
            "point": 900,
            "seconds": 58.11,
            "timeDisplay": "58.11"
          },
          {
            "point": 800,
            "seconds": 60.82,
            "timeDisplay": "1:00.82"
          },
          {
            "point": 700,
            "seconds": 63.65,
            "timeDisplay": "1:03.65"
          },
          {
            "point": 600,
            "seconds": 66.63,
            "timeDisplay": "1:06.63"
          },
          {
            "point": 500,
            "seconds": 69.77,
            "timeDisplay": "1:09.77"
          },
          {
            "point": 400,
            "seconds": 73.14,
            "timeDisplay": "1:13.14"
          },
          {
            "point": 300,
            "seconds": 76.81,
            "timeDisplay": "1:16.81"
          },
          {
            "point": 200,
            "seconds": 80.93,
            "timeDisplay": "1:20.93"
          },
          {
            "point": 100,
            "seconds": 85.85,
            "timeDisplay": "1:25.85"
          },
          {
            "point": 10,
            "seconds": 92.52,
            "timeDisplay": "1:32.52"
          },
          {
            "point": 1,
            "seconds": 93.85,
            "timeDisplay": "1:33.85"
          }
        ],
        "200_FR": [
          {
            "point": 1100,
            "seconds": 116.73,
            "timeDisplay": "1:56.73"
          },
          {
            "point": 1000,
            "seconds": 121.57,
            "timeDisplay": "2:01.57"
          },
          {
            "point": 900,
            "seconds": 126.6,
            "timeDisplay": "2:06.60"
          },
          {
            "point": 800,
            "seconds": 131.87,
            "timeDisplay": "2:11.87"
          },
          {
            "point": 700,
            "seconds": 137.41,
            "timeDisplay": "2:17.41"
          },
          {
            "point": 600,
            "seconds": 143.29,
            "timeDisplay": "2:23.29"
          },
          {
            "point": 500,
            "seconds": 149.57,
            "timeDisplay": "2:29.57"
          },
          {
            "point": 400,
            "seconds": 156.4,
            "timeDisplay": "2:36.40"
          },
          {
            "point": 300,
            "seconds": 163.96,
            "timeDisplay": "2:43.96"
          },
          {
            "point": 200,
            "seconds": 172.64,
            "timeDisplay": "2:52.64"
          },
          {
            "point": 100,
            "seconds": 183.41,
            "timeDisplay": "3:03.41"
          },
          {
            "point": 10,
            "seconds": 199.3,
            "timeDisplay": "3:19.30"
          },
          {
            "point": 1,
            "seconds": 202.97,
            "timeDisplay": "3:22.97"
          }
        ],
        "400_FR": [
          {
            "point": 1100,
            "seconds": 246.24,
            "timeDisplay": "4:06.24"
          },
          {
            "point": 1000,
            "seconds": 256.6,
            "timeDisplay": "4:16.60"
          },
          {
            "point": 900,
            "seconds": 267.38,
            "timeDisplay": "4:27.38"
          },
          {
            "point": 800,
            "seconds": 278.65,
            "timeDisplay": "4:38.65"
          },
          {
            "point": 700,
            "seconds": 290.5,
            "timeDisplay": "4:50.50"
          },
          {
            "point": 600,
            "seconds": 303.04,
            "timeDisplay": "5:03.04"
          },
          {
            "point": 500,
            "seconds": 316.45,
            "timeDisplay": "5:16.45"
          },
          {
            "point": 400,
            "seconds": 330.98,
            "timeDisplay": "5:30.98"
          },
          {
            "point": 300,
            "seconds": 347.06,
            "timeDisplay": "5:47.06"
          },
          {
            "point": 200,
            "seconds": 365.47,
            "timeDisplay": "6:05.47"
          },
          {
            "point": 100,
            "seconds": 388.22,
            "timeDisplay": "6:28.22"
          },
          {
            "point": 10,
            "seconds": 421.48,
            "timeDisplay": "7:01.48"
          },
          {
            "point": 1,
            "seconds": 429.01,
            "timeDisplay": "7:09.01"
          }
        ],
        "800_FR": [
          {
            "point": 1100,
            "seconds": 519.19,
            "timeDisplay": "8:39.19"
          },
          {
            "point": 1000,
            "seconds": 540.7,
            "timeDisplay": "9:00.70"
          },
          {
            "point": 900,
            "seconds": 563.1,
            "timeDisplay": "9:23.10"
          },
          {
            "point": 800,
            "seconds": 586.52,
            "timeDisplay": "9:46.52"
          },
          {
            "point": 700,
            "seconds": 611.18,
            "timeDisplay": "10:11.18"
          },
          {
            "point": 600,
            "seconds": 637.3,
            "timeDisplay": "10:37.30"
          },
          {
            "point": 500,
            "seconds": 665.27,
            "timeDisplay": "11:05.27"
          },
          {
            "point": 400,
            "seconds": 695.62,
            "timeDisplay": "11:35.62"
          },
          {
            "point": 300,
            "seconds": 729.25,
            "timeDisplay": "12:09.25"
          },
          {
            "point": 200,
            "seconds": 767.88,
            "timeDisplay": "12:47.88"
          },
          {
            "point": 100,
            "seconds": 815.78,
            "timeDisplay": "13:35.78"
          },
          {
            "point": 10,
            "seconds": 886.44,
            "timeDisplay": "14:46.44"
          },
          {
            "point": 1,
            "seconds": 902.72,
            "timeDisplay": "15:02.72"
          }
        ],
        "1500_FR": [
          {
            "point": 1100,
            "seconds": 982.24,
            "timeDisplay": "16:22.24"
          },
          {
            "point": 1000,
            "seconds": 1029.51,
            "timeDisplay": "17:09.51"
          },
          {
            "point": 900,
            "seconds": 1078.39,
            "timeDisplay": "17:58.39"
          },
          {
            "point": 800,
            "seconds": 1129.11,
            "timeDisplay": "18:49.11"
          },
          {
            "point": 700,
            "seconds": 1182.01,
            "timeDisplay": "19:42.01"
          },
          {
            "point": 600,
            "seconds": 1237.49,
            "timeDisplay": "20:37.49"
          },
          {
            "point": 500,
            "seconds": 1296.17,
            "timeDisplay": "21:36.17"
          },
          {
            "point": 400,
            "seconds": 1358.94,
            "timeDisplay": "22:38.94"
          },
          {
            "point": 300,
            "seconds": 1427.25,
            "timeDisplay": "23:47.25"
          },
          {
            "point": 200,
            "seconds": 1503.81,
            "timeDisplay": "25:03.81"
          },
          {
            "point": 100,
            "seconds": 1595.18,
            "timeDisplay": "26:35.18"
          },
          {
            "point": 10,
            "seconds": 1718.16,
            "timeDisplay": "28:38.16"
          },
          {
            "point": 1,
            "seconds": 1740.0,
            "timeDisplay": "29:00.00"
          }
        ],
        "50_BK": [
          {
            "point": 1100,
            "seconds": 28.0,
            "timeDisplay": "28.00"
          },
          {
            "point": 1000,
            "seconds": 29.36,
            "timeDisplay": "29.36"
          },
          {
            "point": 900,
            "seconds": 30.76,
            "timeDisplay": "30.76"
          },
          {
            "point": 800,
            "seconds": 32.22,
            "timeDisplay": "32.22"
          },
          {
            "point": 700,
            "seconds": 33.74,
            "timeDisplay": "33.74"
          },
          {
            "point": 600,
            "seconds": 35.33,
            "timeDisplay": "35.33"
          },
          {
            "point": 500,
            "seconds": 37.02,
            "timeDisplay": "37.02"
          },
          {
            "point": 400,
            "seconds": 38.82,
            "timeDisplay": "38.82"
          },
          {
            "point": 300,
            "seconds": 40.77,
            "timeDisplay": "40.77"
          },
          {
            "point": 200,
            "seconds": 42.96,
            "timeDisplay": "42.96"
          },
          {
            "point": 100,
            "seconds": 45.57,
            "timeDisplay": "45.57"
          },
          {
            "point": 10,
            "seconds": 49.05,
            "timeDisplay": "49.05"
          },
          {
            "point": 1,
            "seconds": 49.74,
            "timeDisplay": "49.74"
          }
        ],
        "100_BK": [
          {
            "point": 1100,
            "seconds": 60.31,
            "timeDisplay": "1:00.31"
          },
          {
            "point": 1000,
            "seconds": 63.24,
            "timeDisplay": "1:03.24"
          },
          {
            "point": 900,
            "seconds": 66.26,
            "timeDisplay": "1:06.26"
          },
          {
            "point": 800,
            "seconds": 69.41,
            "timeDisplay": "1:09.41"
          },
          {
            "point": 700,
            "seconds": 72.68,
            "timeDisplay": "1:12.68"
          },
          {
            "point": 600,
            "seconds": 76.11,
            "timeDisplay": "1:16.11"
          },
          {
            "point": 500,
            "seconds": 79.74,
            "timeDisplay": "1:19.74"
          },
          {
            "point": 400,
            "seconds": 83.61,
            "timeDisplay": "1:23.61"
          },
          {
            "point": 300,
            "seconds": 87.82,
            "timeDisplay": "1:27.82"
          },
          {
            "point": 200,
            "seconds": 92.54,
            "timeDisplay": "1:32.54"
          },
          {
            "point": 100,
            "seconds": 98.15,
            "timeDisplay": "1:38.15"
          },
          {
            "point": 10,
            "seconds": 105.66,
            "timeDisplay": "1:45.66"
          },
          {
            "point": 1,
            "seconds": 107.12,
            "timeDisplay": "1:47.12"
          }
        ],
        "200_BK": [
          {
            "point": 1100,
            "seconds": 132.21,
            "timeDisplay": "2:12.21"
          },
          {
            "point": 1000,
            "seconds": 138.4,
            "timeDisplay": "2:18.40"
          },
          {
            "point": 900,
            "seconds": 144.82,
            "timeDisplay": "2:24.82"
          },
          {
            "point": 800,
            "seconds": 151.48,
            "timeDisplay": "2:31.48"
          },
          {
            "point": 700,
            "seconds": 158.45,
            "timeDisplay": "2:38.45"
          },
          {
            "point": 600,
            "seconds": 165.77,
            "timeDisplay": "2:45.77"
          },
          {
            "point": 500,
            "seconds": 173.52,
            "timeDisplay": "2:53.52"
          },
          {
            "point": 400,
            "seconds": 181.84,
            "timeDisplay": "3:01.84"
          },
          {
            "point": 300,
            "seconds": 190.92,
            "timeDisplay": "3:10.92"
          },
          {
            "point": 200,
            "seconds": 201.15,
            "timeDisplay": "3:21.15"
          },
          {
            "point": 100,
            "seconds": 213.44,
            "timeDisplay": "3:33.44"
          },
          {
            "point": 10,
            "seconds": 230.26,
            "timeDisplay": "3:50.26"
          },
          {
            "point": 1,
            "seconds": 233.65,
            "timeDisplay": "3:53.65"
          }
        ],
        "50_BR": [
          {
            "point": 1100,
            "seconds": 30.78,
            "timeDisplay": "30.78"
          },
          {
            "point": 1000,
            "seconds": 32.3,
            "timeDisplay": "32.30"
          },
          {
            "point": 900,
            "seconds": 33.87,
            "timeDisplay": "33.87"
          },
          {
            "point": 800,
            "seconds": 35.5,
            "timeDisplay": "35.50"
          },
          {
            "point": 700,
            "seconds": 37.2,
            "timeDisplay": "37.20"
          },
          {
            "point": 600,
            "seconds": 38.97,
            "timeDisplay": "38.97"
          },
          {
            "point": 500,
            "seconds": 40.85,
            "timeDisplay": "40.85"
          },
          {
            "point": 400,
            "seconds": 42.84,
            "timeDisplay": "42.84"
          },
          {
            "point": 300,
            "seconds": 45.01,
            "timeDisplay": "45.01"
          },
          {
            "point": 200,
            "seconds": 47.43,
            "timeDisplay": "47.43"
          },
          {
            "point": 100,
            "seconds": 50.29,
            "timeDisplay": "50.29"
          },
          {
            "point": 10,
            "seconds": 54.08,
            "timeDisplay": "54.08"
          },
          {
            "point": 1,
            "seconds": 54.81,
            "timeDisplay": "54.81"
          }
        ],
        "100_BR": [
          {
            "point": 1100,
            "seconds": 67.4,
            "timeDisplay": "1:07.40"
          },
          {
            "point": 1000,
            "seconds": 70.89,
            "timeDisplay": "1:10.89"
          },
          {
            "point": 900,
            "seconds": 74.49,
            "timeDisplay": "1:14.49"
          },
          {
            "point": 800,
            "seconds": 78.21,
            "timeDisplay": "1:18.21"
          },
          {
            "point": 700,
            "seconds": 82.07,
            "timeDisplay": "1:22.07"
          },
          {
            "point": 600,
            "seconds": 86.1,
            "timeDisplay": "1:26.10"
          },
          {
            "point": 500,
            "seconds": 90.34,
            "timeDisplay": "1:30.34"
          },
          {
            "point": 400,
            "seconds": 94.83,
            "timeDisplay": "1:34.83"
          },
          {
            "point": 300,
            "seconds": 99.67,
            "timeDisplay": "1:39.67"
          },
          {
            "point": 200,
            "seconds": 105.03,
            "timeDisplay": "1:45.03"
          },
          {
            "point": 100,
            "seconds": 111.3,
            "timeDisplay": "1:51.30"
          },
          {
            "point": 10,
            "seconds": 119.35,
            "timeDisplay": "1:59.35"
          },
          {
            "point": 1,
            "seconds": 120.8,
            "timeDisplay": "2:00.80"
          }
        ],
        "200_BR": [
          {
            "point": 1100,
            "seconds": 146.27,
            "timeDisplay": "2:26.27"
          },
          {
            "point": 1000,
            "seconds": 154.66,
            "timeDisplay": "2:34.66"
          },
          {
            "point": 900,
            "seconds": 163.26,
            "timeDisplay": "2:43.26"
          },
          {
            "point": 800,
            "seconds": 172.09,
            "timeDisplay": "2:52.09"
          },
          {
            "point": 700,
            "seconds": 181.2,
            "timeDisplay": "3:01.20"
          },
          {
            "point": 600,
            "seconds": 190.63,
            "timeDisplay": "3:10.63"
          },
          {
            "point": 500,
            "seconds": 200.45,
            "timeDisplay": "3:20.45"
          },
          {
            "point": 400,
            "seconds": 210.76,
            "timeDisplay": "3:30.76"
          },
          {
            "point": 300,
            "seconds": 221.73,
            "timeDisplay": "3:41.73"
          },
          {
            "point": 200,
            "seconds": 233.64,
            "timeDisplay": "3:53.64"
          },
          {
            "point": 100,
            "seconds": 247.19,
            "timeDisplay": "4:07.19"
          },
          {
            "point": 10,
            "seconds": 263.46,
            "timeDisplay": "4:23.46"
          },
          {
            "point": 1,
            "seconds": 266.03,
            "timeDisplay": "4:26.03"
          }
        ],
        "50_FL": [
          {
            "point": 1100,
            "seconds": 26.37,
            "timeDisplay": "26.37"
          },
          {
            "point": 1000,
            "seconds": 27.59,
            "timeDisplay": "27.59"
          },
          {
            "point": 900,
            "seconds": 28.86,
            "timeDisplay": "28.86"
          },
          {
            "point": 800,
            "seconds": 30.18,
            "timeDisplay": "30.18"
          },
          {
            "point": 700,
            "seconds": 31.56,
            "timeDisplay": "31.56"
          },
          {
            "point": 600,
            "seconds": 33.01,
            "timeDisplay": "33.01"
          },
          {
            "point": 500,
            "seconds": 34.54,
            "timeDisplay": "34.54"
          },
          {
            "point": 400,
            "seconds": 36.19,
            "timeDisplay": "36.19"
          },
          {
            "point": 300,
            "seconds": 38.0,
            "timeDisplay": "38.00"
          },
          {
            "point": 200,
            "seconds": 40.03,
            "timeDisplay": "40.03"
          },
          {
            "point": 100,
            "seconds": 42.48,
            "timeDisplay": "42.48"
          },
          {
            "point": 10,
            "seconds": 45.85,
            "timeDisplay": "45.85"
          },
          {
            "point": 1,
            "seconds": 46.55,
            "timeDisplay": "46.55"
          }
        ],
        "100_FL": [
          {
            "point": 1100,
            "seconds": 57.92,
            "timeDisplay": "57.92"
          },
          {
            "point": 1000,
            "seconds": 60.89,
            "timeDisplay": "1:00.89"
          },
          {
            "point": 900,
            "seconds": 63.97,
            "timeDisplay": "1:03.97"
          },
          {
            "point": 800,
            "seconds": 67.18,
            "timeDisplay": "1:07.18"
          },
          {
            "point": 700,
            "seconds": 70.53,
            "timeDisplay": "1:10.53"
          },
          {
            "point": 600,
            "seconds": 74.05,
            "timeDisplay": "1:14.05"
          },
          {
            "point": 500,
            "seconds": 77.78,
            "timeDisplay": "1:17.78"
          },
          {
            "point": 400,
            "seconds": 81.79,
            "timeDisplay": "1:21.79"
          },
          {
            "point": 300,
            "seconds": 86.17,
            "timeDisplay": "1:26.17"
          },
          {
            "point": 200,
            "seconds": 91.11,
            "timeDisplay": "1:31.11"
          },
          {
            "point": 100,
            "seconds": 97.06,
            "timeDisplay": "1:37.06"
          },
          {
            "point": 10,
            "seconds": 105.25,
            "timeDisplay": "1:45.25"
          },
          {
            "point": 1,
            "seconds": 106.92,
            "timeDisplay": "1:46.92"
          }
        ],
        "200_FL": [
          {
            "point": 1100,
            "seconds": 130.27,
            "timeDisplay": "2:10.27"
          },
          {
            "point": 1000,
            "seconds": 137.2,
            "timeDisplay": "2:17.20"
          },
          {
            "point": 900,
            "seconds": 144.37,
            "timeDisplay": "2:24.37"
          },
          {
            "point": 800,
            "seconds": 151.81,
            "timeDisplay": "2:31.81"
          },
          {
            "point": 700,
            "seconds": 159.57,
            "timeDisplay": "2:39.57"
          },
          {
            "point": 600,
            "seconds": 167.71,
            "timeDisplay": "2:47.71"
          },
          {
            "point": 500,
            "seconds": 176.31,
            "timeDisplay": "2:56.31"
          },
          {
            "point": 400,
            "seconds": 185.52,
            "timeDisplay": "3:05.52"
          },
          {
            "point": 300,
            "seconds": 195.54,
            "timeDisplay": "3:15.54"
          },
          {
            "point": 200,
            "seconds": 206.77,
            "timeDisplay": "3:26.77"
          },
          {
            "point": 100,
            "seconds": 220.17,
            "timeDisplay": "3:40.17"
          },
          {
            "point": 10,
            "seconds": 238.2,
            "timeDisplay": "3:58.20"
          },
          {
            "point": 1,
            "seconds": 241.73,
            "timeDisplay": "4:01.73"
          }
        ],
        "200_IM": [
          {
            "point": 1100,
            "seconds": 132.66,
            "timeDisplay": "2:12.66"
          },
          {
            "point": 1000,
            "seconds": 138.29,
            "timeDisplay": "2:18.29"
          },
          {
            "point": 900,
            "seconds": 144.14,
            "timeDisplay": "2:24.14"
          },
          {
            "point": 800,
            "seconds": 150.26,
            "timeDisplay": "2:30.26"
          },
          {
            "point": 700,
            "seconds": 156.68,
            "timeDisplay": "2:36.68"
          },
          {
            "point": 600,
            "seconds": 163.48,
            "timeDisplay": "2:43.48"
          },
          {
            "point": 500,
            "seconds": 170.75,
            "timeDisplay": "2:50.75"
          },
          {
            "point": 400,
            "seconds": 178.61,
            "timeDisplay": "2:58.61"
          },
          {
            "point": 300,
            "seconds": 187.31,
            "timeDisplay": "3:07.31"
          },
          {
            "point": 200,
            "seconds": 197.26,
            "timeDisplay": "3:17.26"
          },
          {
            "point": 100,
            "seconds": 209.52,
            "timeDisplay": "3:29.52"
          },
          {
            "point": 10,
            "seconds": 227.35,
            "timeDisplay": "3:47.35"
          },
          {
            "point": 1,
            "seconds": 231.11,
            "timeDisplay": "3:51.11"
          }
        ],
        "400_IM": [
          {
            "point": 1100,
            "seconds": 283.71,
            "timeDisplay": "4:43.71"
          },
          {
            "point": 1000,
            "seconds": 296.77,
            "timeDisplay": "4:56.77"
          },
          {
            "point": 900,
            "seconds": 310.31,
            "timeDisplay": "5:10.31"
          },
          {
            "point": 800,
            "seconds": 324.4,
            "timeDisplay": "5:24.40"
          },
          {
            "point": 700,
            "seconds": 339.13,
            "timeDisplay": "5:39.13"
          },
          {
            "point": 600,
            "seconds": 354.62,
            "timeDisplay": "5:54.62"
          },
          {
            "point": 500,
            "seconds": 371.06,
            "timeDisplay": "6:11.06"
          },
          {
            "point": 400,
            "seconds": 388.74,
            "timeDisplay": "6:28.74"
          },
          {
            "point": 300,
            "seconds": 408.08,
            "timeDisplay": "6:48.08"
          },
          {
            "point": 200,
            "seconds": 429.91,
            "timeDisplay": "7:09.91"
          },
          {
            "point": 100,
            "seconds": 456.27,
            "timeDisplay": "7:36.27"
          },
          {
            "point": 10,
            "seconds": 492.73,
            "timeDisplay": "8:12.73"
          },
          {
            "point": 1,
            "seconds": 500.22,
            "timeDisplay": "8:20.22"
          }
        ]
      },
      "13": {
        "50_FR": [
          {
            "point": 1100,
            "seconds": 23.05,
            "timeDisplay": "23.05"
          },
          {
            "point": 1000,
            "seconds": 24.27,
            "timeDisplay": "24.27"
          },
          {
            "point": 900,
            "seconds": 25.52,
            "timeDisplay": "25.52"
          },
          {
            "point": 800,
            "seconds": 26.8,
            "timeDisplay": "26.80"
          },
          {
            "point": 700,
            "seconds": 28.12,
            "timeDisplay": "28.12"
          },
          {
            "point": 600,
            "seconds": 29.48,
            "timeDisplay": "29.48"
          },
          {
            "point": 500,
            "seconds": 30.89,
            "timeDisplay": "30.89"
          },
          {
            "point": 400,
            "seconds": 32.37,
            "timeDisplay": "32.37"
          },
          {
            "point": 300,
            "seconds": 33.94,
            "timeDisplay": "33.94"
          },
          {
            "point": 200,
            "seconds": 35.63,
            "timeDisplay": "35.63"
          },
          {
            "point": 100,
            "seconds": 37.53,
            "timeDisplay": "37.53"
          },
          {
            "point": 10,
            "seconds": 39.77,
            "timeDisplay": "39.77"
          },
          {
            "point": 1,
            "seconds": 40.12,
            "timeDisplay": "40.12"
          }
        ],
        "100_FR": [
          {
            "point": 1100,
            "seconds": 51.16,
            "timeDisplay": "51.16"
          },
          {
            "point": 1000,
            "seconds": 53.35,
            "timeDisplay": "53.35"
          },
          {
            "point": 900,
            "seconds": 55.62,
            "timeDisplay": "55.62"
          },
          {
            "point": 800,
            "seconds": 57.97,
            "timeDisplay": "57.97"
          },
          {
            "point": 700,
            "seconds": 60.42,
            "timeDisplay": "1:00.42"
          },
          {
            "point": 600,
            "seconds": 63.0,
            "timeDisplay": "1:03.00"
          },
          {
            "point": 500,
            "seconds": 65.72,
            "timeDisplay": "1:05.72"
          },
          {
            "point": 400,
            "seconds": 68.64,
            "timeDisplay": "1:08.64"
          },
          {
            "point": 300,
            "seconds": 71.82,
            "timeDisplay": "1:11.82"
          },
          {
            "point": 200,
            "seconds": 75.39,
            "timeDisplay": "1:15.39"
          },
          {
            "point": 100,
            "seconds": 79.66,
            "timeDisplay": "1:19.66"
          },
          {
            "point": 10,
            "seconds": 85.44,
            "timeDisplay": "1:25.44"
          },
          {
            "point": 1,
            "seconds": 86.59,
            "timeDisplay": "1:26.59"
          }
        ],
        "200_FR": [
          {
            "point": 1100,
            "seconds": 113.71,
            "timeDisplay": "1:53.71"
          },
          {
            "point": 1000,
            "seconds": 117.94,
            "timeDisplay": "1:57.94"
          },
          {
            "point": 900,
            "seconds": 122.35,
            "timeDisplay": "2:02.35"
          },
          {
            "point": 800,
            "seconds": 126.96,
            "timeDisplay": "2:06.96"
          },
          {
            "point": 700,
            "seconds": 131.81,
            "timeDisplay": "2:11.81"
          },
          {
            "point": 600,
            "seconds": 136.96,
            "timeDisplay": "2:16.96"
          },
          {
            "point": 500,
            "seconds": 142.46,
            "timeDisplay": "2:22.46"
          },
          {
            "point": 400,
            "seconds": 148.43,
            "timeDisplay": "2:28.43"
          },
          {
            "point": 300,
            "seconds": 155.05,
            "timeDisplay": "2:35.05"
          },
          {
            "point": 200,
            "seconds": 162.65,
            "timeDisplay": "2:42.65"
          },
          {
            "point": 100,
            "seconds": 172.08,
            "timeDisplay": "2:52.08"
          },
          {
            "point": 10,
            "seconds": 185.98,
            "timeDisplay": "3:05.98"
          },
          {
            "point": 1,
            "seconds": 189.2,
            "timeDisplay": "3:09.20"
          }
        ],
        "400_FR": [
          {
            "point": 1100,
            "seconds": 240.29,
            "timeDisplay": "4:00.29"
          },
          {
            "point": 1000,
            "seconds": 249.37,
            "timeDisplay": "4:09.37"
          },
          {
            "point": 900,
            "seconds": 258.83,
            "timeDisplay": "4:18.83"
          },
          {
            "point": 800,
            "seconds": 268.71,
            "timeDisplay": "4:28.71"
          },
          {
            "point": 700,
            "seconds": 279.09,
            "timeDisplay": "4:39.09"
          },
          {
            "point": 600,
            "seconds": 290.09,
            "timeDisplay": "4:50.09"
          },
          {
            "point": 500,
            "seconds": 301.85,
            "timeDisplay": "5:01.85"
          },
          {
            "point": 400,
            "seconds": 314.58,
            "timeDisplay": "5:14.58"
          },
          {
            "point": 300,
            "seconds": 328.68,
            "timeDisplay": "5:28.68"
          },
          {
            "point": 200,
            "seconds": 344.82,
            "timeDisplay": "5:44.82"
          },
          {
            "point": 100,
            "seconds": 364.77,
            "timeDisplay": "6:04.77"
          },
          {
            "point": 10,
            "seconds": 393.92,
            "timeDisplay": "6:33.92"
          },
          {
            "point": 1,
            "seconds": 400.53,
            "timeDisplay": "6:40.53"
          }
        ],
        "800_FR": [
          {
            "point": 1100,
            "seconds": 497.69,
            "timeDisplay": "8:17.69"
          },
          {
            "point": 1000,
            "seconds": 516.21,
            "timeDisplay": "8:36.21"
          },
          {
            "point": 900,
            "seconds": 535.5,
            "timeDisplay": "8:55.50"
          },
          {
            "point": 800,
            "seconds": 555.68,
            "timeDisplay": "9:15.68"
          },
          {
            "point": 700,
            "seconds": 576.91,
            "timeDisplay": "9:36.91"
          },
          {
            "point": 600,
            "seconds": 599.42,
            "timeDisplay": "9:59.42"
          },
          {
            "point": 500,
            "seconds": 623.5,
            "timeDisplay": "10:23.50"
          },
          {
            "point": 400,
            "seconds": 649.64,
            "timeDisplay": "10:49.64"
          },
          {
            "point": 300,
            "seconds": 678.61,
            "timeDisplay": "11:18.61"
          },
          {
            "point": 200,
            "seconds": 711.88,
            "timeDisplay": "11:51.88"
          },
          {
            "point": 100,
            "seconds": 753.14,
            "timeDisplay": "12:33.14"
          },
          {
            "point": 10,
            "seconds": 814.0,
            "timeDisplay": "13:34.00"
          },
          {
            "point": 1,
            "seconds": 828.03,
            "timeDisplay": "13:48.03"
          }
        ],
        "1500_FR": [
          {
            "point": 1100,
            "seconds": 936.02,
            "timeDisplay": "15:36.02"
          },
          {
            "point": 1000,
            "seconds": 976.43,
            "timeDisplay": "16:16.43"
          },
          {
            "point": 900,
            "seconds": 1018.2,
            "timeDisplay": "16:58.20"
          },
          {
            "point": 800,
            "seconds": 1061.56,
            "timeDisplay": "17:41.56"
          },
          {
            "point": 700,
            "seconds": 1106.77,
            "timeDisplay": "18:26.77"
          },
          {
            "point": 600,
            "seconds": 1154.19,
            "timeDisplay": "19:14.19"
          },
          {
            "point": 500,
            "seconds": 1204.35,
            "timeDisplay": "20:04.35"
          },
          {
            "point": 400,
            "seconds": 1258.0,
            "timeDisplay": "20:58.00"
          },
          {
            "point": 300,
            "seconds": 1316.39,
            "timeDisplay": "21:56.39"
          },
          {
            "point": 200,
            "seconds": 1381.82,
            "timeDisplay": "23:01.82"
          },
          {
            "point": 100,
            "seconds": 1459.92,
            "timeDisplay": "24:19.92"
          },
          {
            "point": 10,
            "seconds": 1565.04,
            "timeDisplay": "26:05.04"
          },
          {
            "point": 1,
            "seconds": 1585.53,
            "timeDisplay": "26:25.53"
          }
        ],
        "50_BK": [
          {
            "point": 1100,
            "seconds": 27.29,
            "timeDisplay": "27.29"
          },
          {
            "point": 1000,
            "seconds": 28.47,
            "timeDisplay": "28.47"
          },
          {
            "point": 900,
            "seconds": 29.7,
            "timeDisplay": "29.70"
          },
          {
            "point": 800,
            "seconds": 30.98,
            "timeDisplay": "30.98"
          },
          {
            "point": 700,
            "seconds": 32.31,
            "timeDisplay": "32.31"
          },
          {
            "point": 600,
            "seconds": 33.7,
            "timeDisplay": "33.70"
          },
          {
            "point": 500,
            "seconds": 35.17,
            "timeDisplay": "35.17"
          },
          {
            "point": 400,
            "seconds": 36.74,
            "timeDisplay": "36.74"
          },
          {
            "point": 300,
            "seconds": 38.45,
            "timeDisplay": "38.45"
          },
          {
            "point": 200,
            "seconds": 40.37,
            "timeDisplay": "40.37"
          },
          {
            "point": 100,
            "seconds": 42.64,
            "timeDisplay": "42.64"
          },
          {
            "point": 10,
            "seconds": 45.69,
            "timeDisplay": "45.69"
          },
          {
            "point": 1,
            "seconds": 46.29,
            "timeDisplay": "46.29"
          }
        ],
        "100_BK": [
          {
            "point": 1100,
            "seconds": 58.62,
            "timeDisplay": "58.62"
          },
          {
            "point": 1000,
            "seconds": 61.18,
            "timeDisplay": "1:01.18"
          },
          {
            "point": 900,
            "seconds": 63.82,
            "timeDisplay": "1:03.82"
          },
          {
            "point": 800,
            "seconds": 66.55,
            "timeDisplay": "1:06.55"
          },
          {
            "point": 700,
            "seconds": 69.41,
            "timeDisplay": "1:09.41"
          },
          {
            "point": 600,
            "seconds": 72.4,
            "timeDisplay": "1:12.40"
          },
          {
            "point": 500,
            "seconds": 75.56,
            "timeDisplay": "1:15.56"
          },
          {
            "point": 400,
            "seconds": 78.94,
            "timeDisplay": "1:18.94"
          },
          {
            "point": 300,
            "seconds": 82.61,
            "timeDisplay": "1:22.61"
          },
          {
            "point": 200,
            "seconds": 86.72,
            "timeDisplay": "1:26.72"
          },
          {
            "point": 100,
            "seconds": 91.61,
            "timeDisplay": "1:31.61"
          },
          {
            "point": 10,
            "seconds": 98.16,
            "timeDisplay": "1:38.16"
          },
          {
            "point": 1,
            "seconds": 99.43,
            "timeDisplay": "1:39.43"
          }
        ],
        "200_BK": [
          {
            "point": 1100,
            "seconds": 125.85,
            "timeDisplay": "2:05.85"
          },
          {
            "point": 1000,
            "seconds": 131.14,
            "timeDisplay": "2:11.14"
          },
          {
            "point": 900,
            "seconds": 136.62,
            "timeDisplay": "2:16.62"
          },
          {
            "point": 800,
            "seconds": 142.31,
            "timeDisplay": "2:22.31"
          },
          {
            "point": 700,
            "seconds": 148.26,
            "timeDisplay": "2:28.26"
          },
          {
            "point": 600,
            "seconds": 154.51,
            "timeDisplay": "2:34.51"
          },
          {
            "point": 500,
            "seconds": 161.14,
            "timeDisplay": "2:41.14"
          },
          {
            "point": 400,
            "seconds": 168.24,
            "timeDisplay": "2:48.24"
          },
          {
            "point": 300,
            "seconds": 176.0,
            "timeDisplay": "2:56.00"
          },
          {
            "point": 200,
            "seconds": 184.73,
            "timeDisplay": "3:04.73"
          },
          {
            "point": 100,
            "seconds": 195.23,
            "timeDisplay": "3:15.23"
          },
          {
            "point": 10,
            "seconds": 209.6,
            "timeDisplay": "3:29.60"
          },
          {
            "point": 1,
            "seconds": 212.49,
            "timeDisplay": "3:32.49"
          }
        ],
        "50_BR": [
          {
            "point": 1100,
            "seconds": 30.01,
            "timeDisplay": "30.01"
          },
          {
            "point": 1000,
            "seconds": 31.34,
            "timeDisplay": "31.34"
          },
          {
            "point": 900,
            "seconds": 32.72,
            "timeDisplay": "32.72"
          },
          {
            "point": 800,
            "seconds": 34.14,
            "timeDisplay": "34.14"
          },
          {
            "point": 700,
            "seconds": 35.62,
            "timeDisplay": "35.62"
          },
          {
            "point": 600,
            "seconds": 37.17,
            "timeDisplay": "37.17"
          },
          {
            "point": 500,
            "seconds": 38.81,
            "timeDisplay": "38.81"
          },
          {
            "point": 400,
            "seconds": 40.56,
            "timeDisplay": "40.56"
          },
          {
            "point": 300,
            "seconds": 42.45,
            "timeDisplay": "42.45"
          },
          {
            "point": 200,
            "seconds": 44.56,
            "timeDisplay": "44.56"
          },
          {
            "point": 100,
            "seconds": 47.07,
            "timeDisplay": "47.07"
          },
          {
            "point": 10,
            "seconds": 50.38,
            "timeDisplay": "50.38"
          },
          {
            "point": 1,
            "seconds": 51.01,
            "timeDisplay": "51.01"
          }
        ],
        "100_BR": [
          {
            "point": 1100,
            "seconds": 65.55,
            "timeDisplay": "1:05.55"
          },
          {
            "point": 1000,
            "seconds": 68.59,
            "timeDisplay": "1:08.59"
          },
          {
            "point": 900,
            "seconds": 71.73,
            "timeDisplay": "1:11.73"
          },
          {
            "point": 800,
            "seconds": 74.97,
            "timeDisplay": "1:14.97"
          },
          {
            "point": 700,
            "seconds": 78.33,
            "timeDisplay": "1:18.33"
          },
          {
            "point": 600,
            "seconds": 81.84,
            "timeDisplay": "1:21.84"
          },
          {
            "point": 500,
            "seconds": 85.53,
            "timeDisplay": "1:25.53"
          },
          {
            "point": 400,
            "seconds": 89.45,
            "timeDisplay": "1:29.45"
          },
          {
            "point": 300,
            "seconds": 93.67,
            "timeDisplay": "1:33.67"
          },
          {
            "point": 200,
            "seconds": 98.34,
            "timeDisplay": "1:38.34"
          },
          {
            "point": 100,
            "seconds": 103.8,
            "timeDisplay": "1:43.80"
          },
          {
            "point": 10,
            "seconds": 110.82,
            "timeDisplay": "1:50.82"
          },
          {
            "point": 1,
            "seconds": 112.08,
            "timeDisplay": "1:52.08"
          }
        ],
        "200_BR": [
          {
            "point": 1100,
            "seconds": 139.67,
            "timeDisplay": "2:19.67"
          },
          {
            "point": 1000,
            "seconds": 146.84,
            "timeDisplay": "2:26.84"
          },
          {
            "point": 900,
            "seconds": 154.19,
            "timeDisplay": "2:34.19"
          },
          {
            "point": 800,
            "seconds": 161.73,
            "timeDisplay": "2:41.73"
          },
          {
            "point": 700,
            "seconds": 169.51,
            "timeDisplay": "2:49.51"
          },
          {
            "point": 600,
            "seconds": 177.57,
            "timeDisplay": "2:57.57"
          },
          {
            "point": 500,
            "seconds": 185.96,
            "timeDisplay": "3:05.96"
          },
          {
            "point": 400,
            "seconds": 194.77,
            "timeDisplay": "3:14.77"
          },
          {
            "point": 300,
            "seconds": 204.13,
            "timeDisplay": "3:24.13"
          },
          {
            "point": 200,
            "seconds": 214.31,
            "timeDisplay": "3:34.31"
          },
          {
            "point": 100,
            "seconds": 225.89,
            "timeDisplay": "3:45.89"
          },
          {
            "point": 10,
            "seconds": 239.79,
            "timeDisplay": "3:59.79"
          },
          {
            "point": 1,
            "seconds": 241.98,
            "timeDisplay": "4:01.98"
          }
        ],
        "50_FL": [
          {
            "point": 1100,
            "seconds": 25.97,
            "timeDisplay": "25.97"
          },
          {
            "point": 1000,
            "seconds": 27.06,
            "timeDisplay": "27.06"
          },
          {
            "point": 900,
            "seconds": 28.18,
            "timeDisplay": "28.18"
          },
          {
            "point": 800,
            "seconds": 29.35,
            "timeDisplay": "29.35"
          },
          {
            "point": 700,
            "seconds": 30.57,
            "timeDisplay": "30.57"
          },
          {
            "point": 600,
            "seconds": 31.85,
            "timeDisplay": "31.85"
          },
          {
            "point": 500,
            "seconds": 33.21,
            "timeDisplay": "33.21"
          },
          {
            "point": 400,
            "seconds": 34.67,
            "timeDisplay": "34.67"
          },
          {
            "point": 300,
            "seconds": 36.27,
            "timeDisplay": "36.27"
          },
          {
            "point": 200,
            "seconds": 38.07,
            "timeDisplay": "38.07"
          },
          {
            "point": 100,
            "seconds": 40.24,
            "timeDisplay": "40.24"
          },
          {
            "point": 10,
            "seconds": 43.22,
            "timeDisplay": "43.22"
          },
          {
            "point": 1,
            "seconds": 43.83,
            "timeDisplay": "43.83"
          }
        ],
        "100_FL": [
          {
            "point": 1100,
            "seconds": 56.19,
            "timeDisplay": "56.19"
          },
          {
            "point": 1000,
            "seconds": 58.62,
            "timeDisplay": "58.62"
          },
          {
            "point": 900,
            "seconds": 61.13,
            "timeDisplay": "1:01.13"
          },
          {
            "point": 800,
            "seconds": 63.73,
            "timeDisplay": "1:03.73"
          },
          {
            "point": 700,
            "seconds": 66.45,
            "timeDisplay": "1:06.45"
          },
          {
            "point": 600,
            "seconds": 69.29,
            "timeDisplay": "1:09.29"
          },
          {
            "point": 500,
            "seconds": 72.31,
            "timeDisplay": "1:12.31"
          },
          {
            "point": 400,
            "seconds": 75.53,
            "timeDisplay": "1:15.53"
          },
          {
            "point": 300,
            "seconds": 79.03,
            "timeDisplay": "1:19.03"
          },
          {
            "point": 200,
            "seconds": 82.96,
            "timeDisplay": "1:22.96"
          },
          {
            "point": 100,
            "seconds": 87.65,
            "timeDisplay": "1:27.65"
          },
          {
            "point": 10,
            "seconds": 93.97,
            "timeDisplay": "1:33.97"
          },
          {
            "point": 1,
            "seconds": 95.21,
            "timeDisplay": "1:35.21"
          }
        ],
        "200_FL": [
          {
            "point": 1100,
            "seconds": 125.34,
            "timeDisplay": "2:05.34"
          },
          {
            "point": 1000,
            "seconds": 130.95,
            "timeDisplay": "2:10.95"
          },
          {
            "point": 900,
            "seconds": 136.74,
            "timeDisplay": "2:16.74"
          },
          {
            "point": 800,
            "seconds": 142.74,
            "timeDisplay": "2:22.74"
          },
          {
            "point": 700,
            "seconds": 148.97,
            "timeDisplay": "2:28.97"
          },
          {
            "point": 600,
            "seconds": 155.5,
            "timeDisplay": "2:35.50"
          },
          {
            "point": 500,
            "seconds": 162.38,
            "timeDisplay": "2:42.38"
          },
          {
            "point": 400,
            "seconds": 169.72,
            "timeDisplay": "2:49.72"
          },
          {
            "point": 300,
            "seconds": 177.66,
            "timeDisplay": "2:57.66"
          },
          {
            "point": 200,
            "seconds": 186.51,
            "timeDisplay": "3:06.51"
          },
          {
            "point": 100,
            "seconds": 196.96,
            "timeDisplay": "3:16.96"
          },
          {
            "point": 10,
            "seconds": 210.72,
            "timeDisplay": "3:30.72"
          },
          {
            "point": 1,
            "seconds": 213.29,
            "timeDisplay": "3:33.29"
          }
        ],
        "200_IM": [
          {
            "point": 1100,
            "seconds": 128.28,
            "timeDisplay": "2:08.28"
          },
          {
            "point": 1000,
            "seconds": 133.16,
            "timeDisplay": "2:13.16"
          },
          {
            "point": 900,
            "seconds": 138.25,
            "timeDisplay": "2:18.25"
          },
          {
            "point": 800,
            "seconds": 143.56,
            "timeDisplay": "2:23.56"
          },
          {
            "point": 700,
            "seconds": 149.14,
            "timeDisplay": "2:29.14"
          },
          {
            "point": 600,
            "seconds": 155.05,
            "timeDisplay": "2:35.05"
          },
          {
            "point": 500,
            "seconds": 161.36,
            "timeDisplay": "2:41.36"
          },
          {
            "point": 400,
            "seconds": 168.19,
            "timeDisplay": "2:48.19"
          },
          {
            "point": 300,
            "seconds": 175.74,
            "timeDisplay": "2:55.74"
          },
          {
            "point": 200,
            "seconds": 184.38,
            "timeDisplay": "3:04.38"
          },
          {
            "point": 100,
            "seconds": 195.04,
            "timeDisplay": "3:15.04"
          },
          {
            "point": 10,
            "seconds": 210.54,
            "timeDisplay": "3:30.54"
          },
          {
            "point": 1,
            "seconds": 214.03,
            "timeDisplay": "3:34.03"
          }
        ],
        "400_IM": [
          {
            "point": 1100,
            "seconds": 270.05,
            "timeDisplay": "4:30.05"
          },
          {
            "point": 1000,
            "seconds": 281.21,
            "timeDisplay": "4:41.21"
          },
          {
            "point": 900,
            "seconds": 292.77,
            "timeDisplay": "4:52.77"
          },
          {
            "point": 800,
            "seconds": 304.81,
            "timeDisplay": "5:04.81"
          },
          {
            "point": 700,
            "seconds": 317.39,
            "timeDisplay": "5:17.39"
          },
          {
            "point": 600,
            "seconds": 330.63,
            "timeDisplay": "5:30.63"
          },
          {
            "point": 500,
            "seconds": 344.68,
            "timeDisplay": "5:44.68"
          },
          {
            "point": 400,
            "seconds": 359.78,
            "timeDisplay": "5:59.78"
          },
          {
            "point": 300,
            "seconds": 376.28,
            "timeDisplay": "6:16.28"
          },
          {
            "point": 200,
            "seconds": 394.95,
            "timeDisplay": "6:34.95"
          },
          {
            "point": 100,
            "seconds": 417.46,
            "timeDisplay": "6:57.46"
          },
          {
            "point": 10,
            "seconds": 448.61,
            "timeDisplay": "7:28.61"
          },
          {
            "point": 1,
            "seconds": 455.0,
            "timeDisplay": "7:35.00"
          }
        ]
      },
      "14": {
        "50_FR": [
          {
            "point": 1100,
            "seconds": 22.05,
            "timeDisplay": "22.05"
          },
          {
            "point": 1000,
            "seconds": 23.22,
            "timeDisplay": "23.22"
          },
          {
            "point": 900,
            "seconds": 24.41,
            "timeDisplay": "24.41"
          },
          {
            "point": 800,
            "seconds": 25.64,
            "timeDisplay": "25.64"
          },
          {
            "point": 700,
            "seconds": 26.9,
            "timeDisplay": "26.90"
          },
          {
            "point": 600,
            "seconds": 28.2,
            "timeDisplay": "28.20"
          },
          {
            "point": 500,
            "seconds": 29.55,
            "timeDisplay": "29.55"
          },
          {
            "point": 400,
            "seconds": 30.97,
            "timeDisplay": "30.97"
          },
          {
            "point": 300,
            "seconds": 32.47,
            "timeDisplay": "32.47"
          },
          {
            "point": 200,
            "seconds": 34.08,
            "timeDisplay": "34.08"
          },
          {
            "point": 100,
            "seconds": 35.91,
            "timeDisplay": "35.91"
          },
          {
            "point": 10,
            "seconds": 38.05,
            "timeDisplay": "38.05"
          },
          {
            "point": 1,
            "seconds": 38.38,
            "timeDisplay": "38.38"
          }
        ],
        "100_FR": [
          {
            "point": 1100,
            "seconds": 49.57,
            "timeDisplay": "49.57"
          },
          {
            "point": 1000,
            "seconds": 51.69,
            "timeDisplay": "51.69"
          },
          {
            "point": 900,
            "seconds": 53.88,
            "timeDisplay": "53.88"
          },
          {
            "point": 800,
            "seconds": 56.16,
            "timeDisplay": "56.16"
          },
          {
            "point": 700,
            "seconds": 58.53,
            "timeDisplay": "58.53"
          },
          {
            "point": 600,
            "seconds": 61.03,
            "timeDisplay": "1:01.03"
          },
          {
            "point": 500,
            "seconds": 63.67,
            "timeDisplay": "1:03.67"
          },
          {
            "point": 400,
            "seconds": 66.5,
            "timeDisplay": "1:06.50"
          },
          {
            "point": 300,
            "seconds": 69.58,
            "timeDisplay": "1:09.58"
          },
          {
            "point": 200,
            "seconds": 73.03,
            "timeDisplay": "1:13.03"
          },
          {
            "point": 100,
            "seconds": 77.17,
            "timeDisplay": "1:17.17"
          },
          {
            "point": 10,
            "seconds": 82.77,
            "timeDisplay": "1:22.77"
          },
          {
            "point": 1,
            "seconds": 83.88,
            "timeDisplay": "1:23.88"
          }
        ],
        "200_FR": [
          {
            "point": 1100,
            "seconds": 109.15,
            "timeDisplay": "1:49.15"
          },
          {
            "point": 1000,
            "seconds": 113.21,
            "timeDisplay": "1:53.21"
          },
          {
            "point": 900,
            "seconds": 117.44,
            "timeDisplay": "1:57.44"
          },
          {
            "point": 800,
            "seconds": 121.87,
            "timeDisplay": "2:01.87"
          },
          {
            "point": 700,
            "seconds": 126.53,
            "timeDisplay": "2:06.53"
          },
          {
            "point": 600,
            "seconds": 131.46,
            "timeDisplay": "2:11.46"
          },
          {
            "point": 500,
            "seconds": 136.75,
            "timeDisplay": "2:16.75"
          },
          {
            "point": 400,
            "seconds": 142.48,
            "timeDisplay": "2:22.48"
          },
          {
            "point": 300,
            "seconds": 148.83,
            "timeDisplay": "2:28.83"
          },
          {
            "point": 200,
            "seconds": 156.13,
            "timeDisplay": "2:36.13"
          },
          {
            "point": 100,
            "seconds": 165.18,
            "timeDisplay": "2:45.18"
          },
          {
            "point": 10,
            "seconds": 178.53,
            "timeDisplay": "2:58.53"
          },
          {
            "point": 1,
            "seconds": 181.62,
            "timeDisplay": "3:01.62"
          }
        ],
        "400_FR": [
          {
            "point": 1100,
            "seconds": 231.89,
            "timeDisplay": "3:51.89"
          },
          {
            "point": 1000,
            "seconds": 240.66,
            "timeDisplay": "4:00.66"
          },
          {
            "point": 900,
            "seconds": 249.78,
            "timeDisplay": "4:09.78"
          },
          {
            "point": 800,
            "seconds": 259.31,
            "timeDisplay": "4:19.31"
          },
          {
            "point": 700,
            "seconds": 269.34,
            "timeDisplay": "4:29.34"
          },
          {
            "point": 600,
            "seconds": 279.95,
            "timeDisplay": "4:39.95"
          },
          {
            "point": 500,
            "seconds": 291.29,
            "timeDisplay": "4:51.29"
          },
          {
            "point": 400,
            "seconds": 303.59,
            "timeDisplay": "5:03.59"
          },
          {
            "point": 300,
            "seconds": 317.18,
            "timeDisplay": "5:17.18"
          },
          {
            "point": 200,
            "seconds": 332.77,
            "timeDisplay": "5:32.77"
          },
          {
            "point": 100,
            "seconds": 352.01,
            "timeDisplay": "5:52.01"
          },
          {
            "point": 10,
            "seconds": 380.14,
            "timeDisplay": "6:20.14"
          },
          {
            "point": 1,
            "seconds": 386.52,
            "timeDisplay": "6:26.52"
          }
        ],
        "800_FR": [
          {
            "point": 1100,
            "seconds": 480.49,
            "timeDisplay": "8:00.49"
          },
          {
            "point": 1000,
            "seconds": 498.38,
            "timeDisplay": "8:18.38"
          },
          {
            "point": 900,
            "seconds": 517.0,
            "timeDisplay": "8:37.00"
          },
          {
            "point": 800,
            "seconds": 536.48,
            "timeDisplay": "8:56.48"
          },
          {
            "point": 700,
            "seconds": 556.98,
            "timeDisplay": "9:16.98"
          },
          {
            "point": 600,
            "seconds": 578.71,
            "timeDisplay": "9:38.71"
          },
          {
            "point": 500,
            "seconds": 601.97,
            "timeDisplay": "10:01.97"
          },
          {
            "point": 400,
            "seconds": 627.2,
            "timeDisplay": "10:27.20"
          },
          {
            "point": 300,
            "seconds": 655.17,
            "timeDisplay": "10:55.17"
          },
          {
            "point": 200,
            "seconds": 687.29,
            "timeDisplay": "11:27.29"
          },
          {
            "point": 100,
            "seconds": 727.13,
            "timeDisplay": "12:07.13"
          },
          {
            "point": 10,
            "seconds": 785.88,
            "timeDisplay": "13:05.88"
          },
          {
            "point": 1,
            "seconds": 799.43,
            "timeDisplay": "13:19.43"
          }
        ],
        "1500_FR": [
          {
            "point": 1100,
            "seconds": 905.8,
            "timeDisplay": "15:05.80"
          },
          {
            "point": 1000,
            "seconds": 944.9,
            "timeDisplay": "15:44.90"
          },
          {
            "point": 900,
            "seconds": 985.33,
            "timeDisplay": "16:25.33"
          },
          {
            "point": 800,
            "seconds": 1027.28,
            "timeDisplay": "17:07.28"
          },
          {
            "point": 700,
            "seconds": 1071.03,
            "timeDisplay": "17:51.03"
          },
          {
            "point": 600,
            "seconds": 1116.93,
            "timeDisplay": "18:36.93"
          },
          {
            "point": 500,
            "seconds": 1165.47,
            "timeDisplay": "19:25.47"
          },
          {
            "point": 400,
            "seconds": 1217.38,
            "timeDisplay": "20:17.38"
          },
          {
            "point": 300,
            "seconds": 1273.88,
            "timeDisplay": "21:13.88"
          },
          {
            "point": 200,
            "seconds": 1337.21,
            "timeDisplay": "22:17.21"
          },
          {
            "point": 100,
            "seconds": 1412.78,
            "timeDisplay": "23:32.78"
          },
          {
            "point": 10,
            "seconds": 1514.51,
            "timeDisplay": "25:14.51"
          },
          {
            "point": 1,
            "seconds": 1534.34,
            "timeDisplay": "25:34.34"
          }
        ],
        "50_BK": [
          {
            "point": 1100,
            "seconds": 26.12,
            "timeDisplay": "26.12"
          },
          {
            "point": 1000,
            "seconds": 27.26,
            "timeDisplay": "27.26"
          },
          {
            "point": 900,
            "seconds": 28.44,
            "timeDisplay": "28.44"
          },
          {
            "point": 800,
            "seconds": 29.66,
            "timeDisplay": "29.66"
          },
          {
            "point": 700,
            "seconds": 30.93,
            "timeDisplay": "30.93"
          },
          {
            "point": 600,
            "seconds": 32.26,
            "timeDisplay": "32.26"
          },
          {
            "point": 500,
            "seconds": 33.67,
            "timeDisplay": "33.67"
          },
          {
            "point": 400,
            "seconds": 35.18,
            "timeDisplay": "35.18"
          },
          {
            "point": 300,
            "seconds": 36.81,
            "timeDisplay": "36.81"
          },
          {
            "point": 200,
            "seconds": 38.65,
            "timeDisplay": "38.65"
          },
          {
            "point": 100,
            "seconds": 40.83,
            "timeDisplay": "40.83"
          },
          {
            "point": 10,
            "seconds": 43.75,
            "timeDisplay": "43.75"
          },
          {
            "point": 1,
            "seconds": 44.32,
            "timeDisplay": "44.32"
          }
        ],
        "100_BK": [
          {
            "point": 1100,
            "seconds": 56.13,
            "timeDisplay": "56.13"
          },
          {
            "point": 1000,
            "seconds": 58.57,
            "timeDisplay": "58.57"
          },
          {
            "point": 900,
            "seconds": 61.1,
            "timeDisplay": "1:01.10"
          },
          {
            "point": 800,
            "seconds": 63.72,
            "timeDisplay": "1:03.72"
          },
          {
            "point": 700,
            "seconds": 66.45,
            "timeDisplay": "1:06.45"
          },
          {
            "point": 600,
            "seconds": 69.32,
            "timeDisplay": "1:09.32"
          },
          {
            "point": 500,
            "seconds": 72.34,
            "timeDisplay": "1:12.34"
          },
          {
            "point": 400,
            "seconds": 75.58,
            "timeDisplay": "1:15.58"
          },
          {
            "point": 300,
            "seconds": 79.09,
            "timeDisplay": "1:19.09"
          },
          {
            "point": 200,
            "seconds": 83.03,
            "timeDisplay": "1:23.03"
          },
          {
            "point": 100,
            "seconds": 87.71,
            "timeDisplay": "1:27.71"
          },
          {
            "point": 10,
            "seconds": 93.98,
            "timeDisplay": "1:33.98"
          },
          {
            "point": 1,
            "seconds": 95.2,
            "timeDisplay": "1:35.20"
          }
        ],
        "200_BK": [
          {
            "point": 1100,
            "seconds": 120.84,
            "timeDisplay": "2:00.84"
          },
          {
            "point": 1000,
            "seconds": 125.92,
            "timeDisplay": "2:05.92"
          },
          {
            "point": 900,
            "seconds": 131.18,
            "timeDisplay": "2:11.18"
          },
          {
            "point": 800,
            "seconds": 136.65,
            "timeDisplay": "2:16.65"
          },
          {
            "point": 700,
            "seconds": 142.36,
            "timeDisplay": "2:22.36"
          },
          {
            "point": 600,
            "seconds": 148.36,
            "timeDisplay": "2:28.36"
          },
          {
            "point": 500,
            "seconds": 154.73,
            "timeDisplay": "2:34.73"
          },
          {
            "point": 400,
            "seconds": 161.55,
            "timeDisplay": "2:41.55"
          },
          {
            "point": 300,
            "seconds": 169.0,
            "timeDisplay": "2:49.00"
          },
          {
            "point": 200,
            "seconds": 177.38,
            "timeDisplay": "2:57.38"
          },
          {
            "point": 100,
            "seconds": 187.46,
            "timeDisplay": "3:07.46"
          },
          {
            "point": 10,
            "seconds": 201.26,
            "timeDisplay": "3:21.26"
          },
          {
            "point": 1,
            "seconds": 204.04,
            "timeDisplay": "3:24.04"
          }
        ],
        "50_BR": [
          {
            "point": 1100,
            "seconds": 28.66,
            "timeDisplay": "28.66"
          },
          {
            "point": 1000,
            "seconds": 29.94,
            "timeDisplay": "29.94"
          },
          {
            "point": 900,
            "seconds": 31.25,
            "timeDisplay": "31.25"
          },
          {
            "point": 800,
            "seconds": 32.61,
            "timeDisplay": "32.61"
          },
          {
            "point": 700,
            "seconds": 34.02,
            "timeDisplay": "34.02"
          },
          {
            "point": 600,
            "seconds": 35.51,
            "timeDisplay": "35.51"
          },
          {
            "point": 500,
            "seconds": 37.07,
            "timeDisplay": "37.07"
          },
          {
            "point": 400,
            "seconds": 38.74,
            "timeDisplay": "38.74"
          },
          {
            "point": 300,
            "seconds": 40.55,
            "timeDisplay": "40.55"
          },
          {
            "point": 200,
            "seconds": 42.57,
            "timeDisplay": "42.57"
          },
          {
            "point": 100,
            "seconds": 44.96,
            "timeDisplay": "44.96"
          },
          {
            "point": 10,
            "seconds": 48.13,
            "timeDisplay": "48.13"
          },
          {
            "point": 1,
            "seconds": 48.73,
            "timeDisplay": "48.73"
          }
        ],
        "100_BR": [
          {
            "point": 1100,
            "seconds": 62.61,
            "timeDisplay": "1:02.61"
          },
          {
            "point": 1000,
            "seconds": 65.51,
            "timeDisplay": "1:05.51"
          },
          {
            "point": 900,
            "seconds": 68.51,
            "timeDisplay": "1:08.51"
          },
          {
            "point": 800,
            "seconds": 71.61,
            "timeDisplay": "1:11.61"
          },
          {
            "point": 700,
            "seconds": 74.82,
            "timeDisplay": "1:14.82"
          },
          {
            "point": 600,
            "seconds": 78.17,
            "timeDisplay": "1:18.17"
          },
          {
            "point": 500,
            "seconds": 81.7,
            "timeDisplay": "1:21.70"
          },
          {
            "point": 400,
            "seconds": 85.44,
            "timeDisplay": "1:25.44"
          },
          {
            "point": 300,
            "seconds": 89.47,
            "timeDisplay": "1:29.47"
          },
          {
            "point": 200,
            "seconds": 93.93,
            "timeDisplay": "1:33.93"
          },
          {
            "point": 100,
            "seconds": 99.15,
            "timeDisplay": "1:39.15"
          },
          {
            "point": 10,
            "seconds": 105.85,
            "timeDisplay": "1:45.85"
          },
          {
            "point": 1,
            "seconds": 107.05,
            "timeDisplay": "1:47.05"
          }
        ],
        "200_BR": [
          {
            "point": 1100,
            "seconds": 134.3,
            "timeDisplay": "2:14.30"
          },
          {
            "point": 1000,
            "seconds": 141.19,
            "timeDisplay": "2:21.19"
          },
          {
            "point": 900,
            "seconds": 148.25,
            "timeDisplay": "2:28.25"
          },
          {
            "point": 800,
            "seconds": 155.51,
            "timeDisplay": "2:35.51"
          },
          {
            "point": 700,
            "seconds": 162.99,
            "timeDisplay": "2:42.99"
          },
          {
            "point": 600,
            "seconds": 170.73,
            "timeDisplay": "2:50.73"
          },
          {
            "point": 500,
            "seconds": 178.8,
            "timeDisplay": "2:58.80"
          },
          {
            "point": 400,
            "seconds": 187.27,
            "timeDisplay": "3:07.27"
          },
          {
            "point": 300,
            "seconds": 196.28,
            "timeDisplay": "3:16.28"
          },
          {
            "point": 200,
            "seconds": 206.07,
            "timeDisplay": "3:26.07"
          },
          {
            "point": 100,
            "seconds": 217.19,
            "timeDisplay": "3:37.19"
          },
          {
            "point": 10,
            "seconds": 230.56,
            "timeDisplay": "3:50.56"
          },
          {
            "point": 1,
            "seconds": 232.67,
            "timeDisplay": "3:52.67"
          }
        ],
        "50_FL": [
          {
            "point": 1100,
            "seconds": 24.84,
            "timeDisplay": "24.84"
          },
          {
            "point": 1000,
            "seconds": 25.88,
            "timeDisplay": "25.88"
          },
          {
            "point": 900,
            "seconds": 26.95,
            "timeDisplay": "26.95"
          },
          {
            "point": 800,
            "seconds": 28.07,
            "timeDisplay": "28.07"
          },
          {
            "point": 700,
            "seconds": 29.23,
            "timeDisplay": "29.23"
          },
          {
            "point": 600,
            "seconds": 30.46,
            "timeDisplay": "30.46"
          },
          {
            "point": 500,
            "seconds": 31.76,
            "timeDisplay": "31.76"
          },
          {
            "point": 400,
            "seconds": 33.15,
            "timeDisplay": "33.15"
          },
          {
            "point": 300,
            "seconds": 34.68,
            "timeDisplay": "34.68"
          },
          {
            "point": 200,
            "seconds": 36.4,
            "timeDisplay": "36.40"
          },
          {
            "point": 100,
            "seconds": 38.47,
            "timeDisplay": "38.47"
          },
          {
            "point": 10,
            "seconds": 41.32,
            "timeDisplay": "41.32"
          },
          {
            "point": 1,
            "seconds": 41.91,
            "timeDisplay": "41.91"
          }
        ],
        "100_FL": [
          {
            "point": 1100,
            "seconds": 53.72,
            "timeDisplay": "53.72"
          },
          {
            "point": 1000,
            "seconds": 56.04,
            "timeDisplay": "56.04"
          },
          {
            "point": 900,
            "seconds": 58.44,
            "timeDisplay": "58.44"
          },
          {
            "point": 800,
            "seconds": 60.93,
            "timeDisplay": "1:00.93"
          },
          {
            "point": 700,
            "seconds": 63.53,
            "timeDisplay": "1:03.53"
          },
          {
            "point": 600,
            "seconds": 66.25,
            "timeDisplay": "1:06.25"
          },
          {
            "point": 500,
            "seconds": 69.13,
            "timeDisplay": "1:09.13"
          },
          {
            "point": 400,
            "seconds": 72.21,
            "timeDisplay": "1:12.21"
          },
          {
            "point": 300,
            "seconds": 75.56,
            "timeDisplay": "1:15.56"
          },
          {
            "point": 200,
            "seconds": 79.32,
            "timeDisplay": "1:19.32"
          },
          {
            "point": 100,
            "seconds": 83.8,
            "timeDisplay": "1:23.80"
          },
          {
            "point": 10,
            "seconds": 89.84,
            "timeDisplay": "1:29.84"
          },
          {
            "point": 1,
            "seconds": 91.02,
            "timeDisplay": "1:31.02"
          }
        ],
        "200_FL": [
          {
            "point": 1100,
            "seconds": 119.04,
            "timeDisplay": "1:59.04"
          },
          {
            "point": 1000,
            "seconds": 124.37,
            "timeDisplay": "2:04.37"
          },
          {
            "point": 900,
            "seconds": 129.87,
            "timeDisplay": "2:09.87"
          },
          {
            "point": 800,
            "seconds": 135.56,
            "timeDisplay": "2:15.56"
          },
          {
            "point": 700,
            "seconds": 141.49,
            "timeDisplay": "2:21.49"
          },
          {
            "point": 600,
            "seconds": 147.69,
            "timeDisplay": "2:27.69"
          },
          {
            "point": 500,
            "seconds": 154.22,
            "timeDisplay": "2:34.22"
          },
          {
            "point": 400,
            "seconds": 161.19,
            "timeDisplay": "2:41.19"
          },
          {
            "point": 300,
            "seconds": 168.73,
            "timeDisplay": "2:48.73"
          },
          {
            "point": 200,
            "seconds": 177.14,
            "timeDisplay": "2:57.14"
          },
          {
            "point": 100,
            "seconds": 187.07,
            "timeDisplay": "3:07.07"
          },
          {
            "point": 10,
            "seconds": 200.13,
            "timeDisplay": "3:20.13"
          },
          {
            "point": 1,
            "seconds": 202.58,
            "timeDisplay": "3:22.58"
          }
        ],
        "200_IM": [
          {
            "point": 1100,
            "seconds": 123.59,
            "timeDisplay": "2:03.59"
          },
          {
            "point": 1000,
            "seconds": 128.3,
            "timeDisplay": "2:08.30"
          },
          {
            "point": 900,
            "seconds": 133.2,
            "timeDisplay": "2:13.20"
          },
          {
            "point": 800,
            "seconds": 138.32,
            "timeDisplay": "2:18.32"
          },
          {
            "point": 700,
            "seconds": 143.7,
            "timeDisplay": "2:23.70"
          },
          {
            "point": 600,
            "seconds": 149.38,
            "timeDisplay": "2:29.38"
          },
          {
            "point": 500,
            "seconds": 155.47,
            "timeDisplay": "2:35.47"
          },
          {
            "point": 400,
            "seconds": 162.05,
            "timeDisplay": "2:42.05"
          },
          {
            "point": 300,
            "seconds": 169.33,
            "timeDisplay": "2:49.33"
          },
          {
            "point": 200,
            "seconds": 177.65,
            "timeDisplay": "2:57.65"
          },
          {
            "point": 100,
            "seconds": 187.92,
            "timeDisplay": "3:07.92"
          },
          {
            "point": 10,
            "seconds": 202.85,
            "timeDisplay": "3:22.85"
          },
          {
            "point": 1,
            "seconds": 206.21,
            "timeDisplay": "3:26.21"
          }
        ],
        "400_IM": [
          {
            "point": 1100,
            "seconds": 260.4,
            "timeDisplay": "4:20.40"
          },
          {
            "point": 1000,
            "seconds": 271.17,
            "timeDisplay": "4:31.17"
          },
          {
            "point": 900,
            "seconds": 282.32,
            "timeDisplay": "4:42.32"
          },
          {
            "point": 800,
            "seconds": 293.92,
            "timeDisplay": "4:53.92"
          },
          {
            "point": 700,
            "seconds": 306.06,
            "timeDisplay": "5:06.06"
          },
          {
            "point": 600,
            "seconds": 318.82,
            "timeDisplay": "5:18.82"
          },
          {
            "point": 500,
            "seconds": 332.37,
            "timeDisplay": "5:32.37"
          },
          {
            "point": 400,
            "seconds": 346.93,
            "timeDisplay": "5:46.93"
          },
          {
            "point": 300,
            "seconds": 362.86,
            "timeDisplay": "6:02.86"
          },
          {
            "point": 200,
            "seconds": 380.84,
            "timeDisplay": "6:20.84"
          },
          {
            "point": 100,
            "seconds": 402.56,
            "timeDisplay": "6:42.56"
          },
          {
            "point": 10,
            "seconds": 432.59,
            "timeDisplay": "7:12.59"
          },
          {
            "point": 1,
            "seconds": 438.76,
            "timeDisplay": "7:18.76"
          }
        ]
      }
    },
    "Girl": {
      "9&U": {
        "50_FR": [
          {
            "point": 1100,
            "seconds": 28.59,
            "timeDisplay": "28.59"
          },
          {
            "point": 1000,
            "seconds": 30.17,
            "timeDisplay": "30.17"
          },
          {
            "point": 900,
            "seconds": 31.79,
            "timeDisplay": "31.79"
          },
          {
            "point": 800,
            "seconds": 33.48,
            "timeDisplay": "33.48"
          },
          {
            "point": 700,
            "seconds": 35.24,
            "timeDisplay": "35.24"
          },
          {
            "point": 600,
            "seconds": 37.08,
            "timeDisplay": "37.08"
          },
          {
            "point": 500,
            "seconds": 39.01,
            "timeDisplay": "39.01"
          },
          {
            "point": 400,
            "seconds": 41.08,
            "timeDisplay": "41.08"
          },
          {
            "point": 300,
            "seconds": 43.31,
            "timeDisplay": "43.31"
          },
          {
            "point": 200,
            "seconds": 45.8,
            "timeDisplay": "45.80"
          },
          {
            "point": 100,
            "seconds": 48.75,
            "timeDisplay": "48.75"
          },
          {
            "point": 10,
            "seconds": 52.62,
            "timeDisplay": "52.62"
          },
          {
            "point": 1,
            "seconds": 53.35,
            "timeDisplay": "53.35"
          }
        ],
        "100_FR": [
          {
            "point": 1100,
            "seconds": 64.41,
            "timeDisplay": "1:04.41"
          },
          {
            "point": 1000,
            "seconds": 67.45,
            "timeDisplay": "1:07.45"
          },
          {
            "point": 900,
            "seconds": 70.62,
            "timeDisplay": "1:10.62"
          },
          {
            "point": 800,
            "seconds": 73.92,
            "timeDisplay": "1:13.92"
          },
          {
            "point": 700,
            "seconds": 77.39,
            "timeDisplay": "1:17.39"
          },
          {
            "point": 600,
            "seconds": 81.06,
            "timeDisplay": "1:21.06"
          },
          {
            "point": 500,
            "seconds": 84.97,
            "timeDisplay": "1:24.97"
          },
          {
            "point": 400,
            "seconds": 89.21,
            "timeDisplay": "1:29.21"
          },
          {
            "point": 300,
            "seconds": 93.89,
            "timeDisplay": "1:33.89"
          },
          {
            "point": 200,
            "seconds": 99.24,
            "timeDisplay": "1:39.24"
          },
          {
            "point": 100,
            "seconds": 105.82,
            "timeDisplay": "1:45.82"
          },
          {
            "point": 10,
            "seconds": 115.34,
            "timeDisplay": "1:55.34"
          },
          {
            "point": 1,
            "seconds": 117.47,
            "timeDisplay": "1:57.47"
          }
        ],
        "200_FR": [
          {
            "point": 1100,
            "seconds": 140.94,
            "timeDisplay": "2:20.94"
          },
          {
            "point": 1000,
            "seconds": 146.7,
            "timeDisplay": "2:26.70"
          },
          {
            "point": 900,
            "seconds": 152.73,
            "timeDisplay": "2:32.73"
          },
          {
            "point": 800,
            "seconds": 159.08,
            "timeDisplay": "2:39.08"
          },
          {
            "point": 700,
            "seconds": 165.8,
            "timeDisplay": "2:45.80"
          },
          {
            "point": 600,
            "seconds": 172.97,
            "timeDisplay": "2:52.97"
          },
          {
            "point": 500,
            "seconds": 180.71,
            "timeDisplay": "3:00.71"
          },
          {
            "point": 400,
            "seconds": 189.19,
            "timeDisplay": "3:09.19"
          },
          {
            "point": 300,
            "seconds": 198.7,
            "timeDisplay": "3:18.70"
          },
          {
            "point": 200,
            "seconds": 209.82,
            "timeDisplay": "3:29.82"
          },
          {
            "point": 100,
            "seconds": 223.97,
            "timeDisplay": "3:43.97"
          },
          {
            "point": 10,
            "seconds": 246.21,
            "timeDisplay": "4:06.21"
          },
          {
            "point": 1,
            "seconds": 251.96,
            "timeDisplay": "4:11.96"
          }
        ],
        "400_FR": [
          {
            "point": 1100,
            "seconds": 300.55,
            "timeDisplay": "5:00.55"
          },
          {
            "point": 1000,
            "seconds": 312.43,
            "timeDisplay": "5:12.43"
          },
          {
            "point": 900,
            "seconds": 324.88,
            "timeDisplay": "5:24.88"
          },
          {
            "point": 800,
            "seconds": 337.99,
            "timeDisplay": "5:37.99"
          },
          {
            "point": 700,
            "seconds": 351.92,
            "timeDisplay": "5:51.92"
          },
          {
            "point": 600,
            "seconds": 366.78,
            "timeDisplay": "6:06.78"
          },
          {
            "point": 500,
            "seconds": 382.86,
            "timeDisplay": "6:22.86"
          },
          {
            "point": 400,
            "seconds": 400.55,
            "timeDisplay": "6:40.55"
          },
          {
            "point": 300,
            "seconds": 420.47,
            "timeDisplay": "7:00.47"
          },
          {
            "point": 200,
            "seconds": 443.86,
            "timeDisplay": "7:23.86"
          },
          {
            "point": 100,
            "seconds": 473.86,
            "timeDisplay": "7:53.86"
          },
          {
            "point": 10,
            "seconds": 521.94,
            "timeDisplay": "8:41.94"
          },
          {
            "point": 1,
            "seconds": 534.79,
            "timeDisplay": "8:54.79"
          }
        ],
        "50_BK": [
          {
            "point": 1100,
            "seconds": 34.49,
            "timeDisplay": "34.49"
          },
          {
            "point": 1000,
            "seconds": 36.14,
            "timeDisplay": "36.14"
          },
          {
            "point": 900,
            "seconds": 37.86,
            "timeDisplay": "37.86"
          },
          {
            "point": 800,
            "seconds": 39.65,
            "timeDisplay": "39.65"
          },
          {
            "point": 700,
            "seconds": 41.54,
            "timeDisplay": "41.54"
          },
          {
            "point": 600,
            "seconds": 43.52,
            "timeDisplay": "43.52"
          },
          {
            "point": 500,
            "seconds": 45.65,
            "timeDisplay": "45.65"
          },
          {
            "point": 400,
            "seconds": 47.94,
            "timeDisplay": "47.94"
          },
          {
            "point": 300,
            "seconds": 50.46,
            "timeDisplay": "50.46"
          },
          {
            "point": 200,
            "seconds": 53.34,
            "timeDisplay": "53.34"
          },
          {
            "point": 100,
            "seconds": 56.87,
            "timeDisplay": "56.87"
          },
          {
            "point": 10,
            "seconds": 61.92,
            "timeDisplay": "1:01.92"
          },
          {
            "point": 1,
            "seconds": 63.04,
            "timeDisplay": "1:03.04"
          }
        ],
        "100_BK": [
          {
            "point": 1100,
            "seconds": 74.08,
            "timeDisplay": "1:14.08"
          },
          {
            "point": 1000,
            "seconds": 77.82,
            "timeDisplay": "1:17.82"
          },
          {
            "point": 900,
            "seconds": 81.69,
            "timeDisplay": "1:21.69"
          },
          {
            "point": 800,
            "seconds": 85.73,
            "timeDisplay": "1:25.73"
          },
          {
            "point": 700,
            "seconds": 89.95,
            "timeDisplay": "1:29.95"
          },
          {
            "point": 600,
            "seconds": 94.39,
            "timeDisplay": "1:34.39"
          },
          {
            "point": 500,
            "seconds": 99.11,
            "timeDisplay": "1:39.11"
          },
          {
            "point": 400,
            "seconds": 104.18,
            "timeDisplay": "1:44.18"
          },
          {
            "point": 300,
            "seconds": 109.74,
            "timeDisplay": "1:49.74"
          },
          {
            "point": 200,
            "seconds": 116.02,
            "timeDisplay": "1:56.02"
          },
          {
            "point": 100,
            "seconds": 123.63,
            "timeDisplay": "2:03.63"
          },
          {
            "point": 10,
            "seconds": 134.2,
            "timeDisplay": "2:14.20"
          },
          {
            "point": 1,
            "seconds": 136.4,
            "timeDisplay": "2:16.40"
          }
        ],
        "50_BR": [
          {
            "point": 1100,
            "seconds": 37.77,
            "timeDisplay": "37.77"
          },
          {
            "point": 1000,
            "seconds": 39.96,
            "timeDisplay": "39.96"
          },
          {
            "point": 900,
            "seconds": 42.21,
            "timeDisplay": "42.21"
          },
          {
            "point": 800,
            "seconds": 44.54,
            "timeDisplay": "44.54"
          },
          {
            "point": 700,
            "seconds": 46.95,
            "timeDisplay": "46.95"
          },
          {
            "point": 600,
            "seconds": 49.47,
            "timeDisplay": "49.47"
          },
          {
            "point": 500,
            "seconds": 52.11,
            "timeDisplay": "52.11"
          },
          {
            "point": 400,
            "seconds": 54.92,
            "timeDisplay": "54.92"
          },
          {
            "point": 300,
            "seconds": 57.93,
            "timeDisplay": "57.93"
          },
          {
            "point": 200,
            "seconds": 61.27,
            "timeDisplay": "1:01.27"
          },
          {
            "point": 100,
            "seconds": 65.16,
            "timeDisplay": "1:05.16"
          },
          {
            "point": 10,
            "seconds": 70.12,
            "timeDisplay": "1:10.12"
          },
          {
            "point": 1,
            "seconds": 70.99,
            "timeDisplay": "1:10.99"
          }
        ],
        "100_BR": [
          {
            "point": 1100,
            "seconds": 82.28,
            "timeDisplay": "1:22.28"
          },
          {
            "point": 1000,
            "seconds": 87.14,
            "timeDisplay": "1:27.14"
          },
          {
            "point": 900,
            "seconds": 92.15,
            "timeDisplay": "1:32.15"
          },
          {
            "point": 800,
            "seconds": 97.31,
            "timeDisplay": "1:37.31"
          },
          {
            "point": 700,
            "seconds": 102.66,
            "timeDisplay": "1:42.66"
          },
          {
            "point": 600,
            "seconds": 108.22,
            "timeDisplay": "1:48.22"
          },
          {
            "point": 500,
            "seconds": 114.06,
            "timeDisplay": "1:54.06"
          },
          {
            "point": 400,
            "seconds": 120.23,
            "timeDisplay": "2:00.23"
          },
          {
            "point": 300,
            "seconds": 126.87,
            "timeDisplay": "2:06.87"
          },
          {
            "point": 200,
            "seconds": 134.17,
            "timeDisplay": "2:14.17"
          },
          {
            "point": 100,
            "seconds": 142.64,
            "timeDisplay": "2:22.64"
          },
          {
            "point": 10,
            "seconds": 153.3,
            "timeDisplay": "2:33.30"
          },
          {
            "point": 1,
            "seconds": 155.14,
            "timeDisplay": "2:35.14"
          }
        ],
        "50_FL": [
          {
            "point": 1100,
            "seconds": 31.39,
            "timeDisplay": "31.39"
          },
          {
            "point": 1000,
            "seconds": 33.16,
            "timeDisplay": "33.16"
          },
          {
            "point": 900,
            "seconds": 34.98,
            "timeDisplay": "34.98"
          },
          {
            "point": 800,
            "seconds": 36.86,
            "timeDisplay": "36.86"
          },
          {
            "point": 700,
            "seconds": 38.82,
            "timeDisplay": "38.82"
          },
          {
            "point": 600,
            "seconds": 40.87,
            "timeDisplay": "40.87"
          },
          {
            "point": 500,
            "seconds": 43.02,
            "timeDisplay": "43.02"
          },
          {
            "point": 400,
            "seconds": 45.32,
            "timeDisplay": "45.32"
          },
          {
            "point": 300,
            "seconds": 47.79,
            "timeDisplay": "47.79"
          },
          {
            "point": 200,
            "seconds": 50.54,
            "timeDisplay": "50.54"
          },
          {
            "point": 100,
            "seconds": 53.77,
            "timeDisplay": "53.77"
          },
          {
            "point": 10,
            "seconds": 57.98,
            "timeDisplay": "57.98"
          },
          {
            "point": 1,
            "seconds": 58.75,
            "timeDisplay": "58.75"
          }
        ],
        "100_FL": [
          {
            "point": 1100,
            "seconds": 71.91,
            "timeDisplay": "1:11.91"
          },
          {
            "point": 1000,
            "seconds": 76.14,
            "timeDisplay": "1:16.14"
          },
          {
            "point": 900,
            "seconds": 80.53999999999999,
            "timeDisplay": "1:20.54"
          },
          {
            "point": 800,
            "seconds": 85.12,
            "timeDisplay": "1:25.12"
          },
          {
            "point": 700,
            "seconds": 89.92,
            "timeDisplay": "1:29.92"
          },
          {
            "point": 600,
            "seconds": 94.97999999999999,
            "timeDisplay": "1:34.98"
          },
          {
            "point": 500,
            "seconds": 100.37,
            "timeDisplay": "1:40.37"
          },
          {
            "point": 400,
            "seconds": 106.18,
            "timeDisplay": "1:46.18"
          },
          {
            "point": 300,
            "seconds": 112.56,
            "timeDisplay": "1:52.56"
          },
          {
            "point": 200,
            "seconds": 119.81,
            "timeDisplay": "1:59.81"
          },
          {
            "point": 100,
            "seconds": 128.63,
            "timeDisplay": "2:08.63"
          },
          {
            "point": 10,
            "seconds": 141.09,
            "timeDisplay": "2:21.09"
          },
          {
            "point": 1,
            "seconds": 143.76,
            "timeDisplay": "2:23.76"
          }
        ],
        "200_IM": [
          {
            "point": 1100,
            "seconds": 157.38,
            "timeDisplay": "2:37.38"
          },
          {
            "point": 1000,
            "seconds": 165.19,
            "timeDisplay": "2:45.19"
          },
          {
            "point": 900,
            "seconds": 173.29,
            "timeDisplay": "2:53.29"
          },
          {
            "point": 800,
            "seconds": 181.73,
            "timeDisplay": "3:01.73"
          },
          {
            "point": 700,
            "seconds": 190.57,
            "timeDisplay": "3:10.57"
          },
          {
            "point": 600,
            "seconds": 199.88,
            "timeDisplay": "3:19.88"
          },
          {
            "point": 500,
            "seconds": 209.79,
            "timeDisplay": "3:29.79"
          },
          {
            "point": 400,
            "seconds": 220.46,
            "timeDisplay": "3:40.46"
          },
          {
            "point": 300,
            "seconds": 232.17,
            "timeDisplay": "3:52.17"
          },
          {
            "point": 200,
            "seconds": 245.45,
            "timeDisplay": "4:05.45"
          },
          {
            "point": 100,
            "seconds": 261.59,
            "timeDisplay": "4:21.59"
          },
          {
            "point": 10,
            "seconds": 284.27,
            "timeDisplay": "4:44.27"
          },
          {
            "point": 1,
            "seconds": 289.06,
            "timeDisplay": "4:49.06"
          }
        ]
      },
      "10": {
        "50_FR": [
          {
            "point": 1100,
            "seconds": 26.6,
            "timeDisplay": "26.60"
          },
          {
            "point": 1000,
            "seconds": 28.07,
            "timeDisplay": "28.07"
          },
          {
            "point": 900,
            "seconds": 29.58,
            "timeDisplay": "29.58"
          },
          {
            "point": 800,
            "seconds": 31.15,
            "timeDisplay": "31.15"
          },
          {
            "point": 700,
            "seconds": 32.78,
            "timeDisplay": "32.78"
          },
          {
            "point": 600,
            "seconds": 34.49,
            "timeDisplay": "34.49"
          },
          {
            "point": 500,
            "seconds": 36.3,
            "timeDisplay": "36.30"
          },
          {
            "point": 400,
            "seconds": 38.22,
            "timeDisplay": "38.22"
          },
          {
            "point": 300,
            "seconds": 40.3,
            "timeDisplay": "40.30"
          },
          {
            "point": 200,
            "seconds": 42.61,
            "timeDisplay": "42.61"
          },
          {
            "point": 100,
            "seconds": 45.35,
            "timeDisplay": "45.35"
          },
          {
            "point": 10,
            "seconds": 48.95,
            "timeDisplay": "48.95"
          },
          {
            "point": 1,
            "seconds": 49.63,
            "timeDisplay": "49.63"
          }
        ],
        "100_FR": [
          {
            "point": 1100,
            "seconds": 59.58,
            "timeDisplay": "59.58"
          },
          {
            "point": 1000,
            "seconds": 62.39,
            "timeDisplay": "1:02.39"
          },
          {
            "point": 900,
            "seconds": 65.31,
            "timeDisplay": "1:05.31"
          },
          {
            "point": 800,
            "seconds": 68.37,
            "timeDisplay": "1:08.37"
          },
          {
            "point": 700,
            "seconds": 71.57,
            "timeDisplay": "1:11.57"
          },
          {
            "point": 600,
            "seconds": 74.97,
            "timeDisplay": "1:14.97"
          },
          {
            "point": 500,
            "seconds": 78.59,
            "timeDisplay": "1:18.59"
          },
          {
            "point": 400,
            "seconds": 82.51,
            "timeDisplay": "1:22.51"
          },
          {
            "point": 300,
            "seconds": 86.84,
            "timeDisplay": "1:26.84"
          },
          {
            "point": 200,
            "seconds": 91.78,
            "timeDisplay": "1:31.78"
          },
          {
            "point": 100,
            "seconds": 97.87,
            "timeDisplay": "1:37.87"
          },
          {
            "point": 10,
            "seconds": 106.68,
            "timeDisplay": "1:46.68"
          },
          {
            "point": 1,
            "seconds": 108.65,
            "timeDisplay": "1:48.65"
          }
        ],
        "200_FR": [
          {
            "point": 1100,
            "seconds": 131.66,
            "timeDisplay": "2:11.66"
          },
          {
            "point": 1000,
            "seconds": 137.05,
            "timeDisplay": "2:17.05"
          },
          {
            "point": 900,
            "seconds": 142.69,
            "timeDisplay": "2:22.69"
          },
          {
            "point": 800,
            "seconds": 148.62,
            "timeDisplay": "2:28.62"
          },
          {
            "point": 700,
            "seconds": 154.89,
            "timeDisplay": "2:34.89"
          },
          {
            "point": 600,
            "seconds": 161.59,
            "timeDisplay": "2:41.59"
          },
          {
            "point": 500,
            "seconds": 168.82,
            "timeDisplay": "2:48.82"
          },
          {
            "point": 400,
            "seconds": 176.74,
            "timeDisplay": "2:56.74"
          },
          {
            "point": 300,
            "seconds": 185.63,
            "timeDisplay": "3:05.63"
          },
          {
            "point": 200,
            "seconds": 196.02,
            "timeDisplay": "3:16.02"
          },
          {
            "point": 100,
            "seconds": 209.24,
            "timeDisplay": "3:29.24"
          },
          {
            "point": 10,
            "seconds": 230.02,
            "timeDisplay": "3:50.02"
          },
          {
            "point": 1,
            "seconds": 235.4,
            "timeDisplay": "3:55.40"
          }
        ],
        "400_FR": [
          {
            "point": 1100,
            "seconds": 280.26,
            "timeDisplay": "4:40.26"
          },
          {
            "point": 1000,
            "seconds": 291.34,
            "timeDisplay": "4:51.34"
          },
          {
            "point": 900,
            "seconds": 302.94,
            "timeDisplay": "5:02.94"
          },
          {
            "point": 800,
            "seconds": 315.17,
            "timeDisplay": "5:15.17"
          },
          {
            "point": 700,
            "seconds": 328.14,
            "timeDisplay": "5:28.14"
          },
          {
            "point": 600,
            "seconds": 342.01,
            "timeDisplay": "5:42.01"
          },
          {
            "point": 500,
            "seconds": 357.02,
            "timeDisplay": "5:57.02"
          },
          {
            "point": 400,
            "seconds": 373.51,
            "timeDisplay": "6:13.51"
          },
          {
            "point": 300,
            "seconds": 392.08,
            "timeDisplay": "6:32.08"
          },
          {
            "point": 200,
            "seconds": 413.89,
            "timeDisplay": "6:53.89"
          },
          {
            "point": 100,
            "seconds": 441.87,
            "timeDisplay": "7:21.87"
          },
          {
            "point": 10,
            "seconds": 486.7,
            "timeDisplay": "8:06.70"
          },
          {
            "point": 1,
            "seconds": 498.69,
            "timeDisplay": "8:18.69"
          }
        ],
        "50_BK": [
          {
            "point": 1100,
            "seconds": 31.88,
            "timeDisplay": "31.88"
          },
          {
            "point": 1000,
            "seconds": 33.41,
            "timeDisplay": "33.41"
          },
          {
            "point": 900,
            "seconds": 35.0,
            "timeDisplay": "35.00"
          },
          {
            "point": 800,
            "seconds": 36.66,
            "timeDisplay": "36.66"
          },
          {
            "point": 700,
            "seconds": 38.4,
            "timeDisplay": "38.40"
          },
          {
            "point": 600,
            "seconds": 40.24,
            "timeDisplay": "40.24"
          },
          {
            "point": 500,
            "seconds": 42.2,
            "timeDisplay": "42.20"
          },
          {
            "point": 400,
            "seconds": 44.32,
            "timeDisplay": "44.32"
          },
          {
            "point": 300,
            "seconds": 46.66,
            "timeDisplay": "46.66"
          },
          {
            "point": 200,
            "seconds": 49.32,
            "timeDisplay": "49.32"
          },
          {
            "point": 100,
            "seconds": 52.58,
            "timeDisplay": "52.58"
          },
          {
            "point": 10,
            "seconds": 57.26,
            "timeDisplay": "57.26"
          },
          {
            "point": 1,
            "seconds": 58.29,
            "timeDisplay": "58.29"
          }
        ],
        "100_BK": [
          {
            "point": 1100,
            "seconds": 68.33,
            "timeDisplay": "1:08.33"
          },
          {
            "point": 1000,
            "seconds": 71.78,
            "timeDisplay": "1:11.78"
          },
          {
            "point": 900,
            "seconds": 75.35,
            "timeDisplay": "1:15.35"
          },
          {
            "point": 800,
            "seconds": 79.07,
            "timeDisplay": "1:19.07"
          },
          {
            "point": 700,
            "seconds": 82.97,
            "timeDisplay": "1:22.97"
          },
          {
            "point": 600,
            "seconds": 87.06,
            "timeDisplay": "1:27.06"
          },
          {
            "point": 500,
            "seconds": 91.42,
            "timeDisplay": "1:31.42"
          },
          {
            "point": 400,
            "seconds": 96.1,
            "timeDisplay": "1:36.10"
          },
          {
            "point": 300,
            "seconds": 101.22,
            "timeDisplay": "1:41.22"
          },
          {
            "point": 200,
            "seconds": 107.02,
            "timeDisplay": "1:47.02"
          },
          {
            "point": 100,
            "seconds": 114.03,
            "timeDisplay": "1:54.03"
          },
          {
            "point": 10,
            "seconds": 123.78,
            "timeDisplay": "2:03.78"
          },
          {
            "point": 1,
            "seconds": 125.81,
            "timeDisplay": "2:05.81"
          }
        ],
        "50_BR": [
          {
            "point": 1100,
            "seconds": 34.46,
            "timeDisplay": "34.46"
          },
          {
            "point": 1000,
            "seconds": 36.46,
            "timeDisplay": "36.46"
          },
          {
            "point": 900,
            "seconds": 38.51,
            "timeDisplay": "38.51"
          },
          {
            "point": 800,
            "seconds": 40.64,
            "timeDisplay": "40.64"
          },
          {
            "point": 700,
            "seconds": 42.84,
            "timeDisplay": "42.84"
          },
          {
            "point": 600,
            "seconds": 45.14,
            "timeDisplay": "45.14"
          },
          {
            "point": 500,
            "seconds": 47.55,
            "timeDisplay": "47.55"
          },
          {
            "point": 400,
            "seconds": 50.11,
            "timeDisplay": "50.11"
          },
          {
            "point": 300,
            "seconds": 52.86,
            "timeDisplay": "52.86"
          },
          {
            "point": 200,
            "seconds": 55.9,
            "timeDisplay": "55.90"
          },
          {
            "point": 100,
            "seconds": 59.45,
            "timeDisplay": "59.45"
          },
          {
            "point": 10,
            "seconds": 63.97,
            "timeDisplay": "1:03.97"
          },
          {
            "point": 1,
            "seconds": 64.78,
            "timeDisplay": "1:04.78"
          }
        ],
        "100_BR": [
          {
            "point": 1100,
            "seconds": 75.28,
            "timeDisplay": "1:15.28"
          },
          {
            "point": 1000,
            "seconds": 79.73,
            "timeDisplay": "1:19.73"
          },
          {
            "point": 900,
            "seconds": 84.31,
            "timeDisplay": "1:24.31"
          },
          {
            "point": 800,
            "seconds": 89.03,
            "timeDisplay": "1:29.03"
          },
          {
            "point": 700,
            "seconds": 93.93,
            "timeDisplay": "1:33.93"
          },
          {
            "point": 600,
            "seconds": 99.02,
            "timeDisplay": "1:39.02"
          },
          {
            "point": 500,
            "seconds": 104.36,
            "timeDisplay": "1:44.36"
          },
          {
            "point": 400,
            "seconds": 110.01,
            "timeDisplay": "1:50.01"
          },
          {
            "point": 300,
            "seconds": 116.07,
            "timeDisplay": "1:56.07"
          },
          {
            "point": 200,
            "seconds": 122.75,
            "timeDisplay": "2:02.75"
          },
          {
            "point": 100,
            "seconds": 130.5,
            "timeDisplay": "2:10.50"
          },
          {
            "point": 10,
            "seconds": 140.21,
            "timeDisplay": "2:20.21"
          },
          {
            "point": 1,
            "seconds": 141.95,
            "timeDisplay": "2:21.95"
          }
        ],
        "50_FL": [
          {
            "point": 1100,
            "seconds": 29.06,
            "timeDisplay": "29.06"
          },
          {
            "point": 1000,
            "seconds": 30.7,
            "timeDisplay": "30.70"
          },
          {
            "point": 900,
            "seconds": 32.39,
            "timeDisplay": "32.39"
          },
          {
            "point": 800,
            "seconds": 34.13,
            "timeDisplay": "34.13"
          },
          {
            "point": 700,
            "seconds": 35.95,
            "timeDisplay": "35.95"
          },
          {
            "point": 600,
            "seconds": 37.84,
            "timeDisplay": "37.84"
          },
          {
            "point": 500,
            "seconds": 39.84,
            "timeDisplay": "39.84"
          },
          {
            "point": 400,
            "seconds": 41.99,
            "timeDisplay": "41.99"
          },
          {
            "point": 300,
            "seconds": 44.26,
            "timeDisplay": "44.26"
          },
          {
            "point": 200,
            "seconds": 46.8,
            "timeDisplay": "46.80"
          },
          {
            "point": 100,
            "seconds": 49.79,
            "timeDisplay": "49.79"
          },
          {
            "point": 10,
            "seconds": 53.69,
            "timeDisplay": "53.69"
          },
          {
            "point": 1,
            "seconds": 54.39,
            "timeDisplay": "54.39"
          }
        ],
        "100_FL": [
          {
            "point": 1100,
            "seconds": 65.54,
            "timeDisplay": "1:05.54"
          },
          {
            "point": 1000,
            "seconds": 69.4,
            "timeDisplay": "1:09.40"
          },
          {
            "point": 900,
            "seconds": 73.39,
            "timeDisplay": "1:13.39"
          },
          {
            "point": 800,
            "seconds": 77.58,
            "timeDisplay": "1:17.58"
          },
          {
            "point": 700,
            "seconds": 81.95,
            "timeDisplay": "1:21.95"
          },
          {
            "point": 600,
            "seconds": 86.57,
            "timeDisplay": "1:26.57"
          },
          {
            "point": 500,
            "seconds": 91.48,
            "timeDisplay": "1:31.48"
          },
          {
            "point": 400,
            "seconds": 96.77000000000001,
            "timeDisplay": "1:36.77"
          },
          {
            "point": 300,
            "seconds": 102.59,
            "timeDisplay": "1:42.59"
          },
          {
            "point": 200,
            "seconds": 109.19,
            "timeDisplay": "1:49.19"
          },
          {
            "point": 100,
            "seconds": 117.22999999999999,
            "timeDisplay": "1:57.23"
          },
          {
            "point": 10,
            "seconds": 128.59,
            "timeDisplay": "2:08.59"
          },
          {
            "point": 1,
            "seconds": 131.01,
            "timeDisplay": "2:11.01"
          }
        ],
        "200_IM": [
          {
            "point": 1100,
            "seconds": 146.42,
            "timeDisplay": "2:26.42"
          },
          {
            "point": 1000,
            "seconds": 153.68,
            "timeDisplay": "2:33.68"
          },
          {
            "point": 900,
            "seconds": 161.21,
            "timeDisplay": "2:41.21"
          },
          {
            "point": 800,
            "seconds": 169.07,
            "timeDisplay": "2:49.07"
          },
          {
            "point": 700,
            "seconds": 177.29,
            "timeDisplay": "2:57.29"
          },
          {
            "point": 600,
            "seconds": 185.95,
            "timeDisplay": "3:05.95"
          },
          {
            "point": 500,
            "seconds": 195.17,
            "timeDisplay": "3:15.17"
          },
          {
            "point": 400,
            "seconds": 205.08,
            "timeDisplay": "3:25.08"
          },
          {
            "point": 300,
            "seconds": 215.99,
            "timeDisplay": "3:35.99"
          },
          {
            "point": 200,
            "seconds": 228.34,
            "timeDisplay": "3:48.34"
          },
          {
            "point": 100,
            "seconds": 243.36,
            "timeDisplay": "4:03.36"
          },
          {
            "point": 10,
            "seconds": 264.45,
            "timeDisplay": "4:24.45"
          },
          {
            "point": 1,
            "seconds": 268.91,
            "timeDisplay": "4:28.91"
          }
        ]
      },
      "11": {
        "50_FR": [
          {
            "point": 1100,
            "seconds": 25.69,
            "timeDisplay": "25.69"
          },
          {
            "point": 1000,
            "seconds": 26.97,
            "timeDisplay": "26.97"
          },
          {
            "point": 900,
            "seconds": 28.3,
            "timeDisplay": "28.30"
          },
          {
            "point": 800,
            "seconds": 29.67,
            "timeDisplay": "29.67"
          },
          {
            "point": 700,
            "seconds": 31.1,
            "timeDisplay": "31.10"
          },
          {
            "point": 600,
            "seconds": 32.59,
            "timeDisplay": "32.59"
          },
          {
            "point": 500,
            "seconds": 34.16,
            "timeDisplay": "34.16"
          },
          {
            "point": 400,
            "seconds": 35.84,
            "timeDisplay": "35.84"
          },
          {
            "point": 300,
            "seconds": 37.65,
            "timeDisplay": "37.65"
          },
          {
            "point": 200,
            "seconds": 39.68,
            "timeDisplay": "39.68"
          },
          {
            "point": 100,
            "seconds": 42.07,
            "timeDisplay": "42.07"
          },
          {
            "point": 10,
            "seconds": 45.21,
            "timeDisplay": "45.21"
          },
          {
            "point": 1,
            "seconds": 45.81,
            "timeDisplay": "45.81"
          }
        ],
        "100_FR": [
          {
            "point": 1100,
            "seconds": 57.31,
            "timeDisplay": "57.31"
          },
          {
            "point": 1000,
            "seconds": 59.76,
            "timeDisplay": "59.76"
          },
          {
            "point": 900,
            "seconds": 62.31,
            "timeDisplay": "1:02.31"
          },
          {
            "point": 800,
            "seconds": 64.97,
            "timeDisplay": "1:04.97"
          },
          {
            "point": 700,
            "seconds": 67.77,
            "timeDisplay": "1:07.77"
          },
          {
            "point": 600,
            "seconds": 70.72,
            "timeDisplay": "1:10.72"
          },
          {
            "point": 500,
            "seconds": 73.88,
            "timeDisplay": "1:13.88"
          },
          {
            "point": 400,
            "seconds": 77.29,
            "timeDisplay": "1:17.29"
          },
          {
            "point": 300,
            "seconds": 81.06,
            "timeDisplay": "1:21.06"
          },
          {
            "point": 200,
            "seconds": 85.37,
            "timeDisplay": "1:25.37"
          },
          {
            "point": 100,
            "seconds": 90.67,
            "timeDisplay": "1:30.67"
          },
          {
            "point": 10,
            "seconds": 98.35,
            "timeDisplay": "1:38.35"
          },
          {
            "point": 1,
            "seconds": 100.07,
            "timeDisplay": "1:40.07"
          }
        ],
        "200_FR": [
          {
            "point": 1100,
            "seconds": 125.81,
            "timeDisplay": "2:05.81"
          },
          {
            "point": 1000,
            "seconds": 130.47,
            "timeDisplay": "2:10.47"
          },
          {
            "point": 900,
            "seconds": 135.36,
            "timeDisplay": "2:15.36"
          },
          {
            "point": 800,
            "seconds": 140.5,
            "timeDisplay": "2:20.50"
          },
          {
            "point": 700,
            "seconds": 145.94,
            "timeDisplay": "2:25.94"
          },
          {
            "point": 600,
            "seconds": 151.74,
            "timeDisplay": "2:31.74"
          },
          {
            "point": 500,
            "seconds": 158.01,
            "timeDisplay": "2:38.01"
          },
          {
            "point": 400,
            "seconds": 164.87,
            "timeDisplay": "2:44.87"
          },
          {
            "point": 300,
            "seconds": 172.58,
            "timeDisplay": "2:52.58"
          },
          {
            "point": 200,
            "seconds": 181.58,
            "timeDisplay": "3:01.58"
          },
          {
            "point": 100,
            "seconds": 193.03,
            "timeDisplay": "3:13.03"
          },
          {
            "point": 10,
            "seconds": 211.04,
            "timeDisplay": "3:31.04"
          },
          {
            "point": 1,
            "seconds": 215.7,
            "timeDisplay": "3:35.70"
          }
        ],
        "400_FR": [
          {
            "point": 1100,
            "seconds": 264.33,
            "timeDisplay": "4:24.33"
          },
          {
            "point": 1000,
            "seconds": 273.81,
            "timeDisplay": "4:33.81"
          },
          {
            "point": 900,
            "seconds": 283.74,
            "timeDisplay": "4:43.74"
          },
          {
            "point": 800,
            "seconds": 294.2,
            "timeDisplay": "4:54.20"
          },
          {
            "point": 700,
            "seconds": 305.3,
            "timeDisplay": "5:05.30"
          },
          {
            "point": 600,
            "seconds": 317.17,
            "timeDisplay": "5:17.17"
          },
          {
            "point": 500,
            "seconds": 330.01,
            "timeDisplay": "5:30.01"
          },
          {
            "point": 400,
            "seconds": 344.12,
            "timeDisplay": "5:44.12"
          },
          {
            "point": 300,
            "seconds": 360.0,
            "timeDisplay": "6:00.00"
          },
          {
            "point": 200,
            "seconds": 378.68,
            "timeDisplay": "6:18.68"
          },
          {
            "point": 100,
            "seconds": 402.62,
            "timeDisplay": "6:42.62"
          },
          {
            "point": 10,
            "seconds": 440.99,
            "timeDisplay": "7:20.99"
          },
          {
            "point": 1,
            "seconds": 451.24,
            "timeDisplay": "7:31.24"
          }
        ],
        "800_FR": [
          {
            "point": 1100,
            "seconds": 557.44,
            "timeDisplay": "9:17.44"
          },
          {
            "point": 1000,
            "seconds": 579.5,
            "timeDisplay": "9:39.50"
          },
          {
            "point": 900,
            "seconds": 602.52,
            "timeDisplay": "10:02.52"
          },
          {
            "point": 800,
            "seconds": 626.66,
            "timeDisplay": "10:26.66"
          },
          {
            "point": 700,
            "seconds": 652.13,
            "timeDisplay": "10:52.13"
          },
          {
            "point": 600,
            "seconds": 679.19,
            "timeDisplay": "11:19.19"
          },
          {
            "point": 500,
            "seconds": 708.27,
            "timeDisplay": "11:48.27"
          },
          {
            "point": 400,
            "seconds": 739.95,
            "timeDisplay": "12:19.95"
          },
          {
            "point": 300,
            "seconds": 775.25,
            "timeDisplay": "12:55.25"
          },
          {
            "point": 200,
            "seconds": 816.08,
            "timeDisplay": "13:36.08"
          },
          {
            "point": 100,
            "seconds": 867.26,
            "timeDisplay": "14:27.26"
          },
          {
            "point": 10,
            "seconds": 944.81,
            "timeDisplay": "15:44.81"
          },
          {
            "point": 1,
            "seconds": 963.56,
            "timeDisplay": "16:03.56"
          }
        ],
        "1500_FR": [
          {
            "point": 1100,
            "seconds": 1087.45,
            "timeDisplay": "18:07.45"
          },
          {
            "point": 1000,
            "seconds": 1131.8,
            "timeDisplay": "18:51.80"
          },
          {
            "point": 900,
            "seconds": 1178.03,
            "timeDisplay": "19:38.03"
          },
          {
            "point": 800,
            "seconds": 1226.42,
            "timeDisplay": "20:26.42"
          },
          {
            "point": 700,
            "seconds": 1277.38,
            "timeDisplay": "21:17.38"
          },
          {
            "point": 600,
            "seconds": 1330.93,
            "timeDisplay": "22:10.93"
          },
          {
            "point": 500,
            "seconds": 1389.39,
            "timeDisplay": "23:09.39"
          },
          {
            "point": 400,
            "seconds": 1447.1,
            "timeDisplay": "24:07.10"
          },
          {
            "point": 300,
            "seconds": 1521.94,
            "timeDisplay": "25:21.94"
          },
          {
            "point": 200,
            "seconds": 1602.75,
            "timeDisplay": "26:42.75"
          },
          {
            "point": 100,
            "seconds": 1702.93,
            "timeDisplay": "28:22.93"
          },
          {
            "point": 10,
            "seconds": 1852.05,
            "timeDisplay": "30:52.05"
          },
          {
            "point": 1,
            "seconds": 1886.98,
            "timeDisplay": "31:26.98"
          }
        ],
        "50_BK": [
          {
            "point": 1100,
            "seconds": 30.39,
            "timeDisplay": "30.39"
          },
          {
            "point": 1000,
            "seconds": 31.71,
            "timeDisplay": "31.71"
          },
          {
            "point": 900,
            "seconds": 33.08,
            "timeDisplay": "33.08"
          },
          {
            "point": 800,
            "seconds": 34.52,
            "timeDisplay": "34.52"
          },
          {
            "point": 700,
            "seconds": 36.01,
            "timeDisplay": "36.01"
          },
          {
            "point": 600,
            "seconds": 37.61,
            "timeDisplay": "37.61"
          },
          {
            "point": 500,
            "seconds": 39.29,
            "timeDisplay": "39.29"
          },
          {
            "point": 400,
            "seconds": 41.13,
            "timeDisplay": "41.13"
          },
          {
            "point": 300,
            "seconds": 43.15,
            "timeDisplay": "43.15"
          },
          {
            "point": 200,
            "seconds": 45.44,
            "timeDisplay": "45.44"
          },
          {
            "point": 100,
            "seconds": 48.26,
            "timeDisplay": "48.26"
          },
          {
            "point": 10,
            "seconds": 52.29,
            "timeDisplay": "52.29"
          },
          {
            "point": 1,
            "seconds": 53.19,
            "timeDisplay": "53.19"
          }
        ],
        "100_BK": [
          {
            "point": 1100,
            "seconds": 65.03,
            "timeDisplay": "1:05.03"
          },
          {
            "point": 1000,
            "seconds": 68.0,
            "timeDisplay": "1:08.00"
          },
          {
            "point": 900,
            "seconds": 71.08,
            "timeDisplay": "1:11.08"
          },
          {
            "point": 800,
            "seconds": 74.29,
            "timeDisplay": "1:14.29"
          },
          {
            "point": 700,
            "seconds": 77.64,
            "timeDisplay": "1:17.64"
          },
          {
            "point": 600,
            "seconds": 81.17,
            "timeDisplay": "1:21.17"
          },
          {
            "point": 500,
            "seconds": 84.92,
            "timeDisplay": "1:24.92"
          },
          {
            "point": 400,
            "seconds": 88.95,
            "timeDisplay": "1:28.95"
          },
          {
            "point": 300,
            "seconds": 93.36,
            "timeDisplay": "1:33.36"
          },
          {
            "point": 200,
            "seconds": 98.36,
            "timeDisplay": "1:38.36"
          },
          {
            "point": 100,
            "seconds": 104.39,
            "timeDisplay": "1:44.39"
          },
          {
            "point": 10,
            "seconds": 112.79,
            "timeDisplay": "1:52.79"
          },
          {
            "point": 1,
            "seconds": 114.54,
            "timeDisplay": "1:54.54"
          }
        ],
        "200_BK": [
          {
            "point": 1100,
            "seconds": 140.01,
            "timeDisplay": "2:20.01"
          },
          {
            "point": 1000,
            "seconds": 147.13,
            "timeDisplay": "2:27.13"
          },
          {
            "point": 900,
            "seconds": 154.48,
            "timeDisplay": "2:34.48"
          },
          {
            "point": 800,
            "seconds": 162.07,
            "timeDisplay": "2:42.07"
          },
          {
            "point": 700,
            "seconds": 169.97,
            "timeDisplay": "2:49.97"
          },
          {
            "point": 600,
            "seconds": 178.21,
            "timeDisplay": "2:58.21"
          },
          {
            "point": 500,
            "seconds": 186.9,
            "timeDisplay": "3:06.90"
          },
          {
            "point": 400,
            "seconds": 196.13,
            "timeDisplay": "3:16.13"
          },
          {
            "point": 300,
            "seconds": 206.11,
            "timeDisplay": "3:26.11"
          },
          {
            "point": 200,
            "seconds": 217.19,
            "timeDisplay": "3:37.19"
          },
          {
            "point": 100,
            "seconds": 230.22,
            "timeDisplay": "3:50.22"
          },
          {
            "point": 10,
            "seconds": 247.15,
            "timeDisplay": "4:07.15"
          },
          {
            "point": 1,
            "seconds": 250.25,
            "timeDisplay": "4:10.25"
          }
        ],
        "50_BR": [
          {
            "point": 1100,
            "seconds": 32.83,
            "timeDisplay": "32.83"
          },
          {
            "point": 1000,
            "seconds": 34.55,
            "timeDisplay": "34.55"
          },
          {
            "point": 900,
            "seconds": 36.32,
            "timeDisplay": "36.32"
          },
          {
            "point": 800,
            "seconds": 38.14,
            "timeDisplay": "38.14"
          },
          {
            "point": 700,
            "seconds": 40.04,
            "timeDisplay": "40.04"
          },
          {
            "point": 600,
            "seconds": 42.02,
            "timeDisplay": "42.02"
          },
          {
            "point": 500,
            "seconds": 44.09,
            "timeDisplay": "44.09"
          },
          {
            "point": 400,
            "seconds": 46.29,
            "timeDisplay": "46.29"
          },
          {
            "point": 300,
            "seconds": 48.66,
            "timeDisplay": "48.66"
          },
          {
            "point": 200,
            "seconds": 51.28,
            "timeDisplay": "51.28"
          },
          {
            "point": 100,
            "seconds": 54.33,
            "timeDisplay": "54.33"
          },
          {
            "point": 10,
            "seconds": 58.23,
            "timeDisplay": "58.23"
          },
          {
            "point": 1,
            "seconds": 58.92,
            "timeDisplay": "58.92"
          }
        ],
        "100_BR": [
          {
            "point": 1100,
            "seconds": 71.6,
            "timeDisplay": "1:11.60"
          },
          {
            "point": 1000,
            "seconds": 75.42,
            "timeDisplay": "1:15.42"
          },
          {
            "point": 900,
            "seconds": 79.35,
            "timeDisplay": "1:19.35"
          },
          {
            "point": 800,
            "seconds": 83.41,
            "timeDisplay": "1:23.41"
          },
          {
            "point": 700,
            "seconds": 87.61,
            "timeDisplay": "1:27.61"
          },
          {
            "point": 600,
            "seconds": 91.98,
            "timeDisplay": "1:31.98"
          },
          {
            "point": 500,
            "seconds": 96.57,
            "timeDisplay": "1:36.57"
          },
          {
            "point": 400,
            "seconds": 101.42,
            "timeDisplay": "1:41.42"
          },
          {
            "point": 300,
            "seconds": 106.63,
            "timeDisplay": "1:46.63"
          },
          {
            "point": 200,
            "seconds": 112.36,
            "timeDisplay": "1:52.36"
          },
          {
            "point": 100,
            "seconds": 119.02,
            "timeDisplay": "1:59.02"
          },
          {
            "point": 10,
            "seconds": 127.4,
            "timeDisplay": "2:07.40"
          },
          {
            "point": 1,
            "seconds": 128.85,
            "timeDisplay": "2:08.85"
          }
        ],
        "200_BR": [
          {
            "point": 1100,
            "seconds": 155.41,
            "timeDisplay": "2:35.41"
          },
          {
            "point": 1000,
            "seconds": 164.13,
            "timeDisplay": "2:44.13"
          },
          {
            "point": 900,
            "seconds": 173.09,
            "timeDisplay": "2:53.09"
          },
          {
            "point": 800,
            "seconds": 182.3,
            "timeDisplay": "3:02.30"
          },
          {
            "point": 700,
            "seconds": 191.81,
            "timeDisplay": "3:11.81"
          },
          {
            "point": 600,
            "seconds": 201.67,
            "timeDisplay": "3:21.67"
          },
          {
            "point": 500,
            "seconds": 211.96,
            "timeDisplay": "3:31.96"
          },
          {
            "point": 400,
            "seconds": 222.79,
            "timeDisplay": "3:42.79"
          },
          {
            "point": 300,
            "seconds": 234.34,
            "timeDisplay": "3:54.34"
          },
          {
            "point": 200,
            "seconds": 246.94,
            "timeDisplay": "4:06.94"
          },
          {
            "point": 100,
            "seconds": 261.35,
            "timeDisplay": "4:21.35"
          },
          {
            "point": 10,
            "seconds": 278.9,
            "timeDisplay": "4:38.90"
          },
          {
            "point": 1,
            "seconds": 281.75,
            "timeDisplay": "4:41.75"
          }
        ],
        "50_FL": [
          {
            "point": 1100,
            "seconds": 27.73,
            "timeDisplay": "27.73"
          },
          {
            "point": 1000,
            "seconds": 29.14,
            "timeDisplay": "29.14"
          },
          {
            "point": 900,
            "seconds": 30.6,
            "timeDisplay": "30.60"
          },
          {
            "point": 800,
            "seconds": 32.1,
            "timeDisplay": "32.10"
          },
          {
            "point": 700,
            "seconds": 33.66,
            "timeDisplay": "33.66"
          },
          {
            "point": 600,
            "seconds": 35.3,
            "timeDisplay": "35.30"
          },
          {
            "point": 500,
            "seconds": 37.02,
            "timeDisplay": "37.02"
          },
          {
            "point": 400,
            "seconds": 38.85,
            "timeDisplay": "38.85"
          },
          {
            "point": 300,
            "seconds": 40.82,
            "timeDisplay": "40.82"
          },
          {
            "point": 200,
            "seconds": 43.02,
            "timeDisplay": "43.02"
          },
          {
            "point": 100,
            "seconds": 45.6,
            "timeDisplay": "45.60"
          },
          {
            "point": 10,
            "seconds": 48.95,
            "timeDisplay": "48.95"
          },
          {
            "point": 1,
            "seconds": 49.57,
            "timeDisplay": "49.57"
          }
        ],
        "100_FL": [
          {
            "point": 1100,
            "seconds": 61.32,
            "timeDisplay": "1:01.32"
          },
          {
            "point": 1000,
            "seconds": 64.77,
            "timeDisplay": "1:04.77"
          },
          {
            "point": 900,
            "seconds": 68.33,
            "timeDisplay": "1:08.33"
          },
          {
            "point": 800,
            "seconds": 72.01,
            "timeDisplay": "1:12.01"
          },
          {
            "point": 700,
            "seconds": 75.84,
            "timeDisplay": "1:15.84"
          },
          {
            "point": 600,
            "seconds": 79.84,
            "timeDisplay": "1:19.84"
          },
          {
            "point": 500,
            "seconds": 84.05,
            "timeDisplay": "1:24.05"
          },
          {
            "point": 400,
            "seconds": 88.52,
            "timeDisplay": "1:28.52"
          },
          {
            "point": 300,
            "seconds": 93.36,
            "timeDisplay": "1:33.36"
          },
          {
            "point": 200,
            "seconds": 98.72999999999999,
            "timeDisplay": "1:38.73"
          },
          {
            "point": 100,
            "seconds": 105.03999999999999,
            "timeDisplay": "1:45.04"
          },
          {
            "point": 10,
            "seconds": 113.25,
            "timeDisplay": "1:53.25"
          },
          {
            "point": 1,
            "seconds": 114.75999999999999,
            "timeDisplay": "1:54.76"
          }
        ],
        "200_FL": [
          {
            "point": 1100,
            "seconds": 139.65,
            "timeDisplay": "2:19.65"
          },
          {
            "point": 1000,
            "seconds": 148.16,
            "timeDisplay": "2:28.16"
          },
          {
            "point": 900,
            "seconds": 156.9,
            "timeDisplay": "2:36.90"
          },
          {
            "point": 800,
            "seconds": 165.91,
            "timeDisplay": "2:45.91"
          },
          {
            "point": 700,
            "seconds": 175.21,
            "timeDisplay": "2:55.21"
          },
          {
            "point": 600,
            "seconds": 184.88,
            "timeDisplay": "3:04.88"
          },
          {
            "point": 500,
            "seconds": 194.99,
            "timeDisplay": "3:14.99"
          },
          {
            "point": 400,
            "seconds": 205.65,
            "timeDisplay": "3:25.65"
          },
          {
            "point": 300,
            "seconds": 217.05,
            "timeDisplay": "3:37.05"
          },
          {
            "point": 200,
            "seconds": 229.54,
            "timeDisplay": "3:49.54"
          },
          {
            "point": 100,
            "seconds": 243.9,
            "timeDisplay": "4:03.90"
          },
          {
            "point": 10,
            "seconds": 261.63,
            "timeDisplay": "4:21.63"
          },
          {
            "point": 1,
            "seconds": 264.59,
            "timeDisplay": "4:24.59"
          }
        ],
        "200_IM": [
          {
            "point": 1100,
            "seconds": 140.11,
            "timeDisplay": "2:20.11"
          },
          {
            "point": 1000,
            "seconds": 146.4,
            "timeDisplay": "2:26.40"
          },
          {
            "point": 900,
            "seconds": 152.93,
            "timeDisplay": "2:32.93"
          },
          {
            "point": 800,
            "seconds": 159.72,
            "timeDisplay": "2:39.72"
          },
          {
            "point": 700,
            "seconds": 166.84,
            "timeDisplay": "2:46.84"
          },
          {
            "point": 600,
            "seconds": 174.35,
            "timeDisplay": "2:54.35"
          },
          {
            "point": 500,
            "seconds": 182.33,
            "timeDisplay": "3:02.33"
          },
          {
            "point": 400,
            "seconds": 190.93,
            "timeDisplay": "3:10.93"
          },
          {
            "point": 300,
            "seconds": 200.36,
            "timeDisplay": "3:20.36"
          },
          {
            "point": 200,
            "seconds": 211.06,
            "timeDisplay": "3:31.06"
          },
          {
            "point": 100,
            "seconds": 224.07,
            "timeDisplay": "3:44.07"
          },
          {
            "point": 10,
            "seconds": 242.34,
            "timeDisplay": "4:02.34"
          },
          {
            "point": 1,
            "seconds": 246.2,
            "timeDisplay": "4:06.20"
          }
        ],
        "400_IM": [
          {
            "point": 1100,
            "seconds": 303.7,
            "timeDisplay": "5:03.70"
          },
          {
            "point": 1000,
            "seconds": 318.32,
            "timeDisplay": "5:18.32"
          },
          {
            "point": 900,
            "seconds": 333.43,
            "timeDisplay": "5:33.43"
          },
          {
            "point": 800,
            "seconds": 349.11,
            "timeDisplay": "5:49.11"
          },
          {
            "point": 700,
            "seconds": 365.47,
            "timeDisplay": "6:05.47"
          },
          {
            "point": 600,
            "seconds": 382.63,
            "timeDisplay": "6:22.63"
          },
          {
            "point": 500,
            "seconds": 400.77,
            "timeDisplay": "6:40.77"
          },
          {
            "point": 400,
            "seconds": 420.18,
            "timeDisplay": "7:00.18"
          },
          {
            "point": 300,
            "seconds": 441.3,
            "timeDisplay": "7:21.30"
          },
          {
            "point": 200,
            "seconds": 464.97,
            "timeDisplay": "7:44.97"
          },
          {
            "point": 100,
            "seconds": 493.22,
            "timeDisplay": "8:13.22"
          },
          {
            "point": 10,
            "seconds": 531.25,
            "timeDisplay": "8:51.25"
          },
          {
            "point": 1,
            "seconds": 538.67,
            "timeDisplay": "8:58.67"
          }
        ]
      },
      "12": {
        "50_FR": [
          {
            "point": 1100,
            "seconds": 24.79,
            "timeDisplay": "24.79"
          },
          {
            "point": 1000,
            "seconds": 26.03,
            "timeDisplay": "26.03"
          },
          {
            "point": 900,
            "seconds": 27.31,
            "timeDisplay": "27.31"
          },
          {
            "point": 800,
            "seconds": 28.63,
            "timeDisplay": "28.63"
          },
          {
            "point": 700,
            "seconds": 30.0,
            "timeDisplay": "30.00"
          },
          {
            "point": 600,
            "seconds": 31.44,
            "timeDisplay": "31.44"
          },
          {
            "point": 500,
            "seconds": 32.96,
            "timeDisplay": "32.96"
          },
          {
            "point": 400,
            "seconds": 34.58,
            "timeDisplay": "34.58"
          },
          {
            "point": 300,
            "seconds": 36.33,
            "timeDisplay": "36.33"
          },
          {
            "point": 200,
            "seconds": 38.29,
            "timeDisplay": "38.29"
          },
          {
            "point": 100,
            "seconds": 40.59,
            "timeDisplay": "40.59"
          },
          {
            "point": 10,
            "seconds": 43.63,
            "timeDisplay": "43.63"
          },
          {
            "point": 1,
            "seconds": 44.2,
            "timeDisplay": "44.20"
          }
        ],
        "100_FR": [
          {
            "point": 1100,
            "seconds": 54.88,
            "timeDisplay": "54.88"
          },
          {
            "point": 1000,
            "seconds": 57.22,
            "timeDisplay": "57.22"
          },
          {
            "point": 900,
            "seconds": 59.66,
            "timeDisplay": "59.66"
          },
          {
            "point": 800,
            "seconds": 62.21,
            "timeDisplay": "1:02.21"
          },
          {
            "point": 700,
            "seconds": 64.89,
            "timeDisplay": "1:04.89"
          },
          {
            "point": 600,
            "seconds": 67.72,
            "timeDisplay": "1:07.72"
          },
          {
            "point": 500,
            "seconds": 70.74,
            "timeDisplay": "1:10.74"
          },
          {
            "point": 400,
            "seconds": 74.01,
            "timeDisplay": "1:14.01"
          },
          {
            "point": 300,
            "seconds": 77.62,
            "timeDisplay": "1:17.62"
          },
          {
            "point": 200,
            "seconds": 81.74,
            "timeDisplay": "1:21.74"
          },
          {
            "point": 100,
            "seconds": 86.82,
            "timeDisplay": "1:26.82"
          },
          {
            "point": 10,
            "seconds": 94.17,
            "timeDisplay": "1:34.17"
          },
          {
            "point": 1,
            "seconds": 95.81,
            "timeDisplay": "1:35.81"
          }
        ],
        "200_FR": [
          {
            "point": 1100,
            "seconds": 120.31,
            "timeDisplay": "2:00.31"
          },
          {
            "point": 1000,
            "seconds": 124.77,
            "timeDisplay": "2:04.77"
          },
          {
            "point": 900,
            "seconds": 129.44,
            "timeDisplay": "2:09.44"
          },
          {
            "point": 800,
            "seconds": 134.36,
            "timeDisplay": "2:14.36"
          },
          {
            "point": 700,
            "seconds": 139.56,
            "timeDisplay": "2:19.56"
          },
          {
            "point": 600,
            "seconds": 145.11,
            "timeDisplay": "2:25.11"
          },
          {
            "point": 500,
            "seconds": 151.1,
            "timeDisplay": "2:31.10"
          },
          {
            "point": 400,
            "seconds": 157.67,
            "timeDisplay": "2:37.67"
          },
          {
            "point": 300,
            "seconds": 165.03,
            "timeDisplay": "2:45.03"
          },
          {
            "point": 200,
            "seconds": 173.64,
            "timeDisplay": "2:53.64"
          },
          {
            "point": 100,
            "seconds": 184.59,
            "timeDisplay": "3:04.59"
          },
          {
            "point": 10,
            "seconds": 201.81,
            "timeDisplay": "3:21.81"
          },
          {
            "point": 1,
            "seconds": 206.27,
            "timeDisplay": "3:26.27"
          }
        ],
        "400_FR": [
          {
            "point": 1100,
            "seconds": 253.54,
            "timeDisplay": "4:13.54"
          },
          {
            "point": 1000,
            "seconds": 262.63,
            "timeDisplay": "4:22.63"
          },
          {
            "point": 900,
            "seconds": 272.15,
            "timeDisplay": "4:32.15"
          },
          {
            "point": 800,
            "seconds": 282.19,
            "timeDisplay": "4:42.19"
          },
          {
            "point": 700,
            "seconds": 292.83,
            "timeDisplay": "4:52.83"
          },
          {
            "point": 600,
            "seconds": 304.22,
            "timeDisplay": "5:04.22"
          },
          {
            "point": 500,
            "seconds": 316.53,
            "timeDisplay": "5:16.53"
          },
          {
            "point": 400,
            "seconds": 330.07,
            "timeDisplay": "5:30.07"
          },
          {
            "point": 300,
            "seconds": 345.32,
            "timeDisplay": "5:45.32"
          },
          {
            "point": 200,
            "seconds": 363.21,
            "timeDisplay": "6:03.21"
          },
          {
            "point": 100,
            "seconds": 386.18,
            "timeDisplay": "6:26.18"
          },
          {
            "point": 10,
            "seconds": 422.97,
            "timeDisplay": "7:02.97"
          },
          {
            "point": 1,
            "seconds": 432.81,
            "timeDisplay": "7:12.81"
          }
        ],
        "800_FR": [
          {
            "point": 1100,
            "seconds": 527.84,
            "timeDisplay": "8:47.84"
          },
          {
            "point": 1000,
            "seconds": 548.73,
            "timeDisplay": "9:08.73"
          },
          {
            "point": 900,
            "seconds": 570.53,
            "timeDisplay": "9:30.53"
          },
          {
            "point": 800,
            "seconds": 593.39,
            "timeDisplay": "9:53.39"
          },
          {
            "point": 700,
            "seconds": 617.5,
            "timeDisplay": "10:17.50"
          },
          {
            "point": 600,
            "seconds": 643.14,
            "timeDisplay": "10:43.14"
          },
          {
            "point": 500,
            "seconds": 670.67,
            "timeDisplay": "11:10.67"
          },
          {
            "point": 400,
            "seconds": 700.67,
            "timeDisplay": "11:40.67"
          },
          {
            "point": 300,
            "seconds": 734.09,
            "timeDisplay": "12:14.09"
          },
          {
            "point": 200,
            "seconds": 772.75,
            "timeDisplay": "12:52.75"
          },
          {
            "point": 100,
            "seconds": 821.22,
            "timeDisplay": "13:41.22"
          },
          {
            "point": 10,
            "seconds": 894.65,
            "timeDisplay": "14:54.65"
          },
          {
            "point": 1,
            "seconds": 912.41,
            "timeDisplay": "15:12.41"
          }
        ],
        "1500_FR": [
          {
            "point": 1100,
            "seconds": 1020.35,
            "timeDisplay": "17:00.35"
          },
          {
            "point": 1000,
            "seconds": 1061.97,
            "timeDisplay": "17:41.97"
          },
          {
            "point": 900,
            "seconds": 1105.34,
            "timeDisplay": "18:25.34"
          },
          {
            "point": 800,
            "seconds": 1150.75,
            "timeDisplay": "19:10.75"
          },
          {
            "point": 700,
            "seconds": 1198.57,
            "timeDisplay": "19:58.57"
          },
          {
            "point": 600,
            "seconds": 1249.3,
            "timeDisplay": "20:49.30"
          },
          {
            "point": 500,
            "seconds": 1303.67,
            "timeDisplay": "21:43.67"
          },
          {
            "point": 400,
            "seconds": 1362.75,
            "timeDisplay": "22:42.75"
          },
          {
            "point": 300,
            "seconds": 1428.34,
            "timeDisplay": "23:48.34"
          },
          {
            "point": 200,
            "seconds": 1503.86,
            "timeDisplay": "25:03.86"
          },
          {
            "point": 100,
            "seconds": 1597.86,
            "timeDisplay": "26:37.86"
          },
          {
            "point": 10,
            "seconds": 1737.78,
            "timeDisplay": "28:57.78"
          },
          {
            "point": 1,
            "seconds": 1770.55,
            "timeDisplay": "29:30.55"
          }
        ],
        "50_BK": [
          {
            "point": 1100,
            "seconds": 29.14,
            "timeDisplay": "29.14"
          },
          {
            "point": 1000,
            "seconds": 30.41,
            "timeDisplay": "30.41"
          },
          {
            "point": 900,
            "seconds": 31.73,
            "timeDisplay": "31.73"
          },
          {
            "point": 800,
            "seconds": 33.1,
            "timeDisplay": "33.10"
          },
          {
            "point": 700,
            "seconds": 34.54,
            "timeDisplay": "34.54"
          },
          {
            "point": 600,
            "seconds": 36.06,
            "timeDisplay": "36.06"
          },
          {
            "point": 500,
            "seconds": 37.69,
            "timeDisplay": "37.69"
          },
          {
            "point": 400,
            "seconds": 39.44,
            "timeDisplay": "39.44"
          },
          {
            "point": 300,
            "seconds": 41.37,
            "timeDisplay": "41.37"
          },
          {
            "point": 200,
            "seconds": 43.57,
            "timeDisplay": "43.57"
          },
          {
            "point": 100,
            "seconds": 46.27,
            "timeDisplay": "46.27"
          },
          {
            "point": 10,
            "seconds": 50.14,
            "timeDisplay": "50.14"
          },
          {
            "point": 1,
            "seconds": 51.0,
            "timeDisplay": "51.00"
          }
        ],
        "100_BK": [
          {
            "point": 1100,
            "seconds": 61.94,
            "timeDisplay": "1:01.94"
          },
          {
            "point": 1000,
            "seconds": 64.77,
            "timeDisplay": "1:04.77"
          },
          {
            "point": 900,
            "seconds": 67.7,
            "timeDisplay": "1:07.70"
          },
          {
            "point": 800,
            "seconds": 70.76,
            "timeDisplay": "1:10.76"
          },
          {
            "point": 700,
            "seconds": 73.95,
            "timeDisplay": "1:13.95"
          },
          {
            "point": 600,
            "seconds": 77.31,
            "timeDisplay": "1:17.31"
          },
          {
            "point": 500,
            "seconds": 80.88,
            "timeDisplay": "1:20.88"
          },
          {
            "point": 400,
            "seconds": 84.72,
            "timeDisplay": "1:24.72"
          },
          {
            "point": 300,
            "seconds": 88.93,
            "timeDisplay": "1:28.93"
          },
          {
            "point": 200,
            "seconds": 93.68,
            "timeDisplay": "1:33.68"
          },
          {
            "point": 100,
            "seconds": 99.43,
            "timeDisplay": "1:39.43"
          },
          {
            "point": 10,
            "seconds": 107.43,
            "timeDisplay": "1:47.43"
          },
          {
            "point": 1,
            "seconds": 109.1,
            "timeDisplay": "1:49.10"
          }
        ],
        "200_BK": [
          {
            "point": 1100,
            "seconds": 132.04,
            "timeDisplay": "2:12.04"
          },
          {
            "point": 1000,
            "seconds": 138.76,
            "timeDisplay": "2:18.76"
          },
          {
            "point": 900,
            "seconds": 145.68,
            "timeDisplay": "2:25.68"
          },
          {
            "point": 800,
            "seconds": 152.85,
            "timeDisplay": "2:32.85"
          },
          {
            "point": 700,
            "seconds": 160.29,
            "timeDisplay": "2:40.29"
          },
          {
            "point": 600,
            "seconds": 168.07,
            "timeDisplay": "2:48.07"
          },
          {
            "point": 500,
            "seconds": 176.26,
            "timeDisplay": "2:56.26"
          },
          {
            "point": 400,
            "seconds": 184.97,
            "timeDisplay": "3:04.97"
          },
          {
            "point": 300,
            "seconds": 194.38,
            "timeDisplay": "3:14.38"
          },
          {
            "point": 200,
            "seconds": 204.83,
            "timeDisplay": "3:24.83"
          },
          {
            "point": 100,
            "seconds": 217.11,
            "timeDisplay": "3:37.11"
          },
          {
            "point": 10,
            "seconds": 233.08,
            "timeDisplay": "3:53.08"
          },
          {
            "point": 1,
            "seconds": 236.01,
            "timeDisplay": "3:56.01"
          }
        ],
        "50_BR": [
          {
            "point": 1100,
            "seconds": 31.4,
            "timeDisplay": "31.40"
          },
          {
            "point": 1000,
            "seconds": 33.04,
            "timeDisplay": "33.04"
          },
          {
            "point": 900,
            "seconds": 34.73,
            "timeDisplay": "34.73"
          },
          {
            "point": 800,
            "seconds": 36.48,
            "timeDisplay": "36.48"
          },
          {
            "point": 700,
            "seconds": 38.3,
            "timeDisplay": "38.30"
          },
          {
            "point": 600,
            "seconds": 40.19,
            "timeDisplay": "40.19"
          },
          {
            "point": 500,
            "seconds": 42.17,
            "timeDisplay": "42.17"
          },
          {
            "point": 400,
            "seconds": 44.28,
            "timeDisplay": "44.28"
          },
          {
            "point": 300,
            "seconds": 46.54,
            "timeDisplay": "46.54"
          },
          {
            "point": 200,
            "seconds": 49.05,
            "timeDisplay": "49.05"
          },
          {
            "point": 100,
            "seconds": 51.97,
            "timeDisplay": "51.97"
          },
          {
            "point": 10,
            "seconds": 55.69,
            "timeDisplay": "55.69"
          },
          {
            "point": 1,
            "seconds": 56.36,
            "timeDisplay": "56.36"
          }
        ],
        "100_BR": [
          {
            "point": 1100,
            "seconds": 67.81,
            "timeDisplay": "1:07.81"
          },
          {
            "point": 1000,
            "seconds": 71.42,
            "timeDisplay": "1:11.42"
          },
          {
            "point": 900,
            "seconds": 75.14,
            "timeDisplay": "1:15.14"
          },
          {
            "point": 800,
            "seconds": 78.98,
            "timeDisplay": "1:18.98"
          },
          {
            "point": 700,
            "seconds": 82.97,
            "timeDisplay": "1:22.97"
          },
          {
            "point": 600,
            "seconds": 87.1,
            "timeDisplay": "1:27.10"
          },
          {
            "point": 500,
            "seconds": 91.45,
            "timeDisplay": "1:31.45"
          },
          {
            "point": 400,
            "seconds": 96.04,
            "timeDisplay": "1:36.04"
          },
          {
            "point": 300,
            "seconds": 100.98,
            "timeDisplay": "1:40.98"
          },
          {
            "point": 200,
            "seconds": 106.41,
            "timeDisplay": "1:46.41"
          },
          {
            "point": 100,
            "seconds": 112.7,
            "timeDisplay": "1:52.70"
          },
          {
            "point": 10,
            "seconds": 120.64,
            "timeDisplay": "2:00.64"
          },
          {
            "point": 1,
            "seconds": 122.02,
            "timeDisplay": "2:02.02"
          }
        ],
        "200_BR": [
          {
            "point": 1100,
            "seconds": 146.22,
            "timeDisplay": "2:26.22"
          },
          {
            "point": 1000,
            "seconds": 154.43,
            "timeDisplay": "2:34.43"
          },
          {
            "point": 900,
            "seconds": 162.86,
            "timeDisplay": "2:42.86"
          },
          {
            "point": 800,
            "seconds": 171.52,
            "timeDisplay": "2:51.52"
          },
          {
            "point": 700,
            "seconds": 180.47,
            "timeDisplay": "3:00.47"
          },
          {
            "point": 600,
            "seconds": 189.75,
            "timeDisplay": "3:09.75"
          },
          {
            "point": 500,
            "seconds": 199.43,
            "timeDisplay": "3:19.43"
          },
          {
            "point": 400,
            "seconds": 209.62,
            "timeDisplay": "3:29.62"
          },
          {
            "point": 300,
            "seconds": 220.49,
            "timeDisplay": "3:40.49"
          },
          {
            "point": 200,
            "seconds": 232.34,
            "timeDisplay": "3:52.34"
          },
          {
            "point": 100,
            "seconds": 245.9,
            "timeDisplay": "4:05.90"
          },
          {
            "point": 10,
            "seconds": 262.41,
            "timeDisplay": "4:22.41"
          },
          {
            "point": 1,
            "seconds": 265.09,
            "timeDisplay": "4:25.09"
          }
        ],
        "50_FL": [
          {
            "point": 1100,
            "seconds": 26.56,
            "timeDisplay": "26.56"
          },
          {
            "point": 1000,
            "seconds": 27.91,
            "timeDisplay": "27.91"
          },
          {
            "point": 900,
            "seconds": 29.31,
            "timeDisplay": "29.31"
          },
          {
            "point": 800,
            "seconds": 30.75,
            "timeDisplay": "30.75"
          },
          {
            "point": 700,
            "seconds": 32.25,
            "timeDisplay": "32.25"
          },
          {
            "point": 600,
            "seconds": 33.81,
            "timeDisplay": "33.81"
          },
          {
            "point": 500,
            "seconds": 35.46,
            "timeDisplay": "35.46"
          },
          {
            "point": 400,
            "seconds": 37.21,
            "timeDisplay": "37.21"
          },
          {
            "point": 300,
            "seconds": 39.12,
            "timeDisplay": "39.12"
          },
          {
            "point": 200,
            "seconds": 41.21,
            "timeDisplay": "41.21"
          },
          {
            "point": 100,
            "seconds": 43.68,
            "timeDisplay": "43.68"
          },
          {
            "point": 10,
            "seconds": 46.9,
            "timeDisplay": "46.90"
          },
          {
            "point": 1,
            "seconds": 47.49,
            "timeDisplay": "47.49"
          }
        ],
        "100_FL": [
          {
            "point": 1100,
            "seconds": 58.19,
            "timeDisplay": "58.19"
          },
          {
            "point": 1000,
            "seconds": 61.47,
            "timeDisplay": "1:01.47"
          },
          {
            "point": 900,
            "seconds": 64.85,
            "timeDisplay": "1:04.85"
          },
          {
            "point": 800,
            "seconds": 68.34,
            "timeDisplay": "1:08.34"
          },
          {
            "point": 700,
            "seconds": 71.97,
            "timeDisplay": "1:11.97"
          },
          {
            "point": 600,
            "seconds": 75.77,
            "timeDisplay": "1:15.77"
          },
          {
            "point": 500,
            "seconds": 79.76,
            "timeDisplay": "1:19.76"
          },
          {
            "point": 400,
            "seconds": 84.01,
            "timeDisplay": "1:24.01"
          },
          {
            "point": 300,
            "seconds": 88.6,
            "timeDisplay": "1:28.60"
          },
          {
            "point": 200,
            "seconds": 93.7,
            "timeDisplay": "1:33.70"
          },
          {
            "point": 100,
            "seconds": 99.69,
            "timeDisplay": "1:39.69"
          },
          {
            "point": 10,
            "seconds": 107.47999999999999,
            "timeDisplay": "1:47.48"
          },
          {
            "point": 1,
            "seconds": 108.91,
            "timeDisplay": "1:48.91"
          }
        ],
        "200_FL": [
          {
            "point": 1100,
            "seconds": 129.19,
            "timeDisplay": "2:09.19"
          },
          {
            "point": 1000,
            "seconds": 137.06,
            "timeDisplay": "2:17.06"
          },
          {
            "point": 900,
            "seconds": 145.15,
            "timeDisplay": "2:25.15"
          },
          {
            "point": 800,
            "seconds": 153.48,
            "timeDisplay": "2:33.48"
          },
          {
            "point": 700,
            "seconds": 162.07999999999998,
            "timeDisplay": "2:42.08"
          },
          {
            "point": 600,
            "seconds": 171.03,
            "timeDisplay": "2:51.03"
          },
          {
            "point": 500,
            "seconds": 180.38,
            "timeDisplay": "3:00.38"
          },
          {
            "point": 400,
            "seconds": 190.25,
            "timeDisplay": "3:10.25"
          },
          {
            "point": 300,
            "seconds": 200.8,
            "timeDisplay": "3:20.80"
          },
          {
            "point": 200,
            "seconds": 212.35,
            "timeDisplay": "3:32.35"
          },
          {
            "point": 100,
            "seconds": 225.64,
            "timeDisplay": "3:45.64"
          },
          {
            "point": 10,
            "seconds": 242.04,
            "timeDisplay": "4:02.04"
          },
          {
            "point": 1,
            "seconds": 244.78,
            "timeDisplay": "4:04.78"
          }
        ],
        "200_IM": [
          {
            "point": 1100,
            "seconds": 133.94,
            "timeDisplay": "2:13.94"
          },
          {
            "point": 1000,
            "seconds": 139.95,
            "timeDisplay": "2:19.95"
          },
          {
            "point": 900,
            "seconds": 146.19,
            "timeDisplay": "2:26.19"
          },
          {
            "point": 800,
            "seconds": 152.69,
            "timeDisplay": "2:32.69"
          },
          {
            "point": 700,
            "seconds": 159.5,
            "timeDisplay": "2:39.50"
          },
          {
            "point": 600,
            "seconds": 166.67,
            "timeDisplay": "2:46.67"
          },
          {
            "point": 500,
            "seconds": 174.3,
            "timeDisplay": "2:54.30"
          },
          {
            "point": 400,
            "seconds": 182.52,
            "timeDisplay": "3:02.52"
          },
          {
            "point": 300,
            "seconds": 191.54,
            "timeDisplay": "3:11.54"
          },
          {
            "point": 200,
            "seconds": 201.77,
            "timeDisplay": "3:21.77"
          },
          {
            "point": 100,
            "seconds": 214.2,
            "timeDisplay": "3:34.20"
          },
          {
            "point": 10,
            "seconds": 231.67,
            "timeDisplay": "3:51.67"
          },
          {
            "point": 1,
            "seconds": 235.36,
            "timeDisplay": "3:55.36"
          }
        ],
        "400_IM": [
          {
            "point": 1100,
            "seconds": 283.4,
            "timeDisplay": "4:43.40"
          },
          {
            "point": 1000,
            "seconds": 297.04,
            "timeDisplay": "4:57.04"
          },
          {
            "point": 900,
            "seconds": 311.14,
            "timeDisplay": "5:11.14"
          },
          {
            "point": 800,
            "seconds": 325.77,
            "timeDisplay": "5:25.77"
          },
          {
            "point": 700,
            "seconds": 341.04,
            "timeDisplay": "5:41.04"
          },
          {
            "point": 600,
            "seconds": 357.05,
            "timeDisplay": "5:57.05"
          },
          {
            "point": 500,
            "seconds": 373.98,
            "timeDisplay": "6:13.98"
          },
          {
            "point": 400,
            "seconds": 392.09,
            "timeDisplay": "6:32.09"
          },
          {
            "point": 300,
            "seconds": 411.8,
            "timeDisplay": "6:51.80"
          },
          {
            "point": 200,
            "seconds": 433.89,
            "timeDisplay": "7:13.89"
          },
          {
            "point": 100,
            "seconds": 460.25,
            "timeDisplay": "7:40.25"
          },
          {
            "point": 10,
            "seconds": 495.73,
            "timeDisplay": "8:15.73"
          },
          {
            "point": 1,
            "seconds": 502.66,
            "timeDisplay": "8:22.66"
          }
        ]
      },
      "13": {
        "50_FR": [
          {
            "point": 1100,
            "seconds": 24.64,
            "timeDisplay": "24.64"
          },
          {
            "point": 1000,
            "seconds": 25.74,
            "timeDisplay": "25.74"
          },
          {
            "point": 900,
            "seconds": 26.88,
            "timeDisplay": "26.88"
          },
          {
            "point": 800,
            "seconds": 28.06,
            "timeDisplay": "28.06"
          },
          {
            "point": 700,
            "seconds": 29.28,
            "timeDisplay": "29.28"
          },
          {
            "point": 600,
            "seconds": 30.57,
            "timeDisplay": "30.57"
          },
          {
            "point": 500,
            "seconds": 31.92,
            "timeDisplay": "31.92"
          },
          {
            "point": 400,
            "seconds": 33.36,
            "timeDisplay": "33.36"
          },
          {
            "point": 300,
            "seconds": 34.93,
            "timeDisplay": "34.93"
          },
          {
            "point": 200,
            "seconds": 36.67,
            "timeDisplay": "36.67"
          },
          {
            "point": 100,
            "seconds": 38.72,
            "timeDisplay": "38.72"
          },
          {
            "point": 10,
            "seconds": 41.43,
            "timeDisplay": "41.43"
          },
          {
            "point": 1,
            "seconds": 41.94,
            "timeDisplay": "41.94"
          }
        ],
        "100_FR": [
          {
            "point": 1100,
            "seconds": 54.1,
            "timeDisplay": "54.10"
          },
          {
            "point": 1000,
            "seconds": 56.18,
            "timeDisplay": "56.18"
          },
          {
            "point": 900,
            "seconds": 58.34,
            "timeDisplay": "58.34"
          },
          {
            "point": 800,
            "seconds": 60.6,
            "timeDisplay": "1:00.60"
          },
          {
            "point": 700,
            "seconds": 62.97,
            "timeDisplay": "1:02.97"
          },
          {
            "point": 600,
            "seconds": 65.47,
            "timeDisplay": "1:05.47"
          },
          {
            "point": 500,
            "seconds": 68.15,
            "timeDisplay": "1:08.15"
          },
          {
            "point": 400,
            "seconds": 71.05,
            "timeDisplay": "1:11.05"
          },
          {
            "point": 300,
            "seconds": 74.24,
            "timeDisplay": "1:14.24"
          },
          {
            "point": 200,
            "seconds": 77.9,
            "timeDisplay": "1:17.90"
          },
          {
            "point": 100,
            "seconds": 82.39,
            "timeDisplay": "1:22.39"
          },
          {
            "point": 10,
            "seconds": 88.9,
            "timeDisplay": "1:28.90"
          },
          {
            "point": 1,
            "seconds": 90.36,
            "timeDisplay": "1:30.36"
          }
        ],
        "200_FR": [
          {
            "point": 1100,
            "seconds": 117.58,
            "timeDisplay": "1:57.58"
          },
          {
            "point": 1000,
            "seconds": 121.5,
            "timeDisplay": "2:01.50"
          },
          {
            "point": 900,
            "seconds": 125.61,
            "timeDisplay": "2:05.61"
          },
          {
            "point": 800,
            "seconds": 129.93,
            "timeDisplay": "2:09.93"
          },
          {
            "point": 700,
            "seconds": 134.5,
            "timeDisplay": "2:14.50"
          },
          {
            "point": 600,
            "seconds": 139.38,
            "timeDisplay": "2:19.38"
          },
          {
            "point": 500,
            "seconds": 144.65,
            "timeDisplay": "2:24.65"
          },
          {
            "point": 400,
            "seconds": 150.42,
            "timeDisplay": "2:30.42"
          },
          {
            "point": 300,
            "seconds": 156.9,
            "timeDisplay": "2:36.90"
          },
          {
            "point": 200,
            "seconds": 164.47,
            "timeDisplay": "2:44.47"
          },
          {
            "point": 100,
            "seconds": 174.1,
            "timeDisplay": "2:54.10"
          },
          {
            "point": 10,
            "seconds": 189.24,
            "timeDisplay": "3:09.24"
          },
          {
            "point": 1,
            "seconds": 193.16,
            "timeDisplay": "3:13.16"
          }
        ],
        "400_FR": [
          {
            "point": 1100,
            "seconds": 246.54,
            "timeDisplay": "4:06.54"
          },
          {
            "point": 1000,
            "seconds": 254.5,
            "timeDisplay": "4:14.50"
          },
          {
            "point": 900,
            "seconds": 262.83,
            "timeDisplay": "4:22.83"
          },
          {
            "point": 800,
            "seconds": 271.62,
            "timeDisplay": "4:31.62"
          },
          {
            "point": 700,
            "seconds": 280.93,
            "timeDisplay": "4:40.93"
          },
          {
            "point": 600,
            "seconds": 290.89,
            "timeDisplay": "4:50.89"
          },
          {
            "point": 500,
            "seconds": 301.67,
            "timeDisplay": "5:01.67"
          },
          {
            "point": 400,
            "seconds": 313.52,
            "timeDisplay": "5:13.52"
          },
          {
            "point": 300,
            "seconds": 326.86,
            "timeDisplay": "5:26.86"
          },
          {
            "point": 200,
            "seconds": 342.52,
            "timeDisplay": "5:42.52"
          },
          {
            "point": 100,
            "seconds": 362.61,
            "timeDisplay": "6:02.61"
          },
          {
            "point": 10,
            "seconds": 394.82,
            "timeDisplay": "6:34.82"
          },
          {
            "point": 1,
            "seconds": 403.42,
            "timeDisplay": "6:43.42"
          }
        ],
        "800_FR": [
          {
            "point": 1100,
            "seconds": 506.36,
            "timeDisplay": "8:26.36"
          },
          {
            "point": 1000,
            "seconds": 524.31,
            "timeDisplay": "8:44.31"
          },
          {
            "point": 900,
            "seconds": 543.14,
            "timeDisplay": "9:03.14"
          },
          {
            "point": 800,
            "seconds": 562.84,
            "timeDisplay": "9:22.84"
          },
          {
            "point": 700,
            "seconds": 583.68,
            "timeDisplay": "9:43.68"
          },
          {
            "point": 600,
            "seconds": 605.79,
            "timeDisplay": "10:05.79"
          },
          {
            "point": 500,
            "seconds": 629.49,
            "timeDisplay": "10:29.49"
          },
          {
            "point": 400,
            "seconds": 655.34,
            "timeDisplay": "10:55.34"
          },
          {
            "point": 300,
            "seconds": 684.09,
            "timeDisplay": "11:24.09"
          },
          {
            "point": 200,
            "seconds": 717.57,
            "timeDisplay": "11:57.57"
          },
          {
            "point": 100,
            "seconds": 759.37,
            "timeDisplay": "12:39.37"
          },
          {
            "point": 10,
            "seconds": 822.69,
            "timeDisplay": "13:42.69"
          },
          {
            "point": 1,
            "seconds": 838.01,
            "timeDisplay": "13:58.01"
          }
        ],
        "1500_FR": [
          {
            "point": 1100,
            "seconds": 972.13,
            "timeDisplay": "16:12.13"
          },
          {
            "point": 1000,
            "seconds": 1007.77,
            "timeDisplay": "16:47.77"
          },
          {
            "point": 900,
            "seconds": 1044.88,
            "timeDisplay": "17:24.88"
          },
          {
            "point": 800,
            "seconds": 1083.76,
            "timeDisplay": "18:03.76"
          },
          {
            "point": 700,
            "seconds": 1124.73,
            "timeDisplay": "18:44.73"
          },
          {
            "point": 600,
            "seconds": 1168.17,
            "timeDisplay": "19:28.17"
          },
          {
            "point": 500,
            "seconds": 1214.71,
            "timeDisplay": "20:14.71"
          },
          {
            "point": 400,
            "seconds": 1265.3,
            "timeDisplay": "21:05.30"
          },
          {
            "point": 300,
            "seconds": 1321.46,
            "timeDisplay": "22:01.46"
          },
          {
            "point": 200,
            "seconds": 1386.12,
            "timeDisplay": "23:06.12"
          },
          {
            "point": 100,
            "seconds": 1466.42,
            "timeDisplay": "24:26.42"
          },
          {
            "point": 10,
            "seconds": 1586.41,
            "timeDisplay": "26:26.41"
          },
          {
            "point": 1,
            "seconds": 1614.48,
            "timeDisplay": "26:54.48"
          }
        ],
        "50_BK": [
          {
            "point": 1100,
            "seconds": 29.06,
            "timeDisplay": "29.06"
          },
          {
            "point": 1000,
            "seconds": 30.19,
            "timeDisplay": "30.19"
          },
          {
            "point": 900,
            "seconds": 31.37,
            "timeDisplay": "31.37"
          },
          {
            "point": 800,
            "seconds": 32.6,
            "timeDisplay": "32.60"
          },
          {
            "point": 700,
            "seconds": 33.89,
            "timeDisplay": "33.89"
          },
          {
            "point": 600,
            "seconds": 35.25,
            "timeDisplay": "35.25"
          },
          {
            "point": 500,
            "seconds": 36.7,
            "timeDisplay": "36.70"
          },
          {
            "point": 400,
            "seconds": 38.28,
            "timeDisplay": "38.28"
          },
          {
            "point": 300,
            "seconds": 40.01,
            "timeDisplay": "40.01"
          },
          {
            "point": 200,
            "seconds": 41.98,
            "timeDisplay": "41.98"
          },
          {
            "point": 100,
            "seconds": 44.4,
            "timeDisplay": "44.40"
          },
          {
            "point": 10,
            "seconds": 47.86,
            "timeDisplay": "47.86"
          },
          {
            "point": 1,
            "seconds": 48.63,
            "timeDisplay": "48.63"
          }
        ],
        "100_BK": [
          {
            "point": 1100,
            "seconds": 61.11,
            "timeDisplay": "1:01.11"
          },
          {
            "point": 1000,
            "seconds": 63.61,
            "timeDisplay": "1:03.61"
          },
          {
            "point": 900,
            "seconds": 66.21,
            "timeDisplay": "1:06.21"
          },
          {
            "point": 800,
            "seconds": 68.91,
            "timeDisplay": "1:08.91"
          },
          {
            "point": 700,
            "seconds": 71.74,
            "timeDisplay": "1:11.74"
          },
          {
            "point": 600,
            "seconds": 74.72,
            "timeDisplay": "1:14.72"
          },
          {
            "point": 500,
            "seconds": 77.88,
            "timeDisplay": "1:17.88"
          },
          {
            "point": 400,
            "seconds": 81.28,
            "timeDisplay": "1:21.28"
          },
          {
            "point": 300,
            "seconds": 85.0,
            "timeDisplay": "1:25.00"
          },
          {
            "point": 200,
            "seconds": 89.21,
            "timeDisplay": "1:29.21"
          },
          {
            "point": 100,
            "seconds": 94.31,
            "timeDisplay": "1:34.31"
          },
          {
            "point": 10,
            "seconds": 101.39,
            "timeDisplay": "1:41.39"
          },
          {
            "point": 1,
            "seconds": 102.87,
            "timeDisplay": "1:42.87"
          }
        ],
        "200_BK": [
          {
            "point": 1100,
            "seconds": 128.68,
            "timeDisplay": "2:08.68"
          },
          {
            "point": 1000,
            "seconds": 134.54,
            "timeDisplay": "2:14.54"
          },
          {
            "point": 900,
            "seconds": 140.59,
            "timeDisplay": "2:20.59"
          },
          {
            "point": 800,
            "seconds": 146.85,
            "timeDisplay": "2:26.85"
          },
          {
            "point": 700,
            "seconds": 153.35,
            "timeDisplay": "2:33.35"
          },
          {
            "point": 600,
            "seconds": 160.15,
            "timeDisplay": "2:40.15"
          },
          {
            "point": 500,
            "seconds": 167.3,
            "timeDisplay": "2:47.30"
          },
          {
            "point": 400,
            "seconds": 174.91,
            "timeDisplay": "2:54.91"
          },
          {
            "point": 300,
            "seconds": 183.13,
            "timeDisplay": "3:03.13"
          },
          {
            "point": 200,
            "seconds": 192.25,
            "timeDisplay": "3:12.25"
          },
          {
            "point": 100,
            "seconds": 202.99,
            "timeDisplay": "3:22.99"
          },
          {
            "point": 10,
            "seconds": 216.98,
            "timeDisplay": "3:36.98"
          },
          {
            "point": 1,
            "seconds": 225.05,
            "timeDisplay": "3:45.05"
          }
        ],
        "50_BR": [
          {
            "point": 1100,
            "seconds": 31.34,
            "timeDisplay": "31.34"
          },
          {
            "point": 1000,
            "seconds": 32.81,
            "timeDisplay": "32.81"
          },
          {
            "point": 900,
            "seconds": 34.33,
            "timeDisplay": "34.33"
          },
          {
            "point": 800,
            "seconds": 35.89,
            "timeDisplay": "35.89"
          },
          {
            "point": 700,
            "seconds": 37.51,
            "timeDisplay": "37.51"
          },
          {
            "point": 600,
            "seconds": 39.2,
            "timeDisplay": "39.20"
          },
          {
            "point": 500,
            "seconds": 40.98,
            "timeDisplay": "40.98"
          },
          {
            "point": 400,
            "seconds": 42.86,
            "timeDisplay": "42.86"
          },
          {
            "point": 300,
            "seconds": 44.89,
            "timeDisplay": "44.89"
          },
          {
            "point": 200,
            "seconds": 47.13,
            "timeDisplay": "47.13"
          },
          {
            "point": 100,
            "seconds": 49.74,
            "timeDisplay": "49.74"
          },
          {
            "point": 10,
            "seconds": 53.07,
            "timeDisplay": "53.07"
          },
          {
            "point": 1,
            "seconds": 53.67,
            "timeDisplay": "53.67"
          }
        ],
        "100_BR": [
          {
            "point": 1100,
            "seconds": 66.8,
            "timeDisplay": "1:06.80"
          },
          {
            "point": 1000,
            "seconds": 69.99,
            "timeDisplay": "1:09.99"
          },
          {
            "point": 900,
            "seconds": 73.28,
            "timeDisplay": "1:13.28"
          },
          {
            "point": 800,
            "seconds": 76.67,
            "timeDisplay": "1:16.67"
          },
          {
            "point": 700,
            "seconds": 80.18,
            "timeDisplay": "1:20.18"
          },
          {
            "point": 600,
            "seconds": 83.84,
            "timeDisplay": "1:23.84"
          },
          {
            "point": 500,
            "seconds": 87.67,
            "timeDisplay": "1:27.67"
          },
          {
            "point": 400,
            "seconds": 91.72,
            "timeDisplay": "1:31.72"
          },
          {
            "point": 300,
            "seconds": 96.08,
            "timeDisplay": "1:36.08"
          },
          {
            "point": 200,
            "seconds": 100.87,
            "timeDisplay": "1:40.87"
          },
          {
            "point": 100,
            "seconds": 106.43,
            "timeDisplay": "1:46.43"
          },
          {
            "point": 10,
            "seconds": 113.44,
            "timeDisplay": "1:53.44"
          },
          {
            "point": 1,
            "seconds": 114.65,
            "timeDisplay": "1:54.65"
          }
        ],
        "200_BR": [
          {
            "point": 1100,
            "seconds": 142.09,
            "timeDisplay": "2:22.09"
          },
          {
            "point": 1000,
            "seconds": 149.24,
            "timeDisplay": "2:29.24"
          },
          {
            "point": 900,
            "seconds": 156.56,
            "timeDisplay": "2:36.56"
          },
          {
            "point": 800,
            "seconds": 164.1,
            "timeDisplay": "2:44.10"
          },
          {
            "point": 700,
            "seconds": 171.88,
            "timeDisplay": "2:51.88"
          },
          {
            "point": 600,
            "seconds": 179.95,
            "timeDisplay": "2:59.95"
          },
          {
            "point": 500,
            "seconds": 188.38,
            "timeDisplay": "3:08.38"
          },
          {
            "point": 400,
            "seconds": 197.24,
            "timeDisplay": "3:17.24"
          },
          {
            "point": 300,
            "seconds": 206.69,
            "timeDisplay": "3:26.69"
          },
          {
            "point": 200,
            "seconds": 217.0,
            "timeDisplay": "3:37.00"
          },
          {
            "point": 100,
            "seconds": 228.8,
            "timeDisplay": "3:48.80"
          },
          {
            "point": 10,
            "seconds": 243.16,
            "timeDisplay": "4:03.16"
          },
          {
            "point": 1,
            "seconds": 245.5,
            "timeDisplay": "4:05.50"
          }
        ],
        "50_FL": [
          {
            "point": 1100,
            "seconds": 26.21,
            "timeDisplay": "26.21"
          },
          {
            "point": 1000,
            "seconds": 27.4,
            "timeDisplay": "27.40"
          },
          {
            "point": 900,
            "seconds": 28.63,
            "timeDisplay": "28.63"
          },
          {
            "point": 800,
            "seconds": 29.91,
            "timeDisplay": "29.91"
          },
          {
            "point": 700,
            "seconds": 31.23,
            "timeDisplay": "31.23"
          },
          {
            "point": 600,
            "seconds": 32.61,
            "timeDisplay": "32.61"
          },
          {
            "point": 500,
            "seconds": 34.07,
            "timeDisplay": "34.07"
          },
          {
            "point": 400,
            "seconds": 35.62,
            "timeDisplay": "35.62"
          },
          {
            "point": 300,
            "seconds": 37.29,
            "timeDisplay": "37.29"
          },
          {
            "point": 200,
            "seconds": 39.15,
            "timeDisplay": "39.15"
          },
          {
            "point": 100,
            "seconds": 41.33,
            "timeDisplay": "41.33"
          },
          {
            "point": 10,
            "seconds": 44.17,
            "timeDisplay": "44.17"
          },
          {
            "point": 1,
            "seconds": 44.7,
            "timeDisplay": "44.70"
          }
        ],
        "100_FL": [
          {
            "point": 1100,
            "seconds": 57.63,
            "timeDisplay": "57.63"
          },
          {
            "point": 1000,
            "seconds": 60.36,
            "timeDisplay": "1:00.36"
          },
          {
            "point": 900,
            "seconds": 63.17,
            "timeDisplay": "1:03.17"
          },
          {
            "point": 800,
            "seconds": 66.06,
            "timeDisplay": "1:06.06"
          },
          {
            "point": 700,
            "seconds": 69.07,
            "timeDisplay": "1:09.07"
          },
          {
            "point": 600,
            "seconds": 72.2,
            "timeDisplay": "1:12.20"
          },
          {
            "point": 500,
            "seconds": 75.49,
            "timeDisplay": "1:15.49"
          },
          {
            "point": 400,
            "seconds": 78.97,
            "timeDisplay": "1:18.97"
          },
          {
            "point": 300,
            "seconds": 82.71000000000001,
            "timeDisplay": "1:22.71"
          },
          {
            "point": 200,
            "seconds": 86.83,
            "timeDisplay": "1:26.83"
          },
          {
            "point": 100,
            "seconds": 91.63,
            "timeDisplay": "1:31.63"
          },
          {
            "point": 10,
            "seconds": 97.72,
            "timeDisplay": "1:37.72"
          },
          {
            "point": 1,
            "seconds": 98.78999999999999,
            "timeDisplay": "1:38.79"
          }
        ],
        "200_FL": [
          {
            "point": 1100,
            "seconds": 126.65,
            "timeDisplay": "2:06.65"
          },
          {
            "point": 1000,
            "seconds": 133.15,
            "timeDisplay": "2:13.15"
          },
          {
            "point": 900,
            "seconds": 139.81,
            "timeDisplay": "2:19.81"
          },
          {
            "point": 800,
            "seconds": 146.65,
            "timeDisplay": "2:26.65"
          },
          {
            "point": 700,
            "seconds": 153.71,
            "timeDisplay": "2:33.71"
          },
          {
            "point": 600,
            "seconds": 161.01,
            "timeDisplay": "2:41.01"
          },
          {
            "point": 500,
            "seconds": 168.62,
            "timeDisplay": "2:48.62"
          },
          {
            "point": 400,
            "seconds": 176.61,
            "timeDisplay": "2:56.61"
          },
          {
            "point": 300,
            "seconds": 185.11,
            "timeDisplay": "3:05.11"
          },
          {
            "point": 200,
            "seconds": 194.34,
            "timeDisplay": "3:14.34"
          },
          {
            "point": 100,
            "seconds": 204.82999999999998,
            "timeDisplay": "3:24.83"
          },
          {
            "point": 10,
            "seconds": 217.44,
            "timeDisplay": "3:37.44"
          },
          {
            "point": 1,
            "seconds": 219.43,
            "timeDisplay": "3:39.43"
          }
        ],
        "200_IM": [
          {
            "point": 1100,
            "seconds": 131.69,
            "timeDisplay": "2:11.69"
          },
          {
            "point": 1000,
            "seconds": 137.0,
            "timeDisplay": "2:17.00"
          },
          {
            "point": 900,
            "seconds": 142.51,
            "timeDisplay": "2:22.51"
          },
          {
            "point": 800,
            "seconds": 148.24,
            "timeDisplay": "2:28.24"
          },
          {
            "point": 700,
            "seconds": 154.25,
            "timeDisplay": "2:34.25"
          },
          {
            "point": 600,
            "seconds": 160.59,
            "timeDisplay": "2:40.59"
          },
          {
            "point": 500,
            "seconds": 167.32,
            "timeDisplay": "2:47.32"
          },
          {
            "point": 400,
            "seconds": 174.57,
            "timeDisplay": "2:54.57"
          },
          {
            "point": 300,
            "seconds": 182.54,
            "timeDisplay": "3:02.54"
          },
          {
            "point": 200,
            "seconds": 191.57,
            "timeDisplay": "3:11.57"
          },
          {
            "point": 100,
            "seconds": 202.54,
            "timeDisplay": "3:22.54"
          },
          {
            "point": 10,
            "seconds": 217.96,
            "timeDisplay": "3:37.96"
          },
          {
            "point": 1,
            "seconds": 221.22,
            "timeDisplay": "3:41.22"
          }
        ],
        "400_IM": [
          {
            "point": 1100,
            "seconds": 274.99,
            "timeDisplay": "4:34.99"
          },
          {
            "point": 1000,
            "seconds": 286.84,
            "timeDisplay": "4:46.84"
          },
          {
            "point": 900,
            "seconds": 299.11,
            "timeDisplay": "4:59.11"
          },
          {
            "point": 800,
            "seconds": 311.86,
            "timeDisplay": "5:11.86"
          },
          {
            "point": 700,
            "seconds": 325.15,
            "timeDisplay": "5:25.15"
          },
          {
            "point": 600,
            "seconds": 339.08,
            "timeDisplay": "5:39.08"
          },
          {
            "point": 500,
            "seconds": 353.82,
            "timeDisplay": "5:53.82"
          },
          {
            "point": 400,
            "seconds": 369.58,
            "timeDisplay": "6:09.58"
          },
          {
            "point": 300,
            "seconds": 386.73,
            "timeDisplay": "6:26.73"
          },
          {
            "point": 200,
            "seconds": 405.95,
            "timeDisplay": "6:45.95"
          },
          {
            "point": 100,
            "seconds": 428.9,
            "timeDisplay": "7:08.90"
          },
          {
            "point": 10,
            "seconds": 459.78,
            "timeDisplay": "7:39.78"
          },
          {
            "point": 1,
            "seconds": 465.81,
            "timeDisplay": "7:45.81"
          }
        ]
      },
      "14": {
        "50_FR": [
          {
            "point": 1100,
            "seconds": 24.21,
            "timeDisplay": "24.21"
          },
          {
            "point": 1000,
            "seconds": 25.3,
            "timeDisplay": "25.30"
          },
          {
            "point": 900,
            "seconds": 26.42,
            "timeDisplay": "26.42"
          },
          {
            "point": 800,
            "seconds": 27.58,
            "timeDisplay": "27.58"
          },
          {
            "point": 700,
            "seconds": 28.78,
            "timeDisplay": "28.78"
          },
          {
            "point": 600,
            "seconds": 30.04,
            "timeDisplay": "30.04"
          },
          {
            "point": 500,
            "seconds": 31.37,
            "timeDisplay": "31.37"
          },
          {
            "point": 400,
            "seconds": 32.79,
            "timeDisplay": "32.79"
          },
          {
            "point": 300,
            "seconds": 34.33,
            "timeDisplay": "34.33"
          },
          {
            "point": 200,
            "seconds": 36.04,
            "timeDisplay": "36.04"
          },
          {
            "point": 100,
            "seconds": 38.06,
            "timeDisplay": "38.06"
          },
          {
            "point": 10,
            "seconds": 40.72,
            "timeDisplay": "40.72"
          },
          {
            "point": 1,
            "seconds": 41.22,
            "timeDisplay": "41.22"
          }
        ],
        "100_FR": [
          {
            "point": 1100,
            "seconds": 53.4,
            "timeDisplay": "53.40"
          },
          {
            "point": 1000,
            "seconds": 55.45,
            "timeDisplay": "55.45"
          },
          {
            "point": 900,
            "seconds": 57.58,
            "timeDisplay": "57.58"
          },
          {
            "point": 800,
            "seconds": 59.81,
            "timeDisplay": "59.81"
          },
          {
            "point": 700,
            "seconds": 62.15,
            "timeDisplay": "1:02.15"
          },
          {
            "point": 600,
            "seconds": 64.62,
            "timeDisplay": "1:04.62"
          },
          {
            "point": 500,
            "seconds": 67.26,
            "timeDisplay": "1:07.26"
          },
          {
            "point": 400,
            "seconds": 70.12,
            "timeDisplay": "1:10.12"
          },
          {
            "point": 300,
            "seconds": 73.28,
            "timeDisplay": "1:13.28"
          },
          {
            "point": 200,
            "seconds": 76.88,
            "timeDisplay": "1:16.88"
          },
          {
            "point": 100,
            "seconds": 81.32,
            "timeDisplay": "1:21.32"
          },
          {
            "point": 10,
            "seconds": 87.75,
            "timeDisplay": "1:27.75"
          },
          {
            "point": 1,
            "seconds": 89.19,
            "timeDisplay": "1:29.19"
          }
        ],
        "200_FR": [
          {
            "point": 1100,
            "seconds": 116.56,
            "timeDisplay": "1:56.56"
          },
          {
            "point": 1000,
            "seconds": 120.45,
            "timeDisplay": "2:00.45"
          },
          {
            "point": 900,
            "seconds": 124.53,
            "timeDisplay": "2:04.53"
          },
          {
            "point": 800,
            "seconds": 128.81,
            "timeDisplay": "2:08.81"
          },
          {
            "point": 700,
            "seconds": 133.34,
            "timeDisplay": "2:13.34"
          },
          {
            "point": 600,
            "seconds": 138.18,
            "timeDisplay": "2:18.18"
          },
          {
            "point": 500,
            "seconds": 143.4,
            "timeDisplay": "2:23.40"
          },
          {
            "point": 400,
            "seconds": 149.13,
            "timeDisplay": "2:29.13"
          },
          {
            "point": 300,
            "seconds": 155.55,
            "timeDisplay": "2:35.55"
          },
          {
            "point": 200,
            "seconds": 163.05,
            "timeDisplay": "2:43.05"
          },
          {
            "point": 100,
            "seconds": 172.6,
            "timeDisplay": "2:52.60"
          },
          {
            "point": 10,
            "seconds": 187.61,
            "timeDisplay": "3:07.61"
          },
          {
            "point": 1,
            "seconds": 191.5,
            "timeDisplay": "3:11.50"
          }
        ],
        "400_FR": [
          {
            "point": 1100,
            "seconds": 244.61,
            "timeDisplay": "4:04.61"
          },
          {
            "point": 1000,
            "seconds": 252.5,
            "timeDisplay": "4:12.50"
          },
          {
            "point": 900,
            "seconds": 260.77,
            "timeDisplay": "4:20.77"
          },
          {
            "point": 800,
            "seconds": 269.48,
            "timeDisplay": "4:29.48"
          },
          {
            "point": 700,
            "seconds": 278.73,
            "timeDisplay": "4:38.73"
          },
          {
            "point": 600,
            "seconds": 288.61,
            "timeDisplay": "4:48.61"
          },
          {
            "point": 500,
            "seconds": 299.3,
            "timeDisplay": "4:59.30"
          },
          {
            "point": 400,
            "seconds": 311.06,
            "timeDisplay": "5:11.06"
          },
          {
            "point": 300,
            "seconds": 324.29,
            "timeDisplay": "5:24.29"
          },
          {
            "point": 200,
            "seconds": 339.83,
            "timeDisplay": "5:39.83"
          },
          {
            "point": 100,
            "seconds": 359.77,
            "timeDisplay": "5:59.77"
          },
          {
            "point": 10,
            "seconds": 391.71,
            "timeDisplay": "6:31.71"
          },
          {
            "point": 1,
            "seconds": 400.26,
            "timeDisplay": "6:40.26"
          }
        ],
        "800_FR": [
          {
            "point": 1100,
            "seconds": 501.67,
            "timeDisplay": "8:21.67"
          },
          {
            "point": 1000,
            "seconds": 519.52,
            "timeDisplay": "8:39.52"
          },
          {
            "point": 900,
            "seconds": 538.14,
            "timeDisplay": "8:58.14"
          },
          {
            "point": 800,
            "seconds": 557.68,
            "timeDisplay": "9:17.68"
          },
          {
            "point": 700,
            "seconds": 578.28,
            "timeDisplay": "9:38.28"
          },
          {
            "point": 600,
            "seconds": 600.18,
            "timeDisplay": "10:00.18"
          },
          {
            "point": 500,
            "seconds": 623.7,
            "timeDisplay": "10:23.70"
          },
          {
            "point": 400,
            "seconds": 649.33,
            "timeDisplay": "10:49.33"
          },
          {
            "point": 300,
            "seconds": 677.89,
            "timeDisplay": "11:17.89"
          },
          {
            "point": 200,
            "seconds": 710.92,
            "timeDisplay": "11:50.92"
          },
          {
            "point": 100,
            "seconds": 752.33,
            "timeDisplay": "12:32.33"
          },
          {
            "point": 10,
            "seconds": 815.07,
            "timeDisplay": "13:35.07"
          },
          {
            "point": 1,
            "seconds": 830.24,
            "timeDisplay": "13:50.24"
          }
        ],
        "1500_FR": [
          {
            "point": 1100,
            "seconds": 959.05,
            "timeDisplay": "15:59.05"
          },
          {
            "point": 1000,
            "seconds": 994.2,
            "timeDisplay": "16:34.20"
          },
          {
            "point": 900,
            "seconds": 1030.84,
            "timeDisplay": "17:10.84"
          },
          {
            "point": 800,
            "seconds": 1069.2,
            "timeDisplay": "17:49.20"
          },
          {
            "point": 700,
            "seconds": 1109.59,
            "timeDisplay": "18:29.59"
          },
          {
            "point": 600,
            "seconds": 1152.44,
            "timeDisplay": "19:12.44"
          },
          {
            "point": 500,
            "seconds": 1198.37,
            "timeDisplay": "19:58.37"
          },
          {
            "point": 400,
            "seconds": 1248.27,
            "timeDisplay": "20:48.27"
          },
          {
            "point": 300,
            "seconds": 1303.68,
            "timeDisplay": "21:43.68"
          },
          {
            "point": 200,
            "seconds": 1367.47,
            "timeDisplay": "22:47.47"
          },
          {
            "point": 100,
            "seconds": 1446.87,
            "timeDisplay": "24:06.87"
          },
          {
            "point": 10,
            "seconds": 1565.07,
            "timeDisplay": "26:05.07"
          },
          {
            "point": 1,
            "seconds": 1592.75,
            "timeDisplay": "26:32.75"
          }
        ],
        "50_BK": [
          {
            "point": 1100,
            "seconds": 28.52,
            "timeDisplay": "28.52"
          },
          {
            "point": 1000,
            "seconds": 29.63,
            "timeDisplay": "29.63"
          },
          {
            "point": 900,
            "seconds": 30.79,
            "timeDisplay": "30.79"
          },
          {
            "point": 800,
            "seconds": 32.0,
            "timeDisplay": "32.00"
          },
          {
            "point": 700,
            "seconds": 33.26,
            "timeDisplay": "33.26"
          },
          {
            "point": 600,
            "seconds": 34.6,
            "timeDisplay": "34.60"
          },
          {
            "point": 500,
            "seconds": 36.03,
            "timeDisplay": "36.03"
          },
          {
            "point": 400,
            "seconds": 37.57,
            "timeDisplay": "37.57"
          },
          {
            "point": 300,
            "seconds": 39.27,
            "timeDisplay": "39.27"
          },
          {
            "point": 200,
            "seconds": 41.21,
            "timeDisplay": "41.21"
          },
          {
            "point": 100,
            "seconds": 43.58,
            "timeDisplay": "43.58"
          },
          {
            "point": 10,
            "seconds": 46.98,
            "timeDisplay": "46.98"
          },
          {
            "point": 1,
            "seconds": 47.74,
            "timeDisplay": "47.74"
          }
        ],
        "100_BK": [
          {
            "point": 1100,
            "seconds": 59.98,
            "timeDisplay": "59.98"
          },
          {
            "point": 1000,
            "seconds": 62.44,
            "timeDisplay": "1:02.44"
          },
          {
            "point": 900,
            "seconds": 64.99,
            "timeDisplay": "1:04.99"
          },
          {
            "point": 800,
            "seconds": 67.64,
            "timeDisplay": "1:07.64"
          },
          {
            "point": 700,
            "seconds": 70.42,
            "timeDisplay": "1:10.42"
          },
          {
            "point": 600,
            "seconds": 73.34,
            "timeDisplay": "1:13.34"
          },
          {
            "point": 500,
            "seconds": 76.44,
            "timeDisplay": "1:16.44"
          },
          {
            "point": 400,
            "seconds": 79.78,
            "timeDisplay": "1:19.78"
          },
          {
            "point": 300,
            "seconds": 83.43,
            "timeDisplay": "1:23.43"
          },
          {
            "point": 200,
            "seconds": 87.57,
            "timeDisplay": "1:27.57"
          },
          {
            "point": 100,
            "seconds": 92.57,
            "timeDisplay": "1:32.57"
          },
          {
            "point": 10,
            "seconds": 99.52,
            "timeDisplay": "1:39.52"
          },
          {
            "point": 1,
            "seconds": 100.97,
            "timeDisplay": "1:40.97"
          }
        ],
        "200_BK": [
          {
            "point": 1100,
            "seconds": 126.79,
            "timeDisplay": "2:06.79"
          },
          {
            "point": 1000,
            "seconds": 132.57,
            "timeDisplay": "2:12.57"
          },
          {
            "point": 900,
            "seconds": 138.53,
            "timeDisplay": "2:18.53"
          },
          {
            "point": 800,
            "seconds": 144.7,
            "timeDisplay": "2:24.70"
          },
          {
            "point": 700,
            "seconds": 151.11,
            "timeDisplay": "2:31.11"
          },
          {
            "point": 600,
            "seconds": 157.8,
            "timeDisplay": "2:37.80"
          },
          {
            "point": 500,
            "seconds": 164.85,
            "timeDisplay": "2:44.85"
          },
          {
            "point": 400,
            "seconds": 172.34,
            "timeDisplay": "2:52.34"
          },
          {
            "point": 300,
            "seconds": 180.44,
            "timeDisplay": "3:00.44"
          },
          {
            "point": 200,
            "seconds": 189.43,
            "timeDisplay": "3:09.43"
          },
          {
            "point": 100,
            "seconds": 200.01,
            "timeDisplay": "3:20.01"
          },
          {
            "point": 10,
            "seconds": 213.75,
            "timeDisplay": "3:33.75"
          },
          {
            "point": 1,
            "seconds": 216.27,
            "timeDisplay": "3:36.27"
          }
        ],
        "50_BR": [
          {
            "point": 1100,
            "seconds": 31.29,
            "timeDisplay": "31.29"
          },
          {
            "point": 1000,
            "seconds": 32.76,
            "timeDisplay": "32.76"
          },
          {
            "point": 900,
            "seconds": 34.27,
            "timeDisplay": "34.27"
          },
          {
            "point": 800,
            "seconds": 35.83,
            "timeDisplay": "35.83"
          },
          {
            "point": 700,
            "seconds": 37.45,
            "timeDisplay": "37.45"
          },
          {
            "point": 600,
            "seconds": 39.14,
            "timeDisplay": "39.14"
          },
          {
            "point": 500,
            "seconds": 40.91,
            "timeDisplay": "40.91"
          },
          {
            "point": 400,
            "seconds": 42.79,
            "timeDisplay": "42.79"
          },
          {
            "point": 300,
            "seconds": 44.82,
            "timeDisplay": "44.82"
          },
          {
            "point": 200,
            "seconds": 47.05,
            "timeDisplay": "47.05"
          },
          {
            "point": 100,
            "seconds": 49.66,
            "timeDisplay": "49.66"
          },
          {
            "point": 10,
            "seconds": 52.99,
            "timeDisplay": "52.99"
          },
          {
            "point": 1,
            "seconds": 53.59,
            "timeDisplay": "53.59"
          }
        ],
        "100_BR": [
          {
            "point": 1100,
            "seconds": 66.69,
            "timeDisplay": "1:06.69"
          },
          {
            "point": 1000,
            "seconds": 69.87,
            "timeDisplay": "1:09.87"
          },
          {
            "point": 900,
            "seconds": 73.15,
            "timeDisplay": "1:13.15"
          },
          {
            "point": 800,
            "seconds": 76.54,
            "timeDisplay": "1:16.54"
          },
          {
            "point": 700,
            "seconds": 80.05,
            "timeDisplay": "1:20.05"
          },
          {
            "point": 600,
            "seconds": 83.7,
            "timeDisplay": "1:23.70"
          },
          {
            "point": 500,
            "seconds": 87.52,
            "timeDisplay": "1:27.52"
          },
          {
            "point": 400,
            "seconds": 91.57,
            "timeDisplay": "1:31.57"
          },
          {
            "point": 300,
            "seconds": 95.92,
            "timeDisplay": "1:35.92"
          },
          {
            "point": 200,
            "seconds": 100.7,
            "timeDisplay": "1:40.70"
          },
          {
            "point": 100,
            "seconds": 106.26,
            "timeDisplay": "1:46.26"
          },
          {
            "point": 10,
            "seconds": 113.24,
            "timeDisplay": "1:53.24"
          },
          {
            "point": 1,
            "seconds": 114.46,
            "timeDisplay": "1:54.46"
          }
        ],
        "200_BR": [
          {
            "point": 1100,
            "seconds": 141.52,
            "timeDisplay": "2:21.52"
          },
          {
            "point": 1000,
            "seconds": 148.64,
            "timeDisplay": "2:28.64"
          },
          {
            "point": 900,
            "seconds": 155.93,
            "timeDisplay": "2:35.93"
          },
          {
            "point": 800,
            "seconds": 163.44,
            "timeDisplay": "2:43.44"
          },
          {
            "point": 700,
            "seconds": 171.19,
            "timeDisplay": "2:51.19"
          },
          {
            "point": 600,
            "seconds": 179.23,
            "timeDisplay": "2:59.23"
          },
          {
            "point": 500,
            "seconds": 187.62,
            "timeDisplay": "3:07.62"
          },
          {
            "point": 400,
            "seconds": 196.45,
            "timeDisplay": "3:16.45"
          },
          {
            "point": 300,
            "seconds": 205.86,
            "timeDisplay": "3:25.86"
          },
          {
            "point": 200,
            "seconds": 216.13,
            "timeDisplay": "3:36.13"
          },
          {
            "point": 100,
            "seconds": 227.88,
            "timeDisplay": "3:47.88"
          },
          {
            "point": 10,
            "seconds": 242.19,
            "timeDisplay": "4:02.19"
          },
          {
            "point": 1,
            "seconds": 244.51,
            "timeDisplay": "4:04.51"
          }
        ],
        "50_FL": [
          {
            "point": 1100,
            "seconds": 25.8,
            "timeDisplay": "25.80"
          },
          {
            "point": 1000,
            "seconds": 26.97,
            "timeDisplay": "26.97"
          },
          {
            "point": 900,
            "seconds": 28.18,
            "timeDisplay": "28.18"
          },
          {
            "point": 800,
            "seconds": 29.44,
            "timeDisplay": "29.44"
          },
          {
            "point": 700,
            "seconds": 30.74,
            "timeDisplay": "30.74"
          },
          {
            "point": 600,
            "seconds": 32.1,
            "timeDisplay": "32.10"
          },
          {
            "point": 500,
            "seconds": 33.54,
            "timeDisplay": "33.54"
          },
          {
            "point": 400,
            "seconds": 35.06,
            "timeDisplay": "35.06"
          },
          {
            "point": 300,
            "seconds": 36.71,
            "timeDisplay": "36.71"
          },
          {
            "point": 200,
            "seconds": 38.54,
            "timeDisplay": "38.54"
          },
          {
            "point": 100,
            "seconds": 40.69,
            "timeDisplay": "40.69"
          },
          {
            "point": 10,
            "seconds": 43.48,
            "timeDisplay": "43.48"
          },
          {
            "point": 1,
            "seconds": 44.0,
            "timeDisplay": "44.00"
          }
        ],
        "100_FL": [
          {
            "point": 1100,
            "seconds": 56.72,
            "timeDisplay": "56.72"
          },
          {
            "point": 1000,
            "seconds": 59.41,
            "timeDisplay": "59.41"
          },
          {
            "point": 900,
            "seconds": 62.16,
            "timeDisplay": "1:02.16"
          },
          {
            "point": 800,
            "seconds": 65.02,
            "timeDisplay": "1:05.02"
          },
          {
            "point": 700,
            "seconds": 67.98,
            "timeDisplay": "1:07.98"
          },
          {
            "point": 600,
            "seconds": 71.06,
            "timeDisplay": "1:11.06"
          },
          {
            "point": 500,
            "seconds": 74.3,
            "timeDisplay": "1:14.30"
          },
          {
            "point": 400,
            "seconds": 77.72,
            "timeDisplay": "1:17.72"
          },
          {
            "point": 300,
            "seconds": 81.4,
            "timeDisplay": "1:21.40"
          },
          {
            "point": 200,
            "seconds": 85.46000000000001,
            "timeDisplay": "1:25.46"
          },
          {
            "point": 100,
            "seconds": 90.19,
            "timeDisplay": "1:30.19"
          },
          {
            "point": 10,
            "seconds": 96.18,
            "timeDisplay": "1:36.18"
          },
          {
            "point": 1,
            "seconds": 97.22999999999999,
            "timeDisplay": "1:37.23"
          }
        ],
        "200_FL": [
          {
            "point": 1100,
            "seconds": 124.07,
            "timeDisplay": "2:04.07"
          },
          {
            "point": 1000,
            "seconds": 130.44,
            "timeDisplay": "2:10.44"
          },
          {
            "point": 900,
            "seconds": 136.96,
            "timeDisplay": "2:16.96"
          },
          {
            "point": 800,
            "seconds": 143.66,
            "timeDisplay": "2:23.66"
          },
          {
            "point": 700,
            "seconds": 150.57,
            "timeDisplay": "2:30.57"
          },
          {
            "point": 600,
            "seconds": 157.73,
            "timeDisplay": "2:37.73"
          },
          {
            "point": 500,
            "seconds": 165.18,
            "timeDisplay": "2:45.18"
          },
          {
            "point": 400,
            "seconds": 173.01,
            "timeDisplay": "2:53.01"
          },
          {
            "point": 300,
            "seconds": 181.33,
            "timeDisplay": "3:01.33"
          },
          {
            "point": 200,
            "seconds": 190.37,
            "timeDisplay": "3:10.37"
          },
          {
            "point": 100,
            "seconds": 200.65,
            "timeDisplay": "3:20.65"
          },
          {
            "point": 10,
            "seconds": 213.0,
            "timeDisplay": "3:33.00"
          },
          {
            "point": 1,
            "seconds": 214.95,
            "timeDisplay": "3:34.95"
          }
        ],
        "200_IM": [
          {
            "point": 1100,
            "seconds": 129.04,
            "timeDisplay": "2:09.04"
          },
          {
            "point": 1000,
            "seconds": 134.24,
            "timeDisplay": "2:14.24"
          },
          {
            "point": 900,
            "seconds": 139.64,
            "timeDisplay": "2:19.64"
          },
          {
            "point": 800,
            "seconds": 145.26,
            "timeDisplay": "2:25.26"
          },
          {
            "point": 700,
            "seconds": 151.15,
            "timeDisplay": "2:31.15"
          },
          {
            "point": 600,
            "seconds": 157.36,
            "timeDisplay": "2:37.36"
          },
          {
            "point": 500,
            "seconds": 163.96,
            "timeDisplay": "2:43.96"
          },
          {
            "point": 400,
            "seconds": 171.06,
            "timeDisplay": "2:51.06"
          },
          {
            "point": 300,
            "seconds": 178.87,
            "timeDisplay": "2:58.87"
          },
          {
            "point": 200,
            "seconds": 187.71,
            "timeDisplay": "3:07.71"
          },
          {
            "point": 100,
            "seconds": 198.47,
            "timeDisplay": "3:18.47"
          },
          {
            "point": 10,
            "seconds": 213.57,
            "timeDisplay": "3:33.57"
          },
          {
            "point": 1,
            "seconds": 216.77,
            "timeDisplay": "3:36.77"
          }
        ],
        "400_IM": [
          {
            "point": 1100,
            "seconds": 270.49,
            "timeDisplay": "4:30.49"
          },
          {
            "point": 1000,
            "seconds": 282.16,
            "timeDisplay": "4:42.16"
          },
          {
            "point": 900,
            "seconds": 294.23,
            "timeDisplay": "4:54.23"
          },
          {
            "point": 800,
            "seconds": 306.76,
            "timeDisplay": "5:06.76"
          },
          {
            "point": 700,
            "seconds": 319.83,
            "timeDisplay": "5:19.83"
          },
          {
            "point": 600,
            "seconds": 333.53,
            "timeDisplay": "5:33.53"
          },
          {
            "point": 500,
            "seconds": 348.03,
            "timeDisplay": "5:48.03"
          },
          {
            "point": 400,
            "seconds": 363.53,
            "timeDisplay": "6:03.53"
          },
          {
            "point": 300,
            "seconds": 380.4,
            "timeDisplay": "6:20.40"
          },
          {
            "point": 200,
            "seconds": 399.31,
            "timeDisplay": "6:39.31"
          },
          {
            "point": 100,
            "seconds": 421.88,
            "timeDisplay": "7:01.88"
          },
          {
            "point": 10,
            "seconds": 452.26,
            "timeDisplay": "7:32.26"
          },
          {
            "point": 1,
            "seconds": 458.19,
            "timeDisplay": "7:38.19"
          }
        ]
      }
    }
  }
};
