/**
 * Potomac Valley Swimming (PVS) 2027 14&U Short Course / Long Course Age Group Championship Time Standards
 * March 11th - 14th, 2027 at University of Maryland
 *
 * FORMAT NOTE:
 * - Data is organized by exact age ("10&U", "11", "12", "13", "14") per prompt specification.
 * - Age 11 and Age 12 share the 11-12 qualifying standards (age 11 = age 12).
 * - Age 13 and Age 14 share the 13-14 qualifying standards (age 13 = age 14).
 * - Times are stored as display strings ("MM:SS.ms" or ":SS.ms").
 */

export type PoolCourse = 'lcm' | 'scy';
export type Sex = 'girls' | 'boys';
export type Age = '10&U' | '11' | '12' | '13' | '14';

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
        age: '10&U',
        events: [
          { event: '50 Fr', time: ':37.29' },
          { event: '100 Fr', time: '1:22.79' },
          { event: '200 Fr', time: '2:59.99' },
          { event: '400 Fr', time: '6:37.19' },
          { event: '50 Bk', time: ':43.99' },
          { event: '100 Bk', time: '1:36.29' },
          { event: '50 Br', time: ':49.59' },
          { event: '100 Br', time: '1:48.49' },
          { event: '50 Fly', time: ':42.69' },
          { event: '100 Fly', time: '1:44.19' },
          { event: '200 IM', time: '3:30.19' },
          { event: '200 FR', time: '2:35.89' },
          { event: '200 MR', time: '3:00.79' }
        ]
      },
      {
        sex: 'girls',
        age: '11',
        events: [
          { event: '50 Fr', time: ':32.79' },
          { event: '100 Fr', time: '1:10.99' },
          { event: '200 Fr', time: '2:35.89' },
          { event: '400 Fr', time: '5:28.39' },
          { event: '50 Bk', time: ':38.79' },
          { event: '100 Bk', time: '1:22.49' },
          { event: '200 Bk', time: '2:51.69' },
          { event: '50 Br', time: ':42.99' },
          { event: '100 Br', time: '1:32.59' },
          { event: '200 Br', time: '3:23.59' },
          { event: '50 Fly', time: ':36.89' },
          { event: '100 Fly', time: '1:23.99' },
          { event: '200 Fly', time: '3:10.19' },
          { event: '200 IM', time: '2:59.59' },
          { event: '200 FR', time: '2:15.59' },
          { event: '400 FR', time: '4:49.29' },
          { event: '200 MR', time: '2:23.49' },
          { event: '400 MR', time: '5:38.99' }
        ]
      },
      {
        sex: 'girls',
        age: '12',
        events: [
          { event: '50 Fr', time: ':32.79' },
          { event: '100 Fr', time: '1:10.99' },
          { event: '200 Fr', time: '2:35.89' },
          { event: '400 Fr', time: '5:28.39' },
          { event: '50 Bk', time: ':38.79' },
          { event: '100 Bk', time: '1:22.49' },
          { event: '200 Bk', time: '2:51.69' },
          { event: '50 Br', time: ':42.99' },
          { event: '100 Br', time: '1:32.59' },
          { event: '200 Br', time: '3:23.59' },
          { event: '50 Fly', time: ':36.89' },
          { event: '100 Fly', time: '1:23.99' },
          { event: '200 Fly', time: '3:10.19' },
          { event: '200 IM', time: '2:59.59' },
          { event: '200 FR', time: '2:15.59' },
          { event: '400 FR', time: '4:49.29' },
          { event: '200 MR', time: '2:23.49' },
          { event: '400 MR', time: '5:38.99' }
        ]
      },
      {
        sex: 'girls',
        age: '13',
        events: [
          { event: '50 Fr', time: ':30.59' },
          { event: '100 Fr', time: '1:04.89' },
          { event: '200 Fr', time: '2:20.49' },
          { event: '400 Fr', time: '5:01.69' },
          { event: '800 Fr', time: '10:36.99' },
          { event: '1500 Fr', time: '20:59.99' },
          { event: '50 Bk', time: ':34.99' },
          { event: '100 Bk', time: '1:15.49' },
          { event: '200 Bk', time: '2:43.29' },
          { event: '50 Br', time: ':39.29' },
          { event: '100 Br', time: '1:26.59' },
          { event: '200 Br', time: '3:08.09' },
          { event: '50 Fly', time: ':32.79' },
          { event: '100 Fly', time: '1:13.99' },
          { event: '200 Fly', time: '2:55.29' },
          { event: '200 IM', time: '2:44.99' },
          { event: '400 IM', time: '5:49.59' },
          { event: '200 FR', time: '2:09.89' },
          { event: '400 FR', time: '4:42.49' },
          { event: '800 FR', time: '10:45.19' },
          { event: '200 MR', time: '5:21.99' },
          { event: '400 MR', time: '5:21.99' }
        ]
      },
      {
        sex: 'girls',
        age: '14',
        events: [
          { event: '50 Fr', time: ':30.59' },
          { event: '100 Fr', time: '1:04.89' },
          { event: '200 Fr', time: '2:20.49' },
          { event: '400 Fr', time: '5:01.69' },
          { event: '800 Fr', time: '10:36.99' },
          { event: '1500 Fr', time: '20:59.99' },
          { event: '50 Bk', time: ':34.99' },
          { event: '100 Bk', time: '1:15.49' },
          { event: '200 Bk', time: '2:43.29' },
          { event: '50 Br', time: ':39.29' },
          { event: '100 Br', time: '1:26.59' },
          { event: '200 Br', time: '3:08.09' },
          { event: '50 Fly', time: ':32.79' },
          { event: '100 Fly', time: '1:13.99' },
          { event: '200 Fly', time: '2:55.29' },
          { event: '200 IM', time: '2:44.99' },
          { event: '400 IM', time: '5:49.59' },
          { event: '200 FR', time: '2:09.89' },
          { event: '400 FR', time: '4:42.49' },
          { event: '800 FR', time: '10:45.19' },
          { event: '200 MR', time: '5:21.99' },
          { event: '400 MR', time: '5:21.99' }
        ]
      },

      // ================= BOYS =================
      {
        sex: 'boys',
        age: '10&U',
        events: [
          { event: '50 Fr', time: ':37.19' },
          { event: '100 Fr', time: '1:22.69' },
          { event: '200 Fr', time: '2:59.99' },
          { event: '400 Fr', time: '6:26.39' },
          { event: '50 Bk', time: ':44.29' },
          { event: '100 Bk', time: '1:37.59' },
          { event: '50 Br', time: ':50.39' },
          { event: '100 Br', time: '1:50.09' },
          { event: '50 Fly', time: ':42.79' },
          { event: '100 Fly', time: '1:47.59' },
          { event: '200 IM', time: '3:31.29' },
          { event: '200 FR', time: '2:38.19' },
          { event: '200 MR', time: '3:00.79' }
        ]
      },
      {
        sex: 'boys',
        age: '11',
        events: [
          { event: '50 Fr', time: ':32.59' },
          { event: '100 Fr', time: '1:10.19' },
          { event: '200 Fr', time: '2:39.19' },
          { event: '400 Fr', time: '5:28.69' },
          { event: '50 Bk', time: ':39.19' },
          { event: '100 Bk', time: '1:22.99' },
          { event: '200 Bk', time: '2:53.79' },
          { event: '50 Br', time: ':44.09' },
          { event: '100 Br', time: '1:34.59' },
          { event: '200 Br', time: '3:23.59' },
          { event: '50 Fly', time: ':36.79' },
          { event: '100 Fly', time: '1:25.89' },
          { event: '200 Fly', time: '3:12.09' },
          { event: '200 IM', time: '2:59.59' },
          { event: '200 FR', time: '2:15.59' },
          { event: '400 FR', time: '4:49.29' },
          { event: '200 MR', time: '2:25.49' },
          { event: '400 MR', time: '5:40.09' }
        ]
      },
      {
        sex: 'boys',
        age: '12',
        events: [
          { event: '50 Fr', time: ':32.59' },
          { event: '100 Fr', time: '1:10.19' },
          { event: '200 Fr', time: '2:39.19' },
          { event: '400 Fr', time: '5:28.69' },
          { event: '50 Bk', time: ':39.19' },
          { event: '100 Bk', time: '1:22.99' },
          { event: '200 Bk', time: '2:53.79' },
          { event: '50 Br', time: ':44.09' },
          { event: '100 Br', time: '1:34.59' },
          { event: '200 Br', time: '3:23.59' },
          { event: '50 Fly', time: ':36.79' },
          { event: '100 Fly', time: '1:25.89' },
          { event: '200 Fly', time: '3:12.09' },
          { event: '200 IM', time: '2:59.59' },
          { event: '200 FR', time: '2:15.59' },
          { event: '400 FR', time: '4:49.29' },
          { event: '200 MR', time: '2:25.49' },
          { event: '400 MR', time: '5:40.09' }
        ]
      },
      {
        sex: 'boys',
        age: '13',
        events: [
          { event: '50 Fr', time: ':28.19' },
          { event: '100 Fr', time: '1:02.99' },
          { event: '200 Fr', time: '2:15.49' },
          { event: '400 Fr', time: '4:57.39' },
          { event: '800 Fr', time: '10:20.19' },
          { event: '1500 Fr', time: '19:46.09' },
          { event: '50 Bk', time: ':32.49' },
          { event: '100 Bk', time: '1:14.29' },
          { event: '200 Bk', time: '2:35.99' },
          { event: '50 Br', time: ':36.19' },
          { event: '100 Br', time: '1:23.49' },
          { event: '200 Br', time: '2:59.69' },
          { event: '50 Fly', time: ':30.59' },
          { event: '100 Fly', time: '1:10.99' },
          { event: '200 Fly', time: '2:47.59' },
          { event: '200 IM', time: '2:38.19' },
          { event: '400 IM', time: '5:27.09' },
          { event: '200 FR', time: '2:04.29' },
          { event: '400 FR', time: '4:28.69' },
          { event: '800 FR', time: '10:45.19' },
          { event: '200 MR', time: '5:17.49' },
          { event: '400 MR', time: '5:17.49' }
        ]
      },
      {
        sex: 'boys',
        age: '14',
        events: [
          { event: '50 Fr', time: ':28.19' },
          { event: '100 Fr', time: '1:02.99' },
          { event: '200 Fr', time: '2:15.49' },
          { event: '400 Fr', time: '4:57.39' },
          { event: '800 Fr', time: '10:20.19' },
          { event: '1500 Fr', time: '19:46.09' },
          { event: '50 Bk', time: ':32.49' },
          { event: '100 Bk', time: '1:14.29' },
          { event: '200 Bk', time: '2:35.99' },
          { event: '50 Br', time: ':36.19' },
          { event: '100 Br', time: '1:23.49' },
          { event: '200 Br', time: '2:59.69' },
          { event: '50 Fly', time: ':30.59' },
          { event: '100 Fly', time: '1:10.99' },
          { event: '200 Fly', time: '2:47.59' },
          { event: '200 IM', time: '2:38.19' },
          { event: '400 IM', time: '5:27.09' },
          { event: '200 FR', time: '2:04.29' },
          { event: '400 FR', time: '4:28.69' },
          { event: '800 FR', time: '10:45.19' },
          { event: '200 MR', time: '5:17.49' },
          { event: '400 MR', time: '5:17.49' }
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
        age: '10&U',
        events: [
          { event: '50 Fr', time: ':32.49' },
          { event: '100 Fr', time: '1:12.29' },
          { event: '200 Fr', time: '2:36.99' },
          { event: '500 Fr', time: '6:59.99' },
          { event: '50 Bk', time: ':37.99' },
          { event: '100 Bk', time: '1:22.49' },
          { event: '50 Br', time: ':43.59' },
          { event: '100 Br', time: '1:33.89' },
          { event: '50 Fly', time: ':36.99' },
          { event: '100 Fly', time: '1:29.29' },
          { event: '100 IM', time: '1:22.09' },
          { event: '200 IM', time: '2:57.99' },
          { event: '200 FR', time: '2:14.79' },
          { event: '200 MR', time: '2:35.99' }
        ]
      },
      {
        sex: 'girls',
        age: '11',
        events: [
          { event: '50 Fr', time: ':28.39' },
          { event: '100 Fr', time: '1:01.99' },
          { event: '200 Fr', time: '2:15.99' },
          { event: '500 Fr', time: '5:55.99' },
          { event: '50 Bk', time: ':32.89' },
          { event: '100 Bk', time: '1:10.59' },
          { event: '200 Bk', time: '2:31.39' },
          { event: '50 Br', time: ':37.29' },
          { event: '100 Br', time: '1:20.59' },
          { event: '200 Br', time: '2:53.59' },
          { event: '50 Fly', time: ':31.29' },
          { event: '100 Fly', time: '1:11.19' },
          { event: '200 Fly', time: '2:48.99' },
          { event: '100 IM', time: '1:10.99' },
          { event: '200 IM', time: '2:33.19' },
          { event: '200 FR', time: '1:56.99' },
          { event: '400 FR', time: '4:15.99' },
          { event: '200 MR', time: '2:12.99' },
          { event: '400 MR', time: '4:40.99' }
        ]
      },
      {
        sex: 'girls',
        age: '12',
        events: [
          { event: '50 Fr', time: ':28.39' },
          { event: '100 Fr', time: '1:01.99' },
          { event: '200 Fr', time: '2:15.99' },
          { event: '500 Fr', time: '5:55.99' },
          { event: '50 Bk', time: ':32.89' },
          { event: '100 Bk', time: '1:10.59' },
          { event: '200 Bk', time: '2:31.39' },
          { event: '50 Br', time: ':37.29' },
          { event: '100 Br', time: '1:20.59' },
          { event: '200 Br', time: '2:53.59' },
          { event: '50 Fly', time: ':31.29' },
          { event: '100 Fly', time: '1:11.19' },
          { event: '200 Fly', time: '2:48.99' },
          { event: '100 IM', time: '1:10.99' },
          { event: '200 IM', time: '2:33.19' },
          { event: '200 FR', time: '1:56.99' },
          { event: '400 FR', time: '4:15.99' },
          { event: '200 MR', time: '2:12.99' },
          { event: '400 MR', time: '4:40.99' }
        ]
      },
      {
        sex: 'girls',
        age: '13',
        events: [
          { event: '50 Fr', time: ':26.39' },
          { event: '100 Fr', time: ':57.29' },
          { event: '200 Fr', time: '2:03.59' },
          { event: '500 Fr', time: '5:28.79' },
          { event: '1000 Fr', time: '11:39.99' },
          { event: '1650 Fr', time: '19:49.99' },
          { event: '50 Bk', time: ':30.99' },
          { event: '100 Bk', time: '1:04.69' },
          { event: '200 Bk', time: '2:17.79' },
          { event: '50 Br', time: ':34.59' },
          { event: '100 Br', time: '1:14.29' },
          { event: '200 Br', time: '2:39.99' },
          { event: '50 Fly', time: ':29.39' },
          { event: '100 Fly', time: '1:03.39' },
          { event: '200 Fly', time: '2:26.79' },
          { event: '200 IM', time: '2:19.49' },
          { event: '400 IM', time: '4:58.69' },
          { event: '200 FR', time: '1:50.99' },
          { event: '400 FR', time: '4:05.99' },
          { event: '800 FR', time: '8:59.99' },
          { event: '200 MR', time: '4:30.99' },
          { event: '400 MR', time: '4:30.99' }
        ]
      },
      {
        sex: 'girls',
        age: '14',
        events: [
          { event: '50 Fr', time: ':26.39' },
          { event: '100 Fr', time: ':57.29' },
          { event: '200 Fr', time: '2:03.59' },
          { event: '500 Fr', time: '5:28.79' },
          { event: '1000 Fr', time: '11:39.99' },
          { event: '1650 Fr', time: '19:49.99' },
          { event: '50 Bk', time: ':30.99' },
          { event: '100 Bk', time: '1:04.69' },
          { event: '200 Bk', time: '2:17.79' },
          { event: '50 Br', time: ':34.59' },
          { event: '100 Br', time: '1:14.29' },
          { event: '200 Br', time: '2:39.99' },
          { event: '50 Fly', time: ':29.39' },
          { event: '100 Fly', time: '1:03.39' },
          { event: '200 Fly', time: '2:26.79' },
          { event: '200 IM', time: '2:19.49' },
          { event: '400 IM', time: '4:58.69' },
          { event: '200 FR', time: '1:50.99' },
          { event: '400 FR', time: '4:05.99' },
          { event: '800 FR', time: '8:59.99' },
          { event: '200 MR', time: '4:30.99' },
          { event: '400 MR', time: '4:30.99' }
        ]
      },

      // ================= BOYS =================
      {
        sex: 'boys',
        age: '10&U',
        events: [
          { event: '50 Fr', time: ':32.49' },
          { event: '100 Fr', time: '1:11.99' },
          { event: '200 Fr', time: '2:35.59' },
          { event: '500 Fr', time: '6:59.99' },
          { event: '50 Bk', time: ':37.99' },
          { event: '100 Bk', time: '1:22.49' },
          { event: '50 Br', time: ':43.59' },
          { event: '100 Br', time: '1:33.89' },
          { event: '50 Fly', time: ':36.99' },
          { event: '100 Fly', time: '1:29.99' },
          { event: '100 IM', time: '1:21.79' },
          { event: '200 IM', time: '2:57.99' },
          { event: '200 FR', time: '2:14.39' },
          { event: '200 MR', time: '2:35.99' }
        ]
      },
      {
        sex: 'boys',
        age: '11',
        events: [
          { event: '50 Fr', time: ':28.09' },
          { event: '100 Fr', time: '1:01.59' },
          { event: '200 Fr', time: '2:13.49' },
          { event: '500 Fr', time: '5:54.99' },
          { event: '50 Bk', time: ':33.09' },
          { event: '100 Bk', time: '1:10.69' },
          { event: '200 Bk', time: '2:32.69' },
          { event: '50 Br', time: ':37.59' },
          { event: '100 Br', time: '1:20.79' },
          { event: '200 Br', time: '2:52.69' },
          { event: '50 Fly', time: ':31.79' },
          { event: '100 Fly', time: '1:10.99' },
          { event: '200 Fly', time: '2:43.99' },
          { event: '100 IM', time: '1:10.69' },
          { event: '200 IM', time: '2:32.19' },
          { event: '200 FR', time: '1:55.99' },
          { event: '400 FR', time: '4:15.99' },
          { event: '200 MR', time: '2:12.99' },
          { event: '400 MR', time: '4:50.99' }
        ]
      },
      {
        sex: 'boys',
        age: '12',
        events: [
          { event: '50 Fr', time: ':28.09' },
          { event: '100 Fr', time: '1:01.59' },
          { event: '200 Fr', time: '2:13.49' },
          { event: '500 Fr', time: '5:54.99' },
          { event: '50 Bk', time: ':33.09' },
          { event: '100 Bk', time: '1:10.69' },
          { event: '200 Bk', time: '2:32.69' },
          { event: '50 Br', time: ':37.59' },
          { event: '100 Br', time: '1:20.79' },
          { event: '200 Br', time: '2:52.69' },
          { event: '50 Fly', time: ':31.79' },
          { event: '100 Fly', time: '1:10.99' },
          { event: '200 Fly', time: '2:43.99' },
          { event: '100 IM', time: '1:10.69' },
          { event: '200 IM', time: '2:32.19' },
          { event: '200 FR', time: '1:55.99' },
          { event: '400 FR', time: '4:15.99' },
          { event: '200 MR', time: '2:12.99' },
          { event: '400 MR', time: '4:50.99' }
        ]
      },
      {
        sex: 'boys',
        age: '13',
        events: [
          { event: '50 Fr', time: ':24.89' },
          { event: '100 Fr', time: ':53.49' },
          { event: '200 Fr', time: '1:56.99' },
          { event: '500 Fr', time: '5:13.69' },
          { event: '1000 Fr', time: '11:09.99' },
          { event: '1650 Fr', time: '18:49.99' },
          { event: '50 Bk', time: ':28.59' },
          { event: '100 Bk', time: '1:01.59' },
          { event: '200 Bk', time: '2:11.69' },
          { event: '50 Br', time: ':31.99' },
          { event: '100 Br', time: '1:08.79' },
          { event: '200 Br', time: '2:29.19' },
          { event: '50 Fly', time: ':27.59' },
          { event: '100 Fly', time: '1:00.19' },
          { event: '200 Fly', time: '2:14.89' },
          { event: '200 IM', time: '2:11.99' },
          { event: '400 IM', time: '4:40.59' },
          { event: '200 FR', time: '1:44.99' },
          { event: '400 FR', time: '3:49.79' },
          { event: '800 FR', time: '8:59.99' },
          { event: '200 MR', time: '4:12.99' },
          { event: '400 MR', time: '4:12.99' }
        ]
      },
      {
        sex: 'boys',
        age: '14',
        events: [
          { event: '50 Fr', time: ':24.89' },
          { event: '100 Fr', time: ':53.49' },
          { event: '200 Fr', time: '1:56.99' },
          { event: '500 Fr', time: '5:13.69' },
          { event: '1000 Fr', time: '11:09.99' },
          { event: '1650 Fr', time: '18:49.99' },
          { event: '50 Bk', time: ':28.59' },
          { event: '100 Bk', time: '1:01.59' },
          { event: '200 Bk', time: '2:11.69' },
          { event: '50 Br', time: ':31.99' },
          { event: '100 Br', time: '1:08.79' },
          { event: '200 Br', time: '2:29.19' },
          { event: '50 Fly', time: ':27.59' },
          { event: '100 Fly', time: '1:00.19' },
          { event: '200 Fly', time: '2:14.89' },
          { event: '200 IM', time: '2:11.99' },
          { event: '400 IM', time: '4:40.59' },
          { event: '200 FR', time: '1:44.99' },
          { event: '400 FR', time: '3:49.79' },
          { event: '800 FR', time: '8:59.99' },
          { event: '200 MR', time: '4:12.99' },
          { event: '400 MR', time: '4:12.99' }
        ]
      }
    ]
  }
];
