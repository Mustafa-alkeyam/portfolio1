 // Animate Profile Picture
        document.addEventListener("DOMContentLoaded", function() {
            let profileImg = document.querySelector(".profile img");

            profileImg.addEventListener("mouseover", function() {
                profileImg.style.transform = "scale(1.1)";
            });

            profileImg.addEventListener("mouseout", function() {
                profileImg.style.transform = "scale(1)";
            });
        });

        // Animate Social Media Icons
        let socialIcons = document.querySelectorAll(".social img");

        socialIcons.forEach(function(icon) {
            icon.addEventListener("mouseover", function() {
                icon.style.transition = "transform 0.5s";
                icon.style.transform = "rotate(360deg)";
            });

            icon.addEventListener("mouseout", function() {
                icon.style.transform = "rotate(0deg)";
            });
        });

        // Animate Service Icons
        let serviceIcons = document.querySelectorAll(".services img");

        serviceIcons.forEach(function(icon) {
            icon.addEventListener("mouseover", function() {
                icon.style.boxShadow = "0px 5px 15px rgba(0, 0, 0, 0.3)";
                icon.style.transform = "translateY(-10px)";
            });

            icon.addEventListener("mouseout", function() {
                icon.style.boxShadow = "none";
                icon.style.transform = "translateY(0)";
            });
        });
    