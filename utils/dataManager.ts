/**
 * Swimming standards utility module for React Native.
 * Uses datasets in assets/timeData:
 * - motiv_time_standards_2024to28.ts: USA Swimming 2024-2028 Motivational Standards
 * - IL-AGC-2026.ts: 2026 Illinois Age Group Championships (AGC) Standards
 */

import { AGE_GROUP_CHAMPS_STANDARDS } from "../assets/timeData/IL-AGC-2026";
import { MOTIVATIONAL_STANDARDS } from "../assets/timeData/motiv_time_standards_2024to28";

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

function getMotivationalAgeKey(ageGroup: AgeGroup): "10&U" | "11" | "12" | "13" | "14" {
  if (ageGroup === "9&U" || ageGroup === "10") return "10&U";
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
    const ageData = (seasonData as any)[ageKey];
    if (!ageData) return null;

    const eventKey = eventCodeToMotivEvent(event);
    const eventData = ageData[eventKey];
    if (!eventData) return null;

    const sexKey = gender === "Girl" ? "G" : "B";
    const cuts = eventData[sexKey];
    if (!cuts || cuts.length < 6) return null;

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

// Get Illinois AGC standards using exact age values 9&U, 10, 11, 12, 13, 14.
export function getIllinoisAGCStandard(
  gender: Gender,
  poolType: PoolType,
  ageGroup: AgeGroup,
  event: string,
): SingleStandard | null {
  try {
    const targetCourse = poolType.toLowerCase(); // 'scy' | 'scm' | 'lcm'
    const courseData = AGE_GROUP_CHAMPS_STANDARDS.find(c => c.course === targetCourse);
    if (!courseData) return null;

    const targetSex = gender === "Girl" ? "girls" : "boys";
    const targetEvent = eventCodeToTagsEvent(event);

    const standardGroup = courseData.standards.find(
      s => s.sex === targetSex && s.age === ageGroup
    );

    const match = standardGroup?.events.find(e => e.event === targetEvent);

    if (!match) return null;

    return {
      standard: match.time || "",
      meet: "2026 Illinois AGC Championships",
    };
  } catch {
    return null;
  }
}
