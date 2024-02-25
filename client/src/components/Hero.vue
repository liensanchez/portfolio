<script>
import axios from "axios";

export default {
    methods: {
        async fetchImgages() {
            const imageUrls = [
                "https://i.ibb.co/8r31rv2/pngwing-com-11.png",
                "https://i.ibb.co/5YCwjpX/pngwing-com-12.png",
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
                "https://i.ibb.co/MCBv1X0/pngwing-com-18.png",
            ];

            try {
                const responses = await Promise.all(
                    imageUrls.map((url) => axios.get(url))
                );

                // Process the response data, e.g., display the images
                responses.forEach((response) => console.log(response.data));
            } catch (error) {
                // Handle errors, e.g., log the error or show an error message
                console.error("Error fetching images:", error);
            }
        },
    },
    mounted() {
        this.fetchImgages();
    },
};
</script>

<template>
    <div class="hero-container">
        <div class="custom-container">
            <div class="hero-content">
                <h1>Hi I'm Lien!</h1>
                <h3>FullStack Developer</h3>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
.hero-container {
    display: flex;
    justify-content: center;

    .hero-content {
        background-color: greenyellow;
    }
}
</style>
