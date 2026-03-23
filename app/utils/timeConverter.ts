// src/utils/swimCalculations.ts

// Convert time string (mm:ss.xx or :ss.xx or ss.xx) to seconds
export function timeToSeconds(timeString: string): number | null {
  if (!timeString) return null;

  // Remove any leading colons and spaces
  const cleanTime = timeString.trim();

  // Check if it contains a colon
  if (cleanTime.includes(":")) {
    const parts = cleanTime.split(":");

    if (parts.length === 2) {
      const minutes = parts[0] === "" ? 0 : parseFloat(parts[0]);
      const seconds = parseFloat(parts[1]);

      if (isNaN(minutes) || isNaN(seconds)) return null;
      return minutes * 60 + seconds;
    }
  } else {
    // Just seconds
    const seconds = parseFloat(cleanTime);
    if (isNaN(seconds)) return null;
    return seconds;
  }

  return null;
}

// Convert seconds to time string (mm:ss.xx or ss.xx)
export function secondsToTime(seconds: number): string {
  const minutes = Math.floor(seconds / 60);
  const secs = seconds % 60;

  if (minutes > 0) {
    return `${minutes}:${secs.toFixed(2).padStart(5, "0")}`;
  } else {
    return secs.toFixed(2);
  }
}

// Normalize a user-entered or stored time string:
// strips leading "0:" so "0:29.89" → "29.89"
export function normalizeTimeDisplay(timeStr: string): string {
  const trimmed = timeStr.trim();
  // Match "0:XX.XX" pattern (zero minutes)
  const match = trimmed.match(/^0:(\d{1,2}\.\d+)$/);
  return match ? match[1] : trimmed;
}

// Calculate improvement metrics
export function calculateImprovement(
  userTime: number,
  targetTime: number,
  eventDistance: number,
  poolType: "SCY" | "LCM",
) {
  if (userTime <= targetTime) {
    return {
      percentage: 0,
      totalSeconds: 0,
      per50: 0,
      achieved: true,
    };
  }

  const improvement = userTime - targetTime;
  const percentage = (improvement / userTime) * 100;

  // Calculate per 50 yards/meters
  const unitsPer50 = poolType === "SCY" ? 50 : 50; // yards or meters
  const per50 = (improvement / eventDistance) * unitsPer50;

  return {
    percentage,
    totalSeconds: improvement,
    per50,
    achieved: false,
  };
}

// Extract distance from event name
export function getEventDistance(eventName: string): number {
  const match = eventName.match(/^(\d+)/);
  if (match) {
    return parseInt(match[1]);
  }
  return 100; // default
}
