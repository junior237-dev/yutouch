export default {
    'users': [
        {
            "pseudo": "",
            "email_adress": "",
            "password": "",
            "profil": "",
            "notifications": {
                "messages": [],
                "actualities": [],
            },
            "basket_products": [],
            "add_products": function(product) {
                this.add_products.push(product)
            }
        }
    ]
}