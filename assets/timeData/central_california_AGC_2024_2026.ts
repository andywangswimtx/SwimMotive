/**
 * Central California Swimming 2024-2026 Age Group Championship Time Standards
 */

export type PoolCourse = 'lcm' | 'scm' | 'scy';
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

export const AGE_GROUP_CHAMPS_STANDARDS: CourseTimeStandards[] = [
  {
    "course": "scy",
    "standards": [
      {
        "sex": "girls",
        "age": "9&U",
        "events": [
          { "event": "50 Freestyle", "time": "35.99" },
          { "event": "100 Freestyle", "time": "1:21.09" },
          { "event": "200 Freestyle", "time": "3:00.59" },
          { "event": "500 Freestyle", "time": "7:35.79" },
          { "event": "50 Backstroke", "time": "43.29" },
          { "event": "100 Backstroke", "time": "1:33.99" },
          { "event": "50 Breaststroke", "time": "48.69" },
          { "event": "100 Breaststroke", "time": "1:46.89" },
          { "event": "50 Butterfly", "time": "42.69" },
          { "event": "100 Butterfly", "time": "1:41.39" },
          { "event": "100 Individual Medley", "time": "1:33.19" },
          { "event": "200 Individual Medley", "time": "3:18.79" }
        ]
      },
      {
        "sex": "girls",
        "age": "10",
        "events": [
          { "event": "50 Freestyle", "time": "35.99" },
          { "event": "100 Freestyle", "time": "1:21.09" },
          { "event": "200 Freestyle", "time": "3:00.59" },
          { "event": "500 Freestyle", "time": "7:35.79" },
          { "event": "50 Backstroke", "time": "43.29" },
          { "event": "100 Backstroke", "time": "1:33.99" },
          { "event": "50 Breaststroke", "time": "48.69" },
          { "event": "100 Breaststroke", "time": "1:46.89" },
          { "event": "50 Butterfly", "time": "42.69" },
          { "event": "100 Butterfly", "time": "1:41.39" },
          { "event": "100 Individual Medley", "time": "1:33.19" },
          { "event": "200 Individual Medley", "time": "3:18.79" }
        ]
      },
      {
        "sex": "girls",
        "age": "11",
        "events": [
          { "event": "50 Freestyle", "time": "31.69" },
          { "event": "100 Freestyle", "time": "1:09.39" },
          { "event": "200 Freestyle", "time": "2:30.89" },
          { "event": "500 Freestyle", "time": "6:37.59" },
          { "event": "1000 Freestyle", "time": "13:41.49" },
          { "event": "1650 Freestyle", "time": "22:51.79" },
          { "event": "50 Backstroke", "time": "35.99" },
          { "event": "100 Backstroke", "time": "1:19.79" },
          { "event": "200 Backstroke", "time": "2:46.69" },
          { "event": "50 Breaststroke", "time": "40.89" },
          { "event": "100 Breaststroke", "time": "1:29.29" },
          { "event": "200 Breaststroke", "time": "3:10.99" },
          { "event": "50 Butterfly", "time": "34.29" },
          { "event": "100 Butterfly", "time": "1:18.89" },
          { "event": "200 Butterfly", "time": "2:50.29" },
          { "event": "100 Individual Medley", "time": "1:19.09" },
          { "event": "200 Individual Medley", "time": "2:50.69" },
          { "event": "400 Individual Medley", "time": "6:03.09" }
        ]
      },
      {
        "sex": "girls",
        "age": "12",
        "events": [
          { "event": "50 Freestyle", "time": "31.69" },
          { "event": "100 Freestyle", "time": "1:09.39" },
          { "event": "200 Freestyle", "time": "2:30.89" },
          { "event": "500 Freestyle", "time": "6:37.59" },
          { "event": "1000 Freestyle", "time": "13:41.49" },
          { "event": "1650 Freestyle", "time": "22:51.79" },
          { "event": "50 Backstroke", "time": "35.99" },
          { "event": "100 Backstroke", "time": "1:19.79" },
          { "event": "200 Backstroke", "time": "2:46.69" },
          { "event": "50 Breaststroke", "time": "40.89" },
          { "event": "100 Breaststroke", "time": "1:29.29" },
          { "event": "200 Breaststroke", "time": "3:10.99" },
          { "event": "50 Butterfly", "time": "34.29" },
          { "event": "100 Butterfly", "time": "1:18.89" },
          { "event": "200 Butterfly", "time": "2:50.29" },
          { "event": "100 Individual Medley", "time": "1:19.09" },
          { "event": "200 Individual Medley", "time": "2:50.69" },
          { "event": "400 Individual Medley", "time": "6:03.09" }
        ]
      },
      {
        "sex": "girls",
        "age": "13",
        "events": [
          { "event": "50 Freestyle", "time": "30.19" },
          { "event": "100 Freestyle", "time": "1:05.89" },
          { "event": "200 Freestyle", "time": "2:22.69" },
          { "event": "500 Freestyle", "time": "6:15.09" },
          { "event": "1000 Freestyle", "time": "12:54.59" },
          { "event": "1650 Freestyle", "time": "21:34.79" },
          { "event": "50 Backstroke", "time": "33.69" },
          { "event": "100 Backstroke", "time": "1:11.39" },
          { "event": "200 Backstroke", "time": "2:34.49" },
          { "event": "50 Breaststroke", "time": "39.09" },
          { "event": "100 Breaststroke", "time": "1:22.29" },
          { "event": "200 Breaststroke", "time": "2:57.39" },
          { "event": "50 Butterfly", "time": "33.29" },
          { "event": "100 Butterfly", "time": "1:11.29" },
          { "event": "200 Butterfly", "time": "2:38.99" },
          { "event": "200 Individual Medley", "time": "2:39.49" },
          { "event": "400 Individual Medley", "time": "5:39.69" }
        ]
      },
      {
        "sex": "girls",
        "age": "14",
        "events": [
          { "event": "50 Freestyle", "time": "30.19" },
          { "event": "100 Freestyle", "time": "1:05.89" },
          { "event": "200 Freestyle", "time": "2:22.69" },
          { "event": "500 Freestyle", "time": "6:15.09" },
          { "event": "1000 Freestyle", "time": "12:54.59" },
          { "event": "1650 Freestyle", "time": "21:34.79" },
          { "event": "50 Backstroke", "time": "33.69" },
          { "event": "100 Backstroke", "time": "1:11.39" },
          { "event": "200 Backstroke", "time": "2:34.49" },
          { "event": "50 Breaststroke", "time": "39.09" },
          { "event": "100 Breaststroke", "time": "1:22.29" },
          { "event": "200 Breaststroke", "time": "2:57.39" },
          { "event": "50 Butterfly", "time": "33.29" },
          { "event": "100 Butterfly", "time": "1:11.29" },
          { "event": "200 Butterfly", "time": "2:38.99" },
          { "event": "200 Individual Medley", "time": "2:39.49" },
          { "event": "400 Individual Medley", "time": "5:39.69" }
        ]
      },
      {
        "sex": "boys",
        "age": "9&U",
        "events": [
          { "event": "50 Freestyle", "time": "34.59" },
          { "event": "100 Freestyle", "time": "1:18.89" },
          { "event": "200 Freestyle", "time": "2:50.59" },
          { "event": "500 Freestyle", "time": "7:24.79" },
          { "event": "50 Backstroke", "time": "42.89" },
          { "event": "100 Backstroke", "time": "1:30.09" },
          { "event": "50 Breaststroke", "time": "47.69" },
          { "event": "100 Breaststroke", "time": "1:42.29" },
          { "event": "50 Butterfly", "time": "41.29" },
          { "event": "100 Butterfly", "time": "1:38.99" },
          { "event": "100 Individual Medley", "time": "1:29.69" },
          { "event": "200 Individual Medley", "time": "3:15.19" }
        ]
      },
      {
        "sex": "boys",
        "age": "10",
        "events": [
          { "event": "50 Freestyle", "time": "34.59" },
          { "event": "100 Freestyle", "time": "1:18.89" },
          { "event": "200 Freestyle", "time": "2:50.59" },
          { "event": "500 Freestyle", "time": "7:24.79" },
          { "event": "50 Backstroke", "time": "42.89" },
          { "event": "100 Backstroke", "time": "1:30.09" },
          { "event": "50 Breaststroke", "time": "47.69" },
          { "event": "100 Breaststroke", "time": "1:42.29" },
          { "event": "50 Butterfly", "time": "41.29" },
          { "event": "100 Butterfly", "time": "1:38.99" },
          { "event": "100 Individual Medley", "time": "1:29.69" },
          { "event": "200 Individual Medley", "time": "3:15.19" }
        ]
      },
      {
        "sex": "boys",
        "age": "11",
        "events": [
          { "event": "50 Freestyle", "time": "30.49" },
          { "event": "100 Freestyle", "time": "1:06.39" },
          { "event": "200 Freestyle", "time": "2:24.89" },
          { "event": "500 Freestyle", "time": "6:22.19" },
          { "event": "1000 Freestyle", "time": "13:23.99" },
          { "event": "1650 Freestyle", "time": "22:15.59" },
          { "event": "50 Backstroke", "time": "35.59" },
          { "event": "100 Backstroke", "time": "1:15.69" },
          { "event": "200 Backstroke", "time": "2:40.49" },
          { "event": "50 Breaststroke", "time": "40.09" },
          { "event": "100 Breaststroke", "time": "1:25.49" },
          { "event": "200 Breaststroke", "time": "3:02.39" },
          { "event": "50 Butterfly", "time": "34.19" },
          { "event": "100 Butterfly", "time": "1:16.09" },
          { "event": "200 Butterfly", "time": "2:43.99" },
          { "event": "100 Individual Medley", "time": "1:15.89" },
          { "event": "200 Individual Medley", "time": "2:45.79" },
          { "event": "400 Individual Medley", "time": "5:50.09" }
        ]
      },
      {
        "sex": "boys",
        "age": "12",
        "events": [
          { "event": "50 Freestyle", "time": "30.49" },
          { "event": "100 Freestyle", "time": "1:06.39" },
          { "event": "200 Freestyle", "time": "2:24.89" },
          { "event": "500 Freestyle", "time": "6:22.19" },
          { "event": "1000 Freestyle", "time": "13:23.99" },
          { "event": "1650 Freestyle", "time": "22:15.59" },
          { "event": "50 Backstroke", "time": "35.59" },
          { "event": "100 Backstroke", "time": "1:15.69" },
          { "event": "200 Backstroke", "time": "2:40.49" },
          { "event": "50 Breaststroke", "time": "40.09" },
          { "event": "100 Breaststroke", "time": "1:25.49" },
          { "event": "200 Breaststroke", "time": "3:02.39" },
          { "event": "50 Butterfly", "time": "34.19" },
          { "event": "100 Butterfly", "time": "1:16.09" },
          { "event": "200 Butterfly", "time": "2:43.99" },
          { "event": "100 Individual Medley", "time": "1:15.89" },
          { "event": "200 Individual Medley", "time": "2:45.79" },
          { "event": "400 Individual Medley", "time": "5:50.09" }
        ]
      },
      {
        "sex": "boys",
        "age": "13",
        "events": [
          { "event": "50 Freestyle", "time": "27.69" },
          { "event": "100 Freestyle", "time": "1:00.29" },
          { "event": "200 Freestyle", "time": "2:12.29" },
          { "event": "500 Freestyle", "time": "5:50.99" },
          { "event": "1000 Freestyle", "time": "12:06.19" },
          { "event": "1650 Freestyle", "time": "20:22.09" },
          { "event": "50 Backstroke", "time": "31.29" },
          { "event": "100 Backstroke", "time": "1:06.19" },
          { "event": "200 Backstroke", "time": "2:23.69" },
          { "event": "50 Breaststroke", "time": "35.79" },
          { "event": "100 Breaststroke", "time": "1:14.79" },
          { "event": "200 Breaststroke", "time": "2:42.39" },
          { "event": "50 Butterfly", "time": "30.79" },
          { "event": "100 Butterfly", "time": "1:05.49" },
          { "event": "200 Butterfly", "time": "2:25.59" },
          { "event": "200 Individual Medley", "time": "2:26.69" },
          { "event": "400 Individual Medley", "time": "5:13.59" }
        ]
      },
      {
        "sex": "boys",
        "age": "14",
        "events": [
          { "event": "50 Freestyle", "time": "27.69" },
          { "event": "100 Freestyle", "time": "1:00.29" },
          { "event": "200 Freestyle", "time": "2:12.29" },
          { "event": "500 Freestyle", "time": "5:50.99" },
          { "event": "1000 Freestyle", "time": "12:06.19" },
          { "event": "1650 Freestyle", "time": "20:22.09" },
          { "event": "50 Backstroke", "time": "31.29" },
          { "event": "100 Backstroke", "time": "1:06.19" },
          { "event": "200 Backstroke", "time": "2:23.69" },
          { "event": "50 Breaststroke", "time": "35.79" },
          { "event": "100 Breaststroke", "time": "1:14.79" },
          { "event": "200 Breaststroke", "time": "2:42.39" },
          { "event": "50 Butterfly", "time": "30.79" },
          { "event": "100 Butterfly", "time": "1:05.49" },
          { "event": "200 Butterfly", "time": "2:25.59" },
          { "event": "200 Individual Medley", "time": "2:26.69" },
          { "event": "400 Individual Medley", "time": "5:13.59" }
        ]
      }
    ]
  },
  {
    "course": "scm",
    "standards": [
      {
        "sex": "girls",
        "age": "9&U",
        "events": [
          { "event": "50 Freestyle", "time": "39.79" },
          { "event": "100 Freestyle", "time": "1:29.69" },
          { "event": "200 Freestyle", "time": "3:19.49" },
          { "event": "400 Freestyle", "time": "6:38.79" },
          { "event": "50 Backstroke", "time": "47.79" },
          { "event": "100 Backstroke", "time": "1:43.89" },
          { "event": "50 Breaststroke", "time": "53.79" },
          { "event": "100 Breaststroke", "time": "1:58.19" },
          { "event": "50 Butterfly", "time": "47.19" },
          { "event": "100 Butterfly", "time": "1:52.09" },
          { "event": "100 Individual Medley", "time": "1:42.99" },
          { "event": "200 Individual Medley", "time": "3:39.59" }
        ]
      },
      {
        "sex": "girls",
        "age": "10",
        "events": [
          { "event": "50 Freestyle", "time": "39.79" },
          { "event": "100 Freestyle", "time": "1:29.69" },
          { "event": "200 Freestyle", "time": "3:19.49" },
          { "event": "400 Freestyle", "time": "6:38.79" },
          { "event": "50 Backstroke", "time": "47.79" },
          { "event": "100 Backstroke", "time": "1:43.89" },
          { "event": "50 Breaststroke", "time": "53.79" },
          { "event": "100 Breaststroke", "time": "1:58.19" },
          { "event": "50 Butterfly", "time": "47.19" },
          { "event": "100 Butterfly", "time": "1:52.09" },
          { "event": "100 Individual Medley", "time": "1:42.99" },
          { "event": "200 Individual Medley", "time": "3:39.59" }
        ]
      },
      {
        "sex": "girls",
        "age": "11",
        "events": [
          { "event": "50 Freestyle", "time": "34.99" },
          { "event": "100 Freestyle", "time": "1:16.59" },
          { "event": "200 Freestyle", "time": "2:46.79" },
          { "event": "400 Freestyle", "time": "5:47.89" },
          { "event": "800 Freestyle", "time": "11:58.89" },
          { "event": "1500 Freestyle", "time": "22:44.09" },
          { "event": "50 Backstroke", "time": "39.79" },
          { "event": "100 Backstroke", "time": "1:28.19" },
          { "event": "200 Backstroke", "time": "3:04.19" },
          { "event": "50 Breaststroke", "time": "45.19" },
          { "event": "100 Breaststroke", "time": "1:38.69" },
          { "event": "200 Breaststroke", "time": "3:31.09" },
          { "event": "50 Butterfly", "time": "37.79" },
          { "event": "100 Butterfly", "time": "1:27.19" },
          { "event": "200 Butterfly", "time": "3:08.19" },
          { "event": "100 Individual Medley", "time": "1:27.49" },
          { "event": "200 Individual Medley", "time": "3:08.69" },
          { "event": "400 Individual Medley", "time": "6:41.89" }
        ]
      },
      {
        "sex": "girls",
        "age": "12",
        "events": [
          { "event": "50 Freestyle", "time": "34.99" },
          { "event": "100 Freestyle", "time": "1:16.59" },
          { "event": "200 Freestyle", "time": "2:46.79" },
          { "event": "400 Freestyle", "time": "5:47.89" },
          { "event": "800 Freestyle", "time": "11:58.89" },
          { "event": "1500 Freestyle", "time": "22:44.09" },
          { "event": "50 Backstroke", "time": "39.79" },
          { "event": "100 Backstroke", "time": "1:28.19" },
          { "event": "200 Backstroke", "time": "3:04.19" },
          { "event": "50 Breaststroke", "time": "45.19" },
          { "event": "100 Breaststroke", "time": "1:38.69" },
          { "event": "200 Breaststroke", "time": "3:31.09" },
          { "event": "50 Butterfly", "time": "37.79" },
          { "event": "100 Butterfly", "time": "1:27.19" },
          { "event": "200 Butterfly", "time": "3:08.19" },
          { "event": "100 Individual Medley", "time": "1:27.49" },
          { "event": "200 Individual Medley", "time": "3:08.69" },
          { "event": "400 Individual Medley", "time": "6:41.89" }
        ]
      },
      {
        "sex": "girls",
        "age": "13",
        "events": [
          { "event": "50 Freestyle", "time": "33.39" },
          { "event": "100 Freestyle", "time": "1:12.89" },
          { "event": "200 Freestyle", "time": "2:37.69" },
          { "event": "400 Freestyle", "time": "5:28.29" },
          { "event": "800 Freestyle", "time": "11:17.79" },
          { "event": "1500 Freestyle", "time": "21:26.99" },
          { "event": "50 Backstroke", "time": "37.19" },
          { "event": "100 Backstroke", "time": "1:18.89" },
          { "event": "200 Backstroke", "time": "2:50.69" },
          { "event": "50 Breaststroke", "time": "43.19" },
          { "event": "100 Breaststroke", "time": "1:30.99" },
          { "event": "200 Breaststroke", "time": "3:15.99" },
          { "event": "50 Butterfly", "time": "36.79" },
          { "event": "100 Butterfly", "time": "1:18.79" },
          { "event": "200 Butterfly", "time": "2:55.69" },
          { "event": "200 Individual Medley", "time": "2:56.19" },
          { "event": "400 Individual Medley", "time": "6:15.29" }
        ]
      },
      {
        "sex": "girls",
        "age": "14",
        "events": [
          { "event": "50 Freestyle", "time": "33.39" },
          { "event": "100 Freestyle", "time": "1:12.89" },
          { "event": "200 Freestyle", "time": "2:37.69" },
          { "event": "400 Freestyle", "time": "5:28.29" },
          { "event": "800 Freestyle", "time": "11:17.79" },
          { "event": "1500 Freestyle", "time": "21:26.99" },
          { "event": "50 Backstroke", "time": "37.19" },
          { "event": "100 Backstroke", "time": "1:18.89" },
          { "event": "200 Backstroke", "time": "2:50.69" },
          { "event": "50 Breaststroke", "time": "43.19" },
          { "event": "100 Breaststroke", "time": "1:30.99" },
          { "event": "200 Breaststroke", "time": "3:15.99" },
          { "event": "50 Butterfly", "time": "36.79" },
          { "event": "100 Butterfly", "time": "1:18.79" },
          { "event": "200 Butterfly", "time": "2:55.69" },
          { "event": "200 Individual Medley", "time": "2:56.19" },
          { "event": "400 Individual Medley", "time": "6:15.29" }
        ]
      },
      {
        "sex": "boys",
        "age": "9&U",
        "events": [
          { "event": "50 Freestyle", "time": "38.19" },
          { "event": "100 Freestyle", "time": "1:27.19" },
          { "event": "200 Freestyle", "time": "3:08.49" },
          { "event": "400 Freestyle", "time": "6:29.19" },
          { "event": "50 Backstroke", "time": "47.39" },
          { "event": "100 Backstroke", "time": "1:39.59" },
          { "event": "50 Breaststroke", "time": "52.79" },
          { "event": "100 Breaststroke", "time": "1:53.09" },
          { "event": "50 Butterfly", "time": "45.59" },
          { "event": "100 Butterfly", "time": "1:49.29" },
          { "event": "100 Individual Medley", "time": "1:39.09" },
          { "event": "200 Individual Medley", "time": "3:36.59" }
        ]
      },
      {
        "sex": "boys",
        "age": "10",
        "events": [
          { "event": "50 Freestyle", "time": "38.19" },
          { "event": "100 Freestyle", "time": "1:27.19" },
          { "event": "200 Freestyle", "time": "3:08.49" },
          { "event": "400 Freestyle", "time": "6:29.19" },
          { "event": "50 Backstroke", "time": "47.39" },
          { "event": "100 Backstroke", "time": "1:39.59" },
          { "event": "50 Breaststroke", "time": "52.79" },
          { "event": "100 Breaststroke", "time": "1:53.09" },
          { "event": "50 Butterfly", "time": "45.59" },
          { "event": "100 Butterfly", "time": "1:49.29" },
          { "event": "100 Individual Medley", "time": "1:39.09" },
          { "event": "200 Individual Medley", "time": "3:36.59" }
        ]
      },
      {
        "sex": "boys",
        "age": "11",
        "events": [
          { "event": "50 Freestyle", "time": "33.69" },
          { "event": "100 Freestyle", "time": "1:13.29" },
          { "event": "200 Freestyle", "time": "2:40.09" },
          { "event": "400 Freestyle", "time": "5:34.39" },
          { "event": "800 Freestyle", "time": "11:43.49" },
          { "event": "1500 Freestyle", "time": "22:07.59" },
          { "event": "50 Backstroke", "time": "39.29" },
          { "event": "100 Backstroke", "time": "1:23.69" },
          { "event": "200 Backstroke", "time": "2:57.39" },
          { "event": "50 Breaststroke", "time": "44.29" },
          { "event": "100 Breaststroke", "time": "1:34.49" },
          { "event": "200 Breaststroke", "time": "3:21.59" },
          { "event": "50 Butterfly", "time": "37.69" },
          { "event": "100 Butterfly", "time": "1:24.09" },
          { "event": "200 Butterfly", "time": "3:01.19" },
          { "event": "100 Individual Medley", "time": "1:23.89" },
          { "event": "200 Individual Medley", "time": "3:03.19" },
          { "event": "400 Individual Medley", "time": "6:26.89" }
        ]
      },
      {
        "sex": "boys",
        "age": "12",
        "events": [
          { "event": "50 Freestyle", "time": "33.69" },
          { "event": "100 Freestyle", "time": "1:13.29" },
          { "event": "200 Freestyle", "time": "2:40.09" },
          { "event": "400 Freestyle", "time": "5:34.39" },
          { "event": "800 Freestyle", "time": "11:43.49" },
          { "event": "1500 Freestyle", "time": "22:07.59" },
          { "event": "50 Backstroke", "time": "39.29" },
          { "event": "100 Backstroke", "time": "1:23.69" },
          { "event": "200 Backstroke", "time": "2:57.39" },
          { "event": "50 Breaststroke", "time": "44.29" },
          { "event": "100 Breaststroke", "time": "1:34.49" },
          { "event": "200 Breaststroke", "time": "3:21.59" },
          { "event": "50 Butterfly", "time": "37.69" },
          { "event": "100 Butterfly", "time": "1:24.09" },
          { "event": "200 Butterfly", "time": "3:01.19" },
          { "event": "100 Individual Medley", "time": "1:23.89" },
          { "event": "200 Individual Medley", "time": "3:03.19" },
          { "event": "400 Individual Medley", "time": "6:26.89" }
        ]
      },
      {
        "sex": "boys",
        "age": "13",
        "events": [
          { "event": "50 Freestyle", "time": "30.69" },
          { "event": "100 Freestyle", "time": "1:06.69" },
          { "event": "200 Freestyle", "time": "2:26.19" },
          { "event": "400 Freestyle", "time": "5:07.09" },
          { "event": "800 Freestyle", "time": "10:35.49" },
          { "event": "1500 Freestyle", "time": "20:14.69" },
          { "event": "50 Backstroke", "time": "34.59" },
          { "event": "100 Backstroke", "time": "1:13.09" },
          { "event": "200 Backstroke", "time": "2:38.69" },
          { "event": "50 Breaststroke", "time": "39.59" },
          { "event": "100 Breaststroke", "time": "1:22.59" },
          { "event": "200 Breaststroke", "time": "2:59.39" },
          { "event": "50 Butterfly", "time": "33.99" },
          { "event": "100 Butterfly", "time": "1:12.29" },
          { "event": "200 Butterfly", "time": "2:40.89" },
          { "event": "200 Individual Medley", "time": "2:42.09" },
          { "event": "400 Individual Medley", "time": "5:46.49" }
        ]
      },
      {
        "sex": "boys",
        "age": "14",
        "events": [
          { "event": "50 Freestyle", "time": "30.69" },
          { "event": "100 Freestyle", "time": "1:06.69" },
          { "event": "200 Freestyle", "time": "2:26.19" },
          { "event": "400 Freestyle", "time": "5:07.09" },
          { "event": "800 Freestyle", "time": "10:35.49" },
          { "event": "1500 Freestyle", "time": "20:14.69" },
          { "event": "50 Backstroke", "time": "34.59" },
          { "event": "100 Backstroke", "time": "1:13.09" },
          { "event": "200 Backstroke", "time": "2:38.69" },
          { "event": "50 Breaststroke", "time": "39.59" },
          { "event": "100 Breaststroke", "time": "1:22.59" },
          { "event": "200 Breaststroke", "time": "2:59.39" },
          { "event": "50 Butterfly", "time": "33.99" },
          { "event": "100 Butterfly", "time": "1:12.29" },
          { "event": "200 Butterfly", "time": "2:40.89" },
          { "event": "200 Individual Medley", "time": "2:42.09" },
          { "event": "400 Individual Medley", "time": "5:46.49" }
        ]
      }
    ]
  },
  {
    "course": "lcm",
    "standards": [
      {
        "sex": "girls",
        "age": "9&U",
        "events": [
          { "event": "50 Freestyle", "time": "40.89" },
          { "event": "100 Freestyle", "time": "1:32.99" },
          { "event": "200 Freestyle", "time": "3:25.69" },
          { "event": "400 Freestyle", "time": "6:53.39" },
          { "event": "50 Backstroke", "time": "49.69" },
          { "event": "100 Backstroke", "time": "1:48.09" },
          { "event": "50 Breaststroke", "time": "55.49" },
          { "event": "100 Breaststroke", "time": "2:03.89" },
          { "event": "50 Butterfly", "time": "48.09" },
          { "event": "100 Butterfly", "time": "1:55.39" },
          { "event": "200 Individual Medley", "time": "3:48.89" }
        ]
      },
      {
        "sex": "girls",
        "age": "10",
        "events": [
          { "event": "50 Freestyle", "time": "40.89" },
          { "event": "100 Freestyle", "time": "1:32.99" },
          { "event": "200 Freestyle", "time": "3:25.69" },
          { "event": "400 Freestyle", "time": "6:53.39" },
          { "event": "50 Backstroke", "time": "49.69" },
          { "event": "100 Backstroke", "time": "1:48.09" },
          { "event": "50 Breaststroke", "time": "55.49" },
          { "event": "100 Breaststroke", "time": "2:03.89" },
          { "event": "50 Butterfly", "time": "48.09" },
          { "event": "100 Butterfly", "time": "1:55.39" },
          { "event": "200 Individual Medley", "time": "3:48.89" }
        ]
      },
      {
        "sex": "girls",
        "age": "11",
        "events": [
          { "event": "50 Freestyle", "time": "35.89" },
          { "event": "100 Freestyle", "time": "1:19.49" },
          { "event": "200 Freestyle", "time": "2:53.09" },
          { "event": "400 Freestyle", "time": "5:57.49" },
          { "event": "800 Freestyle", "time": "12:27.69" },
          { "event": "1500 Freestyle", "time": "23:45.89" },
          { "event": "50 Backstroke", "time": "41.59" },
          { "event": "100 Backstroke", "time": "1:32.69" },
          { "event": "200 Backstroke", "time": "3:13.29" },
          { "event": "50 Breaststroke", "time": "46.19" },
          { "event": "100 Breaststroke", "time": "1:42.19" },
          { "event": "200 Breaststroke", "time": "3:39.89" },
          { "event": "50 Butterfly", "time": "38.79" },
          { "event": "100 Butterfly", "time": "1:30.49" },
          { "event": "200 Butterfly", "time": "3:15.99" },
          { "event": "200 Individual Medley", "time": "3:15.59" },
          { "event": "400 Individual Medley", "time": "6:56.79" }
        ]
      },
      {
        "sex": "girls",
        "age": "12",
        "events": [
          { "event": "50 Freestyle", "time": "35.89" },
          { "event": "100 Freestyle", "time": "1:19.49" },
          { "event": "200 Freestyle", "time": "2:53.09" },
          { "event": "400 Freestyle", "time": "5:57.49" },
          { "event": "800 Freestyle", "time": "12:27.69" },
          { "event": "1500 Freestyle", "time": "23:45.89" },
          { "event": "50 Backstroke", "time": "41.59" },
          { "event": "100 Backstroke", "time": "1:32.69" },
          { "event": "200 Backstroke", "time": "3:13.29" },
          { "event": "50 Breaststroke", "time": "46.19" },
          { "event": "100 Breaststroke", "time": "1:42.19" },
          { "event": "200 Breaststroke", "time": "3:39.89" },
          { "event": "50 Butterfly", "time": "38.79" },
          { "event": "100 Butterfly", "time": "1:30.49" },
          { "event": "200 Butterfly", "time": "3:15.99" },
          { "event": "200 Individual Medley", "time": "3:15.59" },
          { "event": "400 Individual Medley", "time": "6:56.79" }
        ]
      },
      {
        "sex": "girls",
        "age": "13",
        "events": [
          { "event": "50 Freestyle", "time": "34.59" },
          { "event": "100 Freestyle", "time": "1:15.39" },
          { "event": "200 Freestyle", "time": "2:42.79" },
          { "event": "400 Freestyle", "time": "5:35.09" },
          { "event": "800 Freestyle", "time": "11:36.59" },
          { "event": "1500 Freestyle", "time": "22:16.19" },
          { "event": "50 Backstroke", "time": "39.49" },
          { "event": "100 Backstroke", "time": "1:23.29" },
          { "event": "200 Backstroke", "time": "2:59.49" },
          { "event": "50 Breaststroke", "time": "44.39" },
          { "event": "100 Breaststroke", "time": "1:34.99" },
          { "event": "200 Breaststroke", "time": "3:24.59" },
          { "event": "50 Butterfly", "time": "37.09" },
          { "event": "100 Butterfly", "time": "1:20.99" },
          { "event": "200 Butterfly", "time": "3:01.69" },
          { "event": "200 Individual Medley", "time": "3:03.09" },
          { "event": "400 Individual Medley", "time": "6:28.19" }
        ]
      },
      {
        "sex": "girls",
        "age": "14",
        "events": [
          { "event": "50 Freestyle", "time": "34.59" },
          { "event": "100 Freestyle", "time": "1:15.39" },
          { "event": "200 Freestyle", "time": "2:42.79" },
          { "event": "400 Freestyle", "time": "5:35.09" },
          { "event": "800 Freestyle", "time": "11:36.59" },
          { "event": "1500 Freestyle", "time": "22:16.19" },
          { "event": "50 Backstroke", "time": "39.49" },
          { "event": "100 Backstroke", "time": "1:23.29" },
          { "event": "200 Backstroke", "time": "2:59.49" },
          { "event": "50 Breaststroke", "time": "44.39" },
          { "event": "100 Breaststroke", "time": "1:34.99" },
          { "event": "200 Breaststroke", "time": "3:24.59" },
          { "event": "50 Butterfly", "time": "37.09" },
          { "event": "100 Butterfly", "time": "1:20.99" },
          { "event": "200 Butterfly", "time": "3:01.69" },
          { "event": "200 Individual Medley", "time": "3:03.09" },
          { "event": "400 Individual Medley", "time": "6:28.19" }
        ]
      },
      {
        "sex": "boys",
        "age": "9&U",
        "events": [
          { "event": "50 Freestyle", "time": "39.79" },
          { "event": "100 Freestyle", "time": "1:30.59" },
          { "event": "200 Freestyle", "time": "3:14.99" },
          { "event": "400 Freestyle", "time": "6:44.29" },
          { "event": "50 Backstroke", "time": "49.29" },
          { "event": "100 Backstroke", "time": "1:44.49" },
          { "event": "50 Breaststroke", "time": "54.39" },
          { "event": "100 Breaststroke", "time": "1:59.19" },
          { "event": "50 Butterfly", "time": "46.39" },
          { "event": "100 Butterfly", "time": "1:52.89" },
          { "event": "200 Individual Medley", "time": "3:43.69" }
        ]
      },
      {
        "sex": "boys",
        "age": "10",
        "events": [
          { "event": "50 Freestyle", "time": "39.79" },
          { "event": "100 Freestyle", "time": "1:30.59" },
          { "event": "200 Freestyle", "time": "3:14.99" },
          { "event": "400 Freestyle", "time": "6:44.29" },
          { "event": "50 Backstroke", "time": "49.29" },
          { "event": "100 Backstroke", "time": "1:44.49" },
          { "event": "50 Breaststroke", "time": "54.39" },
          { "event": "100 Breaststroke", "time": "1:59.19" },
          { "event": "50 Butterfly", "time": "46.39" },
          { "event": "100 Butterfly", "time": "1:52.89" },
          { "event": "200 Individual Medley", "time": "3:43.69" }
        ]
      },
      {
        "sex": "boys",
        "age": "11",
        "events": [
          { "event": "50 Freestyle", "time": "34.79" },
          { "event": "100 Freestyle", "time": "1:16.19" },
          { "event": "200 Freestyle", "time": "2:46.39" },
          { "event": "400 Freestyle", "time": "5:46.79" },
          { "event": "800 Freestyle", "time": "12:08.09" },
          { "event": "1500 Freestyle", "time": "23:32.29" },
          { "event": "50 Backstroke", "time": "41.09" },
          { "event": "100 Backstroke", "time": "1:29.59" },
          { "event": "200 Backstroke", "time": "3:08.49" },
          { "event": "50 Breaststroke", "time": "45.89" },
          { "event": "100 Breaststroke", "time": "1:39.59" },
          { "event": "200 Breaststroke", "time": "3:31.59" },
          { "event": "50 Butterfly", "time": "38.69" },
          { "event": "100 Butterfly", "time": "1:27.29" },
          { "event": "200 Butterfly", "time": "3:10.19" },
          { "event": "200 Individual Medley", "time": "3:08.99" },
          { "event": "400 Individual Medley", "time": "6:46.59" }
        ]
      },
      {
        "sex": "boys",
        "age": "12",
        "events": [
          { "event": "50 Freestyle", "time": "34.79" },
          { "event": "100 Freestyle", "time": "1:16.19" },
          { "event": "200 Freestyle", "time": "2:46.39" },
          { "event": "400 Freestyle", "time": "5:46.79" },
          { "event": "800 Freestyle", "time": "12:08.09" },
          { "event": "1500 Freestyle", "time": "23:32.29" },
          { "event": "50 Backstroke", "time": "41.09" },
          { "event": "100 Backstroke", "time": "1:29.59" },
          { "event": "200 Backstroke", "time": "3:08.49" },
          { "event": "50 Breaststroke", "time": "45.89" },
          { "event": "100 Breaststroke", "time": "1:39.59" },
          { "event": "200 Breaststroke", "time": "3:31.59" },
          { "event": "50 Butterfly", "time": "38.69" },
          { "event": "100 Butterfly", "time": "1:27.29" },
          { "event": "200 Butterfly", "time": "3:10.19" },
          { "event": "200 Individual Medley", "time": "3:08.99" },
          { "event": "400 Individual Medley", "time": "6:46.59" }
        ]
      },
      {
        "sex": "boys",
        "age": "13",
        "events": [
          { "event": "50 Freestyle", "time": "31.79" },
          { "event": "100 Freestyle", "time": "1:09.79" },
          { "event": "200 Freestyle", "time": "2:32.29" },
          { "event": "400 Freestyle", "time": "5:16.99" },
          { "event": "800 Freestyle", "time": "10:55.79" },
          { "event": "1500 Freestyle", "time": "20:59.99" },
          { "event": "50 Backstroke", "time": "36.69" },
          { "event": "100 Backstroke", "time": "1:17.69" },
          { "event": "200 Backstroke", "time": "2:48.79" },
          { "event": "50 Breaststroke", "time": "40.89" },
          { "event": "100 Breaststroke", "time": "1:27.09" },
          { "event": "200 Breaststroke", "time": "3:08.29" },
          { "event": "50 Butterfly", "time": "34.59" },
          { "event": "100 Butterfly", "time": "1:14.59" },
          { "event": "200 Butterfly", "time": "2:46.79" },
          { "event": "200 Individual Medley", "time": "2:49.79" },
          { "event": "400 Individual Medley", "time": "6:02.79" }
        ]
      },
      {
        "sex": "boys",
        "age": "14",
        "events": [
          { "event": "50 Freestyle", "time": "31.79" },
          { "event": "100 Freestyle", "time": "1:09.79" },
          { "event": "200 Freestyle", "time": "2:32.29" },
          { "event": "400 Freestyle", "time": "5:16.99" },
          { "event": "800 Freestyle", "time": "10:55.79" },
          { "event": "1500 Freestyle", "time": "20:59.99" },
          { "event": "50 Backstroke", "time": "36.69" },
          { "event": "100 Backstroke", "time": "1:17.69" },
          { "event": "200 Backstroke", "time": "2:48.79" },
          { "event": "50 Breaststroke", "time": "40.89" },
          { "event": "100 Breaststroke", "time": "1:27.09" },
          { "event": "200 Breaststroke", "time": "3:08.29" },
          { "event": "50 Butterfly", "time": "34.59" },
          { "event": "100 Butterfly", "time": "1:14.59" },
          { "event": "200 Butterfly", "time": "2:46.79" },
          { "event": "200 Individual Medley", "time": "2:49.79" },
          { "event": "400 Individual Medley", "time": "6:02.79" }
        ]
      }
    ]
  }
];
