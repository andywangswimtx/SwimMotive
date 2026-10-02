import {
    POWER_POINTS_DATA,
    PowerPointsTable,
} from "../assets/timeData/power_points_table";
import { AgeGroup, Gender, PoolType } from "./dataManager";

export interface PowerPointCalculationResult {
  points: number;
  displayPoints: string;
  isExtrapolatedHigh: boolean;
  isBelowMin: boolean;
  // True when the official calculator has a genuine gap at this point/time
  // (no official score exists) - never a fabricated/interpolated value.
  isNoScore: boolean;
  table: PowerPointsTable;
}

export type PowerPointCategory =
  | "elite"
  | "top"
  | "competitive"
  | "developing"
  | "base"
  | "offchart"
  | "unavailable";

export interface PowerPointCategoryConfig {
  category: PowerPointCategory;
  label: string;
  bg: string;
  text: string;
  border: string;
  icon: string;
  iconLib: "Ionicons" | "MaterialCommunityIcons";
}

export const POWER_POINT_CATEGORY_STYLES: Record<
  PowerPointCategory,
  PowerPointCategoryConfig
> = {
  elite: {
    category: "elite",
    label: "Elite",
    bg: "#ffffff",
    text: "#b45309",
    border: "#f59e0b",
    icon: "medal",
    iconLib: "Ionicons",
  },
  top: {
    category: "top",
    label: "National",
    bg: "#ffffff",
    text: "#1d4ed8",
    border: "#3b82f6",
    icon: "flash",
    iconLib: "Ionicons",
  },
  competitive: {
    category: "competitive",
    label: "Competitive",
    bg: "#ffffff",
    text: "#059669",
    border: "#10b981",
    icon: "swim",
    iconLib: "MaterialCommunityIcons",
  },
  developing: {
    category: "developing",
    label: "Developing",
    bg: "#ffffff",
    text: "#d97706",
    border: "#fbbf24",
    icon: "trending-up",
    iconLib: "Ionicons",
  },
  base: {
    category: "base",
    label: "Base",
    bg: "#ffffff",
    text: "#4b5563",
    border: "#9ca3af",
    icon: "water",
    iconLib: "Ionicons",
  },
  offchart: {
    category: "offchart",
    label: "Under Base",
    bg: "#ffffff",
    text: "#be123c",
    border: "#f43f5e",
    icon: "alert-circle",
    iconLib: "Ionicons",
  },
  unavailable: {
    category: "unavailable",
    label: "No Score",
    bg: "#ffffff",
    text: "#6b7280",
    border: "#9ca3af",
    icon: "help-circle",
    iconLib: "Ionicons",
  },
};

export function interpretPowerPoints(
  result: PowerPointCalculationResult | null,
): {
  config: PowerPointCategoryConfig;
  barPercent: number;
} {
  if (!result) {
    return {
      config: POWER_POINT_CATEGORY_STYLES.developing,
      barPercent: 0,
    };
  }

  if (result.isNoScore) {
    return {
      config: POWER_POINT_CATEGORY_STYLES.unavailable,
      barPercent: 0,
    };
  }

  const pts = result.points;
  let cat: PowerPointCategory;

  if (result.isBelowMin || pts < 1) {
    cat = "offchart";
  } else if (pts >= 1000) {
    cat = "elite";
  } else if (pts >= 800) {
    cat = "top";
  } else if (pts >= 600) {
    cat = "competitive";
  } else if (pts >= 300) {
    cat = "developing";
  } else {
    cat = "base";
  }

  const barPercent = Math.max(0, Math.min(100, (pts / 1100) * 100));

  return {
    config: POWER_POINT_CATEGORY_STYLES[cat],
    barPercent,
  };
}

/**
 * Retrieve the 13-tier Power Points threshold table for the given event, gender, age, and course.
 * Returns null if pool is SCM or if event is not swum for that age group.
 */
export function getPowerPointsTable(
  gender: Gender,
  poolType: PoolType,
  ageGroup: AgeGroup,
  event: string,
): PowerPointsTable | null {
  if (poolType !== "SCY" && poolType !== "LCM") {
    return null;
  }
  return POWER_POINTS_DATA[poolType]?.[gender]?.[ageGroup]?.[event] || null;
}

/**
 * Calculate USA Swimming Power Point using linear interpolation between the
 * nearest power point levels (1100, 1000, 900, ..., 100, 10, 1).
 *
 * Table entries with `seconds: null` mark a genuine gap in the official
 * calculator (no time maps to that point value). This function never
 * interpolates through a gap or invents a value for it - it reports
 * `isNoScore: true` instead. At the slow end, the official calculator
 * floors at the slowest *recorded* level with no cutoff, unless that
 * slowest level is itself a gap (e.g. scores 1-5 don't exist for some
 * event/age combos), in which case slower times are also "no score".
 */
export function calculatePowerPoint(
  userSeconds: number | null,
  table: PowerPointsTable,
): PowerPointCalculationResult | null {
  if (!table || table.length === 0) return null;
  if (userSeconds === null || isNaN(userSeconds) || userSeconds <= 0) {
    return null;
  }

  // Build the list of genuinely-scored (non-gap) entries, remembering
  // whether a gap was skipped immediately before each one so brackets that
  // straddle a gap are never linearly interpolated.
  const valid: { point: number; seconds: number }[] = [];
  const gapBeforeValid: boolean[] = [];
  let sawGapSincePrevValid = false;
  for (const row of table) {
    if (row.seconds === null) {
      sawGapSincePrevValid = true;
      continue;
    }
    valid.push({ point: row.point, seconds: row.seconds });
    gapBeforeValid.push(sawGapSincePrevValid);
    sawGapSincePrevValid = false;
  }
  if (valid.length === 0) return null;

  const noScoreResult = (): PowerPointCalculationResult => ({
    points: 0,
    displayPoints: "—",
    isExtrapolatedHigh: false,
    isBelowMin: false,
    isNoScore: true,
    table,
  });

  // Table is sorted descending by points (1100 down to 1),
  // which corresponds to ascending time in seconds (fastest first, slowest last).
  const highest = valid[0];
  const lowest = valid[valid.length - 1];
  const lowestIsGenuineFloor = table[table.length - 1].seconds !== null;

  // Faster than or equal to the fastest recorded level
  if (userSeconds <= highest.seconds) {
    if (userSeconds === highest.seconds) {
      return {
        points: highest.point,
        displayPoints: `${highest.point}`,
        isExtrapolatedHigh: false,
        isBelowMin: false,
        isNoScore: false,
        table,
      };
    }
    // Extrapolate above the fastest level using the rate from the next segment.
    // Unverified against the official curve - callers should label this an estimate.
    const secondHighest = valid[1];
    const timeDiff = secondHighest ? secondHighest.seconds - highest.seconds : 0;
    const rate = timeDiff > 0 ? (highest.point - secondHighest.point) / timeDiff : 100;
    const extrapolated = highest.point + (highest.seconds - userSeconds) * rate;
    const rounded = Math.round(extrapolated);
    return {
      points: rounded,
      displayPoints: `${rounded}`,
      isExtrapolatedHigh: true,
      isBelowMin: false,
      isNoScore: false,
      table,
    };
  }

  // Slower than or equal to the slowest recorded level
  if (userSeconds >= lowest.seconds) {
    if (userSeconds === lowest.seconds) {
      return {
        points: lowest.point,
        displayPoints: `${lowest.point}`,
        isExtrapolatedHigh: false,
        isBelowMin: false,
        isNoScore: false,
        table,
      };
    }
    if (!lowestIsGenuineFloor) {
      // The slowest level itself is a genuine gap - no score exists here.
      return noScoreResult();
    }
    // Official calculator floors at the slowest recorded point with no cutoff.
    return {
      points: lowest.point,
      displayPoints: `${lowest.point}`,
      isExtrapolatedHigh: false,
      isBelowMin: false,
      isNoScore: false,
      table,
    };
  }

  // Linear interpolation between adjacent recorded (non-gap) levels
  for (let i = 0; i < valid.length - 1; i++) {
    const fast = valid[i];     // e.g. 700 pts (faster time)
    const slow = valid[i + 1]; // e.g. 600 pts (slower time)

    if (userSeconds >= fast.seconds && userSeconds <= slow.seconds) {
      if (gapBeforeValid[i + 1]) {
        // A point level was skipped between these two recorded times - the
        // real curve isn't linear here, so don't fabricate an in-between score.
        return noScoreResult();
      }
      const timeSpan = slow.seconds - fast.seconds;
      if (timeSpan === 0) {
        return {
          points: fast.point,
          displayPoints: `${fast.point}`,
          isExtrapolatedHigh: false,
          isBelowMin: false,
          isNoScore: false,
          table,
        };
      }
      const fraction = (slow.seconds - userSeconds) / timeSpan;
      const points = slow.point + fraction * (fast.point - slow.point);
      const rounded = Math.round(points);
      return {
        points: rounded,
        displayPoints: `${rounded}`,
        isExtrapolatedHigh: false,
        isBelowMin: false,
        isNoScore: false,
        table,
      };
    }
  }

  return null;
}

