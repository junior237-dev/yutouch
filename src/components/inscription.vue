<template>
    <div class="insc w-full h-auto">
        <div class="container w-5/6 mx-auto h-auto">
            <div class="informationszone border-b w-full border-gray-400 mb-2">
                <div class="title">
                    <h1 class="text-xl leading-8 text-gray-700 my-5 mx-auto w-4/5">Accédez tout de suite à <strong>1000+ cours gratuits!</strong></h1>
                    <div class="label text-sm text-gray-500 w-4/5 mx-auto">
                        rejoignez une communauté de plus de <strong>10 000 apprenants</strong>.
                        <br>
                        Vous avez déjà un compte yutouch.com? <span class="text-blue-400">identifiez vous maintenant</span>
                    </div>
                </div>
                <div class="form w-full my-18">
                    <form action="" class="w-full">
                        <div class="emailgroup text-left mx-auto my-4 w-4/5">
                            <label for="email text-lg" class="font-semibold text-sm">email</label>
                            <input type="email" name="email" id="email" class="w-full text-center focus:border-blue-500 outline-none h-10 rounded-lg border-gray-400 border" required autofocus>
                        </div>
                        <div class="passwordgroup text-left mx-auto my-4 w-4/5">
                            <label for="email text-lg" class="font-semibold text-sm">mot de passe</label>
                            <input type="password" name="password" id="password" class="w-full text-center focus:border-blue-500 outline-none h-10 rounded-lg border-gray-400 border" required>
                            <small>au moins 5 caractères</small>
                        </div>
                        <button class="w-4/5 mx-auto h-16 bg-blue-500 text-white text-base block">CREER UN COMPTE GRATUIT</button>
                    </form>
                    <div class="generalcondition mb-9">
                        <p class="w-4/5 mx-auto text-gray-500 text-sm leading-6">En appuyant sur le bouton créer mon compte gratuit, vous reconnaissez avoir lu et accepté les <a href="" class="text-blue-500">conditions générales</a> de yutouch.com.</p>
                    </div>
                </div>
            </div>
            <div class="infobysocialmedia mt-5">
                <div class="socalmedia">
                    <p class="text-gray-500 my-10 text-center">ou inscrivez-vous avec</p>
                    <div class="iconsocialmedia flex justify-around">
                        <div class="facebook h-11 w-11">
                            <img src="../assets/facebooklogo.png" alt="fbk_logo" class="object-cover border shadow-md rounded-full w-10 mx-auto h-10">
                            <br>
                            Facebook connect
                        </div>
                        <div class="apple h-11 w-11">
                            <img src="../assets/apple.png" alt="apple_logo" class="object-cover border shadow-md rounded-full mx-auto w-10 h-10">
                            <br>
                            Apple connect
                        </div>
                        <div class="gmail h-11 w-11">
                            <img src="../assets/telechargement.png" alt="google_logo" class="object-cover border shadow-md rounded-full mx-auto w-10 h-10">
                            <br>
                            Gmail connect
                        </div>
                    </div>
                    <p class="text-blue-500 text-center mt-24">problème d'identification?</p>
                </div>
            </div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
    .insc {
        @media screen and (min-width: 600px) {
            width: 600px;
            margin: 70px auto;
            border: solid 1px rgb(196, 193, 193);
            border-radius: 20px;
            height: auto
        }
    }
</style>

