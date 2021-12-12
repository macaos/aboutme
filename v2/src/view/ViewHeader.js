class ViewHeader {
    $wrapper;
    $logo;
    $subTit;
    yOffset
    init() {
        this.$wrapper = document.querySelector('#wrapper');
        this.$logo = document.querySelector('.logo');
        this.$subTit = document.querySelector('.sub-tit');
        document.addEventListener('scroll', () => {
            console.log(this.$wrapper.scrollTop)
        })
        window.addEventListener('scroll', () => {
            this.yOffset = window.pageYOffset;
            // console.log('window.pageYOffset', window.pageYOffset)
            this.logoPosY();
        });
    }
    logoPosY() {
        if (this.yOffset < 120) {
            const ratio1 = 1 - this.yOffset / 120;
            this.$logo.style.opacity = ratio1
            const ratio2 = 1 - this.yOffset / 90;
            this.$subTit.style.opacity = ratio2
        } else {
            this.$logo.style.opacity = 0;
            this.$subTit.style.opacity = 0;
            // this.$logo.style.transform = 'translateY(-60)';
        }

    }
}

export default new ViewHeader();