### Adding and editing policies
Policy pages and all listings of policies across the site (navigation, on homepage, on policies index page) and their related content (title, scorecard stats, descriptions, etc.) are generated from objects in `_data/policies.json`.
| value | description |
|--|--|
| `title` | Full title; used as page header and in policies indices |
| `navTitle` | Shorter title; used in site navigation |
| `colTitle` | Shortest title/abbreviations; used as data explorer column headers |
| `subTitle` | One sentence description |
| `desc` | Longer description; HTML tags allowed |
| `footnote` | Italicized text to appear only on policy page after `desc`; HTML allowed |
| `stats` | Array of objects [`value` (*string*), `label` (*string*), `supportingText` (*string*)]; set to `false` if not needed |
| `pillars` | Array of objects [`label` (*string*) and `bullets` (*array of strings*)]; set to `false` if not needed |
| `benchmark` | Boolean if policy is benchmark |


### Adding and editing reports
All listings of reports across the site (homepage, on reports page) and their related content are generated from objects in `_data/reports.json`.
| value | description |
|--|--|
| `title` | Title; used as heading |
| `desc` | Description; HTML tags allowed |
| `prompt` | Italicized text prompting download including hyperlinked text to PDF; HTML allowed |
| `pdf` | Report PDF filename w/ extension as appears in `/public/docs` |
| `image` | Thumbnail image filename w/ extension as appears in `/public/images/reports` |


### Adding and press coverage
All listings of press coverage across the site ("In The Media" module above footer, on media page) and their related content are generated from objects in `_data/media.json`.
| value | description |
|--|--|
| `title` | Title of article |
| `desc` | Brief description of article; only appears under most recent article on media page |
| `url` | URL of article |
| `date` | Formatted publish date (i.e. February 6, 2022) |
| `source` | Title of publication |
| `image` | Thumbnail image filename w/ extension as appears in `/public/images/press` |
| `logo` | Logo image filename w/ extension as appears in `/public/images/press/logos`; appears over `image` file |
| `featured` | Boolean if should be included in "In the Media" module; only first 3 set to `true` are displayed |