import Utils from "../modules/Utils";
import Data from "./Data";

class ViewSkills {
    $items;
    init() {
        this.initUI();
    }

    initUI() {
        this.$items = document.querySelector('.view-skills .items');
        Utils.removeAllChildNodes(this.$items);
        let html = '';
        Data.skillsInfo.forEach((item) => {
            html += `<li class="item">
                <div class="name">${item.name}</div>
                <div>
                ${this.makeTags(item.tags)}
                </div>
            </li>`
        })
        this.$items.innerHTML = html;

    }

    makeTags(arr) {
        let r = '';
        arr.forEach((item) => {
            r += `<span class="btn-tag">${item}</span>`;
        })
        return r;
    }
}

export default new ViewSkills();