AFRAME.registerComponent("markerHandler", {
    init: async function() {
        this.el.addEventListener("markerFound", () => {this.handleMarkerFound()})
        this.el.addEventListener("markerLost", () => {this.handleMarkerLost()})
    },
    handleMarkerFound: function() {
        var buttondiv = document.getElementById("button-div")
        buttondiv.style.display = "flex"
        var ratingbutton = document.getElementById("rating-button")
        var orderbutton = document.getElementById("order-button")
        ratingbutton.addEventListener("click", function() {
            swal({
                icon: "warning",
                title: "Rate Dish",
                text: "Work in progress.."
            })
        }),
        orderbutton.addEventListener("click", function() {
            swal({
                icon: "https://i.imgur.com/4NZ6uLY.jpg",
                title: "Thanks for the order",
                text: "Your order will be served soon at your table"
            })
        })
    },
    handleMarkerLost: function() {
        var buttondiv = document.getElementById("button-div")
        buttondiv.style.display = "none"
    }
})