const pages = [
    {
        image: 'img/Cover.jpg',
        caption: 'Happy 2nd anniversary my love!',
        isCover: true // Indicate that this is the cover page
    },
    {
        image: 'img/page2.jpg',
        caption: ''
    },
    {
        image: 'img/page3.jpg',
        caption: ''
    },
    {
        image: 'img/page4.jpg',
        caption: ''
    },
    // Add more pages up to 29
    {
        image: 'img/page5.jpg',
        caption: 'Our wedding day.'
    },
    {
        image: 'img/page7.jpg',
        caption: ''
    }, {
        image: 'img/page8.jpg',
        caption: ''
    },
     {
        image: 'img/page9.jpg',
        caption: ''
    },
    {
        image: 'img/page10.jpg',
        caption: ''
    },
    {
        image: 'img/pagee11.jpg',
        caption: ''
    },
    {
        image: 'img/pagee12.jpg',
        caption: ''
    },
    {
        image: 'img/pg2.PNG',
        caption: ''
    },
    {
        image: 'img/pg13.PNG',
        caption: ''
    },
    {
        image: 'img/pg14.PNG',
        caption: ''
    },
    {
        image: 'img/pg15.PNG',
        caption: ''
    },
    {
        image: 'img/pg16.PNG',
        caption: ''
    },
    {
        image: 'img/pg17.PNG',
        caption: ''
    },
    {
        image: 'img/pg18.PNG',
        caption: ''
    },
    {
        image: 'img/pg19.PNG',
        caption: ''
    },
    {
        image: 'img/pg20.PNG',
        caption: ''
    },
    {
        image: 'img/pg21.PNG',
        caption: ''
    },
    {
        image: 'img/pg22.PNG',
        caption: ''
    },
    {
        image: 'img/pg23.PNG',
        caption: ''
    },
    {
        image: 'img/pg24.PNG',
        caption: ''
    },
    {
        image: 'img/pg25.PNG',
        caption: ''
    },
    {
        image: 'img/pg26.PNG',
        caption: ''
    },
    {
        image: 'img/pg27.PNG',
        caption: ''
    },
    {
        image: 'img/ppg28.PNG',
        caption: ''
    },

];

// Function to add glow effect to the caption
function addGlowEffect() {
    const coverCaption = document.querySelector('.cover .caption');
    if (coverCaption) {
        coverCaption.style.textShadow = '0 0 10px #00ff00, 0 0 20px #00ff00, 0 0 30px #00ff00'; // Change color and shadow size as needed
    }
}

// Add event listener to apply glow effect after DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    addGlowEffect();
});

let currentPage = 0;

function displayPage(pageIndex) {
    const bookPage = document.getElementById('bookPage');
    const page = pages[pageIndex];
    console.log(`Displaying page: ${pageIndex}, Image path: ${page.image}`); // Log the image path
    if (page.isCover) {
        bookPage.innerHTML = `
            <img src="${page.image}" alt="${page.caption}">
            <h1>${page.caption}</h1>
        `;
    } else {
        bookPage.innerHTML = `
            <img src="${page.image}" alt="${page.caption}">
            <p>${page.caption}</p>
        `;
    }
}

function nextPage() {
    if (currentPage < pages.length - 1) {
        currentPage++;
        displayPage(currentPage);
    }
}

function previousPage() {
    if (currentPage > 0) {
        currentPage--;
        displayPage(currentPage);
    }
}

// Initialize the book with the first page
window.onload = function() {
    displayPage(currentPage);
};

