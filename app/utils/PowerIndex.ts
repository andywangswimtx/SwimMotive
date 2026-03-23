/**
 * Swim Power Index
 *
 * This module contains the data and math used by the SwimPowerIndexCalc app.
 * It is designed to be portable so you can embed the scoring logic into another app.
 *
 * Data Source: swimcloud.com (as used in the original app)
 */

export type Gender = "Boys" | "Girls";

export const SCORE_HEADERS = [
  1, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100,
] as const;
export type ScoreHeader = (typeof SCORE_HEADERS)[number];

export type EventName =
  | "50SCY Free"
  | "100SCY Free"
  | "200SCY Free"
  | "500SCY Free"
  | "1000SCY Free"
  | "1650SCY Free"
  | "50SCY Back"
  | "100SCY Back"
  | "200SCY Back"
  | "50SCY Breast"
  | "100SCY Breast"
  | "200SCY Breast"
  | "50SCY Fly"
  | "100SCY Fly"
  | "200SCY Fly"
  | "100SCY IM"
  | "200SCY IM"
  | "400SCY IM";

export const EVENT_NAMES: EventName[] = [
  "50SCY Free",
  "100SCY Free",
  "200SCY Free",
  "500SCY Free",
  "1000SCY Free",
  "1650SCY Free",
  "50SCY Back",
  "100SCY Back",
  "200SCY Back",
  "50SCY Breast",
  "100SCY Breast",
  "200SCY Breast",
  "50SCY Fly",
  "100SCY Fly",
  "200SCY Fly",
  "100SCY IM",
  "200SCY IM",
  "400SCY IM",
];

export type SwimData = Record<EventName, number[]>;

/**
 * Benchmark times (in seconds) for each score in SCORE_HEADERS.
 * The first element is the "Index 1" (elite), and the last element is "Index 100" (base).
 */
export const BOYS_DATA: SwimData = {
  "50SCY Free": [
    19.49, 20.05, 20.65, 21.21, 21.75, 22.26, 22.74, 23.21, 23.66, 24.09, 24.52,
  ],
  "100SCY Free": [
    42.69, 43.93, 45.23, 46.47, 47.64, 48.75, 49.82, 50.84, 51.83, 52.78, 53.7,
  ],
  "200SCY Free": [
    94.09, 96.83, 99.7, 102.42, 105.0, 107.46, 109.81, 112.07, 114.24, 116.33,
    118.35,
  ],
  "500SCY Free": [
    253.39, 260.77, 268.51, 275.83, 282.78, 289.41, 295.74, 301.82, 307.66,
    313.28, 318.72,
  ],
  "1000SCY Free": [
    530.99, 546.46, 562.68, 578.02, 592.59, 606.47, 619.75, 632.48, 644.71,
    656.5, 667.89,
  ],
  "1650SCY Free": [
    885.99, 911.8, 938.88, 964.47, 988.78, 1011.94, 1034.09, 1055.33, 1075.75,
    1095.42, 1114.42,
  ],
  "50SCY Back": [
    21.29, 21.91, 22.56, 23.17, 23.76, 24.31, 24.84, 25.35, 25.84, 26.32, 26.78,
  ],
  "100SCY Back": [
    46.39, 47.74, 49.15, 50.49, 51.77, 52.98, 54.14, 55.25, 56.32, 57.35, 58.36,
  ],
  "200SCY Back": [
    101.49, 104.44, 107.54, 110.48, 113.26, 115.91, 118.45, 120.88, 123.22,
    125.48, 127.66,
  ],
  "50SCY Breast": [
    24.19, 24.89, 25.63, 26.33, 26.99, 27.62, 28.23, 28.81, 29.37, 29.9, 30.43,
  ],
  "100SCY Breast": [
    52.59, 54.12, 55.72, 57.24, 58.69, 60.06, 61.38, 62.64, 63.85, 65.02, 66.15,
  ],
  "200SCY Breast": [
    113.99, 117.31, 120.79, 124.08, 127.21, 130.19, 133.04, 135.77, 138.4,
    140.93, 143.38,
  ],
  "50SCY Fly": [
    20.99, 21.6, 22.24, 22.84, 23.42, 23.97, 24.49, 25.0, 25.48, 25.95, 26.41,
  ],
  "100SCY Fly": [
    46.09, 47.43, 48.84, 50.17, 51.43, 52.64, 53.79, 54.89, 55.96, 56.98, 57.98,
  ],
  "200SCY Fly": [
    102.99, 105.99, 109.13, 112.11, 114.93, 117.63, 120.2, 122.67, 125.04,
    127.33, 129.55,
  ],
  "100SCY IM": [
    47.29, 48.66, 50.11, 51.47, 52.77, 54.01, 55.19, 56.32, 57.41, 58.46, 59.49,
  ],
  "200SCY IM": [
    103.99, 107.02, 110.19, 113.2, 116.05, 118.77, 121.37, 123.86, 126.26,
    128.57, 130.81,
  ],
  "400SCY IM": [
    224.99, 231.54, 238.42, 244.92, 251.09, 256.97, 262.6, 267.99, 273.17,
    278.17, 283.0,
  ],
};

export const GIRLS_DATA: SwimData = {
  "50SCY Free": [
    22.09, 22.73, 23.4, 24.04, 24.65, 25.23, 25.78, 26.31, 26.82, 27.31, 27.79,
  ],
  "100SCY Free": [
    48.39, 49.8, 51.27, 52.67, 54.0, 55.26, 56.47, 57.63, 58.75, 59.82, 60.87,
  ],
  "200SCY Free": [
    104.79, 107.84, 111.04, 114.07, 116.94, 119.68, 122.3, 124.81, 127.23,
    129.56, 131.81,
  ],
  "500SCY Free": [
    280.29, 288.45, 297.02, 305.12, 312.8, 320.13, 327.14, 333.86, 340.32,
    346.54, 352.56,
  ],
  "1000SCY Free": [
    579.99, 596.89, 614.61, 631.36, 647.27, 662.44, 676.94, 690.84, 704.21,
    717.09, 729.53,
  ],
  "1650SCY Free": [
    971.89, 1000.21, 1029.91, 1057.98, 1084.64, 1110.05, 1134.35, 1157.65,
    1180.05, 1201.63, 1222.47,
  ],
  "50SCY Back": [
    24.29, 24.99, 25.74, 26.44, 27.1, 27.74, 28.35, 28.93, 29.49, 30.03, 30.56,
  ],
  "100SCY Back": [
    52.09, 53.6, 55.19, 56.7, 58.13, 59.49, 60.79, 62.04, 63.24, 64.4, 65.52,
  ],
  "200SCY Back": [
    113.89, 117.2, 120.68, 123.97, 127.1, 130.08, 132.92, 135.65, 138.28,
    140.81, 143.26,
  ],
  "50SCY Breast": [
    27.69, 28.49, 29.34, 30.14, 30.9, 31.62, 32.31, 32.98, 33.62, 34.23, 34.83,
  ],
  "100SCY Breast": [
    59.79, 61.53, 63.35, 65.08, 66.72, 68.29, 69.78, 71.21, 72.59, 73.92, 75.21,
  ],
  "200SCY Breast": [
    129.39, 133.16, 137.11, 140.85, 144.4, 147.78, 151.01, 154.12, 157.1,
    159.97, 162.75,
  ],
  "50SCY Fly": [
    23.99, 24.68, 25.42, 26.11, 26.77, 27.4, 28.0, 28.57, 29.12, 29.66, 30.18,
  ],
  "100SCY Fly": [
    51.99, 53.5, 55.09, 56.59, 58.02, 59.38, 60.68, 61.92, 63.12, 64.27, 65.4,
  ],
  "200SCY Fly": [
    115.89, 119.26, 122.8, 126.15, 129.33, 132.36, 135.26, 138.04, 140.71,
    143.28, 145.77,
  ],
  "100SCY IM": [
    52.99, 54.53, 56.15, 57.68, 59.13, 60.52, 61.84, 63.11, 64.33, 65.51, 66.66,
  ],
  "200SCY IM": [
    116.49, 119.88, 123.44, 126.8, 130.0, 133.05, 135.96, 138.75, 141.44,
    144.02, 146.53,
  ],
  "400SCY IM": [
    249.89, 257.17, 264.8, 272.02, 278.88, 285.41, 291.66, 297.65, 303.41,
    308.96, 314.32,
  ],
};

export const SWIM_DATA: Record<Gender, SwimData> = {
  Boys: BOYS_DATA,
  Girls: GIRLS_DATA,
};

/**
 * Parses a time string into total seconds.
 * Supported formats:
 * - "SS.ms" (e.g., "19.49")
 * - "MM:SS.ms" (e.g., "1:34.09")
 * - "HH:MM:SS.ms"
 */
export function parseTimeString(timeStr: string): number | null {
  if (!timeStr) return null;
  const cleaned = timeStr.trim();
  const timeRegex = /^([0-9]+:)?([0-9]{1,2}:)?([0-9]{1,2})(\.[0-9]{1,2})?$/;
  const match = cleaned.match(timeRegex);
  if (!match) return null;

  const parts = cleaned.split(":").reverse();
  let totalSeconds = 0;

  const seconds = parseFloat(parts[0]);
  if (Number.isNaN(seconds)) return null;
  totalSeconds += seconds;

  if (parts.length > 1) {
    const minutes = parseInt(parts[1], 10);
    if (Number.isNaN(minutes)) return null;
    totalSeconds += minutes * 60;
  }

  if (parts.length > 2) {
    const hours = parseInt(parts[2], 10);
    if (Number.isNaN(hours)) return null;
    totalSeconds += hours * 3600;
  }

  return totalSeconds;
}

/**
 * Formats seconds back into a readable swimming time string.
 * - < 60s: "SS.ms"
 * - >= 60s: "M:SS.ms"
 */
export function formatTime(totalSeconds: number): string {
  if (Number.isNaN(totalSeconds) || totalSeconds < 0) return "--";

  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  const secondsStr = seconds.toFixed(2);
  const [secWhole, secFrac] = secondsStr.split(".");
  const paddedSecWhole =
    minutes > 0 && parseInt(secWhole, 10) < 10 ? `0${secWhole}` : secWhole;

  if (minutes > 0) {
    return `${minutes}:${paddedSecWhole}.${secFrac}`;
  }

  return `${secWhole}.${secFrac}`;
}

export type ScoreInterpretation = {
  label: string;
  category:
    | "elite"
    | "top"
    | "competitive"
    | "developing"
    | "base"
    | "offchart";
};

export function interpretScore(score: number): ScoreInterpretation {
  if (score < 1) return { label: "Elite / Off Chart", category: "elite" };
  if (score <= 20) return { label: "Top Tier", category: "top" };
  if (score <= 50) return { label: "Competitive", category: "competitive" };
  if (score <= 80) return { label: "Developing", category: "developing" };
  if (score <= 100) return { label: "Base", category: "base" };
  return { label: "Off Chart", category: "offchart" };
}

/**
 * Interpolates a Power Index score from a user time.
 *
 * Uses linear interpolation between the known reference points.
 * If the time is outside the known range, it extrapolates using the first/last segment.
 */
export function interpolateScore(
  userTime: number,
  referenceTimes: number[],
  referenceScores: number[],
): { score: number; exactMatch: boolean } {
  const exactIndex = referenceTimes.indexOf(userTime);
  if (exactIndex !== -1) {
    return { score: referenceScores[exactIndex], exactMatch: true };
  }

  let lowerIdx = -1;
  let upperIdx = -1;

  for (let i = 0; i < referenceTimes.length - 1; i += 1) {
    if (userTime >= referenceTimes[i] && userTime <= referenceTimes[i + 1]) {
      lowerIdx = i;
      upperIdx = i + 1;
      break;
    }
  }

  if (lowerIdx !== -1) {
    const t1 = referenceTimes[lowerIdx];
    const t2 = referenceTimes[upperIdx];
    const s1 = referenceScores[lowerIdx];
    const s2 = referenceScores[upperIdx];
    const slope = (s2 - s1) / (t2 - t1);
    const interpolatedScore = s1 + (userTime - t1) * slope;
    return { score: interpolatedScore, exactMatch: false };
  }

  // Extrapolate beyond the known range using the edge segment slope.
  if (userTime < referenceTimes[0]) {
    const t1 = referenceTimes[0];
    const t2 = referenceTimes[1];
    const s1 = referenceScores[0];
    const s2 = referenceScores[1];
    const slope = (s2 - s1) / (t2 - t1);
    return { score: s1 + (userTime - t1) * slope, exactMatch: false };
  }

  const n = referenceTimes.length;
  const t1 = referenceTimes[n - 2];
  const t2 = referenceTimes[n - 1];
  const s1 = referenceScores[n - 2];
  const s2 = referenceScores[n - 1];
  const slope = (s2 - s1) / (t2 - t1);
  return { score: s2 + (userTime - t2) * slope, exactMatch: false };
}

/**
 * Returns the interpolated time that corresponds to a target Power Index score.
 * Used for generating improvements / benchmarks.
 */
export function interpolateTimeFromScore(
  targetScore: number,
  referenceScores: number[],
  referenceTimes: number[],
): number {
  const exactIndex = referenceScores.indexOf(targetScore);
  if (exactIndex !== -1) return referenceTimes[exactIndex];

  let lowerIdx = -1;
  let upperIdx = -1;

  for (let i = 0; i < referenceScores.length - 1; i += 1) {
    if (
      targetScore >= referenceScores[i] &&
      targetScore <= referenceScores[i + 1]
    ) {
      lowerIdx = i;
      upperIdx = i + 1;
      break;
    }
  }

  if (lowerIdx !== -1) {
    const s1 = referenceScores[lowerIdx];
    const s2 = referenceScores[upperIdx];
    const t1 = referenceTimes[lowerIdx];
    const t2 = referenceTimes[upperIdx];
    const ratio = (targetScore - s1) / (s2 - s1);
    return t1 + ratio * (t2 - t1);
  }

  if (targetScore < referenceScores[0]) return referenceTimes[0];
  if (targetScore > referenceScores[referenceScores.length - 1])
    return referenceTimes[referenceTimes.length - 1];
  return referenceTimes[0];
}

/**
 * Calculates the Power Index score for a swimmer in a given event.
 */
export function calculatePowerIndex(
  gender: Gender,
  eventName: EventName,
  timeSeconds: number,
): { score: number; exactMatch: boolean } {
  const referenceTimes = SWIM_DATA[gender][eventName];
  return interpolateScore(timeSeconds, referenceTimes, SCORE_HEADERS);
}

/**
 * Returns the split (seconds per 50 yards) that would be required to hit a target score for a given event.
 */
export function splitPer50ForScore(
  gender: Gender,
  eventName: EventName,
  targetScore: number,
): number {
  const time = interpolateTimeFromScore(
    targetScore,
    SCORE_HEADERS,
    SWIM_DATA[gender][eventName],
  );
  const distance = parseEventDistance(eventName);
  if (distance === 0) return NaN;
  return time / (distance / 50);
}

export function parseEventDistance(eventName: string): number {
  const match = eventName.match(/^(\d+)/);
  return match ? parseInt(match[1], 10) : 0;
}
