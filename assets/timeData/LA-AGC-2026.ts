/**
 * Louisiana State Championship 2026 Qualifying Times
 *
 * FORMAT NOTE:
 * - Organized by exact age ("9&U", "10", "11", "12", "13", "14")
 *   mapped from age group standards (10&U, 11-12, 13-14).
 * - Age 11 = Age 12, and Age 13 = Age 14 per mapping rules.
 * - Times are stored as display strings ("MM:SS.ms" or ":SS.ms").
 */

export type PoolCourse = 'lcm' | 'scy';
export type Sex = 'girls' | 'boys';
export type Age = '9&U' | '10' | '11' | '12' | '13' | '14';

export interface EventTime {
  event: string;
  time: string;
}

export interface AgeStandards {
  sex: Sex;
  age: Age;
  events: EventTime[];
}

export interface CourseTimeStandards {
  course: PoolCourse;
  standards: AgeStandards[];
}

// Louisiana State Championship 2026 Qualifying Times
export const LOUISIANA_STATE_CHAMPIONSHIP_STANDARDS: CourseTimeStandards[] = [
  {
    course: 'lcm',
    standards: [
      // ================= GIRLS =================
      {
        sex: 'girls',
        age: '9&U',
        events: [
          { event: '50 Fr', time: ':39.69' },
          { event: '100 Fr', time: '1:32.19' },
          { event: '200 Fr', time: '3:36.09' },
          { event: '50 Bk', time: ':47.39' },
          { event: '100 Bk', time: '1:46.99' },
          { event: '50 Br', time: ':53.99' },
          { event: '100 Br', time: '1:59.79' },
          { event: '50 Fly', time: ':48.09' },
          { event: '100 Fly', time: '1:52.69' },
          { event: '200 IM', time: '4:01.39' },
        ]
      },
      {
        sex: 'girls',
        age: '10',
        events: [
          { event: '50 Fr', time: ':39.69' },
          { event: '100 Fr', time: '1:32.19' },
          { event: '200 Fr', time: '3:36.09' },
          { event: '50 Bk', time: ':47.39' },
          { event: '100 Bk', time: '1:46.99' },
          { event: '50 Br', time: ':53.99' },
          { event: '100 Br', time: '1:59.79' },
          { event: '50 Fly', time: ':48.09' },
          { event: '100 Fly', time: '1:52.69' },
          { event: '200 IM', time: '4:01.39' },
        ]
      },
      {
        sex: 'girls',
        age: '11',
        events: [
          { event: '50 Fr', time: ':33.69' },
          { event: '100 Fr', time: '1:16.89' },
          { event: '200 Fr', time: '2:53.59' },
          { event: '400 Fr', time: '6:19.89' },
          { event: '50 Bk', time: ':40.29' },
          { event: '100 Bk', time: '1:27.39' },
          { event: '50 Br', time: ':48.39' },
          { event: '100 Br', time: '1:46.49' },
          { event: '50 Fly', time: ':40.09' },
          { event: '100 Fly', time: '1:33.59' },
          { event: '200 IM', time: '3:17.69' },
        ]
      },
      {
        sex: 'girls',
        age: '12',
        events: [
          { event: '50 Fr', time: ':33.69' },
          { event: '100 Fr', time: '1:16.89' },
          { event: '200 Fr', time: '2:53.59' },
          { event: '400 Fr', time: '6:19.89' },
          { event: '50 Bk', time: ':40.29' },
          { event: '100 Bk', time: '1:27.39' },
          { event: '50 Br', time: ':48.39' },
          { event: '100 Br', time: '1:46.49' },
          { event: '50 Fly', time: ':40.09' },
          { event: '100 Fly', time: '1:33.59' },
          { event: '200 IM', time: '3:17.69' },
        ]
      },
      {
        sex: 'girls',
        age: '13',
        events: [
          { event: '50 Fr', time: ':32.19' },
          { event: '100 Fr', time: '1:10.89' },
          { event: '200 Fr', time: '2:35.39' },
          { event: '400 Fr', time: '5:20.49' },
          { event: '800 Fr', time: '10:52.49' },
          { event: '1500 Fr', time: '20:51.69' },
          { event: '100 Bk', time: '1:24.59' },
          { event: '200 Bk', time: '3:00.89' },
          { event: '100 Br', time: '1:35.99' },
          { event: '200 Br', time: '3:27.59' },
          { event: '100 Fly', time: '1:20.69' },
          { event: '200 Fly', time: '3:00.59' },
          { event: '200 IM', time: '3:02.89' },
          { event: '400 IM', time: '6:23.59' },
        ]
      },
      {
        sex: 'girls',
        age: '14',
        events: [
          { event: '50 Fr', time: ':32.19' },
          { event: '100 Fr', time: '1:10.89' },
          { event: '200 Fr', time: '2:35.39' },
          { event: '400 Fr', time: '5:20.49' },
          { event: '800 Fr', time: '10:52.49' },
          { event: '1500 Fr', time: '20:51.69' },
          { event: '100 Bk', time: '1:24.59' },
          { event: '200 Bk', time: '3:00.89' },
          { event: '100 Br', time: '1:35.99' },
          { event: '200 Br', time: '3:27.59' },
          { event: '100 Fly', time: '1:20.69' },
          { event: '200 Fly', time: '3:00.59' },
          { event: '200 IM', time: '3:02.89' },
          { event: '400 IM', time: '6:23.59' },
        ]
      },

      // ================= BOYS =================
      {
        sex: 'boys',
        age: '9&U',
        events: [
          { event: '50 Fr', time: ':39.19' },
          { event: '100 Fr', time: '1:30.49' },
          { event: '200 Fr', time: '3:32.79' },
          { event: '50 Bk', time: ':47.39' },
          { event: '100 Bk', time: '1:49.99' },
          { event: '50 Br', time: ':58.99' },
          { event: '100 Br', time: '2:10.99' },
          { event: '50 Fly', time: ':52.29' },
          { event: '100 Fly', time: '2:08.39' },
          { event: '200 IM', time: '4:06.09' },
        ]
      },
      {
        sex: 'boys',
        age: '10',
        events: [
          { event: '50 Fr', time: ':39.19' },
          { event: '100 Fr', time: '1:30.49' },
          { event: '200 Fr', time: '3:32.79' },
          { event: '50 Bk', time: ':47.39' },
          { event: '100 Bk', time: '1:49.99' },
          { event: '50 Br', time: ':58.99' },
          { event: '100 Br', time: '2:10.99' },
          { event: '50 Fly', time: ':52.29' },
          { event: '100 Fly', time: '2:08.39' },
          { event: '200 IM', time: '4:06.09' },
        ]
      },
      {
        sex: 'boys',
        age: '11',
        events: [
          { event: '50 Fr', time: ':33.39' },
          { event: '100 Fr', time: '1:15.69' },
          { event: '200 Fr', time: '2:50.99' },
          { event: '400 Fr', time: '6:11.49' },
          { event: '50 Bk', time: ':40.09' },
          { event: '100 Bk', time: '1:33.09' },
          { event: '50 Br', time: ':49.39' },
          { event: '100 Br', time: '1:47.29' },
          { event: '50 Fly', time: ':39.79' },
          { event: '100 Fly', time: '1:35.19' },
          { event: '200 IM', time: '3:24.99' },
        ]
      },
      {
        sex: 'boys',
        age: '12',
        events: [
          { event: '50 Fr', time: ':33.39' },
          { event: '100 Fr', time: '1:15.69' },
          { event: '200 Fr', time: '2:50.99' },
          { event: '400 Fr', time: '6:11.49' },
          { event: '50 Bk', time: ':40.09' },
          { event: '100 Bk', time: '1:33.09' },
          { event: '50 Br', time: ':49.39' },
          { event: '100 Br', time: '1:47.29' },
          { event: '50 Fly', time: ':39.79' },
          { event: '100 Fly', time: '1:35.19' },
          { event: '200 IM', time: '3:24.99' },
        ]
      },
      {
        sex: 'boys',
        age: '13',
        events: [
          { event: '50 Fr', time: ':29.89' },
          { event: '100 Fr', time: '1:05.39' },
          { event: '200 Fr', time: '2:24.59' },
          { event: '400 Fr', time: '5:07.99' },
          { event: '800 Fr', time: '10:41.49' },
          { event: '1500 Fr', time: '20:00.19' },
          { event: '100 Bk', time: '1:18.39' },
          { event: '200 Bk', time: '2:49.79' },
          { event: '100 Br', time: '1:29.09' },
          { event: '200 Br', time: '3:13.59' },
          { event: '100 Fly', time: '1:16.49' },
          { event: '200 Fly', time: '2:47.79' },
          { event: '200 IM', time: '2:47.69' },
          { event: '400 IM', time: '5:52.69' },
        ]
      },
      {
        sex: 'boys',
        age: '14',
        events: [
          { event: '50 Fr', time: ':29.89' },
          { event: '100 Fr', time: '1:05.39' },
          { event: '200 Fr', time: '2:24.59' },
          { event: '400 Fr', time: '5:07.99' },
          { event: '800 Fr', time: '10:41.49' },
          { event: '1500 Fr', time: '20:00.19' },
          { event: '100 Bk', time: '1:18.39' },
          { event: '200 Bk', time: '2:49.79' },
          { event: '100 Br', time: '1:29.09' },
          { event: '200 Br', time: '3:13.59' },
          { event: '100 Fly', time: '1:16.49' },
          { event: '200 Fly', time: '2:47.79' },
          { event: '200 IM', time: '2:47.69' },
          { event: '400 IM', time: '5:52.69' },
        ]
      }
    ]
  },
  {
    course: 'scy',
    standards: [
      // ================= GIRLS =================
      {
        sex: 'girls',
        age: '9&U',
        events: [
          { event: '50 Fr', time: ':34.99' },
          { event: '100 Fr', time: '1:21.59' },
          { event: '200 Fr', time: '3:11.59' },
          { event: '50 Bk', time: ':42.19' },
          { event: '100 Bk', time: '1:35.19' },
          { event: '50 Br', time: ':47.69' },
          { event: '100 Br', time: '1:45.99' },
          { event: '50 Fly', time: ':42.59' },
          { event: '100 Fly', time: '2:03.09' },
          { event: '100 IM', time: '1:32.39' },
          { event: '200 IM', time: '3:34.39' },
        ]
      },
      {
        sex: 'girls',
        age: '10',
        events: [
          { event: '50 Fr', time: ':34.99' },
          { event: '100 Fr', time: '1:21.59' },
          { event: '200 Fr', time: '3:11.59' },
          { event: '50 Bk', time: ':42.19' },
          { event: '100 Bk', time: '1:35.19' },
          { event: '50 Br', time: ':47.69' },
          { event: '100 Br', time: '1:45.99' },
          { event: '50 Fly', time: ':42.59' },
          { event: '100 Fly', time: '2:03.09' },
          { event: '100 IM', time: '1:32.39' },
          { event: '200 IM', time: '3:34.39' },
        ]
      },
      {
        sex: 'girls',
        age: '11',
        events: [
          { event: '50 Fr', time: ':29.59' },
          { event: '100 Fr', time: '1:07.79' },
          { event: '200 Fr', time: '2:33.29' },
          { event: '500 Fr', time: '7:04.29' },
          { event: '50 Bk', time: ':35.79' },
          { event: '100 Bk', time: '1:17.59' },
          { event: '50 Br', time: ':42.69' },
          { event: '100 Br', time: '1:33.99' },
          { event: '50 Fly', time: ':35.49' },
          { event: '100 Fly', time: '1:22.99' },
          { event: '100 IM', time: '1:19.89' },
          { event: '200 IM', time: '2:54.99' },
        ]
      },
      {
        sex: 'girls',
        age: '12',
        events: [
          { event: '50 Fr', time: ':29.59' },
          { event: '100 Fr', time: '1:07.79' },
          { event: '200 Fr', time: '2:33.29' },
          { event: '500 Fr', time: '7:04.29' },
          { event: '50 Bk', time: ':35.79' },
          { event: '100 Bk', time: '1:17.59' },
          { event: '50 Br', time: ':42.69' },
          { event: '100 Br', time: '1:33.99' },
          { event: '50 Fly', time: ':35.49' },
          { event: '100 Fly', time: '1:22.99' },
          { event: '100 IM', time: '1:19.89' },
          { event: '200 IM', time: '2:54.99' },
        ]
      },
      {
        sex: 'girls',
        age: '13',
        events: [
          { event: '50 Fr', time: ':29.19' },
          { event: '100 Fr', time: '1:02.59' },
          { event: '200 Fr', time: '2:16.99' },
          { event: '500 Fr', time: '5:58.59' },
          { event: '1000 Fr', time: '12:32.79' },
          { event: '1650 Fr', time: '21:59.69' },
          { event: '100 Bk', time: '1:11.59' },
          { event: '200 Bk', time: '2:37.39' },
          { event: '100 Br', time: '1:23.49' },
          { event: '200 Br', time: '3:00.29' },
          { event: '100 Fly', time: '1:12.39' },
          { event: '200 Fly', time: '2:39.89' },
          { event: '200 IM', time: '2:40.99' },
          { event: '400 IM', time: '5:43.69' },
        ]
      },
      {
        sex: 'girls',
        age: '14',
        events: [
          { event: '50 Fr', time: ':29.19' },
          { event: '100 Fr', time: '1:02.59' },
          { event: '200 Fr', time: '2:16.99' },
          { event: '500 Fr', time: '5:58.59' },
          { event: '1000 Fr', time: '12:32.79' },
          { event: '1650 Fr', time: '21:59.69' },
          { event: '100 Bk', time: '1:11.59' },
          { event: '200 Bk', time: '2:37.39' },
          { event: '100 Br', time: '1:23.49' },
          { event: '200 Br', time: '3:00.29' },
          { event: '100 Fly', time: '1:12.39' },
          { event: '200 Fly', time: '2:39.89' },
          { event: '200 IM', time: '2:40.99' },
          { event: '400 IM', time: '5:43.69' },
        ]
      },

      // ================= BOYS =================
      {
        sex: 'boys',
        age: '9&U',
        events: [
          { event: '50 Fr', time: ':34.49' },
          { event: '100 Fr', time: '1:19.99' },
          { event: '200 Fr', time: '3:07.09' },
          { event: '50 Bk', time: ':42.09' },
          { event: '100 Bk', time: '1:37.99' },
          { event: '50 Br', time: ':52.19' },
          { event: '100 Br', time: '1:49.49' },
          { event: '50 Fly', time: ':46.19' },
          { event: '100 Fly', time: '1:53.09' },
          { event: '100 IM', time: '1:34.99' },
          { event: '200 IM', time: '3:36.89' },
        ]
      },
      {
        sex: 'boys',
        age: '10',
        events: [
          { event: '50 Fr', time: ':34.49' },
          { event: '100 Fr', time: '1:19.99' },
          { event: '200 Fr', time: '3:07.09' },
          { event: '50 Bk', time: ':42.09' },
          { event: '100 Bk', time: '1:37.99' },
          { event: '50 Br', time: ':52.19' },
          { event: '100 Br', time: '1:49.49' },
          { event: '50 Fly', time: ':46.19' },
          { event: '100 Fly', time: '1:53.09' },
          { event: '100 IM', time: '1:34.99' },
          { event: '200 IM', time: '3:36.89' },
        ]
      },
      {
        sex: 'boys',
        age: '11',
        events: [
          { event: '50 Fr', time: ':29.39' },
          { event: '100 Fr', time: '1:06.69' },
          { event: '200 Fr', time: '2:30.99' },
          { event: '500 Fr', time: '6:57.99' },
          { event: '50 Bk', time: ':35.59' },
          { event: '100 Bk', time: '1:22.69' },
          { event: '50 Br', time: ':43.29' },
          { event: '100 Br', time: '1:32.59' },
          { event: '50 Fly', time: ':35.19' },
          { event: '100 Fly', time: '1:23.49' },
          { event: '100 IM', time: '1:20.39' },
          { event: '200 IM', time: '2:58.99' },
        ]
      },
      {
        sex: 'boys',
        age: '12',
        events: [
          { event: '50 Fr', time: ':29.39' },
          { event: '100 Fr', time: '1:06.69' },
          { event: '200 Fr', time: '2:30.99' },
          { event: '500 Fr', time: '6:57.99' },
          { event: '50 Bk', time: ':35.59' },
          { event: '100 Bk', time: '1:22.69' },
          { event: '50 Br', time: ':43.29' },
          { event: '100 Br', time: '1:32.59' },
          { event: '50 Fly', time: ':35.19' },
          { event: '100 Fly', time: '1:23.49' },
          { event: '100 IM', time: '1:20.39' },
          { event: '200 IM', time: '2:58.99' },
        ]
      },
      {
        sex: 'boys',
        age: '13',
        events: [
          { event: '50 Fr', time: ':25.89' },
          { event: '100 Fr', time: ':56.59' },
          { event: '200 Fr', time: '2:04.49' },
          { event: '500 Fr', time: '5:43.59' },
          { event: '1000 Fr', time: '12:11.99' },
          { event: '1650 Fr', time: '20:59.69' },
          { event: '100 Bk', time: '1:07.89' },
          { event: '200 Bk', time: '2:27.89' },
          { event: '100 Br', time: '1:16.59' },
          { event: '200 Br', time: '2:47.59' },
          { event: '100 Fly', time: '1:07.19' },
          { event: '200 Fly', time: '2:26.59' },
          { event: '200 IM', time: '2:30.59' },
          { event: '400 IM', time: '5:21.39' },
        ]
      },
      {
        sex: 'boys',
        age: '14',
        events: [
          { event: '50 Fr', time: ':25.89' },
          { event: '100 Fr', time: ':56.59' },
          { event: '200 Fr', time: '2:04.49' },
          { event: '500 Fr', time: '5:43.59' },
          { event: '1000 Fr', time: '12:11.99' },
          { event: '1650 Fr', time: '20:59.69' },
          { event: '100 Bk', time: '1:07.89' },
          { event: '200 Bk', time: '2:27.89' },
          { event: '100 Br', time: '1:16.59' },
          { event: '200 Br', time: '2:47.59' },
          { event: '100 Fly', time: '1:07.19' },
          { event: '200 Fly', time: '2:26.59' },
          { event: '200 IM', time: '2:30.59' },
          { event: '400 IM', time: '5:21.39' },
        ]
      }
    ]
  }
];