/**
 * Swimming standards utility module for React Native (iOS).
 * All JSON imports are resolved by Metro; ensure the JSON files are placed
 * in the expected relative paths (e.g., `../../imports/`).
 * Usage: import functions like `getMotivationalStandards` and use them directly
 * in your React components.
 */

import olympicTrialLcm from "../../imports/2024 US Olympic Trial Standards LCM.json";
import futuresLcmMen from "../../imports/futrures LCM men.json";
import futuresLcmWomen from "../../imports/futrures LCM women.json";
import futuresScyMen from "../../imports/futrures SCY men.json";
import futuresScyWomen from "../../imports/futrures SCY women.json";
import jrNationalLcmBoys from "../../imports/jr national LCM boys.json";
import jrNationalLcmGirls from "../../imports/jr national LCM girls.json";
import jrNationalScyBoys from "../../imports/jr national SCY boys.json";
import jrNationalScyGirls from "../../imports/jr national SCY girls.json";
import lcmBoysMoti from "../../imports/LCM_boys_moti_cuts.json";
import lcmGirlsMoti from "../../imports/LCM_girls_moti_cuts.json";
import ncsaLcmMen from "../../imports/NCSA LCM men.json";
import ncsaLcmWomen from "../../imports/NCSA LCM women.json";
import ncsaScyMen from "../../imports/NCSA SCY men.json";
import ncsaScyWomen from "../../imports/NCSA SCY women.json";
import scyBoysMoti from "../../imports/SCY_boys_moti_cuts.json";
import scyGirlsMoti from "../../imports/SCY_girls_moti_cuts.json";
import tscLcmBoys from "../../imports/TSC_sectional_LCM_boys.json";
import tscLcmGirls from "../../imports/TSC_sectional_LCM_girls.json";
import tscScyBoys from "../../imports/TSC_sectional_SCY_boys.json";
import tscScyGirls from "../../imports/TSC_sectional_SCY_girls.json";
import winterJrLcmBoys from "../../imports/winter jr LCM boys.json";
import winterJrLcmGirls from "../../imports/winter jr LCM girls.json";
import winterJrScyBoys from "../../imports/winter jr SCY boys.json";
import winterJrScyGirls from "../../imports/winter jr SCY girls.json";

export type Gender = "Boy" | "Girl";
export type PoolType = "SCY" | "LCM";
export type AgeGroup = "13-14" | "15-16" | "17-18";

export interface MotivationalStandards {
  B: string;
  BB: string;
  A: string;
  AA: string;
  AAA: string;
  AAAA: string;
}

export interface SectionalStandards {
  Sectional_Standard: string;
  Sectional_Bonus_Standard: string;
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
      "100_BK",
      "200_BK",
      "100_BR",
      "200_BR",
      "100_FL",
      "200_FL",
      "200_IM",
      "400_IM",
    ];
  } else {
    return [
      "50_FR",
      "100_FR",
      "200_FR",
      "400_FR",
      "800_FR",
      "1500_FR",
      "100_BK",
      "200_BK",
      "100_BR",
      "200_BR",
      "100_FL",
      "200_FL",
      "200_IM",
      "400_IM",
    ];
  }
}

// Convert event code to display name
export function getEventDisplayName(eventCode: string): string {
  const distance = eventCode.split("_")[0];
  const stroke = eventCode.split("_")[1];

  const strokeNames: Record<string, string> = {
    FR: "Freestyle",
    BK: "Backstroke",
    BR: "Breaststroke",
    FL: "Butterfly",
    IM: "Individual Medley",
  };

  return `${distance} ${strokeNames[stroke] || stroke}`;
}

// Get motivational standards
export function getMotivationalStandards(
  gender: Gender,
  poolType: PoolType,
  ageGroup: AgeGroup,
  event: string,
): MotivationalStandards | null {
  const ageKey = ageGroup.replace("-", "_");

  let data: any;

  if (poolType === "SCY") {
    data = gender === "Girl" ? scyGirlsMoti : scyBoysMoti;
  } else {
    data = gender === "Girl" ? lcmGirlsMoti : lcmBoysMoti;
  }

  const genderKey = gender === "Girl" ? "Girls" : "Boys";
  const rootKey = "USA_Swimming_Motivational_Standards_2024_2028";
  const poolKey = `${genderKey}_${poolType}_Cuts`;

  try {
    const standards = data[rootKey]?.[poolKey]?.[ageKey]?.[event];
    return standards || null;
  } catch {
    return null;
  }
}

// Map a dataManager event code + pool type to a PowerIndex EventName.
// Returns null if not supported (LCM, or events not in the Power Index data).
export function mapEventToPowerIndex(
  poolType: PoolType,
  eventCode: string,
): string | null {
  const map: Record<string, string> = {
    "50_FR": "Free",
    "100_FR": "Free",
    "200_FR": "Free",
    "500_FR": "Free", // SCY
    "400_FR": "Free", // LCM
    "800_FR": "Free", // LCM
    "1500_FR": "Free", // LCM
    "50_BK": "Back",
    "100_BK": "Back",
    "200_BK": "Back",
    "50_BR": "Breast",
    "100_BR": "Breast",
    "200_BR": "Breast",
    "50_FL": "Fly",
    "100_FL": "Fly",
    "200_FL": "Fly",
    "100_IM": "IM", // SCY
    "200_IM": "IM",
    "400_IM": "IM",
  };

  const stroke = map[eventCode];
  if (!stroke) return null;

  const distance = eventCode.split("_")[0];

  if (poolType === "SCY") {
    // 1000/1650 FR and 400/800/1500 FR (LCM) are not in the SCY dataset
    if (
      ["400_FR", "800_FR", "1500_FR", "1000_FR", "1650_FR"].includes(eventCode)
    )
      return null;
    return `${distance}SCY ${stroke}`;
  } else {
    // 500_FR and 100_IM are not in the LCM dataset
    if (["500_FR", "100_IM"].includes(eventCode)) return null;
    return `${distance}LCM ${stroke}`;
  }
}

// Get TSC sectional standards
export function getTSCStandards(
  gender: Gender,
  poolType: PoolType,
  event: string,
): SectionalStandards | null {
  let data: any;

  if (poolType === "SCY") {
    data = gender === "Girl" ? tscScyGirls : tscScyBoys;
  } else {
    data = gender === "Girl" ? tscLcmGirls : tscLcmBoys;
  }

  const genderKey = gender === "Girl" ? "Women" : "Men";
  const rootKey = `2024_TSC_${genderKey}_Sectional_Standards_${poolType}`;

  // Convert event format from XX_FR to XX_FREE, etc.
  const tscEvent = event
    .replace("_FR", "_FREE")
    .replace("_BK", "_BACK")
    .replace("_BR", "_BREAST")
    .replace("_FL", "_FLY");

  try {
    const standards = data[rootKey]?.[tscEvent];
    return standards || null;
  } catch {
    return null;
  }
}

export interface FuturesStandard {
  standard: string;
  meet: string;
}

// Get Futures standards
export function getFuturesStandard(
  gender: Gender,
  poolType: PoolType,
  event: string,
): FuturesStandard | null {
  let data: any;
  if (poolType === "SCY") {
    data = gender === "Girl" ? futuresScyWomen : futuresScyMen;
  } else {
    data = gender === "Girl" ? futuresLcmWomen : futuresLcmMen;
  }

  // Map app event code (e.g. 500_FR) to JSON event name (e.g. "400/500 FR")
  let futuresEvent = event.replace("_", " ");

  if (poolType === "SCY") {
    if (futuresEvent === "500 FR") futuresEvent = "400/500 FR";
    else if (futuresEvent === "1000 FR") futuresEvent = "800/1000 FR";
    else if (futuresEvent === "1650 FR") futuresEvent = "1500/1650 FR";
  }

  try {
    const standardObj = data.standards?.find(
      (s: any) => s.event === futuresEvent,
    );
    if (!standardObj) return null;

    // SCY files use "standard", LCM Women uses "time"
    const standard = standardObj.standard || standardObj.time;
    if (!standard) return null;

    return {
      standard,
      meet: data.meet || "2026 TYR Futures Championships",
    };
  } catch {
    return null;
  }
}

// Get NCSA standards
export function getNCSAStandard(
  gender: Gender,
  poolType: PoolType,
  event: string,
): FuturesStandard | null {
  let data: any;
  if (poolType === "SCY") {
    data = gender === "Girl" ? ncsaScyWomen : ncsaScyMen;
  } else {
    data = gender === "Girl" ? ncsaLcmWomen : ncsaLcmMen;
  }

  // Map app event code (e.g. 500_FR) to JSON event name (e.g. "500 FREE")
  let ncsaEvent = event
    .replace("_FR", " FREE")
    .replace("_BK", " BACK")
    .replace("_BR", " BREAST")
    .replace("_FL", " FLY")
    .replace("_", " ");

  // Handle dual-distance labels in NCSA files (e.g. "400/500 FREE")
  if (ncsaEvent === "500 FREE" || ncsaEvent === "400 FREE") {
    if (data.standards?.find((s: any) => s.event === "400/500 FREE"))
      ncsaEvent = "400/500 FREE";
  } else if (ncsaEvent === "1000 FREE" || ncsaEvent === "800 FREE") {
    if (data.standards?.find((s: any) => s.event === "800/1000 FREE"))
      ncsaEvent = "800/1000 FREE";
  } else if (ncsaEvent === "1650 FREE" || ncsaEvent === "1500 FREE") {
    if (data.standards?.find((s: any) => s.event === "1500/1650 FREE"))
      ncsaEvent = "1500/1650 FREE";
  }

  try {
    const standardObj = data.standards?.find((s: any) => s.event === ncsaEvent);
    if (!standardObj) return null;

    const standard = standardObj.standard;
    // Handle "100 Back Qualifying Time" or empty strings
    if (!standard || !/^\d|:/.test(standard)) return null;

    return {
      standard,
      meet: data.meet || "2025 NCSA Spring Swimming Championships",
    };
  } catch {
    return null;
  }
}

export interface TwoStandard {
  standard: string;
  bonus: string;
  meet: string;
}

// Get Winter Jr. standards
export function getWinterJrStandard(
  gender: Gender,
  poolType: PoolType,
  event: string,
): TwoStandard | null {
  let data: any;
  if (poolType === "SCY") {
    data = gender === "Girl" ? winterJrScyGirls : winterJrScyBoys;
  } else {
    data = gender === "Girl" ? winterJrLcmGirls : winterJrLcmBoys;
  }

  // Map app event code (50_FR) to JSON event name (50 FR)
  const winterJrEvent = event.replace("_", " ");

  try {
    const standardObj = data.standards?.find(
      (s: any) => s.event === winterJrEvent,
    );
    if (!standardObj) return null;

    return {
      standard: standardObj.qualifying_standard,
      bonus: standardObj.bonus_standard,
      meet: data.meet || "2026 Speedo Winter Junior Championships",
    };
  } catch {
    return null;
  }
}

// Get Jr. National standards
export function getJrNationalStandard(
  gender: Gender,
  poolType: PoolType,
  event: string,
): TwoStandard | null {
  let data: any;
  if (poolType === "SCY") {
    data = gender === "Girl" ? jrNationalScyGirls : jrNationalScyBoys;
  } else {
    data = gender === "Girl" ? jrNationalLcmGirls : jrNationalLcmBoys;
  }

  // Map app event code (50_FR) to JSON event name (50 FR)
  const jrEvent = event.replace("_", " ");

  try {
    const standardObj = data.standards?.find((s: any) => s.event === jrEvent);
    if (!standardObj) return null;

    return {
      standard: standardObj.qualifying_standard,
      bonus: standardObj.bonus_standard,
      meet:
        data.championship ||
        data.meet ||
        "2026 Speedo Junior National Championships",
    };
  } catch {
    return null;
  }
}

// Get Olympic Trial standards
export function getOlympicTrialStandard(
  gender: Gender,
  poolType: PoolType,
  event: string,
): FuturesStandard | null {
  if (poolType !== "LCM") return null;

  // Map app event code (50_FR) to JSON event name (50 Freestyle)
  const strokeNames: Record<string, string> = {
    FR: "Freestyle",
    BK: "Backstroke",
    BR: "Breaststroke",
    FL: "Butterfly",
    IM: "Individual Medley",
  };

  const distance = event.split("_")[0];
  const stroke = event.split("_")[1];
  const olympicEvent = `${distance} ${strokeNames[stroke] || stroke}`;

  try {
    const standardObj = olympicTrialLcm.events?.find(
      (s: any) => s.event === olympicEvent,
    );
    if (!standardObj) return null;

    const genderKey = gender === "Girl" ? "women" : ("men" as "women" | "men");
    const standard = standardObj[genderKey];
    if (!standard) return null;

    return {
      standard,
      meet: olympicTrialLcm.competition || "2024 US Olympic Trials",
    };
  } catch {
    return null;
  }
}
