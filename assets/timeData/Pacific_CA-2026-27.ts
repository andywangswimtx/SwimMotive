/**
 * Pacific Swimming 2026-2027 Age Group Championship Time Standards
 * Source: Pacific_CA-2026-27.pdf
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

export const PACIFIC_AGC_STANDARDS_2026_2027: CourseTimeStandards[] = [
  {
    course: 'lcm',
    standards: [
      {
        sex: 'girls',
        age: '10&U',
        events: [
          {
            event: '50 Fr',
            time: ':35.99'
          },
          {
            event: '100 Fr',
            time: '1:20.89'
          },
          {
            event: '200 Fr',
            time: '2:57.29'
          },
          {
            event: '400 Fr',
            time: '6:07.89'
          },
          {
            event: '50 Bk',
            time: ':43.29'
          },
          {
            event: '100 Bk',
            time: '1:33.59'
          },
          {
            event: '50 Br',
            time: ':47.89'
          },
          {
            event: '100 Br',
            time: '1:44.89'
          },
          {
            event: '50 Fly',
            time: ':40.79'
          },
          {
            event: '100 Fly',
            time: '1:36.29'
          },
          {
            event: '200 Im',
            time: '3:18.99'
          }
        ]
      },
      {
        sex: 'girls',
        age: '11',
        events: [
          {
            event: '50 Fr',
            time: ':34.19'
          },
          {
            event: '100 Fr',
            time: '1:14.69'
          },
          {
            event: '200 Fr',
            time: '2:44.69'
          },
          {
            event: '400 Fr',
            time: '5:46.49'
          },
          {
            event: '800 Fr',
            time: '12:13.69'
          },
          {
            event: '1500 Fr',
            time: '23:37.59'
          },
          {
            event: '50 Bk',
            time: ':39.79'
          },
          {
            event: '100 Bk',
            time: '1:27.19'
          },
          {
            event: '200 Bk',
            time: '3:06.19'
          },
          {
            event: '50 Br',
            time: ':44.49'
          },
          {
            event: '100 Br',
            time: '1:38.49'
          },
          {
            event: '200 Br',
            time: '3:31.89'
          },
          {
            event: '50 Fly',
            time: ':37.19'
          },
          {
            event: '100 Fly',
            time: '1:25.69'
          },
          {
            event: '200 Fly',
            time: '3:12.59'
          },
          {
            event: '200 Im',
            time: '3:06.19'
          },
          {
            event: '400 Im',
            time: '6:38.09'
          }
        ]
      },
      {
        sex: 'girls',
        age: '12',
        events: [
          {
            event: '50 Fr',
            time: ':31.89'
          },
          {
            event: '100 Fr',
            time: '1:09.49'
          },
          {
            event: '200 Fr',
            time: '2:31.79'
          },
          {
            event: '400 Fr',
            time: '5:18.49'
          },
          {
            event: '800 Fr',
            time: '11:09.99'
          },
          {
            event: '1500 Fr',
            time: '21:35.89'
          },
          {
            event: '50 Bk',
            time: ':37.19'
          },
          {
            event: '100 Bk',
            time: '1:20.09'
          },
          {
            event: '200 Bk',
            time: '2:51.49'
          },
          {
            event: '50 Br',
            time: ':41.09'
          },
          {
            event: '100 Br',
            time: '1:30.49'
          },
          {
            event: '200 Br',
            time: '3:17.09'
          },
          {
            event: '50 Fly',
            time: ':34.29'
          },
          {
            event: '100 Fly',
            time: '1:18.69'
          },
          {
            event: '200 Fly',
            time: '2:56.79'
          },
          {
            event: '200 Im',
            time: '2:52.89'
          },
          {
            event: '400 Im',
            time: '6:08.19'
          }
        ]
      },
      {
        sex: 'girls',
        age: '13',
        events: [
          {
            event: '50 Fr',
            time: ':30.69'
          },
          {
            event: '100 Fr',
            time: '1:06.39'
          },
          {
            event: '200 Fr',
            time: '2:22.99'
          },
          {
            event: '400 Fr',
            time: '5:10.39'
          },
          {
            event: '800 Fr',
            time: '10:40.89'
          },
          {
            event: '1500 Fr',
            time: '20:32.69'
          },
          {
            event: '50 Bk',
            time: ':35.49'
          },
          {
            event: '100 Bk',
            time: '1:16.89'
          },
          {
            event: '200 Bk',
            time: '2:45.19'
          },
          {
            event: '50 Br',
            time: ':39.79'
          },
          {
            event: '100 Br',
            time: '1:26.49'
          },
          {
            event: '200 Br',
            time: '3:08.49'
          },
          {
            event: '50 Fly',
            time: ':33.39'
          },
          {
            event: '100 Fly',
            time: '1:14.29'
          },
          {
            event: '200 Fly',
            time: '2:44.09'
          },
          {
            event: '200 Im',
            time: '2:41.99'
          },
          {
            event: '400 Im',
            time: '5:54.29'
          }
        ]
      },
      {
        sex: 'girls',
        age: '14',
        events: [
          {
            event: '50 Fr',
            time: ':30.09'
          },
          {
            event: '100 Fr',
            time: '1:04.69'
          },
          {
            event: '200 Fr',
            time: '2:20.39'
          },
          {
            event: '400 Fr',
            time: '5:00.29'
          },
          {
            event: '800 Fr',
            time: '10:22.19'
          },
          {
            event: '1500 Fr',
            time: '19:37.59'
          },
          {
            event: '50 Bk',
            time: ':34.59'
          },
          {
            event: '100 Bk',
            time: '1:13.79'
          },
          {
            event: '200 Bk',
            time: '2:38.19'
          },
          {
            event: '50 Br',
            time: ':38.79'
          },
          {
            event: '100 Br',
            time: '1:24.79'
          },
          {
            event: '200 Br',
            time: '3:04.99'
          },
          {
            event: '50 Fly',
            time: ':32.39'
          },
          {
            event: '100 Fly',
            time: '1:12.69'
          },
          {
            event: '200 Fly',
            time: '2:41.89'
          },
          {
            event: '200 Im',
            time: '2:38.69'
          },
          {
            event: '400 Im',
            time: '5:44.39'
          }
        ]
      },
      {
        sex: 'boys',
        age: '10&U',
        events: [
          {
            event: '50 Fr',
            time: ':35.49'
          },
          {
            event: '100 Fr',
            time: '1:19.49'
          },
          {
            event: '200 Fr',
            time: '2:51.49'
          },
          {
            event: '400 Fr',
            time: '6:02.99'
          },
          {
            event: '50 Bk',
            time: ':42.99'
          },
          {
            event: '100 Bk',
            time: '1:31.79'
          },
          {
            event: '50 Br',
            time: ':47.39'
          },
          {
            event: '100 Br',
            time: '1:43.69'
          },
          {
            event: '50 Fly',
            time: ':40.19'
          },
          {
            event: '100 Fly',
            time: '1:35.19'
          },
          {
            event: '200 Im',
            time: '3:16.19'
          }
        ]
      },
      {
        sex: 'boys',
        age: '11',
        events: [
          {
            event: '50 Fr',
            time: ':34.19'
          },
          {
            event: '100 Fr',
            time: '1:15.29'
          },
          {
            event: '200 Fr',
            time: '2:43.39'
          },
          {
            event: '400 Fr',
            time: '5:43.79'
          },
          {
            event: '800 Fr',
            time: '12:04.79'
          },
          {
            event: '1500 Fr',
            time: '23:18.89'
          },
          {
            event: '50 Bk',
            time: ':40.29'
          },
          {
            event: '100 Bk',
            time: '1:27.69'
          },
          {
            event: '200 Bk',
            time: '3:05.19'
          },
          {
            event: '50 Br',
            time: ':45.09'
          },
          {
            event: '100 Br',
            time: '1:38.59'
          },
          {
            event: '200 Br',
            time: '3:30.19'
          },
          {
            event: '50 Fly',
            time: ':37.99'
          },
          {
            event: '100 Fly',
            time: '1:25.99'
          },
          {
            event: '200 Fly',
            time: '3:12.59'
          },
          {
            event: '200 Im',
            time: '3:05.49'
          },
          {
            event: '400 Im',
            time: '6:37.29'
          }
        ]
      },
      {
        sex: 'boys',
        age: '12',
        events: [
          {
            event: '50 Fr',
            time: ':31.19'
          },
          {
            event: '100 Fr',
            time: '1:08.09'
          },
          {
            event: '200 Fr',
            time: '2:28.79'
          },
          {
            event: '400 Fr',
            time: '5:11.49'
          },
          {
            event: '800 Fr',
            time: '10:58.49'
          },
          {
            event: '1500 Fr',
            time: '20:58.29'
          },
          {
            event: '50 Bk',
            time: ':36.79'
          },
          {
            event: '100 Bk',
            time: '1:19.19'
          },
          {
            event: '200 Bk',
            time: '2:47.59'
          },
          {
            event: '50 Br',
            time: ':40.49'
          },
          {
            event: '100 Br',
            time: '1:28.49'
          },
          {
            event: '200 Br',
            time: '3:10.69'
          },
          {
            event: '50 Fly',
            time: ':34.39'
          },
          {
            event: '100 Fly',
            time: '1:17.09'
          },
          {
            event: '200 Fly',
            time: '2:50.39'
          },
          {
            event: '200 Im',
            time: '2:49.79'
          },
          {
            event: '400 Im',
            time: '5:56.89'
          }
        ]
      },
      {
        sex: 'boys',
        age: '13',
        events: [
          {
            event: '50 Fr',
            time: ':28.79'
          },
          {
            event: '100 Fr',
            time: '1:02.69'
          },
          {
            event: '200 Fr',
            time: '2:17.29'
          },
          {
            event: '400 Fr',
            time: '4:58.89'
          },
          {
            event: '800 Fr',
            time: '10:23.29'
          },
          {
            event: '1500 Fr',
            time: '19:44.09'
          },
          {
            event: '50 Bk',
            time: ':33.39'
          },
          {
            event: '100 Bk',
            time: '1:12.89'
          },
          {
            event: '200 Bk',
            time: '2:38.29'
          },
          {
            event: '50 Br',
            time: ':37.19'
          },
          {
            event: '100 Br',
            time: '1:21.29'
          },
          {
            event: '200 Br',
            time: '2:58.69'
          },
          {
            event: '50 Fly',
            time: ':31.69'
          },
          {
            event: '100 Fly',
            time: '1:10.09'
          },
          {
            event: '200 Fly',
            time: '2:39.99'
          },
          {
            event: '200 Im',
            time: '2:33.69'
          },
          {
            event: '400 Im',
            time: '5:38.89'
          }
        ]
      },
      {
        sex: 'boys',
        age: '14',
        events: [
          {
            event: '50 Fr',
            time: ':27.59'
          },
          {
            event: '100 Fr',
            time: ':59.89'
          },
          {
            event: '200 Fr',
            time: '2:13.39'
          },
          {
            event: '400 Fr',
            time: '4:43.19'
          },
          {
            event: '800 Fr',
            time: '9:58.19'
          },
          {
            event: '1500 Fr',
            time: '18:58.19'
          },
          {
            event: '50 Bk',
            time: ':32.09'
          },
          {
            event: '100 Bk',
            time: '1:08.89'
          },
          {
            event: '200 Bk',
            time: '2:34.39'
          },
          {
            event: '50 Br',
            time: ':35.79'
          },
          {
            event: '100 Br',
            time: '1:17.99'
          },
          {
            event: '200 Br',
            time: '2:53.79'
          },
          {
            event: '50 Fly',
            time: ':30.19'
          },
          {
            event: '100 Fly',
            time: '1:08.09'
          },
          {
            event: '200 Fly',
            time: '2:32.99'
          },
          {
            event: '200 Im',
            time: '2:29.89'
          },
          {
            event: '400 Im',
            time: '5:31.59'
          }
        ]
      }
    ]
  },
  {
    course: 'scm',
    standards: [
      {
        sex: 'girls',
        age: '10&U',
        events: [
          {
            event: '50 Fr',
            time: ':35.09'
          },
          {
            event: '100 Fr',
            time: '1:18.59'
          },
          {
            event: '200 Fr',
            time: '2:53.59'
          },
          {
            event: '400 Fr',
            time: '5:57.19'
          },
          {
            event: '50 Bk',
            time: ':40.99'
          },
          {
            event: '100 Bk',
            time: '1:28.59'
          },
          {
            event: '50 Br',
            time: ':46.59'
          },
          {
            event: '100 Br',
            time: '1:41.49'
          },
          {
            event: '50 Fly',
            time: ':39.99'
          },
          {
            event: '100 Fly',
            time: '1:33.89'
          },
          {
            event: '100 Im',
            time: '1:28.49'
          },
          {
            event: '200 Im',
            time: '3:12.39'
          }
        ]
      },
      {
        sex: 'girls',
        age: '11',
        events: [
          {
            event: '50 Fr',
            time: ':33.19'
          },
          {
            event: '100 Fr',
            time: '1:12.29'
          },
          {
            event: '200 Fr',
            time: '2:38.59'
          },
          {
            event: '400 Fr',
            time: '5:39.49'
          },
          {
            event: '800 Fr',
            time: '11:45.29'
          },
          {
            event: '1500 Fr',
            time: '22:32.19'
          },
          {
            event: '50 Bk',
            time: ':37.99'
          },
          {
            event: '100 Bk',
            time: '1:21.89'
          },
          {
            event: '200 Bk',
            time: '2:56.89'
          },
          {
            event: '50 Br',
            time: ':42.99'
          },
          {
            event: '100 Br',
            time: '1:34.19'
          },
          {
            event: '200 Br',
            time: '3:22.59'
          },
          {
            event: '50 Fly',
            time: ':36.39'
          },
          {
            event: '100 Fly',
            time: '1:23.19'
          },
          {
            event: '200 Fly',
            time: '3:09.99'
          },
          {
            event: '100 Im',
            time: '1:23.19'
          },
          {
            event: '200 Im',
            time: '2:58.59'
          },
          {
            event: '400 Im',
            time: '6:21.59'
          }
        ]
      },
      {
        sex: 'girls',
        age: '12',
        events: [
          {
            event: '50 Fr',
            time: ':30.89'
          },
          {
            event: '100 Fr',
            time: '1:07.89'
          },
          {
            event: '200 Fr',
            time: '2:28.59'
          },
          {
            event: '400 Fr',
            time: '5:11.69'
          },
          {
            event: '800 Fr',
            time: '10:45.09'
          },
          {
            event: '1500 Fr',
            time: '20:32.79'
          },
          {
            event: '50 Bk',
            time: ':35.49'
          },
          {
            event: '100 Bk',
            time: '1:17.39'
          },
          {
            event: '200 Bk',
            time: '2:44.89'
          },
          {
            event: '50 Br',
            time: ':40.09'
          },
          {
            event: '100 Br',
            time: '1:27.19'
          },
          {
            event: '200 Br',
            time: '3:13.09'
          },
          {
            event: '50 Fly',
            time: ':33.79'
          },
          {
            event: '100 Fly',
            time: '1:15.89'
          },
          {
            event: '200 Fly',
            time: '2:53.99'
          },
          {
            event: '100 Im',
            time: '1:17.29'
          },
          {
            event: '200 Im',
            time: '2:49.69'
          },
          {
            event: '400 Im',
            time: '6:01.79'
          }
        ]
      },
      {
        sex: 'girls',
        age: '13',
        events: [
          {
            event: '50 Fr',
            time: ':29.89'
          },
          {
            event: '100 Fr',
            time: '1:04.59'
          },
          {
            event: '200 Fr',
            time: '2:19.79'
          },
          {
            event: '400 Fr',
            time: '5:03.39'
          },
          {
            event: '800 Fr',
            time: '10:25.59'
          },
          {
            event: '1500 Fr',
            time: '19:50.69'
          },
          {
            event: '50 Bk',
            time: ':33.29'
          },
          {
            event: '100 Bk',
            time: '1:15.69'
          },
          {
            event: '200 Bk',
            time: '2:37.69'
          },
          {
            event: '50 Br',
            time: ':38.59'
          },
          {
            event: '100 Br',
            time: '1:24.49'
          },
          {
            event: '200 Br',
            time: '3:04.49'
          },
          {
            event: '50 Fly',
            time: ':32.89'
          },
          {
            event: '100 Fly',
            time: '1:12.29'
          },
          {
            event: '200 Fly',
            time: '2:40.69'
          },
          {
            event: '200 Im',
            time: '2:38.79'
          },
          {
            event: '400 Im',
            time: '5:42.49'
          }
        ]
      },
      {
        sex: 'girls',
        age: '14',
        events: [
          {
            event: '50 Fr',
            time: ':29.19'
          },
          {
            event: '100 Fr',
            time: '1:03.09'
          },
          {
            event: '200 Fr',
            time: '2:17.39'
          },
          {
            event: '400 Fr',
            time: '4:54.49'
          },
          {
            event: '800 Fr',
            time: '10:10.19'
          },
          {
            event: '1500 Fr',
            time: '19:21.59'
          },
          {
            event: '50 Bk',
            time: ':32.79'
          },
          {
            event: '100 Bk',
            time: '1:12.69'
          },
          {
            event: '200 Bk',
            time: '2:34.39'
          },
          {
            event: '50 Br',
            time: ':37.69'
          },
          {
            event: '100 Br',
            time: '1:22.59'
          },
          {
            event: '200 Br',
            time: '3:00.99'
          },
          {
            event: '50 Fly',
            time: ':31.89'
          },
          {
            event: '100 Fly',
            time: '1:10.89'
          },
          {
            event: '200 Fly',
            time: '2:39.39'
          },
          {
            event: '200 Im',
            time: '2:34.49'
          },
          {
            event: '400 Im',
            time: '5:33.29'
          }
        ]
      },
      {
        sex: 'boys',
        age: '10&U',
        events: [
          {
            event: '50 Fr',
            time: ':34.19'
          },
          {
            event: '100 Fr',
            time: '1:16.99'
          },
          {
            event: '200 Fr',
            time: '2:46.59'
          },
          {
            event: '400 Fr',
            time: '5:51.09'
          },
          {
            event: '50 Bk',
            time: ':40.99'
          },
          {
            event: '100 Bk',
            time: '1:27.99'
          },
          {
            event: '50 Br',
            time: ':46.19'
          },
          {
            event: '100 Br',
            time: '1:39.29'
          },
          {
            event: '50 Fly',
            time: ':39.09'
          },
          {
            event: '100 Fly',
            time: '1:32.29'
          },
          {
            event: '100 Im',
            time: '1:27.19'
          },
          {
            event: '200 Im',
            time: '3:10.89'
          }
        ]
      },
      {
        sex: 'boys',
        age: '11',
        events: [
          {
            event: '50 Fr',
            time: ':32.89'
          },
          {
            event: '100 Fr',
            time: '1:12.69'
          },
          {
            event: '200 Fr',
            time: '2:39.59'
          },
          {
            event: '400 Fr',
            time: '5:34.69'
          },
          {
            event: '800 Fr',
            time: '11:39.89'
          },
          {
            event: '1500 Fr',
            time: '22:20.79'
          },
          {
            event: '50 Bk',
            time: ':38.59'
          },
          {
            event: '100 Bk',
            time: '1:22.79'
          },
          {
            event: '200 Bk',
            time: '2:56.09'
          },
          {
            event: '50 Br',
            time: ':43.29'
          },
          {
            event: '100 Br',
            time: '1:32.69'
          },
          {
            event: '200 Br',
            time: '3:20.29'
          },
          {
            event: '50 Fly',
            time: ':36.99'
          },
          {
            event: '100 Fly',
            time: '1:23.39'
          },
          {
            event: '200 Fly',
            time: '3:09.99'
          },
          {
            event: '100 Im',
            time: '1:22.59'
          },
          {
            event: '200 Im',
            time: '2:59.09'
          },
          {
            event: '400 Im',
            time: '6:21.99'
          }
        ]
      },
      {
        sex: 'boys',
        age: '12',
        events: [
          {
            event: '50 Fr',
            time: ':29.99'
          },
          {
            event: '100 Fr',
            time: '1:06.49'
          },
          {
            event: '200 Fr',
            time: '2:25.59'
          },
          {
            event: '400 Fr',
            time: '5:07.09'
          },
          {
            event: '800 Fr',
            time: '10:33.79'
          },
          {
            event: '1500 Fr',
            time: '20:06.19'
          },
          {
            event: '50 Bk',
            time: ':35.19'
          },
          {
            event: '100 Bk',
            time: '1:17.99'
          },
          {
            event: '200 Bk',
            time: '2:45.19'
          },
          {
            event: '50 Br',
            time: ':39.49'
          },
          {
            event: '100 Br',
            time: '1:26.49'
          },
          {
            event: '200 Br',
            time: '3:06.69'
          },
          {
            event: '50 Fly',
            time: ':33.69'
          },
          {
            event: '100 Fly',
            time: '1:14.89'
          },
          {
            event: '200 Fly',
            time: '2:47.59'
          },
          {
            event: '100 Im',
            time: '1:15.19'
          },
          {
            event: '200 Im',
            time: '2:46.69'
          },
          {
            event: '400 Im',
            time: '5:48.49'
          }
        ]
      },
      {
        sex: 'boys',
        age: '13',
        events: [
          {
            event: '50 Fr',
            time: ':27.89'
          },
          {
            event: '100 Fr',
            time: '1:01.49'
          },
          {
            event: '200 Fr',
            time: '2:14.09'
          },
          {
            event: '400 Fr',
            time: '4:48.99'
          },
          {
            event: '800 Fr',
            time: '10:00.99'
          },
          {
            event: '1500 Fr',
            time: '19:02.49'
          },
          {
            event: '50 Bk',
            time: ':31.79'
          },
          {
            event: '100 Bk',
            time: '1:09.09'
          },
          {
            event: '200 Bk',
            time: '2:35.89'
          },
          {
            event: '50 Br',
            time: ':36.29'
          },
          {
            event: '100 Br',
            time: '1:17.69'
          },
          {
            event: '200 Br',
            time: '2:54.69'
          },
          {
            event: '50 Fly',
            time: ':31.09'
          },
          {
            event: '100 Fly',
            time: '1:08.09'
          },
          {
            event: '200 Fly',
            time: '2:37.19'
          },
          {
            event: '200 Im',
            time: '2:30.49'
          },
          {
            event: '400 Im',
            time: '5:24.49'
          }
        ]
      },
      {
        sex: 'boys',
        age: '14',
        events: [
          {
            event: '50 Fr',
            time: ':26.69'
          },
          {
            event: '100 Fr',
            time: ':59.19'
          },
          {
            event: '200 Fr',
            time: '2:10.19'
          },
          {
            event: '400 Fr',
            time: '4:36.09'
          },
          {
            event: '800 Fr',
            time: '9:45.39'
          },
          {
            event: '1500 Fr',
            time: '18:34.19'
          },
          {
            event: '50 Bk',
            time: ':30.19'
          },
          {
            event: '100 Bk',
            time: '1:06.99'
          },
          {
            event: '200 Bk',
            time: '2:31.99'
          },
          {
            event: '50 Br',
            time: ':34.49'
          },
          {
            event: '100 Br',
            time: '1:13.79'
          },
          {
            event: '200 Br',
            time: '2:49.79'
          },
          {
            event: '50 Fly',
            time: ':29.69'
          },
          {
            event: '100 Fly',
            time: '1:06.49'
          },
          {
            event: '200 Fly',
            time: '2:30.19'
          },
          {
            event: '200 Im',
            time: '2:26.69'
          },
          {
            event: '400 Im',
            time: '5:19.49'
          }
        ]
      }
    ]
  },
  {
    course: 'scy',
    standards: [
      {
        sex: 'girls',
        age: '10&U',
        events: [
          {
            event: '50 Fr',
            time: ':31.69'
          },
          {
            event: '100 Fr',
            time: '1:10.49'
          },
          {
            event: '200 Fr',
            time: '2:37.09'
          },
          {
            event: '500 Fr',
            time: '6:48.09'
          },
          {
            event: '50 Bk',
            time: ':36.69'
          },
          {
            event: '100 Bk',
            time: '1:20.09'
          },
          {
            event: '50 Br',
            time: ':42.09'
          },
          {
            event: '100 Br',
            time: '1:32.19'
          },
          {
            event: '50 Fly',
            time: ':36.19'
          },
          {
            event: '100 Fly',
            time: '1:24.29'
          },
          {
            event: '100 Im',
            time: '1:20.09'
          },
          {
            event: '200 Im',
            time: '2:52.39'
          }
        ]
      },
      {
        sex: 'girls',
        age: '11',
        events: [
          {
            event: '50 Fr',
            time: ':30.09'
          },
          {
            event: '100 Fr',
            time: '1:05.49'
          },
          {
            event: '200 Fr',
            time: '2:22.09'
          },
          {
            event: '500 Fr',
            time: '6:27.89'
          },
          {
            event: '1000 Fr',
            time: '13:25.59'
          },
          {
            event: '1650 Fr',
            time: '22:38.49'
          },
          {
            event: '50 Bk',
            time: ':33.99'
          },
          {
            event: '100 Bk',
            time: '1:14.79'
          },
          {
            event: '200 Bk',
            time: '2:39.89'
          },
          {
            event: '50 Br',
            time: ':38.79'
          },
          {
            event: '100 Br',
            time: '1:24.79'
          },
          {
            event: '200 Br',
            time: '3:03.19'
          },
          {
            event: '50 Fly',
            time: ':32.59'
          },
          {
            event: '100 Fly',
            time: '1:15.29'
          },
          {
            event: '200 Fly',
            time: '2:51.09'
          },
          {
            event: '100 Im',
            time: '1:15.29'
          },
          {
            event: '200 Im',
            time: '2:41.49'
          },
          {
            event: '400 Im',
            time: '5:41.79'
          }
        ]
      },
      {
        sex: 'girls',
        age: '12',
        events: [
          {
            event: '50 Fr',
            time: ':27.89'
          },
          {
            event: '100 Fr',
            time: '1:00.49'
          },
          {
            event: '200 Fr',
            time: '2:13.39'
          },
          {
            event: '500 Fr',
            time: '5:54.89'
          },
          {
            event: '1000 Fr',
            time: '12:16.69'
          },
          {
            event: '1650 Fr',
            time: '20:39.39'
          },
          {
            event: '50 Bk',
            time: ':31.99'
          },
          {
            event: '100 Bk',
            time: '1:09.39'
          },
          {
            event: '200 Bk',
            time: '2:30.89'
          },
          {
            event: '50 Br',
            time: ':36.09'
          },
          {
            event: '100 Br',
            time: '1:18.19'
          },
          {
            event: '200 Br',
            time: '2:52.19'
          },
          {
            event: '50 Fly',
            time: ':30.59'
          },
          {
            event: '100 Fly',
            time: '1:08.09'
          },
          {
            event: '200 Fly',
            time: '2:35.79'
          },
          {
            event: '100 Im',
            time: '1:09.99'
          },
          {
            event: '200 Im',
            time: '2:28.39'
          },
          {
            event: '400 Im',
            time: '5:22.39'
          }
        ]
      },
      {
        sex: 'girls',
        age: '13',
        events: [
          {
            event: '50 Fr',
            time: ':26.79'
          },
          {
            event: '100 Fr',
            time: ':58.29'
          },
          {
            event: '200 Fr',
            time: '2:06.89'
          },
          {
            event: '500 Fr',
            time: '5:46.49'
          },
          {
            event: '1000 Fr',
            time: '11:51.69'
          },
          {
            event: '1650 Fr',
            time: '19:57.19'
          },
          {
            event: '50 Bk',
            time: ':30.19'
          },
          {
            event: '100 Bk',
            time: '1:06.29'
          },
          {
            event: '200 Bk',
            time: '2:22.59'
          },
          {
            event: '50 Br',
            time: ':34.99'
          },
          {
            event: '100 Br',
            time: '1:14.49'
          },
          {
            event: '200 Br',
            time: '2:41.79'
          },
          {
            event: '50 Fly',
            time: ':29.69'
          },
          {
            event: '100 Fly',
            time: '1:04.79'
          },
          {
            event: '200 Fly',
            time: '2:25.39'
          },
          {
            event: '200 Im',
            time: '2:22.99'
          },
          {
            event: '400 Im',
            time: '5:06.79'
          }
        ]
      },
      {
        sex: 'girls',
        age: '14',
        events: [
          {
            event: '50 Fr',
            time: ':26.09'
          },
          {
            event: '100 Fr',
            time: ':56.79'
          },
          {
            event: '200 Fr',
            time: '2:03.29'
          },
          {
            event: '500 Fr',
            time: '5:36.49'
          },
          {
            event: '1000 Fr',
            time: '11:37.19'
          },
          {
            event: '1650 Fr',
            time: '19:14.49'
          },
          {
            event: '50 Bk',
            time: ':29.09'
          },
          {
            event: '100 Bk',
            time: '1:03.79'
          },
          {
            event: '200 Bk',
            time: '2:17.89'
          },
          {
            event: '50 Br',
            time: ':34.09'
          },
          {
            event: '100 Br',
            time: '1:13.29'
          },
          {
            event: '200 Br',
            time: '2:39.39'
          },
          {
            event: '50 Fly',
            time: ':29.09'
          },
          {
            event: '100 Fly',
            time: '1:02.79'
          },
          {
            event: '200 Fly',
            time: '2:23.49'
          },
          {
            event: '200 Im',
            time: '2:17.39'
          },
          {
            event: '400 Im',
            time: '4:57.19'
          }
        ]
      },
      {
        sex: 'boys',
        age: '10&U',
        events: [
          {
            event: '50 Fr',
            time: ':30.99'
          },
          {
            event: '100 Fr',
            time: '1:09.69'
          },
          {
            event: '200 Fr',
            time: '2:29.39'
          },
          {
            event: '500 Fr',
            time: '6:40.99'
          },
          {
            event: '50 Bk',
            time: ':36.99'
          },
          {
            event: '100 Bk',
            time: '1:18.89'
          },
          {
            event: '50 Br',
            time: ':41.39'
          },
          {
            event: '100 Br',
            time: '1:28.99'
          },
          {
            event: '50 Fly',
            time: ':35.39'
          },
          {
            event: '100 Fly',
            time: '1:22.69'
          },
          {
            event: '100 Im',
            time: '1:18.89'
          },
          {
            event: '200 Im',
            time: '2:50.99'
          }
        ]
      },
      {
        sex: 'boys',
        age: '11',
        events: [
          {
            event: '50 Fr',
            time: ':29.79'
          },
          {
            event: '100 Fr',
            time: '1:05.79'
          },
          {
            event: '200 Fr',
            time: '2:22.79'
          },
          {
            event: '500 Fr',
            time: '6:18.39'
          },
          {
            event: '1000 Fr',
            time: '13:19.59'
          },
          {
            event: '1650 Fr',
            time: '22:28.09'
          },
          {
            event: '50 Bk',
            time: ':34.69'
          },
          {
            event: '100 Bk',
            time: '1:14.99'
          },
          {
            event: '200 Bk',
            time: '2:40.19'
          },
          {
            event: '50 Br',
            time: ':38.99'
          },
          {
            event: '100 Br',
            time: '1:24.39'
          },
          {
            event: '200 Br',
            time: '3:01.09'
          },
          {
            event: '50 Fly',
            time: ':33.39'
          },
          {
            event: '100 Fly',
            time: '1:15.29'
          },
          {
            event: '200 Fly',
            time: '2:50.99'
          },
          {
            event: '100 Im',
            time: '1:15.39'
          },
          {
            event: '200 Im',
            time: '2:40.89'
          },
          {
            event: '400 Im',
            time: '5:45.49'
          }
        ]
      },
      {
        sex: 'boys',
        age: '12',
        events: [
          {
            event: '50 Fr',
            time: ':27.19'
          },
          {
            event: '100 Fr',
            time: ':59.29'
          },
          {
            event: '200 Fr',
            time: '2:10.39'
          },
          {
            event: '500 Fr',
            time: '5:50.89'
          },
          {
            event: '1000 Fr',
            time: '12:03.89'
          },
          {
            event: '1650 Fr',
            time: '20:12.79'
          },
          {
            event: '50 Bk',
            time: ':31.89'
          },
          {
            event: '100 Bk',
            time: '1:08.09'
          },
          {
            event: '200 Bk',
            time: '2:28.79'
          },
          {
            event: '50 Br',
            time: ':35.49'
          },
          {
            event: '100 Br',
            time: '1:16.59'
          },
          {
            event: '200 Br',
            time: '2:47.99'
          },
          {
            event: '50 Fly',
            time: ':30.49'
          },
          {
            event: '100 Fly',
            time: '1:07.69'
          },
          {
            event: '200 Fly',
            time: '2:29.79'
          },
          {
            event: '100 Im',
            time: '1:08.69'
          },
          {
            event: '200 Im',
            time: '2:28.49'
          },
          {
            event: '400 Im',
            time: '5:15.29'
          }
        ]
      },
      {
        sex: 'boys',
        age: '13',
        events: [
          {
            event: '50 Fr',
            time: ':25.29'
          },
          {
            event: '100 Fr',
            time: ':54.89'
          },
          {
            event: '200 Fr',
            time: '1:59.89'
          },
          {
            event: '500 Fr',
            time: '5:30.59'
          },
          {
            event: '1000 Fr',
            time: '11:26.49'
          },
          {
            event: '1650 Fr',
            time: '19:08.79'
          },
          {
            event: '50 Bk',
            time: ':28.79'
          },
          {
            event: '100 Bk',
            time: '1:02.39'
          },
          {
            event: '200 Bk',
            time: '2:16.79'
          },
          {
            event: '50 Br',
            time: ':32.79'
          },
          {
            event: '100 Br',
            time: '1:11.09'
          },
          {
            event: '200 Br',
            time: '2:35.99'
          },
          {
            event: '50 Fly',
            time: ':28.09'
          },
          {
            event: '100 Fly',
            time: '1:01.09'
          },
          {
            event: '200 Fly',
            time: '2:19.09'
          },
          {
            event: '200 Im',
            time: '2:15.49'
          },
          {
            event: '400 Im',
            time: '4:53.49'
          }
        ]
      },
      {
        sex: 'boys',
        age: '14',
        events: [
          {
            event: '50 Fr',
            time: ':24.19'
          },
          {
            event: '100 Fr',
            time: ':52.89'
          },
          {
            event: '200 Fr',
            time: '1:55.79'
          },
          {
            event: '500 Fr',
            time: '5:16.99'
          },
          {
            event: '1000 Fr',
            time: '10:57.79'
          },
          {
            event: '1650 Fr',
            time: '18:20.69'
          },
          {
            event: '50 Bk',
            time: ':27.29'
          },
          {
            event: '100 Bk',
            time: '1:00.39'
          },
          {
            event: '200 Bk',
            time: '2:11.79'
          },
          {
            event: '50 Br',
            time: ':31.29'
          },
          {
            event: '100 Br',
            time: '1:07.29'
          },
          {
            event: '200 Br',
            time: '2:26.99'
          },
          {
            event: '50 Fly',
            time: ':26.89'
          },
          {
            event: '100 Fly',
            time: ':58.99'
          },
          {
            event: '200 Fly',
            time: '2:12.39'
          },
          {
            event: '200 Im',
            time: '2:10.19'
          },
          {
            event: '400 Im',
            time: '4:40.19'
          }
        ]
      }
    ]
  }
];
