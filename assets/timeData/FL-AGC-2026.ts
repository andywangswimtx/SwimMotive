/**
 * Florida Swimming LSC 2026 Age Group Championship Time Standards
 *
 * Age Groups: 10&U, 11-12 (split to 11 and 12), 13-14 (split to 13 and 14)
 * Courses: SCY, LCM, SCM
 */

export type PoolCourse = 'lcm' | 'scm' | 'scy';
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

export const FL_AGE_GROUP_CHAMPS_2026_STANDARDS: CourseTimeStandards[] = [
  {
    course: 'scy',
    standards: [
      // ================= GIRLS =================
      {
        sex: 'girls',
        age: '10&U',
        events: [
          { event: '50 Fr', time: '32.99' },
          { event: '100 Fr', time: '1:12.39' },
          { event: '200 Fr', time: '2:35.99' },
          { event: '500 Fr', time: '6:41.79' },
          { event: '50 Bk', time: '38.39' },
          { event: '100 Bk', time: '1:24.09' },
          { event: '50 Br', time: '43.79' },
          { event: '100 Br', time: '1:37.99' },
          { event: '50 Fly', time: '37.99' },
          { event: '100 Fly', time: '1:27.19' },
          { event: '100 IM', time: '1:24.99' },
          { event: '200 IM', time: '2:58.99' }
        ]
      },
      {
        sex: 'girls',
        age: '11',
        events: [
          { event: '50 Fr', time: '28.19' },
          { event: '100 Fr', time: '1:00.99' },
          { event: '200 Fr', time: '2:12.99' },
          { event: '500 Fr', time: '5:50.19' },
          { event: '1000 Fr', time: '12:06.99' },
          { event: '50 Bk', time: '32.99' },
          { event: '100 Bk', time: '1:10.79' },
          { event: '50 Br', time: '37.19' },
          { event: '100 Br', time: '1:20.79' },
          { event: '50 Fly', time: '31.09' },
          { event: '100 Fly', time: '1:10.99' },
          { event: '100 IM', time: '1:10.99' },
          { event: '200 IM', time: '2:32.99' },
          { event: '200 FR', time: '1:53.39' },
          { event: '400 FR', time: '4:09.39' },
          { event: '200 MR', time: '2:12.39' },
          { event: '400 MR', time: '4:56.39' }
        ]
      },
      {
        sex: 'girls',
        age: '12',
        events: [
          { event: '50 Fr', time: '28.19' },
          { event: '100 Fr', time: '1:00.99' },
          { event: '200 Fr', time: '2:12.99' },
          { event: '500 Fr', time: '5:50.19' },
          { event: '1000 Fr', time: '12:06.99' },
          { event: '50 Bk', time: '32.99' },
          { event: '100 Bk', time: '1:10.79' },
          { event: '50 Br', time: '37.19' },
          { event: '100 Br', time: '1:20.79' },
          { event: '50 Fly', time: '31.09' },
          { event: '100 Fly', time: '1:10.99' },
          { event: '100 IM', time: '1:10.99' },
          { event: '200 IM', time: '2:32.99' },
          { event: '200 FR', time: '1:53.39' },
          { event: '400 FR', time: '4:09.39' },
          { event: '200 MR', time: '2:12.39' },
          { event: '400 MR', time: '4:56.39' }
        ]
      },
      {
        sex: 'girls',
        age: '13',
        events: [
          { event: '50 Fr', time: '25.49' },
          { event: '100 Fr', time: '56.79' },
          { event: '200 Fr', time: '2:02.39' },
          { event: '500 Fr', time: '5:28.29' },
          { event: '1000 Fr', time: '11:20.99' },
          { event: '1650 Fr', time: '18:59.99' },
          { event: '50 Bk', time: '29.99' },
          { event: '100 Bk', time: '1:04.39' },
          { event: '200 Bk', time: '2:18.79' },
          { event: '50 Br', time: '33.39' },
          { event: '100 Br', time: '1:14.19' },
          { event: '200 Br', time: '2:40.99' },
          { event: '50 Fly', time: '28.09' },
          { event: '100 Fly', time: '1:03.29' },
          { event: '200 Fly', time: '2:23.39' },
          { event: '200 IM', time: '2:20.19' },
          { event: '400 IM', time: '4:58.69' },
          { event: '200 FR', time: '1:45.39' },
          { event: '400 FR', time: '3:47.39' },
          { event: '800 FR', time: '8:26.39' },
          { event: '200 MR', time: '2:00.39' },
          { event: '400 MR', time: '4:27.39' }
        ]
      },
      {
        sex: 'girls',
        age: '14',
        events: [
          { event: '50 Fr', time: '25.49' },
          { event: '100 Fr', time: '56.79' },
          { event: '200 Fr', time: '2:02.39' },
          { event: '500 Fr', time: '5:28.29' },
          { event: '1000 Fr', time: '11:20.99' },
          { event: '1650 Fr', time: '18:59.99' },
          { event: '50 Bk', time: '29.99' },
          { event: '100 Bk', time: '1:04.39' },
          { event: '200 Bk', time: '2:18.79' },
          { event: '50 Br', time: '33.39' },
          { event: '100 Br', time: '1:14.19' },
          { event: '200 Br', time: '2:40.99' },
          { event: '50 Fly', time: '28.09' },
          { event: '100 Fly', time: '1:03.29' },
          { event: '200 Fly', time: '2:23.39' },
          { event: '200 IM', time: '2:20.19' },
          { event: '400 IM', time: '4:58.69' },
          { event: '200 FR', time: '1:45.39' },
          { event: '400 FR', time: '3:47.39' },
          { event: '800 FR', time: '8:26.39' },
          { event: '200 MR', time: '2:00.39' },
          { event: '400 MR', time: '4:27.39' }
        ]
      },

      // ================= BOYS =================
      {
        sex: 'boys',
        age: '10&U',
        events: [
          { event: '50 Fr', time: '32.99' },
          { event: '100 Fr', time: '1:12.39' },
          { event: '200 Fr', time: '2:35.99' },
          { event: '500 Fr', time: '6:41.79' },
          { event: '50 Bk', time: '38.39' },
          { event: '100 Bk', time: '1:24.09' },
          { event: '50 Br', time: '43.79' },
          { event: '100 Br', time: '1:37.99' },
          { event: '50 Fly', time: '37.99' },
          { event: '100 Fly', time: '1:27.19' },
          { event: '100 IM', time: '1:24.99' },
          { event: '200 IM', time: '2:58.99' }
        ]
      },
      {
        sex: 'boys',
        age: '11',
        events: [
          { event: '50 Fr', time: '28.29' },
          { event: '100 Fr', time: '1:00.99' },
          { event: '200 Fr', time: '2:14.69' },
          { event: '500 Fr', time: '5:57.09' },
          { event: '1000 Fr', time: '12:19.99' },
          { event: '50 Bk', time: '33.49' },
          { event: '100 Bk', time: '1:11.89' },
          { event: '50 Br', time: '38.09' },
          { event: '100 Br', time: '1:22.09' },
          { event: '50 Fly', time: '31.99' },
          { event: '100 Fly', time: '1:11.69' },
          { event: '100 IM', time: '1:11.49' },
          { event: '200 IM', time: '2:34.69' },
          { event: '200 FR', time: '1:53.39' },
          { event: '400 FR', time: '4:09.39' },
          { event: '200 MR', time: '2:12.39' },
          { event: '400 MR', time: '4:56.39' }
        ]
      },
      {
        sex: 'boys',
        age: '12',
        events: [
          { event: '50 Fr', time: '28.29' },
          { event: '100 Fr', time: '1:00.99' },
          { event: '200 Fr', time: '2:14.69' },
          { event: '500 Fr', time: '5:57.09' },
          { event: '1000 Fr', time: '12:19.99' },
          { event: '50 Bk', time: '33.49' },
          { event: '100 Bk', time: '1:11.89' },
          { event: '50 Br', time: '38.09' },
          { event: '100 Br', time: '1:22.09' },
          { event: '50 Fly', time: '31.99' },
          { event: '100 Fly', time: '1:11.69' },
          { event: '100 IM', time: '1:11.49' },
          { event: '200 IM', time: '2:34.69' },
          { event: '200 FR', time: '1:53.39' },
          { event: '400 FR', time: '4:09.39' },
          { event: '200 MR', time: '2:12.39' },
          { event: '400 MR', time: '4:56.39' }
        ]
      },
      {
        sex: 'boys',
        age: '13',
        events: [
          { event: '50 Fr', time: '24.39' },
          { event: '100 Fr', time: '54.09' },
          { event: '200 Fr', time: '1:57.59' },
          { event: '500 Fr', time: '5:14.29' },
          { event: '1000 Fr', time: '10:59.99' },
          { event: '1650 Fr', time: '18:29.99' },
          { event: '50 Bk', time: '28.59' },
          { event: '100 Bk', time: '1:01.99' },
          { event: '200 Bk', time: '2:16.99' },
          { event: '50 Br', time: '31.19' },
          { event: '100 Br', time: '1:12.09' },
          { event: '200 Br', time: '2:35.29' },
          { event: '50 Fly', time: '26.09' },
          { event: '100 Fly', time: '1:00.99' },
          { event: '200 Fly', time: '2:20.29' },
          { event: '200 IM', time: '2:15.99' },
          { event: '400 IM', time: '4:51.99' },
          { event: '200 FR', time: '1:40.39' },
          { event: '400 FR', time: '3:39.39' },
          { event: '800 FR', time: '8:06.39' },
          { event: '200 MR', time: '1:51.39' },
          { event: '400 MR', time: '4:18.39' }
        ]
      },
      {
        sex: 'boys',
        age: '14',
        events: [
          { event: '50 Fr', time: '24.39' },
          { event: '100 Fr', time: '54.09' },
          { event: '200 Fr', time: '1:57.59' },
          { event: '500 Fr', time: '5:14.29' },
          { event: '1000 Fr', time: '10:59.99' },
          { event: '1650 Fr', time: '18:29.99' },
          { event: '50 Bk', time: '28.59' },
          { event: '100 Bk', time: '1:01.99' },
          { event: '200 Bk', time: '2:16.99' },
          { event: '50 Br', time: '31.19' },
          { event: '100 Br', time: '1:12.09' },
          { event: '200 Br', time: '2:35.29' },
          { event: '50 Fly', time: '26.09' },
          { event: '100 Fly', time: '1:00.99' },
          { event: '200 Fly', time: '2:20.29' },
          { event: '200 IM', time: '2:15.99' },
          { event: '400 IM', time: '4:51.99' },
          { event: '200 FR', time: '1:40.39' },
          { event: '400 FR', time: '3:39.39' },
          { event: '800 FR', time: '8:06.39' },
          { event: '200 MR', time: '1:51.39' },
          { event: '400 MR', time: '4:18.39' }
        ]
      }
    ]
  },
  {
    course: 'lcm',
    standards: [
      // ================= GIRLS =================
      {
        sex: 'girls',
        age: '10&U',
        events: [
          { event: '50 Fr', time: '36.19' },
          { event: '100 Fr', time: '1:20.69' },
          { event: '200 Fr', time: '2:54.19' },
          { event: '400 Fr', time: '6:02.69' },
          { event: '50 Bk', time: '43.79' },
          { event: '100 Bk', time: '1:35.99' },
          { event: '50 Br', time: '49.89' },
          { event: '100 Br', time: '1:49.59' },
          { event: '50 Fly', time: '41.79' },
          { event: '100 Fly', time: '1:38.79' },
          { event: '200 IM', time: '3:21.69' }
        ]
      },
      {
        sex: 'girls',
        age: '11',
        events: [
          { event: '50 Fr', time: '31.59' },
          { event: '100 Fr', time: '1:08.89' },
          { event: '200 Fr', time: '2:28.39' },
          { event: '400 Fr', time: '5:09.99' },
          { event: '800 Fr', time: '10:59.99' },
          { event: '50 Bk', time: '37.29' },
          { event: '100 Bk', time: '1:21.09' },
          { event: '50 Br', time: '42.09' },
          { event: '100 Br', time: '1:32.19' },
          { event: '50 Fly', time: '34.29' },
          { event: '100 Fly', time: '1:18.99' },
          { event: '200 IM', time: '2:52.69' },
          { event: '200 FR', time: '2:08.99' },
          { event: '400 FR', time: '4:40.99' },
          { event: '200 MR', time: '2:27.99' },
          { event: '400 MR', time: '5:27.99' }
        ]
      },
      {
        sex: 'girls',
        age: '12',
        events: [
          { event: '50 Fr', time: '31.59' },
          { event: '100 Fr', time: '1:08.89' },
          { event: '200 Fr', time: '2:28.39' },
          { event: '400 Fr', time: '5:09.99' },
          { event: '800 Fr', time: '10:59.99' },
          { event: '50 Bk', time: '37.29' },
          { event: '100 Bk', time: '1:21.09' },
          { event: '50 Br', time: '42.09' },
          { event: '100 Br', time: '1:32.19' },
          { event: '50 Fly', time: '34.29' },
          { event: '100 Fly', time: '1:18.99' },
          { event: '200 IM', time: '2:52.69' },
          { event: '200 FR', time: '2:08.99' },
          { event: '400 FR', time: '4:40.99' },
          { event: '200 MR', time: '2:27.99' },
          { event: '400 MR', time: '5:27.99' }
        ]
      },
      {
        sex: 'girls',
        age: '13',
        events: [
          { event: '50 Fr', time: '29.09' },
          { event: '100 Fr', time: '1:03.79' },
          { event: '200 Fr', time: '2:18.39' },
          { event: '400 Fr', time: '4:51.29' },
          { event: '800 Fr', time: '9:58.99' },
          { event: '1500 Fr', time: '19:39.99' },
          { event: '50 Bk', time: '33.89' },
          { event: '100 Bk', time: '1:13.59' },
          { event: '200 Bk', time: '2:38.49' },
          { event: '50 Br', time: '37.69' },
          { event: '100 Br', time: '1:25.49' },
          { event: '200 Br', time: '3:02.99' },
          { event: '50 Fly', time: '31.49' },
          { event: '100 Fly', time: '1:11.59' },
          { event: '200 Fly', time: '2:44.89' },
          { event: '200 IM', time: '2:38.99' },
          { event: '400 IM', time: '5:38.99' },
          { event: '200 FR', time: '2:00.99' },
          { event: '400 FR', time: '4:18.99' },
          { event: '800 FR', time: '9:28.99' },
          { event: '200 MR', time: '2:15.99' },
          { event: '400 MR', time: '4:58.99' }
        ]
      },
      {
        sex: 'girls',
        age: '14',
        events: [
          { event: '50 Fr', time: '29.09' },
          { event: '100 Fr', time: '1:03.79' },
          { event: '200 Fr', time: '2:18.39' },
          { event: '400 Fr', time: '4:51.29' },
          { event: '800 Fr', time: '9:58.99' },
          { event: '1500 Fr', time: '19:39.99' },
          { event: '50 Bk', time: '33.89' },
          { event: '100 Bk', time: '1:13.59' },
          { event: '200 Bk', time: '2:38.49' },
          { event: '50 Br', time: '37.69' },
          { event: '100 Br', time: '1:25.49' },
          { event: '200 Br', time: '3:02.99' },
          { event: '50 Fly', time: '31.49' },
          { event: '100 Fly', time: '1:11.59' },
          { event: '200 Fly', time: '2:44.89' },
          { event: '200 IM', time: '2:38.99' },
          { event: '400 IM', time: '5:38.99' },
          { event: '200 FR', time: '2:00.99' },
          { event: '400 FR', time: '4:18.99' },
          { event: '800 FR', time: '9:28.99' },
          { event: '200 MR', time: '2:15.99' },
          { event: '400 MR', time: '4:58.99' }
        ]
      },

      // ================= BOYS =================
      {
        sex: 'boys',
        age: '10&U',
        events: [
          { event: '50 Fr', time: '36.19' },
          { event: '100 Fr', time: '1:20.69' },
          { event: '200 Fr', time: '2:54.19' },
          { event: '400 Fr', time: '6:02.69' },
          { event: '50 Bk', time: '43.79' },
          { event: '100 Bk', time: '1:35.99' },
          { event: '50 Br', time: '49.89' },
          { event: '100 Br', time: '1:49.59' },
          { event: '50 Fly', time: '41.79' },
          { event: '100 Fly', time: '1:38.79' },
          { event: '200 IM', time: '3:21.69' }
        ]
      },
      {
        sex: 'boys',
        age: '11',
        events: [
          { event: '50 Fr', time: '31.59' },
          { event: '100 Fr', time: '1:08.99' },
          { event: '200 Fr', time: '2:27.99' },
          { event: '400 Fr', time: '5:11.99' },
          { event: '800 Fr', time: '10:59.99' },
          { event: '50 Bk', time: '37.49' },
          { event: '100 Bk', time: '1:21.49' },
          { event: '50 Br', time: '42.89' },
          { event: '100 Br', time: '1:33.49' },
          { event: '50 Fly', time: '35.09' },
          { event: '100 Fly', time: '1:20.99' },
          { event: '200 IM', time: '2:54.29' },
          { event: '200 FR', time: '2:08.99' },
          { event: '400 FR', time: '4:40.99' },
          { event: '200 MR', time: '2:27.99' },
          { event: '400 MR', time: '5:27.99' }
        ]
      },
      {
        sex: 'boys',
        age: '12',
        events: [
          { event: '50 Fr', time: '31.59' },
          { event: '100 Fr', time: '1:08.99' },
          { event: '200 Fr', time: '2:27.99' },
          { event: '400 Fr', time: '5:11.99' },
          { event: '800 Fr', time: '10:59.99' },
          { event: '50 Bk', time: '37.49' },
          { event: '100 Bk', time: '1:21.49' },
          { event: '50 Br', time: '42.89' },
          { event: '100 Br', time: '1:33.49' },
          { event: '50 Fly', time: '35.09' },
          { event: '100 Fly', time: '1:20.99' },
          { event: '200 IM', time: '2:54.29' },
          { event: '200 FR', time: '2:08.99' },
          { event: '400 FR', time: '4:40.99' },
          { event: '200 MR', time: '2:27.99' },
          { event: '400 MR', time: '5:27.99' }
        ]
      },
      {
        sex: 'boys',
        age: '13',
        events: [
          { event: '50 Fr', time: '28.29' },
          { event: '100 Fr', time: '1:01.09' },
          { event: '200 Fr', time: '2:13.79' },
          { event: '400 Fr', time: '4:41.19' },
          { event: '800 Fr', time: '9:45.99' },
          { event: '1500 Fr', time: '18:59.99' },
          { event: '50 Bk', time: '31.99' },
          { event: '100 Bk', time: '1:10.99' },
          { event: '200 Bk', time: '2:35.99' },
          { event: '50 Br', time: '34.79' },
          { event: '100 Br', time: '1:21.29' },
          { event: '200 Br', time: '2:56.49' },
          { event: '50 Fly', time: '29.49' },
          { event: '100 Fly', time: '1:08.29' },
          { event: '200 Fly', time: '2:39.99' },
          { event: '200 IM', time: '2:36.99' },
          { event: '400 IM', time: '5:28.99' },
          { event: '200 FR', time: '1:55.99' },
          { event: '400 FR', time: '4:10.99' },
          { event: '800 FR', time: '9:08.99' },
          { event: '200 MR', time: '2:06.99' },
          { event: '400 MR', time: '4:49.99' }
        ]
      },
      {
        sex: 'boys',
        age: '14',
        events: [
          { event: '50 Fr', time: '28.29' },
          { event: '100 Fr', time: '1:01.09' },
          { event: '200 Fr', time: '2:13.79' },
          { event: '400 Fr', time: '4:41.19' },
          { event: '800 Fr', time: '9:45.99' },
          { event: '1500 Fr', time: '18:59.99' },
          { event: '50 Bk', time: '31.99' },
          { event: '100 Bk', time: '1:10.99' },
          { event: '200 Bk', time: '2:35.99' },
          { event: '50 Br', time: '34.79' },
          { event: '100 Br', time: '1:21.29' },
          { event: '200 Br', time: '2:56.49' },
          { event: '50 Fly', time: '29.49' },
          { event: '100 Fly', time: '1:08.29' },
          { event: '200 Fly', time: '2:39.99' },
          { event: '200 IM', time: '2:36.99' },
          { event: '400 IM', time: '5:28.99' },
          { event: '200 FR', time: '1:55.99' },
          { event: '400 FR', time: '4:10.99' },
          { event: '800 FR', time: '9:08.99' },
          { event: '200 MR', time: '2:06.99' },
          { event: '400 MR', time: '4:49.99' }
        ]
      }
    ]
  },
  {
    course: 'scm',
    standards: [
      // ================= GIRLS =================
      {
        sex: 'girls',
        age: '10&U',
        events: [
          { event: '50 Fr', time: '35.89' },
          { event: '100 Fr', time: '1:19.99' },
          { event: '200 Fr', time: '2:51.09' },
          { event: '400 Fr', time: '5:54.99' },
          { event: '50 Bk', time: '42.99' },
          { event: '100 Bk', time: '1:32.69' },
          { event: '50 Br', time: '48.89' },
          { event: '100 Br', time: '1:46.49' },
          { event: '50 Fly', time: '40.99' },
          { event: '100 Fly', time: '1:36.99' },
          { event: '100 IM', time: '1:32.09' },
          { event: '200 IM', time: '3:14.09' }
        ]
      },
      {
        sex: 'girls',
        age: '11',
        events: [
          { event: '50 Fr', time: '30.69' },
          { event: '100 Fr', time: '1:06.59' },
          { event: '200 Fr', time: '2:25.39' },
          { event: '400 Fr', time: '5:03.09' },
          { event: '800 Fr', time: '10:39.49' },
          { event: '50 Bk', time: '36.59' },
          { event: '100 Bk', time: '1:19.09' },
          { event: '50 Br', time: '41.39' },
          { event: '100 Br', time: '1:30.29' },
          { event: '50 Fly', time: '34.09' },
          { event: '100 Fly', time: '1:18.19' },
          { event: '100 IM', time: '1:18.99' },
          { event: '200 IM', time: '2:49.19' }
        ]
      },
      {
        sex: 'girls',
        age: '12',
        events: [
          { event: '50 Fr', time: '30.69' },
          { event: '100 Fr', time: '1:06.59' },
          { event: '200 Fr', time: '2:25.39' },
          { event: '400 Fr', time: '5:03.09' },
          { event: '800 Fr', time: '10:39.49' },
          { event: '50 Bk', time: '36.59' },
          { event: '100 Bk', time: '1:19.09' },
          { event: '50 Br', time: '41.39' },
          { event: '100 Br', time: '1:30.29' },
          { event: '50 Fly', time: '34.09' },
          { event: '100 Fly', time: '1:18.19' },
          { event: '100 IM', time: '1:18.99' },
          { event: '200 IM', time: '2:49.19' }
        ]
      },
      {
        sex: 'girls',
        age: '13',
        events: [
          { event: '50 Fr', time: '28.49' },
          { event: '100 Fr', time: '1:03.09' },
          { event: '200 Fr', time: '2:16.49' },
          { event: '400 Fr', time: '4:46.09' },
          { event: '800 Fr', time: '9:55.09' },
          { event: '1500 Fr', time: '19:02.69' },
          { event: '50 Bk', time: '33.09' },
          { event: '100 Bk', time: '1:11.19' },
          { event: '200 Bk', time: '2:34.79' },
          { event: '50 Br', time: '36.49' },
          { event: '100 Br', time: '1:23.19' },
          { event: '200 Br', time: '2:59.29' },
          { event: '50 Fly', time: '30.79' },
          { event: '100 Fly', time: '1:10.29' },
          { event: '200 Fly', time: '2:40.39' },
          { event: '200 IM', time: '2:33.29' },
          { event: '400 IM', time: '5:29.09' }
        ]
      },
      {
        sex: 'girls',
        age: '14',
        events: [
          { event: '50 Fr', time: '28.49' },
          { event: '100 Fr', time: '1:03.09' },
          { event: '200 Fr', time: '2:16.49' },
          { event: '400 Fr', time: '4:46.09' },
          { event: '800 Fr', time: '9:55.09' },
          { event: '1500 Fr', time: '19:02.69' },
          { event: '50 Bk', time: '33.09' },
          { event: '100 Bk', time: '1:11.19' },
          { event: '200 Bk', time: '2:34.79' },
          { event: '50 Br', time: '36.49' },
          { event: '100 Br', time: '1:23.19' },
          { event: '200 Br', time: '2:59.29' },
          { event: '50 Fly', time: '30.79' },
          { event: '100 Fly', time: '1:10.29' },
          { event: '200 Fly', time: '2:40.39' },
          { event: '200 IM', time: '2:33.29' },
          { event: '400 IM', time: '5:29.09' }
        ]
      },

      // ================= BOYS =================
      {
        sex: 'boys',
        age: '10&U',
        events: [
          { event: '50 Fr', time: '35.89' },
          { event: '100 Fr', time: '1:19.99' },
          { event: '200 Fr', time: '2:51.09' },
          { event: '400 Fr', time: '5:54.99' },
          { event: '50 Bk', time: '42.99' },
          { event: '100 Bk', time: '1:32.69' },
          { event: '50 Br', time: '48.89' },
          { event: '100 Br', time: '1:46.49' },
          { event: '50 Fly', time: '40.99' },
          { event: '100 Fly', time: '1:36.99' },
          { event: '100 IM', time: '1:32.09' },
          { event: '200 IM', time: '3:14.09' }
        ]
      },
      {
        sex: 'boys',
        age: '11',
        events: [
          { event: '50 Fr', time: '30.99' },
          { event: '100 Fr', time: '1:07.99' },
          { event: '200 Fr', time: '2:26.19' },
          { event: '400 Fr', time: '5:07.89' },
          { event: '800 Fr', time: '10:49.39' },
          { event: '50 Bk', time: '36.79' },
          { event: '100 Bk', time: '1:19.99' },
          { event: '50 Br', time: '42.09' },
          { event: '100 Br', time: '1:29.19' },
          { event: '50 Fly', time: '34.39' },
          { event: '100 Fly', time: '1:19.09' },
          { event: '100 IM', time: '1:19.49' },
          { event: '200 IM', time: '2:51.09' }
        ]
      },
      {
        sex: 'boys',
        age: '12',
        events: [
          { event: '50 Fr', time: '30.99' },
          { event: '100 Fr', time: '1:07.99' },
          { event: '200 Fr', time: '2:26.19' },
          { event: '400 Fr', time: '5:07.89' },
          { event: '800 Fr', time: '10:49.39' },
          { event: '50 Bk', time: '36.79' },
          { event: '100 Bk', time: '1:19.99' },
          { event: '50 Br', time: '42.09' },
          { event: '100 Br', time: '1:29.19' },
          { event: '50 Fly', time: '34.39' },
          { event: '100 Fly', time: '1:19.09' },
          { event: '100 IM', time: '1:19.49' },
          { event: '200 IM', time: '2:51.09' }
        ]
      },
      {
        sex: 'boys',
        age: '13',
        events: [
          { event: '50 Fr', time: '27.69' },
          { event: '100 Fr', time: '1:00.79' },
          { event: '200 Fr', time: '2:11.49' },
          { event: '400 Fr', time: '4:36.69' },
          { event: '800 Fr', time: '9:40.59' },
          { event: '1500 Fr', time: '18:30.89' },
          { event: '50 Bk', time: '31.29' },
          { event: '100 Bk', time: '1:09.49' },
          { event: '200 Bk', time: '2:32.59' },
          { event: '50 Br', time: '34.09' },
          { event: '100 Br', time: '1:19.89' },
          { event: '200 Br', time: '2:53.69' },
          { event: '50 Fly', time: '28.79' },
          { event: '100 Fly', time: '1:06.19' },
          { event: '200 Fly', time: '2:36.49' },
          { event: '200 IM', time: '2:29.99' },
          { event: '400 IM', time: '5:21.59' }
        ]
      },
      {
        sex: 'boys',
        age: '14',
        events: [
          { event: '50 Fr', time: '27.69' },
          { event: '100 Fr', time: '1:00.79' },
          { event: '200 Fr', time: '2:11.49' },
          { event: '400 Fr', time: '4:36.69' },
          { event: '800 Fr', time: '9:40.59' },
          { event: '1500 Fr', time: '18:30.89' },
          { event: '50 Bk', time: '31.29' },
          { event: '100 Bk', time: '1:09.49' },
          { event: '200 Bk', time: '2:32.59' },
          { event: '50 Br', time: '34.09' },
          { event: '100 Br', time: '1:19.89' },
          { event: '200 Br', time: '2:53.69' },
          { event: '50 Fly', time: '28.79' },
          { event: '100 Fly', time: '1:06.19' },
          { event: '200 Fly', time: '2:36.49' },
          { event: '200 IM', time: '2:29.99' },
          { event: '400 IM', time: '5:21.59' }
        ]
      }
    ]
  }
];
