// Event function for Hamburger list
const hamburger_menu = () => {
    let display = window.getComputedStyle(document.getElementById("hamburger_menu")).display

    if (display == "none") {
        window.document.getElementById("hamburger_menu").style.display = "block"
        window.document.getElementById("hamburger").style.backgroundImage = "url('./Images/MenuClose.png')"
        window.document.getElementById("language_list").style.display = "none"
        window.document.getElementById("caret_down").style.display = "block"
        window.document.getElementById("caret_up").style.display = "none"
    }

    else {
        window.document.getElementById("hamburger_menu").style.display = "none"
        window.document.getElementById("hamburger").style.backgroundImage = "url('./images/MenuOpen.png')"
    }
}


// Event function for language list
const select_language = () => {
    let display = window.getComputedStyle(document.getElementById("language_list")).display
    if (display == "none") {
        window.document.getElementById("language_list").style.display = "block"
        window.document.getElementById("caret_down").style.display = "none"
        window.document.getElementById("caret_up").style.display = "block"
        window.document.getElementById("hamburger_menu").style.display = "none"
        window.document.getElementById("hamburger").style.backgroundImage = "url('./images/MenuOpen.png')"
    }

    else {
        window.document.getElementById("language_list").style.display = "none"
        window.document.getElementById("caret_down").style.display = "block"
        window.document.getElementById("caret_up").style.display = "none"
    }
}


// Playing video on clicking the image
const play = () => {
    window.document.getElementById("video_image").style.display = "none"
    window.document.getElementById("play_video").style.display = "block"
}



// Popular fantasy sports slider
// Here we will give conditions at different width to slide better
const forward_scroll = () => {
    if (window.innerWidth <= 385) {
        window.document.getElementById("slides").scrollBy(255, 0)
    }

    else if ((window.innerWidth > 385 && window.innerWidth < 500) || window.innerWidth == 500) {
        window.document.getElementById("slides").scrollBy(400, 0)
    }

    else if ((window.innerWidth > 500 && window.innerWidth < 600) || window.innerWidth == 600) {
        window.document.getElementById("slides").scrollBy(270, 0)
    }

    else if ((window.innerWidth > 600 && window.innerWidth < 800) || window.innerWidth == 800) {
        window.document.getElementById("slides").scrollBy(355, 0)
    }

    else if ((window.innerWidth > 800 && window.innerWidth < 1000) || window.innerWidth == 1000) {
        window.document.getElementById("slides").scrollBy(450, 0)
    }

    else if ((window.innerWidth > 1000 && window.innerWidth < 1270) || window.innerWidth == 1270) {
        window.document.getElementById("slides").scrollBy(400, 0)
    }

    else if (window.innerWidth > 1270) {
        window.document.getElementById("slides").scrollBy(390, 0)
    }
}



const reverse_scroll = () => {
    if (window.innerWidth <= 385) {
        window.document.getElementById("slides").scrollBy(-255, 0)
    }

    else if ((window.innerWidth > 385 && window.innerWidth < 500) || window.innerWidth == 500) {
        window.document.getElementById("slides").scrollBy(-400, 0)
    }

    else if ((window.innerWidth > 500 && window.innerWidth < 600) || window.innerWidth == 600) {
        window.document.getElementById("slides").scrollBy(-270, 0)
    }

    else if ((window.innerWidth > 600 && window.innerWidth < 800) || window.innerWidth == 800) {
        window.document.getElementById("slides").scrollBy(-355, 0)
    }

    else if ((window.innerWidth > 800 && window.innerWidth < 1000) || window.innerWidth == 1000) {
        window.document.getElementById("slides").scrollBy(-450, 0)
    }

    else if ((window.innerWidth > 1000 && window.innerWidth < 1270) || window.innerWidth == 1270) {
        window.document.getElementById("slides").scrollBy(-400, 0)
    }

    else if (window.innerWidth > 1270) {
        window.document.getElementById("slides").scrollBy(-390, 0)
    }
}


// FAQs Area Event
// 1st FAQ
const answer1 = () => {
    let ans_height1 = window.getComputedStyle(document.getElementById("answer1")).height
    let question_bar1 = window.document.getElementById("question1")
    let answer_bar1 = window.document.getElementById("answer1")
    if (ans_height1 == "0px") {
        question_bar1.style.borderBottom = "none"
        question_bar1.style.borderBottomLeftRadius = "0"
        question_bar1.style.borderBottomRightRadius = "0"
        answer_bar1.style.height = "auto"
        answer_bar1.style.border = "1px solid #dadada"
        answer_bar1.style.borderBottomLeftRadius = "4px"
        answer_bar1.style.borderBottomRightRadius = "4px"
        answer_bar1.style.borderTop = "none"
        answer_bar1.style.borderTopLeftRadius = "0"
        answer_bar1.style.borderTopRightRadius = "0"
        window.document.getElementById("open_answer1").style.display = "none"
        window.document.getElementById("close_answer1").style.display = "block"
    }
    else {
        answer_bar1.style.height = "0"
        answer_bar1.style.border = "none"
        question_bar1.style.borderBottomLeftRadius = "4px"
        question_bar1.style.borderBottomRightRadius = "4px"
        question_bar1.style.borderBottom = "solid"
        question_bar1.style.borderBottomColor = "#dadada"
        question_bar1.style.borderBottomWidth = "1px"
        window.document.getElementById("open_answer1").style.display = "block"
        window.document.getElementById("close_answer1").style.display = "none"
    }
}

// 2nd FAQ
const answer2 = () => {
    let ans_height2 = window.getComputedStyle(document.getElementById("answer2")).height
    let question_bar2 = window.document.getElementById("question2")
    let answer_bar2 = window.document.getElementById("answer2")
    if (ans_height2 == "0px") {
        question_bar2.style.borderBottom = "none"
        question_bar2.style.borderBottomLeftRadius = "0"
        question_bar2.style.borderBottomRightRadius = "0"
        answer_bar2.style.height = "auto"
        answer_bar2.style.border = "1px solid #dadada"
        answer_bar2.style.borderBottomLeftRadius = "4px"
        answer_bar2.style.borderBottomRightRadius = "4px"
        answer_bar2.style.borderTop = "none"
        answer_bar2.style.borderTopLeftRadius = "0"
        answer_bar2.style.borderTopRightRadius = "0"
        window.document.getElementById("open_answer2").style.display = "none"
        window.document.getElementById("close_answer2").style.display = "block"
    }
    else {
        answer_bar2.style.height = "0"
        answer_bar2.style.border = "none"
        question_bar2.style.borderBottomLeftRadius = "4px"
        question_bar2.style.borderBottomRightRadius = "4px"
        question_bar2.style.borderBottom = "solid"
        question_bar2.style.borderBottomColor = "#dadada"
        question_bar2.style.borderBottomWidth = "1px"
        window.document.getElementById("open_answer2").style.display = "block"
        window.document.getElementById("close_answer2").style.display = "none"
    }
}

// 3rd FAQ
const answer3 = () => {
    let ans_height3 = window.getComputedStyle(document.getElementById("answer3")).height
    let question_bar3 = window.document.getElementById("question3")
    let answer_bar3 = window.document.getElementById("answer3")
    if (ans_height3 == "0px") {
        question_bar3.style.borderBottom = "none"
        question_bar3.style.borderBottomLeftRadius = "0"
        question_bar3.style.borderBottomRightRadius = "0"
        answer_bar3.style.height = "auto"
        answer_bar3.style.border = "1px solid #dadada"
        answer_bar3.style.borderBottomLeftRadius = "4px"
        answer_bar3.style.borderBottomRightRadius = "4px"
        answer_bar3.style.borderTop = "none"
        answer_bar3.style.borderTopLeftRadius = "0"
        answer_bar3.style.borderTopRightRadius = "0"
        window.document.getElementById("open_answer3").style.display = "none"
        window.document.getElementById("close_answer3").style.display = "block"
    }
    else {
        answer_bar3.style.height = "0"
        answer_bar3.style.border = "none"
        question_bar3.style.borderBottomLeftRadius = "4px"
        question_bar3.style.borderBottomRightRadius = "4px"
        question_bar3.style.borderBottom = "solid"
        question_bar3.style.borderBottomColor = "#dadada"
        question_bar3.style.borderBottomWidth = "1px"
        window.document.getElementById("open_answer3").style.display = "block"
        window.document.getElementById("close_answer3").style.display = "none"
    }
}

// 4th FAQ
const answer4 = () => {
    let ans_height4 = window.getComputedStyle(document.getElementById("answer4")).height
    let question_bar4 = window.document.getElementById("question4")
    let answer_bar4 = window.document.getElementById("answer4")
    if (ans_height4 == "0px") {
        question_bar4.style.borderBottom = "none"
        question_bar4.style.borderBottomLeftRadius = "0"
        question_bar4.style.borderBottomRightRadius = "0"
        answer_bar4.style.height = "auto"
        answer_bar4.style.border = "1px solid #dadada"
        answer_bar4.style.borderBottomLeftRadius = "4px"
        answer_bar4.style.borderBottomRightRadius = "4px"
        answer_bar4.style.borderTop = "none"
        answer_bar4.style.borderTopLeftRadius = "0"
        answer_bar4.style.borderTopRightRadius = "0"
        window.document.getElementById("open_answer4").style.display = "none"
        window.document.getElementById("close_answer4").style.display = "block"
    }
    else {
        answer_bar4.style.height = "0"
        answer_bar4.style.border = "none"
        question_bar4.style.borderBottomLeftRadius = "4px"
        question_bar4.style.borderBottomRightRadius = "4px"
        question_bar4.style.borderBottom = "solid"
        question_bar4.style.borderBottomColor = "#dadada"
        question_bar4.style.borderBottomWidth = "1px"
        window.document.getElementById("open_answer4").style.display = "block"
        window.document.getElementById("close_answer4").style.display = "none"
    }
}

// 5th FAQ
const answer5 = () => {
    let ans_height5 = window.getComputedStyle(document.getElementById("answer5")).height
    let question_bar5 = window.document.getElementById("question5")
    let answer_bar5 = window.document.getElementById("answer5")
    if (ans_height5 == "0px") {
        question_bar5.style.borderBottom = "none"
        question_bar5.style.borderBottomLeftRadius = "0"
        question_bar5.style.borderBottomRightRadius = "0"
        answer_bar5.style.height = "auto"
        answer_bar5.style.border = "1px solid #dadada"
        answer_bar5.style.borderBottomLeftRadius = "4px"
        answer_bar5.style.borderBottomRightRadius = "4px"
        answer_bar5.style.paddingBottom = "20px"
        answer_bar5.style.borderTop = "none"
        answer_bar5.style.borderTopLeftRadius = "0"
        answer_bar5.style.borderTopRightRadius = "0"
        window.document.getElementById("open_answer5").style.display = "none"
        window.document.getElementById("close_answer5").style.display = "block"
        window.document.getElementById("coupon_redeem").style.paddingLeft = "25px"
        window.document.getElementById("coupon_redeem").style.lineHeight = "22px"
    }
    else {
        answer_bar5.style.height = "0"
        answer_bar5.style.border = "none"
        answer_bar5.style.paddingBottom = "0"
        question_bar5.style.borderBottomLeftRadius = "4px"
        question_bar5.style.borderBottomRightRadius = "4px"
        question_bar5.style.borderBottom = "solid"
        question_bar5.style.borderBottomColor = "#dadada"
        question_bar5.style.borderBottomWidth = "1px"
        window.document.getElementById("open_answer5").style.display = "block"
        window.document.getElementById("close_answer5").style.display = "none"
    }
}

// 6th FAQ
const answer6 = () => {
    let ans_height6 = window.getComputedStyle(document.getElementById("answer6")).height
    let question_bar6 = window.document.getElementById("question6")
    let answer_bar6 = window.document.getElementById("answer6")
    if (ans_height6 == "0px") {
        question_bar6.style.borderBottom = "none"
        question_bar6.style.borderBottomLeftRadius = "0"
        question_bar6.style.borderBottomRightRadius = "0"
        answer_bar6.style.height = "auto"
        answer_bar6.style.border = "1px solid #dadada"
        answer_bar6.style.borderBottomLeftRadius = "4px"
        answer_bar6.style.borderBottomRightRadius = "4px"
        answer_bar6.style.paddingBottom = "20px"
        answer_bar6.style.borderTop = "none"
        answer_bar6.style.borderTopLeftRadius = "0"
        answer_bar6.style.borderTopRightRadius = "0"
        window.document.getElementById("open_answer6").style.display = "none"
        window.document.getElementById("close_answer6").style.display = "block"
        window.document.getElementById("app_download_steps").style.paddingLeft = "40px"
    }
    else {
        answer_bar6.style.height = "0"
        answer_bar6.style.border = "none"
        answer_bar6.style.paddingBottom = "0"
        question_bar6.style.borderBottomLeftRadius = "4px"
        question_bar6.style.borderBottomRightRadius = "4px"
        question_bar6.style.borderBottom = "solid"
        question_bar6.style.borderBottomColor = "#dadada"
        question_bar6.style.borderBottomWidth = "1px"
        window.document.getElementById("open_answer6").style.display = "block"
        window.document.getElementById("close_answer6").style.display = "none"
    }
}

// 7th FAQ
const answer7 = () => {
    let ans_height7 = window.getComputedStyle(document.getElementById("answer7")).height
    let question_bar7 = window.document.getElementById("question7")
    let answer_bar7 = window.document.getElementById("answer7")
    if (ans_height7 == "0px") {
        question_bar7.style.borderBottom = "none"
        question_bar7.style.borderBottomLeftRadius = "0"
        question_bar7.style.borderBottomRightRadius = "0"
        answer_bar7.style.height = "auto"
        answer_bar7.style.border = "1px solid #dadada"
        answer_bar7.style.borderBottomLeftRadius = "4px"
        answer_bar7.style.borderBottomRightRadius = "4px"
        answer_bar7.style.borderTop = "none"
        answer_bar7.style.borderTopLeftRadius = "0"
        answer_bar7.style.borderTopRightRadius = "0"
        window.document.getElementById("open_answer7").style.display = "none"
        window.document.getElementById("close_answer7").style.display = "block"
    }
    else {
        answer_bar7.style.height = "0"
        answer_bar7.style.border = "none"
        question_bar7.style.borderBottomLeftRadius = "4px"
        question_bar7.style.borderBottomRightRadius = "4px"
        question_bar7.style.borderBottom = "solid"
        question_bar7.style.borderBottomColor = "#dadada"
        question_bar7.style.borderBottomWidth = "1px"
        window.document.getElementById("open_answer7").style.display = "block"
        window.document.getElementById("close_answer7").style.display = "none"
    }
}

// 8th FAQ
const answer8 = () => {
    let ans_height8 = window.getComputedStyle(document.getElementById("answer8")).height
    let question_bar8 = window.document.getElementById("question8")
    let answer_bar8 = window.document.getElementById("answer8")
    if (ans_height8 == "0px") {
        question_bar8.style.borderBottom = "none"
        question_bar8.style.borderBottomLeftRadius = "0"
        question_bar8.style.borderBottomRightRadius = "0"
        answer_bar8.style.paddingRight = "30px"
        answer_bar8.style.height = "auto"
        answer_bar8.style.border = "1px solid #dadada"
        answer_bar8.style.borderBottomLeftRadius = "4px"
        answer_bar8.style.borderBottomRightRadius = "4px"
        answer_bar8.style.borderTop = "none"
        answer_bar8.style.borderTopLeftRadius = "0"
        answer_bar8.style.borderTopRightRadius = "0"
        window.document.getElementById("open_answer8").style.display = "none"
        window.document.getElementById("close_answer8").style.display = "block"
        window.document.getElementById("play_steps").style.paddingLeft = "42px"
        window.document.getElementById("play_steps").style.paddingBottom = "20px"
    }
    else {
        answer_bar8.style.height = "0"
        answer_bar8.style.border = "none"
        question_bar8.style.borderBottomLeftRadius = "4px"
        question_bar8.style.borderBottomRightRadius = "4px"
        question_bar8.style.borderBottom = "solid"
        question_bar8.style.borderBottomColor = "#dadada"
        question_bar8.style.borderBottomWidth = "1px"
        window.document.getElementById("open_answer8").style.display = "block"
        window.document.getElementById("close_answer8").style.display = "none"
    }
}