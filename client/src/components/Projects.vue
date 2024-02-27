<script>
import { collection, getFirestore, getDocs } from "firebase/firestore";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default {
    components: {
        Swiper,
        SwiperSlide,
    },
    data() {
        return {
            projectsCollection: [],
        };
    },
    methods: {
        async queryProjects() {
            const db = getFirestore();
            const projectsCollection = collection(db, "projects");

            try {
                const querySnapshot = await getDocs(projectsCollection);

                querySnapshot.forEach((doc) => {
                    // Access each project's data using doc.data()
                    const projectData = doc.data();
                    this.projectsCollection.push(projectData);
                    console.log(this.projectsCollection);
                });
            } catch (error) {
                console.error("Error fetching projects:", error);
            }
        },
    },
    mounted() {
        this.queryProjects();
    },
    setup() {
        return {
            modules: [Pagination, Navigation],
        };
    },
};
</script>

<template>
    <div class="projects-container">
        <div class="custom-container">
            <h1>Projects</h1>
            <div class="projects-content">
                <div
                    class="project-card"
                    v-for="project in this.projectsCollection"
                >
                    <swiper
                        :pagination="{
                            type: 'progressbar',
                        }"
                        :navigation="true"
                        :loop="true"
                        :modules="modules"
                        class="mySwiper"
                    >
                        <swiper-slide v-for="img in project.images">
                            <img :src="img" alt="" srcset="" />
                        </swiper-slide>
                    </swiper>
                    <div class="project-title">
                        <h3>{{ project.name }}</h3>
                    </div>
                    <p>{{ project.description }}</p>
                    <div class="project-link">
                        <a :href="project.url" target="_blank">
                            Go to Project
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
.projects-container {
    display: flex;
    justify-content: center;
    padding: 50px 0;

    .projects-content {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(450px, 1fr));
        grid-gap: 50px;

        .project-card {
            padding: 15px;
            border: solid 2px #F6F8FC;
            border-radius: 20px 0px 20px 0px;

            img {
                width: 100%;
            }
            .swiper-button-prev,
            .swiper-button-next {
                background: none;
            }

            p {
                margin-top: 20px;
            }

            .project-title,
            .project-link {
                padding-top: 20px;
                display: flex;
                justify-content: center;
                width: 100%;

                a {
                    background: linear-gradient(
                        90deg,
                        rgba(19, 173, 199, 1) 0%,
                        rgba(105, 120, 209, 1) 100%
                    );
                    text-decoration: none;
                    transition: transform 0.5s ease;
                    border-radius: 20px;
                    padding: 20px;

                    &:hover {
                        text-decoration: underline;
                        transform: scale(1.1);
                    }
                }
            }
        }
    }
}
</style>
