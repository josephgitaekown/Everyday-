// Scriptable · 일무따 복습 노트: small rounded-square widget
// 내 GitHub Pages URL이 달라지면 아래 주소만 수정해 주세요.
const APP_URL='https://josephgitaekown.github.io/mainichi-japanese/';
const lessons=[['명사 반말','名詞'],['명사 정중형','ですか'],['누구의 것?','だれの'],['부정 표현','じゃありません'],['사람 묻기','だれ'],['정중한 질문','どちら'],['사물 묻기','なに'],['위치 묻기','どこ'],['명사 과거형','だった'],['명사 과거 정중형','でした'],['な형용사','有名な'],['な형용사 정중형','親切です'],['な형용사 과거','上手だった'],['な형용사 정중 과거','残念でした'],['い형용사','いい'],['い형용사 정중형','暑いですね'],['い형용사 과거','おいしかった'],['い형용사 과거 정중','面白かったです']];
const days=Math.floor((Date.now()-new Date(new Date().getFullYear(),0,1).getTime())/86400000);let n=days%60+1;let x=lessons[n-1]||['책과 함께 복습','今日の復習'];
let w=new ListWidget();w.backgroundColor=new Color('#f4ecd9');w.cornerRadius=24;w.url=APP_URL;w.setPadding(16,16,15,16);
let top=w.addText('にほんご  ·  REVIEW');top.font=Font.boldSystemFont(10);top.textColor=new Color('#665948');w.addSpacer(8);
let nLabel=w.addText('LESSON '+String(n).padStart(2,'0'));nLabel.font=Font.boldSystemFont(12);nLabel.textColor=new Color('#bf6044');w.addSpacer(5);
let jp=w.addText(x[1]);jp.font=Font.boldSystemFont(27);jp.textColor=new Color('#29241f');jp.lineLimit=1;w.addSpacer(4);
let kr=w.addText(x[0]);kr.font=Font.systemFont(12);kr.textColor=new Color('#675e54');kr.lineLimit=2;w.addSpacer();let foot=w.addText('✎ 오늘의 복습 열기  ↗');foot.font=Font.boldSystemFont(10);foot.textColor=new Color('#bf6044');
if(config.runsInWidget)Script.setWidget(w);else await w.presentSmall();Script.complete();