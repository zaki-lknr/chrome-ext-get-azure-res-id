# buri : bring u resource id

ブラウザで開いているAzureリソースのリソースIDをワンクリック(は無理なので2クリック)でクリップボードにコピーする拡張。  

内部処理的には、開いてるページのURLを取り出し、`/`で分解して5～13番目の項目を`/`で再結合してリソースIDを生成している。(see `buri-copy.js`)

言い出しっぺ  
<https://twitter.com/nnstt1/status/1701894190442160165>
