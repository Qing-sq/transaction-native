import { observable,action } from "mobx";

class Bar{
    @observable barColor = '#fff';
    @action
    changeColor = (color)=>{
        this.barColor = color
    }
}

export default new Bar()