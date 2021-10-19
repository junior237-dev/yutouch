<template>
    <div :class="{tousLesParcours: component === 'tousLesParcours', page_parcours: component === 'page_parcours'}">
        <div class="head">
            <h1>{{h1}}</h1>
            <slot></slot>

            <h3>{{h3}}</h3>
        </div>

        <div class="tabs">
            <div v-for="tab in tabs" :key="tab"  :class="{active: tab.active}">{{tab.tab}}</div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'headEtTabs',

    props: ['h3', 'h1', "tabs", "component"],
}
</script>

<style lang="scss" scoped>
$gray: #AFB5BA;
$blue: #00A9F0;

.tousLesParcours {
    .head {
        width: fit-content;
        margin: auto;
        margin-top: 45px;
        margin-bottom: 45px;
        text-align: center;
        color: #3F4348;

        h1 {
            color: #3F4348;
            font-size: 30px;
            margin-bottom: 15px;
        }

        h3 {
            font-size: 20px;
            padding: 0 2% 0;
        }

    }

    .tabs {
        width: 90%;
        margin: auto;
        text-align: center;

        div {
            width: fit-content;
            margin: 0 10px 30px;
            display: inline-block;
            text-transform: uppercase;
            border: 1px solid #AFB5BA;
            background-color: white;
            border-radius: 5px;
            padding: 2px 9px;
            font-size: 15px;
            color: #AFB5BA;
            cursor: pointer;

            &:hover {
                background-color: #00A9F0;
                color: white;
            }
        }

        .active {
            background-color: #00A9F0;
            color: white;
        }
    }
}

.page_parcours {
    background-color: white;
    padding-top: 45px;
    .head {
        width: fit-content;
        margin: auto;
        margin-bottom: 45px;
        text-align: center;
        color: #3F4348;

        h1 {
            color: #3F4348;
            font-size: 30px;
            margin-bottom: 15px;
        }

        h3 {
            font-size: 18px;
            // padding: 0 2% 0;
            width: 78%;
            margin: auto;
        }

    }

    .tabs {
        width: 90%;
        margin: auto;
        text-align: center;

        div {
            width: fit-content;
            margin: 0 10px 30px;
            display: inline-block;
            text-transform: uppercase;
            border: 1px solid #AFB5BA;
            background-color: white;
            border-radius: 5px;
            padding: 2px 9px;
            font-size: 15px;
            color: #AFB5BA;
            cursor: pointer;

            &:hover {
                background-color: #00A9F0;
                color: white;
            }
        }

        .active {
            background-color: #00A9F0;
            color: white;
        }
    }
}
</style>