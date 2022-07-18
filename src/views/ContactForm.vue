<template>
<h2 class="contactHead">CONTACT US</h2>
<div class="container">
    <div class="row1">
            <form id="contact-form" name="contact-form" action="https://formspree.io/f/xjvlqzee" method="POST">
                <div class="row">
                    <div class="col-md-6">
                        <div class="md-form mb-0">
                            <input v-model="name" type="name" id="name" name="name" class="form-control" placeholder="Enter your firstname">
                        </div>
                    </div>
                    <br>
                    <div class="col-md-6">
                        <div id="sur" class="md-form mb-0">
                            <input v-model="surname" type="surname" id="surname" name="surname" class="form-control" placeholder="Enter your Surname">
                        </div>
                    </div>
                    <br>
                </div>
                <br>
                <div class="row">
                    <div class="col-md-6">
                        <div class="md-form mb-0">
                            <input v-model="email" type="email" id="email" name="email" class="form-control" placeholder="Enter email address">
                        </div>
                    </div>
                    <br>
                    <div id="con" class="col-md-6">
                        <div class="md-form mb-0">
                            <input v-model="number" type="number" id="number" name="number" class="form-control" placeholder="Enter contact number">
                        </div>
                    </div>
                    <br>
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
h2{
    /* color: rgb(17, 188, 245); */
    padding-bottom: 10px;
    
}
div button{
    font-weight: bold;
    border-radius: 10px;
}
div button:hover{
    background-color: rgb(0, 60, 255);
    border: 2px solid rgb(0, 106, 255);
    font-weight: bold;
    border-radius: 10px;
}
form{
    background-color: silver;
    padding-left: 30px;
    padding-right: 30px;
    padding-bottom: 30px;
    border-radius: 20px;
    margin-bottom: -30px;
    /* box-shadow: 10px 10px 10px  rgba(0, 34, 255, 0.655); */
}
div input{
    height: 70px;
}
div textarea{
    height: 100px;
}
#name,#surname{
    margin-top: 50px;
}
div button{
    width: 150px;
    height: 50px;
}
/* Done for 320px */
    @media only screen and (min-width:320px)  and (max-width: 321px) {
      #con{
        padding-top: 30px;
      } 
      #sur{
        margin-top: -20px;
      }   
}
/* Done for 375px */
 @media only screen and (min-width:375px)  and (max-width: 376px) {
         #con{
        padding-top: 30px;
      } 
      #sur{
        margin-top: -20px;
      }     
}
/* Done for 425px */
 @media only screen and (min-width:425px)  and (max-width: 426px) {
         #con{
        padding-top: 30px;
      } 
      #sur{
        margin-top: -20px;
      }   
}
</style>