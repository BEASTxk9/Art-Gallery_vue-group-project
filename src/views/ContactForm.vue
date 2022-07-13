<template>
<div class="container">
    <h2 class="">Contact us</h2>
    <div class="row1">
        <div class="">
            <form id="contact-form" name="contact-form" action="https://formspree.io/f/xjvlqzee" method="POST">
                <div class="row">
                    <div class="col-md-6">
                        <div class="md-form mb-0">
                            <input v-model="name" type="name" id="name" name="name" class="form-control" placeholder="Your Name">
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="md-form mb-0">
                            <input v-model="surname" type="surname" id="surname" name="surname" class="form-control" placeholder="Your Surname">
                        </div>
                    </div>
                </div>
                <br>
                <div class="row">
                    <div class="col-md-6">
                        <div class="md-form mb-0">
                            <input v-model="email" type="email" id="email" name="email" class="form-control" placeholder="Your Email Address">
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="md-form mb-0">
                            <input v-model="number" type="number" id="number" name="number" class="form-control" placeholder="Your Contact Number">
                        </div>
                    </div>
                </div>
                <br>
                <div class="row">
                    <div class="col-md-12">
                        <div class="md-form">
                            <textarea v-model="comment" type="commit" id="comment" name="comment" rows="2" class="form-control md-textarea" placeholder="Your Comments"></textarea>
                        </div>
                    </div>
                </div>
                <br>
                <div class="text-center">
                <button type="submit" class="btn btn-primary">Submit</button>
            </div>
            </form>
            <br>
        </div>
</div>
</div>
</template>

<script>
export default {
    data(){
        return {
            name: "",
            surname: "",
            email: "",
            number: "",
            comment: ""
        }
    }  
}
</script>

<style scoped>
    .container{
        margin-bottom: 230px;
    }
    @media only screen and (min-width:320px)  and (max-width: 321px) {
        .row input{
            margin-bottom: 10px;
        }
        .row1{
            margin-bottom: -220px;
        }
}
 @media only screen and (min-width:375px)  and (max-width: 376px) {
        .row input{
            margin-bottom: 10px;
        }
        .row1{
            margin-bottom: -220px;
        }
}
 @media only screen and (min-width:425px)  and (max-width: 426px) {
        .row input{
            margin-bottom: 10px;
        }
        .row1{
            margin-bottom: -220px;
        }
}
</style>