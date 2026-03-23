import powerIndexLcmBoys from "../../assets/timeData/Power Index vs times LCM boys.json";
import powerIndexLcmGirls from "../../assets/timeData/Power Index vs time LCM girls.json";
import powerIndexScyBoys from "../../assets/timeData/Power Index vs time SCY boys.json";
import powerIndexScyGirls from "../../assets/timeData/Power Index vs time SCY girls.json";

export type Gender = "Boy" | "Girl";

export const SCORE_HEADERS = [
  1, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100,
] as const;
export type ScoreHeader = (typeof SCORE_HEADERS)[number];

export type EventName =
  // SCY Events
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
  | "400SCY IM"
  // LCM Events
  | "50LCM Free"
  | "100LCM Free"
  | "200LCM Free"
  | "400LCM Free"
  | "800LCM Free"
  | "1500LCM Free"
  | "50LCM Back"
  | "100LCM Back"
  | "200LCM Back"
  | "50LCM Breast"
  | "100LCM Breast"
  | "200LCM Breast"
  | "50LCM Fly"
  | "100LCM Fly"
  | "200LCM Fly"
  | "200LCM IM"
  | "400LCM IM";

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
  "50LCM Free",
  "100LCM Free",
  "200LCM Free",
  "400LCM Free",
  "800LCM Free",
  "1500LCM Free",
  "50LCM Back",
  "100LCM Back",
  "200LCM Back",
  "50LCM Breast",
  "100LCM Breast",
  "200LCM Breast",
  "50LCM Fly",
  "100LCM Fly",
  "200LCM Fly",
  "200LCM IM",
  "400LCM IM",
];

export type SwimData = Record<EventName, number[]>;

/**
 * Parses a JSON time string (e.g. "1:34.09") into total seconds.
 */
function parseJsonTime(timeStr: string): number {
  const parts = timeStr.split(":").reverse();
  let totalSeconds = 0;
  totalSeconds += parseFloat(parts[0]);
  if (parts.length > 1) totalSeconds += parseInt(parts[1], 10) * 60;
  if (parts.length > 2) totalSeconds += parseInt(parts[2], 10) * 3600;
  return totalSeconds;
}

/**
 * Transform JSON data into internal SwimData format.
 */
function parseSwimData(json: any): Partial<SwimData> {
  const data: any = {};
  const pool = json.pool; // "SCY" or "LCM"

  json.events.forEach((evt: any) => {
    // Map JSON "FREE" to "Free", "BACK" to "Back", etc.
    const strokeMap: Record<string, string> = {
      FREE: "Free",
      BACK: "Back",
      BREAST: "Breast",
      FLY: "Fly",
      IM: "IM",
    };
    const stroke = strokeMap[evt.stroke] || evt.stroke;
    const eventName = `${evt.distance}${pool} ${stroke}`;
    const times = evt.standards.map((s: any) => parseJsonTime(s.time));
    data[eventName] = times;
  });

  return data;
}

/**
 * Benchmark times (in seconds) for each score in SCORE_HEADERS.
 * The first element is the "Index 1" (elite), and the last element is "Index 100" (base).
 */
export const BOY_DATA = {
  ...parseSwimData(powerIndexScyBoys),
  ...parseSwimData(powerIndexLcmBoys),
} as SwimData;

export const GIRL_DATA = {
  ...parseSwimData(powerIndexScyGirls),
  ...parseSwimData(powerIndexLcmGirls),
} as SwimData;

export const SWIM_DATA: Record<Gender, SwimData> = {
  Boy: BOY_DATA,
  Girl: GIRL_DATA,
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
