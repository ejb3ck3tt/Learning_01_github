// export interface Data {
//   results: {
//     total: number;
//     id: string;
//     alt_description: string;
//     likes: number;
//     urls: {
//       raw: string;
//       full: string;
//       regular: string;
//       small: string;
//       thumb: string;
//     };
//     user: {
//       name: string;
//     };
//   };
// }

export interface Head {
  total: number;
  total_pages: number;
}

export interface Urls {
  regular: string;
  small: string;
  full: string;
  thumb: string;
}

export interface User {
  name: string;
}

export interface Data {
  id: string;
  alt_description: string;
  likes: number;
  blah: string;
  urls: {
    [key: string]: Urls;
  };
  user: {
    [key: string]: User;
  };
}

// export interface Data {
//   total: number;
//   id: string;
//   alt_description: string;
//   likes: number;
//   blah: string;
//   urls: {
//     [key: string]: Urls;
//   };
//   user: {
//     [key: string]: User;
//   };
// }
