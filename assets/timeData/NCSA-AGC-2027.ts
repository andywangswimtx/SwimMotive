/**
 * 2027 NCSA Age Group Swimming Championships time standards
 *
 * Source: NCSA Age Group Swimming Championships TIME STANDARDS,
 * LMO 09/20/2026, pages 9-10.
 *
 * FORMAT:
 * - Exact age groups: "11&U", "12", "13", "14".
 * - Course: 'scy' or 'lcm'.
 * - Sex: 'girls' or 'boys'.
 * - Individual events only: Fr, Bk, Br, Fly, IM.
 * - Times are stored as display strings ("M:SS.ms" or ":SS.ms").
 *
 * SOURCE MAPPING:
 * - PDF "400/500 Free": 500 Fr for SCY; 400 Fr for LCM.
 * - PDF "800/1000 Free": 1000 Fr for SCY; 800 Fr for LCM.
 * - PDF "1500/1650 Free": 1650 Fr for SCY; 1500 Fr for LCM.
 * - At ages 13-14, the PDF gives "Must have 100 ..." for 50 Back,
 *   50 Breast, and 50 Fly instead of a time. Those rows are omitted.
 * - Relay events are omitted because this file stores individual-event times.
 */

export type PoolCourse = 'lcm' | 'scy';
export type Sex = 'girls' | 'boys';
export type Age = '11&U' | '12' | '13' | '14';

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

export const AGE_GROUP_CHAMPS_STANDARDS: CourseTimeStandards[] = [

  {
    course: 'lcm',
    standards: [
      // ================= GIRLS =================
      {
        sex: 'girls',
        age: '11&U',
        events: [
          { event: '50 Fr', time: ':31.99' },
          { event: '100 Fr', time: '1:09.89' },
          { event: '200 Fr', time: '2:30.99' },
          { event: '400 Fr', time: '5:15.39' },
          { event: '50 Bk', time: ':36.89' },
          { event: '100 Bk', time: '1:19.39' },
          { event: '200 Bk', time: '2:50.59' },
          { event: '50 Br', time: ':40.39' },
          { event: '100 Br', time: '1:29.69' },
          { event: '200 Br', time: '3:12.69' },
          { event: '50 Fly', time: ':34.29' },
          { event: '100 Fly', time: '1:17.99' },
          { event: '200 Fly', time: '2:51.79' },
          { event: '200 IM', time: '2:51.19' },
          { event: '400 IM', time: '6:04.59' },
        ]
      },
      {
        sex: 'girls',
        age: '12',
        events: [
          { event: '50 Fr', time: ':30.69' },
          { event: '100 Fr', time: '1:06.79' },
          { event: '200 Fr', time: '2:24.39' },
          { event: '400 Fr', time: '5:01.69' },
          { event: '50 Bk', time: ':35.29' },
          { event: '100 Bk', time: '1:15.49' },
          { event: '200 Bk', time: '2:43.19' },
          { event: '50 Br', time: ':38.59' },
          { event: '100 Br', time: '1:25.59' },
          { event: '200 Br', time: '3:04.29' },
          { event: '50 Fly', time: ':32.79' },
          { event: '100 Fly', time: '1:14.09' },
          { event: '200 Fly', time: '2:44.29' },
          { event: '200 IM', time: '2:43.79' },
          { event: '400 IM', time: '5:48.69' },
        ]
      },
      {
        sex: 'girls',
        age: '13',
        events: [
          { event: '50 Fr', time: ':30.39' },
          { event: '100 Fr', time: '1:05.49' },
          { event: '200 Fr', time: '2:22.79' },
          { event: '400 Fr', time: '5:01.79' },
          { event: '800 Fr', time: '10:20.99' },
          { event: '1500 Fr', time: '19:48.09' },
          { event: '100 Bk', time: '1:13.99' },
          { event: '200 Bk', time: '2:39.69' },
          { event: '100 Br', time: '1:24.49' },
          { event: '200 Br', time: '3:02.89' },
          { event: '100 Fly', time: '1:12.39' },
          { event: '200 Fly', time: '2:38.79' },
          { event: '200 IM', time: '2:42.99' },
          { event: '400 IM', time: '5:45.39' },
        ]
      },
      {
        sex: 'girls',
        age: '14',
        events: [
          { event: '50 Fr', time: ':29.29' },
          { event: '100 Fr', time: '1:03.19' },
          { event: '200 Fr', time: '2:16.49' },
          { event: '400 Fr', time: '4:48.69' },
          { event: '800 Fr', time: '9:53.99' },
          { event: '1500 Fr', time: '18:56.49' },
          { event: '100 Bk', time: '1:10.79' },
          { event: '200 Bk', time: '2:31.79' },
          { event: '100 Br', time: '1:20.79' },
          { event: '200 Br', time: '2:54.89' },
          { event: '100 Fly', time: '1:09.19' },
          { event: '200 Fly', time: '2:31.89' },
          { event: '200 IM', time: '2:35.99' },
          { event: '400 IM', time: '5:30.39' },
        ]
      },
      // ================= BOYS =================
      {
        sex: 'boys',
        age: '11&U',
        events: [
          { event: '50 Fr', time: ':31.09' },
          { event: '100 Fr', time: '1:07.49' },
          { event: '200 Fr', time: '2:26.99' },
          { event: '400 Fr', time: '5:08.49' },
          { event: '50 Bk', time: ':36.29' },
          { event: '100 Bk', time: '1:18.49' },
          { event: '200 Bk', time: '2:46.59' },
          { event: '50 Br', time: ':40.09' },
          { event: '100 Br', time: '1:27.59' },
          { event: '200 Br', time: '3:08.89' },
          { event: '50 Fly', time: ':34.09' },
          { event: '100 Fly', time: '1:16.39' },
          { event: '200 Fly', time: '2:46.39' },
          { event: '200 IM', time: '2:48.09' },
          { event: '400 IM', time: '5:56.09' },
        ]
      },
      {
        sex: 'boys',
        age: '12',
        events: [
          { event: '50 Fr', time: ':29.79' },
          { event: '100 Fr', time: '1:04.59' },
          { event: '200 Fr', time: '2:20.59' },
          { event: '400 Fr', time: '4:55.09' },
          { event: '50 Bk', time: ':34.59' },
          { event: '100 Bk', time: '1:14.69' },
          { event: '200 Bk', time: '2:39.29' },
          { event: '50 Br', time: ':38.09' },
          { event: '100 Br', time: '1:23.49' },
          { event: '200 Br', time: '3:00.69' },
          { event: '50 Fly', time: ':32.39' },
          { event: '100 Fly', time: '1:12.49' },
          { event: '200 Fly', time: '2:39.09' },
          { event: '200 IM', time: '2:40.29' },
          { event: '400 IM', time: '5:40.59' },
        ]
      },
      {
        sex: 'boys',
        age: '13',
        events: [
          { event: '50 Fr', time: ':27.99' },
          { event: '100 Fr', time: '1:02.29' },
          { event: '200 Fr', time: '2:15.59' },
          { event: '400 Fr', time: '4:50.09' },
          { event: '800 Fr', time: '10:03.19' },
          { event: '1500 Fr', time: '19:05.89' },
          { event: '100 Bk', time: '1:09.89' },
          { event: '200 Bk', time: '2:30.29' },
          { event: '100 Br', time: '1:17.89' },
          { event: '200 Br', time: '2:52.09' },
          { event: '100 Fly', time: '1:07.49' },
          { event: '200 Fly', time: '2:29.99' },
          { event: '200 IM', time: '2:33.69' },
          { event: '400 IM', time: '5:26.19' },
        ]
      },
      {
        sex: 'boys',
        age: '14',
        events: [
          { event: '50 Fr', time: ':26.89' },
          { event: '100 Fr', time: ':59.29' },
          { event: '200 Fr', time: '2:09.69' },
          { event: '400 Fr', time: '4:37.49' },
          { event: '800 Fr', time: '9:36.89' },
          { event: '1500 Fr', time: '18:16.09' },
          { event: '100 Bk', time: '1:06.79' },
          { event: '200 Bk', time: '2:23.79' },
          { event: '100 Br', time: '1:14.59' },
          { event: '200 Br', time: '2:44.59' },
          { event: '100 Fly', time: '1:04.59' },
          { event: '200 Fly', time: '2:23.49' },
          { event: '200 IM', time: '2:26.99' },
          { event: '400 IM', time: '5:11.99' },
        ]
      },
    ]
  },
  {
    course: 'scy',
    standards: [
      // ================= GIRLS =================
      {
        sex: 'girls',
        age: '11&U',
        events: [
          { event: '50 Fr', time: ':28.19' },
          { event: '100 Fr', time: '1:00.49' },
          { event: '200 Fr', time: '2:12.39' },
          { event: '500 Fr', time: '5:52.59' },
          { event: '50 Bk', time: ':31.89' },
          { event: '100 Bk', time: '1:09.29' },
          { event: '200 Bk', time: '2:27.39' },
          { event: '50 Br', time: ':35.89' },
          { event: '100 Br', time: '1:18.09' },
          { event: '200 Br', time: '2:49.09' },
          { event: '50 Fly', time: ':30.59' },
          { event: '100 Fly', time: '1:08.99' },
          { event: '200 Fly', time: '2:29.79' },
          { event: '100 IM', time: '1:10.09' },
          { event: '200 IM', time: '2:29.89' },
          { event: '400 IM', time: '5:19.19' },
        ]
      },
      {
        sex: 'girls',
        age: '12',
        events: [
          { event: '50 Fr', time: ':26.99' },
          { event: '100 Fr', time: ':57.79' },
          { event: '200 Fr', time: '2:06.69' },
          { event: '500 Fr', time: '5:37.29' },
          { event: '50 Bk', time: ':30.49' },
          { event: '100 Bk', time: '1:05.89' },
          { event: '200 Bk', time: '2:20.99' },
          { event: '50 Br', time: ':34.29' },
          { event: '100 Br', time: '1:14.59' },
          { event: '200 Br', time: '2:41.69' },
          { event: '50 Fly', time: ':29.29' },
          { event: '100 Fly', time: '1:05.59' },
          { event: '200 Fly', time: '2:23.29' },
          { event: '100 IM', time: '1:06.99' },
          { event: '200 IM', time: '2:23.39' },
          { event: '400 IM', time: '5:05.29' },
        ]
      },
      {
        sex: 'girls',
        age: '13',
        events: [
          { event: '50 Fr', time: ':26.39' },
          { event: '100 Fr', time: ':57.39' },
          { event: '200 Fr', time: '2:05.39' },
          { event: '500 Fr', time: '5:38.29' },
          { event: '1000 Fr', time: '11:37.29' },
          { event: '1650 Fr', time: '19:21.69' },
          { event: '100 Bk', time: '1:04.29' },
          { event: '200 Bk', time: '2:18.29' },
          { event: '100 Br', time: '1:13.49' },
          { event: '200 Br', time: '2:39.39' },
          { event: '100 Fly', time: '1:03.89' },
          { event: '200 Fly', time: '2:21.69' },
          { event: '200 IM', time: '2:21.39' },
          { event: '400 IM', time: '5:02.69' },
        ]
      },
      {
        sex: 'girls',
        age: '14',
        events: [
          { event: '50 Fr', time: ':25.39' },
          { event: '100 Fr', time: ':54.99' },
          { event: '200 Fr', time: '1:59.79' },
          { event: '500 Fr', time: '5:23.49' },
          { event: '1000 Fr', time: '11:06.99' },
          { event: '1650 Fr', time: '18:31.19' },
          { event: '100 Bk', time: '1:01.49' },
          { event: '200 Bk', time: '2:12.29' },
          { event: '100 Br', time: '1:10.29' },
          { event: '200 Br', time: '2:32.39' },
          { event: '100 Fly', time: '1:01.09' },
          { event: '200 Fly', time: '2:15.49' },
          { event: '200 IM', time: '2:15.29' },
          { event: '400 IM', time: '4:49.59' },
        ]
      },
      // ================= BOYS =================
      {
        sex: 'boys',
        age: '11&U',
        events: [
          { event: '50 Fr', time: ':27.19' },
          { event: '100 Fr', time: ':59.29' },
          { event: '200 Fr', time: '2:09.19' },
          { event: '500 Fr', time: '5:47.49' },
          { event: '50 Bk', time: ':31.59' },
          { event: '100 Bk', time: '1:07.49' },
          { event: '200 Bk', time: '2:23.99' },
          { event: '50 Br', time: ':35.19' },
          { event: '100 Br', time: '1:15.79' },
          { event: '200 Br', time: '2:42.39' },
          { event: '50 Fly', time: ':30.19' },
          { event: '100 Fly', time: '1:07.09' },
          { event: '200 Fly', time: '2:26.29' },
          { event: '100 IM', time: '1:08.09' },
          { event: '200 IM', time: '2:26.99' },
          { event: '400 IM', time: '5:12.19' },
        ]
      },
      {
        sex: 'boys',
        age: '12',
        events: [
          { event: '50 Fr', time: ':25.99' },
          { event: '100 Fr', time: ':56.69' },
          { event: '200 Fr', time: '2:03.49' },
          { event: '500 Fr', time: '5:32.39' },
          { event: '50 Bk', time: ':30.09' },
          { event: '100 Bk', time: '1:04.19' },
          { event: '200 Bk', time: '2:17.79' },
          { event: '50 Br', time: ':33.39' },
          { event: '100 Br', time: '1:12.19' },
          { event: '200 Br', time: '2:35.29' },
          { event: '50 Fly', time: ':28.69' },
          { event: '100 Fly', time: '1:03.69' },
          { event: '200 Fly', time: '2:19.89' },
          { event: '100 IM', time: '1:05.09' },
          { event: '200 IM', time: '2:20.19' },
          { event: '400 IM', time: '4:58.69' },
        ]
      },
      {
        sex: 'boys',
        age: '13',
        events: [
          { event: '50 Fr', time: ':24.59' },
          { event: '100 Fr', time: ':54.19' },
          { event: '200 Fr', time: '1:58.09' },
          { event: '500 Fr', time: '5:19.99' },
          { event: '1000 Fr', time: '11:01.39' },
          { event: '1650 Fr', time: '18:27.59' },
          { event: '100 Bk', time: '1:00.39' },
          { event: '200 Bk', time: '2:10.09' },
          { event: '100 Br', time: '1:07.89' },
          { event: '200 Br', time: '2:28.29' },
          { event: '100 Fly', time: ':59.29' },
          { event: '200 Fly', time: '2:11.69' },
          { event: '200 IM', time: '2:12.99' },
          { event: '400 IM', time: '4:43.39' },
        ]
      },
      {
        sex: 'boys',
        age: '14',
        events: [
          { event: '50 Fr', time: ':23.59' },
          { event: '100 Fr', time: ':51.49' },
          { event: '200 Fr', time: '1:52.99' },
          { event: '500 Fr', time: '5:05.99' },
          { event: '1000 Fr', time: '10:32.69' },
          { event: '1650 Fr', time: '17:39.39' },
          { event: '100 Bk', time: ':57.79' },
          { event: '200 Bk', time: '2:04.49' },
          { event: '100 Br', time: '1:04.89' },
          { event: '200 Br', time: '2:21.79' },
          { event: '100 Fly', time: ':56.79' },
          { event: '200 Fly', time: '2:05.99' },
          { event: '200 IM', time: '2:07.19' },
          { event: '400 IM', time: '4:31.09' },
        ]
      },
    ]
  },
];
