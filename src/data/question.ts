/*
 * @version: 1.0.0
 * @Author: Eblis
 * @Date: 2025-05-21 17:06:01
 * @LastEditTime: 2025-05-21 17:06:50
 */
interface FAQ {
  question: string;
  answer: string;
}

export const faqs: FAQ[] = [
  {
    question: 'What kind of photos do I need to upload?',
    answer: 'Make variety a priority. Varied facial expressions and varied backgrounds, taken at various times of the day, are the keys to high quality input photos. Oh, and minimal makeup and accessories, please!'
  },
  {
    question: 'What do you do with my uploaded photos?',
    answer: 'The photos you upload are used to train our AI model so it can create realistic AI headshots. These input photos are deleted within 7 days, but you can instantly delete them at any time with our \'Delete\' button.'
  },
  {
    question: 'Who owns my AI photos?',
    answer: 'You do. We grant you full commercial license and ownership over your photos.'
  },
  {
    question: 'What if I don\'t like my photos?',
    answer: 'No problem. If you don\'t get a single profile-worthy headshot, we\'ll refund your entire purchase. It\'s our Profile-Worthy guarantee.'
  },
  {
    question: 'How long does an AI headshot take?',
    answer: 'We don\'t cut corners when it comes to generating photorealistic AI headshots. We\'re not the fastest, but you\'ll always get same-day results with HeadshotKiwi. Our Executive package is delivered in 1 hour or less.'
  },
  {
    question: 'What do people misunderstand about AI headshots?',
    answer: 'Not every photo is perfect. Due to the nature of AI, you might see some strange photos. HeadshotKiwi tries to make this clear from the start: not every photo is perfect, but we promise you\'ll find a profile-worthy headshot in every order to make it all worth it.'
  },
  {
    question: 'How many good photos can I expect?',
    answer: 'The amount of keeper headshots you get back will largely depend on the photos you provide us with. Customers who make an effort to follow the instructions closely often walk away with 8-10+ incredible photos. At the very least, we guarantee you\'ll get a Profile-Worthy headshot back.'
  },
  {
    question: 'Can I use AI headshots on LinkedIn?',
    answer: '25% of HeadshotKiwi customers use their AI headshots on LinkedIn. It\'s totally okay to use AI headshots on LinkedIn.'
  }
];
