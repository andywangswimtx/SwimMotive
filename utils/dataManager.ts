/**
 * Swimming standards utility module for React Native.
 * Uses datasets in assets/timeData:
 * - motiv_time_standards_2024to28.ts: USA Swimming 2024-2028 Motivational Standards
 * - IL-AGC-2026.ts and other *-AGC-*.ts files: LSC Age Group Championships (AGC) Standards
 * - TAG-2026.ts: Texas AGC Standards, with both AGC cuts and Bonus cuts
 */

import { AGE_GROUP_CHAMPS_STANDARDS as CA_CENTRAL_AGC_STANDARDS } from "../assets/timeData/central_california_AGC_2024_2026";
import { FL_AGE_GROUP_CHAMPS_2026_STANDARDS } from "../assets/timeData/FL-AGC-2026";
import { FL_GOLD_COAST_AG_STANDARDS } from "../assets/timeData/FL_gold_coast_AGC_2026_2027";
import { AGE_GROUP_CHAMPS_STANDARDS as IL_AGC_STANDARDS } from "../assets/timeData/IL-AGC-2026";
import { LOUISIANA_STATE_CHAMPIONSHIP_STANDARDS } from "../assets/timeData/LA-AGC-2026";
import { MA_AGC_STANDARDS } from "../assets/timeData/middle-Atlantic-AGC-2027";
import { MOTIVATIONAL_STANDARDS } from "../assets/timeData/motiv_time_standards_2024to28";
import { AGE_GROUP_CHAMPS_STANDARDS as NCSA_AGC_STANDARDS } from "../assets/timeData/NCSA-AGC-2027";
import { PACIFIC_AGC_STANDARDS_2026_2027 } from "../assets/timeData/Pacific_CA-2026-27";
import { AGE_GROUP_CHAMPS_STANDARDS as PVS_AGC_STANDARDS } from "../assets/timeData/PVS-AGC-2027";
import { TIME_STANDARDS as TAG_TIME_STANDARDS } from "../assets/timeData/TAG-2026";

export type Gender = "Boy" | "Girl";
export type PoolType = "SCY" | "LCM" | "SCM";
export type AgeGroup = "9&U" | "10" | "11" | "12" | "13" | "14";

export interface MotivationalStandards {
  B: string;
  BB: string;
  A: string;
  AA: string;
  AAA: string;
  AAAA: string;
}

export interface SingleStandard {
  standard: string;
  meet: string;
}

// ─── Generic AGC (Age Group Championship) standards ─────
// All LSC time-standard files share this shape (course → sex/age → events),
// aside from TAG-2026 which additionally splits cuts into "tags"/"bonus".
interface GenericEventTime {
  event: string;
  time: string;
}

interface GenericAgeStandards {
  sex: string;
  age: string;
  events: GenericEventTime[];
}

interface GenericCourseTimeStandards {
  course: string;
  standards: GenericAgeStandards[];
}

export interface AgcSource {
  id: string;
  label: string;
  meetName: string;
  data: GenericCourseTimeStandards[];
}

// Registry of every LSC AGC dataset wired into the app. To add a new LSC,
// import its data above and append an entry here.
export const AGC_SOURCES: AgcSource[] = [
  { id: "il", label: "Illinois AGC", meetName: "2026 Illinois AGC Championships", data: IL_AGC_STANDARDS },
  { id: "ca-central", label: "Central California AGC", meetName: "2024–2026 Central California AGC Championships", data: CA_CENTRAL_AGC_STANDARDS },
  { id: "fl-gold-coast", label: "FL Gold Coast AGC", meetName: "2026–2027 Florida Gold Coast AGC Championships", data: FL_GOLD_COAST_AG_STANDARDS },
  { id: "fl", label: "Florida AGC", meetName: "2026 Florida Age Group Championships", data: FL_AGE_GROUP_CHAMPS_2026_STANDARDS },
  { id: "la", label: "Louisiana State Champs", meetName: "2026 Louisiana State Championships", data: LOUISIANA_STATE_CHAMPIONSHIP_STANDARDS },
  { id: "ma", label: "Middle Atlantic AGC", meetName: "2027 Middle Atlantic AGC Championships", data: MA_AGC_STANDARDS },
  { id: "ncsa", label: "NCSA AGC", meetName: "2027 NCSA Age Group Championships", data: NCSA_AGC_STANDARDS },
  { id: "pacific", label: "Pacific AGC", meetName: "2026–2027 Pacific Swimming AGC Championships", data: PACIFIC_AGC_STANDARDS_2026_2027 },
  { id: "pvs", label: "Potomac Valley AGC", meetName: "2027 Potomac Valley Age Group Championships", data: PVS_AGC_STANDARDS },
];

export interface TagStandardResult {
  tags: SingleStandard | null;
  bonus: SingleStandard | null;
}

// Whether a given AGC source has any data at all for a pool course
// (independent of gender/age/event) - used to grey out selection UI.
export function agcSourceSupportsCourse(sourceId: string, poolType: PoolType): boolean {
  const source = AGC_SOURCES.find((s) => s.id === sourceId);
  if (!source) return false;
  const targetCourse = poolType.toLowerCase();
  return source.data.some((c) => c.course === targetCourse);
}

// Whether the TAG dataset has any data at all for a pool course.
export function tagSupportsCourse(poolType: PoolType): boolean {
  const targetCourse = poolType.toLowerCase();
  return TAG_TIME_STANDARDS.some((c) => c.course === targetCourse);
}

// Get events based on pool type
export function getEventsForPoolType(poolType: PoolType): string[] {
  if (poolType === "SCY") {
    return [
      "50_FR",
      "100_FR",
      "200_FR",
      "500_FR",
      "1000_FR",
      "1650_FR",
      "50_BK",
      "100_BK",
      "200_BK",
      "50_BR",
      "100_BR",
      "200_BR",
      "50_FL",
      "100_FL",
      "200_FL",
      "100_IM",
      "200_IM",
      "400_IM",
    ];
  } else if (poolType === "LCM") {
    return [
      "50_FR",
      "100_FR",
      "200_FR",
      "400_FR",
      "800_FR",
      "1500_FR",
      "50_BK",
      "100_BK",
      "200_BK",
      "50_BR",
      "100_BR",
      "200_BR",
      "50_FL",
      "100_FL",
      "200_FL",
      "200_IM",
      "400_IM",
    ];
  } else {
    // SCM has same stroke events as SCY, Free distances 400, 800, 1500
    return [
      "50_FR",
      "100_FR",
      "200_FR",
      "400_FR",
      "800_FR",
      "1500_FR",
      "50_BK",
      "100_BK",
      "200_BK",
      "50_BR",
      "100_BR",
      "200_BR",
      "50_FL",
      "100_FL",
      "200_FL",
      "100_IM",
      "200_IM",
      "400_IM",
    ];
  }
}

// Convert event code to display name
export function getEventDisplayName(eventCode: string): string {
  const parts = eventCode.split("_");
  const distance = parts[0];
  const stroke = parts[1];

  const strokeNames: Record<string, string> = {
    FR: "Freestyle",
    BK: "Backstroke",
    BR: "Breaststroke",
    FL: "Butterfly",
    IM: "Individual Medley",
  };

  return `${distance} ${strokeNames[stroke] || stroke}`;
}

function eventCodeToMotivEvent(eventCode: string): string {
  return eventCode.replace("_", "");
}

function eventCodeToTagsEvent(eventCode: string): string {
  const [distance, stroke] = eventCode.split("_");
  const strokeMap: Record<string, string> = {
    FR: "Fr",
    BK: "Bk",
    BR: "Br",
    FL: "Fly",
    IM: "IM",
  };
  const strokeName = strokeMap[stroke] || stroke;
  return `${distance} ${strokeName}`;
}

function normalizeEventLabel(label: string): string {
  return label.trim().replace(/\s+/g, " ").toLowerCase();
}

// Relay rows are written with the stroke token fully capitalized ("200 FR",
// "200 MR") while individual events use title case ("200 Fr", "200 IM" is
// the only natural exception, but medley relay is always "MR", never "IM").
// Check case BEFORE lowercasing so relay vs. individual can be told apart.
function isRelayEventLabel(label: string): boolean {
  const match = label.trim().match(/^\d+\s*([A-Za-z]+)$/);
  if (!match) return false;
  const strokeRaw = match[1];
  return strokeRaw === "FR" || strokeRaw === "MR";
}

// Some datasets spell out strokes in full ("50 Freestyle") while others
// abbreviate them ("50 Fr"). Canonicalize both to a distance+stroke code
// (e.g. "50FR") so event lookups match regardless of label style. Relay rows
// get a distinct suffix so they never collide with same-distance individual
// events (e.g. "200 FR" relay vs. "200 Fr" individual freestyle).
function canonicalEventKey(label: string): string {
  const relaySuffix = isRelayEventLabel(label) ? "-RELAY" : "";
  const match = normalizeEventLabel(label).match(/^(\d+)\s*(.+)$/);
  if (!match) return normalizeEventLabel(label) + relaySuffix;

  const [, distance, strokeRaw] = match;
  const strokeMap: Record<string, string> = {
    fr: "FR", free: "FR", freestyle: "FR",
    bk: "BK", back: "BK", backstroke: "BK",
    br: "BR", breast: "BR", breaststroke: "BR",
    fly: "FL", butterfly: "FL",
    im: "IM", medley: "IM", "individual medley": "IM",
  };
  const strokeCode = strokeMap[strokeRaw] || strokeRaw.toUpperCase();
  return `${distance}${strokeCode}${relaySuffix}`;
}

function getMotivationalAgeKey(ageGroup: AgeGroup): AgeGroup {
  return ageGroup;
}

// Get motivational standards
export function getMotivationalStandards(
  gender: Gender,
  poolType: PoolType,
  ageGroup: AgeGroup,
  event: string,
): MotivationalStandards | null {
  try {
    const seasonData = MOTIVATIONAL_STANDARDS[poolType];
    if (!seasonData) return null;

    const ageKey = getMotivationalAgeKey(ageGroup);
    const ageData = seasonData[ageKey];
    if (!ageData) return null;

    const eventKey = eventCodeToMotivEvent(event) as keyof typeof ageData;
    const eventData = ageData[eventKey];
    if (!eventData) return null;

    const sexKey: "G" | "B" = gender === "Girl" ? "G" : "B";
    const cuts = eventData[sexKey];
    if (!Array.isArray(cuts) || cuts.length < 6) return null;
    if (!cuts.some((cut) => typeof cut === "string" && cut.trim())) return null;

    return {
      B: cuts[0],
      BB: cuts[1],
      A: cuts[2],
      AA: cuts[3],
      AAA: cuts[4],
      AAAA: cuts[5],
    };
  } catch {
    return null;
  }
}

// Some LSC datasets don't define a group for every exact age (e.g. only
// "10&U" instead of separate "9&U"/"10", or "11&U" instead of "9&U"-"11").
// Map the app's selected age to the closest group the dataset actually has.
function mapAgeGroupToDataAge(ageGroup: AgeGroup, dataAges: string[]): string | null {
  if (dataAges.includes(ageGroup)) return ageGroup;

  const bucket = dataAges.find((age) => age.endsWith("&U"));
  if (!bucket) return null;

  const bucketMax = parseInt(bucket, 10);
  const ageNum = ageGroup === "9&U" ? 9 : parseInt(ageGroup, 10);
  if (!Number.isNaN(bucketMax) && !Number.isNaN(ageNum) && ageNum <= bucketMax) {
    return bucket;
  }
  return null;
}

function findAGCMatch(
  courseGroups: GenericAgeStandards[],
  gender: Gender,
  ageGroup: AgeGroup,
  event: string,
): GenericEventTime | undefined {
  const targetSex = gender === "Girl" ? "girls" : "boys";
  const targetKey = canonicalEventKey(eventCodeToTagsEvent(event));
  const dataAges = Array.from(new Set(courseGroups.map((s) => s.age)));
  const mappedAge = mapAgeGroupToDataAge(ageGroup, dataAges);
  if (!mappedAge) return undefined;

  const standardGroup = courseGroups.find(
    (s) => s.sex === targetSex && s.age === mappedAge,
  );

  return standardGroup?.events.find(
    (e) => canonicalEventKey(e.event) === targetKey,
  );
}

// Get an AGC standard for a given LSC source (see AGC_SOURCES).
export function getAGCStandard(
  sourceId: string,
  gender: Gender,
  poolType: PoolType,
  ageGroup: AgeGroup,
  event: string,
): SingleStandard | null {
  try {
    const source = AGC_SOURCES.find((s) => s.id === sourceId);
    if (!source) return null;

    const targetCourse = poolType.toLowerCase();
    const courseData = source.data.find((c) => c.course === targetCourse);
    if (!courseData) return null;

    const match = findAGCMatch(courseData.standards, gender, ageGroup, event);
    if (!match || !match.time.trim()) return null;

    return {
      standard: match.time || "",
      meet: source.meetName,
    };
  } catch {
    return null;
  }
}

// Backwards-compatible helper for the Illinois AGC source specifically.
export function getIllinoisAGCStandard(
  gender: Gender,
  poolType: PoolType,
  ageGroup: AgeGroup,
  event: string,
): SingleStandard | null {
  return getAGCStandard("il", gender, poolType, ageGroup, event);
}

// Get Texas AGC (TAG) standards, which have separate "tags" (AGC) and
// "bonus" cut categories per course/age/sex group.
export function getTagStandards(
  gender: Gender,
  poolType: PoolType,
  ageGroup: AgeGroup,
  event: string,
): TagStandardResult {
  const result: TagStandardResult = { tags: null, bonus: null };
  try {
    const targetCourse = poolType.toLowerCase();
    const courseData = TAG_TIME_STANDARDS.find((c) => c.course === targetCourse);
    if (!courseData) return result;

    for (const cutCategory of courseData.cuts) {
      const match = findAGCMatch(cutCategory.standards, gender, ageGroup, event);
      if (match && match.time.trim()) {
        const standard: SingleStandard = {
          standard: match.time,
          meet:
            cutCategory.cutType === "bonus"
              ? "2026 TAG Bonus Cuts"
              : "2026 TAG Championships",
        };
        if (cutCategory.cutType === "bonus") result.bonus = standard;
        else result.tags = standard;
      }
    }
  } catch {
    return result;
  }
  return result;
}

export {
    calculatePowerPoint,
    getPowerPointsTable
} from "./powerPointManager";
export type { PowerPointCalculationResult } from "./powerPointManager";

