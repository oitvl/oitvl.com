const customOverlayImages = ["", "", ""];
let customCurrentIndex = 0;
const customOverlay = document.getElementById("customOverlay");

function customShowImage(index) {
  customOverlay.src = customOverlayImages[index];
}

function customNextImage() {
  customCurrentIndex = (customCurrentIndex + 1) % customOverlayImages.length;
  customShowImage(customCurrentIndex);
}

function customPrevImage() {
  customCurrentIndex = (customCurrentIndex - 1 + customOverlayImages.length) % customOverlayImages.length;
  customShowImage(customCurrentIndex);
}

const descriptions = [
  "運営班では部活動内の班のスケジュール調整や部内のイベントの\nスケジュール、部活動で使用しているDiscordのサーバー管理や会\n議やライブの情報をまとめているnotionのシステムの管理を行\nなっています。他の班とは違い、何かを作ったり見せたりするよ\nうな班ではないです。ですが、制作ができるような環境を作った\nりライブの進行をスムーズに行くような活動をしてます！また、\n部活動の交流の一環として年に一回キャンプを行っていたり、部\n内LT会を行ったしします！それらの計画を運営班では立てたり当\n日の進行を重なってます！一緒に部活動の運営をしましょう！",
  "部の活動やイベント情報を写真付きで外部に発信する重要な役割\nを担っています。特に、ライブでは事前の告知から開始・終了時\n間の告知までを丁寧に行い、スムーズな運営をサポートします。\nまた、各班の紹介やライブの制作過程など、充実したコンテンツ\nをお届けするために部誌の制作もしています。SNSでは、普段の\n活動や部員が制作した作品等も一部公開し、VL研に所属していな\nい方にも部の雰囲気がわかるようにしています。広報班は、サー\nクルの活動を広めることで、多くの人々にサークルの魅力を伝え\nることに全力を尽くしています。是非、HP内のリンクからVL研\nのSNSにアクセスしてみてください！",
  "デザイン班ではVL研のデザイン全般を行っています。各ライ\nブのメインビジュアル作成やパンフレットデザイン、VRワー\nルドのデザインやSNSへの投稿用画像の作成等イラストのみに\nとどまらず様々な活動を行っています。デザイン班だからとい\nって絵ばかり描くのではなく、仕事用途に応じて必要なスキル\nが変わってくるためAdobe illustratorやCLIP STUDIO PAINTな\nど個人によって使用ソフトも異なります。\n他の班とは違い、様々な事にチャレンジ出来る環境があるのも\nデザイン班の魅力の1つです！私達と一緒にデザイン班で部活\nを支えていきませんか？",
  "音楽班の仕事は主にcover制作になります。作曲者も数名在籍し\nていますので作曲も（作曲講座も）行っております。基本的に\ncover制作はライブに向けての活動になります。もちろん依頼が\nあればそれ以外でも制作します。期間はライブ制作開始から1カ\n月程度になっています。個人差はあれど、1曲あたり36時間もあ\nれば完成します。他の制作と比べると軽い部類と言えます。\ncover制作の流れは【midiデータ作成】【歌詞打ち込み】【MIX】\nとなっています。興味を持って頂けたら、是非、当部活に参加し\nて下さい。ご拝読ありがとうございました。",

  "映像編集班では、ライブを盛り上げるための背景映像や、ライブ\n開始前に流す待機映像の制作を担当しています。背景映像では、\nキャラクターや多彩なエフェクト、演出を駆使してライブを華や\nかに盛り上げます。待機映像では、注意案内やライブ告知、部員\n募集などを30秒程度の短い動画にまとめ、細かな工夫を凝らして\nいます。編集にはAfterEffectsやAviUtlなどのソフトを使用し、\n個人のペースでスキルを磨けます。交流会では、作品鑑賞や初心\n者講座、もくもく作業会などを開催し、楽しく学べる場を提供し\nています。",

  "モーション班では、キャラクターが踊るライブ映像の制作、\nモーション(振り付け)の作成を行っています。モーション班での\n主な活動は以下の通りです。\n【キャラクターの踊るライブ映像の制作】ミクさんなどのキャラ\nクターが踊るライブ映像の制作を行っています。ARライブ用の動\n画はMMD、VRライブ用の動画はUnity、blenderというソフト使\nって作成しています。推しを好きなモデル、曲を使って躍らせる\n動画を作ることができるので、とても楽しいです。\n【モーションの作成、編集】キャラクターの踊りの振り付け\n(モーション)の作成、編集を行っています。モーションの作成は、\nモーションキャプチャーという装置を使って、作成しています。\nモーションキャプチャーを一般で使える機会は中々無いので、貴\n重な体験ができます。下の画像はBlenderで、収録したモーショ\nンデータを編集しているときのものです。",

  "3DCG班は主に北山祭、桜春祭に向けて活動を行っています。\n学祭での活動は主に2種類で、1つはVRライブで使用する3D\nワールドの作成、もう一つがオリジナルのキャラクターモデルの\n作成です。3Dワールドの作成は毎回のテーマに合わせたワールド\nを班員全員で制作しています。直近の桜春祭では「電子空間」を\nテーマにした少しデジタルなワールドを作成しました。本年度で\nも新たなテーマに即してワールドを制作しています。恒常的に班\n員で3Dモデリングを行う時間を作ったり、完成した作品を共有\nしているので興味があれば見に来てください！",

  "システム実装班では、VRライブの制作をメインに行っています。\n内容としては、ワールドの実装、エフェクト等を用いた演出、ラ\nイブシステムの作成を担当していて、クオリティ向上を目的に普\n段から勉強会や小規模ワールド制作に取り組んでいます。また、\nワールドを実装するためには他班とのコミュニケーションが大切\nとなってくるので、集団制作の経験を積むことができます。\nclusterにてVRライブの一般公開も行われているので、是非見に\n来てください！",
];
const teamImages = [
  ["", ""], // 運営班
  ["NewHomepage/kouhou_1.png", "NewHomepage/kouhou_2.png"], // 広報班
  ["NewHomepage/dezain_2.png", "NewHomepage/dezain_1.png"], // デザイン班
  ["NewHomepage/music_1.png", "NewHomepage/music_2.png"],   // 音楽班
  ["NewHomepage/movie_1.png", ""],   // 映像編集班
  ["NewHomepage/motion_1.png", "NewHomepage/motion_2.png"], // モーション班
  ["NewHomepage/3DCG_team_1.png", "NewHomepage/3DCG_team_2.png"],      // 3DCG班
  ["NewHomepage/system.png", ""]   // システム実装班
];

function selectTeam(index) {
  let teams = document.querySelectorAll('.team');
  teams.forEach(team => team.classList.remove('selected'));
  teams[index].classList.add('selected');

  document.getElementById('description').innerText = descriptions[index];

  // 画像を変更
  document.getElementById('team-image1').src = teamImages[index][0];
  document.getElementById('team-image2').src = teamImages[index][1];

  currentIndex = index;
}


function moveSelection(direction) {
  let teams = document.querySelectorAll('.team');
  let newIndex = (currentIndex + direction + teams.length) % teams.length;
  selectTeam(newIndex);
}

// 初期状態の設定
document.addEventListener("DOMContentLoaded", function () {
  selectTeam(0); // 最初に「広報班」を選択
});
const slides = document.querySelectorAll('.slide');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
let currentSlide = 0;

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove('active');
    if (i === index) {
      slide.classList.add('active');
    }
  });
}

prevBtn.addEventListener('click', () => {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  showSlide(currentSlide);
});

nextBtn.addEventListener('click', () => {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
});

// ページ読み込み時に最初のスライドを表示
document.addEventListener('DOMContentLoaded', function () {
  showSlide(currentSlide);
});
