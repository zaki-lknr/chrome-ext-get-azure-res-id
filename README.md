# chrome-ext-get-azure-res-id

ブラウザで開いているAzureリソースのリソースIDをワンクリック(は無理なので2クリック)でクリップボードにコピーする拡張。  
現状「コンテキストメニューを開くページ」の制限がかけられていないため、全てのサイトで有効。

内部処理的には、開いてるページのURLを取り出し、`/`で分解して5～13番目の項目を`/`で再結合してリソースIDを生成している。(see `buri-copy.js`)
