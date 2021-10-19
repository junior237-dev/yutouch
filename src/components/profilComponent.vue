<template>
    <div class="bodyprofil">
        <div class="location small text-gray-400 text-xs mt-3 mb-6 mx-0 pl-4">
            <span>Vous êtes ici : </span>
            <span class="link">Accueil Apprenant</span>
            <span> > </span>
            <span class="link">Profil</span>
            <span> > </span>
            <span class="link">Informations perso</span>
        </div>

        <div class="avatar flex items-center pl-4">
            <img src="../assets/profil.png" alt="profil" class="h-16 w-16 block object-cover mr-2">
            <div class="changeprofil">
                <a href="" class="border-b border-blue-500 text-blue-500 md: hover:text-blue-500 hover:border-blue-500 md:text-gray-600 md:border-gray-600">personnaliser l'avatar</a><br>
                <small class="text-gray-500">image au format jpg, gif ou png</small>
            </div>
        </div>

        <div class="informations mt-10">
            <form action="" class="md:flex md:flex-row md:flex-wrap">
                <div class="basic-informations md:w-1/2">
                    <h2 class="text-center text-lg text-gray-600 mb-5 ">informations basiques</h2>
                    <div class="select-group w-5/6 mx-auto">
                        <label for="genre" class="text-gray-400">genre</label>
                        <select name="genre" id="genre" class="w-full h-10 border outline-none mt-2 pl-4 rounded-md focus:border-blue-400 text-gray-600 bg-gray-100">
                            <option value="none">non précisé</option>
                            <option value="homme">homme</option>
                            <option value="femme">femme</option>
                        </select>
                    </div>
                    <div class="input-group w-5/6 mx-auto my-7">
                        <label for="prenom" class="text-gray-400">prénom</label>
                        <input type="text" name="prenom" id="prenom" class="w-full h-10 pl-4 border outline-none mt-2 rounded-md focus:border-blue-400 text-gray-600">
                    </div>
                    <div class="input-group w-5/6 mx-auto my-7">
                        <label for="nom" class="text-gray-400">nom</label>
                        <input type="text" name="nom" id="nom" class="w-full h-10 pl-4 border outline-none mt-2 rounded-md focus:border-blue-400 text-gray-600">
                    </div>
                    <div class="input-group w-5/6 mx-auto my-7">
                        <label for="pseudo" class="text-gray-400">pseudo *</label>
                        <input type="text" name="pseudo" id="pseudo" class="w-full h-10 pl-4 border outline-none mt-2 rounded-md focus:border-blue-400 text-gray-600">
                    </div>
                </div>
                <div class="connections-informations mt-10 md:w-1/2 md:mt-0">
                    <h2 class="text-center text-lg text-gray-600 mb-5">informations de connexion</h2>
                    <div class="input-group w-5/6 mx-auto my-7">
                        <label for="email" class="text-gray-400">email *</label>
                        <input type="email" name="email" id="email" class="w-full h-10 pl-4 border outline-none mt-2 rounded-md focus:border-blue-400 text-gray-600">
                    </div>
                    <div class="input-group w-5/6 mx-auto my-7">
                        <label for="mot de passe" class="text-gray-400">mot de passe</label>
                        <input type="password" name="mot de passe" id="mot de passe" class="w-full h-10 pl-4 border outline-none mt-2 rounded-md focus:border-blue-400 text-gray-600">
                    </div>
                    <div class="input-group w-5/6 mx-auto my-7">
                        <label for="confirmer le mot de passe" class="text-gray-400">confirmer le mot de passe</label>
                        <input type="password" name="confirmer_le_mot_de_passe" id="confirmer le mot de passe" class="w-full h-10 pl-4 border outline-none mt-2 rounded-md focus:border-blue-400 text-gray-600">
                    </div>
                    <div class="input-group w-5/6 mx-auto my-7">
                        <label for="date de naissance" class="text-gray-400">date de naissance</label>
                        <input type="date" name="date_de_naissance" id="date de naissance" class="w-full h-10 pl-4 border outline-none mt-2 rounded-md focus:border-blue-400 text-gray-600">
                    </div>
                </div>
                <button class="block w-3/6 mx-auto h-10 bg-blue-500 text-white mb-12">METTRE A JOUR</button>
            </form>
        </div>
    </div>
</template>
