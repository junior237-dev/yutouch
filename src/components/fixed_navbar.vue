<template>
    <div class="fixed_navbar">
        <ul class="navbar_info">
            <li class="nb_telechargement">106 <span class="text">Télécgargement</span></li> 
            <li class="note">4.8/5 <span class="text">Note</span></li>
            <li class="duree">1h02m <span class="text">Durée</span></li>
            <li class="fav"><i class="fas fa-heart"></i> <span class="text">favoris</span></li>
        </ul>

        <div class="btn_prix">
            <button>ajouter au panier</button>
            <span class="prix">9,00 <i class="fas fa-euro-sign"></i></span>
        </div>
    </div>
  
</template>

<script>
export default {
    name: 'fixed_navbar'
}
</script>

<style lang="scss" scoped>
.fixed_navbar {
    display: flex;
    justify-content: space-around;
    padding: 12px 0;
    width: 90%;
    margin: 0 auto;
    background-color: #3f4348;

    .navbar_info {
        display: flex;
        color: #87898c;

        li {
            text-align: center;
            padding: 0 15px;
            font-size: 25px;
        }

        span {
            display: block;
            font-size: 12px;
        }

        .fav {
            border-left: 1px solid #87898c;
        }
    }

    .btn_prix {
        display: flex;
        width: 30%;
        align-items: center;
        color: white;

        button {
            padding: 10px;
            background-color: #00a9f0;
            margin: 0 25px 0 0;
            width: 50%;
            border-radius: 5px;
        }

        .prix {
            font-size: 23px;
            font-weight: bold;
        }
    }
}
</style>