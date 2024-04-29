//引入Vue
import Vue from "vue";
//引入App
import App from './App';

//关闭Vue的生产提示
Vue.config.productionTip = false;

new Vue({
    el:'#app',
    render(createElement) {
        return createElement('div', [
            createElement('p', 'Count: ' + this.count),
            createElement('button', {
                on: {
                    click: this.increment
                }
            }, 'Increment')
        ]);
    }
});
