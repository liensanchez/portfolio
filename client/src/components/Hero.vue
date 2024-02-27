<script>
import axios from "axios";

export default {
    data() {
        return {
            technologiesImages: [
                "https://i.ibb.co/8r31rv2/pngwing-com-11.png",
/*                 "https://i.ibb.co/5YCwjpX/pngwing-com-12.png",
                "https://i.ibb.co/GcM50GP/pngwing-com-10.png",
                "https://i.ibb.co/DzRffhD/pngwing-com-7.png",
                "https://i.ibb.co/Syt9WQm/pngwing-com-6.png",
                "https://i.ibb.co/ZxZj38S/pngwing-com-5.png",
                "https://i.ibb.co/XDFYPXp/pngwing-com-3.png",
                "https://i.ibb.co/7n2hxvx/pngwing-com-4.png",
                "https://i.ibb.co/SXWNNc3/pngwing-com-2.png",
                "https://i.ibb.co/QYQcwMV/pngwing-com-1.png",
                "https://i.ibb.co/py4TFjc/pngwing-com.png",
                "https://i.ibb.co/n3dNHk1/pngwing-com-14.png",
                "https://i.ibb.co/VBFxdZV/pngwing-com-13.png",
                "https://i.ibb.co/Wn9GK0f/pngwing-com-16.png",
                "https://i.ibb.co/7r3wPsq/pngwing-com-15.png",
                "https://i.ibb.co/gSp43wv/pngwing-com-17.png",
                "https://i.ibb.co/hRK8nkF/pngwing-com-19.png",
                "https://i.ibb.co/MCBv1X0/pngwing-com-18.png", */
            ],
        };
    },
};
</script>

<template>
    <div class="hero-container">
        <div class="custom-container">
            <div class="hero-content">
                <div class="hero-info">
                    <h1>Hi I'm Lien!</h1>
                    <h3>FullStack Developer</h3>
                    <p>
                        I am a skilled full stack developer who is proactive,
                        creative, and always eager to learn. I am currently
                        looking for new job opportunities, particularly remote
                        work that allows me to collaborate with people from
                        around the world. I am proficient in English at the C2
                        level, which enables me to communicate effectively with
                        clients and colleagues from different backgrounds. If
                        you are looking for a talented and passionate developer,
                        I am the right candidate for you.
                    </p>
                </div>

                <div class="hero-img">
                    <img
                        v-for="(img, index) in technologiesImages"
                        :src="img"
                        class="image-technologies"
                        :alt="'Image ' + (index + 1)"
                    />

                    <img
                        src="https://i.ibb.co/WnwntK4/Lien-Open-Head.png"
                        alt="Lien-Open-Head"
                        class="image-profile"
                    />
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
.hero-container {
    display: flex;
    justify-content: center;

    .hero-content {
        display: flex;
        justify-content: space-between;
        align-items: center;

        .hero-info {
            max-width: 50%;
        }

        .hero-img {
            display: flex;
            flex-direction: column;
            align-items: center;

            .image-technologies {
                z-index: 1;
                max-width: 50px;
                animation: fallDown 4s ease 0s infinite normal forwards;
            }

            @keyframes fallDown {
                0% {
                    opacity: 0;
                    transform: translateY(0px) rotate(-200deg);
                }

                100% {
                    opacity: 1;
                    transform: translateY(350px) rotate(0deg);
                }
            }

            .image-profile {
                background: none;
                z-index: 2;
            }
        }
    }
}
</style>
