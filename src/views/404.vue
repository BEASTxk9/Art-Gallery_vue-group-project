<template>
    <div id="main" class="container">
        <div class="fof">
            <h1>Error 404</h1>
            <br>
            <img src="https://i.postimg.cc/MpVKtLQh/douard-Manets-The-Dead-T-001.webp">
            <br>
        <router-link to="./Shop.vue"><h6>return to Gallery</h6></router-link>
        </div>
    </div>
</template>



<style scoped>
* {
    transition: all 0.6s;
}

html {
    height: 100%;
}

body {
    font-family: 'Lato', sans-serif;
    color: #888;
    margin: 0;
}

#main {
    display: table;
    text-align: center;
    padding: 3rem;
    min-height: 70vh;
}
.container{
    display: flex;
    position: relative;
    top: 4rem;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    width: 50%;
    min-height: 50vh;
    background: #67595954;
    border-radius: 7px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(9.2px);
    -webkit-backdrop-filter: blur(9.2px);
}

img{
    width: 40%;
    margin-top: 1rem;
    border-radius: 7px;
}

router-link, h6{
    margin-top: 20px;
    cursor: pointer;
    color: black;
    text-decoration-color: black;
    text-decoration: none;
}

.fof {
    display: table-cell;
    vertical-align: middle;
}

.fof h1 {
    font-size: 60px;
    display: inline-block;
    padding-right: 12px;
    animation: type .5s alternate infinite;
}

@keyframes type {
    from {
        box-shadow: inset -3px 0px 0px #888;
    }

    to {
        box-shadow: inset -3px 0px 0px transparent;
    }
}
</style>