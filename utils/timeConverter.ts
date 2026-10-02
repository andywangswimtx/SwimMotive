// Swim time conversion and improvement calculation utilities

// Convert time string (h:mm:ss.xx, mm:ss.xx, :ss.xx or ss.xx) to seconds.
// Uses strict per-format regexes (rather than permissive parseFloat/split)
// so malformed input like "1:75.00", "12ab", "1.2.3" or "-5.00" is rejected.
export function timeToSeconds(timeString: string): number | null {
  if (!timeString) return null;
  const cleanTime = timeString.trim();

  const toHundredths = (frac?: string) =>
    frac ? parseInt(frac.padEnd(2, "0"), 10) : 0;

  // h:mm:ss.cc (hour-long times, e.g. 1500/1650 free entered as 1:17:02.88)
  let match = cleanTime.match(/^(\d{1,2}):([0-5]\d):([0-5]\d)(?:\.(\d{1,2}))?$/);
  if (match) {
    const [, h, m, s, frac] = match;
    return (
      parseInt(h, 10) * 3600 +
      parseInt(m, 10) * 60 +
      parseInt(s, 10) +
      toHundredths(frac) / 100
    );
  }

  // mm:ss.cc or :ss.cc
  match = cleanTime.match(/^(\d{0,3}):([0-5]?\d)(?:\.(\d{1,2}))?$/);
  if (match) {
    const [, m, s, frac] = match;
    const minutes = m === "" ? 0 : parseInt(m, 10);
    return minutes * 60 + parseInt(s, 10) + toHundredths(frac) / 100;
  }

  // ss.cc (no colon)
  match = cleanTime.match(/^(\d{1,3})(?:\.(\d{1,2}))?$/);
  if (match) {
    const [, s, frac] = match;
    return parseInt(s, 10) + toHundredths(frac) / 100;
  }

  return null;
}

// Convert seconds to time string (mm:ss.xx or ss.xx). Rounds to hundredths
// before splitting into minutes/seconds so values like 119.999 carry into
// the next minute instead of producing an invalid "1:60.00".
export function secondsToTime(seconds: number): string {
  const totalHundredths = Math.round(seconds * 100);
  const totalSeconds = Math.floor(totalHundredths / 100);
  const hundredths = totalHundredths - totalSeconds * 100;
  const minutes = Math.floor(totalSeconds / 60);
  const secs = totalSeconds % 60;
  const secsStr = `${secs}.${String(hundredths).padStart(2, "0")}`;

  if (minutes > 0) {
    return `${minutes}:${secsStr.padStart(5, "0")}`;
  }
  return secsStr;
}

// Normalize a user-entered or stored time string:
// strips leading "0:" so "0:29.89" → "29.89"
export function normalizeTimeDisplay(timeStr: string): string {
  let trimmed = timeStr.trim();
  if (!trimmed) return "-";
  if (trimmed.startsWith(":")) {
    trimmed = trimmed.substring(1);
  }
  // Match "0:XX.XX" pattern (zero minutes)
  const match = trimmed.match(/^0:(\d{1,2}\.\d+)$/);
  return match ? match[1] : trimmed;
}

// per50 is pool-agnostic (distance already carries the yards/meters unit),
// so this intentionally takes no poolType parameter.
export function calculateImprovement(
  userTime: number,
  targetTime: number,
  eventDistance: number,
) {
  const achieved = userTime <= targetTime;
  const improvement = userTime - targetTime;
  const percentage = (improvement / userTime) * 100;

  // Calculate per 50 yards/meters
  const per50 = (improvement / eventDistance) * 50;

  return {
    percentage,
    totalSeconds: improvement,
    per50,
    achieved,
  };
}

// Extract distance from event name. Event codes are always "<digits>_<STROKE>"
// internally, so a missing/zero distance means the caller passed a malformed
// code - throw instead of silently defaulting (a 0 distance causes
// division-by-zero/Infinity in calculateImprovement's per50).
export function getEventDistance(eventName: string): number {
  const match = eventName.match(/^(\d+)/);
  const distance = match ? parseInt(match[1], 10) : NaN;
  if (!distance) {
    throw new Error(`getEventDistance: cannot parse distance from event "${eventName}"`);
  }
  return distance;
}
