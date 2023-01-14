import getReadingTime from 'reading-time';
import { toString } from 'mdast-util-to-string';

export function remarkReadingTime() {
  return function (tree, { data }) {
    const textOnPage = toString(tree);
    const readingTime = getReadingTime(textOnPage);
    // readingTime.text nos dará los minutos de lectura en un string amigable,
    // por ejemplo, "3 min read"
    data.astro.frontmatter.minutesRead =
      readingTime.minutes < 0.5
        ? Math.ceil(readingTime.minutes)
        : Math.round(readingTime.minutes);
  };
}
