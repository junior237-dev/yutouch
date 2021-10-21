<template>
    <div :class="block.divBlock">
        <span class="title">{{block.titleBlock}}</span>
        <span v-for="(link, indice) in block.links" :key="indice">{{link.name}}</span>    
    </div>
</template>

<script>
export default {
    name: "blocksidebar",
    props: {
        block: {type: Object}
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
    } 

    .newSidebar {
        overflow: hidden;
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

        @media screen and (max-width: 878px) {
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

        @media screen and (max-width: 539px) {
            width: 54%;
        }

        @media screen and (max-width: 439px) {
            width: 64%;
        }

        @media screen and (max-width: 339px) {
            width: 100%;
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