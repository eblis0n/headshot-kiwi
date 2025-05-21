/*
 * @version: 1.0.0
 * @Author: Eblis
 * @Date: 2025-05-21 17:43:00
 * @LastEditTime: 2025-05-21 17:50:28
 */

interface maccmsConfig {
  islogin?: boolean;
  menu?: {
    name: string;
    href: string;
  }[];
}




export const maccms: maccmsConfig = {
  islogin: false,
  menu: [
    {
      name: 'Home',
      href: '/',
    },
    {
      name: 'About',
      href: '/about',
    }
  ],
}
