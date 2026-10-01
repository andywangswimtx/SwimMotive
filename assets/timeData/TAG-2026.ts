export type PoolCourse = 'lcm' | 'scy';
export type CutType = 'tags' | 'bonus';
export type Sex = 'girls' | 'boys';
export type Age = '10&U' | '11' | '12' | '13' | '14';

export interface EventTime {
  event: string;
  time: string; // Stored as "MM:SS.ms" or "SS.ms"
}

export interface GroupStandards {
  sex: Sex;
  age: Age;
  events: EventTime[];
}

export interface CutCategory {
  cutType: CutType;
  standards: GroupStandards[];
}

export interface CourseTimeStandards {
  course: PoolCourse;
  cuts: CutCategory[];
}

export const TIME_STANDARDS: CourseTimeStandards[] = [
  {
    course: 'lcm',
    cuts: [
      {
        cutType: 'tags',
        standards: [
          {
            sex: 'girls',
            age: '10&U',
            events: [
              { event: '50 Fr', time: '33.69' },
              { event: '100 Fr', time: '1:13.89' },
              { event: '200 Fr', time: '2:41.49' },
              { event: '400 Fr', time: '5:43.29' },
              { event: '50 Bk', time: '39.59' },
              { event: '100 Bk', time: '1:25.09' },
              { event: '50 Br', time: '46.09' },
              { event: '100 Br', time: '1:40.09' },
              { event: '50 Fly', time: '37.09' },
              { event: '100 Fly', time: '1:26.89' },
              { event: '200 IM', time: '3:04.09' },
              { event: '200 FR', time: '2:19.79' },
              { event: '400 FR', time: '5:13.99' },
              { event: '200 MR', time: '2:41.09' }
            ]
          },
          {
            sex: 'girls',
            age: '11',
            events: [
              { event: '50 Fr', time: '30.09' },
              { event: '100 Fr', time: '1:05.79' },
              { event: '200 Fr', time: '2:22.69' },
              { event: '400 Fr', time: '5:01.59' },
              { event: '50 Bk', time: '35.29' },
              { event: '100 Bk', time: '1:15.49' },
              { event: '200 Bk', time: '2:42.49' },
              { event: '50 Br', time: '39.59' },
              { event: '100 Br', time: '1:26.69' },
              { event: '200 Br', time: '3:06.99' },
              { event: '50 Fly', time: '32.69' },
              { event: '100 Fly', time: '1:13.19' },
              { event: '200 Fly', time: '2:48.49' },
              { event: '200 IM', time: '2:42.19' },
              { event: '200 FR', time: '2:02.89' },
              { event: '400 FR', time: '4:27.69' },
              { event: '200 MR', time: '2:17.49' }
            ]
          },
          {
            sex: 'girls',
            age: '12',
            events: [
              { event: '50 Fr', time: '30.09' },
              { event: '100 Fr', time: '1:05.79' },
              { event: '200 Fr', time: '2:22.69' },
              { event: '400 Fr', time: '5:01.59' },
              { event: '50 Bk', time: '35.29' },
              { event: '100 Bk', time: '1:15.49' },
              { event: '200 Bk', time: '2:42.49' },
              { event: '50 Br', time: '39.59' },
              { event: '100 Br', time: '1:26.69' },
              { event: '200 Br', time: '3:06.99' },
              { event: '50 Fly', time: '32.69' },
              { event: '100 Fly', time: '1:13.19' },
              { event: '200 Fly', time: '2:48.49' },
              { event: '200 IM', time: '2:42.19' },
              { event: '200 FR', time: '2:02.89' },
              { event: '400 FR', time: '4:27.69' },
              { event: '200 MR', time: '2:17.49' }
            ]
          },
          {
            sex: 'girls',
            age: '13',
            events: [
              { event: '50 Fr', time: '28.49' },
              { event: '100 Fr', time: '1:01.79' },
              { event: '200 Fr', time: '2:14.29' },
              { event: '400 Fr', time: '4:42.19' },
              { event: '800 Fr', time: '9:52.39' },
              { event: '1500 Fr', time: '18:48.49' },
              { event: '100 Bk', time: '1:10.39' },
              { event: '200 Bk', time: '2:31.39' },
              { event: '100 Br', time: '1:20.89' },
              { event: '200 Br', time: '2:55.59' },
              { event: '100 Fly', time: '1:08.09' },
              { event: '200 Fly', time: '2:35.59' },
              { event: '200 IM', time: '2:32.89' },
              { event: '400 IM', time: '5:25.59' },
              { event: '200 FR', time: '1:56.99' },
              { event: '400 FR', time: '4:13.59' },
              { event: '800 FR', time: '9:12.69' },
              { event: '200 MR', time: '2:10.69' },
              { event: '400 MR', time: '4:44.29' }
            ]
          },		  
          {
            sex: 'girls',
            age: '14',
            events: [
              { event: '50 Fr', time: '28.49' },
              { event: '100 Fr', time: '1:01.79' },
              { event: '200 Fr', time: '2:14.29' },
              { event: '400 Fr', time: '4:42.19' },
              { event: '800 Fr', time: '9:52.39' },
              { event: '1500 Fr', time: '18:48.49' },
              { event: '100 Bk', time: '1:10.39' },
              { event: '200 Bk', time: '2:31.39' },
              { event: '100 Br', time: '1:20.89' },
              { event: '200 Br', time: '2:55.59' },
              { event: '100 Fly', time: '1:08.09' },
              { event: '200 Fly', time: '2:35.59' },
              { event: '200 IM', time: '2:32.89' },
              { event: '400 IM', time: '5:25.59' },
              { event: '200 FR', time: '1:56.99' },
              { event: '400 FR', time: '4:13.59' },
              { event: '800 FR', time: '9:12.69' },
              { event: '200 MR', time: '2:10.69' },
              { event: '400 MR', time: '4:44.29' }
            ]
          },
          {
            sex: 'boys',
            age: '10&U',
            events: [
              { event: '50 Fr', time: '33.49' },
              { event: '100 Fr', time: '1:13.29' },
              { event: '200 Fr', time: '2:40.09' },
              { event: '400 Fr', time: '5:42.39' },
              { event: '50 Bk', time: '39.59' },
              { event: '100 Bk', time: '1:25.29' },
              { event: '50 Br', time: '45.09' },
              { event: '100 Br', time: '1:38.89' },
              { event: '50 Fly', time: '36.89' },
              { event: '100 Fly', time: '1:27.09' },
              { event: '200 IM', time: '3:03.29' },
              { event: '200 FR', time: '2:19.59' },
              { event: '400 FR', time: '5:10.79' },
              { event: '200 MR', time: '2:39.49' }
            ]
          },
          {
            sex: 'boys',
            age: '11',
            events: [
              { event: '50 Fr', time: '29.39' },
              { event: '100 Fr', time: '1:04.59' },
              { event: '200 Fr', time: '2:19.99' },
              { event: '400 Fr', time: '4:57.59' },
              { event: '50 Bk', time: '34.69' },
              { event: '100 Bk', time: '1:14.79' },
              { event: '200 Bk', time: '2:40.29' },
              { event: '50 Br', time: '38.69' },
              { event: '100 Br', time: '1:24.49' },
              { event: '200 Br', time: '3:01.69' },
              { event: '50 Fly', time: '32.19' },
              { event: '100 Fly', time: '1:12.09' },
              { event: '200 Fly', time: '2:47.19' },
              { event: '200 IM', time: '2:38.19' },
              { event: '200 FR', time: '2:01.29' },
              { event: '400 FR', time: '4:28.69' },
              { event: '200 MR', time: '2:17.39' },
              { event: '400 MR', time: '5:02.29' }
            ]
          },
		  {
            sex: 'boys',
            age: '12',
            events: [
              { event: '50 Fr', time: '29.39' },
              { event: '100 Fr', time: '1:04.59' },
              { event: '200 Fr', time: '2:19.99' },
              { event: '400 Fr', time: '4:57.59' },
              { event: '50 Bk', time: '34.69' },
              { event: '100 Bk', time: '1:14.79' },
              { event: '200 Bk', time: '2:40.29' },
              { event: '50 Br', time: '38.69' },
              { event: '100 Br', time: '1:24.49' },
              { event: '200 Br', time: '3:01.69' },
              { event: '50 Fly', time: '32.19' },
              { event: '100 Fly', time: '1:12.09' },
              { event: '200 Fly', time: '2:47.19' },
              { event: '200 IM', time: '2:38.19' },
              { event: '200 FR', time: '2:01.29' },
              { event: '400 FR', time: '4:28.69' },
              { event: '200 MR', time: '2:17.39' },
              { event: '400 MR', time: '5:02.29' }
            ]
          },
          {
            sex: 'boys',
            age: '13',
            events: [
              { event: '50 Fr', time: '26.49' },
              { event: '100 Fr', time: '57.59' },
              { event: '200 Fr', time: '2:05.19' },
              { event: '400 Fr', time: '4:28.19' },
              { event: '800 Fr', time: '9:20.59' },
              { event: '1500 Fr', time: '18:06.59' },
              { event: '100 Bk', time: '1:05.89' },
              { event: '200 Bk', time: '2:22.59' },
              { event: '100 Br', time: '1:13.89' },
              { event: '200 Br', time: '2:41.09' },
              { event: '100 Fly', time: '1:03.29' },
              { event: '200 Fly', time: '2:22.79' },
              { event: '200 IM', time: '2:20.99' },
              { event: '400 IM', time: '5:06.09' },
              { event: '200 FR', time: '1:49.49' },
              { event: '400 FR', time: '3:57.69' },
              { event: '800 FR', time: '8:43.49' },
              { event: '200 MR', time: '2:01.99' },
              { event: '400 MR', time: '4:25.79' }
            ]
          },
          {
            sex: 'boys',
            age: '14',
            events: [
              { event: '50 Fr', time: '26.49' },
              { event: '100 Fr', time: '57.59' },
              { event: '200 Fr', time: '2:05.19' },
              { event: '400 Fr', time: '4:28.19' },
              { event: '800 Fr', time: '9:20.59' },
              { event: '1500 Fr', time: '18:06.59' },
              { event: '100 Bk', time: '1:05.89' },
              { event: '200 Bk', time: '2:22.59' },
              { event: '100 Br', time: '1:13.89' },
              { event: '200 Br', time: '2:41.09' },
              { event: '100 Fly', time: '1:03.29' },
              { event: '200 Fly', time: '2:22.79' },
              { event: '200 IM', time: '2:20.99' },
              { event: '400 IM', time: '5:06.09' },
              { event: '200 FR', time: '1:49.49' },
              { event: '400 FR', time: '3:57.69' },
              { event: '800 FR', time: '8:43.49' },
              { event: '200 MR', time: '2:01.99' },
              { event: '400 MR', time: '4:25.79' }
            ]
          }
        ]
      },
      {
        cutType: 'bonus',
        standards: [
          {
            sex: 'girls',
            age: '10&U',
            events: [
              { event: '50 Fr', time: '33.89' },
              { event: '100 Fr', time: '1:14.29' },
              { event: '200 Fr', time: '2:42.29' },
              { event: '400 Fr', time: '5:44.99' },
              { event: '50 Bk', time: '39.79' },
              { event: '100 Bk', time: '1:25.59' },
              { event: '50 Br', time: '46.39' },
              { event: '100 Br', time: '1:40.59' },
              { event: '50 Fly', time: '37.29' },
              { event: '100 Fly', time: '1:27.59' },
              { event: '200 IM', time: '3:05.09' }
            ]
          },
          {
            sex: 'girls',
            age: '11',
            events: [
              { event: '50 Fr', time: '30.29' },
              { event: '100 Fr', time: '1:06.19' },
              { event: '200 Fr', time: '2:23.49' },
              { event: '400 Fr', time: '5:03.09' },
              { event: '50 Bk', time: '35.49' },
              { event: '100 Bk', time: '1:15.89' },
              { event: '200 Bk', time: '2:43.39' },
              { event: '50 Br', time: '39.79' },
              { event: '100 Br', time: '1:27.19' },
              { event: '200 Br', time: '3:07.99' },
              { event: '50 Fly', time: '32.89' },
              { event: '100 Fly', time: '1:13.59' },
              { event: '200 Fly', time: '2:49.39' },
              { event: '200 IM', time: '2:42.99' }
            ]
          },
		            {
            sex: 'girls',
            age: '12',
            events: [
              { event: '50 Fr', time: '30.29' },
              { event: '100 Fr', time: '1:06.19' },
              { event: '200 Fr', time: '2:23.49' },
              { event: '400 Fr', time: '5:03.09' },
              { event: '50 Bk', time: '35.49' },
              { event: '100 Bk', time: '1:15.89' },
              { event: '200 Bk', time: '2:43.39' },
              { event: '50 Br', time: '39.79' },
              { event: '100 Br', time: '1:27.19' },
              { event: '200 Br', time: '3:07.99' },
              { event: '50 Fly', time: '32.89' },
              { event: '100 Fly', time: '1:13.59' },
              { event: '200 Fly', time: '2:49.39' },
              { event: '200 IM', time: '2:42.99' }
            ]
          },
          {
            sex: 'girls',
            age: '13',
            events: [
              { event: '50 Fr', time: '28.69' },
              { event: '100 Fr', time: '1:02.09' },
              { event: '200 Fr', time: '2:14.99' },
              { event: '400 Fr', time: '4:43.59' },
              { event: '800 Fr', time: '9:55.39' },
              { event: '1500 Fr', time: '18:54.19' },
              { event: '100 Bk', time: '1:10.79' },
              { event: '200 Bk', time: '2:32.19' },
              { event: '100 Br', time: '1:21.29' },
              { event: '200 Br', time: '2:56.49' },
              { event: '100 Fly', time: '1:08.49' },
              { event: '200 Fly', time: '2:36.39' },
              { event: '200 IM', time: '2:33.69' },
              { event: '400 IM', time: '5:27.29' }
            ]
          },
          {
            sex: 'girls',
            age: '14',
            events: [
              { event: '50 Fr', time: '28.69' },
              { event: '100 Fr', time: '1:02.09' },
              { event: '200 Fr', time: '2:14.99' },
              { event: '400 Fr', time: '4:43.59' },
              { event: '800 Fr', time: '9:55.39' },
              { event: '1500 Fr', time: '18:54.19' },
              { event: '100 Bk', time: '1:10.79' },
              { event: '200 Bk', time: '2:32.19' },
              { event: '100 Br', time: '1:21.29' },
              { event: '200 Br', time: '2:56.49' },
              { event: '100 Fly', time: '1:08.49' },
              { event: '200 Fly', time: '2:36.39' },
              { event: '200 IM', time: '2:33.69' },
              { event: '400 IM', time: '5:27.29' }
            ]
          },
          {
            sex: 'boys',
            age: '10&U',
            events: [
              { event: '50 Fr', time: '33.69' },
              { event: '100 Fr', time: '1:13.69' },
              { event: '200 Fr', time: '2:40.89' },
              { event: '400 Fr', time: '5:44.19' },
              { event: '50 Bk', time: '39.79' },
              { event: '100 Bk', time: '1:25.79' },
              { event: '50 Br', time: '45.39' },
              { event: '100 Br', time: '1:39.39' },
              { event: '50 Fly', time: '37.09' },
              { event: '100 Fly', time: '1:27.39' },
              { event: '200 IM', time: '3:04.09' }
            ]
          },
          {
            sex: 'boys',
            age: '11',
            events: [
              { event: '50 Fr', time: '29.59' },
              { event: '100 Fr', time: '1:04.89' },
              { event: '200 Fr', time: '2:20.69' },
              { event: '400 Fr', time: '4:59.09' },
              { event: '50 Bk', time: '34.89' },
              { event: '100 Bk', time: '1:15.19' },
              { event: '200 Bk', time: '2:41.09' },
              { event: '50 Br', time: '38.89' },
              { event: '100 Br', time: '1:24.99' },
              { event: '200 Br', time: '3:02.59' },
              { event: '50 Fly', time: '32.39' },
              { event: '100 Fly', time: '1:12.49' },
              { event: '200 Fly', time: '2:48.09' },
              { event: '200 IM', time: '2:38.99' }
            ]
          },
		            {
            sex: 'boys',
            age: '12',
            events: [
              { event: '50 Fr', time: '29.59' },
              { event: '100 Fr', time: '1:04.89' },
              { event: '200 Fr', time: '2:20.69' },
              { event: '400 Fr', time: '4:59.09' },
              { event: '50 Bk', time: '34.89' },
              { event: '100 Bk', time: '1:15.19' },
              { event: '200 Bk', time: '2:41.09' },
              { event: '50 Br', time: '38.89' },
              { event: '100 Br', time: '1:24.99' },
              { event: '200 Br', time: '3:02.59' },
              { event: '50 Fly', time: '32.39' },
              { event: '100 Fly', time: '1:12.49' },
              { event: '200 Fly', time: '2:48.09' },
              { event: '200 IM', time: '2:38.99' }
            ]
          },
          {
            sex: 'boys',
            age: '13',
            events: [
              { event: '50 Fr', time: '26.69' },
              { event: '100 Fr', time: '57.89' },
              { event: '200 Fr', time: '2:05.89' },
              { event: '400 Fr', time: '4:29.59' },
              { event: '800 Fr', time: '9:23.39' },
              { event: '1500 Fr', time: '18:12.09' },
              { event: '100 Bk', time: '1:06.29' },
              { event: '200 Bk', time: '2:23.29' },
              { event: '100 Br', time: '1:14.29' },
              { event: '200 Br', time: '2:41.89' },
              { event: '100 Fly', time: '1:03.59' },
              { event: '200 Fly', time: '2:23.49' },
              { event: '200 IM', time: '2:21.69' },
              { event: '400 IM', time: '5:07.69' }
            ]
          },
		  {
            sex: 'boys',
            age: '14',
            events: [
              { event: '50 Fr', time: '26.69' },
              { event: '100 Fr', time: '57.89' },
              { event: '200 Fr', time: '2:05.89' },
              { event: '400 Fr', time: '4:29.59' },
              { event: '800 Fr', time: '9:23.39' },
              { event: '1500 Fr', time: '18:12.09' },
              { event: '100 Bk', time: '1:06.29' },
              { event: '200 Bk', time: '2:23.29' },
              { event: '100 Br', time: '1:14.29' },
              { event: '200 Br', time: '2:41.89' },
              { event: '100 Fly', time: '1:03.59' },
              { event: '200 Fly', time: '2:23.49' },
              { event: '200 IM', time: '2:21.69' },
              { event: '400 IM', time: '5:07.69' }
            ]
          }
        ]
      }
    ]
  },
  {
    course: 'scy',
    cuts: [
      {
        cutType: 'tags',
        standards: [
          {
            sex: 'girls',
            age: '10&U',
            events: [
              { event: '50 Fr', time: '29.99' },
              { event: '100 Fr', time: '1:05.79' },
              { event: '200 Fr', time: '2:22.29' },
              { event: '500 Fr', time: '6:19.39' },
              { event: '50 Bk', time: '34.69' },
              { event: '100 Bk', time: '1:14.59' },
              { event: '50 Br', time: '39.49' },
              { event: '100 Br', time: '1:26.39' },
              { event: '50 Fly', time: '33.09' },
              { event: '100 Fly', time: '1:16.39' },
              { event: '100 IM', time: '1:15.29' },
              { event: '200 IM', time: '2:41.89' },
              { event: '200 FR', time: '2:03.59' },
              { event: '400 FR', time: '4:34.79' },
              { event: '200 MR', time: '2:18.59' }
            ]
          },
          {
            sex: 'girls',
            age: '11',
            events: [
              { event: '50 Fr', time: '26.69' },
              { event: '100 Fr', time: '57.89' },
              { event: '200 Fr', time: '2:04.69' },
              { event: '500 Fr', time: '5:33.59' },
              { event: '50 Bk', time: '30.39' },
              { event: '100 Bk', time: '1:04.89' },
              { event: '200 Bk', time: '2:20.39' },
              { event: '50 Br', time: '34.59' },
              { event: '100 Br', time: '1:15.29' },
              { event: '200 Br', time: '2:41.89' },
              { event: '50 Fly', time: '28.99' },
              { event: '100 Fly', time: '1:04.59' },
              { event: '200 Fly', time: '2:26.89' },
              { event: '100 IM', time: '1:05.89' },
              { event: '200 IM', time: '2:20.99' },
              { event: '200 FR', time: '1:47.69' },
              { event: '400 FR', time: '3:56.09' },
              { event: '200 MR', time: '1:59.89' },
              { event: '400 MR', time: '4:24.29' }
            ]
          },
		  {
            sex: 'girls',
            age: '12',
            events: [
              { event: '50 Fr', time: '26.69' },
              { event: '100 Fr', time: '57.89' },
              { event: '200 Fr', time: '2:04.69' },
              { event: '500 Fr', time: '5:33.59' },
              { event: '50 Bk', time: '30.39' },
              { event: '100 Bk', time: '1:04.89' },
              { event: '200 Bk', time: '2:20.39' },
              { event: '50 Br', time: '34.59' },
              { event: '100 Br', time: '1:15.29' },
              { event: '200 Br', time: '2:41.89' },
              { event: '50 Fly', time: '28.99' },
              { event: '100 Fly', time: '1:04.59' },
              { event: '200 Fly', time: '2:26.89' },
              { event: '100 IM', time: '1:05.89' },
              { event: '200 IM', time: '2:20.99' },
              { event: '200 FR', time: '1:47.69' },
              { event: '400 FR', time: '3:56.09' },
              { event: '200 MR', time: '1:59.89' },
              { event: '400 MR', time: '4:24.29' }
            ]
          },
          {
            sex: 'girls',
            age: '13',
            events: [
              { event: '50 Fr', time: '24.99' },
              { event: '100 Fr', time: '54.19' },
              { event: '200 Fr', time: '1:57.59' },
              { event: '500 Fr', time: '5:14.59' },
              { event: '1000 Fr', time: '11:00.09' },
              { event: '1650 Fr', time: '18:19.49' },
              { event: '100 Bk', time: '1:00.29' },
              { event: '200 Bk', time: '2:09.99' },
              { event: '100 Br', time: '1:09.29' },
              { event: '200 Br', time: '2:29.59' },
              { event: '100 Fly', time: '59.69' },
              { event: '200 Fly', time: '2:15.49' },
              { event: '200 IM', time: '2:12.69' },
              { event: '400 IM', time: '4:42.09' },
              { event: '200 FR', time: '1:42.29' },
              { event: '400 FR', time: '3:42.69' },
              { event: '800 FR', time: '8:00.19' },
              { event: '200 MR', time: '1:53.19' },
              { event: '400 MR', time: '4:08.19' }
            ]
          },
		  {
            sex: 'girls',
            age: '14',
            events: [
              { event: '50 Fr', time: '24.99' },
              { event: '100 Fr', time: '54.19' },
              { event: '200 Fr', time: '1:57.59' },
              { event: '500 Fr', time: '5:14.59' },
              { event: '1000 Fr', time: '11:00.09' },
              { event: '1650 Fr', time: '18:19.49' },
              { event: '100 Bk', time: '1:00.29' },
              { event: '200 Bk', time: '2:09.99' },
              { event: '100 Br', time: '1:09.29' },
              { event: '200 Br', time: '2:29.59' },
              { event: '100 Fly', time: '59.69' },
              { event: '200 Fly', time: '2:15.49' },
              { event: '200 IM', time: '2:12.69' },
              { event: '400 IM', time: '4:42.09' },
              { event: '200 FR', time: '1:42.29' },
              { event: '400 FR', time: '3:42.69' },
              { event: '800 FR', time: '8:00.19' },
              { event: '200 MR', time: '1:53.19' },
              { event: '400 MR', time: '4:08.19' }
            ]
          },
          {
            sex: 'boys',
            age: '10&U',
            events: [
              { event: '50 Fr', time: '29.59' },
              { event: '100 Fr', time: '1:05.09' },
              { event: '200 Fr', time: '2:22.69' },
              { event: '500 Fr', time: '6:20.39' },
              { event: '50 Bk', time: '34.39' },
              { event: '100 Bk', time: '1:14.39' },
              { event: '50 Br', time: '39.79' },
              { event: '100 Br', time: '1:27.59' },
              { event: '50 Fly', time: '32.89' },
              { event: '100 Fly', time: '1:16.59' },
              { event: '100 IM', time: '1:15.09' },
              { event: '200 IM', time: '2:41.29' },
              { event: '200 FR', time: '2:04.19' },
              { event: '400 FR', time: '4:35.69' },
              { event: '200 MR', time: '2:20.49' }
            ]
          },
          {
            sex: 'boys',
            age: '11',
            events: [
              { event: '50 Fr', time: '25.99' },
              { event: '100 Fr', time: '56.09' },
              { event: '200 Fr', time: '2:02.79' },
              { event: '500 Fr', time: '5:29.69' },
              { event: '50 Bk', time: '30.09' },
              { event: '100 Bk', time: '1:05.09' },
              { event: '200 Bk', time: '2:18.69' },
              { event: '50 Br', time: '33.69' },
              { event: '100 Br', time: '1:14.09' },
              { event: '200 Br', time: '2:41.69' },
              { event: '50 Fly', time: '28.59' },
              { event: '100 Fly', time: '1:03.59' },
              { event: '200 Fly', time: '2:23.29' },
              { event: '100 IM', time: '1:04.59' },
              { event: '200 IM', time: '2:19.29' },
              { event: '200 FR', time: '1:46.79' },
              { event: '400 FR', time: '3:55.59' },
              { event: '200 MR', time: '1:59.19' },
              { event: '400 MR', time: '4:24.59' }
            ]
          },
		  {
            sex: 'boys',
            age: '12',
            events: [
              { event: '50 Fr', time: '25.99' },
              { event: '100 Fr', time: '56.09' },
              { event: '200 Fr', time: '2:02.79' },
              { event: '500 Fr', time: '5:29.69' },
              { event: '50 Bk', time: '30.09' },
              { event: '100 Bk', time: '1:05.09' },
              { event: '200 Bk', time: '2:18.69' },
              { event: '50 Br', time: '33.69' },
              { event: '100 Br', time: '1:14.09' },
              { event: '200 Br', time: '2:41.69' },
              { event: '50 Fly', time: '28.59' },
              { event: '100 Fly', time: '1:03.59' },
              { event: '200 Fly', time: '2:23.29' },
              { event: '100 IM', time: '1:04.59' },
              { event: '200 IM', time: '2:19.29' },
              { event: '200 FR', time: '1:46.79' },
              { event: '400 FR', time: '3:55.59' },
              { event: '200 MR', time: '1:59.19' },
              { event: '400 MR', time: '4:24.59' }
            ]
          },
          {
            sex: 'boys',
            age: '13',
            events: [
              { event: '50 Fr', time: '23.09' },
              { event: '100 Fr', time: '49.99' },
              { event: '200 Fr', time: '1:49.59' },
              { event: '500 Fr', time: '4:55.89' },
              { event: '1000 Fr', time: '10:20.09' },
              { event: '1650 Fr', time: '17:20.29' },
              { event: '100 Bk', time: '56.29' },
              { event: '200 Bk', time: '2:02.79' },
              { event: '100 Br', time: '1:04.29' },
              { event: '200 Br', time: '2:17.69' },
              { event: '100 Fly', time: '55.59' },
              { event: '200 Fly', time: '2:03.29' },
              { event: '200 IM', time: '2:04.29' },
              { event: '400 IM', time: '4:24.89' },
              { event: '200 FR', time: '1:35.09' },
              { event: '400 FR', time: '3:26.79' },
              { event: '800 FR', time: '7:35.99' },
              { event: '200 MR', time: '1:44.99' },
              { event: '400 MR', time: '3:50.89' }
            ]
          },
		  {
            sex: 'boys',
            age: '14',
            events: [
              { event: '50 Fr', time: '23.09' },
              { event: '100 Fr', time: '49.99' },
              { event: '200 Fr', time: '1:49.59' },
              { event: '500 Fr', time: '4:55.89' },
              { event: '1000 Fr', time: '10:20.09' },
              { event: '1650 Fr', time: '17:20.29' },
              { event: '100 Bk', time: '56.29' },
              { event: '200 Bk', time: '2:02.79' },
              { event: '100 Br', time: '1:04.29' },
              { event: '200 Br', time: '2:17.69' },
              { event: '100 Fly', time: '55.59' },
              { event: '200 Fly', time: '2:03.29' },
              { event: '200 IM', time: '2:04.29' },
              { event: '400 IM', time: '4:24.89' },
              { event: '200 FR', time: '1:35.09' },
              { event: '400 FR', time: '3:26.79' },
              { event: '800 FR', time: '7:35.99' },
              { event: '200 MR', time: '1:44.99' },
              { event: '400 MR', time: '3:50.89' }
            ]
          }
        ]
      },
      {
        cutType: 'bonus',
        standards: [
          {
            sex: 'girls',
            age: '10&U',
            events: [
              { event: '50 Fr', time: '30.19' },
              { event: '100 Fr', time: '1:06.19' },
              { event: '200 Fr', time: '2:22.99' },
              { event: '500 Fr', time: '6:21.29' },
              { event: '50 Bk', time: '34.89' },
              { event: '100 Bk', time: '1:14.89' },
              { event: '50 Br', time: '39.69' },
              { event: '100 Br', time: '1:26.89' },
              { event: '50 Fly', time: '33.29' },
              { event: '100 Fly', time: '1:16.79' },
              { event: '100 IM', time: '1:15.69' },
              { event: '200 IM', time: '2:42.69' }
            ]
          },
          {
            sex: 'girls',
            age: '11',
            events: [
              { event: '50 Fr', time: '26.89' },
              { event: '100 Fr', time: '58.19' },
              { event: '200 Fr', time: '2:05.39' },
              { event: '500 Fr', time: '5:35.29' },
              { event: '50 Bk', time: '30.59' },
              { event: '100 Bk', time: '1:05.29' },
              { event: '200 Bk', time: '2:21.09' },
              { event: '50 Br', time: '34.79' },
              { event: '100 Br', time: '1:15.69' },
              { event: '200 Br', time: '2:42.69' },
              { event: '50 Fly', time: '29.19' },
              { event: '100 Fly', time: '1:04.99' },
              { event: '200 Fly', time: '2:27.69' },
              { event: '100 IM', time: '1:06.29' },
              { event: '200 IM', time: '2:21.69' }
            ]
          },
		  {
            sex: 'girls',
            age: '12',
            events: [
              { event: '50 Fr', time: '26.89' },
              { event: '100 Fr', time: '58.19' },
              { event: '200 Fr', time: '2:05.39' },
              { event: '500 Fr', time: '5:35.29' },
              { event: '50 Bk', time: '30.59' },
              { event: '100 Bk', time: '1:05.29' },
              { event: '200 Bk', time: '2:21.09' },
              { event: '50 Br', time: '34.79' },
              { event: '100 Br', time: '1:15.69' },
              { event: '200 Br', time: '2:42.69' },
              { event: '50 Fly', time: '29.19' },
              { event: '100 Fly', time: '1:04.99' },
              { event: '200 Fly', time: '2:27.69' },
              { event: '100 IM', time: '1:06.29' },
              { event: '200 IM', time: '2:21.69' }
            ]
          },
          {
            sex: 'girls',
            age: '13',
            events: [
              { event: '50 Fr', time: '25.19' },
              { event: '100 Fr', time: '54.49' },
              { event: '200 Fr', time: '1:58.19' },
              { event: '500 Fr', time: '5:16.19' },
              { event: '1000 Fr', time: '11:03.39' },
              { event: '1650 Fr', time: '18:24.99' },
              { event: '100 Bk', time: '1:00.59' },
              { event: '200 Bk', time: '2:10.69' },
              { event: '100 Br', time: '1:09.69' },
              { event: '200 Br', time: '2:30.39' },
              { event: '100 Fly', time: '59.99' },
              { event: '200 Fly', time: '2:16.19' },
              { event: '200 IM', time: '2:13.39' },
              { event: '400 IM', time: '4:43.49' }
            ]
          },
		  {
            sex: 'girls',
            age: '14',
            events: [
              { event: '50 Fr', time: '25.19' },
              { event: '100 Fr', time: '54.49' },
              { event: '200 Fr', time: '1:58.19' },
              { event: '500 Fr', time: '5:16.19' },
              { event: '1000 Fr', time: '11:03.39' },
              { event: '1650 Fr', time: '18:24.99' },
              { event: '100 Bk', time: '1:00.59' },
              { event: '200 Bk', time: '2:10.69' },
              { event: '100 Br', time: '1:09.69' },
              { event: '200 Br', time: '2:30.39' },
              { event: '100 Fly', time: '59.99' },
              { event: '200 Fly', time: '2:16.19' },
              { event: '200 IM', time: '2:13.39' },
              { event: '400 IM', time: '4:43.49' }
            ]
          },
          {
            sex: 'boys',
            age: '10&U',
            events: [
              { event: '50 Fr', time: '29.79' },
              { event: '100 Fr', time: '1:05.49' },
              { event: '200 Fr', time: '2:23.49' },
              { event: '500 Fr', time: '6:22.29' },
              { event: '50 Bk', time: '34.59' },
              { event: '100 Bk', time: '1:14.79' },
              { event: '50 Br', time: '39.99' },
              { event: '100 Br', time: '1:28.09' },
              { event: '50 Fly', time: '33.09' },
              { event: '100 Fly', time: '1:16.99' },
              { event: '100 IM', time: '1:15.49' },
              { event: '200 IM', time: '2:42.09' }
            ]
          },
          {
            sex: 'boys',
            age: '11',
            events: [
              { event: '50 Fr', time: '26.19' },
              { event: '100 Fr', time: '56.39' },
              { event: '200 Fr', time: '2:03.49' },
              { event: '500 Fr', time: '5:31.39' },
              { event: '50 Bk', time: '30.29' },
              { event: '100 Bk', time: '1:05.49' },
              { event: '200 Bk', time: '2:19.39' },
              { event: '50 Br', time: '33.89' },
              { event: '100 Br', time: '1:14.49' },
              { event: '200 Br', time: '2:42.49' },
              { event: '50 Fly', time: '28.79' },
              { event: '100 Fly', time: '1:03.89' },
              { event: '200 Fly', time: '2:23.99' },
              { event: '100 IM', time: '1:04.99' },
              { event: '200 IM', time: '2:19.99' }
            ]
          },
		  {
            sex: 'boys',
            age: '12',
            events: [
              { event: '50 Fr', time: '26.19' },
              { event: '100 Fr', time: '56.39' },
              { event: '200 Fr', time: '2:03.49' },
              { event: '500 Fr', time: '5:31.39' },
              { event: '50 Bk', time: '30.29' },
              { event: '100 Bk', time: '1:05.49' },
              { event: '200 Bk', time: '2:19.39' },
              { event: '50 Br', time: '33.89' },
              { event: '100 Br', time: '1:14.49' },
              { event: '200 Br', time: '2:42.49' },
              { event: '50 Fly', time: '28.79' },
              { event: '100 Fly', time: '1:03.89' },
              { event: '200 Fly', time: '2:23.99' },
              { event: '100 IM', time: '1:04.99' },
              { event: '200 IM', time: '2:19.99' }
            ]
          },
          {
            sex: 'boys',
            age: '13',
            events: [
              { event: '50 Fr', time: '23.29' },
              { event: '100 Fr', time: '50.29' },
              { event: '200 Fr', time: '1:50.19' },
              { event: '500 Fr', time: '4:57.39' },
              { event: '1000 Fr', time: '10:23.19' },
              { event: '1650 Fr', time: '17:25.49' },
              { event: '100 Bk', time: '56.59' },
              { event: '200 Bk', time: '2:03.29' },
              { event: '100 Br', time: '1:04.69' },
              { event: '200 Br', time: '2:18.39' },
              { event: '100 Fly', time: '55.89' },
              { event: '200 Fly', time: '2:03.99' },
              { event: '200 IM', time: '2:04.69' },
              { event: '400 IM', time: '4:26.29' }
            ]
          },
		  {
            sex: 'boys',
            age: '14',
            events: [
              { event: '50 Fr', time: '23.29' },
              { event: '100 Fr', time: '50.29' },
              { event: '200 Fr', time: '1:50.19' },
              { event: '500 Fr', time: '4:57.39' },
              { event: '1000 Fr', time: '10:23.19' },
              { event: '1650 Fr', time: '17:25.49' },
              { event: '100 Bk', time: '56.59' },
              { event: '200 Bk', time: '2:03.29' },
              { event: '100 Br', time: '1:04.69' },
              { event: '200 Br', time: '2:18.39' },
              { event: '100 Fly', time: '55.89' },
              { event: '200 Fly', time: '2:03.99' },
              { event: '200 IM', time: '2:04.69' },
              { event: '400 IM', time: '4:26.29' }
            ]
          }
        ]
      }
    ]
  }
];