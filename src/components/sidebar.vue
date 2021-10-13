<template>
  <transition name="fade">
    <div class="sidebar" ref="sidebar">
    
        <i class="fas fa-minus-circle" @click="closeSideBar"></i>
        
        <div class="web">
        <span class="title">Web</span>
        <span>Toutes</span>
        <span class="active">Tuto Web gratuits</span>
        <span>Formation A à Z Web</span>
        <span>Tuto Web en promo</span>
        </div>

        <div class="themes">
        <span class="title">Thèmes</span>
        <span>Transformation digitale</span>
        </div>

        <div class="logiciels">
        <span class="title">Logiciels</span>
        <span v-for="logiciel in logiciels" :key="logiciel">{{logiciel}}</span>
        </div>
    </div>
    </transition>
</template>

<script>
export default {
    name: 'sidebar',

    data() {
        return {
            logiciels: [
                'WordPress',
                'Jomia',
                'Dreamweaver',
                'Google',
                'Cloud',
                'Elementor',
                'Internet',
                'WIX',
                'Drupal',
                'Contribute',
                'Dotclear',
                'IWeb',
                'Magneto',
                'iWeb',
                'Spip',
                'Viadeo'
            ]
        }
    },

    methods: {
        closeSideBar() {
            this.$emit('close')
        }
    },
}
</script>

<style lang="scss" scoped>
$gray: #b4bac0;
$blue: #00a9f0;
$small: 14px;

.title {
  font-size: 19px;
}

.small {
    color: $gray;
    font-size: 12.5px;
}

.link:hover {
    color: $blue;
    cursor: pointer;
    border-bottom: 1px solid $blue;
}

span {
  width: fit-content;
  border-bottom: 1px solid transparent;
}

.body {
    .sidebar {
        width: 16.666666666666664%;
        margin: 0 15px 0 0;

        i {
            float: right;
            margin: 15px 10px 10px 0;
            font-size: 17px;
            cursor: pointer;

            &:hover {
                color: $blue;
            }
        }

        div {
            padding: 0 0 15px 0;
            margin: 0 0 15px 0;
            width: fit-content;
            
            &:not(:last-child) {
                border-bottom: 1px solid $gray;
            }

            span:not(.title) {
                font-size: $small;
                margin: 0 0 3px 0;
                color: $gray;

                &:hover {
                    @extend .link;
                }

                &.active {
                    color: #3cc5b1;
                    
                    &:hover {
                    border-bottom: 1px solid #3cc5b1;
                    }
                }
            }
        }

        span {
            display: block;
        }

        .title {
            margin: 0 0 15px 0;
        }

        @media screen and (max-width: 639px) {
            width: 38%;
            position: fixed;
            z-index: 178;
            height: 100%;
            top: 0;
            left: 0;
            background-color: white;
            overflow-x: hidden;
            transition: 0.5s;

            div {
                margin: 10px auto 0;
                width: 90%;
                
                span {
                    display: block;
                    transition: 0.3s;
                }
            }
        }
    }   

    .fade-enter-from, .fade-leave-to {
        opacity: 0;
        transform: translateX(-300px);
    }

    .fade-enter-active, .fade-leave-active {
        transition: opacity .7s ease, transform .7s ease;
    }
}
</style>