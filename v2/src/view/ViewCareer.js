import Utils from "../modules/Utils";
import Data from "./Data";

class ViewCareer {
    $viewCareer;
    $items;

    constructor() {

    }

    init() {
        // alert(tyoeof this.itemTemplete)
        this.initUI();
    }

    initUI() {
        this.$viewCareer = document.querySelector('.view-career');
        this.$items = document.querySelector('.view-career .items');
        Utils.removeAllChildNodes(this.$items);
        let html = '';
        Data.careerInfo.forEach((item, i) => {
            let tags = '';
            item.tags.forEach((tagItem) => {
                tags += `<span class="btn-tag">${tagItem}</span>`;
            })
            html += `<li class="item">
                        <div class="name">
                            <div>${item.name}</div>
                        </div>
                        <div class="position">${item.position} 
                            ${item.part && '<span class="part"> / ' + item.part + '</span>'}
                            <span class="year">${item.period}</span>
                        </div>
                        <div class="skill">
                            ${tags}
                        </div>
                    </li>`;
        })
        this.$items.innerHTML = html;
    }
}

export default new ViewCareer();