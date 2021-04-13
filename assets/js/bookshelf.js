import { tns } from "tiny-slider/src/tiny-slider";

(() => {
  const bookshelves = document.getElementsByClassName("shelf-slider");
  if (bookshelves.length < 1) {
    console.log("No bookshelves to create");
    return;
  }

  Array.from(bookshelves).forEach(bookshelf => {

      const slider = new tns({
        container: bookshelf,
        autoWidth: true,
        // autoHeight: true,
        gutter: 10,
        slideBy: 'page',
        // autoplay: true,
        nav: true,
        navPosition: "bottom",
        nextButton: false,
        prevButton: false,
        controls: false
      });

  });

})();
