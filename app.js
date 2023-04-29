const hunter = {
    hp: 150,
    prime: 'sparks',
    secondary: 'codvel',
    weaponInHeands:'sparks',
    pos: { posX: 0, posY: 0 },
    armor: 25,
        ///WRONG
        // showPosition() {
        //     let totalPosition = {
        //         posX : 0,
        //         posY : 0,
        //     }
        //     this.pos = totalPosition;
        //     return this;
        // },


        ///WRONG
        // showPosition(x,y) {
        //     let totalPosition = {
        //         posX : 0,
        //         posY : 0,
        //     }
        //     if (x === 'x') {
        //         return totalPosition.posX;
        //     } if (y === 'y') {
        //         return totalPosition.posY;
        //     } else {
        //         return totalPosition;
        //     }
             
        // },
        calculateDamage(damage) {
            let damageWithArmor = damage - this.armor ;
            return damageWithArmor;
        },
        getPosition() {
           
        // console.log( 'showposition ', {x: this.pos.posX, y: this.pos.posY });
        return { x: this.pos.posX, y: this.pos.posY };
    },
    getDamage(damage) {
        let damageAfterArmor =  this.calculateDamage(damage);
        console.log(damageAfterArmor);
        let damageOnDeth = this.hp - damageAfterArmor;
        if(damageOnDeth <= 0) {
            this.cry();
            this.hp = 0;
        } else {
            this.hp = damageOnDeth;
            this.cry();
        }
        return this;
    },
    heal(heal = 90) {
        let hpAfterHeal = this.hp += heal;
        if (hpAfterHeal > 150) {
            this.hp = 150;
        } else {
            this.hp = hpAfterHeal;
        }
        return this;
    },
    switchWeapon() {
        if(this.weaponInHeands === 'sparks') {
            this.weaponInHeands = this.secondary;
        } else {
            this.weaponInHeands = this.prime;
        }
        return this;
    },
    changePosition(x,y) {
        this.pos.posX = x;
        this.pos.posY = y;
        return this;
    },
    cry() {
        console.log('AAaaaAAaaaA');
    },
    drawerHuntr(div) {
        // let takeLink = drawer.drawGameArea();
        console.log(div);
        let divHunter = document.createElement('div');
        divHunter.style.height = '30px';
        divHunter.style.width = '30px';
        divHunter.style.border = '1px solid red';
        divHunter.id = 'hunter';
        console.log(divHunter);
        
        // takeLink.append(hunter.drawerHuntr());
        // return divHunter;
        // drawer.drawGameArea();
        
    },
}
hunter.getDamage(150);
// console.log( hunter.getPosition().x)



const drawer = {
    linkDrawGameArea: null,
    drawGameArea() {
        let div = document.createElement('div');
        document.querySelector('body').prepend(div);
        div.style.height = '1000px';
        div.style.width = '1000px';
        div.style.border = '2px solid black';
        div.id = 'test';
        this.linkDrawGameArea = div;
        console.log('linkDrawGameArea', div);
        return div;
    },
    // linkDrawGameArea: this.drawGameArea, 
}
drawer.drawGameArea();
hunter.drawerHuntr();
// drawer.drawGameArea();
// hunter.drawerHuntr()
// console.log(drawer.linkDrawGameArea)
// console.log(drawer.drawGameArea().hunter.drawerHuntr());