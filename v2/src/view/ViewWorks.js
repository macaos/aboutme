import Utils from "../modules/Utils";
import Data from "./Data";

class ViewWorks {
    $items;
    init() {
        this.initUI();
    }

    initUI() {
        this.$items = document.querySelector('.view-works .items');
        Utils.removeAllChildNodes(this.$items);
        let html = '';
        Data.worksInfo.forEach((item) => {
            html += `<li class="item">
                        <div class="year">${item.name}</div>
                        <ul class="group-year">
                            ${this.makeMonthItem(item.items)}
                        </ul>
                    </li>`;
        })
        this.$items.innerHTML = html;
    }

    makeMonthItem(arr) {
        let r = '';
        arr.forEach((item) => {
            r += `<li class="group-month">
                    <div class="month">${item.month}</div>
                    ${this.makeCategoryItem(item.category)}
                    
                    <div class="title">${item.name}</div>
                </li>`;
        })
        return r;
    }

    makeCategoryItem(arr) {
        let r = '';
        arr.forEach((item) => {
            r += `<span class="btn-tag work ko">${item}</span>`
        });
        return r;
    }
}

export default new ViewWorks();