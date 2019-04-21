<template>
    <div class="search">
        <div class="box">
                <div class="reat" @click="back"></div>
            <div class="ipt" >
                <router-link type="text" placeholder="外套" ref="ss" to='/clicksearch' tag='input' @focus="chang" @blur="due" :class="{active:isFocus}"></router-link>
            </div>
                <div class="sousuo">搜索</div>
        </div>

        <div class="history">   <!-- 历史记录 -->
            <div class="his">
                <span class="url"></span>
                <p class="lishi">历史搜索</p>
                <span class="laji"></span>
            </div>
            <div class="record">    <!-- 记录 -->
                <p>暂无历史搜索</p>
            </div>

            <div class="hot">
                <div class="hotsearch">
                    <span class="xing"></span>
                    <p>热门搜索</p>
                </div>
                <div class="list">
                    <router-link v-for="(item, index) in 3" :key="index" tag="ul" to="">
                        <li>
                            <a>口红</a>
                        </li>
                    </router-link>
                </div>
            </div>
        </div>
    </div>

</template>
<script>
export default {
  data () {
    return {
      isFocus: false
    }
  },
  methods: {
    chang () { // 聚焦事件
      this.isFocus = true
    },
    due () { // 失去焦点事件
      this.isFocus = false
    },
    back () { // 返回上一级
      this.$router.go(-1)
    }
  },
  mounted () {
    this.$refs.ss.focus()
  }
}
</script>
<style scoped lang="less">

    .search {
        width:100%;
        height:800px;
        .hot {
            width:100%;
            height:236px;
            .list{
                width:100%;
                height:100%;
                padding:30px;
                box-sizing: border-box;
                ul{
                    width:100%;
                    li{
                        height:45px;
                        line-height:45px;
                        float: left;
                        margin-top:18px;
                        margin-left:20px;
                        border: 1px solid #aaa;
                        border-radius:8px;
                        a{
                            color:#666;
                            padding:0px 15px;
                        }
                    }
                }
            }
            .hotsearch {
                width:100%;
                display: flex;
                .xing {
                    width:30px;
                    height:30px;
                    display: block;
                    background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAMAAACahl6sAAAAM1BMVEUAAACPj4+KioqLi4uKioqKioqKioqJiYmKioqJiYmKioqHh4eJiYmKioqKioqKioqKiooJ6JaMAAAAEHRSTlMAEIBAwPBgoODQMCBwsJBQ0XJs0gAABSVJREFUeNrs2+FugyAYhWEERK2tcv9XO/zV6CHD9GsY5xvnBsq7J6lkc6avr6+vr6+v739uMEpmg1GxYZyNitkYVZAMY4wqSGxMc4Z+CSTNG/olEBUkB4gKkgSiguQAUUGSQFSQHCAqSBKICpIDRAVJAlFBcoCoIEkgKkgOEBUkCUQFyQGigiSB6CBJICpIQow6SOYYVZAkEB0kCUQFyRsE9jBMe4PAJkO0M8h0zloNzy4nD6wkcHBWEjg3KQkcm5UETk1KAodmJYEzk5KE642ElWS+3hFJSQCElQRASEkAhJUEQEhJAISVBEBISfYrCCuJv4KQkrgrCCsJgJCSnEFmY1hJziDBZGYZSACk+LeGsc2XBAGkTGJNgwMQVhIAISUBEFYSACElARBSkgeA3CXZGnkqru5p/RwjgBRJ3lu8fbqaMliwRByCIEl2/mVDzZ7BhVMBbrz5KkG9Hix4+VieNbgyCfbs7tsJ5QL4IvqIBDf66Ss9breTh08VgACJtEdeUAaRk2DPZt3j5gPB2Q2+TuUgSCLYDD2CAgEIkIh6BD8iCcj3P++Z/b1ABRA5CT575SV419jNze3wVBV0SErwtrQK7jmiDiypUSDvwQ4sqVyAPZufBR1QUqFA9CjDDiwRFFTswQ4s+fuCQg903Cxp4t86p08OFdp75+1WB86NbZUMHq4Pd2/ATZUMS66DryTfwVeS7+AryXfwleQ7+EryHXwlhQ5ByWswv6zVjlzJUrFkzXbwlfy0c0Y7rsIwEE1IgECawv9/7ZXuQ1nV0DHrZZpIzHO10WnSY8eLkGun2bK7VpJavkMlSfUcSpIGOFQkTXAoSBrhgCTNcACShjg+1timOJgkww5HnX0PnnxIjjomAOc4CH3qaCWpZhK1Q9Ikxy5Jkxy7JE1y7JI0ybFHsjTJcTBPtueBOZogGQkceNHJmcPgwCTFmZMIHPjxi86ZE8VjGYQIxSx//dUMjpYneK2G6Zt5OkokiLNn/hZIBNIyaSs6XnohLWMm8bQtJVlIy5qy/oh3rIR3abX6ZspOSMuaRewxJSOQlkVbuK7XLK1vaUt0WvZMyk2uXFpvpzU7TpY3aTWrLSktewJZW7J6XXFci+NkktKyR3vnrFxazkW+tuZLjvOo+uFVLy3nHrq/Wru0Tmmr7tPs+dpKJ/0SYswnL2vJMSIaVYDx/3O5Pm2dOsy5vJA9Gmiwm5RBv2D+6dS+80Bb5NFWp+1T/euTG0pN2lKeZd/1q0gaKrpbJdV6D4EBURJXW14jrSGth0lBs9VADRxphbR+TAw13K0eaLkQV5g4Ax0S/rPw/CytWYFxUCEDnmQTpCULB0b5rrb649U8wEBlJbEm2VJaqHBgFNokG0sLY4zlGGXgaAs7EheOMb9MBirkwtOWnAhiDCjltFAm2VhaIapKX5jAx2jakmtpMfDGxUCeZOe33c9lPcq0YWh/SoUzyZbSEvUPd7lD/wGFoy0praLH0Hm68O5WRVXnhDq1KDxtTbpyDeKfK87krowNA3eXLG3N8DwADITCmmQvuDPXJ8dVhDXJ7mwY+DLJ0lZBF3ErCmuSnUwYYFLB1NZxN2LIkOjaCqiM21E4TcpgxcCDSc4kuwPdCAjoW4jaiqiM21E4d6tkxsAtGGOS7UE3Yk8eKdoKijJuRyFo66HBsKPEy0dCT1UZtyfEiyfZkYCxoVyorV7fjdhR0nWTbL+VcUaGdNUkO7AwNpRrtt87eip5FfudO3fu3Llz584v8w/hmKws8WNyPAAAAABJRU5ErkJggg) center center no-repeat;
                    background-size:30px;
                    margin-right:5px;
                }
                p{
                    color:#aaa;
                }
            }
        }

        .history {
            width:100%;
            height:150px;
            padding:20px;
            box-sizing: border-box;
            border-bottom:1px solid #eee;
            .his {
                width:100%;
                display: flex;
                .url{
                    width:30px;
                    height:30px;
                    display: block;
                    background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAMAAACahl6sAAAAM1BMVEUAAACPj4+KioqKioqKioqJiYmKioqKioqJiYmLi4uJiYmHh4eKioqKioqJiYmJiYmKiooSz6OjAAAAEHRSTlMAEPBgwKDQMIBA4CCwkHBQid0R4wAABSFJREFUeNrtndmWmzAMQOV9AYP+/2vbtD01qZNOhkiWyfF9nzAXWZJZbGAymUwmk8lkchFU2qK1NuMfsrU2bknBhViMs/gU68wC46P24vFLstuHDo0yHl/Gb6O67Ct+k9XAcCxF4wm0GytfFoensQlGIfzSuLxKsPiTy6uogs/R1to13ii1Nz5mVSCK0c8Uomm7eNij88+kN5BjsfgAvW7hTMv0CYSIjyxKeKlzWnxAAQmUxQa3vx7NLWODF+gqqcmObNTbZVvv0JnYapxqpLoJqoKOKPueRkXFf1V8RxPl8Q5t3vkxh/foAJ0InnY0JC9jEjR5+d/0iQgTl6vIknTMJm08dAIiYmeToLkaWNI9TYLmm1KoFY8EYER51pPmntWui3kAlE4ma5Pm1Bg8kBXwEHlPV2uyAguJ26M12YABpfsUR8NdumyvIh950yRyR7ziONNkwYqDBr7g73y/zX/lozLb4NqbBGQlYKVwVawNOrAxnbhyIvvIJhGWJdO1gi4ozVHsXc+B1Q6uzBAQD92wTUgoA5KgG4E8JMuJVkhcYQx1QBT0oM33fOWA3E3vDO3PLdAVpUm7Vz4ZkNHOYZIISBuSjTDVV+hOoUt3pQmuDCh6SSC7gtYggCdL0FUi1Ssb2XnUh9gKoKjGViDINqIRsRGFtoAIhqhoWoJ5L9UECd6B4GfI6lYiaesWhKg9MZKkSAQhdpIkKVIpUlEkl9lWPEWOSULRDjOIsVK0RPlcP16U7ARFq4AYhqDgGPmiBZAIpq1Rvmjdje8pEgeovgB2ivxlHUtEX7qxH/+Li4usBCIDNHaSTLUDTLWOU/BPqVr+U0RmH/lEkQXkyO+LpLEmjYXghqkBMRaKi6KxLqwSwfBcQYztcPPh0nOUQlE6ywD19zhPunT9zRSjIsmXrUBTcKSeIFY2mqfKXnwiv9K80VPEk0TTvPO2SydJILprq1C4JRaqFy/8YYhKkKmOX2THViJ7LTTIPiJxdA82vGjd0vXodA1pg+4YwheOF8m3USzlWfSn032w1xA3uZBY0i6mtFRIEtIeOUpVYEs8FhaUuSuUyBd7OJks8eSrbxaUuC20MRzV1nOzQCeUZlgOFbD/bH79JyBXXdOT8BCQweMssvAxdh5clm19Wu66gi8i21hOPRfrJs6l2muzoJmNRXOuRFW510Jw5Xn3MkjInvCthwMGIucBKh7ZQ2977EToOmxasmjWmLT7uOUAPARkNlG9NnEzdyaK2UMzmmzIlYrtZmq8MXF3JqRH2e88csaOJtpAhXzjYHYTjkQJHhuas8VmUocX9UaNKx7pY4JFUW+r7QO4Lial2duWKDtqNexkYvAeu5Bsq109epm02xa7kyomY6XOGPqZKE+x97vJj0pUXxMo2Kh871hL1FipNbC7ya7bku/CyS981K4kYKJWbMklfR0LU/+yqX4SJpAyPsLG8B8JV//o635kOpmoiE/wazQJjoQUndX4BFvdCUw4PnaR7U/wC7R5sWdtwEey+CY6qpe7r4PKYCp5u2mMYQLBndYw8JNxTGpj+A7a7QAwmAnAUjJ+h9UoABjRBCBF+2Is1t+ZMazJCx9Jq5+MGdzkRjLRPtKxa9x/S1zF5BchpRRjLCX+ZE9JwW+uZ0JL0p9iEqbJcAQ90ufI6Ez8NBmAaTIe02Q8psl4LP5TTNQ0GQ7lP2QCCcqPsN6eyER8AwQqk8/wuJl8hsfNRMt/t5oEFWAymUwmk8lkMplMJpPJZHKGH5WkGcMhMl13AAAAAElFTkSuQmCC) center center no-repeat;
                    background-size: 28px;
                    margin-right:5px;
                }
                .lishi{
                    color:#aaa;
                }
                .laji {
                    width:30px;
                    height:30px;
                    display: block;
                    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANsAAADICAMAAABWH2RHAAAAM1BMVEUAAACJiYmLi4uKioqJiYmPj4+KioqKioqKioqKioqHh4eJiYmKioqJiYmJiYmKioqKioq1Nn2BAAAAEHRSTlMAgEDA8BBgMNCgIFDgcLCQ8RAZSwAAAshJREFUeNrt3d1u4yAQQOEhBv8Atuf9n3YbKV2ySbWqAatT65zrjtVPJsSSpSBnNM56qLxE+R2FWQ/nk/yGCu1Qo9jvTrso7k67KG7KqhfFTV71org77aK4O+2iuDvtorhX2jx8r5exVez1SlvqB631+h/uIlfBTf7tY3MV3KhvtKvgvqBdBfcF7Sq4L2hXwTXRSnG2h2uklcIrLsix7NLecXMvXLy5mvZ3WkecqylNL1cdtEd+EmnGtZeTlII3QeuAe18+Nu5aR5yP8iiaoXXDrfLoZofWCzfIo2SIJhKWnrZoifZRB5wre4kpWg9clM+i16byB80UbpRSrLhzpz75Od/+3V10yVWWopzRzVW23oSIiIiIiIiIiOi5uMw6u3BwYnBBjjZu3m/p0MTwMTG2vu/10zkT7682l8MTm1RVXu/4cMpEadNHe8VEVYN+tp8xUZr0b7FioqYyP58xUXJlbq2YqFqSpYqJOps7PoENGzZs2LBhw4YNGzZs2LBhw4YNGzZs2LBhw4YNGzZs2LBhw4YNGzZs2LBhw4YNGzZs2LBhw4YNGzZs2LBhw4YNGzZs2LBhw4YNGzZs2LBhw4YNGzZs2LBhw4YNGzZs2LBhO9sWy4C/mk28fjZUnpOdzNqWurOuy1HNWczaQn78/VZ5wHmya/v86fs9yEGcf5zdadgmMjm3RjlcGJ1LQWzbmsKGDRu2/4YNGzZsFm17o00M24aONmtH0M+N5xqJf76AqaKWbq03fhZTOS2F5iuMYqjwtKKySOtGmYPYadHSInVlLQ1iplE77HJOn3FW7tyqT+WWdV3KSQwUN31ubNuPSsMa5UcLadF/yh02pFIefi59K0l9SU23NT6UGm4O0tSmZvOTtBVmNVqh1beoyfLU58nUYL0eJSZz69Kv0q0xq6H8HqRnycyGOa/hhAceN/zw4vTDPkb5dn8ArWY64lPRIRcAAAAASUVORK5CYII) center center no-repeat;
                    background-size: 30px;
                    margin-left: 520px;
                }
            }
            .record {
                width:100%;
                height:100%;
                padding: 30px 0px 0px 30px;
                box-sizing: border-box;
                color:#aaa;
            }
        }
        .box{
            width:100%;
            display: flex;
            height:90px;
            align-items: center;
            border-bottom:1px solid #eee;
            .ipt{
                flex: 1;
                // height:45px;
                .active{
                   border:2px solid red
                }
               input{
                    padding-bottom: 2px;
                    width:94%;
                    height:45px;
                    border: 2px solid #aaa;
                    border-radius:10px;
                    color:#aaa;
                    padding-left:20px;
                    font-size: 32px;
               }
            }
            .reat{
                margin: 0px 5px;
                width:52px;
                height:40px;
                color:#666;
                background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADIBAMAAABfdrOtAAAAMFBMVEUAAACKioqKioqKioqJiYmHh4eKioqKioqLi4uPj4+JiYmJiYmJiYmKioqKioqKioogVRG9AAAAD3RSTlMAYPAwoCDC4EAQgHBQkLBFlOT3AAABbElEQVR42u3azUkDcRCG8QmbBD9A7WCFFBA7UAI5ZzvQEuwgdqB48GwJliA2khZ0USMojMvfy44XD/IOhDzP8b0Mv032tvavRrN2buqe3P3ItA2868W01d7V3sRRAJE/r9pL9yZs4MojEeKPYdVA1mEVQT7CKoHEP5cIEt9FIECAAAECBEgXECBAgAABAqQLCBAgQIAA2VbIa1hFkLPeCAQIECBAgAARdJoA2Z0mQO4SILZKgIwyIMMEiJ0nQGyVALGlEhJ/9wtTtu+lxpQNE56WjcuRr7CJjjybtMNy5DhsoiOXv+cNfFw/R95M2kE58mnS9sJHW6IqLz2YtGX4NEzUohxpT0zZtZcmpmzsCZQdz6AsMii3GZRqmkGpMygDhwKlHxQoUKBAgQIFCpT+CgUKFChQoECBAiWsUKBAgQIFChQoUPrrRlPew6qiNGEVUa5MWS09EimNSauFP3ykTExcXV5GcdVsPbe/+wbf1d0H6qwMXQAAAABJRU5ErkJggg) center center no-repeat;
                background-size: 36px;
            }
            .sousuo{
                width:90px;
                color:#666;
                font-size:30px;
            }
        }
    }
</style>
