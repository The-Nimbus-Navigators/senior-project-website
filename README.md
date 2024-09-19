# senior-project-website
Basic website encapsulating information about our university senior capstone project.
## Prereqs
- Computer must have a [Node.js](https://nodejs.org/en) installation
## How to develop
0. If its your first time working with this project, run `npm install` to install nessary node modules.
1. Build the styling by running ``npm run build``.
2. Serve the page by running ``npm run start``. This hosts the static page on your computer with "live" updates – meaning you can view your changes via local host and update the page with new changes by refreshing your browser.
## How to add deliverables to the website
1. Add documents to ``src/assets/pdfs``. 
2. Add path of new file to const within javascript at the top of our page's HTML. Const is called ``pdfFiles``. Follow given examples in code.
3. Push and let GH actions take care of the rest.
