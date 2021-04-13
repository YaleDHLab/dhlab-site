import { tns } from 'tiny-slider/src/tiny-slider'
;(() => {
    const bookshelves = document.getElementsByClassName('shelf')

    if (bookshelves.length < 1) {
        console.log('No bookshelves to create')
        return
    }

    Array.from(bookshelves).forEach((bookshelf) => {
        const container = bookshelf
            .getElementsByClassName('shelf-slider')
            .item(0)
        const controlsContainer = bookshelf
            .getElementsByClassName('shelf-controls')
            .item(0)

        const slider = new tns({
            container: container,
            autoWidth: true,
            gutter: 5,
            // slideBy: 'page',
            // autoplay: true,
            nav: true,
            navPosition: 'bottom',
            // controls: false,
            // nextButton: nextButton,
            // prevButton: "<<",
            controlsContainer: controlsContainer,
            lazyload: true,
            loop: false,
            responsive: {
                0: {
                    edgePadding: 10,
                },
                640: {
                    edgePadding: 20,
                },
                700: {
                    edgePadding: 0,
                },
            },
        })
    })
})()
