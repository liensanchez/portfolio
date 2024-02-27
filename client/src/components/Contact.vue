<script>
export default {
    data() {
        return {
            formName: "",
            formEmail: "",
            formMessage: "",
        };
    },
};
</script>

<template>
    <div class="contact-container">
        <div class="custom-container">
            <div class="contact-content">
                <h1>Contact me!</h1>
                <div class="contact-form">
                    <div class="form-content">
                        <div class="form-top">
                            <input
                                type="text"
                                name=""
                                id=""
                                v-model="this.formName"
                                placeholder="Your Name"
                            />
                            <input
                                type="email"
                                name=""
                                id=""
                                v-model="this.formEmail"
                                placeholder="Your Email"
                            />
                        </div>

                        <textarea
                            name=""
                            id=""
                            cols="30"
                            rows="10"
                            v-model="this.formMessage"
                            placeholder="Your Message"
                        ></textarea>

                        <button>Send Message</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
.contact-container {
    display: flex;
    justify-content: center;


    .contact-content {
        .contact-form {
            padding: 50px 0;
            display: flex;
            justify-content: center;
            .form-content {
                width: 50%;
                display: flex;
                flex-direction: column;
                gap: 20px;
                padding: 15px;
                border: solid 1px #fff;
                border-radius: 20px 0px 20px 0px;
                
                .form-top {
                    width: 100%;
                    display: flex;
                    gap: 20px;

                    input {
                        background: #f6f8fc;
                        border: none;
                        border-radius: 10px;
                        padding: 5px;
                        width: 100%;
                    }
                }

                textarea {
                    background: #f6f8fc;
                    border: none;
                    border-radius: 10px;
                    padding: 5px;
                }

                button {
                    border: none;
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
