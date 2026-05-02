/*
 * THE INKWELL — Story Data
 * Victorian Gothic Platform - Bridged Version
 */

export type Genre = 'horror' | 'thriller' | 'suspense' | 'Gothic' | 'Psychological' | 'Supernatural' | 'Anatomical';

export interface Story {
  id: string;
  title: string;
  genre: Genre;
  date: string;
  issue: number;
  wordCount: number | string;
  readTime: string;
  excerpt: string;
  body: string;
  author: string;
  imageUrl: string;
  featured?: boolean;
}

const STORY_IMAGES = [
  'https://d2xsxph8kpxj0f.cloudfront.net/310519663614260208/VLQTr2HHpa65hSd5QHn4op/story_card_1-iBjcSU9knQxuHU99q3jed4.webp',
  'https://d2xsxph8kpxj0f.cloudfront.net/310519663614260208/VLQTr2HHpa65hSd5QHn4op/story_card_2-MjPp5woypWEEJki2pWMB49.webp',
  'https://d2xsxph8kpxj0f.cloudfront.net/310519663614260208/VLQTr2HHpa65hSd5QHn4op/story_card_3-Gwbe79tNg6o2tesTkxbRzM.webp',
];

export const stories: Story[] = [
  {
    id: 'the-thirteenth-knock',
    title: 'The Thirteenth Knock',
    genre: 'horror',
    date: 'April 29, 1887',
    issue: 1,
    wordCount: 298,
    readTime: '2 min',
    excerpt: 'She counted twelve knocks before she opened the door. There was no one there. Then the thirteenth came from inside.',
    body: `She had always been meticulous about locks. Every evening, Mrs. Hartwell would make her rounds — the parlour door, the cellar hatch, the servants' entrance, and finally the great oak door at the front of the house. Twelve locks. Twelve turns of the key. She counted them aloud, a ritual as old as her tenure in the Ashford estate.

On the night of the twenty-third, she heard knocking. One. Two. Three. She set down her candle and listened, certain it was the wind pressing against the shutters. Four. Five. Six. The knocks were deliberate, unhurried, as if the caller had all the time in the world. Seven. Eight. Nine. She rose from her chair, her joints protesting the cold. Ten. Eleven. Twelve.

She opened the door. The fog lay thick across the moor. The gas lamp at the gate burned low, its light swallowed before it reached the path. There was no carriage, no figure, no footprint in the frost.

She was about to close the door when she heard it. The thirteenth knock. It came from behind her. From inside the house.

She turned slowly, holding the candle before her like a ward against whatever waited in the dark. The hallway was empty. The portraits on the wall — the Ashfords going back six generations — stared forward with their painted eyes. All except one. The portrait of Edmund Ashford, dead these forty years, had turned its gaze toward the cellar door. Mrs. Hartwell had not noticed, until that moment, that the cellar hatch was open.`,
    author: 'The Inkwell',
    imageUrl: STORY_IMAGES[1],
    featured: true,
  },
  {
    id: 'the-last-passenger',
    title: 'The Last Passenger',
    genre: 'thriller',
    date: 'April 28, 1887',
    issue: 2,
    wordCount: 312,
    readTime: '2 min',
    excerpt: 'The conductor had counted the passengers at every stop. At Victoria Station, he counted one more than had boarded.',
    body: `The 11:47 from Paddington ran on time, as it always did. Conductor Aldous Pryce had worked the line for nineteen years. He knew every regular — the solicitor who slept through Slough, the widow who knitted past Reading, the young clerk who always sat in carriage four and never looked up from his ledger.

That Tuesday, he counted sixteen passengers at the platform. He noted it in his book, as regulations required, and walked the length of the train before the whistle blew.

At Reading, he paused longer than usual. Something nagged at him — a feeling he could not name. He walked the carriages again. Sixteen. He returned to his post. The train moved on. At Didcot, he counted again. Seventeen.

He went through each carriage methodically. The solicitor. The widow. The clerk. Fourteen others he could account for. The seventeenth sat in carriage six, which had been empty at Paddington. He was a tall man in a black coat, his hat pulled low, his face turned toward the window. The glass showed only darkness and the reflection of the carriage lamp. It did not show his reflection.

Pryce walked back to his post and did not count again for the remainder of the journey. He resigned the following morning.`,
    author: 'The Inkwell',
    imageUrl: STORY_IMAGES[2],
  },
  {
    id: 'the-cartographers-wife',
    title: "The Cartographer's Wife",
    genre: 'suspense',
    date: 'April 27, 1887',
    issue: 3,
    wordCount: 287,
    readTime: '2 min',
    excerpt: 'He mapped every room of the house before he disappeared. His wife found the map. There was one room she had never seen.',
    body: `My husband was a man of extraordinary precision. He had mapped the jungles of Borneo, the river systems of the Congo, the mountain passes of the Hindu Kush. 

I did not discover the map until spring. It was tucked inside the cover of his field journal. I spread it on his desk and traced the familiar rooms. The parlour. The dining room. The library where I now stood.

And then, in the northeast corner of the house, between the linen cupboard and the exterior wall — a room. A room I had never entered. A room I had never noticed. A room that, by my reckoning, should not exist.

I went to the northeast corner of the house. I pressed my hand against the wall. The wall was warm. And from somewhere beyond it, very faintly, I heard the scratch of a pen on paper. I have not yet decided whether to knock.`,
    author: 'The Inkwell',
    imageUrl: STORY_IMAGES[0],
  }
];

// --- BRIDGE EXPORTS (Essential for the Pages to work) ---
export const allStories = stories;
export const featuredStory = stories.find(s => s.featured) || stories[0];
export const archiveStories = stories.filter(s => !s.featured);

export function getStoryById(id: string): Story | undefined {
  return stories.find(s => s.id === id);
}
