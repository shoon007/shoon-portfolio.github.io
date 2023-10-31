const bikeIconEl = document.querySelector(".bike-icon")
const beforeEl = document.querySelector(".before")
const decisionEl = document.querySelector(".decision-div")
const checkEl = document.querySelector(".check")
const backEl = document.querySelector(".back")
const unreadyEl = document.querySelector(".unready-icon")
const infoEl = document.querySelector(".info")
const titleEl = document.querySelector(".title")
const wheelsEl = document.querySelector(".wheels")
const spansDiv = document.querySelector(".spans-div")
const changeEl = document.querySelector(".change")
const change2El = document.querySelector(".change2")
const change3El = document.querySelector(".change3")
const arrowEl = document.querySelector(".arrow-icon")
const bikedivEl = document.querySelector(".bike-div")

const bikeEl = document.querySelector(".bike")


const originEl = document.querySelector(".origin")
const originForwards = document.querySelector(".origin-forwards")
const originBackwards = document.querySelector(".origin-backwards")



checkEl.addEventListener("click", () => {

    check()

    titleEl.classList.add("change")
    wheelsEl.classList.add("change2")
    spansDiv.classList.add("change3")


    beforeEl.classList.add("after")
    beforeEl.classList.remove("before")
    beforeEl.style.transition = "all 0.3s linear"

    setTimeout(() => {
        decisionEl.classList.add("active")
        decisionEl.style.transition = "all 0.2s linear"
    }, 100)

})

function check() {
    bikeEl.classList.add("forward")
    w1B.classList.add("wheel1-move")
    w1F.classList.add("wheel1-move")
    w2B.classList.add("wheel1-move")
    w2F.classList.add("wheel1-move")
    w3B.classList.add("wheel1-move")
    w3F.classList.add("wheel1-move")
    w4B.classList.add("wheel1-move")
    w4F.classList.add("wheel1-move")



    bikeEl.classList.remove("backward")
    w1B.classList.remove("wheel1-backward")
    w1F.classList.remove("wheel1-backward")
    w2B.classList.remove("wheel1-backward")
    w2F.classList.remove("wheel1-backward")
    w3B.classList.remove("wheel1-backward")
    w3F.classList.remove("wheel1-backward")
    w4B.classList.remove("wheel1-backward")
    w4F.classList.remove("wheel1-backward")

    bikedivEl.classList.remove("animate")

    //bikedivEl.classList.toggle("animate")



    w1B.classList.remove("w1-b")
    w1F.classList.remove("w1-f")

    w2B.classList.remove("w2-b")
    w2F.classList.remove("w2-f")

    w3B.classList.remove("w3-b")
    w3F.classList.remove("w3-f")

    w4B.classList.remove("w4-b")
    w4F.classList.remove("w4-f")







}





backEl.addEventListener("click", () => {
    bikeEl.classList.remove("forward")
    w1B.classList.remove("wheel1-move")
    w1F.classList.remove("wheel1-move")
        /* w2B.classList.remove("wheel1-move")
    w2F.classList.remove("wheel1-move")
    w3B.classList.remove("wheel1-move")
    w3F.classList.remove("wheel1-move")
    w4B.classList.remove("wheel1-move")
    w4F.classList.remove("wheel1-move")
 */



    bikeEl.classList.add("backward")
    w1B.classList.add("wheel1-backward")
    w1F.classList.add("wheel1-backward")
    w2B.classList.add("wheel1-backward")
    w2F.classList.add("wheel1-backward")
    w3B.classList.add("wheel1-backward")
    w3F.classList.add("wheel1-backward")
    w4B.classList.add("wheel1-backward")
    w4F.classList.add("wheel1-backward")


    w1B.classList.remove("w1-b")
    w1F.classList.remove("w1-f")
    beforeEl.classList.add("before")
    beforeEl.classList.remove("after")
    beforeEl.style.transition = " all 0.2s linear"
    decisionEl.classList.remove('active')
    decisionEl.style.transition = "all 0.1s linear"

    titleEl.classList.remove("change")
    wheelsEl.classList.remove("change2")
    spansDiv.classList.remove("change3")




})






const originbEl = document.querySelector(".origin-back")
const originfEl = document.querySelector(".origin-front")

unreadyEl.addEventListener("click", () => {
    arrowEl.classList.add("remove")
    bikeEl.classList.add("pink-bike")
    bikeEl.style.transition = "all 0.5s "
    originbEl.classList.add("origin-b")
    originfEl.classList.add("origin-f")


    unreadyEl.classList.add("ready-icon")
    checkEl.classList.add("active")

    infoEl.classList.add("opacity")



    bikedivEl.classList.toggle("animate")
    w3bEl.classList.add("wheel3-hidden")
    w3fEl.classList.add("wheel3-hidden")

    w1bEl.classList.add("wheel1-hidden")
    w1fEl.classList.add("wheel1-hidden")


    w2bEl.classList.add("wheel2-hidden")
    w2fEl.classList.add("wheel2-hidden")


    w4bEl.classList.remove("wheel4-hidden")
    w4fEl.classList.remove("wheel4-hidden")


    w2B.classList.remove("w2-b")
    w2F.classList.remove("w2-f")
    w1B.classList.remove("w1-b")
    w1F.classList.remove("w1-f")
    w3B.classList.remove("w3-b")
    w3F.classList.remove("w3-f")
    w4B.classList.add("w4-b")
    w4F.classList.add("w4-f")


    originbEl.classList.remove("origin-b")
    originfEl.classList.remove("origin-f")


    originbEl.classList.add("origin-hidden")
    originfEl.classList.add("origin-hidden")






})






const w1B = document.querySelector(".wheel1-back ")
const w1F = document.querySelector(".wheel1-front")
const w2B = document.querySelector(".wheel2-back")
const w2F = document.querySelector(".wheel2-front")
const w3B = document.querySelector(".wheel3-back")
const w3F = document.querySelector(".wheel3-front")
const w4B = document.querySelector(".wheel4-back")
const w4F = document.querySelector(".wheel4-front")





const w1bEl = document.querySelector(".wheel1b")
const w1fEl = document.querySelector(".wheel1f")

const w2bEl = document.querySelector(".wheel2b")
const w2fEl = document.querySelector(".wheel2f")

const w3bEl = document.querySelector(".wheel3b")
const w3fEl = document.querySelector(".wheel3f")

const w4bEl = document.querySelector(".wheel4b")
const w4fEl = document.querySelector(".wheel4f")







const btn1El = document.querySelector(".btn-1")
const btn2El = document.querySelector(".btn-2")
const btn3El = document.querySelector(".btn-3")
const btn4El = document.querySelector(".btn-4")


btn1El.addEventListener("click", () => {


    /*  bikedivEl.classList.add("animate") */



    w1B.classList.add("w1-b")
    w1F.classList.add("w1-f")

    w2B.classList.remove("w2-b")
    w2F.classList.remove("w2-f")

    w3B.classList.remove("w3-b")
    w3F.classList.remove("w3-f")

    w4B.classList.remove("w4-b")
    w4F.classList.remove("w4-f")






    w1bEl.classList.remove("wheel1-hidden")
    w1fEl.classList.remove("wheel1-hidden")

    w2bEl.classList.add("wheel2-hidden")
    w2fEl.classList.add("wheel2-hidden")

    w3bEl.classList.add("wheel3-hidden")
    w3fEl.classList.add("wheel3-hidden")

    w4bEl.classList.add("wheel4-hidden")
    w4fEl.classList.add("wheel4-hidden")









})



btn2El.addEventListener("click", () => {


    /*  bikedivEl.classList.add("animate") */

    w2bEl.classList.remove("wheel2-hidden")
    w2fEl.classList.remove("wheel2-hidden")

    w1bEl.classList.add("wheel1-hidden")
    w1fEl.classList.add("wheel1-hidden")

    w3bEl.classList.add("wheel3-hidden")
    w3fEl.classList.add("wheel3-hidden")

    w4bEl.classList.add("wheel4-hidden")
    w4fEl.classList.add("wheel4-hidden")


    w2B.classList.add("w2-b")
    w2F.classList.add("w2-f")
    w1B.classList.remove("w1-b")
    w1F.classList.remove("w1-f")
    w3B.classList.remove("w3-b")
    w3F.classList.remove("w3-f")
    w4B.classList.remove("w4-b")
    w4F.classList.remove("w4-f")


})



btn3El.addEventListener("click", () => {



    w3bEl.classList.remove("wheel3-hidden")
    w3fEl.classList.remove("wheel3-hidden")

    w1bEl.classList.add("wheel1-hidden")
    w1fEl.classList.add("wheel1-hidden")


    w2bEl.classList.add("wheel2-hidden")
    w2fEl.classList.add("wheel2-hidden")


    w4bEl.classList.add("wheel4-hidden")
    w4fEl.classList.add("wheel4-hidden")

    /*  bikedivEl.classList.add("animate") */
    w2B.classList.remove("w2-b")
    w2F.classList.remove("w2-f")
    w1B.classList.remove("w1-b")
    w1F.classList.remove("w1-f")
    w3B.classList.add("w3-b")
    w3F.classList.add("w3-f")
    w4B.classList.remove("w4-b")
    w4F.classList.remove("w4-f")



})



btn4El.addEventListener("click", () => {




    w1bEl.classList.add("wheel1-hidden")
    w1fEl.classList.add("wheel1-hidden")


    w2bEl.classList.add("wheel2-hidden")
    w2fEl.classList.add("wheel2-hidden")


    w3bEl.classList.add("wheel3-hidden")
    w3fEl.classList.add("wheel3-hidden")

    w4bEl.classList.remove("wheel4-hidden")
    w4fEl.classList.remove("wheel4-hidden")

    /*  bikedivEl.classList.add("animate") */
    w2B.classList.remove("w2-b")
    w2F.classList.remove("w2-f")
    w1B.classList.remove("w1-b")
    w1F.classList.remove("w1-f")
    w3B.classList.remove("w3-b")
    w3F.classList.remove("w3-f")
    w4B.classList.add("w4-b")
    w4F.classList.add("w4-f")




})