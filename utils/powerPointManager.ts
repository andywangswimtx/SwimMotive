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
  table: PowerPointsTable;
}

export type PowerPointCategory =
  | "elite"
  | "top"
  | "competitive"
  | "developing"
  | "base"
  | "offchart";

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
 */
export function calculatePowerPoint(
  userSeconds: number | null,
  table: PowerPointsTable,
): PowerPointCalculationResult | null {
  if (!table || table.length === 0) return null;
  if (userSeconds === null || isNaN(userSeconds) || userSeconds <= 0) {
    return null;
  }

  // Table is sorted descending by points (1100 down to 1),
  // which corresponds to ascending time in seconds (fastest first, slowest last).
  const highest = table[0]; // point: 1100
  const lowest = table[table.length - 1]; // point: 1

  // Faster than or equal to 1100 points
  if (userSeconds <= highest.seconds) {
    if (userSeconds === highest.seconds) {
      return {
        points: 1100,
        displayPoints: "1100",
        isExtrapolatedHigh: false,
        isBelowMin: false,
        table,
      };
    }
    // Extrapolate above 1100 using rate between 1000 and 1100
    const secondHighest = table[1];
    const timeDiff = secondHighest.seconds - highest.seconds;
    const rate = timeDiff > 0 ? (highest.point - secondHighest.point) / timeDiff : 100;
    const extrapolated = 1100 + (highest.seconds - userSeconds) * rate;
    const rounded = Math.round(extrapolated);
    return {
      points: rounded,
      displayPoints: `${rounded}`,
      isExtrapolatedHigh: true,
      isBelowMin: false,
      table,
    };
  }

  // Slower than or equal to 1 point
  if (userSeconds >= lowest.seconds) {
    if (userSeconds === lowest.seconds) {
      return {
        points: 1,
        displayPoints: "1",
        isExtrapolatedHigh: false,
        isBelowMin: false,
        table,
      };
    }
    return {
      points: 0,
      displayPoints: "< 1",
      isExtrapolatedHigh: false,
      isBelowMin: true,
      table,
    };
  }

  // Linear interpolation between the two bracket points
  for (let i = 0; i < table.length - 1; i++) {
    const fast = table[i];     // e.g. 700 pts (faster time)
    const slow = table[i + 1]; // e.g. 600 pts (slower time)

    if (userSeconds >= fast.seconds && userSeconds <= slow.seconds) {
      const timeSpan = slow.seconds - fast.seconds;
      if (timeSpan === 0) {
        return {
          points: fast.point,
          displayPoints: `${fast.point}`,
          isExtrapolatedHigh: false,
          isBelowMin: false,
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
        table,
      };
    }
  }

  return null;
}
