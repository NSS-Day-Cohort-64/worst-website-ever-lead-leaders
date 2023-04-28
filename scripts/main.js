

//adding event listener to footer buttons
document.addEventListener(
    "click",
    (whenClicked) => {
        const whatClicked = whenClicked.target

        if(whatClicked.dataset.type === "button_yes") {
            window.alert(`You're in luck! We are launching 1,000 new pencilicious websites next week. Join our mailing list. `)
        }
        else if(whatClicked.dataset.type === "button_no")
        { window.alert(`Well then... see you never`)

        }
    }
)