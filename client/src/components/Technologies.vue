<script>
export default {
    data() {
        return {
            technologiesFrontEnd: [
                "https://i.ibb.co/8r31rv2/pngwing-com-11.png",
                "https://i.ibb.co/5YCwjpX/pngwing-com-12.png",
                "https://i.ibb.co/QYQcwMV/pngwing-com-1.png",
                "https://i.ibb.co/py4TFjc/pngwing-com.png",
                "https://i.ibb.co/n3dNHk1/pngwing-com-14.png",
                "https://i.ibb.co/VBFxdZV/pngwing-com-13.png",
                "https://i.ibb.co/gSp43wv/pngwing-com-17.png",
                "https://i.ibb.co/MCBv1X0/pngwing-com-18.png",
            ],
            technologiesBackEnd: [
                "https://i.ibb.co/DzRffhD/pngwing-com-7.png",
                "https://i.ibb.co/XDFYPXp/pngwing-com-3.png",
                "https://i.ibb.co/7n2hxvx/pngwing-com-4.png",
                "https://i.ibb.co/hRK8nkF/pngwing-com-19.png",
            ],
            technologiesDatabses: [
                "https://i.ibb.co/ZxZj38S/pngwing-com-5.png",
                "https://i.ibb.co/Wn9GK0f/pngwing-com-16.png",
                "https://i.ibb.co/7r3wPsq/pngwing-com-15.png",
                "https://i.ibb.co/hRK8nkF/pngwing-com-19.png",
            ],
            technologiesProgrammingLanguages: [
                "https://i.ibb.co/8r31rv2/pngwing-com-11.png",
                "https://i.ibb.co/Syt9WQm/pngwing-com-6.png",
                "https://i.ibb.co/SXWNNc3/pngwing-com-2.png",
                "https://i.ibb.co/7n2hxvx/pngwing-com-4.png",
            ],
        };
    },
};
</script>

<template>
    <div class="technologies-container">
        <div class="custom-container">
            <h1>Technologies</h1>
            <div class="technologies-content">
                <div class="technologies">
                    <h2>Front End</h2>
                    <div class="image-container">
                        <img
                            v-for="(img, index) in technologiesFrontEnd"
                            :src="img"
                            :alt="'Image ' + (index + 1)"
                        />
                    </div>
                </div>
                <div class="technologies">
                    <h2>Back End</h2>
                    <div class="image-container">
                        <img
                            v-for="(img, index) in technologiesBackEnd"
                            :src="img"
                            :alt="'Image ' + (index + 1)"
                        />
                    </div>
                </div>
                <div class="technologies">
                    <h2>Programming Languages</h2>
                    <div class="image-container">
                        <img
                            v-for="(
                                img, index
                            ) in technologiesProgrammingLanguages"
                            :src="img"
                            :alt="'Image ' + (index + 1)"
                        />
                    </div>
                </div>
                <div class="technologies">
                    <h2>Databases</h2>
                    <div class="image-container">
                        <img
                            v-for="(
                                img, index
                            ) in technologiesDatabses"
                            :src="img"
                            :alt="'Image ' + (index + 1)"
                        />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
.technologies-container {
    display: flex;
    justify-content: center;


    .technologies-content {
        padding: 50px 0;
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(450px, 1fr));
        grid-gap: 10px;
        .technologies {
            display: flex;
            flex-direction: column;
            padding: 15px;
            border: solid 2px #f6f8fc;
            border-radius: 20px 0px 20px 0px;
            background: #f6f8fc;

            h2 {
                background: none;
                color: #1b3764;
            }

            .image-container {
                background: #f6f8fc;
                display: flex;
                justify-content: center;
                flex-wrap: wrap;
                gap: 15px;

                img {
                    background: none;
                    width: 100%;
                    max-width: 90px;
                    height: auto;
                }
            }
        }
    }
}
</style>
