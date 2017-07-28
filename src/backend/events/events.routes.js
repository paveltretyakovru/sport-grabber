// Requires
const express = require('express');
const jsdom = require('jsdom');
const { JSDOM } = jsdom;
const request = require('request');

// Constants
const router = express.Router();

// Constants url
const eventsUrl = 'https://sportivnye-prognozy.ru/vse-prognozy/page/1';

// Constants selectors
const descSelector = '.gp-loop-text';
const titleSelector = '.span_as_h2 a';

// Functions
const getElText = (element) => {
  let text = element.textContent;
  
  // Finding carets in text
  let nCaret = text.indexOf('\n');
  let tCaret = text.indexOf('\t');
  let rCaret = text.indexOf('\r');
  
  if (nCaret > -1 || tCaret > -1 || rCaret > -1) {

    // Deleting carets
    return text.replace(/[\n\t\r]/g, '');
  }

  return text;
}

router.get('/', (req, res) => {
  request(eventsUrl, (error, response, body) => {
    if (!error && response.statusCode == 200) {

      // Prepearing dom object from fetched page text
      const document = new JSDOM(body).window.document;
      
      // Select page posts
      const posts = document.querySelectorAll('.gp-blog-large .gp-post-item');

      // Prepearing posts data object
      const postsData = [];
      for(let i = 0; i < posts.length; i++) {
        let post = posts[i];
        let $postImage = post.querySelector('img');
        let $postTitle = post.querySelector(titleSelector);

        postsData.push({
          img: $postImage ? $postImage.src : '',
          link: $postTitle.href,
          desc: getElText(post.querySelector(descSelector)),
          title: $postTitle.title,
        });
      }

      res.json(postsData);
    }
  })
});

router.get('/:id', (req, res) => {
  console.log(req.params.id);
  res.json({id: req.params.id});
});

module.exports = router;