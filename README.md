# Learning circle team template

This is a template site for creating sub sites for learning circle. It was built for other language learning circle communities. As such, the aim is to provide a complete set of tools + info for learners to participate in learning circles without needing to translate all P2PU materials.

This template can also be used in cases where learning circles need to be contextualized for a specific audience.

## Using the template

This template is made up of 3 parts.

1. The layout for this site. This includes the HTML and CSS.
2. The content for this site. That is what you'll read when you look at the site
3. UX from p2pu-components - the interactive part where you search for learning circles on the landing page and the course search page

To use this template, start by fork this repository. If your site is in English, you only need to update the content. If you wish to translate the template, you need to update the content (2) and the UX (3).

The content can be found here:
- [`_config.yml`](_config.yml)
- [`_data/nav.yml`](_data/nav.yml)
- [`_data/footer.yml`](_data/footer.yml)
- [`about.md`](about.md)
- [`courses.md`](courses.md)
- [`facilitate.md`](facilitate.md)
- [`index.md`](index.md)

NetlifyCMS can also be used to update/translate content. To do this, you will need to create a new site on netlify, enable the GitHub authenticator and then access the admin page at /admin on your site. The netlify configuration is stored in [`admin/config.yml`](admin/config.yml).

To translate the interactive UX join the [transifex](https://www.transifex.com/p2pu/p2pu-team-template/) project and translate all strings mentioned there.

## Updating the template

To update the HTML elements of the template, look inside `📁 _layouts` and `📁 _includes`. These directories contain the HTML markup used in the template.

To update the styling, make your changes in `assets/css/_custom.scss`.

If you are changing the styling or the interactive components, update your site by running `npm i && npm run build`. Once everything is installed and built, commit the changes and push it to GitHub.

## License

Unless indicated otherwise, all content is licensed CC-BY-SA and all code is licensed under the MIT license
