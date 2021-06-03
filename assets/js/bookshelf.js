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

    // set up lazy loading for square books
    let scrolling = false
    let timeout

    const isInView = (img) => {
        return img.offsetTop < window.innerHeight + window.pageYOffset
    }

    const checkSquareBooks = () => {
        const squareBooks = Array.from(
            document.getElementsByClassName('square-book-lazy')
        )

        squareBooks.forEach((squareBook) => {
            if (!isInView(squareBook)) {
                return
            }

            const thumb = squareBook
                .getElementsByClassName('square-book-cover')
                .item(0)

            const coverURL = thumb.getAttribute('data-cover')
            thumb.style.backgroundImage = `url(${coverURL})`

            squareBook.classList.remove('square-book-lazy')
        })
    }

    const handleScroll = () => {
        clearTimeout(timeout)
        timeout = setTimeout(checkSquareBooks, 50)
    }

    window.onscroll = handleScroll
    window.onresize = handleScroll
    if (screen && screen.orientation) {
        screen.orientation.onchange = handleScroll
    }
})()
