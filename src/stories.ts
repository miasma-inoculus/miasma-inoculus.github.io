export interface Story {
  id: string;
  title: string;
  subtitle: string;
  content: string;
  image: string;
  category: string;
}

export const storyData: Story[] = [
  {
    id: 'thirteenth-knock',
    title: 'THE THIRTEENTH KNOCK',
    subtitle: 'The Ashford Estate',
    category: 'Ancestral Horror',
    image: '/assets/thirteenth-knock.webp',
    content: 'The knocking never came in rhythm. It was a staggered, heavy sound that seemed to vibrate the very stone of the cellar floor. At the Ashford Estate, silence was a luxury the living could no longer afford...'
  },
  {
    id: 'last-passenger',
    title: 'THE LAST PASSENGER',
    subtitle: 'The Blackwood Line',
    category: 'Spectral Mystery',
    image: '/assets/last-passenger.webp',
    content: 'The 12:15 to Blackwood never officially appeared on the station ledger. Yet, every third Tuesday, the fog would thicken into the shape of a locomotive, and a lone conductor would wait for the one soul brave enough to board...'
  },
  {
    id: 'cartographers-wife',
    title: 'THE CARTOGRAPHER\'S WIFE',
    subtitle: 'The Unmapped Territories',
    category: 'Psychological Horror',
    image: '/assets/cartographers-wife.webp',
    content: 'She didn’t just draw maps; she felt the coastlines shifting under her skin. When the ink on her fingers began to turn into actual topographical lines, he realized she wasn’t documenting the world—she was becoming it...'
  },
  {
    id: 'mirror-at-the-end',
    title: 'THE MIRROR AT THE END',
    subtitle: 'The Threshold',
    category: 'Cosmic Horror',
    image: '/assets/mirror-at-the-end.webp',
    content: 'It was a silver surface that refused to show the present. To look into the mirror was to see the world as it would be ten seconds after your own death. Most people looked away. Some, however, stayed to watch the void...'
  }
];
