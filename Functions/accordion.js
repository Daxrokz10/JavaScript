function accordion(clickedDiv){
            // Find the button and icon inside the clicked accordion-div
            const icon = clickedDiv.querySelector(".fa-arrow-down, .fa-arrow-up");
            // Find the next sibling paragraph (the content to show/hide)
            const para = clickedDiv.nextElementSibling;
            // Toggle active class for this paragraph
            para.classList.toggle("active");
            // Toggle rotate class for this icon
            icon.classList.toggle("rotate");
        }