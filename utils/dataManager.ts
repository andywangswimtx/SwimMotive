/**
 * Swimming standards utility module for React Native (iOS).
 * All JSON imports are resolved by Metro; ensure the JSON files are placed
 * in the expected relative paths (e.g., `../../imports/`).
 * Usage: import functions like `getMotivationalStandards` and use them directly
 * in your React components.
 */

// Removed static JSON imports. Data is now lazily loaded via inline require().

export type Gender = "Boy" | "Girl";
export type PoolType = "SCY" | "LCM";
export type AgeGroup = "13-14" | "15-16" | "17-18" | "19 & Over";

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

export interface SectionalsStandards {
  Sectionals_Standard: string;
  Sectionals_Bonus_Standard: string;
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
  } else {
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
    data =
      gender === "Girl"
        ? require("../assets/timeData/Other_cuts/USA_moti_SCY_girls_cuts.json")
        : require("../assets/timeData/Other_cuts/USA_moti_SCY_boys_cuts.json");
  } else {
    data =
      gender === "Girl"
        ? require("../assets/timeData/Other_cuts/USA_moti_LCM_girls_cuts.json")
        : require("../assets/timeData/Other_cuts/USA_moti_LCM_boys_cuts.json");
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
    "1000_FR": "Free", // SCY
    "1650_FR": "Free", // SCY
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
    // 400/800/1500 FR (LCM) are not in the SCY dataset
    if (["400_FR", "800_FR", "1500_FR"].includes(eventCode)) return null;
    return `${distance}SCY ${stroke}`;
  } else {
    // 500_FR, 1000_FR, 1650_FR and 100_IM are not in the LCM dataset
    if (["500_FR", "1000_FR", "1650_FR", "100_IM"].includes(eventCode))
      return null;
    return `${distance}LCM ${stroke}`;
  }
}

// Get TSC sectional standards
export function getTSCStandards(
  gender: Gender,
  poolType: PoolType,
  event: string,
): SectionalsStandards | null {
  let data: any;

  if (poolType === "SCY") {
    data =
      gender === "Girl"
        ? require("../assets/timeData/Texas_Swimming/TSC_sectional_SCY_girls.json")
        : require("../assets/timeData/Texas_Swimming/TSC_sectional_SCY_boys.json");
  } else {
    data =
      gender === "Girl"
        ? require("../assets/timeData/Texas_Swimming/TSC_sectional_LCM_girls.json")
        : require("../assets/timeData/Texas_Swimming/TSC_sectional_LCM_boys.json");
  }

  const genderKey = gender === "Girl" ? "Women" : "Men";
  const rootKey = `2026_TSC_${genderKey}_Sectional_Standards_${poolType}`;

  // Convert event format from XX_FR to XX_FREE, etc.
  const tscEvent = event
    .replace("_FR", "_FREE")
    .replace("_BK", "_BACK")
    .replace("_BR", "_BREAST")
    .replace("_FL", "_FLY");

  try {
    const standards = data[rootKey]?.[tscEvent];
    if (!standards) return null;
    return {
      Sectionals_Standard: standards.Sectional_Standard || "",
      Sectionals_Bonus_Standard: standards.Sectional_Bonus_Standard || "",
    };
  } catch {
    return null;
  }
}

export interface FuturesStandard {
  standard: string;
  meet: string;
}

// Legacy alias for compatibility (defaults to 18U)
export const getFuturesStandard = getFutures18UStandard;

// Get NCSA standards
export function getNCSAStandard(
  gender: Gender,
  poolType: PoolType,
  event: string,
): FuturesStandard | null {
  let data: any;
  if (poolType === "SCY") {
    data =
      gender === "Girl"
        ? require("../assets/timeData/Other_cuts/NCSA_SCY_girls.json")
        : require("../assets/timeData/Other_cuts/NCSA_SCY_boys.json");
  } else {
    data =
      gender === "Girl"
        ? require("../assets/timeData/Other_cuts/NCSA_LCM_girls.json")
        : require("../assets/timeData/Other_cuts/NCSA_LCM_boys.json");
  }

  // Map app event code (e.g. 500_FR) to JSON event name (e.g. "500 FREE")
  let ncsaEvent = event
    .replace("_FR", " FREE")
    .replace("_BK", " BACK")
    .replace("_BR", " BREAST")
    .replace("_FL", " FLY")
    .replace("_IM", " IM")
    .replace("_", " ");

  try {
    const standardObj = data.standards?.find((s: any) => s.event === ncsaEvent);
    if (!standardObj) return null;

    const standard = standardObj.standard;
    // Handle "100 Back Qualifying Time" or empty strings - ensure it's a time format
    if (!standard || !/^\d+[:.]\d+/.test(standard)) return null;

    return {
      standard,
      meet: data.meet || "2025 NCSA Spring Champ",
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
    data =
      gender === "Girl"
        ? require("../assets/timeData/USA_Swimming/winter_jr_SCY_girls.json")
        : require("../assets/timeData/USA_Swimming/winter_jr_SCY_boys.json");
  } else {
    data =
      gender === "Girl"
        ? require("../assets/timeData/USA_Swimming/winter_jr_LCM_girls.json")
        : require("../assets/timeData/USA_Swimming/winter_jr_LCM_boys.json");
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
      meet: data.meet || "2026 Speedo Winter Junior",
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
    data =
      gender === "Girl"
        ? require("../assets/timeData/USA_Swimming/Jr_national_SCY_girls.json")
        : require("../assets/timeData/USA_Swimming/Jr_national_SCY_boys.json");
  } else {
    data =
      gender === "Girl"
        ? require("../assets/timeData/USA_Swimming/Jr_national_LCM_girls.json")
        : require("../assets/timeData/USA_Swimming/Jr_national_LCM_boys.json");
  }

  // Map app event code (50_FR) to JSON event name (50 FR)
  const jrEvent = event.replace("_", " ");

  try {
    const standardObj = data.standards?.find((s: any) => s.event === jrEvent);
    if (!standardObj) return null;

    return {
      standard:
        standardObj.qualifying_standard ||
        standardObj.qualifying ||
        standardObj.standard,
      bonus: standardObj.bonus_standard || standardObj.bonus,
      meet:
        data.championship || data.meet || "2026 Speedo Junior National",
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
  // Map app event code (50_FR) to JSON event name (50 Freestyle)
  const strokeNames: Record<string, string> = {
    FR: "Freestyle",
    BK: "Backstroke",
    BR: "Breaststroke",
    FL: "Butterfly",
    IM: "Individual Medley",
  };

  let distance = event.split("_")[0];
  const stroke = event.split("_")[1];

  // 2024 US Olympic Trials are LCM only.
  if (poolType === "SCY") return null;

  const olympicEvent = `${distance} ${strokeNames[stroke] || stroke}`;

  try {
    const olympicTrialLcm = require("../assets/timeData/USA_Swimming/2024_US_Olympic_Trial_Standards_LCM.json");
    const standardObj = olympicTrialLcm.events?.find(
      (s: any) => s.event === olympicEvent,
    );
    if (!standardObj) return null;

    const genderKey = gender === "Girl" ? "women" : ("men" as "women" | "men");
    const standard = standardObj[genderKey];
    if (!standard) return null;

    return {
      standard,
      meet: olympicTrialLcm.competition || "2024 US Olympic Trial",
    };
  } catch {
    return null;
  }
}

// Get TAGS standards (13-14 only)
export function getTAGSStandard(
  gender: Gender,
  poolType: PoolType,
  ageGroup: AgeGroup,
  event: string,
): TwoStandard | null {
  if (ageGroup !== "13-14") return null;

  try {
    let data: any;
    if (poolType === "SCY") {
      data = gender === "Girl"
        ? require("../assets/timeData/Texas_Swimming/2026_TAGS_girls_SCY.json")
        : require("../assets/timeData/Texas_Swimming/2026_TAGS_boys_SCY.json");
    } else {
      data = gender === "Girl"
        ? require("../assets/timeData/Texas_Swimming/2026_TAGS_girls_LCM.json")
        : require("../assets/timeData/Texas_Swimming/2026_TAGS_boys_LCM.json");
    }

    const genderKey = gender === "Girl" ? "Girls" : "Boys";
    const rootKey = `2026_TAGS_${genderKey}_13-14_Standards_${poolType}`;

    const tagsEvent = event
      .replace("_FR", "_FREE")
      .replace("_BK", "_BACK")
      .replace("_BR", "_BREAST")
      .replace("_FL", "_FLY");

    const standardObj = data[rootKey]?.[tagsEvent];
    if (!standardObj || !standardObj.Standard) return null;

    return {
      standard: standardObj.Standard,
      bonus: standardObj.Bonus_Standard || "",
      meet: "2026 TAGS Championships",
    };
  } catch {
    return null;
  }
}


// Get Gulf standards (13-14 only)
export function getGulfStandard(
  gender: Gender,
  poolType: PoolType,
  ageGroup: AgeGroup,
  event: string,
): SingleStandard | null {
  if (ageGroup !== "13-14") return null;

  try {
    let data: any;
    if (poolType === "SCY") {
      data = gender === "Girl"
        ? require("../assets/timeData/Texas_Swimming/gulf_age_group_13-14_SCY_girls.json")
        : require("../assets/timeData/Texas_Swimming/gulf_age_group_13-14_SCY_boys.json");
    } else {
      data = gender === "Girl"
        ? require("../assets/timeData/Texas_Swimming/gulf_age_group_13-14_LCM_girls.json")
        : require("../assets/timeData/Texas_Swimming/gulf_age_group_13-14_LCM_boys.json");
    }

    const gulfEvent = event.replace("_", " ");
    const standardObj = data.standards?.find((s: any) => s.event === gulfEvent);
    if (!standardObj) return null;

    return {
      standard: standardObj.standard,
      meet: data.meet || "Gulf Age Group Championship",
    };
  } catch {
    return null;
  }
}

// Get Gulf Senior standards
export function getGulfSeniorStandard(
  gender: Gender,
  poolType: PoolType,
  event: string,
): SingleStandard | null {
  try {
    let data: any;
    if (poolType === "SCY") {
      data = gender === "Girl"
        ? require("../assets/timeData/Texas_Swimming/gulf_senior_SCY_girls.json")
        : require("../assets/timeData/Texas_Swimming/gulf_senior_SCY_boys.json");
    } else {
      data = gender === "Girl"
        ? require("../assets/timeData/Texas_Swimming/gulf_senior_LCM_girls.json")
        : require("../assets/timeData/Texas_Swimming/gulf_senior_LCM_boys.json");
    }

    const gulfEvent = event.replace("_", " ");
    const standardObj = data.standards?.find((s: any) => s.event === gulfEvent);
    if (!standardObj) return null;

    return {
      standard: standardObj.standard,
      meet: data.meet || "Gulf Senior Championship",
    };
  } catch {
    return null;
  }
}

// Get Olympic (LA28) standards
export function getOlympicStandard(
  gender: Gender,
  poolType: PoolType,
  event: string,
): TwoStandard | null {
  if (poolType === "SCY") return null;

  try {
    const aData = gender === "Girl"
      ? require("../assets/timeData/Other_cuts/2028_Olympic_Qualifying_Women_A-times.json")
      : require("../assets/timeData/Other_cuts/2028_Olympic_Qualifying_Men_A-times.json");
    const bData = gender === "Girl"
      ? require("../assets/timeData/Other_cuts/2028_Olympic_Qualifying_Women_B-times.json")
      : require("../assets/timeData/Other_cuts/2028_Olympic_Qualifying_Men_B-times.json");

    const searchEvent = event.replace("_", " ");
    const aObj = aData.standards?.find((s: any) => s.event === searchEvent);
    const bObj = bData.standards?.find((s: any) => s.event === searchEvent);

    if (!aObj) return null;

    return {
      standard: aObj.standard,
      bonus: bObj ? bObj.standard : "",
      meet: aData.meet || "LA28 Olympic Games",
    };
  } catch {
    return null;
  }
}

// Get Toyota National 18U standards
export function getToyotaNational18UStandard(
  gender: Gender,
  poolType: PoolType,
  event: string,
): FuturesStandard | null {
  try {
    let data: any;
    if (poolType === "SCY") {
      data = gender === "Girl"
        ? require("../assets/timeData/USA_Swimming/Toyota_National_18U_SCY_girls.json")
        : require("../assets/timeData/USA_Swimming/Toyota_National_18U_SCY_boys.json");
    } else {
      data = gender === "Girl"
        ? require("../assets/timeData/USA_Swimming/Toyota_National_18U_LCM_girls.json")
        : require("../assets/timeData/USA_Swimming/Toyota_National_18U_LCM_boys.json");
    }

    const standardEvent = event.replace("_", " ");
    const standardObj = data.standards?.find((s: any) => s.event === standardEvent);
    if (!standardObj) return null;

    return {
      standard: standardObj.standard,
      meet: data.meet || "2026 Toyota National Championships (18 & Under)",
    };
  } catch {
    return null;
  }
}

// Get Toyota National 19O standards
export function getToyotaNational19OStandard(
  gender: Gender,
  poolType: PoolType,
  event: string,
): FuturesStandard | null {
  try {
    let data: any;
    if (poolType === "SCY") {
      data = gender === "Girl"
        ? require("../assets/timeData/USA_Swimming/Toyota_National_19O_SCY_girls.json")
        : require("../assets/timeData/USA_Swimming/Toyota_National_19O_SCY_boys.json");
    } else {
      data = gender === "Girl"
        ? require("../assets/timeData/USA_Swimming/Toyota_National_19O_LCM_girls.json")
        : require("../assets/timeData/USA_Swimming/Toyota_National_19O_LCM_boys.json");
    }

    const standardEvent = event.replace("_", " ");
    const standardObj = data.standards?.find((s: any) => s.event === standardEvent);
    if (!standardObj) return null;

    return {
      standard: standardObj.standard,
      meet: data.meet || "2026 Toyota National Championships (19 & Over)",
    };
  } catch {
    return null;
  }
}

// Get US Open standards
export function getUSOpenStandard(
  gender: Gender,
  poolType: PoolType,
  event: string,
): TwoStandard | null {
  try {
    let data: any;
    if (poolType === "SCY") {
      data = gender === "Girl"
        ? require("../assets/timeData/USA_Swimming/US_Open_SCY_girls.json")
        : require("../assets/timeData/USA_Swimming/US_Open_SCY_boys.json");
    } else {
      data = gender === "Girl"
        ? require("../assets/timeData/USA_Swimming/US_Open_LCM_girls.json")
        : require("../assets/timeData/USA_Swimming/US_Open_LCM_boys.json");
    }

    const standardEvent = event.replace("_", " ");
    const standardObj = data.standards?.find((s: any) => s.event === standardEvent);
    if (!standardObj) return null;

    return {
      standard: standardObj.standard,
      bonus: standardObj.bonus || "",
      meet: data.meet || "2026 Toyota U.S. Open Championships",
    };
  } catch {
    return null;
  }
}

// Get Pro Swim 19O standards
export function getProSwim19OStandard(
  gender: Gender,
  poolType: PoolType,
  event: string,
): FuturesStandard | null {
  try {
    let data: any;
    if (poolType === "SCY") {
      data = gender === "Girl"
        ? require("../assets/timeData/USA_Swimming/Pro_Swim_19O_SCY_girls.json")
        : require("../assets/timeData/USA_Swimming/Pro_Swim_19O_SCY_boys.json");
    } else {
      data = gender === "Girl"
        ? require("../assets/timeData/USA_Swimming/Pro_Swim_19O_LCM_girls.json")
        : require("../assets/timeData/USA_Swimming/Pro_Swim_19O_LCM_boys.json");
    }

    const standardEvent = event.replace("_", " ");
    const standardObj = data.standards?.find((s: any) => s.event === standardEvent);
    if (!standardObj) return null;

    return {
      standard: standardObj.standard,
      meet: data.meet || "2026 TYR Pro Swim Series (19 & Over)",
    };
  } catch {
    return null;
  }
}

// Get Pro Swim 18U standards
export function getProSwim18UStandard(
  gender: Gender,
  poolType: PoolType,
  event: string,
): FuturesStandard | null {
  try {
    let data: any;
    if (poolType === "SCY") {
      data = gender === "Girl"
        ? require("../assets/timeData/USA_Swimming/Pro_Swim_18U_SCY_girls.json")
        : require("../assets/timeData/USA_Swimming/Pro_Swim_18U_SCY_boys.json");
    } else {
      data = gender === "Girl"
        ? require("../assets/timeData/USA_Swimming/Pro_Swim_18U_LCM_girls.json")
        : require("../assets/timeData/USA_Swimming/Pro_Swim_18U_LCM_boys.json");
    }

    const standardEvent = event.replace("_", " ");
    const standardObj = data.standards?.find((s: any) => s.event === standardEvent);
    if (!standardObj) return null;

    return {
      standard: standardObj.standard,
      meet: data.meet || "2026 TYR Pro Swim Series (18 & Under)",
    };
  } catch {
    return null;
  }
}

// Get Futures 18U standards
export function getFutures18UStandard(
  gender: Gender,
  poolType: PoolType,
  event: string,
): FuturesStandard | null {
  try {
    let data: any;
    if (poolType === "SCY") {
      data = gender === "Girl"
        ? require("../assets/timeData/USA_Swimming/futrures_SCY_girls.json")
        : require("../assets/timeData/USA_Swimming/futrures_SCY_boys.json");
    } else {
      data = gender === "Girl"
        ? require("../assets/timeData/USA_Swimming/futrures_LCM_girls.json")
        : require("../assets/timeData/USA_Swimming/futrures_LCM_boys.json");
    }

    const standardEvent = event.replace("_", " ");
    const standardObj = data.standards?.find((s: any) => s.event === standardEvent);
    if (!standardObj) return null;

    return {
      standard: standardObj.standard,
      meet: data.meet || "2026 TYR Futures Championships (18 & Under)",
    };
  } catch {
    return null;
  }
}

// Get Futures 19O standards
export function getFutures19OStandard(
  gender: Gender,
  poolType: PoolType,
  event: string,
): FuturesStandard | null {
  try {
    let data: any;
    if (poolType === "SCY") {
      data = gender === "Girl"
        ? require("../assets/timeData/USA_Swimming/Futures_19O_SCY_girls.json")
        : require("../assets/timeData/USA_Swimming/Futures_19O_SCY_boys.json");
    } else {
      data = gender === "Girl"
        ? require("../assets/timeData/USA_Swimming/Futures_19O_LCM_girls.json")
        : require("../assets/timeData/USA_Swimming/Futures_19O_LCM_boys.json");
    }

    const standardEvent = event.replace("_", " ");
    const standardObj = data.standards?.find((s: any) => s.event === standardEvent);
    if (!standardObj) return null;

    return {
      standard: standardObj.standard,
      meet: data.meet || "2026 TYR Futures Championships (19 & Over)",
    };
  } catch {
    return null;
  }
}

// Legacy alias for compatibility (defaults to 18U)

