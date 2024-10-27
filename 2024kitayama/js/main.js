if (window.matchMedia('(min-width: 501px)').matches) {
    //PCだけ
    window.onload = function() {
        luxy.init({
            wrapperSpeed: 0.14
        });
    }
}

//交差する監視対象の要素取得
const arrstr = "header img, #about .detail, #about .large, #event-info .wrapper, .heading h2";
const elements = document.querySelectorAll(arrstr);
console.log(elements);

const options = {
    root: null,//交差される側の要素。null・初期状態ではviewportが指定される。初期状態では監視対象がディスプレイの範囲に入ることでイベントを発火することになる。
    rootMargin: "0px",//rootで選択した要素から交差範囲を調整するプロパティ。拡大した場合はrootよりも直前でイベントを発火することもできる。
    threshold: 0//関数を実行するタイミングを指定する。監視対象が完全に見えている状態が1.0。
}

//IntersectionObderverオブジェクトの生成
const observer = new IntersectionObserver(callback, options);

//監視対象の指定
elements.forEach((element)=>{
    observer.observe(element);
});

//コールバック関数
function callback(entries){
    entries.forEach((entry) =>{
        console.log('要素が画面内に入りました。')

        if(entry.isIntersecting){
            console.log('class : move 付与');
            entry.target.classList.add("move");
            observer.unobserve(entry.target);
        }
    })
}