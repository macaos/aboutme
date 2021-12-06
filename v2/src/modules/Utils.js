class Utils {

    /**
     * 자식 노드를 전부 삭제
     * @param {Element} el HTML Element
     */
    removeAllChildNodes(el) {
        while (el.firstChild) {
            el.removeChild(el.firstChild);
        }
    }
}

export default new Utils();