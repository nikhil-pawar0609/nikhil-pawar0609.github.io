# aimsotrash.github.io

My portfolio: [aimsotrash.github.io](https://aimsotrash.github.io).

A static site built with [Astro](https://astro.build) and deployed to GitHub Pages by
`.github/workflows/deploy.yml` on every push to `main`. The page ships almost no
JavaScript: a replay of [self-healing-infra](https://github.com/aimsotrash/self-healing-infra)
on the first screen, the project index and the contact form.

## Editing

All the words live in `src/data/site.ts`. The résumé is `public/Nikhil-Pawar-Resume.pdf`.

```bash
npm ci
npm run dev       # http://localhost:4321
npm run build     # writes dist/
```

## Credits

Photographs, both cropped and shown in greyscale, shared under their original licences:

- [“Pune West skyline - March 2017”](https://commons.wikimedia.org/wiki/File:Pune_West_skyline_-_March_2017.jpg)
  by Ujjawal.Gayakwad, [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0)
- [“Lake Union, Seattle”](https://commons.wikimedia.org/wiki/File:Lake_Union,_Seattle_(11574424956).jpg)
  by Andrew Smith, [CC BY-SA 2.0](https://creativecommons.org/licenses/by-sa/2.0)

Type: IBM Plex Sans, under the SIL Open Font License.
